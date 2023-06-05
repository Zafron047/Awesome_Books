class BookManager {
  constructor() {
    this.importedArray = JSON.parse(localStorage.getItem('exportedArray')) || [];
    this.titleInput = document.querySelector('#Title');
    this.authorInput = document.querySelector('#Author');
    this.addBookBtn = document.querySelector('#addBookBtn');
    this.removeBtn = document.querySelector('#removeBtn');
    this.bookList = document.querySelector('#bookList');

    this.addBookBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.addBookToArr();
      this.showRemoveBook();
    });

    this.removeBtn.addEventListener('click', () => {
      this.removeBook();
    });
  }

  addBookToArr() {
    const titleInputValue = this.titleInput.value;
    const authorInputValue = this.authorInput.value;

    if (titleInputValue && authorInputValue) {
      this.importedArray.push({
        title: titleInputValue,
        author: authorInputValue
      });

      localStorage.setItem('exportedArray', JSON.stringify(this.importedArray));
    }
  }

  removeBook() {
    this.importedArray = this.importedArray.filter((book, index) => index !== 0);
    localStorage.setItem('exportedArray', JSON.stringify(this.importedArray));
    this.showRemoveBook();
  }

  showRemoveBook() {
    this.bookList.innerHTML = '';

    this.importedArray.forEach((book, index) => {
      const newBook = document.createElement('div');
      const bookTitle = document.createElement('p');
      bookTitle.innerText = `${book.title} Author:`;
      const bookAuthor = document.createElement('p');
      bookAuthor.innerText = `${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.id = 'remove';
      const hrElement = document.createElement('hr');
      removeBtn.innerText = 'Remove';
      newBook.appendChild(bookTitle);
      newBook.appendChild(bookAuthor);
      newBook.appendChild(removeBtn);
      newBook.appendChild(hrElement);
      this.bookList.appendChild(newBook);

      removeBtn.addEventListener('click', () => this.removeBook(index));
    });

    this.clearForm();
  }

  clearForm() {
    this.titleInput.value = '';
    this.authorInput.value = '';
  }
}

const bookManager = new BookManager();
