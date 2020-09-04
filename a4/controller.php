<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
require 'data.php';

$req = $_GET['req'] ?? null;

if($req) {
  $jsonfile = file_get_contents("restaurant.json");
  $data = json_decode($jsonfile, true)['menu_items'];
  try {
    $menuitemsList = new menuitemsList($data);
  } catch (Exception $th) {
      echo json_encode([$th->getMessage()]);
      return;
  }
}

switch($req) {
  case 'menu_item_list': 
    echo $menuitemsList->getmenu_item();
    break;
  
  case 'menu_item_data': 
    $id = $_GET['id'] ?? null;
    echo $menuitemsList->getmenuitemsList($id);
    break;

  default: 
    echo json_encode(["Invalid Resquest!"]);
    break;
}

?>