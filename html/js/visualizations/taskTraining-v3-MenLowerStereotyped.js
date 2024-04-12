
let CGPGBtn = document.getElementById("addCurrentGenderPayGap");
//let allocationBtn = document.getElementById("addAllocation");
//let moneyLeftBtn = document.getElementById("addMoneyLeft");
CGPGBtn.addEventListener('click', displayCurrentGenderPayGap, false);
//allocationBtn.addEventListener('click', displayAllocation, false);
//moneyLeftBtn.addEventListener('click', displayMoneyLeft, false);
console.log('Hey I am here');
let state3 = "first";
var random = new Math.seedrandom(seed);
var dfPeople3MLWS = []
const sliderEquity = document.getElementById('PayEquityTraining3');
const sliderAlt = document.getElementById('NotEquityTraining3');
sliderEquity.addEventListener('input', maxReached, false);
sliderEquity.addEventListener("mousedown", () => {

});
sliderEquity.addEventListener("mousemove", () => {
});
sliderEquity.addEventListener("mouseup", () => {
  changeSalary3MLS()
  calculateNewPayGap()
});
sliderAlt.addEventListener('input', maxReached, false);
createSteoreotypedVisualization()

ticks = d3.selectAll('.tick').style("font-size","1.5em");
/*function changeSalary3MLS() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
      // .data(data)
      .attr('cy', (d, i) => {
        let valuePE = parseInt(d3.select('#PayEquity').node().value);
        let valueNE = parseInt(d3.select('#NotEquity ').node().value);
        let new_salary = (((valuePE / 60000) * d.sugg_raise) + ((valueNE / 60000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople3MLWS[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        return y(new_salary);
      });
  }*/
function calculateNewPayGap() {
  console.log(dfPeople3MLWS[1].total_comp);
  const GPG = ((Math.exp(lm('log(total_comp_3MLS) ~ gender_w + performance_f1 + performance_f2 + grade_group_f4 + grade_group_f5', dfPeople3MLWS).coefficients[1]) - 1) * 100.0).toFixed(2);
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
        total_comp_3MLS : parseInt(d.total_comp)
      };
      dfPeople3MLWS[id] = person;
      id++;
    });

    // Create the container SVG.
    const svg = d3.select('#TrainingTaskChart3MenLowerStereotypedTraining1')
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
        if (x == 1) return "Grade Group A";
        else if (x == 2)return "Grade Group B";
        else if (x == 3)return "Grade Group C ";
      }));
    //

    const color = d3.scaleOrdinal()
      .domain(['1', '2'])
      .range(['#3a33ff', '#ff33c9']);

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
          .attr('cx', (d) => (x(d.grade_group - 2) + (randomTrainingV2.double() * (100)) - 50))
          .attr('cy', (d, i) => {
          const ys = y(parseFloat(d.total_comp));
            return y(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
          )
          .attr('class', (d) => `dot3MLS`),
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
   /* document.getElementById('AllocationGPG').innerHTML = parseInt(PEslider.value);
    document.getElementById('AllocationNotGPG').innerHTML = parseInt(ALTslider.value);
    document.getElementById('Leftovers').innerHTML = sum-max;*/
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);
    e.preventDefault();
    return false;
  }

  // next line is just for demonstrational purposes
  // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
  document.getElementById('PEoutputTraining3').innerHTML = parseInt(PEslider.value);
  document.getElementById('ALToutputTraining3').innerHTML = parseInt(ALTslider.value);
 /* document.getElementById('AllocationGPG').innerHTML = parseInt(PEslider.value);
  document.getElementById('AllocationNotGPG').innerHTML = parseInt(ALTslider.value);
  document.getElementById('Leftovers').innerHTML = sum-max;*/
  changeSalary3MLS();
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
    let svg = d3.select('#TrainingTaskChart2MenLowerStereotypedTraining1')
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

function displayCurrentGenderPayGap () {
  /* document.getElementById("addCurrentGenderPayGap").hidden = true;
   document.getElementById("addAllocation").hidden = false;
   document.getElementById("instrPG").hidden = false;*/
  document.getElementById("LineGenderPG").hidden = false;

  document.getElementById("addCurrentGenderPayGap").hidden = true;
  //document.getElementById("instrleft").hidden = false;
  document.getElementById("btn_task-training-v3_7").hidden = false;
  // <!--<br> <button id="addAllocation" hidden="true"> Add the next piece of information : the distribution of the allocations </button> <span id="LineSummaryAllocation" hidden="true">You have allocated <span id="AllocationGPG"> 0 </span> for reducing equal gender pay gap and <span id="AllocationNotGPG"> 0 </span> for rewarding the performance. <span id="instrAlloc" style="color: darkred"> The distribution of allocation are updated in real time!</span>
  //       <br>  <button id="addMoneyLeft" hidden="true"> Add the third piece of information : the amount of money left  </button> <span id="LineMoneyLeft" hidden="true">You have <span id="Leftovers"> 0</span> left to allocate. <span id="instrleft" style="color: darkred"> This text tells you how much money you have left to allocate</span>
  //     -->
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
function changeSalary3MLS() {
  const test = d3.selectAll('dot');
  d3.selectAll('.dot3MLS')
    // .data(data)
    .attr('cy', (d, i) => {
      // console.log(equityslider)
      //  console.log(notequityslider)
      const valuePE = parseInt(d3.select('#PayEquityTraining3').node().value);
      const valueNE = parseInt(d3.select('#NotEquityTraining3 ').node().value);
      const new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
      dfPeople3MLWS[parseInt(d.key) - 1].total_comp = new_salary;
      dfPeople3MLWS[parseInt(d.key) - 1].total_comp_3MLS = new_salary;
    //  console.log(new_salary + " --> " + typeof new_salary + "  " + dfPeople3MLWS[parseInt(d.key) - 1].total_comp + "   " + typeof dfPeople3MLWS[parseInt(d.key) - 1].total_comp)
      return y(new_salary);
    });
  calculateNewPayGap();
}