// Change styles directly (usually will not do this)
$("h1").css("color", "red");

// The $ selector is universal, it will select all elements that matches what was passed into it!

// Add and remove classes

// We can add a class by passing the class as a string in the addClass function:
$("h1").addClass("big-text");

// We can add multiple classes by putting a space between classes we'd like to add:
$("h1").addClass("big-text red-text");

// We can remove classes just like how we added them:
$("h1").removeClass("big-text");

// We can check if an element has a class too:
$("h1").hasClass("big-text");

// Manipulating text

// 1. the text method simply allows us to add text
$("h1").text("Bye");

// 2. The HTML method lets us add test along with html
$("button").html("<em>Button</em>");

// Although this works, this will change ALL instances of this element to the matching text, alternatively we can do:

// Manipulating Attributes with JQuery
$("img").attr("src");
// This gives us the src attribute of our image. If we only pass one argument, we simply recieve the attribute value

// If we pass in a second input, the second input is what we want the attribute to be
$("a").attr("href", "https://yahoo.com");

// We can get a string of all our classes via
$("h1").attr("class");

/////////////////////////////
// Adding Event Listeners //
///////////////////////////
$("h1").click(function() {
  $("h1").css("color", "purple");
});
// Since the $ selector is universal, if we use it to select a button for example, it will select every button on our page, this lets us add event listeners really easily! In vanilla JS, this would require a for loop
$("button").click(function() {
  console.log("the button was clicked");
});
$("input").keypress(function(e) {
  $("h1").text(e.key);
});

// Another way to add event listeners is:
$("h1").on("mouseover", function() {
  $("h1").css("color", "red");
});

//////////////////////////////////////////////
// Adding and removing elements with JQuery //
//////////////////////////////////////////////

// The before method appends the html passed into it before the selected element (on top of it)
// $("h1").before("<button>new button</button>");

// The after method appends the html passed into it after the selected element (below it)
// $("h1").after("<button>new button</button>");

// The prepend method will add the passed in HTML and put it inside the selected element as the first text after that element's tags
// $("h1").prepend("<button>new button</button>");
{
  /* <h1>
  <button>new button</button>
  h1 text
</h1> */
}
// The append method will add the pass in HTML put inside it into the selected element as the last item in the element, before the closing tag
/* <h1>
  h1 text
  <button>new button</button>
</h1> */

// Removing elements
// First select it then run .remove()
// $("button").remove();

// Animating in jquery
// Hide instantly hides an element from a page
// $("h1").click(function() {
//   $("h1").hide();
// });
// ALternatively if we use fadeOut and fadeIn, it will slowly fade out/in, we can also use fadeToggle to toggle between
$("h1").click(function() {
  $("h1").fadeOut();
});

// Alternatively if we want to create custom animations, we can!
$("button").on("click", function() {
  // Note about animate, we can ONLY animate CSS properties that have numeric values!
  // if you want multiple animations, u can chanin them
  $("h1")
    .slideUp()
    .slideDown()
    .animate({ opacity: 0.5 });
});
