 const img = document.querySelector('.photo-box img');
  img.addEventListener('mouseover', () => {
    img.src = 'assets/images/awake-pfp.png';
  });
  img.addEventListener('mouseout', () => {
    img.src = 'assets/images/sleep-pfp.png';
  });
  img.addEventListener('click', () => {
    img.src = 'assets/images/click-pfp.png';
  });