
var random = Math.seedrandom('0.45454');
// var random = seedrandom("0.45454");
var random = new Math.seedrandom('0.45454');
console.log('Hey I am here');
let state = "first";
var random = new Math.seedrandom(seed);

const yTraining = d3.scaleLinear()
  // .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([30000, 16000])
  .range([0 + marginBottom, height - marginTop]);
createSteoreotypedVisualization()
ticks = d3.selectAll('.tick').style("font-size","1.5em");


let plusBtnEquity = document.getElementById("PayEquityTrainingPlusBtn")
let minusBtnEquity = document.getElementById("PayEquityTrainingMinusBtn")
plusBtnEquity.addEventListener('click', onPlusEquity);
minusBtnEquity.addEventListener('click', onMinusEquity);

function onPlusEquity(e){
  document.getElementById("PayEquityTraining").value = parseInt(document.getElementById("PayEquityTraining").value) +100
  maxReached2(e)
}
function onMinusEquity(e){
  document.getElementById("PayEquityTraining").value = parseInt(document.getElementById("PayEquityTraining").value) -100
  maxReached2(e)
}
let plusBtnNotEquity = document.getElementById("NotEquityTrainingPlusBtn")
let minusBtnNotEquity = document.getElementById("NotEquityTrainingMinusBtn")
plusBtnNotEquity.addEventListener('click', onPlusNotEquity);
minusBtnNotEquity.addEventListener('click', onMinusNotEquity);

function onPlusNotEquity(e){
  document.getElementById("NotEquityTraining").value = parseInt(document.getElementById("NotEquityTraining").value) +100
  maxReached2(e)
}
function onMinusNotEquity(e){
  document.getElementById("NotEquityTraining").value = parseInt(document.getElementById("NotEquityTraining").value) -100
  maxReached2(e)
}
function createSteoreotypedVisualization(){

  d3.csv('./html/js/visualizations/women-lower-v2.csv').then((data) => {
    let storedData = structuredClone(data);

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
    const svg = d3.select('#TrainingTaskChartWomenLowerStereotypedTraining1')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'float: left;padding-right: 10px');



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
      .range(['#3a33ffFF', '#ff33c9']);

    const shape = d3.scaleOrdinal(data.map((d) => d.species), d3.symbols.map((s) => d3.symbol().type(s)()));
    /**
     *          #########################################################
     *          ########### LEGEND
     *          #########################################################
     */

    svg.append('circle').attr('cx', width - 100).attr('cy', 130).attr('r', 6)
      .style('fill', '#3a33ff');
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
          .attr('cx', (d) => (PosXTraining[parseInt(d.key)-1]))
          .attr('cy', (d, i) => {
            return yTraining(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>

              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender}`),
      );
    let sliderEquityTraining = document.getElementById('PayEquityTraining');
    let sliderAltTraining = document.getElementById('NotEquityTraining');
    sliderEquityTraining.addEventListener('input', maxReached2, false);

    sliderAltTraining.addEventListener('input', maxReached2, false);
  });
}
function maxReached2(e) {
  PEslider = document.getElementById('PayEquityTraining');
  ALTslider = document.getElementById('NotEquityTraining');
  let sum = parseInt(PEslider.value) + parseInt(ALTslider.value); let    target;
  // console.log(sum)
  let max = 25000;
 // e.currentTarget.innerHTML = e.currentTarget.value;
  if(sum>max && (e.currentTarget.id == "PayEquityTrainingPlusBtn" || e.currentTarget.id == "NotEquityTrainingPlusBtn")) {
    if(e.currentTarget.id == "PayEquityTrainingPlusBtn") {document.getElementById("PayEquityTraining").value = parseInt(document.getElementById("PayEquityTraining").value) - 100}
    else if (e.currentTarget.id =="NotEquityTrainingPlusBtn") {document.getElementById("NotEquityTraining").value = parseInt(document.getElementById("NotEquityTraining").value) -100 }
  }
  if (sum >= max) {
    target = e.target;
    target.value -= (sum - max);
    document.getElementById('PEoutputtraining').innerHTML = parseInt(PEslider.value);
    document.getElementById('ALToutputtraining').innerHTML = parseInt(ALTslider.value);
   // document.getElementById('textEquity').innerHTML = parseInt(PEslider.value);
    PEslider.innerHTML = parseInt(PEslider.value);
    ALTslider.innerHTML = parseInt(ALTslider);
    if(state == "first" && parseInt(PEslider.value) == 25000) {
      state = "second"
      document.getElementById("slidersLabelsTask").innerHTML = "Task 2: Allocate 25,000 for \"Performance-based\""
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations! Please, allocate 25,000 for \"Performance-based\""
      document.getElementById("taskSlider1").style.display = "inline"

    }
    else if(state =="second" && parseInt(ALTslider.value) == 25000) {
      state = "third"
      document.getElementById("slidersLabelsTask").innerHTML = "Task 3: Allocate,12,500 for \"Performance-based\" and " + '\n' + "12,500 for \"addressing pay equity\""
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations! Please, allocate 12,500 for \"Performance-based\" and 12,500 for \"Reducing gender pay inequity\""
      document.getElementById("taskSlider2").style.display = "inline"
    }
    else if(state == "third" && parseInt(ALTslider.value) == 12500 && parseInt(PEslider.value) == 12500){
      document.getElementById("slidersLabelsTask").innerHTML = "Congratulations!! You can move on to the next part"
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations!! You can move on to the next part"
      document.getElementById("btn_task-training_5").hidden=false;
      document.getElementById("taskSlider3").style.display = "inline"

      let nextBtn = document.getElementById("btn_task-training_5");
      document.getElementById("sliderTrainingText").parentElement.parentElement.parentElement.append(nextBtn);
    }
    else {
      document.getElementById("sliderTrainingText").style.color = "#f80b0b";
      document.getElementById("sliderTrainingText").innerHTML = "You've reached the limit, if you want to increase one value, you must first decrease the other."
    }
    //document.getElementById("sliderTrainingText").innerHTML = "You've reached the limit, if you want to increase one value, you must first decrease the other."

    e.preventDefault();
    return false;
  }
  document.getElementById("sliderTrainingText").style.color = "#3ebf30";

  document.getElementById("sliderTrainingText").innerHTML = ""
  // next line is just for demonstrational purposes
  // document.getElementById('total').innerHTML = parseInt(PEslider.value) + parseInt(ALTslider.value);
  document.getElementById('PEoutputtraining').innerHTML = parseInt(PEslider.value);
  document.getElementById('ALToutputtraining').innerHTML = parseInt(ALTslider.value);
//  document.getElementById('textEquity').innerHTML = parseInt(PEslider.value);
 // document.getElementById('textAlternative').innerHTML = parseInt(ALTslider.value);
 // document.getElementById('textRemaining').innerHTML = (max) - (parseInt(PEslider.value) + parseInt(ALTslider.value));
/*
  changeSalary();
  calculateNewPayGap();*/

  /*    document.getElementById('total').innerHTML = parseInt(document.getElementById("PayEquity").value) + parseInt(document.getElementById("NotEquity").value); */
  return true;
}