

let CGPGBtn = document.getElementById("addCurrentGenderPayGap");
let allocationBtn = document.getElementById("addAllocation");
let moneyLeftBtn = document.getElementById("addMoneyLeft");
CGPGBtn.addEventListener('click', displayCurrentGenderPayGap, false);
allocationBtn.addEventListener('click', displayAllocation, false);
moneyLeftBtn.addEventListener('click', displayMoneyLeft, false);
console.log('Hey I am here');
let state3 = "first";
var random = new Math.seedrandom(seed);
const sliderEquity = document.getElementById('PayEquityTraining3');
const sliderAlt = document.getElementById('NotEquityTraining3');
sliderEquity.addEventListener('input', maxReached, false);

sliderAlt.addEventListener('input', maxReached, false);
createSteoreotypedVisualization()


ticks = d3.selectAll('.tick').style("font-size","1.5em");function  changeSalary() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
      // .data(data)
      .attr('cy', (d, i) => {
        let valuePE = parseInt(d3.select('#PayEquity').node().value);
        let valueNE = parseInt(d3.select('#NotEquity ').node().value);
        let new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        return y(new_salary);
      });
  }

function calculateNewPayGap() {
  let GPG = ((Math.exp(lm('log(total_comp) ~ gender_w + performance_f1 + performance_f2 + grade_group_f4 + grade_group_f5', dfPeople).coefficients[1]) - 1) * 100.0).toFixed(2);
  if (GPG > 0) {
    d3.select('#TestGenderPG').text(`${GPG}% (men lower)`);
  } else {
    d3.select('#TestGenderPG').text(`${GPG * -1}% (women lower)`);
  }
}


function createSteoreotypedVisualization(){

  d3.csv('./html/js/visualizations/men-lower-v2.csv').then((data) => {
    let storedData = structuredClone(data);

    const randomTrainingV2 = new Math.seedrandom(seed);
    let random2 = new Math.seedrandom(seed);
    let random3 = new Math.seedrandom(seed);

    let random4 = new Math.seedrandom(seed);
    let random5 = new Math.seedrandom(seed);

    let id = 0;
    /*dfPeople = null;
    dfPeople = [];*/
    /** PREPARATION FOR REGRESSION * */
    data.forEach((d) => {
      let person = {
        // gender_w,performance_f1,performance_f2,grade_group_f4,grade_group_f5
        gender_w: parseInt(d.gender_w),// special case where men are "1" and women are "2"
        performance_f1: parseInt(d.performance_f1),
        performance_f2: parseInt(d.performance_f2),
        grade_group_f4: parseInt(d.grade_group_f4),
        grade_group_f5: parseInt(d.grade_group_f5),
        performance: parseInt(d.performance),
        grade_group: parseInt(d.grade_group),
        total_comp: parseInt(d.total_comp),
      };
      dfPeople[id] = person;
      id++;
    });

    // Create the container SVG.
    const svg = d3.select('#TrainingTaskChart3MenLowerNonStereotypedTraining1')
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
        if (x == 1 || x == 2 || x == 3) return "Grade Group " + (x + 2);
      }));

    let randomGhost = new Math.seedrandom(seed);

    let randomLineTop = new Math.seedrandom(seed);
    let randomLineBot = new Math.seedrandom(seed);
    /**
     #########################################################
     CREAT GHOST DOTS
     #########################################################
     * */
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

    const color = d3.scaleOrdinal()
      .domain(['1', '2'])
      .range(['#059804', '#c9ae00']);

    const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
    /**
     *          #########################################################
     *          ########### LEGEND
     *          #########################################################
     */
    svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
      .style('fill', '#059804');
    svg.append('circle').attr('cx', width - 100).attr('cy', 160).attr('r', 6)
      .style('fill', '#c9ae00');
    svg.append('text').attr('x', width - 80).attr('y', 130).text('Men')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');
    svg.append('text').attr('x', width - 80).attr('y', 160).text('Women')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');


    /** CREATE SALARIES MARK * */
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          .attr('cx', (d) => (x(d.grade_group - 2) + (randomTrainingV2.double() * (100)) - 50))
          .attr('cy', (d, i) => {
          const ys = y(parseFloat(d.total_comp));
            return y(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
          )
          .attr('class', (d) => `dot ${d.gender}`),
      );

  });
}
function maxReached(e) {
  PEslider = document.getElementById('PayEquityTraining3');
  ALTslider = document.getElementById('NotEquityTraining3');
  let sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let    target;
  // console.log(sum)
  let max = 25000;
  e.currentTarget.innerHTML = e.currentTarget.value;
  if (sum >= max) {
    target = e.target;
    target.value -= (sum - max);
    document.getElementById('PEoutputTraining3').innerHTML = parseInt(PEslider.value);
    document.getElementById('ALToutputTraining3').innerHTML = parseInt(ALTslider.value);
    document.getElementById('AllocationGPG').innerHTML = parseInt(PEslider.value);
    document.getElementById('AllocationNotGPG').innerHTML = parseInt(ALTslider.value);
   document.getElementById('Leftovers').innerHTML = sum-max;
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);
    e.preventDefault();
    return false;
  }

  // next line is just for demonstrational purposes
  // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
  document.getElementById('PEoutputTraining3').innerHTML = parseInt(PEslider.value);
  document.getElementById('ALToutputTraining3').innerHTML = parseInt(ALTslider.value);
  document.getElementById('AllocationGPG').innerHTML = parseInt(PEslider.value);
  document.getElementById('AllocationNotGPG').innerHTML = parseInt(ALTslider.value);
  document.getElementById('Leftovers').innerHTML = sum-max;
  changeSalary();
  calculateNewPayGap();
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
    let svg = d3.select('#TrainingTaskChart2MenLowerNonStereotypedTraining1')
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

  const sliderEquity = document.getElementById('PayEquityTraining3');
  const sliderAlt = document.getElementById('NotEquityTraining3');
  sliderEquity.addEventListener('input', maxReached, false);

  sliderAlt.addEventListener('input', maxReached, false);
}
function displayFeatures () {
  document.getElementById("wantToSeeTheFeatures").hidden = true;
  document.getElementById("forecastVisBtn").hidden = false;
  //document.getElementById("point2").hidden = true;
  document.getElementById("point1").hidden = false;
  const sliderEquity = document.getElementById('PayEquityTraining3');
  const sliderAlt = document.getElementById('NotEquityTraining3');
  sliderEquity.addEventListener('input', maxReached, false);

  sliderAlt.addEventListener('input', maxReached, false);
}
function displayCurrentGenderPayGap () {
  document.getElementById("addCurrentGenderPayGap").hidden = true;
  document.getElementById("LineGenderPG").hidden = false;
  document.getElementById("addAllocation").hidden = false;
  document.getElementById("instrPG").hidden = false;
}
function displayAllocation () {
  document.getElementById("addAllocation").hidden = true;
  document.getElementById("LineSummaryAllocation").hidden = false;
  document.getElementById("addMoneyLeft").hidden = false;
  document.getElementById("instrAlloc").hidden = false;
}
function displayMoneyLeft(){
  document.getElementById("addMoneyLeft").hidden = true;
  document.getElementById("LineMoneyLeft").hidden = false;
  document.getElementById("instrleft").hidden = false;
  document.getElementById("btn_task-training-v3_7").hidden = false;
}
function changeSalary() {
  const test = d3.selectAll('dot');
  d3.selectAll('.dot')
    // .data(data)
    .attr('cy', (d, i) => {
      // console.log(equityslider)
      //  console.log(notequityslider)
      const valuePE = parseInt(d3.select('#PayEquityTraining3').node().value);
      const valueNE = parseInt(d3.select('#NotEquityTraining3 ').node().value);
      const new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
      dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
      //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
      return y(new_salary);
    });
}