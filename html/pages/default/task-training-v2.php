
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
            <div> Reducing equal gender pay gap: <input type="range" id="PayEquityTraining2" name="PayEquityTraining2" min="0" max="25000" value="0" step="100">
            <button id="PayEquityTraining2MinusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 8px;padding-right: 8px;padding-bottom: 0px;padding-top: 0px;">-</button>
                <button id="PayEquityTraining2PlusBtn" style="float : inherit;width : fit-content; height:fit-content;padding-left: 4px;padding-right: 4px;padding-bottom: 0px;padding-top: 0px;">+</button>
                <output id="PEoutputtraining2">0</output><br>
            </div>
            <div> Performance-based: <input type="range" id="NotEquityTraining2" name="NotEquityTraining2" min="0" max="25000"  value="0" step="100" >
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
      <!--
      <div class="task-description" id="graph_box">
      <p>A large pharmaceutical company has recently developed a new drug to boost peoples' immune function. It reports that trials it conducted demonstrated a drop of forty percent (from eighty seven to forty seven percent) in occurrence of the common cold. It intends to market the new drug as soon as next winter, following FDA approval.</p>

      <?php if ($condition == $config["factors"][0]["levels"][1]) {
        echo '<p><img id="graph" src="html/img/base_example/exp1_graph.jpg"></p>';
      }
      ?>


    </div>

    <hr>

    <div class="ratings cml_field"><h2 class="legend">How effective is the new medication?</h2>
  <div class="cml_row">

  <table>
    <thead>
      <tr>
        <th></th>

        <th class="likert">1</th>

        <th class="likert">2</th>

        <th class="likert">3</th>

        <th class="likert">4</th>

        <th class="likert">5</th>

        <th class="likert">6</th>

        <th class="likert">7</th>

        <th class="likert">8</th>

        <th class="likert">9</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Not at all effective </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="1" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="2" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="3" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="4" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="5" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="6" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="7" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="8" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td class="likert"><input name="how_effective_is_the_new_medication" type="radio" value="9" class="how_effective_is_the_new_medication validates-required validates">
  </td>

        <td> Very effective</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  <hr>
    <div class="radios cml_field"><h2 class="legend">Does the medication really reduce illness?</h2>
    <div class="cml_row"><label class=""><input name="does_the_medication_really_reduce_illness" type="radio" value="yes" class="does_the_medication_really_reduce_illness validates-required validates">
   Yes</label></div>
  <div class="cml_row"><label class=""><input name="does_the_medication_really_reduce_illness" type="radio" value="no" class="does_the_medication_really_reduce_illness validates-required validates">
   No</label></div>

  </div>

  <script type="text/javascript">
    // make button active as soon as value was changed
    var effective_answered = false;
    var illness_answered = false;
    var effective_answer = -1;
    var illness_answer = -1;
  $('.how_effective_is_the_new_medication').on('input', function() {
      effective_answered = true;
      effective_answer = $(this).val();
      if (effective_answered && illness_answered) $("#btn_<?php echo $id;?>").prop('disabled', false);
  });

  $('.does_the_medication_really_reduce_illness').on('input', function() {
      illness_answered = true;
      illness_answer =$(this).val();
      if (effective_answered && illness_answered) $("#btn_<?php echo $id;?>").prop('disabled', false);
  });

  $('body').on('next', function(e, type){
    // console.log("next");
    if (type === '<?php echo $id;?>'){
      measurements['effectiveness'] = effective_answer;
      measurements['illness_reduction'] = illness_answer;
      console.log("logging effectiveness answer " + effective_answer);
      console.log("logging illness reduction answer " + illness_answer);
      console.log("excluded " + excluded);
    }
  });


  </script>
  -->
</div>