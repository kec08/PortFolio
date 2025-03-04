document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll('.Design-box > div');

    posters.forEach(poster => {
        const overlay = poster.querySelector('.overlay');

        // 마우스 움직임으로 회전 효과 추가
        poster.addEventListener('mousemove', (e) => {
            const rect = poster.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 회전 효과
            const rotateY = ((x / rect.width) - 0.5) * 80;
            const rotateX = ((y / rect.height) - 0.5) * -80;
            poster.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        poster.addEventListener('mouseleave', () => {
            // 마우스가 떠나면 초기 상태로 복구
            poster.style.transition = "transform 0.5s ease";
            poster.style.transform = 'perspective(1000px) rotate(17deg)';
        });

        // 클릭 시 필름 효과 활성화/비활성화
        poster.addEventListener('click', () => {
            if (overlay.style.opacity === "1") {
                overlay.style.opacity = "0";
                overlay.style.transition = "opacity 0.3s ease-in-out";
            } else {
                overlay.style.transition = "opacity 0.3s ease-in-out";
                overlay.style.opacity = "1"; 
            }
        });

        // 부드러운 애니메이션을 위해 overlay 초기화 시 transition 설정
        overlay.addEventListener('transitionend', () => {
            poster.style.transition = "transform 0.5s ease";
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // .scroll-link 클래스가 적용된 모든 h2 태그를 찾아 클릭 이벤트를 처리합니다.
    document.querySelectorAll('.scroll-link').forEach(item => {
      item.addEventListener('click', function () {
        // data-target 속성에서 이동할 대상 요소의 ID를 가져옵니다.
        const targetSelector = item.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);
  
        if (targetElement) {
          // 해당 요소로 부드럽게 스크롤합니다.
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
// 스크롤 시 효과를 적용할 요소
const scrollElement = document.querySelectorAll('.scroll-element');

function handleScroll() {
  scrollElement.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top; // 요소의 화면 상단에서의 거리

    // 화면에 보일 때 애니메이션 적용
    if (elementTop < window.innerHeight - 100) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)'; // 원래 위치로 내려옴
    }
  });
}

// 스크롤할 때마다 handleScroll 함수 호출
window.addEventListener('scroll', handleScroll);

// 페이지 로딩 시 초기 상태 적용
handleScroll();
