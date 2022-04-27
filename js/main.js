const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기 아이콘 클릭해도 input 태그 클릭한 것과 같은 효과
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});