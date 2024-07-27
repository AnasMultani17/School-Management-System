
      $(document).ready(function () {
        $(".c1, .c3, .c4, .c5").hover(
          function () {
            $(this).css("font-size", "25px");
            $(this).css("background-color", "rgba(95, 180, 160, 1)");
          },
          function () {
            $(this).css("font-size", "");
            $(this).css("background-color", "");
          }
        );
      });
       function loadAdmission() {
        document.location.href = "form.html";
      }
       function loadHome() {
        document.location.href = "homepage.html";
      }
      function loadUpdates() {
        document.location.href = "updates.html"
       
      }

      function loadResult() {
        document.location.href = "result.html";
      }
      function loadAttendance() {
        document.location.href = "attendance.html";
      }
