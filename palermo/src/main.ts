const mainLogo = document.getElementById('logo') as HTMLImageElement | null;

const spawnLogo = (): void => {
  const logo = document.createElement('img') as HTMLImageElement;
  logo.src = "/IMG_3571.PNG";
  logo.className = 'animate-fall w-16 h-16 fixed pointer-events-none';
  logo.style.left = `${Math.random() * 100}vw`;
  const duration = Math.random() * 2 + 2;
  logo.style.animationDuration = `${duration}s`;

  document.body.appendChild(logo);

  setTimeout(() => {
    logo.remove();
  }, duration * 3000);
};

if (mainLogo) {
  mainLogo.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
      spawnLogo();
    }
  });
}
