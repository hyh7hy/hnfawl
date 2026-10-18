# Hanif Awol Seid: portfolio site
Plain HTML, CSS, and vanilla JS. No build step.
**Run:** `python3 -m http.server` in this folder, open http://localhost:8000
**Deploy:** upload the folder to any static host (Netlify, Cloudflare Pages, GitHub Pages).
**Placeholders:** set the real domain in each page's `<link rel="canonical">`; add email and social links in `contact.html`.
**Contact form:** it validates in the browser but sends nothing until you add a form service. Set `data-endpoint="https://your-form-service-url"` on `<form id="contact-form">` in `contact.html`.
**Fonts:** loaded from Google Fonts with Georgia and system fallbacks.
**Removed:** projects section, `work.html`, `project.html`, and portfolio filtering, per request.
