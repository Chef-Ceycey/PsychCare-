function startChat() {
    let message = prompt("Enter your message:");
    messagesRef.push({
        message:message,
        timestamp: Date.now()
    });    
}

messagesRef.on('value', function(snapshot) {
    let messages = snapshot.val();
    displayMessages(messages);
});

function displayMessages(messages) {

}

function viewResources() {
    window.location.href = "resources/index.html";
}

function startAssessment() {
    document.getElementById("quizForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let responses = {
            anxiety:document.querySelector('input[name="anxiety"]:checked').ariaValueMax
        };

        console.log(responses);
        alert("Thank you for completing the assessment!");
    });
}
