/* eslint-disable */
console.log('Hey I am here');
var randomDots = new Math.seedrandom(seed);
let coefLow;
let coefMid;
let coefHigh;
let y2 = d3.scaleLinear()
  .domain([28000 , 10000])
  .range([0 + marginBottom, height - marginTop]);
let btnFinal =  document.getElementById('btn_test-decision-making-study_8')
const dfPeopleTask = [];
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

  let posX = [568.6810569737894 , 268.1109477126755 , 391.6875405775466 , 288.61496459196434 , 460.812279705711 , 373.6216488795456 ,
    451.58312561597336 , 610.1726486750082 , 203.85129796596527 , 550 , 236.98794871169048 , 261.7787621363155 , 547.516544665867 ,
    574.9064553446289 , 600.267494978694 , 630.4580511400769 , 420 , 388.92436705065137 , 220 , 633.938791430464 , 622.6702740421755 ,
    283.3699571533981 , 260.58899871113363 , 430.3455797341415 , 371.5902249580465 , 424.35747435630356 , 270.12082595392803 , 273.7790428043915 ,
    570.5714540014341 , 538.7865735722019]
  // Create the container SVG.
  const svg = d3.select('#task-stimuli-men-lower-nonstereotyped')
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
    .range(['#BFBD30', '#3EBF30']);
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
        .attr('class', "ghost")
        .attr("hidden","true")
        .attr('cx', (d) => (posX[parseInt(d.key)-1]))
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
        .attr('x1', (d) => (posX[parseInt(d.key)-1]))
        .attr('x2', (d) => (posX[parseInt(d.key)-1]))
        .attr('y1', (d) => y2(d.total_comp))
        .attr('y2', (d) => {
          const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
          const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise);
          return y2(Math.max(perf2, gp));
        }).attr('class', "ghost")
        .attr("hidden","true")
      ,
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
        // .attr('cx', (d) => (x(d.grade_group - 2) + (randomDots.double() * (100)) - 50))
        .attr('cx', (d) => (posX[parseInt(d.key)-1]))
        .attr('cy', (d, i) => {
          let valuePEtask = parseInt(d3.select('#taskPayEquity').node().value);
          let valueNEtask = parseInt(d3.select('#taskNotEquity ').node().value);
          const new_salary = (((valuePEtask / 15000) * d.sugg_raise) + ((valueNEtask / 15000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
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

  const sliderEquityTask = document.getElementById('taskPayEquity');
  const sliderAltTask = document.getElementById('taskNotEquity');
  sliderEquityTask.addEventListener('input', maxReachedTask, false);

  sliderAltTask.addEventListener('input', maxReachedTask, false);
  sliderEquityTask.addEventListener("mousedown", () => {

  });
  sliderEquityTask.addEventListener("mouseover", () => {
    d3.selectAll('.ghost').attr("hidden",null)
  });
  sliderEquityTask.addEventListener("mouseleave", () => {
    d3.selectAll('.ghost').attr("hidden","true")
  });
  sliderEquityTask.addEventListener("mousemove", () => {
  });
  sliderEquityTask.addEventListener("mouseup", () => {
    changeSalaryTask()
    calculateNewPayGapTask()
  });
  sliderAltTask.addEventListener("mousedown", () => {

  });
  sliderAltTask.addEventListener("mousemove", () => {
  });
  sliderAltTask.addEventListener("mouseup", () => {
    changeSalaryTask()
    calculateNewPayGapTask()
  });
  sliderAltTask.addEventListener("mouseover", () => {
    d3.selectAll('.ghost').attr("hidden",null)
  });
  sliderAltTask.addEventListener("mouseleave", () => {
    d3.selectAll('.ghost').attr("hidden","true")
  });

  let plusBtnEquityTask = document.getElementById('PayEquityPlusBtn');
  let minusBtnEquityTask= document.getElementById('PayEquityMinusBtn');
  let plusBtnNotEquityTask= document.getElementById('NotEquityPlusBtn');
  let minusBtnNotEquityTask= document.getElementById('NotEquityMinusBtn');
 
  plusBtnEquityTask.addEventListener('mouseover', () => {
    d3.selectAll('.ghost ').attr("hidden", null)
  });
  plusBtnEquityTask.addEventListener('mouseleave', () => {
    d3.selectAll('.ghost ').attr("hidden", "true")
  });
  plusBtnEquityTask.addEventListener('click', onPlusEquityTask);
  minusBtnEquityTask.addEventListener('mouseover', () => {
    d3.selectAll('.ghost ').attr("hidden", null)
  });
  minusBtnEquityTask.addEventListener('mouseleave', () => {
    d3.selectAll('.ghost ').attr("hidden", "true")
  });

  minusBtnEquityTask.addEventListener('click', onMinusEquityTask);
  plusBtnNotEquityTask.addEventListener('mouseover', () => {
    d3.selectAll('.ghost ').attr("hidden", null)
  });
  plusBtnNotEquityTask.addEventListener('mouseleave', () => {
    d3.selectAll('.ghost ').attr("hidden", "true")
  });
  plusBtnNotEquityTask.addEventListener('click', onPlusNotEquityTask);


  minusBtnNotEquityTask.addEventListener('mouseover', () => {
    d3.selectAll('.ghost ').attr("hidden", null)
  });
  minusBtnNotEquityTask.addEventListener('mouseleave', () => {
    d3.selectAll('.ghost ').attr("hidden", "true")
  });
  minusBtnNotEquityTask.addEventListener('click', onMinusNotEquityTask);
});
function maxReachedTask(e) {

  var btnFinal =  document.getElementById('btn_test-decision-making-study_8')
  PEslider = document.getElementById('taskPayEquity');
  ALTslider = document.getElementById('taskNotEquity');
  const sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let
    target;
  // console.log(sum)
  const max = 15000;
  //e.currentTarget.innerHTML = e.currentTarget.value;
  if (sum >= max) {
    target = e.target;
    target.value -= (sum - max);
    // next line is just for demonstrational purposes
    // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);

    document.getElementById('taskPEoutput').innerHTML = parseInt(PEslider.value);
    document.getElementById('taskALToutput').innerHTML = parseInt(ALTslider.value);
  //  document.getElementById('taskTextEquity').innerHTML = parseInt(PEslider.value);
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);
   // document.getElementById('taskTextAlternative').innerHTML = parseInt(ALTslider.value);
   // document.getElementById('taskTextRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));
    changeSalaryTask();
    calculateNewPayGapTask();
    btnFinal.disabled = false;
    btnFinal.innerHTML = "Click, when you want to validate the decision!";
    btnFinal.style.backgroundColor = "rgba(69,241,69,0.34)"

    document.getElementById('taskLowPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefLow).toFixed(2);
    document.getElementById('taskMidPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefMid).toFixed(2);
    document.getElementById('taskHighPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefHigh).toFixed(2);

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
  document.getElementById('taskLowPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefLow).toFixed(2);
  document.getElementById('taskMidPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefMid).toFixed(2);
  document.getElementById('taskHighPerf').innerHTML = ((parseInt(ALTslider.value)/15000) * coefHigh).toFixed(2);
  //document.getElementById('taskTextEquity').innerHTML = parseInt(PEslider.value);
 // document.getElementById('taskTextAlternative').innerHTML = parseInt(ALTslider.value);
  //document.getElementById('taskTextRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));

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
      const new_salary = (((valuePE / 15000) * d.sugg_raise) + ((valueNE / 15000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
      dfPeopleTask[parseInt(d.key) - 1].total_comp = new_salary;
      //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
      return y2(new_salary);
    });
}
function calculateNewPayGapTask() {
  let GPG = ((Math.exp(lm('log(total_comp) ~ gender_w + performance_f1 + performance_f2 + grade_group_f4 + grade_group_f5', dfPeopleTask).coefficients[1]) - 1) * 100.0).toFixed(2);
  if (GPG > 0) {
    d3.select('#taskCurrentPayGap').text(`${GPG}% (women lower)`);
  } else {
    d3.select('#taskCurrentPayGap').text(`${GPG * -1}% (men lower)`);
  }
}

function onPlusEquityTask(e){
  document.getElementById("taskPayEquity").value = parseInt(document.getElementById("taskPayEquity").value) +100
  maxReachedTask(e)
}
function onMinusEquityTask(e){
  document.getElementById("taskPayEquity").value = parseInt(document.getElementById("taskPayEquity").value) -100
  maxReachedTask(e)
}
function onPlusNotEquityTask(e){
  document.getElementById("taskNotEquity").value = parseInt(document.getElementById("taskNotEquity").value) +100
  maxReachedTask(e)
}
function onMinusNotEquityTask(e){
  document.getElementById("taskNotEquity").value = parseInt(document.getElementById("taskNotEquity").value) -100
  maxReachedTask(e)
}