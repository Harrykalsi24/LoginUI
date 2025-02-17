const formContainer = document.querySelector('.form-container');
const switchToLoginBtn = document.getElementById('switch-to-login');
const switchToSignupBtn = document.getElementById('switch-to-signup');
const switchVideoButton = document.getElementById('switch-video');
const videoElement = document.getElementById('background-video');

// Video sources array
const videoSources = [
  '/assets/windmills-battlefield-1-dawn-of-war-wallpaperwaifu-com.mp4',
  '/assets/Live Wallpaper 4K Wonderful Landscape [m4P9XkF9gsI].webm',
  '/assets/mylivewallpapers-com-Purple-Autumn-Lake-4K.mp4',
  '/assets/green-leaves-wallpaperwaifu-com.mp4',
  '/assets/snowfall-in-forest.3840x2160.mp4',
  '/assets/black-abstract-tiles.3840x2160.mp4'
];
let currentVideoIndex = 0;

// Switch to Login Form
switchToLoginBtn.addEventListener('click', () => {
  formContainer.style.transform = 'rotateY(180deg)';
});

// Switch to Signup Form
switchToSignupBtn.addEventListener('click', () => {
  formContainer.style.transform = 'rotateY(0deg)';
});

// Switch Video Background
switchVideoButton.addEventListener('click', () => {
  currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  videoElement.src = videoSources[currentVideoIndex];
  videoElement.play();
});
