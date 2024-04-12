
<div id="row">
    <h1>Training part 3 (final).</h1>
    <p>We will now add two features to support your decision making. These features will help you to explore the impact of the decisions you make.
        <br> Three piece of information will be available for you:</p>
    <div>
        <button id="addCurrentGenderPayGap"> Add the first piece of information: Equal gender pay gap</button> <span id="LineGenderPG" hidden="true">The current gender pay gap is <span id="TestGenderPG"> 5% (women lower)</span> !<span id="" style="color: darkred"> <-- Move the first slider and see what's happening! This value is updated in real time!</span>
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
        Reducing equal gender pay gap: <input type="range" id="PayEquityTraining3" name="PayEquityTraining3" min="0" max="25000" value="0" step="100"> <output id="PEoutputTraining3">0</output><br>
        Performance-based: <input type="range" id="NotEquityTraining3" name="NotEquityTraining3" min="0" max="25000"  value="0" step="100" ><output id="ALToutputTraining3">0</output> <br>
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