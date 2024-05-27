
<div id="row">
    <h1>Training part 2.</h1>
    <p>We will now add two features to support your decision-making: a grey line to see potential evolution of the employee salariess and
        interactivity to be able to visualize the effects of your decision in real time. These features will help you explore the full range of possible decisions.
        <br>
    Click on the button below to explore these two features.</p>

    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>  <svg id="TrainingTaskChart2MenLowerStereotypedTraining1"> </svg>
    <?php
              break;
            case 1:
            ?>
    <span></span><svg id="TrainingTaskChart2WomenLowerStereotypedTraining1"> </svg>

    <?php
              break;
            case 2:
            ?>
    <span> </span> <svg id="TrainingTaskChart2MenLowerNonStereotypedTraining1"> </svg>

    <?php
              break;
            case 3:
              ?> <span> </span>  <svg id="TrainingTaskChart2WomenLowerNonStereotypedTraining1"> </svg>
    <?php
              break;
          }

      ?>
    <!--<p>Each colleague has been categorized into 3 grade groups*: 1, 2 and 3. The performance is represented in the chart by the _size of the dot _and the Y position corresponds to their salary. The performance metric is considered highly robust in your company.</p>
    <p>Moving the sliders will update your employees&#39; salary according to the strategy chosen. You can distribute the money as you wish between the two strategies (i.e., you can focus on just one), but all the money must be spent.</p>
    <p>*grade groups= grouping job positions with similar skills, knowledge and experience and establishing job duties and levels of authority for that group</p>
-->
    <!-- <ul>
        <li id="point1"> 1. A grey line whose upper limit represents the maximum salary that a person can reach with your decision </li>
        <li id="point2" hidden="true"> 2. Interactivity. As you move the sliders, the salaries and therefore the visualization are updated in real time. </li>
    </ul> -->
    <br>
    <button id="wantToSeeTheFeatures"> Click here to see the new features: </button>
    <div id="point1" hidden="true">
        <h3> Possible impact on salaries </h3>
    <span> By allocating the budget to each objective you will increase the salaries of some of the employees. We will represent the maximum salary a person can achieve (by either objective) by a thin gray line.
        The maximum limit of each employee’s line represents the maximum salary that this person can achieve among all the possible decisions.
        The grey lines will be visible <b> only when you will hover the sliders with the cursor of your mouse.</b>
 </span> <br>
        <button id="forecastVisBtn" >  Add the gray lines</button><br>
    </div>
    <div id="point2" hidden="true">
        <h3>Visualization of decision results with real-time updates
        </h3>
        <span> Moving the sliders will allocate the budget to employees according to the objective (or combination of objectives).
            The modification of employee salaries will be visualized in real time, you will observe the dots moving vertically according to their allocated raise.</span> <br>
        <ul>
            <li> Merit raises: Merit raises allocate salary increases based on last year’s performance evaluation; high performance will be awarded higher raises than medium performance.</li>
            <li> Pay equity: Pay equity raises allocate raises to reduce the equal gender pay gap (equal pay for equal work), the dots representing the individuals from the underpaid group (either men or women) will move accordingly</li>
        </ul>
        <button id="interactionVisBtn">  Add Interactivity</button><br>
    </div>

        <div id="slidersForTest"hidden="true">

            <!--   <span id="slidersLabelsTask2"> -->
            <h5> Please, give it a try</h5>
            <div> Reducing gender pay inequity: <input type="range" id="PayEquityTraining2" name="PayEquityTraining2" min="0" max="25000" value="0" step="100">
            <button id="PayEquityTraining2MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
                <button id="PayEquityTraining2PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
                <output id="PEoutputtraining2">0</output><br>
            </div>
            <div> Performance-based merit raises: <input type="range" id="NotEquityTraining2" name="NotEquityTraining2" min="0" max="25000"  value="0" step="100" >
                <button id="NotEquityTraining2MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
                <button id="NotEquityTraining2PlusBtn" style="float : inherit; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
                <output id="ALToutputtraining2">0</output> <br>
            </div>
        </div> <br>
    <!--  <script type="text/javascript" src="./html/js/visualizations/taskTraining-v2.js"></script> -->

      <?php
            $extension = array(".csv");
            $subs   = array("");
            $cond = str_replace($extension,$subs,$condition);
            $mod = $cond % 4;
            switch ($mod){
              case 0:
                ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v2-MenLowerStereotyped.js"></script>
      <?php
                break;
              case 1:
              ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v2-WomenLowerStereotyped.js"></script>
      <?php
                break;
              case 2:
              ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v2-MenLowerNonStereotyped.js"></script>
      <?php
                break;
              case 3:
                ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v2-WomenLowerNonStereotyped.js"></script>
      <?php
                break;
            }

        ?>
</div>