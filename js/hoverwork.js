var currentid = "";
function a(id){
    
    if(currentid != id){
        currentid = id;
        
        console.log(id);
        var x = $("#" + id).find($("img")).attr("src");
        console.log(x);
        
        $(".works-container").css("background-image", "url(" + x + ")")
    }
    
}