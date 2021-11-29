<template>
  <div class="container">
    <header>
      <div class="left">
        <span>menu</span>
      </div>
      <div class="right">
        <span>혜택</span><span>금융</span><span class="menuName">앱카드</span>
      </div>
    </header>
    <ul class="dummy">
      <li v-for="item in dummyData" :key="item">
        <div class="label">{{ item.label }}</div>
        <div class="subLabel">{{ item.subLabel }}</div>
      </li>
    </ul>
    <div class="splash">
      <div class="bottomBar">SAMSUNG CARD</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'interaction',
  data () {
    return {
      dummyData: [
        { label: '알림', subLabel: '23,600원 결제하셨어요' },
        { label: '3층에서 선물 배송완료', subLabel: '확인하러 가기' },
        { label: '지금 Welcome 이벤트 중', subLabel: '혜택의 블랙 라벨' },
        { label: '스마트카드 결제 시', subLabel: '전 가맹점 2~7개월 무이자 할부' },
        { label: '세상에서 가장 맛있는 Bill Check', subLabel: '10월, 나를 즐겁게한 F&B내역 확인해 보세요' },
        { label: '인터렉션님', subLabel: '30만원 이용 실적을 달성 했어요' },
        { label: '눈에 띄는 소비영역 어디?', subLabel: '카페/디저트 지출이 평소보다 늘었어요!' },
        { label: '이제 여러 곳에서 찾지말고', subLabel: '내 신용점수 한 곳에서 비교하기' },
        { label: '알림', subLabel: '23,600원 결제하셨어요' },
        { label: '3층에서 선물 배송완료', subLabel: '확인하러 가기' },
        { label: '지금 Welcome 이벤트 중', subLabel: '혜택의 블랙 라벨' },
        { label: '스마트카드 결제 시', subLabel: '전 가맹점 2~7개월 무이자 할부' },
        { label: '세상에서 가장 맛있는 Bill Check', subLabel: '10월, 나를 즐겁게한 F&B내역 확인해 보세요' },
        { label: '인터렉션님', subLabel: '30만원 이용 실적을 달성 했어요' },
        { label: '눈에 띄는 소비영역 어디?', subLabel: '카페/디저트 지출이 평소보다 늘었어요!' },
        { label: '이제 여러 곳에서 찾지말고', subLabel: '내 신용점수 한 곳에서 비교하기' }
      ],
      menuColor: 'blue'
    }
  }
}
</script>

<style lang="scss" scoped>
.menuName {
  color: v-bind(menuColor);
}
.container {
  flex-direction: column;
  justify-content: flex-start;
  background: #333;
  color: #fff;
  padding-top: 80px;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background: #222;
  width: 100%;
  padding: 20px 10px;
  border: 1px solid #000;
  .right {
    span { margin-left: 20px; }
  }
}
ul.dummy {
  width: 100%;
  li {
    background: #555;
    margin-bottom: 20px;
    padding: 30px;
    border-radius: 20px;
    cursor: pointer;
    .label { font-size: 1.5em; margin-bottom: 20px; }
  }
}
.splash {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 1px solid red;
  .bottomBar {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    opacity: 0;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    animation:
      ani01 1.2s 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards
      , ani02 1.2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
}

@keyframes ani01 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 300px;
    height: 100px;
  }
}
@keyframes ani02 {
  0% {
    width: 300px;
    height: 100px;
  }
  100% {
    width: 100%;
    height: 200px;
    top: 100%;
    transform: translate(-50%, -100%);
    background: #000;
    color: #fff;
  }
}
</style>
