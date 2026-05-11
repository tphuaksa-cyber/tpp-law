import { ref, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { db } from "./firebase-init.js";

async function logVisitor() {
    if (sessionStorage.getItem('vlogged')) return;

    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        const userAgent = navigator.userAgent;
        const path = window.location.pathname;

        await push(ref(db, 'visitor_logs'), {
            ip: ip,
            userAgent: userAgent,
            path: path,
            timestamp: serverTimestamp(),
            date: new Date().toLocaleString('th-TH')
        });

        sessionStorage.setItem('vlogged', 'true');
    } catch (error) {
        console.warn('Visitor logging skipped');
    }
}

if (document.readyState === 'complete') {
    logVisitor();
} else {
    window.addEventListener('load', logVisitor);
}
