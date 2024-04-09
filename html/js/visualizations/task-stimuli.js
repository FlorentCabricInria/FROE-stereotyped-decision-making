/* eslint-disable */
console.log('Hey I am here');
/*
const taskID = 'scatterplot2';
const loc = 'belowStimulus';

const coefSize = 2.5;
const perfVisual = 'size';
const dfPeople = [];
const seed = '45457';*/
var randomDots = new Math.seedrandom(seed);
// if(nbElem=="30"){
//   var data= structuredClone(data30)
let y2 = d3.scaleLinear()
  // .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([28000 , 10000])
  .range([0 + marginBottom, height - marginTop]);

var btnFinal =  document.getElementById('btn_test-decision-making-study_9')
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
    dfPeople[id] = person;
    id++;
  });

  // Create the container SVG.
  const svg = d3.select('#svg-stimuli')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;width: 70%;float: left;padding: 20px');


  //  var a = d3.group(data, d => d.gender)
  svg.append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  svg.append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
      if (x == 1 || x == 2 || x == 3) return "Grade Group" + (x+2);
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

  /**
         #########################################################
         CREAT GHOST DOTS
         #########################################################
         * */

  svg.append('g')
    .selectAll('circle')
    .data(data)
    .join(
      (enter) => enter
        .append('circle')
        .attr('id', (d) => d.key)
        .attr('cx', (d) => (x(d.grade_group - 2) + (taskRandomGhost.double() * (100)) - 50))
        .attr('cy', (d) => y2(d.total_comp)),
    )
    .attr('r', (d) => (parseInt(d.performance) + 1.75) * coefSize)
    .style('fill', '#AAAAAA88');

  /**
   * #########################################################
   * #########################################################
   * CREATE GHOST LINE
   * #########################################################
   * #########################################################
   **/
  svg.append('g')
    .selectAll('line')
    .data(data)
    .join(
      (enter) => enter
        .append('line')
        .attr('x1', (d) => (x(d.grade_group - 2) + (taskRandomLine1.double() * (100)) - 50))
        .attr('x2', (d) => (x(d.grade_group - 2) + (taskRandomLine2.double() * (100)) - 50))
        .attr('y1', (d) => y2(d.total_comp))
        .attr('y2', (d) => {
          const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
          const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_gender);
          return y2(Math.max(perf2, gp));
        }),
    )
    .style('stroke', '#AAAAAAAA')
    .style('stroke-linecap', 'round')
    .style('stroke-width', (d) => `${parseInt(3)}px`);

  /** CREATE SALARIES MARK * */
  const theCircles = svg.append('g').selectAll('circle')
    .data(data)
    .join(
      (enter) => enter
        .append('circle')
        .attr('id', (d) => d.key)
        .attr('cx', (d) => (x(d.grade_group - 2) + (randomDots.double() * (100)) - 50))
        .attr('cy', (d, i) => {
          const valuePE = parseInt(d3.select('#taskPayEquity').node().value);
          const valueNE = parseInt(d3.select('#taskNotEquity ').node().value);
          const new_salary = (((valuePE / 15000) * d.sugg_raise_gender) + ((valueNE / 15000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
          dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
          const ys = y2(new_salary);
          return y2(new_salary);
        })
        .style('fill', (d) => color(d.gender))
        .attr('r', (d) =>
          (parseInt(d.performance) + 1.75) * coefSize,
        )
        .attr('class', (d) => `dot ${d.gender}`),
    );

  const sliderEquity = document.getElementById('taskPayEquity');
  const sliderAlt = document.getElementById('taskNotEquity');
  sliderEquity.addEventListener('input', maxReachedTask, false);

  sliderAlt.addEventListener('input', maxReachedTask, false);
  function maxReachedTask(e) {

    var btnFinal =  document.getElementById('btn_test-decision-making-study_9')
    PEslider = document.getElementById('taskPayEquity');
    ALTslider = document.getElementById('taskNotEquity');
    const sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let
      target;
    // console.log(sum)
    const max = 15000;
    e.currentTarget.innerHTML = e.currentTarget.value;
    if (sum >= max) {
      target = e.target;
      target.value -= (sum - max);
      // next line is just for demonstrational purposes
      // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);

      document.getElementById('taskPEoutput').innerHTML = parseInt(PEslider.value);
      document.getElementById('taskALToutput').innerHTML = parseInt(ALTslider.value);
      document.getElementById('taskTextEquity').innerHTML = parseInt(PEslider.value);
      PEslider.innerHTML = parseInt(PEslider.value);
      ALTslider.innerHTML = parseInt(ALTslider);
      document.getElementById('taskTextAlternative').innerHTML = parseInt(ALTslider.value);
      document.getElementById('taskTextRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));
      changeSalaryTask();
      calculateNewPayGapTask();
      btnFinal.disabled = false;
      btnFinal.innerHTML = "Click, when you want to validate the decision!";
      btnFinal.style.backgroundColor = "rgb(69,241,69)"

      btnFinal.style.color = "rgba(0,0,0,0.9)"
      e.preventDefault();
      return false;
    }
    else {

      btnFinal.disabled = true;
      btnFinal.innerHTML = "You still have money to allocate!";
      btnFinal.style.backgroundColor = "rgba(115,115,115,0.9)"
      btnFinal.style.color = "rgba(255,255,255,0.9)"
    }
    // next line is just for demonstrational purposes
    // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
    document.getElementById('taskPEoutput').innerHTML = parseInt(PEslider.value);
    document.getElementById('taskALToutput').innerHTML = parseInt(ALTslider.value);
    document.getElementById('taskTextEquity').innerHTML = parseInt(PEslider.value);
    document.getElementById('taskTextAlternative').innerHTML = parseInt(ALTslider.value);
    document.getElementById('taskTextRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));

    changeSalaryTask();
    calculateNewPayGapTask();

    /*    document.getElementById('total').innerHTML = parseInt(document.getElementById("taskPayE").value) + parseInt(document.getElementById("taskNotEquity").value); */
    return true;
  }

  function changeSalaryTask() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
    // .data(data)
      .attr('cy', (d, i) => {
        // console.log(equityslider)
        //  console.log(taskNotEquityslider)
        const valuePE = parseInt(d3.select('#taskPayEquity').node().value);
        const valueNE = parseInt(d3.select('#taskNotEquity ').node().value);
        const new_salary = (((valuePE / 15000) * d.sugg_raise_gender) + ((valueNE / 15000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        return y2(new_salary);
      });
  }

});
function calculateNewPayGapTask() {
  let GPG = ((Math.exp(lm('log(total_comp) ~ gender_w + performance_f1 + performance_f2 + grade_group_f4 + grade_group_f5', dfPeople).coefficients[1]) - 1) * 100.0).toFixed(2);
  if (GPG > 0) {
    d3.select('#taskCurrentPayGap').text(`${GPG}% (men lower)`);
  } else {
    d3.select('#taskCurrentPayGap').text(`${GPG * -1}% (women lower)`);
  }
}