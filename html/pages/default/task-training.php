
<div id="row">
    <h1>Task Training</h1>
    <p>You are the person in charge of the company&#39;s annual salary review. The CEO gives you 25 000 <em>customcurrency</em> to increase the salary of company's employees — your colleagues. <br>
        The CEO told you to distribute the 25,000 as you want between two strategies: </p>
    <ul>
        <li>reducing the gender pay gap (whether it&#39;s in favor of men or women)</li>
        <li>increasing people’s salaries based on their last year&#39;s performance.</li>
    </ul>
    <p> To help you in making the visualization you will see a data visualization similar to the one below (but the underpinning data will change) <br>
    Employees are still represented according to their salary (y-axis) and the 3 categories : Grade group (x-axis), gender (color) and performance level (size of dots) <br> </p>
    The decision must be entered using the two sliders you'll find below the visualization (framed in red).  <br>
    I will ask you to try the sliders and follow the instructions written above the sliders in the red box.
    <strong> Be careful! You must spend the entire 25,000</strong> <br>
    <div>
    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>  <svg id="TrainingTaskChartMenLowerStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>
    <script type="text/javascript" src="./html/js/visualizations/taskTrainingMenLowerStereotyped.js"></script>
    <?php
              break;
            case 1:
            ?>
    <span></span><svg id="TrainingTaskChartWomenLowerStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>

    <script type="text/javascript" src="./html/js/visualizations/taskTrainingWomenLowerStereotyped.js"></script>
    <?php
              break;
            case 2:
            ?>
    <span> </span> <svg id="TrainingTaskChartMenLowerNonStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>

    <script type="text/javascript" src="./html/js/visualizations/taskTrainingMenLowerNonStereotyped.js"></script>
    <?php
              break;
            case 3:
              ?> <span> </span>  <svg id="TrainingTaskChartWomenLowerNonStereotypedTraining1" style="width: 70%;float: left;padding: 20px"> </svg>
    <script type="text/javascript" src="./html/js/visualizations/taskTrainingWomenLowerNonStereotyped.js"></script>
    <?php
              break;
          }

      ?>
        <div style="border: 2px solid #f80b0b;display: inline-block;width: 30%;float: left;padding: 20px " >
            <span id="slidersLabelsTask"> <strong> Please allocate 25,000 for Reducing Equal Gender Pay Gap" </strong></span> <br>
            Reducing equal gender pay gap: <input type="range" id="PayEquityTraining" name="PayEquityTraining" min="0" max="25000" value="0" step="100"> <output id="PEoutputtraining">0</output><br>
            Performance-based: <input type="range" id="NotEquityTraining" name="NotEquityTraining" min="0" max="25000"  value="0" step="100" ><output id="ALToutputtraining">0</output> <br>
            <span id="sliderTrainingText" style="font-weight: bold; color: #f80b0b;"></span>
        </div>

    </div>
    <!--<p>Each colleague has been categorized into 3 grade groups*: 1, 2 and 3. The performance is represented in the chart by the _size of the dot _and the Y position corresponds to their salary. The performance metric is considered highly robust in your company.</p>
    <p>Moving the sliders will update your employees&#39; salary according to the strategy chosen. You can distribute the money as you wish between the two strategies (i.e., you can focus on just one), but all the money must be spent.</p>
    <p>*grade groups= grouping job positions with similar skills, knowledge and experience and establishing job duties and levels of authority for that group</p>
-->



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