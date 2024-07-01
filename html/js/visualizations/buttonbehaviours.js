/* eslint-disable */
let buttonFirst = document.getElementById('firstStageButton')
let buttonSecond = document.getElementById('secondStageButton')
let buttonThird = document.getElementById('thirdStageButton')
let buttonFourth = document.getElementById('fourthStageButton')
let buttonFifth = document.getElementById('fifthStageButton')
let buttonSixth = document.getElementById('sixthStageButton')
let buttonSeventh = document.getElementById('seventhStageButton')
let buttonEighth = document.getElementById('eighthStageButton')
let buttonNineth = document.getElementById('ninethStageButton')
let buttonTenth = document.getElementById('tenthStageButton')
let buttonEleventh = document.getElementById('eleventhStageButton')
let buttonTwelveth = document.getElementById('twelvethStageButton')
let buttonThirteenth = document.getElementById('thirteenthStageButton')
let buttonFourteenth = document.getElementById('fourteenthStageButton')
let buttonFifteenth = document.getElementById('fifteenthStageButton')
// buttonEighth = document.getElementById("eighthStageButton");
buttonFirst.addEventListener('click', changeButton, false)
buttonSecond.addEventListener('click', changeButton, false)
buttonThird.addEventListener('click', changeButton, false)
buttonFourth.addEventListener('click', changeButton, false)
buttonFifth.addEventListener('click', changeButton, false)
buttonSixth.addEventListener('click', changeButton, false)
buttonSeventh.addEventListener('click', changeButton, false)
buttonEighth.addEventListener('click', changeButton, false)
buttonNineth.addEventListener('click', changeButton, false)
buttonTenth.addEventListener('click', changeButton, false)
buttonEleventh.addEventListener('click', changeButton, false)
buttonTwelveth.addEventListener('click', changeButton, false)
buttonThirteenth.addEventListener('click', changeButton, false)
buttonFourteenth.addEventListener('click', changeButton, false)
buttonFifteenth.addEventListener('click', changeButton, false)
//buttonEighth.addEventListener('click', changeButton, false);

let posXForExplanation = [
  284.2794300638517, 259.42609325451923, 432.26691498829166, 401.66232284946483, 595.7722491815598, 610.0,
  261.35045134346825, 217.50554809119814, 600.2234671200964, 391.69068589938263, 227.0726634520962, 270.77113822715955,
  586.9666388371461, 550.2698964844111, 604.6097862666902, 389.86245503818316, 451.84492554870565, 404.80420686534814,
  436.38569894021435, 570.0, 637.6341486707789, 562.5979870550902, 584.4910338798154, 269.96281913419466, 246.986071438551,
  294.52919160327707, 266.7023944042961, 397.2297069697428, 421.4687061094986, 616.7984419730699
]
let posXForIntroduction = [
  678.0015959373842, 507.7562387934569, 518.6533676697977, 309.01191151883415, 465.60240689368436, 427.8214595841009,
  520.9380917027577, 220.60050442470737, 496.0932497726601, 240.70619841077107, 217.635244646859, 585.4697968560429,
  405.2839760344508, 153.9112909182157, 526.139535926828, 228.18281701155473, 652.7627400086336, 330.5338170276347,
  546.8670377404683, 444.93062785863106, 752.3564183948359, 238.35871132736776, 388.32608207673564, 579.9328110692336,
  422.5420893540741, 748.2124624824478, 557.5989016694285, 278.6484927427382, 444.6856368500655, 609.6318275155284
]

function changeButton (e) {
  console.log(e.target.id)
  switch (e.target.id) {
    case 'firstStageButton':
      firstChartDesign()
      e.target.parentElement.hidden = true
      document.getElementById('secondStage').hidden = false
      break
    case 'secondStageButton':

      secondChartDesign()
      e.target.parentElement.hidden = true
      document.getElementById('thirdStage').hidden = false
      break
    case 'thirdStageButton':
      //e.target.parentElement.hidden = true;
      thirdChartDesign()

      document.getElementById('thirdStageButton').hidden = true
      document.getElementById('fourthStage').hidden = false
      break
    case 'fourthStageButton':
      var value = parseInt(document.getElementById('inputTestRobin').value)
      if ((58000 < value && value < 62000) || (58 < value && value < 62)) {
        e.target.parentElement.hidden = true
        document.getElementById('thirdStage').hidden = true

        document.getElementById('fifthStage').hidden = false
      } else {
        document.getElementById('checkingValue').innerHTML = 'Try again, the value is incorrect. The format must be an integer'
      }
      break
    case 'fifthStageButton':
      e.target.parentElement.hidden = true
      gradegroupCharts()
      document.getElementById('sixthStage').hidden = false
      break
    case 'sixthStageButton':
      animateGradeGroups()
      buttonSixth.hidden = true
      document.getElementById('seventhStage').hidden = false
      break
    case 'seventhStageButton':
      //  e.target.hidden = true
      animateGradeGroupsJitter()
      buttonSeventh.hidden = true
      document.getElementById('eighthStage').hidden = false
      break
    case 'eighthStageButton':
      buttonEighth.hidden = true
      visualizeRobinGradeGroup()
      document.getElementById('ninethStage').hidden = false
      break
    case 'ninethStageButton':
      // e.target.hidden = true;

      var valuegg = document.querySelector('input[name="grade-group-test"]:checked').value
      if (valuegg == '5') {
        document.getElementById('sixthStage').hidden = true
        document.getElementById('seventhStage').hidden = true
        document.getElementById('eighthStage').hidden = true
        document.getElementById('ninethStage').hidden = true
        document.getElementById('tenthStage').hidden = false
        performanceCharts()

        console.log('good')
      } else {
        console.log('not good')
        document.getElementById('checkingValueGradeGroup').innerHTML = 'You failed on the first attention test. Please, try again.'
        var valueAttention = document.getElementById('attention-test-check').value
        if (valueAttention == '0') {
          document.getElementById('attention-test-check').value = '1'
        }
      }
      break
    case 'tenthStageButton':
      // e.target.hidden = true;
      animatePerformance()
      document.getElementById('eleventhStage').hidden = false
      document.getElementById('tenthStageButton').hidden = true
      break
    case 'eleventhStageButton':
      // e.target.hidden = true;
      //    animatePerformance();
      visualizeRobinPerformance()
      document.getElementById('twelvethStage').hidden = false
      buttonEleventh.hidden = true
      break
    case 'twelvethStageButton':
      var valueperf = document.querySelector('input[name="performance-test"]:checked').value
      if (valueperf == 'mediumperformers') {
        document.getElementById('tenthStage').hidden = true
        document.getElementById('eleventhStage').hidden = true
        document.getElementById('twelvethStage').hidden = true
        document.getElementById('thirteenthStage').hidden = false
        visualizeFinalTest()

        console.log('good')
      } else {
        var valueAttention = document.getElementById('attention-test-check').value
        if (valueAttention == '1') {
          document.getElementById('attention-test-check').value = '2'
          $('#endDisagreement_12').show()
          $('#introduction_3').hide()

          $.ajax({
            url: 'html/ajax/log_exclusion.php',
            type: 'POST',
            data: JSON.stringify(measurements),
            contentType: 'application/json',
            success: function (data) {
              console.log('Experiment finished due to exclusion.')
              //$(':button').hide()
              window.onbeforeunload = null
            }
          })

        }
        /*  if (type === '<?php echo $id;?>'){
            var att_answer = $('input[name=att]:checked').val();
            if(att_answer != "<?php echo $config["attention_question_correct_answer"]["key"] ?>"){
              excluded = true;
              $('body').trigger('excluded');
              // console.log("failed on attention check --> exclude");
              $('#<?php echo $next ?>').hide().promise().done(() => $('# attention_check_failed').show());
              $(":button").hide();
            } else {
              // console.log("passed on attention check");
              // $('#<?php echo $id ?>').hide().promise().done(() => $('#<?php echo $next ?>').show());
            }

          }
        });*/
        console.log('not good')
        document.getElementById('checkingValuePerf').innerHTML = 'Please, try again, the value is incorrect.'
      }
      break
    case 'thirteenthStageButton':

      var perf = false
      var salary = false
      var gradegroup = false
      var valueperf = document.querySelector('input[name="performance-test-jamie"]:checked').value
      if (valueperf == 'lowperformers') {
        perf = true
      } else {
        document.getElementById('checkingPerfJamie').innerHTML = 'Please, try again, performance is incorrect.'
      }
      var valuegg = document.querySelector('input[name="grade-group-test-jamie"]:checked').value

      if (valuegg == '3') {
        gradegroup = true
      } else {
        document.getElementById('checkingGGJamie').innerHTML = 'Please, try again, grade group is incorrect.'
      }
      var valuesalary = parseInt(document.getElementById('inputJamieSalary').value.replace('K', '').replace('k', ''))

      if ((valuesalary >= 30000 && valuesalary <= 35000) || (valuesalary >= 30 && valuesalary <= 35)) {
        salary = true
      } else {
        document.getElementById('checkingSalaryJamie').innerHTML = 'Please, try again, salary is incorrect.'

      }
      if (perf && salary && gradegroup) {
        buttonThirteenth.hidden = true
        document.getElementById('btn_introduction_3').hidden = false
      }

      //      thirteenthStage
      break

    case 'fourteenthStageButton':
      break
  }
}

function firstChartDesign () {
  var random = new Math.seedrandom('0.45454')

  console.log('Hey I am here')
  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const y = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 1])
    .range([marginLeft, width - marginRight])
  console.log('###################################################################')

  console.log('###################################################################')
  d3.csv('./html/js/visualizations/prediction-grade-group3-4-5.csv').then((data) => {
    const svgSecondChart = d3.select('#firstChart')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;')

    //  var a = d3.group(data, d => d.gender)
    svgSecondChart.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => {
        return x / 1000 + 'k'
      }))

    svgSecondChart.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)

      .call(d3.axisBottom(x).tickArguments([0]).tickFormat((x) => {
        return ''
      }))
    const theCircles = svgSecondChart.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('cx', (d) => posXForIntroduction[parseInt(d.key) - 1])
          .attr('cy', (d, i) => y(d.total_comp))
          .attr('r', (d) => parseInt(5))
      )

  })
}

function secondChartDesign () {
  var random = new Math.seedrandom('0.45454')

  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const y = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 1])
    .range([marginLeft, width - marginRight])

  d3.csv('./html/js/visualizations/prediction-grade-group3-4-5.csv').then((data) => {
    const svg = d3.select('#secondChart')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;')

    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => {
        return x / 1000 + 'k'
      }))
    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickArguments([0]).tickFormat((x) => {
        if (x == 1) return 'grade group A'
        else if (x == 2) return 'grade group B'
        else if (x == 3) return 'grade group C '
      }))
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => d.key)
          .attr('cx', (d) => x(random.double()))
          .attr('cy', (d, i) => y(d.total_comp))
          .attr('r', (d) => parseInt(5))
          .attr('fill', function (d) {
            if (d.key == '3') {
              return '#F2B93F'
            } else if (d.key == '9') {
              return '#0096c9'
            }
          })
      )
    svg.append('g')
      .selectAll('line')
      .data(data)
      .join(
        (enter) => enter
          .append('line')
          .attr('x1', function (d) {
            if (d.key == '3') {
              return x(0)
            } else if (d.key == '9') {
              return x(0)
            }
          })
          .attr('x2', function (d) {
            if (d.key == '3') {
              console.log(document.getElementById(d.key).cx.baseVal.value)
              return document.getElementById(d.key).cx.baseVal.value
            } else if (d.key == '9') {

              return document.getElementById(d.key).cx.baseVal.value
            }
          })
          .attr('y1', function (d) {
            if (d.key == '3') {
              return document.getElementById(d.key).cy.baseVal.value
            } else if (d.key == '9') {

              return document.getElementById(d.key).cy.baseVal.value
            }
          })
          .attr('y2', function (d) {
            if (d.key == '3') {
              return document.getElementById(d.key).cy.baseVal.value
            } else if (d.key == '9') {

              return document.getElementById(d.key).cy.baseVal.value
            }
          })
      )
      .style('stroke', function (d) {
        if (d.key == '3') {
          return '#F2B93F'
        } else if (d.key == '9') {
          return '#0096c9'
        }
      })

      .style('stroke-dasharray', ('3, 3'))
      .style('stroke-opacity', 0.9)
  })
}

function thirdChartDesign () {
  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2
  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 1])
    .range([marginLeft, width - marginRight])
  var pointRobinHTML = document.getElementById('15')
  var pointRobin = d3.select(pointRobinHTML)
  pointRobin.attr('fill', '#98D462')
  const svg = d3.select(document.getElementById('secondChart'))

  svg.append('g')
    .append('line')
    .attr('x1', x(0))
    .attr('x2', pointRobinHTML.cx.baseVal.value)
    .attr('y1', pointRobinHTML.cy.baseVal.value)
    .attr('y2', pointRobinHTML.cy.baseVal.value)
    .style('stroke', '#98D462')
    .style('stroke-dasharray', ('3, 3'))
    .style('stroke-opacity', 0.9)

}

function gradegroupCharts () {
  var random = new Math.seedrandom('0.45454')

  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const y = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 1])
    .range([marginLeft, width - marginRight])

  d3.csv('./html/js/visualizations/prediction-grade-group3-4-5.csv').then((data) => {
    const svg = d3.select('#chartGradeGroups')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; min-width:800px')

    //  var a = d3.group(data, d => d.gender)
    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => {
        return x / 1000 + 'k'
      }))
    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .attr('id', 'x-axis')
      .call(d3.axisBottom(x).tickArguments([0]).tickFormat((x) => {
        if (x == 1) return 'grade group  A'
        else if (x == 2) return 'grade group  B'
        else if (x == 3) return 'grade group  C '
      }))
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => 'gg' + d.key)
          .attr('class', 'dotstoanimate')
          .attr('cx', (d) => x(random.double()))
          .attr('cy', (d, i) => y(d.total_comp))
          .attr('r', (d) => 5)
          .attr('fill', function (d) {
            if (d.key == '3') {
              return '#F2B93F'
            } else if (d.key == '9') {
              return '#0096c9'
            }
          })
      )
  })

}

function animateGradeGroups () {
  var random = new Math.seedrandom('0.84')
  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2
  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 4])
    .range([marginLeft, width - marginRight])

  var xAxis = d3.axisBottom(x)
    .tickArguments([5]).tickFormat((x) => {
      if (x == 1 || x == 2 || x == 3) return 'grade group  ' + (x + 2)
    })

  var test = d3.select('#x-axis')
    .transition().duration(1500)  // https://github.com/mbostock/d3/wiki/Transitions#wiki-d3_ease
    .call(xAxis.tickArguments([5]).tickFormat((x) => {
      if (x == 1) return 'grade group  A'
      else if (x == 2) return 'grade group  B'
      else if (x == 3) return 'grade group  C '
    }))
  /*.attr('transform', `translate(0,${height - marginBottom})`)
  .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
    if (x == 1 || x == 2 || x == 3) return x;
  }));*/
  const svg = d3.select('#chartGradeGroups')

  d3.selectAll('.dotstoanimate')
    .transition()
    .duration(2000)
    .attr('cx', function (d) {
      return x(d.grade_group - 2)
    })
}

function animateGradeGroupsJitter () {
  var random = new Math.seedrandom('0.84')
  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 4])
    .range([marginLeft, width - marginRight])
  const y = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  d3.selectAll('.dotstoanimate')
    .transition()
    .duration(500)
    .attr('cx', function (d) {
      return posXForExplanation[parseInt(d.key) - 1]
    })

  const svg = d3.select('#chartGradeGroups')
  const groupsRect = svg.append('g')

  groupsRect.append('rect')
    .attr('width', 110)
    .attr('height', y(20000) - y(90000))
    .attr('x', x(1) - 55)
    .attr('y', y(90000))
    .style('stroke', '#2d2d2d')
    .style('fill', 'none')
  groupsRect.append('rect')
    .attr('width', 110)
    .attr('height', y(20000) - y(90000))
    .attr('x', x(2) - 55)
    .attr('y', y(90000))
    .style('stroke', '#2d2d2d')
    .style('fill', 'none')
  groupsRect.append('rect')
    .attr('width', 110)
    .attr('height', y(20000) - y(90000))
    .attr('x', x(3) - 55)
    .attr('y', y(90000))
    .style('stroke', '#2d2d2d')
    .style('fill', 'none')
}

function performanceCharts () {
  var random = new Math.seedrandom('0.45454')

  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const y = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  const x = d3.scaleLinear()
    // .domain(d3.extent(genderData, d => d.salary)).nice()
    .domain([0, 4])
    .range([marginLeft, width - marginRight])

  var xAxis = d3.axisBottom(x)
    .tickArguments([42]).tickFormat((x) => {
      if (x == 1 || x == 2 || x == 3) return 'grade group  ' + (x + 2)
    })

  d3.csv('./html/js/visualizations/prediction-grade-group3-4-5.csv').then((data) => {
    const svg = d3.select('#chartPerformance')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;min-width:800px')

    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => {
        return x / 1000 + 'k'
      }))
//.call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => { return x/1000 + "k";
//         }));
    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .attr('id', 'x-axis')
      .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
        if (x == 1) return 'grade group  A'
        else if (x == 2) return 'grade group  B'
        else if (x == 3) return 'grade group  C '
      }))
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => 'perf' + d.key)
          .attr('class', 'dotstoanimatePerformance')
          .attr('cx', function (d) {
            return posXForExplanation[parseInt(d.key) - 1]
          })
          .attr('cy', (d, i) => y(d.total_comp))
          .attr('r', (d) => 5)
          .attr('fill', function (d) {
            if (d.key == '3') {
              return '#F2B93F'
            } else if (d.key == '9') {
              return '#0096c9'
            }
          })
      )
  })

}

function animatePerformance () {
  var random = new Math.seedrandom('0.84')
  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const svg = d3.select('#chartPerformance')

  d3.selectAll('.dotstoanimatePerformance')
    .transition()
    .duration(1000)
    .attr('r', (d) => (parseInt(d.performance) + 1.75) * coefSize)
}

function visualizeRobinGradeGroup () {
  var markerBoxHeight = 10
  var markerBoxWidth = 10
  var refX = markerBoxWidth / 2
  var refY = markerBoxHeight / 2
  var markerWidth = markerBoxWidth / 2
  var markerHeight = markerBoxHeight / 2
  var arrowPoints = [[0, 0], [0, 10], [10, 5]]
  var pointRobinHTML = document.getElementById('gg15')
  var pointRobin = d3.select(pointRobinHTML)
  pointRobin.attr('fill', '#98D462')

  const svg = d3.select(document.getElementById('chartGradeGroups'))

  svg.append('defs')
    .append('marker')
    .attr('id', 'arrow2')
    .attr('viewBox', [0, 0, markerBoxWidth, markerBoxHeight])
    .attr('refX', refX)
    .attr('refY', refY)
    .attr('markerWidth', markerBoxWidth)
    .attr('markerHeight', markerBoxHeight)
    .attr('orient', 'auto-start-reverse')
    .append('path')
    .attr('d', d3.line()(arrowPoints))
    .attr('stroke', '#98D462')
    .attr('fill', '#98D462')

  svg.append('path')
    .attr('d', d3.line()([[pointRobinHTML.cx.baseVal.value + 5, pointRobinHTML.cy.baseVal.value], [(pointRobinHTML.cx.baseVal.value + 100), pointRobinHTML.cy.baseVal.value]]))
    .attr('stroke', '#98D462')
    .attr('marker-start', 'url(#arrow2)')
    .attr('fill', '#98D462')

}

function visualizeRobinPerformance () {

  var markerBoxHeight = 10
  var markerBoxWidth = 10
  var refX = markerBoxWidth / 2
  var refY = markerBoxHeight / 2
  var markerWidth = markerBoxWidth / 2
  var markerHeight = markerBoxHeight / 2
  var arrowPoints = [[0, 0], [0, 10], [10, 5]]
  var pointRobinHTML = document.getElementById('perf15')
  var pointRobin = d3.select(pointRobinHTML)
  pointRobin.attr('fill', '#98D462')

  const svg = d3.select(document.getElementById('chartPerformance'))

  svg.append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', [0, 0, markerBoxWidth, markerBoxHeight])
    .attr('refX', refX)
    .attr('refY', refY)
    .attr('markerWidth', markerBoxWidth)
    .attr('markerHeight', markerBoxHeight)
    .attr('orient', 'auto-start-reverse')
    .append('path')
    .attr('d', d3.line()(arrowPoints))
    .attr('stroke', '#98D462')
    .attr('fill', '#98D462')

  svg.append('path')
    .attr('d', d3.line()([[pointRobinHTML.cx.baseVal.value + 10, pointRobinHTML.cy.baseVal.value], [(pointRobinHTML.cx.baseVal.value + 100), pointRobinHTML.cy.baseVal.value]]))
    .attr('stroke', '#98D462')
    .attr('marker-start', 'url(#arrow)')
    .attr('fill', '#98D462')
}

function visualizeFinalTest () {
  var random = new Math.seedrandom('0.45454')

  const width = 800
  const height = 400
  const marginTop = 40
  const marginRight = 40
  const marginBottom = 40
  const marginLeft = 75
  const radius = 2

  const y = d3.scaleLinear()
    .domain([90000, 20000])
    .range([0 + marginBottom, height - marginTop])

  const x = d3.scaleLinear()
    .domain([0, 4])
    .range([marginLeft, width - marginRight])

  d3.csv('./html/js/visualizations/prediction-grade-group3-4-5.csv').then((data) => {
    const svg = d3.select('#chartFinalTest')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;')

    svg.append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickArguments([15]).tickFormat((x) => {
        return x / 1000 + 'k'
      }))

    svg.append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .attr('id', 'x-axis')
      .call(d3.axisBottom(x).tickArguments([5]).tickFormat((x) => {
        if (x == 1) return 'grade group  A'
        else if (x == 2) return 'grade group  B'
        else if (x == 3) return 'grade group  C '
      }))
    const theCircles = svg.append('g').selectAll('circle')
      .data(data)
      .join(
        (enter) => enter
          .append('circle')
          .attr('id', (d) => 'finaltest' + d.key)
          .attr('class', 'dotstoanimatePerformance')
          .attr('cx', function (d) {
            return posXForExplanation[parseInt(d.key) - 1]
          })
          .attr('cy', (d, i) => y(d.total_comp))
          .attr('r', (d) => (parseInt(d.performance) + 1.75) * coefSize)
          .attr('fill', function (d) {
            if (d.key == '3') {
              return '#F2B93F'
            } else if (d.key == '9') {
              return '#0096c9'
            } else if (d.key == '15') {
              return '#98D462'
            } else if (d.key == '1') {
              return '#D95F02'
            }
          })
      )
  })

}