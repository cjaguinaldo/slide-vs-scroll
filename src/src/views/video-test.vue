<template>
  <div class="video">
    <h3>Playback Speed</h3>
    <div>Edit number below to change speed of the video. You need to click play the video first.</div>
    <div>
      Min rate multiplier is 0.0625 while max playback speed is 16.0;
      <a
        href="https://source.chromium.org/chromium/chromium/src/+/f23e01e01c7072467e0f5eb1f299fdd0032fdc46:third_party/blink/renderer/core/html/media/html_media_element.h;l=108-110">Reference</a>
    </div>
    <input type="number" v-model="speed" style="width:100px" />

    <br />
    <video ref="myVideo" width="320" height="176" controls loop>
      <source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

  </div>
</template>
<script>
export default {
  data() {
    return {
      speed: 1
    }
  },
  watch: {
    speed(value) {
      this.$refs["myVideo"].playbackRate = value;
    }
  }
}
</script>
<style scoped>
.video {
  display: flex;
  flex-direction: column;
}
</style>
 