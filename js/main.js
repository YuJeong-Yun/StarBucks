/////////////////////돋보기 아이콘//////////////////////
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


//////////////////////배지 효과///////////////////////////
const badgeEl = document.querySelector('header .badges');

// 스크롤 할 때마다 함수가 실행되므로, 함수가 한번에 수십번 실행되어 프로그램에 부하가 걸릴 수 있음
// throttle을 이용해 0.3초 단위로 부하를 줘서 함수가 한번에 많이 실행되는 걸 방지함
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      // display 속성은 전/후 상태의 중간값이 존재하지 않으므로 자연스러운 전환효과 적용 불가능
      // 따라서 opacity 속성을 같이 줌
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)


///////////////////////비주얼 페이드인 효과////////////////////
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)* .7,  // 첫번째 요소는 0.7, 두번째 요소는 1.4 .. 뒤에 동작
    opacity: 1
  });
});