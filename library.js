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

function buildHaveReadText(haveRead) {
  return `I have ${haveRead ? '' : 'not'} read this`;
}

function checkboxChanged(event) {
  const container = event.target.closest('.have-read-container');

  if (!container) {
    console.error("Expect checkbox to be inside container!");
    return;
  }

  const haveReadText = container.querySelector('.have-read-text');

  if (!haveReadText) {
    console.error('Expected "have-read-text" element in container!');
  }

  haveReadText.textContent = buildHaveReadText(event.target.checked);
}

function createCard(book) {
  let title = document.createElement('div');
  title.classList.add("card-title");
  title.textContent = book.title;

  let hr = document.createElement('hr');
  
  let author = document.createElement('div');
  author.classList.add('card-author');
  author.textContent = book.author;

  let numOfPages = document.createElement('div');
  numOfPages.classList.add('card-number-of-pages');
  numOfPages.textContent = book.pages;

  let haveReadContainer = document.createElement('div');
  haveReadContainer.classList.add('have-read-container');

  let haveReadSwitch = document.createElement('label');
  haveReadSwitch.classList.add('switch');
  haveReadContainer.appendChild(haveReadSwitch);
  
  let haveReadCheckBox = document.createElement('input');
  haveReadCheckBox.type = 'checkbox';
  haveReadCheckBox.checked = book.haveRead;
  haveReadCheckBox.classList.add('switch-input');
  haveReadCheckBox.addEventListener('change', checkboxChanged);
  haveReadSwitch.appendChild(haveReadCheckBox);

  let slider = document.createElement('span');
  slider.classList.add('card-slider', 'round');
  haveReadSwitch.appendChild(slider);

  let haveReadText = document.createElement('span');
  haveReadText.textContent = buildHaveReadText(book.haveRead);
  haveReadText.classList.add('have-read-text');
  haveReadContainer.appendChild(haveReadText);

  let deleteButton = document.createElement('button');
  deleteButton.type = 'button';

  let card = document.createElement('div');
  card.classList.add('card');
  card.appendChild(title);
  card.appendChild(hr)
  card.appendChild(author);
  card.appendChild(numOfPages);
  card.appendChild(haveReadContainer);
  card.appendChild(deleteButton);

  let libraryContainer = document.getElementsByClassName('library-container')[0];

  if (libraryContainer) {
    libraryContainer.appendChild(card);
  }
}

myLibrary.forEach(element => {
  createCard(element);
});
