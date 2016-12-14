jQuery(function($){
  $('.ride').click(function() {
    if (!$(".ride").hasClass("selected")) {
      $(".ride").toggleClass("selected");
      $(".drive").toggleClass("selected");
      $("#findForm").toggleClass("current");
      $("#postForm").toggleClass("current");
    }
  })
  $('.drive').click(function() {
    if (!$(".drive").hasClass("selected")) {
      $(".ride").toggleClass("selected");
      $(".drive").toggleClass("selected");
      $("#findForm").toggleClass("current");
      $("#postForm").toggleClass("current");
    }
  })
})
