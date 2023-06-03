<template>
  <div class="limiter" style="direction: ltr">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img :src="require('@/assets/login/images/img-01.png')" alt="IMG" />
        </div>

        <form class="login100-form validate-form">
          <span class="login100-form-title"> ورود به سایت </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="ایمیل"
              style="padding-right: 15px"
              v-model="loginForm.email"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i
                class="fa fa-envelope"
                aria-hidden="true"
                style="position: relative; right: 0100%"
              ></i>
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="کلمه عبور"
              style="padding-right: 15px"
              v-model="loginForm.password"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i
                class="fa fa-lock"
                aria-hidden="true"
                style="position: relative; right: 0100%"
              ></i>
            </span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click.prevent="login">
              ورود
            </button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> روز عبور خود را فراموش کرده اید ؟ </span>
            <a class="txt2" href="#"> اقدام کنید </a>
            <div>
              <router-link class="txt2" :to="{ name: 'home' }">
                برو به صفحه اصلی</router-link
              >
            </div>
          </div>

          <div class="text-center p-t-136">
            <router-link class="txt2" :to="{ name: 'register' }">
              ساخت اکانت جدید
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  name: "Login",
  setup() {
    const loginForm = reactive({ email: "", password: "" });
    const login = () => {
      console.log(loginForm);
    };
    onMounted(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    return {
      loginForm,
      login,
    };
  },
};


</script>

<style scoped>
@import "@/assets/login/css/style.css";
</style>