# Plan for Palomipop Web Application

1.  **Set up Project Structure:**
    *   Organize the project within the existing `c:/Laravel-projects/palomipop` directory.
    *   Create a `src/components` directory for reusable components (Header, Footer, ProductCard).
    *   Create a `src/pages` directory for the main page components (Home, Nosotros, Palomitas).
    *   Create a `src/data` directory for storing the product data array.
    *   Create a `src/styles` directory or file for global styles and the color palette.

2.  **Implement Routing:**
    *   Install `react-router-dom` for navigation between pages.
    *   Configure routing in `src/App.tsx` to map paths (`/`, `/nosotros`, `/palomitas`) to the respective page components.

3.  **Create Layout Component:**
    *   Develop a `Layout.tsx` component in `src/components`.
    *   This component will include the `Header` and `Footer` components and render the current page content in between using `react-router-dom`'s outlet or similar mechanism.

4.  **Develop Header and Footer Components:**
    *   Create `Header.tsx` and `Footer.tsx` components in `src/components`.
    *   Implement basic navigation links in the Header.
    *   Include placeholder content in the Footer.
    *   Apply styling using the provided color palette.

5.  **Define Color Palette:**
    *   Create a CSS file (e.g., `src/styles/colors.css`) or use CSS-in-JS to define CSS variables or constants for the specified colors:
        *   Rosa Pop: `#FF4EB5`
        *   Amarillo Palomita: `#FFD700`
        *   Azul eléctrico (acento): `#4FD1FF`
        *   Naranja melón: `#FFB347`
        *   Negro puro: `#222222`
        *   Blanco humo: `#FDFDFD`

6.  **Create Page Components:**
    *   **Home Page (`src/pages/Home.tsx`):** Add placeholder content for the home section.
    *   **Nosotros Page (`src/pages/Nosotros.tsx`):** Add placeholder content for the about us section.
    *   **Palomitas Page (`src/pages/Palomitas.tsx`):**
        *   Define an array of product objects in `src/data/products.js` (or `.ts`). Each object will have properties like `id`, `name`, `description`, `imageUrl`, `price`.
        *   Create a `ProductCard.tsx` component in `src/components` to display individual product information.
        *   In `Palomitas.tsx`, import the product data and map over the array to render `ProductCard` components in a catalog layout (e.g., using CSS Grid or Flexbox).
        *   Apply styling using the color palette.

7.  **Integrate Components and Styles:**
    *   Import and use the `Layout` component in `src/App.tsx`.
    *   Import and use the color palette styles in relevant components.

8.  **Prepare for GitHub Deployment:**
    *   Ensure the project is a standard create-react-app or Vite setup, which is generally compatible with GitHub Pages or other static hosting.
    *   Add a `homepage` field to `package.json` if deploying to GitHub Pages under a specific repository name.

Here's a simple diagram illustrating the component structure:

```mermaid
graph TD
    A[index.tsx] --> B(App.tsx)
    B --> C(Layout.tsx)
    C --> D(Header.tsx)
    C --> E(Footer.tsx)
    C --> F{Router Outlet}
    F --> G[Home.tsx]
    F --> H[Nosotros.tsx]
    F --> I[Palomitas.tsx]
    I --> J(ProductCard.tsx)
    I --> K(products.js/ts)