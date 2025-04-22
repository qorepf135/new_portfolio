console.log("main.js 연결됨!");

// 맨 처음에 사이트열때 생기는 로딩창
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // 💡 0.5~1초 정도 보여주고 천천히 사라지게!
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";
      // opacity 0 이후 약간 기다렸다가 아예 제거
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800); // 이건 transition과 딱 맞춰야 자연스러움!
    }, 500); // 페이지 열리고 3초는 보여주자~ (선택)
  }
});


// 메인페이지에서 돋보기효과 주는 js
window.addEventListener("DOMContentLoaded", () => {
  const zoomBg = document.getElementById('zoom-bg');

  if (!zoomBg) return;

  zoomBg.addEventListener('mousemove', (e) => {
    const rect = zoomBg.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    zoomBg.style.setProperty('--x', `${xPercent}%`);
    zoomBg.style.setProperty('--y', `${yPercent}%`);
  });
});

// 메인페이지 돋보기 효과에서 텍스트 확대되게 하는거
window.addEventListener("DOMContentLoaded", () => {
  const zoomBg = document.getElementById('zoom-bg');
  const zoomText = document.querySelector('.zoom-text');

  if (!zoomBg || !zoomText) return;

  zoomBg.addEventListener('mousemove', (e) => {
    const rect = zoomBg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 ~ 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // 배경 위치 조절 (이미 있던 거)
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    zoomBg.style.setProperty('--x', `${xPercent}%`);
    zoomBg.style.setProperty('--y', `${yPercent}%`);

    // 텍스트 반응 효과 ✨
    const moveX = x * 10; // 숫자 클수록 크게 흔들림
    const moveY = y * 10;
    const scale = 1 + (Math.abs(x) + Math.abs(y)) * 0.03; // 살짝 확대

    zoomText.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
  });

  zoomBg.addEventListener('mouseleave', () => {
    zoomText.style.transform = 'translate(0, 0) scale(1)';
  });
});
