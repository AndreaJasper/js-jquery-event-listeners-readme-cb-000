//define functions here



    function getIt() {
        $('p').on('click', function() {
          alert('hey!');
      });
      }
      
      function frameIt() {
        $('img').on('load', function(){
         $('img').addClass('tasty')
        });
      }
      
      function pressIt() {
        $(document).on('keydown', function(key) {
          if(key.which == 71){
              alert("You pressed 'g'!");
          }
        });
      }
      
      function submitIt() {
        $("form").on("submit", function(e) {
            alert('Your form is going to be submitted now.');
        });
      }
      
      $(document).ready(function(){

});
