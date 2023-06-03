<template>
  <div>
    <section class="s-content">
      <!-- page header
================================================== -->
      <div class="s-pageheader">
        <div class="row">
          <div class="column large-12">
            <h1 class="page-title">
              <span class="page-title__small-type">دسته بندی</span>
              سبک زندگی
            </h1>
          </div>
        </div>
      </div>
      <!-- end s-pageheader-->

      <!-- masonry
================================================== -->
      <div class="s-bricks s-bricks--half-top-padding">
        <div class="masonry">
          <div class="bricks-wrapper h-group">
            <div class="grid-sizer"></div>

            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <Posts />
            <!-- end article -->
          </div>
          <!-- end brick-wrapper -->
        </div>
        <!-- end masonry -->

        <div class="row">
          <div class="column large-12">
            <nav class="pgn">
              <ul>
                <li>
                  <span class="pgn__prev" href="#0"> Prev </span>
                </li>
                <li><a class="pgn__num" href="#0">1</a></li>
                <li><span class="pgn__num current">2</span></li>
                <li><a class="pgn__num" href="#0">3</a></li>
                <li><a class="pgn__num" href="#0">4</a></li>
                <li><a class="pgn__num" href="#0">5</a></li>
                <li><span class="pgn__num dots">…</span></li>
                <li><a class="pgn__num" href="#0">8</a></li>
                <li>
                  <span class="pgn__next" href="#0"> Next </span>
                </li>
              </ul>
            </nav>
            <!-- end pgn -->
          </div>
          <!-- end column -->
        </div>
        <!-- end row -->
      </div>
      <!-- end s-bricks -->
    </section>
    <!-- end s-content -->
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import { onMounted } from 'vue';
export default {
  name: "CategoryView",
  components: {
    Posts,
  },
  setup() {
    onMounted(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    return {};
  },
};
</script>

<style>
.d-block {
  display: block !important;
}
.s-header {
  background-color: rgb(8 7 7 / 100%) !important;
}
</style>