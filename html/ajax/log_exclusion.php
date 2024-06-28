<?php //header("Cache-Control: no-cache, must-revalidate");
// session_start();

/*
 This file will generate our CSV table. There is nothing to display on this page, it is simply used
 to generate our CSV file and then exit. That way we won't be re-directed after pressing the export
 to CSV button on the previous page.
*/
$configFileContents = file_get_contents("../setup/config/config.json");
$config = json_decode($configFileContents, true);


$data = json_decode(file_get_contents('php://input'), $flags = JSON_OBJECT_AS_ARRAY);
var_dump(implode(",", $data));
echo implode(",", $data);

// write individual file
$header = ["participant_id", "condition", "condition-for-this-participant", "timestamp_0"];
$excludedfile = "../../results/excluded.csv";
$exists = file_exists($excludedfile);

$handle = fopen("php://output", "w");
ob_start();
// write a column header
if (!$exists) {
	fputcsv($handle, $header);
}
/*foreach ($data as $dat) {*/
    fputcsv($handle, $data);
/*}*/
$csvContent = ob_get_clean();

/*if(isset($_POST['condition']) && $_POST['condition'] !=''){
    $result = $_POST['condition']();
    var_dump(json_encode($result));
}*/
echo file_put_contents($excludedfile, $csvContent, $flags = FILE_APPEND | LOCK_EX);
var_dump(implode(",", $data));
echo implode(",", $data);

exit;
?>
