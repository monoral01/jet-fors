<template>
  <a-row>
    <a-col span="1"></a-col>
    <a-col class="navbar-logo" @click="router.push('/')">
      <p class="navbar-logo-1">jet</p>
      <p class="navbar-logo-2">fors</p>
    </a-col>
    <a-col span="1" />
    <a-col span="15">
      <nav>
        <div>
          <router-link to="/vacancies">Вакансии</router-link>
        </div>
        <div>
          <router-link to="/about">О нас</router-link>
        </div>
        <div>
          <router-link to="/cases">Кейсы</router-link>
        </div>
        <div>
          <router-link to="/clients">Клиенты</router-link>
        </div>
        <div>
          <router-link to="/contacts">Контакты</router-link>
        </div>
      </nav>
    </a-col>
    <a-col span="4">
      <img src="@/assets/images/telephone.svg" />
      <a class="navbar-phone" href="tel:+375255406261">+375255406261</a>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  setup() {
    return { router };
  },
});
</script>
<style scoped lang="scss">
$hover-color: #818181;
.ant-col {
  padding: 30px 30px 0px;
}
.ant-row {
  width: 100vw;
  justify-content: space-between;
}
.navbar {
  &-phone {
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    color: white;
    &:hover {
      font-weight: 700;
      text-shadow: 0 0 10px $hover-color, 0 0 20px $hover-color,
        0 0 30px $hover-color, 0 0 40px $hover-color;
      transition: font-weight 0.5s, text-shadow 0.6s ease;
    }
  }
  &-logo {
    padding: 10px 30px 0px;
    text-transform: uppercase;
    cursor: pointer;
    &-1 {
      text-align: right;
      margin: 0;
      color: white;
      font-weight: 300;
      font-size: 36px;
      line-height: 36px;
      text-align: right;
      width: 132px;
    }
    &-2 {
      width: 140px;
      margin: 0;
      color: #ff1744;
      font-weight: 400;
      font-size: 48px;
      line-height: 48px;
    }
  }
}
nav {
  display: flex;
  flex-direction: row;
  // justify-content: space-evenly;
  a {
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin: 30px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 30px 30px 0px;
    font-size: 18px;
    font-weight: 300;
    &.router-link-active {
      font-weight: 700;
      &:hover {
        font-weight: 700;
        text-shadow: none;
        transition: none;
      }
    }
    &:hover {
      font-weight: 700;
      text-shadow: 0 0 10px $hover-color, 0 0 20px $hover-color,
        0 0 30px $hover-color, 0 0 40px $hover-color;
      transition: font-weight 0.5s, text-shadow 0.6s ease;
    }
  }
}
</style>
