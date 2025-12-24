// the contents of this file was written with the help of generative AI

async function sendMessage() {
    const userInputEl = document.getElementById("userInput");
    const responseElement = document.getElementById("response");
    const bookList = document.getElementById("bookList");

    const userInput = userInputEl.value.trim();

    if (!userInput) {
        responseElement.innerHTML = `
            <div class="alert alert-warning">
                Please enter a question.
            </div>
        `;
        return;
    }

    // Loading state
    responseElement.innerHTML = `
        <div class="d-flex align-items-center gap-2">
            <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
            <span>Analyzing your question...</span>
        </div>
    `;
    bookList.innerHTML = "";

    try {
        const response = await fetch("https://ask-lit-backend.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unknown error");
        }

        // AI explanation / response
        responseElement.innerHTML = `
            <div class="alert alert-secondary">
                ${data.reply || "Here are some books that may help."}
            </div>
        `;

        // Books
        if (Array.isArray(data.books) && data.books.length > 0) {
            data.books.forEach(book => {
                const li = document.createElement("li");

                li.innerHTML = `
                    <div class="card book-card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title mb-1">
                                ${book.title || "Untitled"}
                            </h5>

                            <h6 class="card-subtitle mb-2 text-muted">
                                ${book.published_date || "Publication date unknown"}
                            </h6>

                            <p class="card-text">
                                ${book.quote ? `"${book.quote}"` : "No preview available."}
                            </p>

                            ${book.link ? `
                                <a href="${book.link}" 
                                   target="_blank" 
                                   class="btn btn-sm btn-outline-primary">
                                    Preview on Google Books
                                </a>
                            ` : ""}
                        </div>
                    </div>
                `;

                bookList.appendChild(li);
            });
        } else {
            bookList.innerHTML = `
                <li>
                    <div class="alert alert-info">
                        No books found for this question.
                    </div>
                </li>
            `;
        }

    } catch (error) {
        responseElement.innerHTML = `
            <div class="alert alert-danger">
                Unable to retrieve results. Please try again later.
            </div>
        `;
        console.error(error);
    }
}
