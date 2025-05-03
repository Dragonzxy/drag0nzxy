    // Optional: Apply dynamically for smoother behavior
    window.addEventListener('load', () => {
        document.body.style.transform = 'scale(0.95)';
        document.body.style.transformOrigin = 'top center';
      });







const toggleBtn = document.getElementById('theme-toggle');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        toggleBtn.textContent = document.body.classList.contains('light-theme') 
            ? "Dark Theme" 
            : "Light Theme";
    });
} else {
    console.error("Element with id 'theme-toggle' not found.");
}









function toggleMessageBox() {
const box = document.getElementById("messageBox");
box.classList.toggle("hidden");
}

function sendMessage() {
alert("Message sent!");
document.getElementById("messageBox").classList.add("hidden");

}
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navToggle.classList.toggle('active');
});
const preloader = document.getElementById("preloader")
window.addEventListener("load", e=>{
setTimeout(e => {
    preloader.style.display ="none"
}, 1000);    
})




