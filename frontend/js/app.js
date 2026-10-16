// 1. Find the current script
const appScript = document.currentScript;

// 2. Find the frontend root
const frontend_path = new URL("../", appScript.src);

// 3. Define folder paths
const pages_path = new URL("pages/", frontend_path);
const component_path= new URL("component/", frontend_path);


// 4. Load HTML components
async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(
            new URL(file, component_path)
        );

        if (!response.ok) {
            throw new Error(`Failed to load: ${file}`);
        }

        const html = await response.text();
        element.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


// 5. Load navbar and footer
loadComponent("navbar", "navbar.html");
loadComponent("footer", "footer.html");


// 6. Handle page navigation
document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-page]");

    if (!link) return;

    const page = link.getAttribute("data-page");

    if (!page) return;

    const pageURL = new URL(page, frontend_path);

    if (
        pageURL.origin !== frontend_path.origin ||
        !pageURL.pathname.startsWith(frontend_path.pathname)
    ) {
        return;
    }

    event.preventDefault();
      window.location.href = pageURL.href;
 });
