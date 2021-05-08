
src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous">
     $(document).ready(function(){
         $('a').click(function(){
            // alert("i am click");
             var selected = $(this);
             $('a').removeClass('active');
             $(selected).addClass('active');
         });

         var $a = $('.a'),
         $b = $('.b'),
         $c = $('.c'),
         $d = $('.d')
         $home = $('.home'),
         $aboutus = $('.aboutus');

         $a.click(function(){
             $home.fadeIn();
             $aboutus.fadeOut();
         })
    });
  
    