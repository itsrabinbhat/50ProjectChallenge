const insert = document.getElementById('insert');

const showText = document.querySelector('.show-text');

window.addEventListener('keydown', (event) =>{

  showText.remove()

  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key}
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
})