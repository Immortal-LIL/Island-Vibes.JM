document.addEventListener("DOMContentLoaded", () => {

    // --- 1. GLOBAL: CHECK LOGIN SESSION ON LOAD ---
    const authNavItem = document.getElementById("auth-nav-item");
    const loggedInUser = localStorage.getItem("islandVibesUser");

    if (authNavItem && loggedInUser) {
        authNavItem.innerHTML = `
            <span class="nav-link text-warning fw-semibold">Welcome, ${loggedInUser}</span>
        `;

        const logoutLi = document.createElement("li");
        logoutLi.className = "nav-item";
        logoutLi.innerHTML = `<a class="nav-link text-danger fw-semibold" href="#" id="logout-btn">Log Out</a>`;
        authNavItem.parentNode.appendChild(logoutLi);

        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("islandVibesUser");
                window.location.href = "index.html";
            });
        }
    }

    // --- 2. TOGGLE SIGN UP / LOG IN ---
    const showSignupBtn = document.getElementById("show-signup");
    const showLoginBtn = document.getElementById("show-login");
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const nameFieldGroup = document.getElementById("name-field-group");
    const eventFieldGroup = document.getElementById("event-field-group");
    const feedbackDiv = document.getElementById("form-feedback");

    let isLoginMode = false;

    if (showSignupBtn && showLoginBtn) {
        showSignupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            isLoginMode = false;
            showSignupBtn.className = "btn btn-dark py-2 active";
            showLoginBtn.className = "btn btn-outline-dark py-2";

            if (formTitle) formTitle.innerText = "Create an Account";
            if (submitBtn) submitBtn.innerText = "Complete Registration";
            if (nameFieldGroup) nameFieldGroup.style.display = "block";
            if (eventFieldGroup) eventFieldGroup.style.display = "block";
            if (feedbackDiv) feedbackDiv.innerHTML = "";
        });

        showLoginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            isLoginMode = true;
            showLoginBtn.className = "btn btn-dark py-2 active";
            showSignupBtn.className = "btn btn-outline-dark py-2";

            if (formTitle) formTitle.innerText = "Welcome Back - Log In";
            if (submitBtn) submitBtn.innerText = "Log In to Account";
            if (nameFieldGroup) nameFieldGroup.style.display = "none";
            if (eventFieldGroup) eventFieldGroup.style.display = "none";
            if (feedbackDiv) feedbackDiv.innerHTML = "";
        });
    }

    // --- 3. FORM SUBMISSION & REDIRECT ---
    const authForm = document.getElementById("auth-form");
    if (authForm) {
        authForm.addEventListener("submit", (e) => {
            e.preventDefault(); // HARD STOP ON PAGE REFRESH

            const emailElem = document.getElementById("email");
            const passElem = document.getElementById("password");
            const nameElem = document.getElementById("fullName");
            const eventElem = document.getElementById("selectedEvent");

            const email = emailElem ? emailElem.value.trim() : "";
            const password = passElem ? passElem.value.trim() : "";

            let isValid = true;

            if (email === "" || password === "") {
                isValid = false;
            }

            let userName = "";

            if (!isLoginMode) {
                userName = nameElem ? nameElem.value.trim() : "";
                const selectedEvent = eventElem ? eventElem.value : "";
                if (userName === "" || selectedEvent === "") {
                    isValid = false;
                }
            } else {
                userName = email.split("@")[0];
                if (userName) {
                    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
                } else {
                    userName = "Member";
                }
            }

            if (!isValid) {
                if (feedbackDiv) {
                    feedbackDiv.innerHTML = `<div class="alert alert-danger shadow-sm">Please fill in all required fields.</div>`;
                }
            } else {
                // Save user name in browser storage
                localStorage.setItem("islandVibesUser", userName);

                if (feedbackDiv) {
                    feedbackDiv.innerHTML = `<div class="alert alert-success shadow-sm">Success! Redirecting...</div>`;
                }

                // Redirect to index.html
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 500);
            }
        });
    }

    // --- 4. TICKET BOOKING LOGIC ---
    const bookButtons = document.querySelectorAll('.card a[href="register.html"], .btn-book-ticket');

    bookButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const currentLoggedInUser = localStorage.getItem("islandVibesUser");

            if (currentLoggedInUser) {
                e.preventDefault(); // Stop redirection to register page
                // Redirect straight to the new success page
                window.location.href = "booking-success.html";
            }
            // If not logged in, it lets the browser follow the normal link to register.html

        });
    });
});