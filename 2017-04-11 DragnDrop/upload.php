<?php
header('Content-type: application/json');
$files = $_FILES;
echo json_encode($files);