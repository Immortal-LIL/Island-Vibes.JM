🌴 Island Vibes - Festival & Event Ticketing Platform

An interactive, multi-page web application celebrating authentic Caribbean music, live concerts, and cultural festival experiences (Reggae, Dancehall, and Soca). Built with responsive Bootstrap 5, custom typography, and dynamic JavaScript session handling.

---

✨ Features

- Global Navigation & Brand Theme**: Custom global styling (`styles.css`) using `@font-face` custom typography and responsive Bootstrap navigation across all pages.
- Dynamic Session Authentication**: Simulates user registration and login sessions using browser `localStorage`.
- Automatically updates the navbar globally to display `Welcome, [User]` and a `Log Out` button upon signing in.
- Clears session data upon clicking **Log Out** and restores normal registration options.
- Single-Page Form Toggle & Validation**: Seamless switching between Sign Up and **Log In** modes on `register.html` with real-time field validation.
- Interactive Event Catalog & Ticket Booking**: 
- Dedicated music category showcases (`reggae.html`, `dancehall.html`, `soca.html`, `explore.html`).
- Context-aware booking flow: Redirects unauthenticated guests to `register.html`, while logged-in members are routed directly to a customized confirmation experience (`booking-success.html`).

---

🛠️ Built With

- HTML5: Semantic document structure across all sub-pages.
- CSS3 / Bootstrap 5: Custom styling, grid system, responsive layout, and UI components.
- JavaScript (ES6): DOM manipulation, event handling, and client-side session management (`app.js`).

---

📁 File Structure

```text
├── index.html            # Main landing page featuring carousel highlights
├── explore.html          # All-event catalog and category filters
├── reggae.html           # Reggae Showcase page
├── dancehall.html        # Dancehall Night page
├── soca.html             # Soca Fusion Fest page
├── register.html         # User Sign Up & Log In page
├── booking-success.html  # Ticket confirmation page
├── styles.css            # Custom CSS styling and typography overrides
├── app.js                # Core JavaScript logic (Auth, Navbar, Booking)
└── README.md             # Project documentation
