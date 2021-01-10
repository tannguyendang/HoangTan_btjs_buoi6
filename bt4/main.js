function background(){
    var content = "";
    for(var i = 0;i<10;i++){
        if(i%2===0){
            content += "<div style=background:red;padding:10px;></div>";
            content += "<br/>";
        }else{
            content += "<div style=background:blue;padding:10px;></div>";
            content += "<br/>";
        }
    }
    document.getElementById("footer4").className = "card-footer d-block";
    document.getElementById("footer4").innerHTML = content;
}