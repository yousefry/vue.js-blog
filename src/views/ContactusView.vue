<template>
  <div>
    <section class="s-content">
      <div class="row">
        <div class="column large-12">
          <article class="s-content__entry">
            <div class="s-content__media">
              <img
                :src="
                  require('@/assets/images/thumbs/contact/contact-1050.jpg')
                "
                sizes="(max-width: 2100px) 100vw, 2100px"
                alt=""
              />
            </div>
            <!-- end s-content__media -->

            <div class="s-content__entry-header">
              <h1 class="s-content__title">با ما در تماس باشید.</h1>
            </div>
            <!-- end s-content__entry-header -->

            <div class="s-content__primary">
              <div class="s-content__page-content">
                <p class="lead" style="text-align: justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>

                <p style="text-align: justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>

                <br />

                <div
                  class="row block-large-1-2 block-tab-full s-content__blocks"
                >
                  <div class="column">
                    <h4>کجا ما را پیدا کنیم</h4>
                    <p>
                      1600 آمفی تئاتر پارک وی<br />
                      خیابان جردم اصلی<br />
                      پلاک 73
                    </p>
                  </div>

                  <div class="column">
                    <h4>اطلاعات تماس</h4>
                    <p>
                      someone@yourdomain.com<br />
                      info@yourdomain.com <br />
                      تلفن: (+63) 555 1212
                    </p>
                  </div>
                </div>
                <!-- end s-content__blocks -->

                <form
                  name="cForm"
                  id="cForm"
                  class="s-content__form"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div class="form-field">
                      <input
                        name="cName"
                        type="text"
                        id="cName"
                        class="h-full-width h-remove-bottom"
                        placeholder="اسم شما"
                        value=""
                      />
                    </div>

                    <div class="form-field">
                      <input
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        class="h-full-width h-remove-bottom"
                        placeholder="ایمیل شما"
                        value=""
                      />
                    </div>

                    <div class="form-field">
                      <input
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        class="h-full-width h-remove-bottom"
                        placeholder="وبسایت"
                        value=""
                      />
                    </div>

                    <div class="message form-field">
                      <textarea
                        name="cMessage"
                        id="cMessage"
                        class="h-full-width"
                        placeholder="پیغام"
                      ></textarea>
                    </div>

                    <br />
                    <button
                      type="submit"
                      class="submit btn btn--primary h-full-width"
                    >
                      ارسال پیغام
                    </button>
                  </fieldset>
                </form>
                <!-- end form -->
              </div>
              <!-- end s-entry__page-content -->
            </div>
            <!-- end s-content__primary -->
          </article>
          <!-- end entry -->
        </div>
        <!-- end column -->
      </div>
      <!-- end row -->
    </section>
    <!-- end s-content -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: "ContactusView",
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