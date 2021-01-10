function tinhTong(){
    var x = parseInt(document.getElementById("txtx").value);
    var n = parseInt(document.getElementById("txtn").value); 
    var tong = 0;
    var luythua = 1;
    for(var i = 1;i<=n;i++){
        luythua = luythua * x;
        tong += luythua;
    }
    document.getElementById("footer2").className = "card-footer d-block";
    document.getElementById("span2").innerHTML = tong;
}