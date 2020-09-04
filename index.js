var resdata = [];
var rescipe = {};

$(document).ready(function () {

  $.get("http://localhost/WT/A4/controller.php?req=res_list", function (data) {
    resdata = data;
    resdata.forEach((item, index) => {
      $("#menuitems").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#menuitems").change((e) => {
    const selected = resdata[e.target.value];

    $.get(`http://localhost/WT/A4/controller.php?req=res_data&id=${selected.id}`, function (data) {

      rescipe = data;
      $('#dataholder').html(
        `<p> ID - ${rescipe.id} </p>
        <p> Short Name - ${rescipe.short_name} </p>
        <p> Name - ${rescipe.name} </p>
        <p> Description - ${rescipe.description} </p>
        <p> Price small - ${rescipe.price_small} </p>
        <p> Price Large - ${rescipe.price_large} </p>
        <p> Small Portion Name - ${rescipe.small_portion_name} </p>
        <p> Large Portion_Name - ${rescipe.large_portion_name} </p>
        `
      )
    })
  })
}); 