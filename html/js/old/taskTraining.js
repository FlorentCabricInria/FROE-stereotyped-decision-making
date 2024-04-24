
var random = Math.seedrandom('0.45454');
// var random = seedrandom("0.45454");
var random = new Math.seedrandom('0.45454');
console.log('Hey I am here');
let state = "first";
/*const width = 800;
const height = 400;
const marginTop = 40;
const marginRight = 40;
const marginBottom = 40;
const marginLeft = 50;*/
//const radius = 2;
/*
const y = d3.scaleLinear()
// .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([85000, 35000])
  .range([0 + marginBottom, height - marginTop]);

const x = d3.scaleLinear()
// .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([0, 4])
  .range([marginLeft, width - marginRight]);
const coefSize = 2.5;
const perfVisual = 'size';
const dfPeople = [];
const seed = '45457';*/
let yTraining = d3.scaleLinear()
  // .domain(d3.extent(genderData, d => d.salary)).nice()
  .domain([34000, 22000])
  .range([0 + marginBottom, height - marginTop]);

var random = new Math.seedrandom(seed);
//const structForModel = [];
// if(nbElem=="30"){
//   var data= structuredClone(data30)
createSteoreotypedVisualizationWomenLower2()
/*createSteoreotypedVisualizationMenLower()
createnonSteoreotypedVisualizationWomenLower()
createnonSteoreotypedVisualizationMenLower()*/
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


function createSteoreotypedVisualizationWomenLower2(){

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
        /*  gender: parseInt(d.gender),
          gender_f1: parseInt(d.gender) === 1 ? 1 : 0, // special case where men are "1" and women are "2"
          gender_f2: parseInt(d.gender) === 2 ? 1 : 0, // special case where men are "1" and women are "2"*/
        // performance_f1: parseInt(d.performance) === 0 ? 1 : 0,
        // performance_f1: parseInt(d.performance) === 1 ? 1 : 0,
        // performance_f2: parseInt(d.performance) === 2 ? 1 : 0,
        // performance_f3: parseInt(d.performance) === 3 ? 1 : 0,
        // grade_group_f3: parseInt(d.performance) === 3 ? 1 : 0,
        //  grade_group_f4: parseInt(d.performance) === 4 ? 1 : 0,
        // grade_group_f5: parseInt(d.performance) === 5 ? 1 : 0,
        // grade_group: parseInt(d.grade_group),
        // total_comp: parseInt(d.total_comp),
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
    const svg = d3.select('#TrainingTaskChart')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yTraining).tickArguments([15]).tickFormat((x) => { return x/1000 + "K";
      }));

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
/*
    svg.append('g')
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          .attr('cx', (d) => (x(d.grade_group - 2) + (random5.double() * (100)) - 50))
          .attr('cy', (d) => y(d.total_comp)),
      )
      .attr('r', (d) => (parseInt(d.performance) + 1.75) * coefSize)
      .style('fill', '#AAAAAA88');
*/
    /**
     * #########################################################
     * CREATE GHOST LINE
     * #########################################################         *
     * * */
    /*svg.append('g')
      .selectAll('line')
      .data(data)
      .join(
        (enter) => enter
          .append('line')
          .attr('x1', (d) => (x(d.grade_group - 2) + (random3.double() * (100)) - 50))
          .attr('x2', (d) => (x(d.grade_group - 2) + (random4.double() * (100)) - 50))
          .attr('y1', (d) => y(d.total_comp))
          .attr('y2', (d) => {
            const perf2 = parseFloat(d.total_comp) + parseFloat(d.sugg_raise_perf);
            const gp = parseFloat(d.total_comp) + parseFloat(d.sugg_raise);
            return y(Math.max(perf2, gp));
          }),
      )
      .style('stroke', '#AAAAAAAA')
      .style('stroke-linecap', 'round')
      .style('stroke-width', (d) => `${parseInt(3)}px`);*/

    /** CREATE SALARIES MARK * */
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          .attr('cx', (d) => (x(d.grade_group - 2) + (random.double() * (100)) - 50))
          .attr('cy', (d, i) => {
            // console.log(equityslider)
            //  console.log(notequityslider)
           // const valuePE = parseInt(d3.select('#PayEquity').node().value);
           // const valueNE = parseInt(d3.select('#NotEquity ').node().value);
           // const new_salary = (((valuePE / 50000) * d.sugg_raise) + ((valueNE / 50000) * d.sugg_raise_perf) + parseFloat(d.total_comp));
           // dfPeople[parseInt(d.key) - 1].total_comp = new_salary;
            //  totalGenderPayGap += (-1) * (parseFloat(d.raise_on_pay_gap_gender) * ((50000 - valuePE) / 50000))
            const ys = yTraining(parseFloat(d.total_comp));
            return yTraining(parseFloat(d.total_comp));
          })
          .style('fill', (d) => color(d.gender))

          .attr('r', (d) =>
              /* if (radios == "size") {
                                      return (d.performance + 2) * coefSize;
                                  } else { */
              (parseInt(d.performance) + 1.75) * coefSize,
            // }
          )
          .attr('class', (d) => `dot ${d.gender}`),
      );

   // calculateNewPayGap();
    // Listen to the slider?
   /* d3.select("#PayEquityTraining").on("change", function(d){
              selectedValue = this.value
              changeSalary(selectedValue)
              calculateNewPayGap()
          }) */
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
  e.currentTarget.innerHTML = e.currentTarget.value;
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
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations! now can you try to allocate 25,000 for \"Performance-based\""

    }
    else if(state =="second" && parseInt(ALTslider.value) == 25000) {
      state = "third"
      document.getElementById("slidersLabelsTask").innerHTML = "Task 3: Allocate, 12,500 for \"Performance-based\" and 12,500 for \"addressing pay equity\""
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations! now can you try to allocate 12,500 for \"Performance-based\" and 12,500 for \"Reducing equal gender pay gap\""
    }
    else if(state == "third" && parseInt(ALTslider.value) == 12500 && parseInt(PEslider.value) == 12500){
      document.getElementById("slidersLabelsTask").innerHTML = "Congratulations!! You can move on to the next part"
      document.getElementById("sliderTrainingText").innerHTML = "Congratulations!! You can move on to the next part"
      document.getElementById("btn_task-training_5").hidden=false;
    }
    else {
      document.getElementById("sliderTrainingText").innerHTML = "You've reached the limit, if you want to increase one value, you must first decrease the other."
      document.getElementById("sliderTrainingText").style.color = "#f80b0b";
    }
    //document.getElementById("sliderTrainingText").innerHTML = "You've reached the limit, if you want to increase one value, you must first decrease the other."

    e.preventDefault();
    return false;
  }

  document.getElementById("sliderTrainingText").innerHTML = ""
  document.getElementById("sliderTrainingText").style.color = "#0b9d0b";

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