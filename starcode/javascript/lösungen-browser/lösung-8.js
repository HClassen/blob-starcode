/* im HTML-Dokument <body onload="register()"> und dem Button die id "my-button" zuweisen */
function register() {
        const button = document.querySelector("#my-button");
        button.addEventListener("click", () => {
                const newP = document.createElement("p");
                newP.innerHTML = "Das ist ein neuer Text!";

                const div = document.querySelector("div");
                div.appendChild(newP);
        });
}
