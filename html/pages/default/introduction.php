<!DOCTYPE html>
<html lang="en" xmlns:style="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Introduction to the task</title>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>

    <script src="html/js/lib/linear-models.esm@50.js"></script>
    <!--<script type="text/javascript" src="scatterplot-dots-interaction.js"></script> -->

</head>
<body>
<script type="text/javascript">

  var parent = document.getElementById('btn_consent_2').parentElement
  var child = document.createElement('button')
  child.innerText = 'No, I disagree.'
  child.id = 'noconsent'
  child.onclick = function () {
    $('#consent_2').hide().promise().done(() => $('#endDisagreement_12').show())

  }
  parent.append(child)

  //child.innerHTML("BONJOURURURUR");
</script>
<div id="firstStage" style="text-align: left">

    <h1> Background Explanation</h1>
    <p><b>Imagine the following scenario</b></p>
    You are the person in charge of your company's annual salary review. The CEO has allocated 25,000 StudyCoin (a
    fictitious currency) to increase the employees salaries — your colleagues.
    <br>
    <!-- The CEO instructed you to allocate the 25,000 as you want. There are two main factors for you to consider and balance that ensure fair pay in a different manner:
    <ul>
        <li>
            a) differences between men and women's pay (= the gender pay gap)
        </li>
        <li>
           b) differences in how well employees did their job in the past (=their performance) </li>
    </ul>
    -->
    <!-- Each colleague has been categorized into 3 grade groups*: 1, 2 and 3. The performance is represented in the chart by the
    _size of the dot _and the Y position corresponds to their salary. The performance metric is considered highly robust in your company. <br>

    Moving the sliders will update your employees' salary according to the strategy chosen. You can distribute the money as you wish between the two strategies
    (i.e., you can focus on just one), but all the money must be spent. <br>

    *grade groups= grouping job positions with similar skills, knowledge and experience and establishing job duties and levels of authority for that group
    <br> -->
    <br>
    <button id="firstStageButton">Proceed if you have a clear understanding of the scenario.</button>
</div>
<div id="secondStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    To aid in your decisions you will see a visualization of your colleagues and their salaries.
    In the chart below, each circle represents a colleague. The y-axis represents their salaries.
    The higher a circle is in the visualization, the more the colleague is paid.
    <br>
    <svg id="firstChart"></svg>
    <br>
    <button id="secondStageButton"> Next</button>
</div>
<div id="thirdStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    <p>
        In the visualization below, we now highlighted <span style="font-weight: bold; color: #0096c9;">Charlie</span>
        in <span style="font-weight: bold; color: #0096c9;"> blue </span>
        and <span style="font-weight: bold; color: #F2B93F;"> Sam </span> in <span
            style="font-weight: bold; color: #F2B93F;"> orange </span>
    </p>
    <ul>
        <li><span style="font-weight: bold; color: #0096c9;">Charlie</span> is paid <span
                style="font-weight: bold; color: #0096c9;"> a little less than 75k</span></li>
        <li><span style="font-weight: bold; color: #F2B93F;"> Sam </span> is paid <span
                style="font-weight: bold; color: #F2B93F;"> a little less than 40k </span></li>
    </ul>
    <svg id="secondChart"></svg>
    <br>
    <button id="thirdStageButton"> Next</button>
</div>
<div id="fourthStage" style="text-align: left" hidden="true">
    Please, approximate <span style="font-weight: bold; color: #98D462;"> Robin </span>'s salary (&#177; 2K) (the <span
        style="font-weight: bold; color: #98D462;">  green dot </span>) and click on next:
    <input id="inputTestRobin" type="text" placeholder="digits only"/> </input>
    <button id="fourthStageButton"> Next</button>
    <br>
    <span id="checkingValue" style="font-weight: bold; color: #f80b0b;"></span>
</div>
<div id="fifthStage" style="text-align: left" hidden="true">
    <h1> Excellent!</h1>
    <!--<p>To make good salary decisions you need more information. <br> -->
    In your company, the following information is available:

    <ul>
        <li><b>Performance </b>: each employee's performance over the past year is categorized as either high, medium,
            or low.
        </li>
        <li><b>Grade groups</b>: employees are grouped together with other employees based on how similar their skills,
            knowledge, job duties, and levels of authority are. The company has three grade groups named A, B and C.
        </li>
        <li><b>Gender</b>: employee's gender, either woman or man&#42; <br>
            <br>
            <br>
            <span> &#42;: For simplicity we will focus on binary gender definitions while acknowledging that gender is not binary. </span>

    </ul>
    </p>

    <button id="fifthStageButton"> Next</button>
</div>
<div id="sixthStage" style="text-align: left" hidden="true">
    <h1> Grade groups:</h1>
    <p>
        Recall the chart below and your colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span>
        and <span style="font-weight: bold; color: #F2B93F;"> Sam</span>. <br>
        Currently, employees are initially positioned randomly. Once you click the "add grade groups" button below, the
        visualization will change to move each employee into a grade group.
        Grade group A will be on the left, grade group B will be in the center and grade group C will be on the right.
    </p>
    <div style="display: flex">
        <svg id="chartGradeGroups"></svg>
        <br>
        <button id="sixthStageButton"> Add grade groups</button>
        <div>
            <div id="seventhStage" style="text-align: left" hidden="true">
                As you can see <span style="font-weight: bold; color: #F2B93F;"> Sam </span> belongs to
<!--                <span style="font-weight: bold; color: #7570b3;"> grade group B</span> -->
                grade group B
                and
                <span style="font-weight: bold; color: #0096c9;">Charlie</span> belongs to
<!--                <span style="font-weight: bold; color: #1b9e77;">grade group C</span>.<br>-->
                grade group C. <br>
                To be able to distinguish between employees with very similar salaries, we will add some "jitter". That
                means that
                the horizontal position of each employee will be moved slightly, to the left or to the right.
                <button id="seventhStageButton">Add Jitter</button>
            </div>
            <div class="breakForSlider"></div>
            <br>
            <div id="eighthStage" style="text-align: left" hidden="true">
                <!-- OLD COLORS : #D95F02 #7570B3 #1B9E77 -->
                The employees inside the <span
                    style="font-weight: bold; color: #000000;">left rectangle </span>
                belong
                to <span style="font-weight: bold; color: #000000;"> grade group A </span> <br>
                The employees inside the <span
                    style="font-weight: bold; color: #000000;">middle rectangle </span>
                belong to <span style="font-weight: bold; color: #000000;"> grade group B</span> <br>
                The employees inside the <span
                    style="font-weight: bold; color: #000000;">right rectangle </span>
                belong to <span style="font-weight: bold; color: #000000;"> grade group C</span> <br>
                <button id="eighthStageButton"> Next</button>
            </div>

            <div id="ninethStage" style="text-align: left" hidden="true">
                <br>
                <!--                To confirm your understanding, please select the grade group <span-->
                <!--                    style="font-weight: bold; color: #98D462;"> Robin </span> belongs and click on next-->
                <fieldset>
                    <legend style="font-size: medium">To confirm your understanding, please select the grade group <span
                            style="font-weight: bold; color: #98D462;"> Robin </span> belongs and click on next
                    </legend>
                    <div>
                        <input type="radio" id="gg3" name="grade-group-test" value="3"/>
                        <label for="gg3">A</label>
                    </div>
                    <div>
                        <input type="radio" id="gg4" name="grade-group-test" value="4"/>
                        <label for="gg4">B</label>
                    </div>
                    <div>
                        <input type="radio" id="gg5" name="grade-group-test" value="5"/>
                        <label for="gg5">C</label>
                    </div>
                </fieldset>
                <br>
                <span id="checkingValueGradeGroup" style="font-weight: bold; color: #f80b0b;"></span>
                <button id="ninethStageButton"> Next</button>
            </div>
        </div>
    </div>

</div>
<div id="tenthStage" style="text-align: left" hidden="true">
    <h1>Excellent! Now the <b>performance</b></h1>
    <p> The company evaluates performance using rigorous and trustworthy methods. Each employee can have one of three
        performance levels: low performance, medium performance, or high performance.<br>
        Recall this chart and your colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span> and
        <span style="font-weight: bold; color: #F2B93F;"> Sam</span>.
        <span style="font-weight: bold; color: #0096c9;">Charlie</span> earns a bit less than <span
                style="font-weight: bold; color: #0096c9;">75k</span> and belongs to <span
                style="font-weight: bold; color: #0096c9;">grade group C</span>.
        <span style="font-weight: bold; color: #F2B93F;">Sam</span> earns between <span
                style="font-weight: bold; color: #F2B93F;">35k and 40k</span> and belongs to <span
                style="font-weight: bold; color: #F2B93F;">grade group B</span>.<br>
    </p>
    <p>In the visualization, performance is visualized by the size of dots.</p>
    <div style="display: flex;">
        <svg id="chartPerformance"></svg>
        <div>
            <div>
                For each employee we will show their performance by the circle size. Employees with the same performance
                will have a circle of the same size:<br>
                <div>
                    <svg style="max-width: 100%; height: auto;" width="20" viewBox="0,0,20,20" height="20">
                        <g>
                            <circle cx="10" cy="10" r="4.375"></circle>
                        </g>
                    </svg>
                    Low performance will be represented by a small circle. <br>
                </div>
                <div><!--<span style='font-size:30px;'>&#9679;</span>  -->
                    <svg style="max-width: 100%; height: auto;" width="20" viewBox="0,0,20,20" height="20">
                        <g>
                            <circle cx="10" cy="10" r="6.875"></circle>
                        </g>
                    </svg>
                    Medium performance will be represented by a medium-sized circle.<br>
                </div>
                <div><!--<span style='font-size:45px;'>&#9679;</span>  -->
                    <svg style="max-width: 100%; height: auto;" width="20" viewBox="0,0,20,20" height="20">
                        <g>
                            <circle cx="10" cy="10" r="9.375"></circle>
                        </g>
                    </svg>
                    High performance will be represented by a large circle.
                </div>
            </div>
            <button id="tenthStageButton"> Add the performance</button>
            <div id="eleventhStage" style="text-align: left" hidden="true">
                <br>
                <span style="font-weight: bold; color: #0096c9;">Charlie</span> is represented by the largest size of
                circle and
                therefore Charlie's performance is <span style="font-weight: bold; color: #0096c9;">high</span>
                <br>
                <span style="font-weight: bold; color: #F2B93F;">Sam</span> is represented by the smallest size of
                circle and
                therefore Sam's performance is <span style="font-weight: bold; color: #F2B93F;">low</span>
                <button id="eleventhStageButton">Proceed to next stage</button>
            </div>
            <div id="twelvethStage" style="text-align: left" hidden="true">
                <br>
                <fieldset>
                    <legend style="font-size: medium">Select <span
                            style="font-weight: bold; color: #98D462;"> Robin’s </span>
                        performance evaluation and click next
                    </legend>
                    <div>
                        <input type="radio" id="lowP" name="performance-test" value="lowperformers"/>
                        <label for="lowP">Low performance</label>
                    </div>
                    <div>
                        <input type="radio" id="medP" name="performance-test" value="mediumperformers"/>
                        <label for="medP">Medium performance</label>
                    </div>
                    <div>
                        <input type="radio" id="highP" name="performance-test" value="highperformers"/>
                        <label for="highP">High performance</label>
                    </div>
                </fieldset>
                <br>
                <span id="checkingValuePerf" style="font-weight: bold; color: #f80b0b;"></span>
                <button id="twelvethStageButton"> Go to the next stage!</button>
            </div>
        </div>
    </div>
</div>
<div id="thirteenthStage" style="text-align: left" hidden="true">
    <h2>Last questions regarding salary, grade group and performance!</h2>
    After studying, <span style="font-weight: bold; color: #0096c9;">Charlie</span>, <span
        style="font-weight: bold; color: #F2B93F;">Sam</span> and <span
        style="font-weight: bold; color: #98D462;">Robin</span>. Can you answer to the following questions for <span
        style="font-weight: bold; color: #D95F02;">Jamie</span> ?
    <br>
    <svg id="chartFinalTest"></svg>
    <br>

    <div>
        <p style="width: 15vw; min-width: 300px; float: left;padding: 20px"> Estimate <span
                style="font-weight: bold; color: #D95F02;"> Jamie's</span> salary(&#177; 2.5k) <br> <input
                id="inputJamieSalary" type="text"> <span id="checkingSalaryJamie"
                                                         style="font-weight: bold; color: #f80b0b;"></span>
        </p>
        <fieldset style="width: 15vw; min-width: 300px;float: left;padding: 20px">
            <legend style="font-size: 1rem">What is <span style="font-weight: bold; color: #D95F02;">Jamie's </span>grade
                group ?
            </legend>
            <span id="checkingGGJamie" style="font-weight: bold; color: #f80b0b;"></span>
            <div>
                <input type="radio" id="ggJamie3" name="grade-group-test-jamie" value="3"/>
                <label for="ggJamie3">A</label>
            </div>
            <div>
                <input type="radio" id="ggJamie4" name="grade-group-test-jamie" value="4"/>
                <label for="ggJamie4">B</label>
            </div>
            <div>
                <input type="radio" id="ggJamie5" name="grade-group-test-jamie" value="5"/>
                <label for="ggJamie5">C</label>
            </div>
        </fieldset>
        <fieldset style="width: 15vw; min-width: 300px;float: left;padding: 20px">
            <legend style="font-size: 1rem">What is <span style="font-weight: bold; color: #D95F02;">Jamie's </span>performance
                ?
            </legend>
            <span id="checkingPerfJamie" style="font-weight: bold; color: #f80b0b;"></span>
            <div>
                <input type="radio" id="lowJamieP" name="performance-test-jamie" value="lowperformers"/>
                <label for="lowJamieP">Low</label>
            </div>
            <div>
                <input type="radio" id="medJamieP" name="performance-test-jamie" value="mediumperformers"/>
                <label for="medJamieP">Medium</label>
            </div>
            <div>
                <input type="radio" id="highJamieP" name="performance-test-jamie" value="highperformers"/>
                <label for="highJamieP">High</label>
            </div>
        </fieldset>

    </div>
    <br>
    <button id="thirteenthStageButton"> Next</button>
</div>
<div id="fourteenthStage" style="text-align: center" hidden="true">
    <br>

    <button id="fourteenthStageButton"> Next</button>
</div>
<div id="fifteenthStage" style="text-align: center" hidden="true">
    <br>

    <button id="fifteenthStageButton"> Next</button>
</div>
<script type="text/javascript" src="./html/js/visualizations/buttonbehaviours.js"></script>

<script type="text/javascript">

  $('body').on('next', function (e, type) {
// The if clause below ensures that this specific instance of a next button press is only triggered when the id of the element corresponds to the one being defined above.

    if (type === 'introduction_3') {
      createSteoreotypedVisualizationWomenLower()
      createSteoreotypedVisualizationMenLower()
      createnonSteoreotypedVisualizationWomenLower()
      createnonSteoreotypedVisualizationMenLower()
    }

  })
</script>
</body>
</html>