# AI & Web Developer Portfolio

A single-page portfolio with dynamic animations, language levels, certifications, and project showcases.

## Features

- **Hero** – Photo, name, tagline, GitHub & LinkedIn links  
- **About** – Extra photos and short bio  
- **Languages** – English, French, German with level bars (Fluent / Advanced / Intermediate)  
- **Certifications** – 7 cards (titles/descriptions editable in HTML)  
- **Projects** – Title, description, and image per project  
- **Contact** – Photo and social links  

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Customize

1. **Links** – In `index.html`, replace `https://github.com` and `https://linkedin.com` with real profile URLs.  
2. **Photos** – Add your images in `assets/` (see `assets/README.md`) and point the `<img src="...">` to `assets/photo.jpg`, etc.  
3. **Certifications** – Edit the 7 `.cert-card` blocks in `index.html` (titles and descriptions).  
4. **Projects** – Edit each `.project-card`: image `src`, `alt`, `<h3>` title, and `<p>` description.  
5. **Language levels** – Adjust the `--level` value (0–1) in each `.lang-bar` and the `.lang-label` text.  
6. **Copy** – Change “AI & Web Developer”, tagline, and about paragraphs to your own text.

## Tech

- HTML, CSS, JavaScript  
- Fonts: Outfit, JetBrains Mono (Google Fonts)  
- No build step required  

Enjoy.
