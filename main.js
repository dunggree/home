$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 500) {
            $("body").css('background-color', '#fff');
        } else {
            $("body").css('background-color', '#00A1E9');
        }
    });
});


$("body").on('mouseover', 'a', function (e) {
  var $link = $(this),
       href = $link.attr('href') || $link.data("href");

  $link.off('click.chrome');
  $link.on('click.chrome', function () {
     window.location.href = href;
  }).attr('data-href', href) //href에 지정된 링크 연결을 유지 시킵니다.
  .css({ cursor: 'pointer' })
  .removeAttr('href'); // 이 부분이 브라우저에서 뜨는 Url 상태바를 안보이게 처리합니다.
});


document.addEventListener('DOMContentLoaded', function () {
  var roomBackground = document.getElementById('room-background');
    // 마우스 포인터 위치 가지고 와서 원 위치 지정
  document.addEventListener('mousemove', function (e) {
    roomBackground.style.clipPath = `circle(300px at ${e.clientX - 350}px ${e.clientY + 0}px)`;
  });
});

//좌측 내비게이션 이미지 변경
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements
  const box1Cover = document.getElementById('box1cover');
  const box2Cover = document.getElementById('box2cover');
  const box3Cover = document.getElementById('box3cover');

  const outsideBox1 = document.querySelector('.outside-box1');
  const outsideBox2 = document.querySelector('.outside-box2');
  const outsideBox3 = document.querySelector('.outside-box3');

  // Add mouseover event listeners to outside boxes
  outsideBox1.addEventListener('mouseover', function () {
    box1Cover.style.display = 'flex';
  });

  outsideBox2.addEventListener('mouseover', function () {
    box2Cover.style.display = 'flex';
  });

  outsideBox3.addEventListener('mouseover', function () {
    box3Cover.style.display = 'flex';
  });

  // Add mouseout event listeners to outside boxes
  outsideBox1.addEventListener('mouseout', function () {
    box1Cover.style.display = 'none';
  });

  outsideBox2.addEventListener('mouseout', function () {
    box2Cover.style.display = 'none';
  });

  outsideBox3.addEventListener('mouseout', function () {
    box3Cover.style.display = 'none';
  });
});





//게임 파일 열리게
document.getElementById('burn-out').addEventListener('mouseover', function() {
  document.querySelector('.burn-out-img').style.display = 'flex';
});

document.getElementById('burn-out').addEventListener('mouseout', function() {
  document.querySelector('.burn-out-img').style.display = 'none';
});

document.getElementById('GACHA').addEventListener('mouseover', function() {
  document.querySelector('.GACHA-img').style.display = 'flex';
});

document.getElementById('GACHA').addEventListener('mouseout', function() {
  document.querySelector('.GACHA-img').style.display = 'none';
});

document.getElementById('KHC').addEventListener('mouseover', function() {
  document.querySelector('.KHC-img').style.display = 'flex';
});

document.getElementById('KHC').addEventListener('mouseout', function() {
  document.querySelector('.KHC-img').style.display = 'none';
});

document.getElementById('nightsky').addEventListener('mouseover', function() {
  document.querySelector('.nightsky-img').style.display = 'flex';
});

document.getElementById('nightsky').addEventListener('mouseout', function() {
  document.querySelector('.nightsky-img').style.display = 'none';
});


//박스 이미지 열리게
const bluebox = document.getElementById('bluebox');
let isOpen = false;
let timeout;

function toggleBox() {
    if (isOpen) {
        bluebox.classList.remove('box_open1');
        bluebox.classList.add('box_open2');
    } else {
        bluebox.classList.remove('box_open2');
        bluebox.classList.add('box_open1');
    }
    isOpen = !isOpen;
    timeout = setTimeout(toggleBox, 1000); // 1초 후에 다시 호출
}

bluebox.addEventListener('mouseenter', function () {
    clearTimeout(timeout); // 기존의 timeout 제거
    bluebox.classList.remove('box_close');
    toggleBox();
});

bluebox.addEventListener('mouseleave', function () {
    clearTimeout(timeout); // timeout 제거
    bluebox.classList.remove('box_open1', 'box_open2');
    bluebox.classList.add('box_close');
});
