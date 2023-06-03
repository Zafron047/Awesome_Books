let importedArray = JSON.parse(localStorage.getItem('exportedArray')) || [];
// Value imported to JavaScript array.

function addBookToArr() {
  let titleInput = document.querySelector('#Title').value;
  let authorInput = document.querySelector('#Author').value;

  if (titleInput && authorInput) {
    importedArray.push({
      title: titleInput,
      author: authorInput
    });
    localStorage.setItem('exportedArray', JSON.stringify(importedArray));
    // Method: Key Value pair pushed into the array and localStorage
  }
};

let addBook = document.querySelector('#addBookBtn');
addBook.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToArr();
  showRemoveBook();
});

let remove = document.querySelector('#removeBtn');
function removeBook(index) {
  importedArray = importedArray.filter((book, i) => i !== index);
  localStorage.setItem('exportedArray', JSON.stringify(importedArray));
  showRemoveBook();
};

//--------------------------------------------------------------------

function showRemoveBook() {
  let bookList = document.querySelector('#bookList');
  bookList.innerHTML = ``;

  importedArray.forEach((book, index) => {
    let newBook = document.createElement('div');
    let bookTitle = document.createElement('p');
    bookTitle.innerText = `${book.title} Author:`;
    let bookAuthor = document.createElement('p');
    bookAuthor.innerText = `${book.author}`;
    let removeBtn = document.createElement('button');
    removeBtn.id = 'remove';
    let hrElement = document.createElement('hr');
    removeBtn.innerText = 'Remove';
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(removeBtn);
    newBook.appendChild(hrElement);
    bookList.appendChild(newBook);

    removeBtn.addEventListener('click', () => removeBook(index));
  });
};

// console.log('this is array', importedArray);
