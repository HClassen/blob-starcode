/* im HTML-Dokument <body onload="register()"> und dem Button die id "my-button" zuweisen */
function register() {
        const button = document.querySelector("#my-button");
        button.addEventListener("click", () => {
                const input = document.querySelector("input");
                alert(input.value);
        });
}
