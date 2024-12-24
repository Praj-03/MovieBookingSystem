

const sendButton = document.getElementById('sendbutton');
const form = document.querySelector('.contact-form');

if (sendButton && form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message Send Successfully");
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 100);
  });
}