$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE", // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
    navigation: true, //우측페이저유무
    navigationPosition: "right", // left,right(default) 페이저 위치
    autoScrolling: true,
    scrollHorizontally: true,
    slidesNavigation: true, // 슬라이드섹션 네비게이션 유무
    slidesNavPosition: "bottom", //네비게이션 위치 (top,bottom)
    // navigationTooltips: ["firstSlide", "secondSlide"], //navigation active시 타이틀 노출여부(hover포함)
    showActiveTooltip: true, //네비게이션 hover(default:false)시 툴팁 표기
    fitToSection: true,
    menu: "#menu",
    anchors: ["one", "two", "three", "four", "five"],
    fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
    keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
    animateAnchor: true,
    sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#ccddff"], // 섹션별 컬러
  });

  // let sec1 = $(".sec1");
  // let sec2 = $(".sec2");
  // let sec3 = $(".sec3");
  // let sec4 = $(".sec4");
  // let sec5 = $(".sec5");
});

// var mainText = document.querySelector(".intro_title");
var mainText = document.querySelector(".text_move");

// mainText.addEventListener("mousemove", function (e) {
//   var x = e.offsetX;
//   var y = e.offsetY;
//   // var rotateX = (4 / 30) * y - 20;
//   // var rotateY = (-1 / 5) * x + 20;
//   // console.log(x, y);

//   // mainText.style = "transform : rotateY(20deg)  ";

//   mainText.style = `transform : perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)  `;
// });

const mouseMove = e => {
  let mousePageX = e.offsetX;
  let mousePageY = e.offsetY;

  // 마우스 좌표값 기준점을 가운데로 변경
  let centerPageX = window.innerWidth / 2 - mousePageX;
  let centerPageY = window.innerHeight / 2 - mousePageY;

  // centerPage 최소값 -100 최대값 100 설정
  let maxPageX = Math.max(-200, Math.min(100, centerPageX));
  let maxPageY = Math.max(-200, Math.min(100, centerPageY));

  // 각도 줄이는 설정
  let anglePageX = maxPageX * 0.1;
  let anglePageY = maxPageY * 0.1;

  // 부드럽게 설정
  let softPageX = 0;
  let softPageY = 0;

  softPageX += (anglePageX - anglePageY) * 0.4;
  softPageY += (anglePageY - anglePageX) * 0.4;

  mainText.style.transform =
    "perspective(600px) rotateX(" +
    softPageY +
    "deg) rotateY(" +
    -softPageX +
    "deg)";

  // console.log(mousePageX, mousePageY);

  // gsap.to(".mouse_cursor", {
  //   duration: 0.3,
  //   // left: mousePageX - 50,
  //   // top: mousePageY - 50,
  //   left: mousePageX - 25,
  //   top: mousePageY - 25,
  // });
};
window.addEventListener("mousemove", mouseMove);

const $cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  $cursor.style.left = e.clientX + "px";
  $cursor.style.top = e.clientY + "px";
});
