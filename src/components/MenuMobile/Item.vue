<template>
  <li :class="{ 'has-children': items !== undefined }">
    <router-link
      :to="link"
      title=""
      @click="statusSubMenu = !statusSubMenu"
      :class="{ 'sub-menu-is-open': statusSubMenu }"
      >{{ name }}</router-link
    >

    <ul
      class="sub-menu"
      :class="{ 'd-block': statusSubMenu }"
    >
      <li v-for="item in items" :key="item">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ItemMenuMobile",
  props: {
    items: {
      type: Array,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: [String,Object],
      required: true,
    },
  },
  setup(props) {
    const statusSubMenu = ref(false);
    return {
      statusSubMenu,
    };
  },
};
</script>

<style>
</style>