# Disnaker Kabupaten Bekasi - Frontend Redesign

This is a static site redesign for the Dinas Ketenagakerjaan Kabupaten Bekasi website.
It uses HTML5, Tailwind CSS (via CDN), and Vanilla JavaScript.

## Project Structure

- `index.html`: Homepage
- `jobs/`: Job listing and detail pages
- `profile/`: Organizational structure and functions pages
- `assets/`: CSS and JS resources
- `components/`: Reusable HTML snippets (for reference/inclusion)
- `demo/`: Component demonstration page

## How to Run

1.  Simply open `index.html` in your web browser.
2.  No build step is required (Tailwind is loaded via CDN).
3.  Ensure you have an internet connection for the CDN to load.

## Key Changes

-   **Design System**:
    -   Primary Color: Navy Deep (`#0f172a`)
    -   Accent Colors: Teal (`#06b6d4`) and Pink (`#e11d48`)
    -   Typography: Inter/System fonts
-   **Navigation**:
    -   Sticky navbar with mega-menu support.
    -   Mobile-first hamburger menu.
    -   External redirects implemented for specific services.
-   **Accessibility**:
    -   Semantic HTML5.
    -   ARIA attributes for interactive elements.
    -   Keyboard navigation support.
-   **Components**:
    -   Modular job cards with "Lamar Sekarang" CTA.
    -   Responsive hero section.
    -   Accessible modal and dropdowns.

## Customization

-   Edit `assets/css/tailwind-base.html` to change Tailwind config (colors, fonts).
-   Edit `assets/js/main.js` for interaction logic.
