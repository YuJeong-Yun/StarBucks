// 2. 외부 js 불러오기
var tag = document.createElement('script');

// script 태그들의 제일 윗 부분에 'tag' 추가
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 연결한 외부 js에서 이 함수 찾음. 즉 함수 이름 변경하면 안 됨!
  new YT.Player('player', { // html에서 id가 player인 요소 찾음
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      // 영상을 재생하기 위한 변수들
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무. true로 값 주면 playlist 값도 줘야함!
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: onPlayerReady // 재생이 준비되면 onPlyaerReady 함수 실행
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); // 비디오 플레이
  event.target.mute(); // 음소거
}