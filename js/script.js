
$(document).ready(function(){

  //smooth scrolling
      var $root = $('html, body');
      $('.navbar-nav a').click(function () {
          var href = $.attr(this, 'href');
          if (href != undefined && href != '#') {
              $root.animate({
                  scrollTop: $(href).offset().top
              }, 500, function () {
                  window.location.hash = href;
              });
          }
          return false;
      });

      $('.dropdown-toggle').dropdown();

  //tooltip
      $(function () {
          $('[data-toggle="tooltip"]').tooltip();
      });

//appending message
      $('#submit-btn').on('click',function(){
        var name=$('.name').val();
        var phone=$('.phone').val();
        var subject=$('.subject').val();
        var email=$('.email').val();
        var comment=$('.message-box').val();
        if(comment===""){
          $(".message-box").css('border-color', 'red');
        }
        else if(name===""){
          $(".name").css('border-color', 'red');
        }
      else if(email===""){
        $(".email").css('border-color', 'red');
      }
    else if(subject===""){
      $(".subject").css('border-color', 'red');
    }

      });
  //keyup

$(".message-box").on("keyup",function(){
  var charCount=$(".message-box").val().length;
  console.log(charCount);
  if(charCount<150){
    $('#char-count').css("color", "black");
  }
  else{
    $('#char-count').css("color","red");
  }
  $('#char-count').html(charCount);
});

//work section
for(var i=0; i<works.length;++i){
  $("#work").append("\
  <div class='col-xs-12  edit-obj'>\
  <h3 class='obj-head'>"+works[i].title+"</h3>\
<iframe "+works[i].link+"></iframe>\
  </div>")
};

});
