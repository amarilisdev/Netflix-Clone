# Netflix Clone 🍿

This project is a clone of the Netflix user interface, built with modern web technologies like **React** and **Vite**. The application allows users to browse different categories of movies and TV shows, fetching real-time data from **The Movie Database (TMDb) API**.

---

## ✨ Key Features

*   **Netflix-Inspired UI:** A familiar and responsive design.
*   **Category Browsing:** Explore different sections like "Popular", "Top Rated Series", "Now Playing", and more.
*   **Dynamic Data:** All movie and series information is consumed from the TMDb API.
*   **Client-Side Routing:** Smooth navigation between pages without full reloads, handled by `react-router-dom`.
*   **Secure Environment Variables:** The API key is managed securely using environment variables with Vite.
*   **Horizontal Scrolling Rows:** Movie rows feature horizontal scrolling for an intuitive user experience.

---

## 🛠️ Technologies Used

*   **[Vite](https://vitejs.dev/):** A blazing-fast frontend development environment.
*   **[React](https://react.dev/):** A library for building user interfaces.
*   **[React Router](https://reactrouter.com/):** For routing and navigation between pages.
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid and custom design. 
*   **[TMDb API](https://www.themoviedb.org/documentation/api):** The data source for all movie and series content.

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Node.js (version 16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amarilisdev/Netflix-Clone.git
    cd Netflix-Clone
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Set up your environment variables:**
    This project requires an API key from The Movie Database to function.

    *   Create a `.env` file in the root of the project.
    *   Add your TMDb API key as follows:

        ```
        VITE_TMDB_API_KEY=your_api_key_here
        ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or the port indicated by Vite in your terminal).

---

## 📖 Deployment

This project is configured for easy deployment on platforms like Vercel, Netlify, or GitHub Pages.


## ✍️ Author

*   **Amarilis** - [amarilisdev](https://github.com/amarilisdev)

A big thank you to The Movie Database for providing such a fantastic API!
