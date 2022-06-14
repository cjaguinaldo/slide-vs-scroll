<script>
const boxWidth = 100, spacing = 10;
export default {
  data() {
    return {
      scrollingElements: [],
      slidingElements: [],
      lastSlidingElement: null,
      lastScrollingElement: null,
      rate: 1,
    }
  },
  mounted() {
    let ctx = this;

    this.lastScrollingElement = { id: 1, position: -(110) };
    this.scrollingElements.push(this.lastScrollingElement);
    this.scrollAnimation();


    setInterval(() => {
      for (const item of ctx.slidingElements) {
        item.position += boxWidth + spacing;
      }
      this.slidingElements.push({ id: ctx.slidingElements.length + 1, position: -(boxWidth + spacing) })

    }, 2000 / this.rate)
  },
  methods: {
    scrollAnimation() {
      for (const item of this.scrollingElements) {
        item.position += 0.5 * this.rate;
        if (this.lastScrollingElement.position >= 0) {
          this.lastScrollingElement = { id: this.scrollingElements.length + 1, position: -(boxWidth + spacing) };
          this.scrollingElements.push(this.lastScrollingElement);
        }
      }
      window.requestAnimationFrame(this.scrollAnimation);
    },
    slideStyle(item) {
      return {
        right: `${item.position}px`
      }
    }
  },
}
</script>

<template>
  <div> 
    <div>
      <h3>Scroll</h3>
      <div class="container">
        <div class="box" v-for="item in scrollingElements" :style="slideStyle(item)">id: {{ item.id }}</div>
      </div>
    </div>
    <div>
      <h3>Slide</h3>
      <div class="container">
        <div class="box sliding" v-for="item in slidingElements" :style="slideStyle(item)">id: {{ item.id }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  height: 50px;
  width: 100px;
  background: lightgray;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sliding {
  transition-duration: 0.5s;

}

.container {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 50px;
}
</style>
