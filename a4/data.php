<?php

class menuitemsList {

  private $menu_item;

  function __construct(array $menu_item) {
    if(sizeof($menu_item) > 0) {
      $this->menu_item = $menu_item;
    } else {
      throw new Exception("No menu item available");
    }
  }

  public function getmenu_item() {
    $itemList = [];

    foreach($this->menu_item as $items) {
      $itemsList[] = array(
        "id" => $items['id'],
        "name" => $items['name']
      );
    }

    return json_encode($itemsList);
  }

  public function getmenuitemsList($id) {
    $response = ["Invalid id"];

    if($id) {
      foreach($this->menu_item as $items) {
        if ($id == $items['id']) {
          $response = $items;
          break;
        }
      }
    }

    return json_encode($response);
  }
}