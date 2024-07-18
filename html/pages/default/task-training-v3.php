<div id="row">
    <h1>Training part 3 (final): statistical information</h1>
    <div id="scroll-warning_7" class="alert alert-warning alert-dismissible" hidden>
        <span>Some content may be off-screen. Please scroll down to see the rest of the content.</span>
    </div>
    <p>We will now add two additional features to support your decision-making. These features will help you to explore
        the impact of the decisions you make.
        <br> Click on the button to add the adjusted gender pay gap (adjusted according to the grade group and performance).
    </p>

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
              ?>
    <svg id="TrainingTaskChart3MenLowerStereotypedTraining1"></svg>
    <?php
              break;
            case 1:
            ?>
    <svg id="TrainingTaskChart3WomenLowerStereotypedTraining1"></svg>

    <?php
              break;
            case 2:
            ?>
    <svg id="TrainingTaskChart3MenLowerNonStereotypedTraining1"></svg>

    <?php
              break;
            case 3:
              ?>
    <svg id="TrainingTaskChart3WomenLowerNonStereotypedTraining1"></svg>
    <?php
              break;
          }

      ?>
    <br>

    <div style="border: 2px solid #5e5e5e; display: inline-grid; border-radius: 9px; background-color: #f9f9f9; padding: 1rem">

        <div style="display: inline-block">

            <div class="input-group plus-minus-input">

                <div class="input-group-button">

                    <div class="containerForSlider">
                        <div class="boxForSlider">
                            Reducing gender pay inequity:
                        </div>
                        <div class="breakForSlider"></div> <!-- break to a new row -->
                        <div class="boxForSlider">
                            <input type="range" id="PayEquityTraining3" name="PayEquityTraining3" min="0" max="25000"
                                   value="0" step="100">  &nbsp;
                            <div class="input-group-button">
                                <button id="PayEquityTraining3MinusBtn" type="button" class="button hollow circle"
                                        data-quantity="minus" data-field="quantity">
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </div> &nbsp;
                            <div id="PayEquityTraining3PlusBtn" class="input-group-button">
                                <button type="button" class="button hollow circle" data-quantity="plus"
                                        data-field="quantity">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div> &nbsp;
                            <output id="PEoutputTraining3">0</output>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display: inline-block">
            <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
            <div class="input-group plus-minus-input">

                <div class="containerForSlider">
                    <div class="boxForSlider">
                        Performance-based merit raises:
                    </div>
                    <div class="breakForSlider"></div> <!-- break to a new row -->
                    <div class="boxForSlider">
                        <input type="range" id="NotEquityTraining3"
                               name="NotEquityTraining3" min="0" max="25000" value="0"
                               step="100"> &nbsp;
                        <div class="input-group-button">
                            <button id="NotEquityTraining3MinusBtn" type="button" class="button hollow circle"
                                    data-quantity="minus" data-field="quantity">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                        </div>
                        &nbsp;
                        <!--                <input class="input-group-field" type="number" name="quantity" value="0">-->
                        <div id="NotEquityTraining3PlusBtn" class="input-group-button">
                            <button type="button" class="button hollow circle" data-quantity="plus"
                                    data-field="quantity">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        &nbsp;
                        <output id="ALToutputTraining3">0</output>

                        <br>
                    </div>
                </div>
            </div>

            <!--            <button id="NotEquityTraining3MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>    &nbsp;-->
            <!--            <button id="NotEquityTraining3PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>    &nbsp;-->
        </div>
        <div style="display: inline-block; ">
            <div class="containerForSlider">
                <div class="boxForSlider">
                    <div id="divfordata"
                         style="display: inline-block;background: #f9f9f9;border-radius: 9px;padding-top: 1rem; ">
                        <button id="addCurrentGenderPayGap"> Add the equal gender pay gap</button>
                      <div>
                        <span id="LineGenderPG" hidden="true">The current gender pay gap is: <br> <b><span
                                id="TestGenderPG"> 5% </span></b>.
            </span>
<!--                        <div id="infoBtnGender" class="input-group-button hover-container"style="flex: auto;display: inline-flex" hidden>-->
<!--                            <button type="button" class="hover-target button hollow circle" style="border-radius: 50%;">-->
<!--                                <i class="fa fa-info"></i>-->
<!--                            </button>-->
<!--                            <aside class="hover-popup">-->
<!--                                <h2>Additional info here</h2>-->
<!--                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora similique <span>quia corporis</span> libero. In dolor qui repudiandae ullam! Corporis minus veritatis consequuntur natus. Neque, quidem?</p>-->
<!--                            </aside>-->
<!--                        </div>-->
                          <div id="infoBtnGender" class="input-group-button hover-container"style="flex: auto;display: inline-flex" hidden>
                              <span id="infoBtnGenderText" class="infoText hover-target button hollow circle" style="border-radius: 50%;" >
<!--                                  min-width: 1.5rem;min-height: 1.5rem;max-width: 1.5rem;max-height: 1.5rem;width: 1.5rem;height: 1.5rem;/*! align-content: last baseline; *//*! align-items: unsafe; */display: flex;justify-content: center;-->
                                  <i class="fa fa-info"></i>
                              </span>
                              <aside class="hover-popup">
<!--                                  <h3>Gender Pay Gap — Explanation</h3>-->
                                  <p>
                                      The gender pay gap reflects the percent difference in pay, after accounting for grade group and Performance.
                                  </p>
                              </aside>
                          </div>
                          <span id="smallTextPayGap" style="color: darkred" hidden> <br> Move the first slider and see what's happening! This value is updated in real time!</span>

                      </div>

                        <hr id="lineTo" hidden="true">
                        <button id="addPerformance" hidden="true">Add merit based information</button>
                        <div id="performanceText" hidden="true"><span> Raises based on performance levels:</span>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Low</td>&nbsp;
                                    <td>=</td>
                                    <td> &nbsp; &nbsp; <b> <span id="taskLowPerfTraining"
                                                                 style="display: inline-block">...</span>%</b></td>
                                </tr>
                                <tr>
                                    <td>Medium</td>&nbsp;
                                    <td>=</td>
                                    <td> &nbsp; &nbsp;<b> <span id="taskMidPerfTraining"
                                                                style="display: inline-block">...</span>%</b></td>
                                </tr>
                                <tr>
                                    <td>High</td>&nbsp;
                                    <td>=</td>
                                    <td> &nbsp; &nbsp; <b> <span id="taskHighPerfTraining"
                                                                 style="display: inline-block">...</span>%</b></td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="infoBtnPerformance" class="input-group-button hover-container"style="flex: auto;display: inline-flex" hidden>
                              <span id="infoBtnPerformanceText" class="infoText hover-target button hollow circle" style="border-radius: 50%;" >
<!--                                  min-width: 1.5rem;min-height: 1.5rem;max-width: 1.5rem;max-height: 1.5rem;width: 1.5rem;height: 1.5rem;/*! align-content: last baseline; *//*! align-items: unsafe; */display: flex;justify-content: center;-->
                                  <i class="fa fa-info"></i>
                              </span>
                                <aside class="hover-popup">
                                    <!--                                  <h3>Gender Pay Gap — Explanation</h3>-->
                                    <p>The percentages reflect the merit increase (in %) that each employee receives as a result of the budget allocation.
                                    </p>
                                </aside>
                            </div>
                            <br>
                            <!--  — Low performers <span id="taskLowPerfTraining" style="display: inline-block"> .... </span>% raise. <br>
                          — Medium performers got a <span id="taskMidPerfTraining" style="display: inline-block"> .... </span>% raise.<br>
                          got a <span id="taskHighPerfTraining" style="display: inline-block"> .... </span>% raise.<br> -->
                            <span id="smallTextPerformance" style="color: darkred"> Move the second slider and see what's happening! The values are updated in real time!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <?php
            $extension = array(".csv");
            $subs   = array("");
            $cond = str_replace($extension,$subs,$condition);
            $mod = $cond % 4;
            switch ($mod){
              case 0:
                ?>
    <script type="text/javascript"
            src="./html/js/visualizations/taskTraining-v3-MenLowerStereotyped.js"></script>
    <?php
                break;
              case 1:
              ?>
    <script type="text/javascript"
            src="./html/js/visualizations/taskTraining-v3-WomenLowerStereotyped.js"></script>
    <?php
                break;
              case 2:
              ?>
    <script type="text/javascript"
            src="./html/js/visualizations/taskTraining-v3-MenLowerNonStereotyped.js"></script>
    <?php
                break;
              case 3:
                ?>
    <script type="text/javascript"
            src="./html/js/visualizations/taskTraining-v3-WomenLowerNonStereotyped.js"></script>
    <?php
                break;
            }

        ?>
    <script type="text/javascript">

      $('body').on('next', function (e, type) {
        if (type === 'task-training-v3_7') {
// The if clause below ensures that this specific instance of a next button press is only triggered when the id of the element corresponds to the one being defined above.
          changeSalaryTask()
          document.getElementById("currentpage").value = parseInt(document.getElementById("currentpage").value) +1

        }
      })
    </script>
</div>
