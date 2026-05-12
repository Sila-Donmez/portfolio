const cards = document.querySelectorAll(".card");

function reveal(){
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
/* ===== DYNAMIC GREETING TEXT ===== */
const greetings = ["Hello", "Merhaba", "Hallo", "Hola", "Ciao", "Bonjour"];
const greetingElement = document.querySelector(".dynamic-hello");
let currentIndex = 0;

if (greetingElement) {
  setInterval(() => {
    // Yazıyı yavaşça görünmez yap
    greetingElement.style.opacity = 0; 
    
    setTimeout(() => {
      // Kelimeyi değiştir
      currentIndex = (currentIndex + 1) % greetings.length;
      greetingElement.textContent = greetings[currentIndex];
      
      // Yazıyı tekrar görünür yap
      greetingElement.style.opacity = 1; 
    }, 400); // Bu süre CSS'teki transition süresiyle eşleşir
  }, 2500); // Her 2.5 saniyede bir değişir
}