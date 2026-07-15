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
    
};


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


document.getElementById('current-year').innerHTML = new Date().getFullYear();