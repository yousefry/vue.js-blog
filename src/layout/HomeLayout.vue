<template>
  <div
    id="app"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
    data-aos-delay="400"
    :class="{
      'nav-wrap-is-visible': showMenu,
      'search-is-visible': showSearch,
    }"
  >
    <BaseHeader
      @showSearch="showS"
      @hideSearch="showS"
      @ShowMenuMobileEmit="ShowM"
      @hideMenuMobileEmit="ShowM"
    />
    <router-view />
    <BaseFooter />
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    const showSearch = ref(false);
    const showMenu = ref(false);
    const showS = (val) => {
      showSearch.value = !showSearch.value;
    };
    const ShowM = () => {
      showMenu.value = !showMenu.value;
    };
    return {
      showS,
      ShowM,
      showMenu,
      showSearch,
    };
  },
};
</script>
  <style>
</style>
    