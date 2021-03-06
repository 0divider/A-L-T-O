$(window).on('load resize scroll', function() {      
  if ($(window).width() < 576) {      
    $('body').addClass('js-mobile')
    $('.has-menu > a').click(function(e){
      e.preventDefault();
      $(this).parent().siblings().removeClass('js-expand');
      $(this).parent().toggleClass('js-expand');
    })
  } 
  else{
    $('body').removeClass('js-mobile')
  }
});  

$(document).ready(function(){   
	var mobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) mobile = true;
	if(mobile==true){$('html').addClass('js-mobile')}else{$('html').addClass('not-mobile')}			
	
  $('.menu > li').each(function(){
    if ($(this).find('ul').length != 0) {
      $(this).addClass('has-menu');
    }
  });

  $('.hamburger').click(function(){
    $('.header').removeClass('js-search');    
    $('body').toggleClass('js-open');    
  })

  $('.search-toggle').click(function(){
    $('.header').toggleClass('js-search');    
  })

  

  $(function() {
    jcf.replaceAll();
  });
  
  $('.case-unit').hoverIntent(showCase,hideCase);

  $("#case-1").addClass('current');

  function showCase(){
    var case_id = $(this).attr('data-case');
    $("#"+case_id).siblings().removeClass('current');
    $("#"+case_id).addClass('current');
  }
  function hideCase(){
    var case_id = $(this).attr('data-case');
    $("#"+case_id).removeClass('current');    
    setTimeout(function(){
      $("#case-1").addClass('current');
    }, 100);
  }
  
  $('.scroll-to').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 900);
    return false;    
  });  
	
	var swiperHero = new Swiper(".hero-slider", {
    slidesPerView: 1,    
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-hero-prev",
        prevEl: ".swiper-hero-next"
    },       
    on: {
      slideChange: function () {
        if (swiperHero.activeIndex == 0) {                  
          $('.hero-img').removeClass('current');
          $('.hero-img-0').addClass('current');
          console.log('Slide 1 is active')
        }                
        if (swiperHero.activeIndex == 1) {                  
          $('.hero-img').removeClass('current');
          $('.hero-img-1').addClass('current');
          console.log('Slide 2 is active')
        }        
        if (swiperHero.activeIndex == 2) {                  
          $('.hero-img').removeClass('current');
          $('.hero-img-2').addClass('current');
          console.log('Slide 3 is active')
        }
      },
    },
    breakpoints: {
        992: {          
          spaceBetween: 20,
          slidesPerView: 2,
        }        
      }   
  });  

  var swiper1 = new Swiper(".reviews-slider", {    
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
     autoplay: {
       delay: 5000,
     },
    navigation: {
        nextEl: ".swiper-review-prev",
        prevEl: ".swiper-review-next"
    },
  });

  var swiper = new Swiper(".work-slider", {
    slidesPerView: '1',    
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-work-prev",
        prevEl: ".swiper-work-next"
    },           
    breakpoints: {
        992: {          
          spaceBetween: 40,
          slidesPerView: 1,
        }        
      }   
  });

  var swiper = new Swiper(".team-slider", {
    slidesPerView: '2',    
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-team-prev",
        prevEl: ".swiper-team-next"
    },           
    breakpoints: {
        556: {          
          spaceBetween: 20,
          slidesPerView: 4,
        },
        992: {          
          spaceBetween: 40,
          slidesPerView: 4,
        }
      }   
  });

  var bPos = $(window).scrollTop();
    if(bPos > 1){
        $('.header').addClass('sticky');          
    } else{
        $('.header').removeClass('sticky');         
    } 

  $(window).scroll(function () { 
    var bPos = $(window).scrollTop();
    if(bPos > 1){
        $('.header').addClass('sticky');          
    } else{
        $('.header').removeClass('sticky');         
    } 
  });

  $('.go-top').click(function(){
     $('html, body').animate({scrollTop:0});
     return false;
  });    

  $(window).scroll(function () { 
   var bPos = $(window).scrollTop();
      if(bPos > 200){
          $('.go-top').fadeIn(300);          
      } else{
          $('.go-top').fadeOut(300);         
      } 
  });
	
});


