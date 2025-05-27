# Plan: Replace Footer Component with Modern Design

## Objective
Replace the existing footer component (`src/components/Footer.tsx` and `src/components/Footer.css`) with a new, modern design that includes social media icons, contact information, and copyright information, with a pink base color and a two-column layout.

## Requirements for New Footer
*   **Base Color:** Pink.
*   **Layout:** Two-column layout for social media and contact information sections.
*   **Content:**
    *   Social Media Icons: Include icons and placeholder links for Facebook, Twitter, Instagram, and TikTok.
    *   Contact Information: Include placeholder email and phone number.
    *   Copyright Information: Display dynamic copyright information with the current year.

## Plan Steps

1.  **Define New Footer Structure (`src/components/Footer.tsx`):**
    *   Create a new React functional component.
    *   Include a main container for the footer.
    *   Add a two-column layout structure within the container.
    *   In one column, include a section for social media icons with placeholder links.
    *   In the other column, include a section for contact information with placeholder email and phone number.
    *   Include a separate section below the two columns for dynamic copyright information.
    *   Export the component.

2.  **Define New Footer Styling (`src/components/Footer.css`):**
    *   Write CSS rules to style the new footer component.
    *   Set the base background color to pink.
    *   Implement the two-column layout using CSS (e.g., Flexbox or Grid).
    *   Style for the social media icons, contact information, and copyright text.
    *   Ensure responsiveness, especially for the two-column layout on smaller screens.

3.  **Replace Existing Files:**
    *   Replace the entire content of `src/components/Footer.tsx` with the new component code.
    *   Replace the entire content of `src/components/Footer.css` with the new styling.

4.  **Confirm Integration:**
    *   Verify that `src/components/Layout.tsx` correctly imports and uses the new `Footer` component (no changes expected here as the component name remains the same).

## Component Structure

```mermaid
graph TD
    A[App.tsx] --> B[Layout.tsx]
    B --> C[Header.tsx]
    B --> D[Main Content (Outlet)]
    B --> E[New Modern Footer.tsx]
    E --> F[Footer.css]
    E --> G[Two-Column Container]
    G --> H[Social Media Section]
    G --> I[Contact Info Section]
    E --> J[Copyright Section]
    H --> SocialIcons[Social Icons]
    I --> ContactDetails[Email, Phone]
    J --> CopyrightText[Copyright Year]
```

## Implementation

Once this plan is approved and written to the markdown file, I will request to switch to Code mode to implement the changes by writing the new content to the specified files.