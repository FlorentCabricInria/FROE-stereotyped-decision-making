
let forecastBtn = document.getElementById("forecastVisBtn");
let interactionBtn = document.getElementById("interactionVisBtn");
let seeFeatures = document.getElementById("wantToSeeTheFeatures");
seeFeatures.addEventListener('click', displayFeatures, false);
forecastBtn.addEventListener('click', addForecast, false);
interactionBtn.addEventListener('click', addInteraction, false);
console.log('Hey I am here');
let state2 = "first";
var random = new Math.seedrandom(seed);
//createSteoreotypedVisualizationWomenLower()
function changeSalary() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
      // .data(data)
      .attr('cy', (d, i) => {
        let valuePE = parseInt(d3.select('#PayEquity').node().value);
        let valueNE = parseInt(d3.select('#NotEquity ').node().value);
        let new_salary = (((valuePE / 60000) * d.sugg_raise) + ((valueNE / 60000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        return y(new_salary);
      });
  }

function calculateNewPayGap() {
  const GPG = ((Math.exp(lm('log(total_comp) ~ gender_f1 + performance_f1 + performance_f2 + performance_f3 + grade_group_f4 + grade_group_f5', dfPeople).coefficients[1]) - 1) * 100.0).toFixed(2);
  if (GPG > 0) {
   // d3.select('#currentPayGap').text(`${GPG}% (women lower)`);
  } else {
   // d3.select('#currentPayGap').text(`${GPG * -1}% (men lower)`);
  }
}

function maxReached(e) {
  PEslider = document.getElementById('PayEquityTraining2');
  ALTslider = document.getElementById('NotEquityTraining2');
  let sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let    target;
  // console.log(sum)
  let max = 25000;
  e.currentTarget.innerHTML = e.currentTarget.value;
  if (sum >= max) {
    target = e.target;
    target.value -= (sum - max);
    document.getElementById('PEoutputtraining2').innerHTML = parseInt(PEslider.value);
    document.getElementById('ALToutputtraining2').innerHTML = parseInt(ALTslider.value);
   // document.getElementById('textEquity').innerHTML = parseInt(PEslider.value);
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);

    //document.getElementById("sliderTrainingText").innerHTML = "You've reached the limit, if you want to increase one value, you must first decrease the other."

    e.preventDefault();
    return false;
  }

  // next line is just for demonstrational purposes
  // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
  document.getElementById('PEoutputtraining2').innerHTML = parseInt(PEslider.value);
  document.getElementById('ALToutputtraining2').innerHTML = parseInt(ALTslider.value);
//  document.getElementById('textEquity').innerHTML = parseInt(PEslider.value);
 // document.getElementById('textAlternative').innerHTML = parseInt(ALTslider.value);
 // document.getElementById('textRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));

  changeSalary();
  //calculateNewPayGap();

  /*    document.getElementById('total').innerHTML = parseInt(document.getElementById("PayEquity").value) + parseInt(document.getElementById("NotEquity").value); */
  return true;
}

function addForecast () {
  document.getElementById("interactionVisBtn").hidden = false;
  document.getElementById("forecastVisBtn").hidden = true;
  document.getElementById("point2").hidden = false;
  document.getElementById("point1").hidden = true;
  document.getElementById("slidersForTest").hidden = false;
  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    const storedData = structuredClone(data);

    const random = new Math.seedrandom(seed);
    const random2 = new Math.seedrandom(seed);
    const randomGhost = new Math.seedrandom(seed);

    const randomLineTop = new Math.seedrandom(seed);
    const randomLineBot = new Math.seedrandom(seed);
    /**
     #########################################################
     CREAT GHOST DOTS
     #########################################################
     * */
    let svg = d3.select('#TrainingTaskChart2')
    svg.insert('g', ":first-child")
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          //          .attr('cx', (d) => (x(d.grade_group - 2) + (random.double() * (100)) - 50))
          .attr('cx', (d) => (x(d.grade_group - 2) + (randomGhost.double() * (100)) - 50))
          .attr('cy', (d) => y(d.total_comp)),
      )
      .attr('r', (d) => (parseInt(d.performance) + 1.75) * coefSize)
      .style('fill', '#AAAAAA88');

    /**
     * #########################################################
     * CREATE GHOST LINE
     * #########################################################         *
     * * */
    svg.insert('g', ":first-child")
      .selectAll('line')
      .data(data)
      .join(
        (enter) => enter
          .append('line')
          .attr('x1', (d) => (x(d.grade_group - 2) + (randomLineTop.double() * (100)) - 50))
          .attr('x2', (d) => (x(d.grade_group - 2) + (randomLineBot.double() * (100)) - 50))
          .attr('y1', (d) => y(d.total_comp))
          .attr('y2', (d) => {
            const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
            const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise);
            return y(Math.max(perf2, gp));
          }),
      )
      .style('stroke', '#AAAAAAAA')
      .style('stroke-linecap', 'round')
      .style('stroke-width', (d) => `${parseInt(3)}px`);
  });
  //           .attr('cx', (d) => (x(d.grade_group - 2) + (random.double() * (100)) - 50))
}

function addInteraction () {
  document.getElementById("interactionVisBtn").hidden = true;
  document.getElementById("interactionVisBtn").hidden = true;
document.getElementById("btn_task-training-v2_6").hidden= false;

  const sliderEquity = document.getElementById('PayEquityTraining2');
  const sliderAlt = document.getElementById('NotEquityTraining2');
  sliderEquity.addEventListener('input', maxReached, false);

  sliderAlt.addEventListener('input', maxReached, false);
}
function displayFeatures () {
  document.getElementById("wantToSeeTheFeatures").hidden = true;
  document.getElementById("forecastVisBtn").hidden = false;
  //document.getElementById("point2").hidden = true;
  document.getElementById("point1").hidden = false;
  const sliderEquity = document.getElementById('PayEquityTraining2');
  const sliderAlt = document.getElementById('NotEquityTraining2');
  sliderEquity.addEventListener('input', maxReached, false);

  sliderAlt.addEventListener('input', maxReached, false);
}

function changeSalary() {
  const test = d3.selectAll('dot');
  d3.selectAll('.dot')
    // .data(data)
    .attr('cy', (d, i) => {
      // console.log(equityslider)
      //  console.log(notequityslider)
      const valuePE = parseInt(d3.select('#PayEquityTraining2').node().value);
      const valueNE = parseInt(d3.select('#NotEquityTraining2 ').node().value);
      const new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
      dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
      //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
      return y(new_salary);
    });
}