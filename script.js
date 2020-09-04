var menu_data = [];
var items = {};

$(document).ready(function () {

  $.get("http://localhost/WT/A4/controller.php?req=menu_item_list", function (data) {
    menu_data = data;
    menu_data.forEach((item, index) => {
      $("#menuitems").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#menuitems").change((e) => {
    const selected = menu_data[e.target.value];

    $.get(`http://localhost/WT/A4/controller.php?req=menu_item_data&id=${selected.id}`, function (data) {

      items = data;
      $('#display').html(
        `<p> ID - ${items.id} </p>
        <p> Short Name - ${items.short_name} </p>
        <p> Name - ${items.name} </p>
        <p> Description - ${items.description} </p>
        <p> Price small - ${items.price_small} </p>
        <p> Price Large - ${items.price_large} </p>
        <p> Small Portion Name - ${items.small_portion_name} </p>
        <p> Large Portion_Name - ${items.large_portion_name} </p>
        `
      )
    })
  })
}); 