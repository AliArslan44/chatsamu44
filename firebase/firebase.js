import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
const firebaseConfig = {
   
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

