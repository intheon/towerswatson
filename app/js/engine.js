    $(function() {
      new Dragend($("#main").get(0), {
        afterInitialize: function() {
          $("#main").css("visibility", "visible");
        }
      });
    });