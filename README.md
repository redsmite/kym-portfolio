# Kym Carabeo — Portfolio

React + Vite + Tailwind CSS personal portfolio.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Adding Your Photos

Replace the placeholder avatar in `src/components/About.jsx`:

1. Copy your photo to `src/assets/photo.jpg`
2. In `About.jsx`, replace the placeholder div with:

```jsx
import photo from '../assets/photo.jpg'

// Replace the placeholder div inside the w-52 h-52 div with:
<img src={photo} alt="Kym Carabeo" className="w-full h-full object-cover" />
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx     # Fixed navigation bar
│   ├── Hero.jsx       # Typewriter hero section
│   ├── About.jsx      # About + photo section
│   ├── Skills.jsx     # Skills grouped by category
│   ├── Projects.jsx   # Deployed project cards
│   └── Contact.jsx    # Contact links + terminal card + footer
├── App.jsx
├── main.jsx
└── index.css          # Tailwind + custom utilities
```

## Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit the `skillGroups` array in `src/components/Skills.jsx`
- **Typewriter roles**: Edit the `roles` array in `src/components/Hero.jsx`

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)
- [Inter + JetBrains Mono](https://fonts.google.com/) (Google Fonts)
