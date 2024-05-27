
let forecastBtn = document.getElementById("forecastVisBtn");
let interactionBtn = document.getElementById("interactionVisBtn");
let seeFeatures = document.getElementById("wantToSeeTheFeatures");
seeFeatures.addEventListener('click', displayFeatures, false);
forecastBtn.addEventListener('click', addForecast, false);
interactionBtn.addEventListener('click', addInteraction, false);
console.log('Hey I am here');
let state2 = "first";
var random = new Math.seedrandom(seed);
createSteoreotypedVisualization2MLNS()
ticks = d3.selectAll('.tick').style("font-size","1.5em");

let plusBtnEquity2 = document.getElementById("PayEquityTraining2PlusBtn")
let minusBtnEquity2 = document.getElementById("PayEquityTraining2MinusBtn")
plusBtnEquity2.addEventListener('click', onPlusEquity2);
minusBtnEquity2.addEventListener('click', onMinusEquity2);

function onPlusEquity2(e){
  document.getElementById("PayEquityTraining2").value = parseInt(document.getElementById("PayEquityTraining2").value) +100
  maxReachedV0(e)
}
function onMinusEquity2(e){
  document.getElementById("PayEquityTraining2").value = parseInt(document.getElementById("PayEquityTraining2").value) -100
  maxReachedV0(e)
}


let plusBtnNotEquity2 = document.getElementById("NotEquityTraining2PlusBtn")
let minusBtnNotEquity2 = document.getElementById("NotEquityTraining2MinusBtn")
plusBtnNotEquity2.addEventListener('click', onPlusNotEquity2);
minusBtnNotEquity2.addEventListener('click', onMinusNotEquity2);

function onPlusNotEquity2(e){
  document.getElementById("NotEquityTraining2").value = parseInt(document.getElementById("NotEquityTraining2").value) +100
  maxReachedV0(e)
}
function onMinusNotEquity2(e){
  document.getElementById("NotEquityTraining2").value = parseInt(document.getElementById("NotEquityTraining2").value) -100
  maxReachedV0(e)
}
function changeSalaryV0() {
    const test = d3.selectAll('dot');
    d3.selectAll('.dot')
      // .data(data)
      .attr('cy', (d, i) => {
        let valuePE = parseInt(d3.select('#PayEquityTraining2').node().value);
        let valueNE = parseInt(d3.select('#NotEquityTraining2 ').node().value);
        let new_salary = (((valuePE / 25000) * d.sugg_raise) + ((valueNE / 25000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
        dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
        //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
        let t = yTraining(new_salary);
        return yTraining(new_salary);
      });
  }

function createSteoreotypedVisualization2MLNS(){

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
    const svg = d3.select('#TrainingTaskChart2MenLowerNonStereotypedTraining1')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

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
    //

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
          let ys = yTraining(parseFloat(d.total_comp));
            return yTraining(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              (parseInt(d.performance) + 1.75) * coefSize,
          )
          .attr('class', (d) => `dot ${d.gender}`),
      );

  });
}
function maxReachedV0(e) {
  PEslider = document.getElementById('PayEquityTraining2');
  ALTslider = document.getElementById('NotEquityTraining2');
  let sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let    target;
  // console.log(sum)
  let max = 25000;
 // e.currentTarget.innerHTML = e.currentTarget.value;



  if(sum>max && (e.currentTarget.id == "PayEquityTraining2PlusBtn" || e.currentTarget.id == "NotEquityTraining2PlusBtn")) {
    if(e.currentTarget.id == "PayEquityTraining2PlusBtn") {document.getElementById("PayEquityTraining2").value = parseInt(document.getElementById("PayEquityTraining2").value) - 100}
    else if (e.currentTarget.id =="NotEquityTraining2PlusBtn") {document.getElementById("NotEquityTraining2").value = parseInt(document.getElementById("NotEquityTraining2").value) -100 }
  }
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

  changeSalaryV0();
  //calculateNewPayGap();

  /*    document.getElementById('total').innerHTML = parseInt(document.getElementById("PayEquity").value) + parseInt(document.getElementById("NotEquity").value); */
  return true;
}

function addForecast () {
  document.getElementById("interactionVisBtn").hidden = false;
  document.getElementById("forecastVisBtn").hidden = true;
  document.getElementById("point2").hidden = false;
  document.getElementById("point1").hidden = true;
  document.getElementById("slidersForTest").hidden = true;
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
          .attr('class','ghostTraining')
          //          .attr('cx', (d) => (x(d.grade_group - 2) + (random.double() * (100)) - 50))
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
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
          .attr('class','ghostTraining')
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

  document.getElementById("point1").hidden = true;
  document.getElementById("point2").hidden = true;
  document.getElementById("slidersForTest").hidden = false;
  const sliderEquity = document.getElementById('PayEquityTraining2');
  const sliderAlt = document.getElementById('NotEquityTraining2');
  sliderEquity.addEventListener('input', maxReachedV0, false);

  sliderAlt.addEventListener('input', maxReachedV0, false);

  sliderEquity.addEventListener("mousedown", () => {

  });
  sliderEquity.addEventListener("mouseover", () => {
    d3.selectAll('.ghostTraining').attr("hidden",null)
  });
  sliderEquity.addEventListener("mouseleave", () => {
    d3.selectAll('.ghostTraining').attr("hidden","true")
  });
  sliderEquity.addEventListener("mousemove", () => {
  });
  sliderEquity.addEventListener("mouseup", () => {
    changeSalaryV0()
  });
  sliderAlt.addEventListener("mousedown", () => {

  });
  sliderAlt.addEventListener("mousemove", () => {
  });
  sliderAlt.addEventListener("mouseup", () => {
    changeSalaryV0()
  });
  sliderAlt.addEventListener("mouseover", () => {
    d3.selectAll('.ghostTraining').attr("hidden",null)
  });
  sliderAlt.addEventListener("mouseleave", () => {
    d3.selectAll('.ghostTraining').attr("hidden","true")
  });
  plusBtnEquity2.addEventListener('mouseover', () => {
    d3.selectAll('.ghostTraining').attr("hidden", null)
  });
  plusBtnEquity2.addEventListener('mouseleave', () => {
    d3.selectAll('.ghostTraining').attr("hidden", "true")
  });
  minusBtnEquity2.addEventListener('mouseover', () => {
    d3.selectAll('.ghostTraining').attr("hidden", null)
  });
  minusBtnEquity2.addEventListener('mouseleave', () => {
    d3.selectAll('.ghostTraining').attr("hidden", "true")
  });
  plusBtnNotEquity2.addEventListener('mouseover', () => {
    d3.selectAll('.ghostTraining').attr("hidden", null)
  });
  plusBtnNotEquity2.addEventListener('mouseleave', () => {
    d3.selectAll('.ghostTraining').attr("hidden", "true")
  });
  minusBtnNotEquity2.addEventListener('mouseover', () => {
    d3.selectAll('.ghostTraining').attr("hidden", null)
  });
  minusBtnNotEquity2.addEventListener('mouseleave', () => {
    d3.selectAll('.ghostTraining').attr("hidden", "true")
  });

}
function displayFeatures () {
  document.getElementById("wantToSeeTheFeatures").hidden = true;
  document.getElementById("forecastVisBtn").hidden = false;
  //document.getElementById("point2").hidden = true;
  document.getElementById("point1").hidden = false;
  /*const sliderEquity = document.getElementById('PayEquityTraining2');
  const sliderAlt = document.getElementById('NotEquityTraining2');
  sliderEquity.addEventListener('input', maxReachedV0, false);

  sliderAlt.addEventListener('input', maxReachedV0, false);*/
}

