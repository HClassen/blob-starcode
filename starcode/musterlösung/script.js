function addUserMsg(msg) {
        const newP = document.createElement("p");
        newP.innerHTML = msg;

        const newLi = document.createElement("li");
        newLi.setAttribute("class", "msg incoming");
        newLi.appendChild(newP);

        const msgBox = document.querySelector("#msg-box");
        msgBox.appendChild(newLi);
}

function addBotMsg(msg) {
        const newP = document.createElement("p");

        switch (msg.toLowerCase()) {
                case "hallo":
                        newP.innerHTML = "Hallo, wie geht es dir?";
                        break;
                case "mir geht es gut":
                        newP.innerHTML = "Das ist schön zu hören. Mir geht es auch gut!";
                        break;
                case "was sind deine hobbies?":
                        newP.innerHTML = "Ich surfe gerne im Internet, lese viel und spiele Badminton.";
                        break;
                default:
                        newP.innerHTML = "Das habe ich nicht verstanden";
        }

        const newLi = document.createElement("li");
        newLi.setAttribute("class", "msg outgoing");
        newLi.appendChild(newP);

        const msgBox = document.querySelector("#msg-box");
        msgBox.appendChild(newLi);

        msgBox.scrollTop = msgBox.scrollHeight;
}

function register() {
        const button = document.querySelector("#msg-button");
        button.addEventListener("click", () => {
                const input = document.querySelector("#msg-input");
                const msg = input.value.trim();
                input.value = "";

                if (msg === "") {
                        alert("Keine Nachricht eingeben!");
                        return;
                }

                addUserMsg(msg);
                addBotMsg(msg);
        });

        const input = document.querySelector("#msg-input");
        input.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                        event.preventDefault();
                        button.click();
                }
        });
}
