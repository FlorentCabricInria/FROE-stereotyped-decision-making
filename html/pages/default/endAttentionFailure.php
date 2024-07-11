

  <div class="row">
  <div class="col">
    <h2>Sorry...</h2>
    <p>You failed to complete the comprehension check two times. Therefore, you are not able to continue the study. According to <a href="https://researcher-help.prolific.com/hc/en-gb/articles/360009223553-Prolific-s-Attention-and-Comprehension-Check-Policy#h_01FBPJ5DZJHYHB5D2QMAK2V1SQ" target="_blank">
      Prolific's policy </a>, we ask you to return your submission immediately and click 'Stop Without Completing' on Prolific.</p>
    <br>
      You will be automatically redirected in <span id="timerEnd">15</span> seconds.<br>
    </p>
  </div>
</div>

  <script type="text/javascript">
    function displayTimerEnd () {
      timerEnd = document.getElementById("timerEnd");
      var start = Date.now()
      document.getElementById("btn_endAttentionFailure_13").hidden;
      setInterval(function () {
        var delta = Date.now() - start // milliseconds elapsed since start
        if (Math.floor(delta / 1000) > 15) {
          window.location.replace('https://app.prolific.co/submissions/complete?cc=FAILED_CC');
        } else {
          timerEnd.innerHTML = (15 - Math.floor(delta / 1000)) + ''
        }
      }, 1000)
    }
  </script>