(function ($) {

  var app = $.sammy('#app', function () {
    this.use('Template');
    this.get('#/', function (context) {
      context.app.swap('');
      context.render('templates/home.html', {})
        .appendTo(context.$element());
      setTimeout(function () {
        $('.carousel').carousel({
          interval: 5000 //changes the speed
        })
      }, 5000);
    });

    this.get('#/bio', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/bio.html', {})
        .appendTo(context.$element());
    });
     this.get('#/headshoot', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/headshoot.html', {})
        .appendTo(context.$element());
    });
     this.get('#/modeling', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/modeling.html', {})
        .appendTo(context.$element());
    });
     this.get('#/stats', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/stats.html', {})
        .appendTo(context.$element());
    });
     this.get('#/video', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/video.html', {})
        .appendTo(context.$element());
    });
    this.get('#/contact', function (context) {
      var str = location.href.toLowerCase();
      context.app.swap('');
      context.render('templates/contact.html', {})
        .appendTo(context.$element());
    });

    this.before('.*', function () {
      var hash = document.location.hash;
      $("nav").find("a").removeClass("current");
      $("nav").find("a[href='" + hash + "']").addClass("current");
    });

  });

  $(function () {
    app.run('#/');
  });

})(jQuery);