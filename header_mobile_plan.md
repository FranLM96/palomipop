# Plan para Reparar el Encabezado y Agregar Toggle Móvil

Este plan detalla los pasos para reparar el encabezado existente, asegurar la visibilidad del botón de alternancia móvil e implementar una animación de deslizamiento desde la izquierda para el menú móvil.

**Problema Identificado:**

El botón de alternancia del menú móvil no aparece en dispositivos móviles.

**Causa Raíz Probable:**

Falta de estilos CSS para el icono de hamburguesa (`.hamburger-icon`) dentro del botón de alternancia, lo que lo hace invisible a pesar de estar presente en el DOM.

**Plan Detallado (Revisado):**

1.  **Identificar la causa raíz:** Confirmar que la falta de visibilidad del toggle button es debido a missing styles for the `.hamburger-icon`. (Already confirmed).
2.  **Modify `src/components/Header.css`:**
    *   Inside the `@media (max-width: 768px)` media query, add styles for the `.hamburger-icon` class to make it visible (define size, shape, and color).
    *   Adjust styles for the `.mobile-menu-toggle` button if needed for proper alignment and click area.
    *   (Optional) Add styles to transform the hamburger icon into a close icon (like an "X") when the menu is open (when the button has the `.active` class).
    *   **Implement Slide-in from Left Animation:**
        *   Modify the styles for `.app-nav ul` within the `@media (max-width: 768px)` media query.
        *   Initially position the mobile menu off-screen to the left (e.g., using `transform: translateX(-100%);` or `left: -100%;`).
        *   Add a `transition` property to `.app-nav ul` to animate the `transform` or `left` property.
        *   When the `.app-nav` element has the `.open` class, set the `transform` or `left` property to bring the menu into view (e.g., `transform: translateX(0);` or `left: 0;`).
        *   Ensure the menu has a fixed position and a high `z-index` to overlay content.
        *   Add an overlay behind the menu to dim the rest of the page and potentially close the menu when clicked. (This might require adding a new element in `src/components/Header.tsx` and styling it in `src/components/Header.css`).
3.  **Verify the functionality of the Toggle and Animation:** Test on a mobile device or using browser developer tools to ensure:
    *   The mobile toggle button is visible.
    *   Clicking the button toggles the `isMobileMenuOpen` state and the `.open` class on the `<nav>`.
    *   The mobile menu slides in from the left with the desired animation when opened and slides out when closed.
    *   The optional overlay appears and functions correctly.
4.  **Refine styles of the mobile menu:** Review and adjust padding, margins, text colors, etc., for the menu items within the mobile menu to ensure the desired appearance.

**Representación Visual del Plan:**

```mermaid
graph TD
    A[Componente Header] --> B[Botón Toggle]
    A --> C[Menú de Navegación]
    B -- Estilos CSS --> D{Visible en Móvil?}
    D -- No (Problema Actual) --> E[Agregar Estilos .hamburger-icon]
    D -- Sí (After Fix) --> F[Clic en Botón]
    F --> G{Alternar Estado isMobileMenuOpen}
    G --> C{Aplicar/Remover Clase 'open'}
    C -- Clase 'open' --> H[Aplicar Estilos Menú Móvil + Slide-in Animation]
    H --> I[Menú Visible con Animación]