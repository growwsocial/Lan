document.addEventListener("DOMContentLoaded", function() {
      // Initialize each odometer
      document.querySelectorAll('.odometer').forEach(function(odometerElem) {
        const odometer = new Odometer({
          el: odometerElem,
          value: 0
        });
        // Set the value after a short delay to trigger the animation
        setTimeout(function() {
          odometer.update(odometerElem.getAttribute('data-count'));
        }, 1000);
      });
    });
