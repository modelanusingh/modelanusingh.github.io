(function($) {

  var app = $.sammy('#app', function() {
    this.use('Template');
    this.get('#/', function(context) {
      context.app.swap('');
     
        context.render('templates/home.html',{})
               .appendTo(context.$element());

                 $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
     
    });
    
    this.get('#/about', function(context) {
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/about.html', {})
               .appendTo(context.$element());
    });  

    this.before('.*', function() {
        var hash = document.location.hash;
        $("nav").find("a").removeClass("current");
        $("nav").find("a[href='"+hash+"']").addClass("current");
   });

  });

  $(function() {
    app.run('#/about');
  });

})(jQuery);