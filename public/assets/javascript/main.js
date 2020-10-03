// Function to house both the on click functions -- Waits for the DOM to be loaded
$(function() {

    $(".devourBtn").on("click", function (event) {
      var id = $(this).data("id");
      var devouredstate = $(this).data("devouredstate");
      var newDevouredState = {
        devoured: devouredstate
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    $('.create-form').submit(event => {
      event.preventDefault();
      var newBurger = {
          name: $('#name').val().trim()
      };

      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(() => {
        console.log('created!');
        location.reload();
    })
  });

  $('.deleteBtn').click(event => {
    var id = $(event.target).data("devouredstate");
    $ajax('/api/burgers/' + id, {
      type: 'DELETE'
    }).then(response => {
      location.reload();

    });
  })

  });