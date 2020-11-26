 $(document).ready(function () {
     $('.carousel').carousel();
     $('.carousel-slider').carousel({
         fullWidth: false,

     });
     setInterval(function () {
         $('.carousel').carousel('next');
     }, 15000);

 });
