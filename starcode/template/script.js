function addUserMsg(msg) {
        /* Erstelle ein neues HTML-Element: <p>text in msg</p> */
        const newP = document.createElement("p");
        newP.innerHTML = msg;

        /*
         * Erstelle ein neus HTML-Element:
         * <li class="msg incoming">"p"-Element von oben</li>
         */
        const newLi = document.createElement("li");
        newLi.setAttribute("class", "msg incoming");
        newLi.appendChild(newP);

        /* Füge das "li"-Element zu der box mit den Chatnachrichten hinzu */
        const msgBox = document.querySelector("#msg-box");
        msgBox.appendChild(newLi);
}

function addBotMsg(msg) {
        /*
         * Erstelle ein neues HTML-Element: <p></p>
         * Der Text wird nachfolgend festgelegt
         */
        const newP = document.createElement("p");

        /*
         * Hier können verschieden Antworten eingetragen werden. Nach dem "case"
         * einfach den erwarteten Text in KLEINBUCHSTABEN eintragen un darunter
         * dann die gewünschte Antwort einsetzten.s
         */
        switch (msg.toLowerCase()) {
                case "ERWARTETER TEXT":
                        newP.innerHTML = "GEWÜNSCHTE ANTWORT";
                        break;
                default:
                        newP.innerHTML = "Das habe ich nicht verstanden";
        }

        /*
         * Erstelle ein neus HTML-Element:
         * <li class="msg outgoing">"p"-Element von oben</li>
         */
        const newLi = document.createElement("li");
        newLi.setAttribute("class", "msg outgoing");
        newLi.appendChild(newP);

        /* Füge das "li"-Element zu der box mit den Chatnachrichten hinzu */
        const msgBox = document.querySelector("#msg-box");
        msgBox.appendChild(newLi);

        /*
         * Automatisches scrollen in der Box, damit die neusten Nachrichten
         * auch angezeigt werden
         */
        msgBox.scrollTop = msgBox.scrollHeight;
}

/* Diese Funktion wird aufgerufen, sobald die Webseite geladen ist */
function register() {
        /* Den Inputbutton finden und für das Event "click" eine Funktion registrieren */
        const button = document.querySelector("#msg-button");
        button.addEventListener("click", () => {
                /* Das Inputfeld finden und dann... */
                const input = document.querySelector("#msg-input");

                /* ...den eingegeben Text auslesen und alle " " löschen und abschließend... */
                const msg = input.value.trim();

                /* ...das Inputfeld leeren */
                input.value = "";

                /* Falls keine Nachricht im Inputfeld stand den User benachrichtigen */
                if (msg === "") {
                        alert("Keine Nachricht eingeben!");
                        return;
                }

                /* User- und Chatbotnachrichten zur Webseite hinzufügen */
                addUserMsg(msg);
                addBotMsg(msg);
        });

        /*
         * Das Inputfeld finden und für das Event "keypress" eine Funktion registrieren
         * Damit kann dann auch mit Drücken der Entertaste die Nachricht abgeschickt werden
         */
        const input = document.querySelector("#msg-input");
        input.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                        event.preventDefault();

                        /*
                         * Hier lösen wir einfach das "click"-Event des Buttons aus
                         * und führen den Code oben aus
                         */
                        button.click();
                }
        });
}
