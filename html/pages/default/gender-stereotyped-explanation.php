<div class="row">
  <div class="col">
    <h2>Gender</h2>
      The last piece of data that distinguishes employees in your company is their gender:
      <ul>
    <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0: case 1:?>
    <li style=" margin:0px"> <span style="font-weight: bold; color: #ff33c9;" > Women </span>are represented in <span style="font-weight: bold; color: #ff33c9;">Pink </span> </li>
    <li style=" margin:0px"> <span style="font-weight: bold; color: #3a33ff; " > Men </span>are represented in <span style="font-weight: bold; color: #3a33ff;">Blue</span>  </li>
    <?php
    break;
    case 2: case 3:
    ?>
    <li style=" margin:0px"> <span style="font-weight: bold; color: #ffd800;" > Women </span>are represented in <span style="font-weight: bold; color: #ffd800;"> Yellow </span> </li>
    <li style=" margin:0px"> <span style="font-weight: bold; color: #00ff78;" > Men </span>are represented in <span style="font-weight: bold; color: #00ff78;"> Green </span> </li>
    <?php
    break;
    }
    ?>
  </ul>

      <?php
          $extension = array(".csv");
          $subs   = array("");
          $cond = str_replace($extension,$subs,$condition);
          $mod = $cond % 4;
          switch ($mod){
            case 0:
              ?> <span> </span>  <svg id="chartStereotypedMenLower"> </svg> <?php
              break;
            case 1:
            ?>
            <span></span><svg id="chartStereotypedWomenLower"> </svg> <?php
              break;
            case 2:
            ?>
            <span> </span> <svg id="chartNotStereotypedMenLower"> </svg> <?php
              break;
            case 3:
              ?> <span> </span>  <svg id="chartNotStereotypedWomenLower"> </svg>  <?php
              break;
          }

      ?>
  </div>

    <script type="text/javascript" src="./html/js/visualizations/visualizationGenderTest.js"></script>
</div>


