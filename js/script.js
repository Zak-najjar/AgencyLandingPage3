function scrollFun() {
    if(document.documentElement.scrollTop> 200){
        document.getElementById("navbar").classList.add("noTranspparent");
    }else{
        document.getElementById("navbar").classList.remove("noTranspparent");
    }
}


window.onscroll = function() {
    scrollFun()
};



window.onload = function(){
    let website = new CountUp('webID',0,250,0,2.5)
    website.start();
    let phone = new CountUp('phID',0,100,0,2.5)
    phone.start();
    let user = new CountUp('userID',0,10000,0,2.5)
    user.start();
    let video = new CountUp('vidID',0,30,0,2.5)
    video.start();
    
}