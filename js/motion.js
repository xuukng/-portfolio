$(function(){

  const text = "EOM YOU KYUNG"; // 타이핑할 문구
  let index = 0;
  let speed = 100; // 글자 타이핑 속도 (밀리초 단위)
  
  function typeWriter() {
    if (index < text.length) {
      document.getElementById("text").textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();

});

$(function () {
  // 첫 번째 영역(.visual)의 높이 구하기
  const visualHeight = $('.visual').outerHeight();

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    // visual 영역을 지나면 top 버튼 보이기
    if (scrollTop > visualHeight) {
      $('.top_move').fadeIn();
    } else {
      $('.top_move').fadeOut();
    }
  });

  // top 버튼 클릭 시 부드럽게 위로 이동
  $('.top_move button').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});


// skills 별찍기
$(function () {
  $('.star-rating').each(function () {
    const $this = $(this);
    const score = parseFloat($this.data('score'));
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 >= 0.5;
    const total = 5;

    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
      $this.append('<span class="filled">★</span>');
    }

    // 반 별 (문자 기반이라 반 별 대신 꽉 찬 별 사용)
    if (hasHalf) {
      $this.append('<span class="filled">★</span>');
    }

    // 빈 별
    const emptyStars = total - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      $this.append('<span>☆</span>');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', e => {
        e.stopPropagation();
        document.querySelectorAll('.card').forEach(c => {
          if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle('active');
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
    });
  }
});




// =======================
// Print Design (리플렛)
// =======================
$(function () {
  const imageTrack = $('.image-track');
  const btns = $('.text-btn');
  const texts = $('.text-content');
  const portfolioBox = $('.portfolio_box5');

  let currentIndex = 0;
  let targetTranslateX = 0;

  // 버튼 클릭
  btns.click(function () {
    currentIndex = $(this).data('index');
    moveTo(currentIndex, true);
  });

  function moveTo(index, snap = false) {
    currentIndex = index;
    targetTranslateX = -(100 * currentIndex); // ✅ % 단위로 이동
    updateTextAndButtons();
    animateToTarget(snap);
  }

  function updateTextAndButtons() {
    btns.removeClass('active').eq(currentIndex).addClass('active');
    texts.removeClass('active').eq(currentIndex).addClass('active');
  }

  function animateToTarget(isSnap) {
    if (isSnap) {
      imageTrack.css({
        'transition': 'transform 0.5s ease',
        'transform': `translateX(${targetTranslateX}%)` // ✅ % 단위
      });
    } else {
      imageTrack.css('transition', 'none');
      imageTrack.css('transform', `translateX(${targetTranslateX}%)`);
    }
  }

  // 초기 세팅
  btns.eq(0).addClass('active');
  texts.eq(0).addClass('active');
  moveTo(0, true);


  // 모달
  
  
});
