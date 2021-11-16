<template>
  <div class="leftMenu">
    <nuxt-link :to="{ path: '/' }">필수사항</nuxt-link>
    <ul>
      <li v-for="(item, i) in routeData" :key="i">
        <nuxt-link :to="{ name: item.name }" :class="{ on: currentRouteCheck(item) }">{{ item.title }}</nuxt-link>
      </li>
    </ul>
    <p>기타</p>
    <ul>
      <li v-for="(item, i) in etcData" :key="i">
        <nuxt-link :to="{ name: item.name }" :class="{ on: currentRouteCheck(item) }">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routeData: [
        { name: 'interaction', title: '홈' },
        { name: 'interaction-interaction01', title: '1. 스크롤링' },
        { name: 'interaction-interaction02', title: '2. 페이지 넘김, 레이어드' },
        { name: 'interaction-interaction03', title: '3. 텝메뉴 선택 아이콘 에니메이션' },
        { name: 'interaction-interaction04', title: '4. 두줄 메뉴 좌우측 맞춤' },
        { name: 'interaction-interaction05', title: '5. 하단에서 상단으로 레이어드' },
        { name: 'interaction-interaction06', title: '6. 닫기,상단에서 하단으로 레이어드' },
        { name: 'interaction-interaction07', title: '7. 바텀모달' },
        { name: 'interaction-interaction08', title: '8. 인풋박스, 좌측에서 우측으로 참, 키에 가리지 않도록 입력위치 조절' },
        { name: 'interaction-interaction09', title: '9. 페이지 진입시 n초간 말풍선 띄우기' },
        { name: 'interaction-interaction10', title: '10. 화면진입시 프로그레스바' },
        { name: 'interaction-interaction11', title: '11. 상단탭 선택시 좌측에서 우측으로 채워짐' },
        { name: 'interaction-interaction12', title: '12. 끝자락 텝메뉴 선택시 중앙에 잘 보이도록' },
        { name: 'interaction-interaction13', title: '13. 서비스 진입시 스플레시(로딩)' },
        { name: 'interaction-interaction14', title: '14. 스켈렉톤' },
        { name: 'interaction-interaction15', title: '15. 현대카드, La Vida LOCA 인트로 모션' },
        { name: 'interaction-interaction16', title: '16. 베너 드레그 열고 닫기' },
        { name: 'interaction-interaction17', title: '17. 텍스트 롤링' },
        { name: 'interaction-interaction18', title: '18. 스티키' },
        { name: 'interaction-interaction19', title: '19. 메시지 벌어지며 보인후 n초후 사라짐' },
        { name: 'interaction-interaction20', title: '20. 버튼 터치시 꽃뿌림 효과' },
        { name: 'interaction-interaction21', title: '21. 리스트 이미지 클릭시 확대되어 상세페이지 표시' },
        { name: 'interaction-interaction22', title: '22. 가로 스크롤 베너, 선택시 앞뒤 뒤집음' },
        { name: 'interaction-interaction23', title: '23. 물차오르는 효과, 퍼센트 표시' },
        { name: 'interaction-interaction24', title: '24. 폭죽 터지는 인터렉션' }
      ],
      etcData: [
        { name: 'etc-etc01', title: '모달' }
      ]
    }
  },
  computed: {
  },
  methods: {
    currentRouteCheck (item) {
      return this.$nuxt.$route.name === item.name
    }
  }
}
</script>

<style lang="scss" scoped>
.leftMenu {
  height: 100vh;
  overflow-y: auto;
}
ul {
  li {
    padding: 0 10px;
    a {
      display: block;
      padding: 5px 10px;
      text-align: left;
      border-radius: 999px;
      &.on {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
