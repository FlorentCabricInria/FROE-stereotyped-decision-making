<div id="row">
    <body>
        <h2>Explanation of your decisions</h2>
        <div> With your decision, the final gender pay gap is <span id="taskCurrentPayGapStimuli">
         </span> and you allocated merit-based raises in the following manner: <br>
          The low performers got a <span id="taskLowPerfStimuli" style="display: inline-block"> .... </span>% raise.
          The medium performers got a <span id="taskMidPerfStimuli" style="display: inline-block"> .... </span>% raise.
          The high performers got a <span id="taskHighPerfStimuli" style="display: inline-block"> .... </span>% raise.
            <p style="font-weight: bold"> Can you explain your decision in, at least, 150 characters in the text area below the chart.</p>
        <svg id="final-decision-feedback-chart"> </svg>
        <div>
            <textarea onkeyup="countChar(this)" class="form-control"  minlength="50" id="explanation" rows="4" cols="80" placeholder="Explain your decisions in at least 150 characters."></textarea>
             <span id="charNum" style="color: darkred;">150 characters remaining</span>
      </div>

<script type="text/javascript" src="./html/js/visualizations/task-stimuli-for-feedback.js"></script>

<script type="text/javascript">
  function countChar(val) {
    var len = val.value.length;
    if (len <= 150) {
      $('#charNum').text(150 - len + "  characters remaining");
      document.getElementById('btn_feedback-about-decision_9').hidden=true;
    } else {
      $('#charNum').text(0 + "  character remaining");
      $('#charNum').css('color','#378d02')
      document.getElementById('btn_feedback-about-decision_9').hidden=false;
    }
  };
  // This is the event triggered to save the data entered. The event triggers when the 'next' button is pressed.
	$('body').on('next', function(e, type){
      measurements['explanation'] = $("#explanation").val();
      console.log(measurements )

	});
</script>
        </div>

</div>