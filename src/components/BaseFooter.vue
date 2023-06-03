<template>
  <div>
    <footer class="s-footer">
      <div class="s-footer__main">
        <div class="row">
          <div class="column large-3 medium-6 tab-12 s-footer__info">
            <h5>درباره سایت ما</h5>

            <p style="text-align: justify;">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <!-- end s-footer__info -->

          <div class="column large-2 medium-3 tab-6 s-footer__site-links">
            <h5>لینک های سایت</h5>

            <ul>
              <li><a href="#0">درباره ما</a></li>
              <li><a href="#0">بلاگ</a></li>
              <li><a href="#0">سوالات متداول</a></li>
              <li><a href="#0">خط مشی</a></li>
              <li><a href="#0">سیاست حفظ حریم خصوصی</a></li>
            </ul>
          </div>
          <!-- end s-footer__site-links -->

          <div class="column large-2 medium-3 tab-6 s-footer__social-links">
            <h5>ما را دنبال کنید در</h5>

            <ul>
              <li><a href="#0">توئیتر</a></li>
              <li><a href="#0">فیسبوک</a></li>
              <li><a href="#0">دریبل</a></li>
              <li><a href="#0">پینترست</a></li>
              <li><a href="#0">اینستاگرام</a></li>
            </ul>
          </div>
          <!-- end s-footer__social links -->

          <div class="column large-3 medium-6 tab-12 s-footer__subscribe">
            <h5>برای خبرنامه ثبت نام کنید</h5>

            <p>برای دریافت به روز رسانی مقالات، مصاحبه ها و رویدادها ثبت نام کنید.</p>

            <div class="subscribe-form">
              <form id="mc-form" class="group" novalidate="true">
                <input
                  type="email"
                  value=""
                  name="dEmail"
                  class="email"
                  id="mc-email"
                  placeholder="ایمیل خود را وارد کنید"
                  required=""
                />

                <input type="submit" name="subscribe" value="ثبت" />

                <label for="mc-email" class="subscribe-message"></label>
              </form>
            </div>
          </div>
          <!-- end s-footer__subscribe -->
        </div>
        <!-- end row -->
      </div>
      <!-- end s-footer__main -->

      <div class="s-footer__bottom">
        <div class="row">
          <div class="column">
            <div class="ss-copyright">
              <span>تمامی حقوق محفوظ است</span>
              <span
                >طراحی شده توسط
                <a href="https://blogfa.com/">بلگفا</a></span
              >
            </div>
            <!-- end ss-copyright -->
          </div>
        </div>

        <div class="ss-go-top">
          <a class="smoothscroll" title="Back to Top" href="#top">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M7.5 1.5l.354-.354L7.5.793l-.354.353.354.354zm-.354.354l4 4 .708-.708-4-4-.708.708zm0-.708l-4 4 .708.708 4-4-.708-.708zM7 1.5V14h1V1.5H7z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <!-- end ss-go-top -->
      </div>
      <!-- end s-footer__bottom -->
    </footer>
    <!-- end s-footer -->
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>