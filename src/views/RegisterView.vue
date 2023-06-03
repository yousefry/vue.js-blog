<template>
  <div class="limiter" style="direction: ltr">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img :src="require('@/assets/login/images/img-01.png')" alt="IMG" />
        </div>

        <form class="login100-form validate-form">
          <span class="login100-form-title"> ثبت نام </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              placeholder="نام کامل"
              style="padding-right: 15px"
              v-model="registerForm.fullname"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i
                class="fa fa-user"
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
              type="text"
              placeholder="نام کاربری"
              style="padding-right: 15px"
              v-model="registerForm.username"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i
                class="fa fa-user"
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
              type="text"
              placeholder="ایمیل"
              style="padding-right: 15px"
              v-model="registerForm.email"
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
              placeholder="کلمه عبور"
              style="padding-right: 15px"
              v-model="registerForm.password"
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
          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="تکرار کلمه عبور"
              style="padding-right: 15px"
              v-model="registerForm.confirmed"
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
            <button class="login100-form-btn" @click.prevent="register">
              ثبت نام
            </button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> قبلا ثبت نام کرده ای ؟</span>
            <router-link class="txt2" :to="{ name: 'login' }">
              ورود
            </router-link>
            <div>
              <router-link class="txt2" :to="{ name: 'home' }">
                برو به صفحه اصلی</router-link
              >
            </div>
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
    const registerForm = reactive({
      fullname: "",
      username: "",
      email: "",
      password: "",
      confiremd: "",
    });
    const register = () => {
      console.log(registerForm);
    };
    onMounted(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    return {
      registerForm,
      register,
    };
  },
};
</script>

<style scoped>
@import "@/assets/login/css/style.css";
</style>