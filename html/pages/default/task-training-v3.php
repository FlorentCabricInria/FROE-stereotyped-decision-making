
<div id="row">
    <h1>Training part 3 (final).</h1>
    <p>We will now add two features to support your decision making. These features will help you to explore the impact of the decisions you make.
        <br> Two pieces of information will be available for you. Click on the button in the grey area next to the chart.</p>

            <!--<br> <button id="addAllocation" hidden="true"> Add the next piece of information : the distribution of the allocations </button>
        <span id="LineSummaryAllocation" hidden="true">You have allocated <span id="AllocationGPG"> 0 </span> for reducing equal gender pay gap and <span id="AllocationNotGPG"> 0 </span> for rewarding the performance. <span id="instrAlloc" style="color: darkred"> The distribution of allocation are updated in real time!</span>

      <br>  <button id="addMoneyLeft" hidden="true"> Add the third piece of information : the amount of money left  </button>
      <span id="LineMoneyLeft" hidden="true">You have <span id="Leftovers"> 0</span> left to allocate. <span id="instrleft" style="color: darkred"> This text tells you how much money you have left to allocate</span>
    --></div>
    <br>
    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>  <svg id="TrainingTaskChart3MenLowerStereotypedTraining1" > </svg>
    <?php
              break;
            case 1:
            ?>
    <span></span><svg id="TrainingTaskChart3WomenLowerStereotypedTraining1"> </svg>

    <?php
              break;
            case 2:
            ?>
    <span> </span> <svg id="TrainingTaskChart3MenLowerNonStereotypedTraining1"> </svg>

    <?php
              break;
            case 3:
              ?> <span> </span>  <svg id="TrainingTaskChart3WomenLowerNonStereotypedTraining1"> </svg>
    <?php
              break;
          }

      ?>
    <br>

    <div id="slidersForTest">
        <!--   <span id="slidersLabelsTask2"> -->
       <div>
           Reducing gender pay inequity: <input type="range" id="PayEquityTraining3" name="PayEquityTraining3" min="0" max="25000" value="0" step="100">
           <button id="PayEquityTraining3MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
           <button id="PayEquityTraining3PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
           <output id="PEoutputTraining3">0</output><br>
       </div>
        <div>
        Performance-based merit raises: <input type="range" id="NotEquityTraining3" name="NotEquityTraining3" min="0" max="25000"  value="0" step="100" >
            <button id="NotEquityTraining3MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
            <button id="NotEquityTraining3PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
            <output id="ALToutputTraining3">0</output> <br>
        </div>
        <div>
            <button id="addCurrentGenderPayGap"> Add the equal gender pay gap</button> <span id="LineGenderPG" hidden="true">The current gender pay gap is <span id="TestGenderPG"> 5% (women lower)</span> !
        <span id="smallTextPayGap" style="color: darkred"> <br> Move the first slider and see what's happening! This value is updated in real time!</span>
        <button id="addPerformance" hidden="true"> Add the merit-based raises</button>
        <div id="performanceText" hidden="true">  The low performers got a <span id="taskLowPerfTraining" style="display: inline-block"> .... </span>% raise. <br>
        The medium performers got a <span id="taskMidPerfTraining" style="display: inline-block"> .... </span>% raise.<br>
        The high performers got a <span id="taskHighPerfTraining" style="display: inline-block"> .... </span>% raise.<br>
            <span id="smallTextPerformance" style="color: darkred"> Move the second slider and see what's happening! The values are updated in real time!</span>
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