// This is where you add behaviour to your webpage

// Event Listener in jQuery
$("button").click(function() {
    $("h1").css("color", "purple");
})

$(document).keydown(function(event){
    $("h1").html(event.key);
})


// Animation

$("button").on("click", function() {
    $("h1").slideUp().slideDown();
})
/* 

You can add elements with jQuery with:
- before()
- after()
- prepend(): adds it after the opening tag
- append(): adds it before the closing tag

*/