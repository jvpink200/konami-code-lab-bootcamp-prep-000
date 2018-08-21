const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const main = document.querySelector('body');
  main.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 10){
    alert("Key Pressed");
  }
  })
}
