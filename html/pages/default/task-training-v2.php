<div id="row">
    <h1>Training part 2.</h1>
    <p>We will now add two features to support your decision-making: a grey line to see potential evolution of the
        employee salaries and
        interactivity to be able to visualize the effects of your decision in real time. These features will help you
        explore the full range of possible decisions.
        <br>
        Click on the button below to explore these two features.</p>

    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>
    <svg id="TrainingTaskChart2MenLowerStereotypedTraining1"></svg>
    <?php
              break;
            case 1:
            ?>
    <span></span>
    <svg id="TrainingTaskChart2WomenLowerStereotypedTraining1"></svg>

    <?php
              break;
            case 2:
            ?>
    <span> </span>
    <svg id="TrainingTaskChart2MenLowerNonStereotypedTraining1"></svg>

    <?php
              break;
            case 3:
              ?> <span> </span>
    <svg id="TrainingTaskChart2WomenLowerNonStereotypedTraining1"></svg>
    <?php
              break;
          }

      ?>
    <div id="slidersForTest" style="max-width: 100%; height: auto;width: 30%;float: right;padding: 0px">

        <div style="display: inline-block">
            <div class="input-group plus-minus-input">
                Reducing gender pay inequity: <input type="range" id="PayEquityTraining2" name="PayEquityTraining2"
                                                     min="0" max="25000" value="0" step="100"> &nbsp; &nbsp; &nbsp;
                <div class="input-group-button">
                    <button id="PayEquityTraining2MinusBtn" type="button" class="button hollow circle"
                            data-quantity="minus" data-field="quantity">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                </div>
                &nbsp;
                <div id="PayEquityTraining2PlusBtn" class="input-group-button">
                    <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>&nbsp; &nbsp;
                <output id="PEoutputtraining2">0</output>
                <br>

            </div>
        </div>
        <div style="display: inline-block">
            <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->

            <div class="input-group plus-minus-input">
                Performance-based merit raises: <input type="range" id="NotEquityTraining2" name="NotEquityTraining2"
                                                       min="0" max="25000" value="0" step="100"> &nbsp; &nbsp; &nbsp;
                <div class="input-group-button">
                    <button id="NotEquityTraining2MinusBtn" type="button" class="button hollow circle"
                            data-quantity="minus" data-field="quantity">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                </div>
                &nbsp;
                <!--                <input class="input-group-field" type="number" name="quantity" value="0">-->
                <div id="NotEquityTraining2PlusBtn" class="input-group-button">
                    <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>&nbsp;
                &nbsp;
                <output id="ALToutputtraining2">0</output>
                <br>

            </div>


            </div>
    </div>
        <br>
        <button id="wantToSeeTheFeatures" style="width:31%;"> Click here to see the new features</button>
        <div id="point1" hidden="true" style="max-width: 100%; height: auto;width: 100%;float: left;padding: 20px">
            <h3> Possible impact on salaries </h3>
            <span> By allocating the budget to each objective you will increase the salaries of some of the employees. We will represent the maximum salary a person can achieve (by either objective) by a thin gray line.
        The maximum limit of each employee’s line represents the maximum salary that this person can achieve among all the possible decisions.
        The grey lines will be visible <b> only when you will hover the sliders with the cursor of your mouse.</b>
 </span> <br>
            <button id="forecastVisBtn"> Add the gray lines</button>
            <br>
        </div>
        <div id="point2" hidden="true" style="max-width: 100%; height: auto;width: 100%;float: left;padding: 20px">
            <br>
            <h3>Visualization of decision results with real-time updates
            </h3>
            <span> Moving the sliders (on the right side of the chart) will allocate the budget to employees according to the objective (or combination of objectives).
            The modification of employee salaries will be visualized in real time, you will observe the dots moving vertically according to their allocated raise.</span>
            <br>
            <ul>
                <li> Merit raises: Merit raises allocate salary increases based on last year’s performance evaluation;
                    high performance will be awarded higher raises than medium or low performance.
                </li>
                <li> Pay equity: Pay equity raises allocate raises to reduce the equal gender pay gap (equal pay for
                    equal work), the dots representing the individuals from the underpaid group (either men or women)
                    will move accordingly
                </li>
            </ul>
            <button id="interactionVisBtn"> Add Interactivity</button>
            <br>
        </div>

        <!--        <div id="slidersForTest"hidden="true">-->

        <!--            &lt;!&ndash;   <span id="slidersLabelsTask2"> &ndash;&gt;-->
        <!--            <h5> Please, give it a try</h5>-->
        <!--            <div> Reducing gender pay inequity: <input type="range" id="PayEquityTraining2" name="PayEquityTraining2" min="0" max="25000" value="0" step="100">-->
        <!--            <button id="PayEquityTraining2MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>-->
        <!--                <button id="PayEquityTraining2PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>-->
        <!--                <output id="PEoutputtraining2">0</output><br>-->
        <!--            </div>-->
        <!--            <div> Performance-based merit raises: <input type="range" id="NotEquityTraining2" name="NotEquityTraining2" min="0" max="25000"  value="0" step="100" >-->
        <!--                <button id="NotEquityTraining2MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>-->
        <!--                <button id="NotEquityTraining2PlusBtn" style="float : inherit; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>-->
        <!--                <output id="ALToutputtraining2">0</output> <br>-->
        <!--            </div>-->
        <!--        </div> -->
        <br>
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
        <script type="text/javascript"
                src="./html/js/visualizations/taskTraining-v2-MenLowerNonStereotyped.js"></script>
        <?php
                break;
              case 3:
                ?>
        <script type="text/javascript"
                src="./html/js/visualizations/taskTraining-v2-WomenLowerNonStereotyped.js"></script>
        <?php
                break;
            }

        ?>
    </div>
