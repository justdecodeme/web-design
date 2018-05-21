var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var banner = document.getElementById('banner');

menuBtn.addEventListener('click', function() {
  console.log('open');
  banner.classList.add('mobile');
})
closeBtn.addEventListener('click', function() {
  console.log('close');
  banner.classList.remove('mobile');
})
