// var $burgerName = $("#name-txt");

// $("#submit-btn").on("click",function(e){
   
//     e.preventDefault();

//     if($burgerName.val() !== ""){

//         var newBurger = {burger_name: $burgerName.val()}

//         $.post("/api/burgers",{data: newBurger}).then(function(){
//             console.log("created new burger");
//             // Reload the page to get the updated list
//             location.reload();
//         })

//     }
// })

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("add burger clicked");

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      //devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
