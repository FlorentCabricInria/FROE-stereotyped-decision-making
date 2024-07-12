<div id="row" xmlns="http://www.w3.org/1999/html">
    <body>
    <h2>Questions regarding your decision and your role in your company</h2>
    <div> With your decision, the final gender pay gap is <span id="taskCurrentPayGapStimuli">
         </span> and you allocated merit-based raises in the following manner: <br>
        The low performers get a <span id="taskLowPerfStimuli" style="display: inline-block"> .... </span>% raise.
        The medium performers get a <span id="taskMidPerfStimuli" style="display: inline-block"> .... </span>% raise.
        The high performers get a <span id="taskHighPerfStimuli" style="display: inline-block"> .... </span>% raise. <br>
        The chart shows the salaries of the company's employees after applying the decision you have made.
        <p style="font-weight: bold"> Please, answer to the three questions you will find the below the chart.</p>
        <!--  <svg id="final-decision-feedback-chart"> </svg> -->
        <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>
        <svg id="final-decision-feedback-chart-MenLowerStereotyped" style="display:block; margin: auto;"></svg>
        <?php
              break;
            case 1:
            ?>
        <span></span>
        <svg id="final-decision-feedback-chart-WomenLowerStereotyped"style="display:block; margin: auto;"></svg>

        <?php
              break;
            case 2:
            ?>
        <span> </span>
        <svg id="final-decision-feedback-chart-MenLowerNonStereotyped"style="display:block; margin: auto;"></svg>

        <?php
              break;
            case 3:
              ?> <span> </span>
        <svg id="final-decision-feedback-chart-WomenLowerNonStereotyped"style="display:block; margin: auto;"></svg>
        <?php
              break;
          }

      ?>
        <div>
            <div>
                <label> <h5> Please explain the criteria you used to decide on how to allocate the money. (requires, 100 characters required) </h5>
                </label>
                <textarea onkeyup="countChar(this)" class="form-control" minlength="50" id="criteria" rows="2"
                          cols="80" placeholder="Please explain the criteria you used to decide on how to allocate the money."></textarea>
                <span id="charNumcriteria" style="color: darkred;">100 characters remaining</span>
            </div>
            <hr>
            <div>
                <label> <h5>How satisfied are you with your final allocation? If you are not satisfied, please explain what your ideal result would look like.</h5></label>
                <textarea id="explanation" rows="2" class="form-control"
                          cols="80" placeholder=""></textarea>
<!--                <span id="charNumexplanation" style="color: darkred;">100 characters remaining</span>-->
            </div>
            <hr>

            <!--            <div>-->
<!--                <label> If you had more money, which changes would you make to your allocation? </label>-->
<!--                <textarea id="ideally" rows="4" id="idealDecision"-->
<!--                          cols="80"-->
<!--                          placeholder="If you had more money, which changes would you make to your allocation?"></textarea>-->
<!--            </div>-->

            <div>
                <label> <h5> Are you involved in salary decisions in your current organization? If so, please describe your role in the decision-making.</h5>
                </label>
                <textarea rows="2" cols="80" id="roleInDecisions" class="form-control"
                          placeholder="Are you involved in salary decisions in your current organization? If so, please describe your role in the decision-making."></textarea>
            </div>
        </div>
        <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?>
        <script type="text/javascript"
                src="./html/js/visualizations/task-stimuli-for-feedback-MenLowerStereotyped.js"></script>
        <?php
              break;
            case 1:
            ?>
        <script type="text/javascript"
                src="./html/js/visualizations/task-stimuli-for-feedback-WomenLowerStereotyped.js"></script>

        <?php
              break;
            case 2:
            ?>
        <script type="text/javascript"
                src="./html/js/visualizations/task-stimuli-for-feedback-MenLowerNonStereotyped.js"></script>

        <?php
              break;
            case 3:
              ?>
        <script type="text/javascript"
                src="./html/js/visualizations/task-stimuli-for-feedback-WomenLowerNonStereotyped.js"></script>
        <?php
              break;
          }

      ?>


        <script type="text/javascript">
          function countChar (val) {
            var len = val.value.length
            if (len <= 99) {
              console.log(val.id)
              $('#charNum'+val.id).text(100 - len + '  characters remaining')
              $('#charNum'+val.id).css('color', 'darkred')
              document.getElementById('btn_feedback-about-decision_9').hidden = true
            } else {
              $('#charNum'+val.id).text("Minimum number of characters reached!")
              $('#charNum'+val.id).css('color', '#378d02')
              document.getElementById('btn_feedback-about-decision_9').hidden = false
            }
          }

          // This is the event triggered to save the data entered. The event triggers when the 'next' button is pressed.
          $('body').on('next', function (e, type) {
            if (type === 'feedback-about-decision_9') {
              console.log($('#explanation').val())
              console.log($('#explanation').val().replaceAll(',', ' ').replaceAll('\r', ' ').replaceAll('\n', ' '))
              measurements['explanation'] = $('#explanation').val().replaceAll(',', ' ').replaceAll('\r', ' ').replaceAll('\n', ' ')

              // if (typeof $('#idealDecision').val() != 'undefined') {
              //   measurements['idealDecision'] = $('#idealDecision').val().replaceAll(',', ' ').replaceAll('\r', ' ').replaceAll('\n', ' ')
              // }
              if (typeof $('#roleInDecisions').val() != 'undefined') {
                measurements['roleInDecisions'] = $('#roleInDecisions').val().replaceAll(',', ' ').replaceAll('\r', ' ').replaceAll('\n', ' ')
              }
              if (typeof $('#criteria').val() != 'undefined') {
                measurements['criteria'] = $('#criteria').val().replaceAll(',', ' ').replaceAll('\r', ' ').replaceAll('\n', ' ')
              }
              console.log(measurements)
            }
          })
        </script>
    </div>

</div>