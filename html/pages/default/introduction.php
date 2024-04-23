<!DOCTYPE html>
<html lang="en" xmlns:style="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Introduction to the task</title>
  <!-- Load revisit-communicate to be able to send data to reVISit -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"> </script>

    <script src="html/js/lib/linear-models.esm@50.js"> </script>
  <!--<script type="text/javascript" src="scatterplot-dots-interaction.js"></script> -->

</head>
<body>
<div id="firstStage" style="text-align: left">

    <h1 > Background Explanation</h1>
    <p><b>Imagine the following scenario</b></p>
    You are the person in charge of your company's annual salary review. The CEO has allocated 25,000 StudyCoin (a currency created for this study) to increase the employees salaries — your colleagues.
    The CEO instructed you to allocate the 25,000 as you want between two objectives:
    <ul>
        <li>
            reducing pay inequity focusing on gender differences.</li>
        <li>
            allocating merit raises based on last year’s individual performance.</li>
    </ul>

    <!-- Each colleague has been categorized into 3 grade groups*: 1, 2 and 3. The performance is represented in the chart by the
    _size of the dot _and the Y position corresponds to their salary. The performance metric is considered highly robust in your company. <br>

    Moving the sliders will update your employees' salary according to the strategy chosen. You can distribute the money as you wish between the two strategies
    (i.e., you can focus on just one), but all the money must be spent. <br>

    *grade groups= grouping job positions with similar skills, knowledge and experience and establishing job duties and levels of authority for that group
    <br> -->
    <button id="firstStageButton">Proceed if you have a clear understanding of the scenario. </button>
</div>
<div id="secondStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    To aid in your decisions you will be provided a visualization of your colleagues and their salaries.
    In the chart below, each circle represents a person. The y-axis represents their salaries.
    In other words, the higher the colleagues are in the figure, the more they are paid.
    <svg id="firstChart"> </svg> <br>
    <button id="secondStageButton"> Next</button>
</div>
<div id="thirdStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    <p>
    Here <span style="font-weight: bold; color: #0096c9;">Charlie</span>
    is represented in <span style="font-weight: bold; color: #0096c9;"> blue </span> and
    <span style="font-weight: bold; color: #F2B93F;"> Sam </span> is represented in
    <span style="font-weight: bold; color: #F2B93F;"> orange </span>
    </p>
    <ul>
        <li> <span style="font-weight: bold; color: #0096c9;">Charlie</span> is paid  <span style="font-weight: bold; color: #0096c9;"> just below 75,000</span></li>
        <li> <span style="font-weight: bold; color: #F2B93F;"> Sam </span> is paid <span style="font-weight: bold; color: #F2B93F;"> a little less than 40,000 </span></li>
        </ul>
    <svg id="secondChart"> </svg> <br>
    <button id="thirdStageButton"> Next </button>
</div>
<div id="fourthStage" style="text-align: left" hidden="true">
    <br>
    Please, approximate <span style="font-weight: bold; color: #3EBF30;"> Robin </span>'s salary (&#177; 2K) (the <span style="font-weight: bold; color: #3EBF30;">  green dot </span>) and click on next:
    <input id="inputTestRobin" type="text" placeholder="digits only" /> </input>
    <button id="fourthStageButton">  Next</button>
    <br>
    <span id="checkingValue" style="font-weight: bold; color: #f80b0b;"></span>
</div>
<div id="fifthStage" style="text-align: left" hidden="true">
    <h1> Excellent!</h1>
    <p>To make good salary decisions you need more information. <br>
        In your company, the following information is available:

    <ul>
        <li> <b>Their last year's performance </b>: Individual performance was categorized as high, medium and low.</li>
        <li> <b>Their grade groups</b>: The company uses a detailed grading system, based on employees skills, knowledge, job duties and levels of authority. For simplicity we assume we have grade groups A, B and C. </li>
        <li> <b>Their gender</b>: Woman or Man&#42; <br>
    <br>
    <br>
       <span> &#42;: For simplicity we will focus on binary gender definitions while acknowledging that gender is far from binary. </span>

</ul>
    </p>

    <button id="fifthStageButton">  Next</button>
</div>
<div id="sixthStage" style="text-align: left" hidden="true">
    <h1> Grade groups:</h1>
    <p>
        Recall the chart below and your two colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span> and <span style="font-weight: bold; color: #F2B93F;"> Sam </span>. <br>
        The employees who belong to the same grade group will be grouped together. Grade group A will be on the left of the chart, Grade group B will be in the center and Grade group B will be on the right.
    </p>
    <svg id="chartGradeGroups"> </svg> <br>
    <button id="sixthStageButton">  Add grade groups</button>
</div>
<div id="seventhStage" style="text-align: left" hidden="true">
    As you can see <span style="font-weight: bold; color: #0096c9;">Charlie</span> belongs to <span style="font-weight: bold; color: #0096c9;">Grade group C</span> and  <span style="font-weight: bold; color: #F2B93F;"> Sam </span>
    belongs to  <span style="font-weight: bold; color: #F2B93F;"> Grade group B</span>. <br>
    To be able to distinguish between employees with very similar salaries, we will add some "jitter". That means that the horizontal position of each employee will be moved slightly, to the left or to the right.
    <button id="seventhStageButton">  Add Jitter</button>
</div>
<div id="eighthStage" style="text-align: left" hidden="true">
    All the employees that are inside the <span style="font-weight: bold; color: #f2593f;">red rectangle </span> belong to <span style="font-weight: bold; color: #f2593f;"> Grade group A </span> <br>
    All the employees that are inside the <span style="font-weight: bold; color: #3f7ef2;">blue rectangle </span> belong to <span style="font-weight: bold; color: #3f7ef2;"> Grade group B</span> <br>
    All the employees that are inside the <span style="font-weight: bold; color: #799453FF;">green rectangle </span> belong to <span style="font-weight: bold; color: #799453FF;"> Grade group C</span> <br>
    <button id="eighthStageButton">  Next </button>
</div>
<div id="ninethStage" style="text-align: left" hidden="true">
    <br>
    To confirm your understanding, please select the grade group <span style="font-weight: bold; color: #3EBF30;"> Robin </span> belongs and click on next
    <fieldset>
        <legend style="font-size: medium">Select a grade group :</legend>
        <div>
            <input type="radio" id="gg3" name="grade-group-test" value="3" />
            <label for="gg3">A</label>
        </div>
        <div>
            <input type="radio" id="gg4" name="grade-group-test" value="4" />
            <label for="gg4">B</label>
        </div>
        <div>
            <input type="radio" id="gg5" name="grade-group-test" value="5" />
            <label for="gg5">C</label>
        </div>
    </fieldset>
    <br>
    <span id="checkingValueGradeGroup" style="font-weight: bold; color: #f80b0b;"></span>
    <button id="ninethStageButton">  Next </button>
</div>
<div id="tenthStage" style="text-align: left" hidden="true">
    <br>
    <h1>Excellent! Now the <b>performance</b></h1>
    <p> Performance has been evaluated using rigorous, tried-and-tested methodologies. Performance is split into three levels: low performers, medium performers and high performers. <br>
        In the visualization, performance is visualized by the size of dots<br>
        Recall this chart and your two colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span> and <span style="font-weight: bold; color: #F2B93F;"> Sam </span>. <br>
        <span style="font-weight: bold; color: #0096c9;">Charlie</span> earns <span style="font-weight: bold; color: #0096c9;">74,000</span> and belongs to <span style="font-weight: bold; color: #0096c9;">grade group C</span>
        <br><span style="font-weight: bold; color: #F2B93F;">Sam</span> earns <span style="font-weight: bold; color: #F2B93F;">38,500</span> and belongs to <span style="font-weight: bold; color: #F2B93F;">grade group B</span><br>
    </p>
    <svg id="chartPerformance"> </svg> <br>
    Employees’ performance category will be represented by the dots' size.
    Employees in the same category will be represented by dots of the same size:<br>
    <span style='font-size:20px;'>&#9679;</span> Low performance will be represented by a small circle. <br>
    <span style='font-size:30px;'>&#9679;</span>  Medium performance will be represented by a medium-sized circle.<br>
    <span style='font-size:45px;'>&#9679;</span>  High performance will be represented by a large circle.

    <button id="tenthStageButton">  Add the performance</button>
</div>
<div id="eleventhStage" style="text-align: left" hidden="true">
    <span style="font-weight: bold; color: #0096c9;">Charlie</span> is represented by the largest size of circle and therefore Charlie's performance is categorized as <span style="font-weight: bold; color: #0096c9;">high</span>
    <br>
    <span style="font-weight: bold; color: #F2B93F;">Sam</span> is represented by the smallest size of circle and therefore Sam's performance is categorized as <span style="font-weight: bold; color: #F2B93F;">low</span>
    <button id="eleventhStageButton">Proceed to next stage</button>
</div>
<div id="twelvethStage" style="text-align: left" hidden="true">
    <br>
    Select in which group <span style="font-weight: bold; color: #3EBF30;"> Robin </span> belongs to and click on next:
    <fieldset>
        <legend style="font-size: medium">Select a performance :</legend>
         <div>
            <input type="radio" id="lowP" name="performance-test" value="lowperformers" />
            <label for="lowP">Low performance</label>
        </div>
        <div>
            <input type="radio" id="medP" name="performance-test" value="mediumperformers" />
            <label for="medP">Medium performance</label>
        </div>
        <div>
            <input type="radio" id="highP" name="performance-test" value="highperformers" />
            <label for="highP">High performance</label>
        </div>
    </fieldset>
    <br>
    <span id="checkingValuePerf" style="font-weight: bold; color: #f80b0b;"></span>
    <button id="twelvethStageButton"> Go to the next stage! </button>
</div>
<div id="thirteenthStage" style="text-align: left" hidden="true">
    <h2>Last questions regarding salary, grade group and performance!</h2>
    After, <span style="font-weight: bold; color: #0096c9;">Charlie</span>, <span style="font-weight: bold; color: #F2B93F;">Sam</span> and <span style="font-weight: bold; color: #45f145;">Robin</span>. Can you answer to the following questions for <span style="font-weight: bold; color: #BFBD30;">Jamie</span> ?
    <svg id="chartFinalTest"></svg> <br>

    <div>
        <p style="width: 33%;float: left;padding: 20px"> Approximate salary of<span style="font-weight: bold; color: #BFBD30;"> Jamie </span> (&#177; 2500) <br> <input id="inputJamieSalary" type="text">  <span id="checkingSalaryJamie" style="font-weight: bold; color: #f80b0b;"></span>
        </p>
        <fieldset style="width: 33%;float: left;padding: 0px">
            <legend style="font-size: 1rem">What is <span style="font-weight: bold; color: #BFBD30;">Jamie's </span>grade group ?</legend> <span id="checkingGGJamie" style="font-weight: bold; color: #f80b0b;"></span>
            <div>
                <input type="radio" id="ggJamie3" name="grade-group-test-jamie" value="3" />
                <label for="ggJamie3">A</label>
            </div>
            <div>
                <input type="radio" id="ggJamie4" name="grade-group-test-jamie" value="4" />
                <label for="ggJamie4">B</label>
            </div>
            <div>
                <input type="radio" id="ggJamie5" name="grade-group-test-jamie" value="5" />
                <label for="ggJamie5">C</label>
            </div>
        </fieldset>
        <fieldset style="width: 33%;float: left;padding: 0px">
        <legend style="font-size: 1rem">What is <span style="font-weight: bold; color: #BFBD30;">Jamie's </span>performance ?</legend> <span id="checkingPerfJamie" style="font-weight: bold; color: #f80b0b;"></span>
        <div>
            <input type="radio" id="lowJamieP" name="performance-test-jamie" value="lowperformers" />
            <label for="lowJamieP">Low</label>
        </div>
        <div>
            <input type="radio" id="medJamieP" name="performance-test-jamie" value="mediumperformers" />
            <label for="medJamieP">Medium</label>
        </div>
        <div>
            <input type="radio" id="highJamieP" name="performance-test-jamie" value="highperformers" />
            <label for="highJamieP">High</label>
        </div>
    </fieldset>

    </div>
    <br><button id="thirteenthStageButton">  Next </button>
</div>
<div id="fourteenthStage" style="text-align: center" hidden="true">
    <br>

    <button id="fourteenthStageButton">  Next </button>
</div>
<div id="fifteenthStage" style="text-align: center" hidden="true">
    <br>

    <button id="fifteenthStageButton">  Next </button>
</div>
<script type="text/javascript" src="./html/js/visualizations/buttonbehaviours.js"></script>


</body>
</html>