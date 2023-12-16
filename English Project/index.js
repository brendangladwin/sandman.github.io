function showSandmanImage() {
  const img = document.createElement('img');
  img.src = 'Sandman-jumpscare.jpeg';
  img.style.opacity = '1';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.zIndex = '9999';

  document.body.appendChild(img);

  setTimeout(() => {
    img.style.opacity = '0';
  }, 3000); // Adjust fade-out duration

  setTimeout(() => {
    window.location.href = "Sandman.html";
  }, 3500); // Redirect slightly after fade-out
}