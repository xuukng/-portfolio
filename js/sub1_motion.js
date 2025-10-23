//var ag = setInterval("autoGallery()",3000); 
//시간 간격(3000 = 초, 1000밀리초는 1초)을 설정
//3초 간격으로 명령어 보관함( autoGallery() ) 내에 수행할 명령어를 처리





$(function(){

			



			//******** 1.header 네비게이션 표시/비표시 슬라이드 애니메이션 ********************//

		


			
			/*이미지 좌우조작버튼 */

			


			/*이미지 자동슬라이드 */

			
      let lastScrollTop = 0; // 마지막 스크롤 위치를 저장
      const gnb = document.querySelector('header');
      
      window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
        if (currentScroll > lastScrollTop) {
          // 스크롤을 내릴 때 GNB 숨기기
          gnb.style.transform = 'translateY(-100%)'; // GNB를 화면 위로 이동시켜서 숨김
        } else {
          // 스크롤을 올릴 때 GNB 보이게 하기
          gnb.style.transform = 'translateY(0)'; // GNB를 원위치로 이동시켜서 보이게 함
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 스크롤 위치가 0보다 작은 경우를 방지
      });


      



});

