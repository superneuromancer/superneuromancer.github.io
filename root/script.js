// Tiny sprinkle of interactivity
const btn = document.getElementById('greet-btn');
const msg = document.getElementById('greet-msg');

if (btn && msg) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    msg.textContent = 'Hello from your repo — deployed and alive! 🎉';
  });
}
