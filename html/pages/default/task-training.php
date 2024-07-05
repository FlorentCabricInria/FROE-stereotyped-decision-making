<div id="row">
    <h1>Training</h1>
    <div>You are the person in charge of the company&#39;s annual salary review. The CEO has budgeted 25,000 <em>StudyCoin</em>
        to increase employee salaries — your colleagues. <br>
        The CEO has tasked you with allocating the 25,000 as you want between two objectives:
        <ul>
            <li style="margin: 0px 0px">reducing pay inequity focusing on gender differences</li>
            <li style="margin-top: 0px">allocating merit raises based on last year’s individual performance.</li>
        </ul>
    </div>
    <i><strong> Be careful! You must spend the entire 25,000</strong> </i><br>
    <p> To assist you in your decisions you will see a data visualization similar to the one below (but the underlying
        data will change). Employees are still represented according to their salary (vertical axis) and the 3 categories
        : grade group (horizontal axis), gender (color) and performance level (size of dots) <br></p>
    <!--    <p> In this training part, we will ask you to perform 3 allocation tasks using  </p>-->
    In this training part, we will ask you to perform 3 allocation tasks using the two sliders you will find next to the
    visualization (framed in grey). You can increase or decrease the value using the - and + buttons next to the
    sliders. To move on to the next training's step, please complete the three tasks in the following order (a task
    already performed will be strikedthrough) :
    <ol>
        <li style="margin: 0px 0px"><strike id="taskSlider1" style="display: contents;"> <span> Allocate 25,000 for 'Reducing gender pay inequity'</span>
        </strike></li>
        <li style="margin: 0px 0px"><strike id="taskSlider2" style="display: contents;"> <span> Allocate 25,000 for "Performance-based"</span>
        </strike></li>
        <li style="margin: 0px 0px"><strike id="taskSlider3" style="display: contents;"> <span> Allocate 12,500 for "Performance-based" and 12,500 for "addressing pay equity" </span>
        </strike></li>
    </ol>

    <!--    The allocation must be indicated using the two sliders you will find next to the visualization (framed in grey). You can increase or decrease the value using the - and + buttons next to the sliders. <br>-->
    <!--    To move on to the next training's step, please follow the instructions written in bold above the sliders.-->
    <!--    We next ask you to complete three different allocations using the sliders.-->
    <!--    Please try out the sliders now and follow the instructions (written above the sliders in the grey box).-->

    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>
    <svg id="TrainingTaskChartMenLowerStereotypedTraining1" style="float: left;padding-right: 10px"></svg>
    <?php
              break;
            case 1:
            ?>
    <span></span>
    <svg id="TrainingTaskChartWomenLowerStereotypedTraining1" style="float: left;padding-right: 10px"></svg>

    <?php
              break;
            case 2:
            ?>
    <span> </span>
    <svg id="TrainingTaskChartMenLowerNonStereotypedTraining1" style="float: left;padding-right: 10px"></svg>

    <?php
              break;
            case 3:
              ?> <span> </span>
    <svg id="TrainingTaskChartWomenLowerNonStereotypedTraining1" style="float: left;padding-right: 10px"></svg>
    <?php
              break;
          }

      ?>
    <div>
        <strong> INSTRUCTIONS FOR THE TRAINING</strong>
        <br><strong> <span
            id="slidersLabelsTask"> Task 1: Please, allocate 25,000 for 'Reducing gender pay inequity'" </span></strong>
        <br>

        <div style="display: inline-block; border: 2px solid #5e5e5e;">
            <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->


            <div style="display: inline-block">
                <!---
                ########################################################################
                ########################################################################
                ########################  FIRST SLIDER
                ########################################################################
                ########################################################################
                -->
                <div class="input-group plus-minus-input">
                    <div class="containerForSlider">
                        <div class="boxForSlider"><span> Reducing gender pay inequity: </span></div>
                        <div class="breakForSlider"></div> <!-- break to a new row -->

                        <div class="boxForSlider">
                            <input type="range" id="PayEquityTraining" name="PayEquityTraining"
                                   min="0" max="25000" value="0" step="100">
                            &nbsp;
                            <div class="input-group-button">
                                <button id="PayEquityTrainingMinusBtn" type="button" class="button hollow circle"
                                        data-quantity="minus" data-field="quantity">
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </div>
                            &nbsp;
                            <div id="PayEquityTrainingPlusBtn" class="input-group-button">
                                <button type="button" class="button hollow circle" data-quantity="plus"
                                        data-field="quantity">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>&nbsp;
                            <output id="PEoutputtraining">0</output>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <!---
           ########################################################################
           ########################################################################
           ########################  SECOND SLIDER
           ########################################################################
           ########################################################################
           -->
            <div class="input-group plus-minus-input">
                <div class="containerForSlider">
                    <div class="boxForSlider">
                        <span> Performance-based merit raises: </span>
                    </div>
                    <div class="breakForSlider"></div> <!-- break to a new row -->
                    <div class="boxForSlider">

                        <input type="range" id="NotEquityTraining" name="NotEquityTraining"
                               min="0" max="25000" value="0" step="100">
                        &nbsp;
                        <div class="input-group-button">
                            <button id="NotEquityTrainingMinusBtn" type="button" class="button hollow circle"
                                    data-quantity="minus" data-field="quantity">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                        </div>
                        &nbsp;
                        <!--                <input class="input-group-field" type="number" name="quantity" value="0">-->
                        <div id="NotEquityTrainingPlusBtn" class="input-group-button">
                            <button type="button" class="button hollow circle" data-quantity="plus"
                                    data-field="quantity">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        &nbsp
                        &nbsp;
                        <output id="ALToutputtraining">0</output>
                        <br>
                    </div>
                    <br>
                    <span id="sliderTrainingText" style="font-weight: bold; color: #049f02;"></span>
                    <br>
                </div>


            </div>
        </div>
            <!--            <div style="display: inline-block;"><input type="range" id="NotEquityTraining" name="NotEquityTraining" min="0" max="25000"  value="0" step="100" >-->
            <!--                <button id="NotEquityTrainingPlusBtn" style="width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>-->
            <!--                <button id="NotEquityTrainingMinusBtn" style="width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>-->
            <!--                <br> <output id="ALToutputtraining">0</output> <br>-->
            <!--            <span id="sliderTrainingText" style="font-weight: bold; color: #0b9d0b;"></span>-->
            <!--        </div>-->

            <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?>
            <script type="text/javascript" src="./html/js/visualizations/taskTrainingMenLowerStereotyped.js"></script>
            <?php
              break;
            case 1:
            ?>

            <script type="text/javascript" src="./html/js/visualizations/taskTrainingWomenLowerStereotyped.js"></script>
            <?php
              break;
            case 2:
            ?>
            <script type="text/javascript"
                    src="./html/js/visualizations/taskTrainingMenLowerNonStereotyped.js"></script>
            <?php
              break;
            case 3:
              ?>
            <script type="text/javascript"
                    src="./html/js/visualizations/taskTrainingWomenLowerNonStereotyped.js"></script>
            <?php
              break;
          }

      ?>
        </div>
    </div>