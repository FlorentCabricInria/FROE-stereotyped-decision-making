
var random = Math.seedrandom('0.45454');
// var random = seedrandom("0.45454");
var random = new Math.seedrandom('0.45454');
console.log('Hey I am here');
const width = 800;
const height = 400;
const marginTop = 40;
const marginRight = 40;
const marginBottom = 40;
const marginLeft = 75;
const radius = 2;



const x = d3.scaleLinear()
// .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([0, 4])
  .range([marginLeft, width - marginRight]);


const coefSize = 2.5;
const perfVisual = 'size';
const dfPeople = [];
const seed = '45457';
var random = new Math.seedrandom(seed);
const structForModel = [];

let PosXTraining = [
  377.43105697378934 , 610.6109477126755 , 220.4375405775466 , 631.1149645919644 , 289.562279705711 , 202.3716488795456 , 451.58312561597336 ,
  438.9226486750082 , 255 , 242 , 408.2379487116905 , 261.7787621363155 , 376.26654466586695 , 574.9064553446289 , 460.017494978694 ,
  459.2080511400769 , 225 , 388.92436705065137 , 285.40892014970495 , 633.938791430464 , 622.6702740421755 , 600 , 228.58899871113363 ,
  375 , 200.34022495804655 , 424.35747435630356 , 238.12082595392803 , 400 , 594.5714540014341 , 367.53657357220186
]
// if(nbElem=="30"){
//   var data= structuredClone(data30)/*
createSteoreotypedVisualizationWomenLower()
createSteoreotypedVisualizationMenLower()
createnonSteoreotypedVisualizationWomenLower()
createnonSteoreotypedVisualizationMenLower()
function createSteoreotypedVisualizationWomenLower(){
  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    const storedData = structuredClone(data);

    const random2 = new Math.seedrandom(seed);
    const random3 = new Math.seedrandom(seed);

    const random4 = new Math.seedrandom(seed);
    const random5 = new Math.seedrandom(seed);

    let id = 0;
    /** PREPARATION FOR REGRESSION * */
    data.forEach((d) => {
      const person = {
        gender_f2: parseInt(d.gender_w),// special case where men are "1" and women are "2"
        performance_f2: parseInt(d.performance_f1) === 2 ? 1 : 0,
        performance_f3: parseInt(d.performance_f2) === 3 ? 1 : 0,
        grade_group_f4: parseInt(d.grade_group_f4) === 4 ? 1 : 0,
        grade_group_f5: parseInt(d.grade_group_f5) === 5 ? 1 : 0,
        grade_group: parseInt(d.grade_group),
        total_comp: parseInt(d.total_comp),
      };
      dfPeople[id] = person;
      id++;
    });

    // Create the container SVG.
    const svg = d3.select('#chartStereotypedWomenLower')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    let yGenderTestB = d3.scaleLinear()
      // .domain(d3.extent(genderData, d => d.salary)).nice()
      .domain([30000, 15000])
      .range([0 + marginBottom, height - marginTop]);
    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yGenderTestB).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
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
      .range(['#3a33ffFF', '#ff33c9']);

    const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
    /**
     *          #########################################################
     *          ########### LEGEND
     *          #########################################################
     */
    svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
      .style('fill', '#3a33ffFF');
    svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
      .style('fill', '#ff33c9');
    svg.append('text').attr('x', width - 80).attr('y', 130).text('Men')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');
    svg.append('text').attr('x', width - 80).attr('y', 160).text('Women')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

 /*   let PosXTraining = [
      377.43105697378934 , 610.6109477126755 , 220.4375405775466 , 631.1149645919644 , 289.562279705711 , 202.3716488795456 , 451.58312561597336 ,
      438.9226486750082 , 255 , 242 , 408.2379487116905 , 261.7787621363155 , 376.26654466586695 , 574.9064553446289 , 460.017494978694 ,
      459.2080511400769 , 225 , 388.92436705065137 , 285.40892014970495 , 633.938791430464 , 622.6702740421755 , 600 , 228.58899871113363 ,
      375 , 200.34022495804655 , 424.35747435630356 , 238.12082595392803 , 400 , 594.5714540014341 , 367.53657357220186
    ]*/
    /** CREATE SALARIES MARK * */
   svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key + 'gender')
          .attr('cx', (d) => PosXTraining[parseInt(d.key)-1])
          .attr('cy', (d, i) => {
            return yGenderTestB(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              /* if (radios == "size") {
                                      return (d.performance + 2) * coefSize;
                                  } else { */
              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender} gender`),
      );
  });
}
function createSteoreotypedVisualizationMenLower() {
  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    const storedData = structuredClone(data);

    const random2 = new Math.seedrandom(seed);
    const random3 = new Math.seedrandom(seed);

    const random4 = new Math.seedrandom(seed);
    const random5 = new Math.seedrandom(seed);

    let id = 0;
    /** PREPARATION FOR REGRESSION * */
    data.forEach((d) => {
      const person = {
        gender_f2: parseInt(d.gender_m),// special case where men are "1" and women are "2"
        performance_f2: parseInt(d.performance_f1) === 2 ? 1 : 0,
        performance_f3: parseInt(d.performance_f2) === 3 ? 1 : 0,
        grade_group_f4: parseInt(d.grade_group_f4) === 4 ? 1 : 0,
        grade_group_f5: parseInt(d.grade_group_f5) === 5 ? 1 : 0,
        grade_group: parseInt(d.grade_group),
        total_comp: parseInt(d.total_comp),
      };
      dfPeople[id] = person;
      id++;
    });

    // Create the container SVG.
      const svg = d3.select('#chartStereotypedMenLower')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    let yGenderTestK = d3.scaleLinear()
      // .domain(d3.extent(genderData, d => d.salary)).nice()
      .domain([30000, 15000])
      .range([0 + marginBottom, height - marginTop]);
    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yGenderTestK).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
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
      .range(['#ff33c9','#3a33ffFF']);

    const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
    /**
     *          #########################################################
     *          ########### LEGEND
     *          #########################################################
     */
    svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
      .style('fill', '#3a33ffFF');
    svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
      .style('fill', '#ff33c9' );
    svg.append('text').attr('x', width - 80).attr('y', 130).text('Men')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');
    svg.append('text').attr('x', width - 80).attr('y', 160).text('Women')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

    /** CREATE SALARIES MARK * */
    svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key + 'gender')
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('cy', (d, i) => {
            return yGenderTestK(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))
          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender} gender`),
      );
/*
    calculateNewPayGap();

    const sliderEquity = document.getElementById('PayEquity');
    const sliderAlt = document.getElementById('NotEquity');
    sliderEquity.addEventListener('input', maxReached, false);

    sliderAlt.addEventListener('input', maxReached, false);*/
  });

}
function createnonSteoreotypedVisualizationWomenLower(){
  let yGenderTest = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([30000, 15000])
    .range([0 + marginBottom, height - marginTop]);
  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    const storedData = structuredClone(data);

    const random2 = new Math.seedrandom(seed);
    const random3 = new Math.seedrandom(seed);

    const random4 = new Math.seedrandom(seed);
    const random5 = new Math.seedrandom(seed);

    let id = 0;
    /** PREPARATION FOR REGRESSION * */
    data.forEach((d) => {
      const person = {
        gender_f2: parseInt(d.gender_m),// special case where men are "1" and women are "2"
        performance_f2: parseInt(d.performance_f1) === 2 ? 1 : 0,
        performance_f3: parseInt(d.performance_f2) === 3 ? 1 : 0,
        grade_group_f4: parseInt(d.grade_group_f4) === 4 ? 1 : 0,
        grade_group_f5: parseInt(d.grade_group_f5) === 5 ? 1 : 0,
        grade_group: parseInt(d.grade_group),
        total_comp: parseInt(d.total_comp),
      };
      dfPeople[id] = person;
      id++;
    });

    // Create the container SVG.
    const svg = d3.select('#chartNotStereotypedWomenLower')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    let yGenderTestC = d3.scaleLinear()
      // .domain(d3.extent(genderData, d => d.salary)).nice()
      .domain([30000, 15000])
      .range([0 + marginBottom, height - marginTop]);
    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yGenderTestC).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
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
      .range(['#00AA5A','#AA9000']);

    const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
    /**
     *          #########################################################
     *          ########### LEGEND
     *          #########################################################
     */
    svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
      .style('fill', '#00AA5A');
    svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
      .style('fill', '#AA9000');
    svg.append('text').attr('x', width - 80).attr('y', 130).text('Men')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');
    svg.append('text').attr('x', width - 80).attr('y', 160).text('Women')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

    /**
     #########################################################
     CREAT GHOST DOTS
     #########################################################
     * */


    /** CREATE SALARIES MARK * */
    svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key + 'gender')
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('cy', (d, i) => {
            return yGenderTestC(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))
          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender} gender`),
      );
  });

}
function createnonSteoreotypedVisualizationMenLower() {
  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    const storedData = structuredClone(data);

    const random2 = new Math.seedrandom(seed);
    const random3 = new Math.seedrandom(seed);

    const random4 = new Math.seedrandom(seed);
    const random5 = new Math.seedrandom(seed);

    let id = 0;
    /** PREPARATION FOR REGRESSION * */
    data.forEach((d) => {
      const person = {
        gender_f2: parseInt(d.gender_m),// special case where men are "1" and women are "2"
        performance_f2: parseInt(d.performance_f1) === 2 ? 1 : 0,
        performance_f3: parseInt(d.performance_f2) === 3 ? 1 : 0,
        grade_group_f4: parseInt(d.grade_group_f4) === 4 ? 1 : 0,
        grade_group_f5: parseInt(d.grade_group_f5) === 5 ? 1 : 0,
        grade_group: parseInt(d.grade_group),
        total_comp: parseInt(d.total_comp),
      };
      dfPeople[id] = person;
      id++;
    });

    // Create the container SVG.
    const svg = d3.select('#chartNotStereotypedMenLower')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    let yGenderTestA = d3.scaleLinear()
      // .domain(d3.extent(genderData, d => d.salary)).nice()
      .domain([30000, 15000])
      .range([0 + marginBottom, height - marginTop]);

    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yGenderTestA).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
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
      .style('fill', '#00AA5A');
    svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
      .style('fill', '#AA9000');
    svg.append('text').attr('x', width - 80).attr('y', 130).text('Men')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');
    svg.append('text').attr('x', width - 80).attr('y', 160).text('Women')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

    /**
     #########################################################
     CREAT GHOST DOTS
     #########################################################
     * */
    /** CREATE SALARIES MARK * */
    svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key + 'gender')
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('cy', (d, i) => {
            return yGenderTestA(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))
          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender} gender`),
      );
  });
}