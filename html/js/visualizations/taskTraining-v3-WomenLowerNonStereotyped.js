

let CGPGBtn = document.getElementById("addCurrentGenderPayGap");
let perfBtn = document.getElementById("addPerformance");
//let allocationBtn = document.getElementById("addAllocation");
//let moneyLeftBtn = document.getElementById("addMoneyLeft");
CGPGBtn.addEventListener('click', displayCurrentGenderPayGap, false);
perfBtn.addEventListener('click', displayPerformance, false);
let coefLowTraining;
let coefMidTraining;
let coefHighTraining;
console.log('Hey I am here');
let state3 = "first";
let dfPeople_3WLNS = []
var random = new Math.seedrandom(seed);
const sliderEquity = document.getElementById('PayEquityTraining3');
const sliderAlt = document.getElementById('NotEquityTraining3');
let plusBtnEquity3 = document.getElementById('PayEquityTraining3PlusBtn');
let minusBtnEquity3= document.getElementById('PayEquityTraining3MinusBtn');
let plusBtnNotEquity3= document.getElementById('NotEquityTraining3PlusBtn');
let  minusBtnNotEquity3= document.getElementById('NotEquityTraining3MinusBtn');
sliderEquity.addEventListener('input', maxReached, false);
sliderEquity.addEventListener("mousedown", () => {

});
sliderEquity.addEventListener("mousemove", () => {
});
sliderEquity.addEventListener("mouseup", () => {
  changeSalary3WLNS()
  calculateNewPayGap()
});
sliderEquity.addEventListener("mouseover", () => {
  d3.selectAll('.ghostTraining3').attr("hidden",null)
});
sliderEquity.addEventListener("mouseleave", () => {
  d3.selectAll('.ghostTraining3').attr("hidden","true")
});
sliderAlt.addEventListener('input', maxReached, false);
sliderAlt.addEventListener("mousedown", () => {
});
sliderAlt.addEventListener("mousemove", () => {
});
sliderAlt.addEventListener("mouseup", () => {
  changeSalaryV0()
});
sliderAlt.addEventListener("mouseover", () => {
  d3.selectAll('.ghostTraining3').attr("hidden",null)
});
sliderAlt.addEventListener("mouseleave", () => {
  d3.selectAll('.ghostTraining3').attr("hidden","true")
});
plusBtnEquity3.addEventListener('mouseover', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", null)
});
plusBtnEquity3.addEventListener('mouseleave', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", "true")
});
plusBtnEquity3.addEventListener('click', onPlusEquity3);
minusBtnEquity3.addEventListener('mouseover', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", null)
});
minusBtnEquity3.addEventListener('mouseleave', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", "true")
});

minusBtnEquity3.addEventListener('click', onMinusEquity3);
plusBtnNotEquity3.addEventListener('mouseover', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", null)
});
plusBtnNotEquity3.addEventListener('mouseleave', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", "true")
});
plusBtnNotEquity3.addEventListener('click', onPlusNotEquity3);


minusBtnNotEquity3.addEventListener('mouseover', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", null)
});
minusBtnNotEquity3.addEventListener('mouseleave', () => {
  d3.selectAll('.ghostTraining3').attr("hidden", "true")
});
minusBtnNotEquity3.addEventListener('click', onMinusNotEquity3);

createSteoreotypedVisualization3WLNS()

ticks = d3.selectAll('.tick').style("font-size","1.5em");
/*function changeSalary3WLNS() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
      // .data(data)
      .attr('cy', (d, i) => {
        let valuePE = parseInt(d3.select('#PayEquity').node().value);
        let valueNE = parseInt(d3.select('#NotEquity ').node().value);
        let new_salary = (((valuePE / 60000) * d.sugg_raise) + ((valueNE / 60000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople_3WLNS[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        return y(new_salary);
      });
  }
*/
function calculateNewPayGap() {
  console.log(dfPeople_3WLNS[1].total_comp);
  let GPG = ((Math.exp(lm('log(total_comp_3WLNS) ~ gender_w + performance_f1 + performance_f2 + grade_group_f4 + grade_group_f5', dfPeople_3WLNS).coefficients[1]) - 1) * 100.0).toFixed(2);
  if (GPG > 0) {
    d3.select('#TestGenderPG').text(`${GPG}% (men lower)`);
  } else {
    d3.select('#TestGenderPG').text(`${GPG * -1}% (women lower)`);
  }
}

function createSteoreotypedVisualization3WLNS(){

  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
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
        total_comp_3WLNS: parseInt(d.total_comp)
      };
      dfPeople_3WLNS[id] = person;
      id++;
      if(d.performance == 1){
        coefLowTraining = d.raise_perf_perc;
      }
      else if(d.performance == 2){
        coefMidTraining = d.raise_perf_perc;
      }
      else if(d.performance == 3){
        coefHighTraining = d.raise_perf_perc;
      }
    });

    // Create the container SVG.
    const svg = d3.select('#TrainingTaskChart3WomenLowerNonStereotypedTraining1')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;width: 70%;float: left;padding: 20px');

    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yTraining).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
      }));

    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
        if (x == 1) return "grade group  A";
        else if (x == 2)return "grade group  B";
        else if (x == 3)return "grade group  C ";
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
          .attr('cx', (d) =>(PosXTraining[parseInt(d.key)-1]))
          .attr('class','ghostTraining3')
          .attr("hidden","true")
          .attr('cy', (d) => yTraining(d.total_comp)),
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
          .attr('x1', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('x2', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('class','ghostTraining3')
          .attr("hidden","true")
          .attr('y1', (d) => yTraining(d.total_comp))
          .attr('y2', (d) => {
            const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
            const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise);
            return yTraining(Math.max(perf2, gp));
          }),
      )
      .style('stroke', '#AAAAAAAA')
      .style('stroke-linecap', 'round')
      .style('stroke-width', (d) => `${parseInt(3)}px`);
    const color = d3.scaleOrdinal()
      .domain(['1', '2'])
      .range(['#3EBF30', '#BFBD30']);

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
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('cy', (d, i) => {
          const ys = yTraining(parseFloat(d.total_comp));
            return yTraining(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
          )
          .attr('class', (d) => `dot3WLNS`),
      );

  });
}
function maxReached(e) {
  PEslider = document.getElementById('PayEquityTraining3');
  ALTslider = document.getElementById('NotEquityTraining3');
  let sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let    target;
  // console.log(sum)
  let max = 25000;
  //changeSalary3WLNSe.currentTarget.innerHTML = e.currentTarget.value;
  if (sum >= max) {
    target = e.target;
    target.value -= (sum - max);
    document.getElementById('PEoutputTraining3').innerHTML = parseInt(PEslider.value);
    document.getElementById('ALToutputTraining3').innerHTML = parseInt(ALTslider.value);
    document.getElementById('taskLowPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefLowTraining).toFixed(2);
    document.getElementById('taskMidPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefMidTraining).toFixed(2);
    document.getElementById('taskHighPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefHighTraining).toFixed(2);
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);
    e.preventDefault();
    return false;
  }

  // next line is just for demonstrational purposes
  // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
  document.getElementById('PEoutputTraining3').innerHTML = parseInt(PEslider.value);
  document.getElementById('ALToutputTraining3').innerHTML = parseInt(ALTslider.value);
  document.getElementById('taskLowPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefLowTraining).toFixed(2);
  document.getElementById('taskMidPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefMidTraining).toFixed(2);
  document.getElementById('taskHighPerfTraining').innerHTML = ((parseInt(ALTslider.value)/25000) * coefHighTraining).toFixed(2);
  changeSalary3WLNS();
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
    let svg = d3.select('#TrainingTaskChart2WomenLowerNonStereotypedTraining1')
    svg.insert('g', ":first-child")
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          //          .attr('cx', (d) => (x(d.grade_group - 2) + (random.double() * (100)) - 50))
          .attr('cx', (d) => (x(d.grade_group - 2) + (randomGhost.double() * (100)) - 50))
          .attr('cy', (d) => yTraining(d.total_comp)),
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
          .attr('y1', (d) => yTraining(d.total_comp))
          .attr('y2', (d) => {
            const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
            const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise);
            return yTraining(Math.max(perf2, gp));
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

//  document.getElementById("btn_task-training-v3_7").hidden = false;
  document.getElementById("addPerformance").hidden = false;
}

function displayPerformance(){
  document.getElementById("smallTextPayGap").hidden=true;
  document.getElementById("performanceText").hidden = false;
  document.getElementById("addPerformance").hidden = true;
  document.getElementById("btn_task-training-v3_7").hidden = false;

}
function changeSalary3WLNS() {
  const test = d3.selectAll('dot');
  d3.selectAll('.dot3WLNS')
    // .data(data)
    .attr('cy', (d, i) => {
      // console.log(equityslider)
      //  console.log(notequityslider)
      const valuePE = parseInt(d3.select('#PayEquityTraining3').node().value);
      const valueNE = parseInt(d3.select('#NotEquityTraining3 ').node().value);
      const new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
      dfPeople_3WLNS[parseInt(d.key) - 1].total_comp = new_salary;
      dfPeople_3WLNS[parseInt(d.key) - 1].total_comp_3WLNS = new_salary;
    //  console.log(new_salary + " --> " + typeof new_salary + "  " + dfPeople_3WLNS[parseInt(d.key) - 1].total_comp + "   " + typeof dfPeople_3WLNS[parseInt(d.key) - 1].total_comp)
      //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
      return yTraining(new_salary);
    });

  calculateNewPayGap();
}

function onPlusEquity3(e){
  document.getElementById("PayEquityTraining3").value = parseInt(document.getElementById("PayEquityTraining3").value) +100
  maxReached(e)
}
function onMinusEquity3(e){
  document.getElementById("PayEquityTraining3").value = parseInt(document.getElementById("PayEquityTraining3").value) -100
  maxReached(e)
}
function onPlusNotEquity3(e){
  document.getElementById("NotEquityTraining3").value = parseInt(document.getElementById("NotEquityTraining3").value) +100
  maxReached(e)
}
function onMinusNotEquity3(e){
  document.getElementById("NotEquityTraining3").value = parseInt(document.getElementById("NotEquityTraining3").value) -100
  maxReached(e)
}