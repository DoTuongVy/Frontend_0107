function changeBg() {
  const colors = ['#f0f8ff', '#ffe4e1', '#e6f9ff', '#fff5e1'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
