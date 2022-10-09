const form = document.querySelector('form');
const input = document.querySelector('input');

const rfc5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!input.value || !rfc5322.test(input.value)) {
    input.style.borderColor = 'hsl(353.7, 100%, 66.5%)';
    input.nextElementSibling.style.color = '';
    input.nextElementSibling.textContent = 'Please provide valid email address';
  } else {
    input.style.borderColor = 'hsl(143.9, 100%, 66.5%)';
    input.nextElementSibling.style.color = 'hsl(143.9, 100%, 66.5%)';
    input.nextElementSibling.textContent = 'Subscription request sent!';
    input.value = '';
    input.blur();
  }
});