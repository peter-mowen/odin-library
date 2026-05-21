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
