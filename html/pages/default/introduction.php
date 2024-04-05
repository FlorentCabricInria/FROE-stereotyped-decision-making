<!DOCTYPE html>
<html lang="en" xmlns:style="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Introduction to the task</title>
  <!-- Load revisit-communicate to be able to send data to reVISit -->
  <script src="../../../../testRevisitFCInria/public/js/revisit-communicate.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"> </script>

    <script src="html/js/lib/linear-models.esm@50.js"> </script>
  <!--<script type="text/javascript" src="scatterplot-dots-interaction.js"></script> -->

</head>
<body>
<div id="firstStage" style="text-align: left">

    <h1> Background Explanation</h1>
    <p><b>Imagine the following scenario</b></p>
    You are the person in charge of the company's annual salary review. The CEO gives you 25,000 euros to increase the salary of the employees -- your colleagues.
    The CEO told you to distribute the 25,000 as you want between two strategies:
    <ul>
        <li>
            reducing the gender pay gap (whether it's in favor of men or women)</li>
        <li>
            increasing people’s salaries based on their last year's performance.</li>
    </ul>

    <!-- Each colleague has been categorized into 3 grade groups*: 1, 2 and 3. The performance is represented in the chart by the
    _size of the dot _and the Y position corresponds to their salary. The performance metric is considered highly robust in your company. <br>

    Moving the sliders will update your employees' salary according to the strategy chosen. You can distribute the money as you wish between the two strategies
    (i.e., you can focus on just one), but all the money must be spent. <br>

    *grade groups= grouping job positions with similar skills, knowledge and experience and establishing job duties and levels of authority for that group
    <br> -->
    <button id="firstStageButton"> Do you understand ? If so, click on this button </button>
</div>
<div id="secondStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    To make your choice you will see a visual representation of your colleagues.
    In the following chart, each circle represents one of your colleague.
    The y-axis represents the salary of this colleague. In other words, the higher colleagues are in the chart, the more they are paid.
    <svg id="firstChart"> </svg> <br>
    <button id="secondStageButton">  Click to see an example</button>
</div>
<div id="thirdStage" style="text-align: left" hidden="true">
    <h1> Background Explanation</h1>
    <p>
    Here <span style="font-weight: bold; color: #0096c9;">Charlie</span>
    is represented in <span style="font-weight: bold; color: #0096c9;"> blue </span> and
    <span style="font-weight: bold; color: #a8542b;"> Sam </span> is represented in
    <span style="font-weight: bold; color: #a8542b;"> orange </span>
    </p>
    <ul>
        <li> <span style="font-weight: bold; color: #0096c9;">Charlie</span> is paid  <span style="font-weight: bold; color: #0096c9;"> a bit less than 75,000</span></li>
        <li> <span style="font-weight: bold; color: #a8542b;"> Sam </span> is paid <span style="font-weight: bold; color: #a8542b;"> a bit less than 40,000 </span></li>
        </ul>
    <svg id="secondChart"> </svg> <br>
    <button id="thirdStageButton"> Do you understand ? If so, click on this button  </button>
</div>
<div id="fourthStage" style="text-align: left" hidden="true">
    <br>
    If you think you did understand, please enter <span style="font-weight: bold; color: #059804;"> Robin </span>'s salary (&#177; 2000) and click on next:
    <input id="inputTestRobin" type="text"> </input>
    <button id="fourthStageButton">  Next</button>
    <br>
    <span id="checkingValue" style="font-weight: bold; color: #f80b0b;"></span>
</div>
<div id="fifthStage" style="text-align: left" hidden="true">
    <h1> Excellent!</h1>
    <p>But to make a decision about salaries, you need more information about your colleagues than just their salaries. <br>
    In your company, employees are also categorized according to other attributes:
        <ul>
        <li> <b>Their last year's performance </b>: The high performers, medium performers and low performers</li>
        <li> <b>Their grade groups</b>: Grade group 3, Grade group 4 and Grade group 5 . "Grade groups" categorize employees with similar skills, knowledge, job duties and levels of authority </li>
        <li> <b>Their gender</b>: Woman or Man&#42; <br>
    <br>
    <br>
       <span> &#42;: For simplicity's sake, we'll only use binary genders, but gender is far from binary. If you are interested in the gender diversity in the workplace, you can read the following scientific papers: </span>

</ul>
    </p>

    <button id="fifthStageButton">  Next</button>
</div>
<div id="sixthStage" style="text-align: left" hidden="true">
    <h1> Grade Groups:</h1>
    <p>In our visualization, grade groups are represented at different positions <br>
        Remember this chart and your two colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span> and <span style="font-weight: bold; color: #a8542b;"> Sam </span>:
    </p>
    <svg id="chartGradeGroups"> </svg> <br>
    The employees who belong to the same grade group will be grouped together. The grade group 3 will be on the left of the chart, the grade group 4 will be in the center and the grade group 5 will be on the right.
    <br>
    <button id="sixthStageButton">  Adding grade groups to our visualization</button>
</div>
<div id="seventhStage" style="text-align: left" hidden="true">
    <br>
    As you can see <span style="font-weight: bold; color: #0096c9;">Charlie</span> belongs to <span style="font-weight: bold; color: #0096c9;">Grade Group 5</span> and  <span style="font-weight: bold; color: #a8542b;"> Sam </span>
    belongs to  <span style="font-weight: bold; color: #a8542b;"> Grade Group 4 </span>. <br>
    To be able to distinguish the employees — who are still your colleagues – we will add some "jitter". That means that the horizontal position of each dot will be moved slightly to the left or to the right.
    <button id="seventhStageButton">  Add Jitter</button>
</div>
<div id="eighthStage" style="text-align: left" hidden="true">
    <br>
    All the employees that are inside the <span style="font-weight: bold; color: #f80b0b;">red rectangle </span> belong to <span style="font-weight: bold; color: #f80b0b;"> Grade Group 3 </span> <br>
    All the employees that are inside the <span style="font-weight: bold; color: #0045da;">blue rectangle </span> belong to <span style="font-weight: bold; color: #0045da;"> Grade Group 4</span> <br>
    All the employees that are inside the <span style="font-weight: bold; color: #054f04;">green rectangle </span> belong to <span style="font-weight: bold; color: #054f04;"> Grade Group 5 </span> <br>
  <br>  <button id="eighthStageButton">  Next </button>
</div>
<div id="ninethStage" style="text-align: left" hidden="true">
    <br>
    If you think you did understand, please enter the grade group to which <span style="font-weight: bold; color: #059804;"> Robin </span> belongs and click on next
    <fieldset>
        <legend>Select a Grade Group :</legend>
        <div>
            <input type="radio" id="gg3" name="grade-group-test" value="3" checked />
            <label for="gg3">3</label>
        </div>
        <div>
            <input type="radio" id="gg4" name="grade-group-test" value="4" />
            <label for="gg4">4</label>
        </div>
        <div>
            <input type="radio" id="gg5" name="grade-group-test" value="5" />
            <label for="gg5">5</label>
        </div>
    </fieldset>
    <br>
    <span id="checkingValueGradeGroup" style="font-weight: bold; color: #f80b0b;"></span>
    <button id="ninethStageButton">  Next </button>
</div>
<div id="tenthStage" style="text-align: left" hidden="true">
    <br>
    <h1>Excellent! Now the <b>performance</b></h1>
    <p> Performance has been calculated using rigorous, tried-and-tested methodologies. Performance is split into three levels: low performers, middle performers and high performers.
        In the visualization, performance is visualized by the size of dots<br>
        Remember this chart and your two colleagues <span style="font-weight: bold; color: #0096c9;">Charlie</span> and <span style="font-weight: bold; color: #a8542b;"> Sam </span>. <br>
        <span style="font-weight: bold; color: #0096c9;">Charlie</span> earns <span style="font-weight: bold; color: #0096c9;">73885</span> and belongs to <span style="font-weight: bold; color: #0096c9;">grade group 5</span>
        <br><span style="font-weight: bold; color: #a8542b;">Sam</span> earns <span style="font-weight: bold; color: #a8542b;">38417</span> and belongs to <span style="font-weight: bold; color: #a8542b;">grade group 4</span><br>
    </p>
    <svg id="chartPerformance"> </svg> <br>
    The employees who performed equally well will be represented with the same dots' size.
    Employees with a similar level of performance will be represented by dots of the same size. <br>
    Low performers will be represented by a small circle. <br>
    Medium performers will be represented by a medium-sized circle. <br>
    High performers will be represented by a large circle. <br>
    <button id="tenthStageButton">  Adding the performance to our visualization</button>
</div>
<div id="eleventhStage" style="text-align: left" hidden="true">
    <span style="font-weight: bold; color: #0096c9;">Charlie</span> is represented by the largest size of circle and therefore belongs to the  <span style="font-weight: bold; color: #0096c9;">high performers group</span>
    <br>
    <span style="font-weight: bold; color: #a8542b;">Sam</span> is represented by the smallest size of circle and therefore belongs to the <span style="font-weight: bold; color: #a8542b;">low performers group</span>
    <button id="eleventhStageButton">  If you understood, click on this button </button>
</div>
<div id="twelvethStage" style="text-align: left" hidden="true">
    <br>
    Select in which group <span style="font-weight: bold; color: #059804;"> Robin </span> belongs to and click on next:
    <fieldset>
        <legend>Select a Performance :</legend>
         <div>
            <input type="radio" id="lowP" name="performance-test" value="lowperformers" />
            <label for="lowP">Low Performers</label>
        </div>
        <div>
            <input type="radio" id="medP" name="performance-test" value="mediumperformers" />
            <label for="medP">Medium Performers</label>
        </div>
        <div>
            <input type="radio" id="highP" name="performance-test" value="highperformers" checked />
            <label for="highP">High Performers</label>
        </div>
    </fieldset>
    <br>
    <span id="checkingValuePerf" style="font-weight: bold; color: #f80b0b;"></span>
    <button id="twelvethStageButton"> Go to the next stage! </button>
</div>
<div id="thirteenthStage" style="text-align: left" hidden="true">
    <h1>Last questions regarding salary, grade group and performance!</h1>
    After, <span style="font-weight: bold; color: #0096c9;">Charlie</span>, <span style="font-weight: bold; color: #a8542b;">Sam</span> and <span style="font-weight: bold; color: #054f04;">Robin</span>. Can you answer to the following questions for <span style="font-weight: bold; color: #c9ae00;">Jamie</span> ?
    <svg id="chartFinalTest"></svg> <br>

    <div>
        <p style="width: 33%;float: left;padding: 20px"> Approximate salary of<span style="font-weight: bold; color: #c9ae00;"> Jamie </span> (&#177; 2500) <br> <input id="inputJamieSalary" type="text">  <span id="checkingSalaryJamie" style="font-weight: bold; color: #f80b0b;"></span>
        </p>
        <fieldset style="width: 33%;float: left;padding: 20px">
            <legend>What is the Grade Group of <span style="font-weight: bold; color: #c9ae00;">Jamie</span> :</legend> <span id="checkingGGJamie" style="font-weight: bold; color: #f80b0b;"></span>
            <div>
                <input type="radio" id="ggJamie3" name="grade-group-test-jamie" value="3" checked />
                <label for="ggJamie3">3</label>
            </div>
            <div>
                <input type="radio" id="ggJamie4" name="grade-group-test-jamie" value="4" />
                <label for="ggJamie4">4</label>
            </div>
            <div>
                <input type="radio" id="ggJamie5" name="grade-group-test-jamie" value="5" />
                <label for="ggJamie5">5</label>
            </div>
        </fieldset>
        <fieldset style="width: 33%;float: left;padding: 20px">
        <legend>What is the performance level of <span style="font-weight: bold; color: #c9ae00;">Jamie</span> :</legend> <span id="checkingPerfJamie" style="font-weight: bold; color: #f80b0b;"></span>
        <div>
            <input type="radio" id="lowJamieP" name="performance-test-jamie" value="lowperformers" />
            <label for="lowJamieP">Low</label>
        </div>
        <div>
            <input type="radio" id="medJamieP" name="performance-test-jamie" value="mediumperformers" />
            <label for="medJamieP">Medium</label>
        </div>
        <div>
            <input type="radio" id="highJamieP" name="performance-test-jamie" value="highperformers" checked />
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