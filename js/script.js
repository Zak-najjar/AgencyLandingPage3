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
