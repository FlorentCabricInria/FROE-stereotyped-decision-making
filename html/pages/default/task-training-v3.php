
<div id="row">
    <h1>Training part 3 (final).</h1>
    <p>We will now add two features to support your decision making. These features will help you to explore the impact of the decisions you make.
        <br> Two pieces of information will be available for you. Click on the button in the grey area next to the chart.</p>

            <!--<br> <button id="addAllocation" hidden="true"> Add the next piece of information : the distribution of the allocations </button>
        <span id="LineSummaryAllocation" hidden="true">You have allocated <span id="AllocationGPG"> 0 </span> for reducing equal gender pay gap and <span id="AllocationNotGPG"> 0 </span> for rewarding the performance. <span id="instrAlloc" style="color: darkred"> The distribution of allocation are updated in real time!</span>

      <br>  <button id="addMoneyLeft" hidden="true"> Add the third piece of information : the amount of money left  </button>
      <span id="LineMoneyLeft" hidden="true">You have <span id="Leftovers"> 0</span> left to allocate. <span id="instrleft" style="color: darkred"> This text tells you how much money you have left to allocate</span>
    -->
    <br>
    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?>   <svg id="TrainingTaskChart3MenLowerStereotypedTraining1" > </svg>
    <?php
              break;
            case 1:
            ?>
  <svg id="TrainingTaskChart3WomenLowerStereotypedTraining1"> </svg>

    <?php
              break;
            case 2:
            ?>
   <svg id="TrainingTaskChart3MenLowerNonStereotypedTraining1"> </svg>

    <?php
              break;
            case 3:
              ?> <svg id="TrainingTaskChart3WomenLowerNonStereotypedTraining1"> </svg>
    <?php
              break;
          }

      ?>
    <br>

    <div id="slidersForTest" style="max-width: 100%; height: auto;width: 30%;float: right;padding: 0px">
        <!--   <span id="slidersLabelsTask2"> -->
<!--       <div>-->
<!--           <button id="PayEquityTraining3MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>    &nbsp;-->
<!--           <button id="PayEquityTraining3PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>    &nbsp;-->
<!--           <output id="PEoutputTraining3">0</output><br>-->
<!--       </div>-->
        <div style="display: inline-block">

            <div class="input-group plus-minus-input">
                Reducing gender pay inequity: <input type="range" id="PayEquityTraining3" name="PayEquityTraining3" min="0" max="25000" value="0" step="100">   &nbsp; &nbsp; &nbsp;

                <div class="input-group-button">
                    <button  id="PayEquityTraining3MinusBtn"type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                </div>
                &nbsp;
                <!--                <input class="input-group-field" type="number" name="quantity" value="0">-->
                <div  id="PayEquityTraining3PlusBtn" class="input-group-button">
                    <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>&nbsp; &nbsp;
                <output id="PEoutputTraining3">0</output> <br>

            </div>
        </div>
        <div style="display: inline-block">
            <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->

            <div class="input-group plus-minus-input">
                Performance-based merit raises: <input type="range" id="NotEquityTraining3" name="NotEquityTraining3" min="0" max="25000"  value="0" step="100" >    &nbsp; &nbsp; &nbsp;
                <div class="input-group-button">
                    <button  id="NotEquityTraining3MinusBtn"type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                </div>
                &nbsp;
<!--                <input class="input-group-field" type="number" name="quantity" value="0">-->
                <div  id="NotEquityTraining3PlusBtn" class="input-group-button">
                    <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>&nbsp;
                &nbsp;
                <output id="ALToutputTraining3">0</output> <br>

            </div>


<!--            <button id="NotEquityTraining3MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>    &nbsp;-->
<!--            <button id="NotEquityTraining3PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>    &nbsp;-->
        </div>
        <div id="divfordata" style="background: #ffffff;border-radius: 9px;padding: 15px;margin-top: 15px">
            <button id="addCurrentGenderPayGap"> Add the equal gender pay gap</button> <span id="LineGenderPG" hidden="true">The current gender pay gap is: <br> <b><span id="TestGenderPG"> 5% (women lower)</span></b>.
            <span id="smallTextPayGap" style="color: darkred"> <br> Move the first slider and see what's happening! This value is updated in real time!</span> </span>
            <hr>
        <button id="addPerformance" hidden="true"> Add the merit-based raises</button>
            <div id="performanceText" hidden="true"> <span> Raises based on performance levels:</span>
            <table>
            <tbody>
            <tr>
            <td>Low</td>&nbsp;
                <td>=</td>
            <td>  &nbsp;  &nbsp; <b> <span id="taskLowPerfTraining" style="display: inline-block">...</span>%</b></td>
            </tr>
            <tr>
            <td>Medium</td>&nbsp;
                <td>=</td>
            <td> &nbsp;  &nbsp;<b> <span id="taskMidPerfTraining" style="display: inline-block">...</span>%</b></td>
            </tr>
            <tr>
            <td >High</td>&nbsp;
                <td>=</td>
            <td> &nbsp;  &nbsp; <b> <span id="taskHighPerfTraining" style="display: inline-block">...</span>%</b></td>
            </tr>
            </tbody>
            </table>
          <!--  — Low performers <span id="taskLowPerfTraining" style="display: inline-block"> .... </span>% raise. <br>
        — Medium performers got a <span id="taskMidPerfTraining" style="display: inline-block"> .... </span>% raise.<br>
        got a <span id="taskHighPerfTraining" style="display: inline-block"> .... </span>% raise.<br> -->
            <span id="smallTextPerformance" style="color: darkred"> Move the second slider and see what's happening! The values are updated in real time!</span>
        </div>
        </div>
    </div> <br>
      <?php
            $extension = array(".csv");
            $subs   = array("");
            $cond = str_replace($extension,$subs,$condition);
            $mod = $cond % 4;
            switch ($mod){
              case 0:
                ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v3-MenLowerStereotyped.js"></script>
      <?php
                break;
              case 1:
              ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v3-WomenLowerStereotyped.js"></script>
      <?php
                break;
              case 2:
              ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v3-MenLowerNonStereotyped.js"></script>
      <?php
                break;
              case 3:
                ?>
      <script type="text/javascript" src="./html/js/visualizations/taskTraining-v3-WomenLowerNonStereotyped.js"></script>
      <?php
                break;
            }

        ?>
    <script type="text/javascript">

      $('body').on('next', function(e, type){
        if(type==="task-training-v3_7"){
// The if clause below ensures that this specific instance of a next button press is only triggered when the id of the element corresponds to the one being defined above.
        changeSalaryTask()
          let btntoValidate = document.getElementById("btn_test-decision-making-study_8")
          btntoValidate.disabled = true;

          btntoValidate.innerHTML = "You still have money to allocate!";
          btntoValidate.style.backgroundColor = "rgba(115,115,115,0.9)"
          btntoValidate.style.color = "rgba(255,255,255,0.9)"
        }
      });
    </script>
</div>