import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyARUTQyGQXfjCXfquYeu5qCPjFnr1PJqcY",
    authDomain: "project-a93dd.firebaseapp.com",
    databaseURL: "https://project-a93dd-default-rtdb.firebaseio.com",
    projectId: "project-a93dd",
    storageBucket: "project-a93dd.firebasestorage.app",
    messagingSenderId: "992499374529",
    appId: "1:992499374529:web:4b775a220513e336427740",
    measurementId: "G-1R38YK4RRY"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
