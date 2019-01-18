document.querySelector("ul").lastElementChild.innerHTML = "Kevin Lin";

document.querySelector("ul a").style.color = "red";

// .style can change any css property, but you must use camel casing, marginBottom, backgroundColor, fontSize, etc. Values that you set it to must also be strings!
document.querySelector("button").style.backgroundColor = "yellow";

// Separation of concerns
// Each file should be used for ONE and only one reason
// HTML - Structure, CSS- Style, JavaScript - Functionality
// You usually do not want to set styles using Java Script

// Grabbing classes
document.querySelector("button").classList;
// returns an "array" of classes for the button
// We can then add classes by:
document.querySelector("button").classList.add("hidden");
// We can then go into our CSS file, and create this hidden class
// Likewise, we can remove classes by:
document.querySelector("button").classList.remove("hidden");
// Even better, we can use the method toggle which will add or remove based on if the class exists:
document.querySelector("button").classList.toggle("hidden");
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").classList.toggle("huge");
});
// Text content vs innerHTML
// innerHTML gives you the HTML between the HTML tags of the selected element, this means if you have a tag within the selected tag, wou will recieve the tag as well
// Text content will only pull the text, not any embedded element tags!

// Attributes
// Attributes are anything within the tag of an HTML element other than the tag itself such as: class id etc.
document.querySelector("a").attributes;
// returns a list of attributes

document.querySelector("a").getAttribute("href");
// returns the value of the attribute

document.querySelector("a").setAttribute("href", "https://google.com");
// chnages and sets an attribute
