<template>
  <div>
    <div class="title">مورد پسندهای شما</div>
    <div class="content-fav">
      <div class="row" style="padding: 20px">
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              :src="require('@/assets/images/thumbs/masonry/jump-600.jpg')"
            />
            <font-awesome-icon :icon="['far', 'bookmark']" class="icon" />
          </div>
          <router-link
            :to="{ name: 'post-id', params: { id: 50 } }"
            class="link"
            >پست شماره 4</router-link
          >
          <div class="details">
            <ul>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>25</span>
              </li>
              <li class="itm">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span>75</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Favorites",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-right: 5px;
  margin-top: 5px;
  border: 2px solid #e1e1e1;
  border-radius: 6px;
}
.item img {
  width: 150px;
  border-radius: 7px 7px 0 0;
  margin: 0;
  padding: 0;
}
.item .image {
  position: relative;
}
.item .icon {
  position: absolute;
  bottom: 20px;
  left: 5px;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.link {
  font-size: 13px;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px;
}
.details ul {
  list-style: none;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}
.details .itm {
  display: flex;
  flex-direction: column;
  color: rgba($color: #000000, $alpha: 0.5);
}
@media only screen and (max-width: 430px) {
  .item {
    width: 47%;
  }
}
</style>