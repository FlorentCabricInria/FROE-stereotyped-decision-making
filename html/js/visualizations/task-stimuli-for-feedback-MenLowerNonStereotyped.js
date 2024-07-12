/* eslint-disable */
let posX = [233.851298 , 220 , 236.9879487 , 204.5869 , 261.7787621 , 255 , 290 , 200 , 230 , 288.6149646 ,
  390, 373.6216489, 388.9243671 , 460 , 410.012 , 424.3574744 , 440 , 440 , 460.8122797 , 379.5464 ,
  640, 550, 568.681057, 627 , 590 , 600.267495 , 610.1726487 , 575 , 630.4580511 , 633.9387914]
d3.csv('./html/js/visualizations/c.csv').then((data) => {
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
  const svg = d3.select('#final-decision-feedback-chart-MenLowerNonStereotyped')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);


  //  var a = d3.group(data, d => d.gender)
  svg.append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y2).tickArguments([11]).tickFormat((x) => { return x/1000 + "k";
    }));

  svg.append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
      if (x == 1) return "grade group  A";
      else if (x == 2)return "grade group  B";
      else if (x == 3)return "grade group  C ";
    }));

  //

  const color = d3.scaleOrdinal()
    .domain(['1', '2'])
    .range(['#AA9000','#00AA5A']);
  const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
  /**
         *          #########################################################
         *          ########### LEGEND
         *          #########################################################
         */
  svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
    .style('fill',  '#00AA5A');
  svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
    .style('fill', '#AA9000');
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
         const new_salary = (((parseInt( measurements['valueEquity']) / valuemax) * d.sugg_raise) + ((measurements['valueNotEquity'] / valuemax) * d.sugg_raise_perf) + parseFloat(d.total_comp));
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