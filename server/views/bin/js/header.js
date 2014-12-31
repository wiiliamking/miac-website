(function() {
  $('#logout').click(function() {
    return $.ajax({
      url: '/log/session',
      type: 'delete',
      success: function(data) {
        alert(data.result + '\n' + (data.msg ? data.msg : void 0));
        if (data.result === 'success') {
          return $(location).attr('href', '/');
        }
      }
    });
  });

  $('.link').mouseover(function(event) {
    var target;
    target = $(event.currentTarget);
    return $('.triangle').css("left", (target.attr("data-num") * 95 + 30) + "px");
  });

}).call(this);
