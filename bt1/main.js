function timSND(){
    var n = 0;
    var tong = 0;
    while(tong < 10000){
        n++;
        tong = tong + n;
    }
    document.getElementById("footer1").className = "card-footer d-block";
    document.getElementById("span1").innerHTML = n;
}