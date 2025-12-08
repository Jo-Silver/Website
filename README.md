# Daedalus Dynamics — Demo Static Site

This is a small static demo site scaffold for a "Learning Daedalus Dynamics" with a white/blue futuristic theme. All images and copy are placeholders (lorem ipsum).

Files created:

- `index.html` — Homebase with a 3D model placeholder (Three.js).
- `instructions.html` — Assembly instructions (placeholders).
- `contacts.html` — Contact placeholders and a sample form.
- `css/styles.css` — Theme and layout styles.
- `js/main.js` — Simple Three.js scene for the rotating model.

How to run locally:

1. Open `index.html` directly in your browser (double-click) OR serve the folder with a static server.

PowerShell (serve with Python):

```powershell
cd "c:\Serious\University\Y3S1\Experts in Teams\Website"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes:
- The 3D model is a simple placeholder made from basic Three.js geometry. Replace `js/main.js` with your real model loader (GLTF/GLB) when ready.
- Replace placeholder text and images with your real content.
