# Brewing BnB - React Migration

This project is a migration of the original Brewing BnB website to a modern React application using Vite and Tailwind CSS v4.

## Tech Stack

- **React**: Frontend library
- **Vite**: Build tool and development server
- **Tailwind CSS v4**: Utility-first CSS framework with CSS variables for theming
- **Remix Icon**: Icon set
- **Swiper**: Touch slider for "Quick Read" section

## Features

- **Responsive Design**: Mobile-first approach with a responsive navigation menu.
- **Dark/Light Mode**: Toggleable theme with persistence using local storage.
- **Component-Based Architecture**: Modular components for Header, Footer, Featured Content, Trending News, etc.
- **Routing**: Client-side routing with React Router for seamless navigation between Home and Post pages.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

- `src/components`: Reusable UI components (Header, Footer, Featureds, etc.)
- `src/pages`: Page components (Home, Post)
- `src/hooks`: Custom hooks (useTheme)
- `src/index.css`: Global styles and Tailwind configuration
- `public/assets`: Static assets (images) migrated from the original site

## Notes

- The design closely follows the original `BnB Website` aesthetics.
- Animations and transitions are implemented using CSS transitions and Tailwind utility classes.
