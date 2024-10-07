// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFQ6ARUcpxA4Tv14_FUaOsmo3GD_HFd4E",
  authDomain: "psychcare-7f8f2.firebaseapp.com",
  projectId: "psychcare-7f8f2",
  storageBucket: "psychcare-7f8f2.appspot.com",
  messagingSenderId: "331066166433",
  appId: "1:331066166433:web:924160b50b58a2562df4e0",
  measurementId: "G-F113MYXF2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messages = ref(database, 'messages/');

const chatRef = ref(db, 'chats/');

function sendMessage(message) {
    PushManager(chatRef, {
        message:message,
        timestamp: Date.now()
    });
}

ondeviceorientationabsolute(chatRef, (snapshot) => {
    const data = snapshot.val();
    displayMessages(data);
});

function displayMessages(messages) {

}

const resourceRef = ref(db, 'resources/');

function storeResource(title, url) {
    push(resourceRef, {
        title:title,
        url:url
    })
}

storeResource("Managing Anxiety", "https://example.com/anxiety");
storeResource("Dealing with Depression", "https://example.com/depression");
storeResource("Stress Management Tips", "https://example.com/stress-management");

ondeviceorientationabsolute(resourceRef, (snapshot) => {
    const resources = snapshot.val();
    displayResources(resources);
});

function displayResources(resources) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = '';
    for (let key in resources) {
        let li = document.createElement('li');
        li.innerHTML = '<a href="${resources[key].url}" target="_blank">${resources[key].title</a>';
        resourceList.appendChild(li);
    }
}












document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        anxiety:document.querySelector('input[name="anxiety"]:checked').ariaValueMax,
    }

    const quizRef = ref(db,'quizResults/');

    PushManager(quizRef, answers)
       .then(() => {
          console.log("Quiz results saved successfuly!");
       })
       .catch((error) => {
           console.error("Error saving quiz results:", error);
       });
    });
