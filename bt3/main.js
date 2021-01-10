function tinhGiaiThua(){
    var n = parseInt(document.getElementById("txtsoN").value);
    var giaithua = 1;
    for(var i = 1;i<=n;i++){
        giaithua = giaithua * i;
    }
    document.getElementById("footer3").className = "card-footer d-block";
    document.getElementById("span3").innerHTML = giaithua;
}