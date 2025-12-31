document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById('photo-gallery');
    
    // Photo Logic: yahan tere filenames (img1.jpg) set hain
    for (let i = 1; i <= 50; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const x = Math.random() * (window.innerWidth - 160);
        const y = Math.random() * (window.innerHeight - 250);
        const rotate = Math.random() * 60 - 30;

        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.transform = `rotate(${rotate}deg)`;
        item.style.zIndex = i;

        item.innerHTML = `<img src="images/img${i}.jpg" alt="Memory">`;
        gallery.appendChild(item);

        makeDraggable(item);
    }
});

function startExperience() {
    document.getElementById('reel-section').scrollIntoView({ behavior: 'smooth' });
    
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play blocked by browser, needs interaction first."));

    typeNote();
    initFireworks();
}

function typeNote() {
    const noteText = `Emotional baatein mujhse hoti nahi, par 2025 mein tum meri dost bani, ye thoda "expensive" par bahut zyada "amazing" raha! 😂 \n\nAb 2026 aa gaya hai, toh tumhe abhi ek aur saal jhelna padega mujhe. Agle saal bhi saath mein mil kar kaand karenge! 🚀 \n\nHappy New Year Radha!`;
    let charIndex = 0;
    const target = document.getElementById('typewriter');
    target.innerHTML = "";
    function type() {
        if (charIndex < noteText.length) {
            target.innerHTML += noteText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 45);
        }
    }
    type();
}

function makeDraggable(element) {
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    element.onmousedown = dragStart;
    element.ontouchstart = dragStart;

    function dragStart(e) {
        p3 = e.clientX || e.touches[0].clientX;
        p4 = e.clientY || e.touches[0].clientY;
        document.onmouseup = dragEnd;
        document.ontouchend = dragEnd;
        document.onmousemove = dragMove;
        document.ontouchmove = dragMove;
    }

    function dragMove(e) {
        let cx = e.clientX || e.touches[0].clientX;
        let cy = e.clientY || e.touches[0].clientY;
        p1 = p3 - cx;
        p2 = p4 - cy;
        p3 = cx;
        p4 = cy;
        element.style.top = (element.offsetTop - p2) + "px";
        element.style.left = (element.offsetLeft - p1) + "px";
        element.style.zIndex = 1000 + parseInt(element.style.zIndex);
    }

    function dragEnd() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

function initFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i=0; i<35; i++) {
            ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
            ctx.beginPath();
            ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*3, 0, Math.PI*2);
            ctx.fill();
        }
    }, 100);
}
