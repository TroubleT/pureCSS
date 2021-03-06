// open menu
(function($) {
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);




// close menu after click on link

(function($) {
  $(function() {
    $('.menu__links-item').on('click', function() {
      $(this).closest('.menu').removeClass('menu_state_open');
    });
  });
})(jQuery);



// Get the button that opens the modal

const btnH = document.getElementById("myBtnH");
btnH.addEventListener('click', function() {
      const modalH = document.getElementById('myModalH');
      modalH.style.display = "block";
    });
    
const btnC = document.getElementById("myBtnC");
btnC.addEventListener('click', function() {
      const modalC = document.getElementById('myModalC');
      modalC.style.display = "block";
    });
    
const btnW = document.getElementById("myBtnW");
btnW.addEventListener('click', function() {
      const modalW = document.getElementById('myModalW');
      modalW.style.display = "block";
    });

// Get the <span> element that closes the modal
const span = document.querySelectorAll("span.close");
span.forEach(function(x){
x.addEventListener('click', function() {
      const modal = document.querySelectorAll('div.modal');
      modal.forEach(function(y){
        
      y.style.display = "none";
      });
  });
});



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  const modal = document.getElementsByClassName('modal');
  for(let i in modal){
  if (event.target == modal[i]) {
    
    modal[i].style.display = "none";
  }
}
};



// close envelope

(function($) {
$('#sendForm').on('click', function(e) {
   e.preventDefault();
  let el = $('.input-field')
    if (el[0].value.length >0 && el[1].value.length >0 && el[2].value.length >0 ){
      let data = el[0].value + el[1].value + el[2].value;
            $.ajax({
                url: 'form.php',
                method: 'POST',
                data: {text: data}});
   $('.envelope__top').toggleClass('envelope__top_close');     
   $('.paper').toggleClass('paper_close');
   setTimeout(function(){$('.envelope').toggleClass('envelopeToRight')}, 600)
}
});
})(jQuery);



//  smooth scrolling

$('#topBtn').click(function(){
       $('html, body').animate({scrollTop:0}, 1000);
});
$('#historyLink').click(function(){
       $('html, body').animate({scrollTop:$('#history').offset().top}, 1000);
});
$('#winesLink').click(function(){
       $('html, body').animate({scrollTop:$('#wines').offset().top}, 1000);
});
$('#cellarLink').click(function(){
       $('html, body').animate({scrollTop:$('#cellar').offset().top}, 1000);
});
$('#orderLink').click(function(){
       $('html, body').animate({scrollTop:$('#order').offset().top}, 1000);
});
$('#followLink').click(function(){
       $('html, body').animate({scrollTop:$('#follow').offset().top}, 1000);
});