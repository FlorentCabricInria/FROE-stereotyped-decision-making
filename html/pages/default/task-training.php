
<div id="row">
    <h1>Training</h1>
    <p>You are the person in charge of the company&#39;s annual salary review. The CEO has budgeted 25,000 <em>StudyCoin</em> to increase employee salaries — your colleagues. <br>
        The CEO has tasked you with allocating the 25,000 as you want between two objectives: </p>
    <ul>
        <li>reducing pay inequity focusing on gender differences </li>
        <li>allocating merit raises based on last year’s individual performance.</li>
    </ul>
    <p> To assist you in your decisions you will see a data visualization similar to the one below (but the underlying data will change) <br>
    Employees are still represented according to their salary (vertical axis) and the 3 categories : grade group (horizontal axis), gender (color) and performance level (size of dots) <br> </p>
    The allocation must be indicated using the two sliders you will find next to the visualization (framed in grey). You can increase or decrease the value using the - and + buttons next to the sliders. <br>
    We next ask you to complete three different allocations using the sliders.
    Please try out the sliders now and follow the instructions (written above the sliders in the grey box).
    <strong> Be careful! You must spend the entire 25,000</strong> <br>
    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>  <svg id="TrainingTaskChartMenLowerStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>
    <?php
              break;
            case 1:
            ?>
    <span></span><svg id="TrainingTaskChartWomenLowerStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>

    <?php
              break;
            case 2:
            ?>
    <span> </span> <svg id="TrainingTaskChartMenLowerNonStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>

    <?php
              break;
            case 3:
              ?> <span> </span>  <svg id="TrainingTaskChartWomenLowerNonStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>
    <?php
              break;
          }

      ?>
        <div style="border: 2px solid #5e5e5e;display: inline-block;width: 30%;float: left;padding: 20px " >
            <span id="slidersLabelsTask"> <strong> Please allocate 25,000 for Reducing Equal Gender Pay Gap" </strong></span> <br>
            Reducing pay equity:
            <div style="display: inline-block;"><input type="range" id="PayEquityTraining" name="PayEquityTraining" min="0" max="25000" value="0" step="100">
                <button id="PayEquityTrainingPlusBtn" style="width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
                <button id="PayEquityTrainingMinusBtn" style="width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
                <br><output id="PEoutputtraining">0</output><br> <br>
            </div>
                Performance-based merit raises:
            <div style="display: inline-block;"><input type="range" id="NotEquityTraining" name="NotEquityTraining" min="0" max="25000"  value="0" step="100" >
                <button id="NotEquityTrainingPlusBtn" style="width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
                <button id="NotEquityTrainingMinusBtn" style="width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
                <br> <output id="ALToutputtraining">0</output> <br>
            <span id="sliderTrainingText" style="font-weight: bold; color: #0b9d0b;"></span>
        </div>
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
           <script type="text/javascript" src="./html/js/visualizations/taskTrainingMenLowerNonStereotyped.js"></script>
            <?php
              break;
            case 3:
              ?>
            <script type="text/javascript" src="./html/js/visualizations/taskTrainingWomenLowerNonStereotyped.js"></script>
            <?php
              break;
          }

      ?>
    </div>
</div>