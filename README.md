# AskLit — Frontend

**AskLit is a free, open-source research tool that answers plain-English questions with real books instead of AI-generated text.**

Ask it something like *"How does the Federal Reserve control inflation?"* and instead of a confident paragraph that may or may not be accurate, you get links to actual published books — each opened to a relevant preview on Google Books, so you can read the source and verify it yourself.

Live at **[asklit.online](https://asklit.online)**.

This repository contains the frontend — the web interface users actually interact with.

## Why this exists

AI tools are everywhere, and they're useful, but they also confidently state things that are wrong. For anyone trying to genuinely learn or do real research, that's a problem — you can't cite a chatbot, and you can't always tell when it's making things up.

AskLit takes a different path. It uses AI only for what it's reliably good at — understanding your question and turning it into a strong search — and then gets out of the way. The actual answer comes from books written by people who know the subject. You read the real source, in context, and judge for yourself.

The aim is academic honesty by design: point people *toward* primary sources instead of replacing them. The belief behind it is simple — the fix for AI misinformation isn't less technology, it's aiming technology at verifiable human knowledge.

## How it works

The interface is intentionally minimal: a single question box. When you search:

1. Your question goes to the AskLit backend.
2. The backend extracts keywords, queries Google Books, and returns matching titles.
3. Each result renders as a card with the book's title, publication date, a relevant snippet, and a direct "Preview on Google Books" link.

No accounts, no clutter — type a question, get books.

## Tech stack

- Static **HTML / CSS / JavaScript**
- **Bootstrap 5** for layout and styling
- Talks to the [AskLit backend](https://github.com/Max-is-awsome/ask-lit-backend) over a simple JSON API
- Deployed on **Vercel**

## Running locally

This is a static site — no build step required.

```bash
git clone https://github.com/Max-is-awsome/ask-lit-frontend.git
cd ask-lit-frontend
```

Then open `index.html` in your browser, or serve the folder with any static server:

```bash
python -m http.server 3000
```

By default the frontend talks to the deployed backend. To point it at a local backend instead, update the fetch URL in `script.js`.

## Status

AskLit is live and maintained — a personal project built and run solo, free for anyone to use, with no ads, no accounts, and no funding behind it. Just something I think should exist.

## License

Open source. See [LICENSE](LICENSE) for details.
