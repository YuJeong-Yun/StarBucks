/////////////////////돋보기 아이콘//////////////////////
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기 아이콘 클릭해도 input 태그 클릭한 것과 같은 효과
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



//////////////////////배지 효과///////////////////////////
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 스크롤 할 때마다 함수가 실행되므로, 함수가 한번에 수십번 실행되어 프로그램에 부하가 걸릴 수 있음
// throttle을 이용해 0.3초 단위로 부하를 줘서 함수가 한번에 많이 실행되는 걸 방지함
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      // display 속성은 전/후 상태의 중간값이 존재하지 않으므로 자연스러운 전환효과 적용 불가능
      // 따라서 opacity 속성을 같이 줌
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl,.2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl,.2, {
      x: 100
    });
  } 
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0 // ScrollPlugin 라이브러리 연결해야 사용가능 - 화면의 위치를 0으로 옮김
  })
});



///////////////////////비주얼 페이드인 효과////////////////////
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 첫번째 요소는 0.7, 두번째 요소는 1.4 .. 뒤에 동작
    opacity: 1
  });
});



/////////////////////////슬라이드 효과-swiper 라이브러리///////////////////
// 공지사항
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true, // 자동재생 여부
  loop: true // 반복재생 여부(마지막 슬라이드 후 기능 멈춤 여부)
});
// 슬라이드 배너
new Swiper('.promotion .swiper', {
  // direction: 'horizontal';  기본값이므로 생략 가능
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-button-disabled.prev',
    nextEl: '.promotion .swiper-button-disabled.next'
  }
});
// 푸터 로고 슬라이드
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



//////////////////////////프로모션 토글/////////////////////////////////
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  promotionEl.classList.toggle('hide');
  // isHidePromotion = !isHidePromotion;
  // if(isHidePromotion) {
  //   // 숨김 처리
  //   promotionEl.classList.add('hide');
  // } else {
  //   // 보임 처리
  //   promotionEl.classList.remove('hide');
  // }
});




// 랜덤한 수 생성
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 영상 위에 떠다니는 이미지
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    { // 옵션
      y: size, // 움직이는 크기
      repeat: -1, // 무한반복으로 설정
      yoyo: true, // 재생된 애니메이션을 뒤로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay) // 몇 초 뒤에 애니메이션을 재생하겠다는 지연 효과
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);




//////////////////////////Scroll Magic 라이브러리/////////////////////
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트의 10분의 8 지점에 요소가 걸리면 실행됨
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});




////////////////////////////Footer에 년도 계산//////////////////////////
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();