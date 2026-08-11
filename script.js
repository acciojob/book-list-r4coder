const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");

const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Add book
submit.addEventListener("click", function () {
    const titleValue = title.value;
    const authorValue = author.value;
    const isbnValue = isbn.value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${titleValue}</td>
        <td>${authorValue}</td>
        <td>${isbnValue}</td>
        <td>
            <button class="delete">Clear</button>
        </td>
    `;

    bookList.appendChild(row);

    title.value = "";
    author.value = "";
    isbn.value = "";
});

// Delete book
bookList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        const row = event.target.parentElement.parentElement;
        row.remove();
    }
});