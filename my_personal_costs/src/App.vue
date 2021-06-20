<template>
  <div>
    <transition name="fade">
      <ModalWindow v-if="modalName" :modalName="modalName" />
    </transition>

    <header :class="[$style.header]">
      Мои расходы
      <nav :class="[$style.menu]">
        <router-link :class="[$style.link]" to="/dashboard/1"
          >Главная
        </router-link>
        <router-link :class="[$style.link]" to="/about">О нас</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import ModalWindow from "./components/modalWindow.vue";

export default {
  name: "App",
  components: { ModalWindow },
  data() {
    return {
      modalName: "",
    };
  },
  methods: {
    onShow(settings) {
      this.modalName = settings.name;
    },
    onClose() {
      this.modalName = "";
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onClose);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onClose);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


<style lang="scss" module>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);

body {
  background-color: #f7f7f7;
  font-family: "Roboto", sans-serif;
  color: #242424;
  font-size: 18px;
  font-weight: 100;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
.header {
  min-width: 1300px;
  border-bottom: 1px solid #b5b7ba;
  background-color: #dfdfdf;
  margin: 0 auto;
  height: 50px;
  padding-top: 18px;
  padding-left: 50px;
  font-size: 24px;
  display: flex;
}
.menu {
  padding-left: 180px;
}
.link {
  margin-left: 20px;
  text-decoration: none;
  color: #242424;
  font-size: 22px;
  font-weight: 100;
  padding: 4px;
  &:hover {
    background-color: #a4a1a1;
    box-shadow: 0 0 45px #949191;
    border-radius: 50px;
    border: 1px solid #a4a1a1;
  }
}
.wrapper {
  display: flex;
  padding: 20px 50px;
}
</style>
