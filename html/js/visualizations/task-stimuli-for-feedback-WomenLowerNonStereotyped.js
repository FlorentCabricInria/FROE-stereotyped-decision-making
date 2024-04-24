/* eslint-disable */let posX = [568.6810569737894 , 268.1109477126755 , 391.6875405775466 , 288.61496459196434 , 460.812279705711 , 373.6216488795456 ,
  451.58312561597336 , 610.1726486750082 , 203.85129796596527 , 550 , 236.98794871169048 , 261.7787621363155 , 547.516544665867 ,
  574.9064553446289 , 600.267494978694 , 630.4580511400769 , 420 , 388.92436705065137 , 220 , 633.938791430464 , 622.6702740421755 ,
  283.3699571533981 , 260.58899871113363 , 430.3455797341415 , 371.5902249580465 , 424.35747435630356 , 270.12082595392803 , 273.7790428043915 ,
  570.5714540014341 , 538.7865735722019]
d3.csv('./html/js/visualizations/women-lower-v3.csv').then((data) => {
  const storedData = structuredClone(data);

  let random2 = new Math.seedrandom(seed);
  let taskRandomLine1 = new Math.seedrandom(seed);

  let taskRandomLine2 = new Math.seedrandom(seed);
  let taskRandomGhost = new Math.seedrandom(seed);

  let id = 0;
  /** PREPARATION FOR REGRESSION * */
  data.forEach((d) => {
    let person = {
      gender_w: parseInt(d.gender_w),
      performance_f1: parseInt(d.performance_f1) === 2 ? 1 : 0,
      performance_f2: parseInt(d.performance_f2) === 3 ? 1 : 0,
      grade_group_f4: parseInt(d.grade_group_f4) === 4 ? 1 : 0,
      grade_group_f5: parseInt(d.grade_group_f5) === 5 ? 1 : 0,
      grade_group: parseInt(d.grade_group),
      total_comp: parseInt(d.total_comp),
    };
    dfPeopleTask[id] = person;
    id++;
    /** init coef percentages **/
    if(d.performance == 1){
      coefLow = d.raise_perf_perc;
    }
    else if(d.performance == 2){
      coefMid = d.raise_perf_perc;
    }
    else if(d.performance == 3){
      coefHigh = d.raise_perf_perc;
    }
  });

  // Create the container SVG.
  const svg = d3.select('#final-decision-feedback-chart-WomenLowerNonStereotyped')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;width: 70%;float: left;padding: 20px');


  //  var a = d3.group(data, d => d.gender)
  svg.append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y2));

  svg.append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
      if (x == 1) return "Grade group  A";
      else if (x == 2)return "Grade group  B";
      else if (x == 3)return "Grade group  C ";
    }));

  //

  const color = d3.scaleOrdinal()
    .domain(['1', '2'])
    .range(['#3EBF30','#BFBD30']);

  const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
  /**
         *          #########################################################
         *          ########### LEGEND
         *          #########################################################
         */
  svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
    .style('fill', '#3EBF30');
  svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
    .style('fill', '#BFBD30');
  svg.append('text').attr('x', width - 80).attr('y', 135).text('Men')
    .style('font-size', '1em')
    .attr('alignment-baseline', 'middle');
  svg.append('text').attr('x', width - 80).attr('y', 165).text('Women')
    .style('font-size', '1em')
    .attr('alignment-baseline', 'middle');
  svg.append('circle').attr('cx', width - 100).attr('cy', 190).attr('r', 2.75 *coefSize)
  svg.append('text').attr('x', width - 80).attr('y', 195).text('Low')
    .style('font-size', '1em')
    .attr('alignment-baseline', 'middle');
  svg.append('circle').attr('cx', width - 100).attr('cy', 220).attr('r', 3.75 *coefSize);
  svg.append('text').attr('x', width - 80).attr('y', 225).text('Medium')
    .style('font-size', '1em')
    .attr('alignment-baseline', 'middle');
  svg.append('circle').attr('cx', width - 100).attr('cy', 250).attr('r', 4.75 *coefSize);
  svg.append('text').attr('x', width - 80).attr('y', 255).text('High')
    .style('font-size', '1em')
    .attr('alignment-baseline', 'middle');

  /** CREATE SALARIES MARK * */
  const theCircles = svg.append('g').selectAll('circle')
    .data(data)
    .join(
      (enter) => enter
        .append('circle')
        .attr('id', (d) => d.key)
        .attr('cx', (d) => (posX[parseInt(d.key)-1]))
        .attr('cy', (d, i) => {
         const new_salary = (((parseInt( measurements['valueEquity']) / 15000) * d.sugg_raise) + ((measurements['valueNotEquity'] / 15000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
          dfPeopleTask[parseInt(d.key) - 1].total_comp = new_salary;
          const ys = y2(new_salary);
          return y2(new_salary);
        })
        .style('fill', (d) => color(d.gender))
        .attr('r', (d) =>
          (parseInt(d.performance) + 1.75) * coefSize,
        )
        .attr('class', (d) => `dot ${d.gender}`),
    );


});