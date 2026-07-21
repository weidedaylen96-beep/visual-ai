function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const text = input.value.trim();

    if (text === "") return;

    // Bericht van gebruiker
    const user = document.createElement("div");
    user.className = "user";
    user.textContent = text;
    chat.appendChild(user);

    // Simpele reactie van de AI
    const bot = document.createElement("div");
    bot.className = "bot";
    bot.innerHTML = `
        Ik heb ontvangen: <b>${text}</b><br><br>
        🤖 Later komt hier een echt AI-antwoord.
    `;
    chat.appendChild(bot);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

// Versturen met Enter
document.getElementById("message").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
