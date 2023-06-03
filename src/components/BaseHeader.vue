<template>
  <div>
    <header class="s-header" style="direction: rtl">
      <div class="s-header__logo">
        <router-link class="logo" :to="{ name: 'home' }">
          <img :src="require('@/assets/images/logo.svg')" alt="Homepage" />
        </router-link>
      </div>
      <a
        class="s-header__toggle-menu"
        @click="showMenuMobile"
        href="#0"
        title="Menu"
        ><span>Menu</span></a
      >

      <div class="header-menu-mobile">
        <div class="row s-header__navigation">
          <nav class="s-header__nav-wrap">
            <ul class="s-header__nav">
              <li class="current">
                <router-link :to="{ name: 'home' }" title=""
                  >صفحه اصلی</router-link
                >
              </li>
              <li class="has-children">
                <a
                  href="#0"
                  title=""
                  @click="statusSubMenu = !statusSubMenu"
                  :class="{ 'sub-menu-is-open': statusSubMenu }"
                  >دسته بندی ها</a
                >
                <ul class="sub-menu" :class="{ 'd-block': statusSubMenu }">
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'desing' },
                      }"
                      >طرح</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Lifestyle' },
                      }"
                      >سبک زندگی</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Photography' },
                      }"
                      >عکاسی</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Vacation' },
                      }"
                      >تعطیلات</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'category-slug', params: { slug: 'Work' } }"
                      >کار کنید</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Health' },
                      }"
                      >سلامتی</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Family' },
                      }"
                      >خانواده</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'category-slug',
                        params: { slug: 'Relationship' },
                      }"
                      >ارتباط</router-link
                    >
                  </li>
                </ul>
              </li>
              <ItemMenuMobile
                name="بلاگفا"
                link="contactus"
                :items="[
                  {
                    link: {
                      name: 'post-id',
                      params: {
                        id: 50,
                      },
                    },
                    name: 'پست شماره 50',
                  },
                  { link: { name: 'about' }, name: 'درباره ما' },
                  { link: { name: 'home' }, name: 'صفحه اصلی' },
                ]"
              />
              <ItemMenuMobile
                name="مد و فشن"
                :link="{ name: 'post-id', params: { id: 73 } }"
              />
              <li>
                <router-link :to="{ name: 'about' }" title=""
                  >درباره ما</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'contactus' }" title=""
                  >ارتباط با ما</router-link
                >
              </li>
            </ul>
            <!-- end s-header__nav -->

            <a
              href="#0"
              title="Close Menu"
              class="s-header__overlay-close close-mobile-menu"
              @click="closeMenuMobile"
              >Close</a
            >
          </nav>
          <!-- end s-header__nav-wrap -->
        </div>
        <!-- end s-header__navigation -->
        <div class="s-header__search">
          <div class="s-header__search-inner">
            <div class="row wide">
              <form
                role="search"
                method="get"
                class="s-header__search-form"
                action="#"
              >
                <label>
                  <span class="h-screen-reader-text">جستجو برای:</span>
                  <input
                    type="search"
                    class="s-header__search-field"
                    placeholder="جستجو برای ..."
                    title="Search for:"
                    autocomplete="off"
                    v-model="search"
                  />
                </label>
                <input
                  type="submit"
                  class="s-header__search-submit"
                  value="Search"
                />
              </form>

              <a
                href="#0"
                title="Close Search"
                @click="hideSearch"
                class="s-header__overlay-close"
                >Close</a
              >
            </div>
            <!-- end row -->
          </div>
          <!-- s-header__search-inner -->
        </div>
        <!-- end s-header__search wrap -->
        <div class="header__login_register">
          <router-link :to="{ name: 'login' }">ورود</router-link>
          <span style="margin: 0 10px"> / </span>
          <router-link :to="{ name: 'register' }" style="margin: 0 5px"
            >ثبت نام</router-link
          >
          <DropDown
            name="یوسف ریشهری"
            icon="fa fa-user"
            :items="[
              {
                name: 'پروفایل',
                link: { name: 'profile' },
                icon: 'fa fa-user',
              },
              {
                name: 'تماس با ما',
                link: { name: 'contactus' },
                icon: 'fa fa-lock',
              },
              {
                name: 'درباره ما',
                link: { name: 'about' },
                icon: 'fa fa-envelope',
              },
              {
                name: 'خروج',
                link: { name: 'about' },
                icon: 'fa fa-envelope',
              },
            ]"
          />
        </div>
      </div>
      <a class="s-header__search-trigger" @click="showSearch" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.982 17.983">
          <path
            fill="#010101"
            d="M12.622 13.611l-.209.163A7.607 7.607 0 017.7 15.399C3.454 15.399 0 11.945 0 7.7 0 3.454 3.454 0 7.7 0c4.245 0 7.699 3.454 7.699 7.7a7.613 7.613 0 01-1.626 4.714l-.163.209 4.372 4.371-.989.989-4.371-4.372zM7.7 1.399a6.307 6.307 0 00-6.3 6.3A6.307 6.307 0 007.7 14c3.473 0 6.3-2.827 6.3-6.3a6.308 6.308 0 00-6.3-6.301z"
          />
        </svg>
      </a>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";
import ItemMenuMobile from "@/components/MenuMobile/Item.vue";
import DropDown from "@/components/Base/DropDown.vue";
export default {
  name: "BaseHeader",
  components: {
    ItemMenuMobile,
    DropDown,
  },
  setup(props, { emit }) {
    const search = ref(null);
    const statusSubMenu = ref(false);
    const showSearch = () => {
      emit("showSearch", true);
    };
    const hideSearch = () => {
      emit("hideSearch", false);
    };
    const showMenuMobile = () => {
      emit("ShowMenuMobileEmit", true);
    };
    const closeMenuMobile = () => {
      emit("hideMenuMobileEmit", false);
    };
    return {
      showSearch,
      hideSearch,
      showMenuMobile,
      closeMenuMobile,
      statusSubMenu,
      search,
    };
  },
};
</script>

<style>
.d-block {
  display: block !important;
}

</style>