<template>
  <main class="home">
    <logo class="logo" />
    <section class="content-container">
      <article class="content">
        <h2>Level Up. Go Stafflist.</h2>
        <p>
          An administration & collaboration tool - Stafflist is the intersecting
          point of all the stakeholders in the staffing process.
        </p>
        <button @click="openModal" class="action">
          <img src="@/assets/img/icon-bar.svg" alt="click button" width="10" />
          <span>Just Click me</span>
        </button>
      </article>
    </section>
  </main>
</template>

<script>
import Logo from "@/components/images/Logo";
export default {
  name: "Home",
  components: {
    Logo,
  },
  methods: {
    openModal() {
      this.$store.commit("setModalState", true);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
@import "../assets/styles/sizes.scss";
.home {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 3%;
  .content-container {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    background-image: url("../assets/img/fig-1.svg"),
      url("../assets/img/fig-2.svg");
    background-repeat: no-repeat;
    background-size: 90% 65%, 65% 65%;
    background-position: left bottom, right top;
    article {
      width: 50%;
      margin-top: 5%;
      height: 200px;
      background-size: cover;
      background-image: url("../assets/img/fig-3.svg");
      padding: 15% 0px 5% 7%;
      text-align: left;
      p {
        font-size: 1em;
        padding: 0;
        margin-top: 5%;
      }
      button {
        background: $white;
        padding: 10px;
        outline: none;
        width: 125px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 45px;
        border-radius: 5px;
        border: 1px solid $dark-color;
        cursor: pointer;
        float: right;
      }
    }
  }
}
@media screen and (max-width: $mobile-break-point) {
  .home {
    flex-direction: column;
    background-image: url("../assets/img/fig-2.svg");
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background-position: top center;
    .logo {
      margin: auto;
      margin-top: 5%;
    }
    .content-container {
      width: 100%;
      height: 100%;
      background-image: url("../assets/img/fig-1.svg");
      background-size: 80% 70%;
      background-position: left bottom;
      .content {
        width: 100%;
        margin-top: -5%;
        height: 300px;
        background-size: cover;
        padding-top: 28%;
        clip-path: polygon(0 28%, 100% 0, 100% 100%, 0 70%);
        background: $white;
        .action {
          margin: auto;
          float: none;
        }
      }
    }
  }
}
</style>
