<?php //header("Cache-Control: no-cache, must-revalidate");
// session_start();
$configFileContents = file_get_contents("../setup/config/config.json");
$config = json_decode($configFileContents, true);

/*
 This file will generate our CSV table. There is nothing to display on this page, it is simply used
 to generate our CSV file and then exit. That way we won't be re-directed after pressing the export
 to CSV button on the previous page.
*/

// convert the sent data into a flat array
$data = json_decode(file_get_contents('php://input'), true);
var_dump(implode(",", $data));
echo implode(",", $data);
// extract the headers from the array
$headers = array_keys($data);

// our main csv file
$file_name = '../../results/results.csv';
$exists = file_exists($file_name);

// open a file handle to append new data
$handle = fopen($file_name, 'a+');

// if the file is empty, write a header line first
if (!$exists){
	fputcsv($handle, $headers);
}

// add the received data to the file
fputcsv($handle, $data);

// close the file
fclose($handle);

if (file_exists('../setup/' . $config["stimuli_order_files"]["directory_name"] . '/in_use/' . $data["condition"])){
	$cwd = getcwd();
	chdir('../setup/' . $config["stimuli_order_files"]["directory_name"]);
	$pid_file = $data["condition"];
	echo 'pid file ' . $pid_file;
	// move the file and return a message if it worked or not. for linux
	//echo rename('in_use/' . $pid_file , 'used/' . $pid_file) ? 'Server moved order file on used pile' : 'Error moving order file ' . $pid_file;

	$oldfile = 'in_use/' . $pid_file;

	// same than before but  for windows
    if (!rename($oldfile,'used/' . $pid_file)) {
        if (copy ('in_use/' . $pid_file,'used/' . $pid_file)) {
            unlink('in_use/' . $pid_file);
        }
    }
    else {
    echo 'File has been moved';
    }

	// check if there are abandoned files from participants who timed out
	if (isset($config["stimuli_order_files"]["time_out"])){
		$time_out = $config["stimuli_order_files"]["time_out"] * 60 * 60;
		$now = time();
		// go through all files in the in_use folder and check when they were last modified.
		chdir('in_use/');
		$files = glob('*.csv');
		// make sure there is at least 1
		if (count($files) > 0){
for ($i=0; $i < count($files); $i++) {
$ts = filemtime($files[$i]);
if ($now - $ts > $time_out){
echo rename($files[$i] , '../unused/'.  $files[$i]) ? 'Moved back file ' . $files[$i] : 'Failed to move file ' . $files[$i];
}
}
}
}


// set the old working directory back
chdir($cwd);
}
exit;

?>
