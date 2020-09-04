let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let menu_items= null;


$("document").ready(function(){
    $.get(url,function(data,success){
        menu_items=data.menu_items;
        console.log(menu_items.length);
        createoptions();
    });

});

function createoptions() {

    let i=0;
    if(menu_items!=null){

        for(const jsonObj of menu_items){
            console.log(i++, jsonObj.name);
        }
    }
}