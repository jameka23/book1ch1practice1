const welcome = document.querySelector(".article__header");
console.log("Hello", welcome);

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the 
// textContent property to "Welcome to the {insert your name here} blog"

welcome.textContent = "Welcome to the Jameka blog";

// Use JavaScript to obtain a reference to all article__header elements and 
// change their classList property value to article__header important.
const artArray = document.querySelectorAll(".article__header");
for (let i = 0; i < artArray.length; i++) {
    artArray[i].classList.add("important");
    console.log('added important');
}

// Obtain a reference the element with a class of dashed and remove it.
const removeEl = document.querySelector(".dashed");
removeEl.classList.remove("dashed");


// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const articleEl = document.querySelector(".article__footer");
articleEl.classList.add("goldenrod");
