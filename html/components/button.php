<div class="row mb-3 mt-4 button-div">
  <div class="col text-center">
    <button
      href="#"
      class="btn btn-wider <?php echo $style;?>"
      id = "btn_<?php echo $id;?>"

      onclick="
        $('body').trigger('next', ['<?php echo $id;?>']); 
        $('body').trigger('show', ['<?php echo $next;?>']); 
        <?php if ($save_page) {?>
          $('body').trigger('finished');
        <?php
      }?>
        $('#<?php echo $hide ?>').hide().promise().done(() => {if (!excluded) $('#<?php echo $show ?>').show()});"

      <?php if ($id =='introduction_3' || $id =='task-training-v2_6' || $id =='task-training_5' || $id =='task-training-v3_7' || $id == 'feedback-about-decision_9' || $id == 'ambivalent-sexism-theory_10' || $id == 'endDisagreement_12') {?>
        hidden
       <?php }?>
      <?php if($disabled) echo ' disabled';?> >
        <?php
        if($id == 'test-decision-making-study_8') { ?>
          <span id="countdownText">  </span>
    <?php }
        echo $text;
?>
    </button>
  </div>
</div>
