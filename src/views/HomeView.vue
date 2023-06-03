<template>
  <div>
    <Slider />
    <section class="s-content s-content--no-top-padding">
      <div class="s-bricks">
        <div class="masonry">
          <div class="bricks-wrapper h-group" style="position: relative">
            <div class="grid-sizer"></div>

            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <Posts />
          </div>
        </div>
        <div class="row">
          <div class="column large-12">
            <nav class="pgn">
              <ul>
                <li>
                  <span class="pgn__prev" href="#0"> قبلی </span>
                </li>
                <li><a class="pgn__num" href="#0">1</a></li>
                <li><span class="pgn__num current">2</span></li>
                <li><a class="pgn__num" href="#0">3</a></li>
                <li><a class="pgn__num" href="#0">4</a></li>
                <li><a class="pgn__num" href="#0">5</a></li>
                <li><span class="pgn__num dots">…</span></li>
                <li><a class="pgn__num" href="#0">8</a></li>
                <li>
                  <span class="pgn__next" href="#0"> بعدی </span>
                </li>
              </ul>
            </nav>
            <!-- end pgn -->
          </div>
          <!-- end column -->
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Posts from "@/components/Posts.vue";
import Slider from "@/components/Slider.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Posts,
    Slider,
  },
  setup() {
    onMounted(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    return {};
  },
});
</script>
