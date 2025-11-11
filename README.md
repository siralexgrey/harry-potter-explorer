# 🪄 Harry Potter Explorer

A modern, interactive web application for exploring the magical world of Harry Potter. Browse characters, discover spells, and immerse yourself in the wizarding world with a beautiful, responsive interface.

![Harry Potter Explorer](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff?logo=vite)

## ✨ Features

- **🧍‍♂️ Character Explorer**: Browse all Harry Potter characters with detailed information
  - Filter by Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
  - Search by name or house
  - View detailed character profiles with images, house, birth date, and actor information

- **🪄 Spell Database**: Comprehensive list of magical spells
  - Search by spell name or description
  - Clean, organized spell cards with descriptions

- **🎨 Beautiful UI**:
  - Magical themed design with Hogwarts aesthetics
  - Responsive layout for all devices
  - Smooth animations and transitions
  - House-themed color schemes
  - Glassmorphism effects with backdrop blur

- **⚡ Performance Optimized**:
  - API response caching (5-minute cache duration)
  - Memoized filtering and search
  - Lazy loading for images
  - Optimized re-renders with React hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/harry-potter-explorer.git
cd harry-potter-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
harry-potter-explorer/
├── src/
│   ├── api/              # API integration layer
│   │   └── hpApi.ts     # Harry Potter API client with caching
│   ├── components/       # Reusable React components
│   │   ├── CharacterCard.tsx
│   │   ├── Layout.tsx
│   │   ├── Loader.tsx
│   │   ├── PageTitle.tsx
│   │   ├── Sidebar.tsx
│   │   └── SpellListItem.tsx
│   ├── contexts/        # React Context providers
│   │   └── SidebarContext.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useFetchData.ts
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Characters.tsx
│   │   ├── CharacterDetail.tsx
│   │   └── Spells.tsx
│   ├── types/           # TypeScript type definitions
│   │   ├── character.ts
│   │   └── spell.ts
│   ├── utils/           # Utility functions
│   │   └── houseColors.ts
│   ├── assets/          # Static assets
│   │   └── images/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static files
│   └── favicon/         # Favicon files
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🛠️ Tech Stack

### Core

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.2** - Build tool (using Rolldown)
- **React Router 7.9.5** - Client-side routing

### Styling

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library

### Development

- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📡 API

This project uses the [Harry Potter API](https://hp-api.onrender.com/) to fetch character and spell data.

### Endpoints Used

- `GET /api/characters` - Fetch all characters
- `GET /api/character/:id` - Fetch character by ID
- `GET /api/spells` - Fetch all spells

### Caching Strategy

The application implements client-side caching with a 5-minute expiration time to minimize API calls and improve performance.

## 🎨 Design Highlights

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Dark Theme**: Magical dark theme with Hogwarts-inspired aesthetics
- **House Colors**: Dynamic color schemes based on Hogwarts houses
- **Glassmorphism**: Modern glass-effect UI with backdrop blur
- **Smooth Animations**: Hover effects, transitions, and loading states

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration with:

- Strict type checking
- No unused locals/parameters
- ES2022 target

### Tailwind CSS

Custom Tailwind configuration includes:

- Custom house color schemes
- Extended theme properties
- Backdrop blur utilities

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Character and spell data provided by [HP API](https://hp-api.onrender.com/)
- Harry Potter universe created by J.K. Rowling
- Hogwarts logo and images from the Harry Potter franchise

## 📞 Contact

Project Link: [https://github.com/yourusername/harry-potter-explorer](https://github.com/yourusername/harry-potter-explorer)

---

Made with ⚡ and 🪄 by Andrii Tymchenko
