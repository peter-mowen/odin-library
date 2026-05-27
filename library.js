function Book(title, author, pages, haveRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.uuid = crypto.randomUUID();
}

// Sample books with page numbers from Wikipedia
windAndTruth = new Book("Wind and Truth", "Brandon Sanderson", 1344, true);
theMismeasureOfMan = new Book("The Mismeasure of Man", "Stephen Jay Gould", 352, false);
aChristmasCarol = new Book("A Christmas Carol", "Charles Dickens", 166, false);
commonSenseInvesting = new Book("The Little Book of Common Sense Investing, 2nd ed", "John C. Bogle", 307, false);
arcanumUnbounded = new Book("Arcanum Unbounded", "Brandon Sanderson", 672, false);
theSunlitMan = new Book("The Sunlit Man", "Brandon Sanderson", 400, false);

// Fill the library with sample books
myLibrary = [windAndTruth, theMismeasureOfMan, aChristmasCarol, commonSenseInvesting, arcanumUnbounded, theSunlitMan];

// Get the modal
var modal = document.getElementById("add-book-dialog");

// Get the button that opens the modal
var btn = document.getElementById("add-book-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("add-book-modal-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
