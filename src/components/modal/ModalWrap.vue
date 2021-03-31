<template>
  <div id="modal">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
#modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: $modal-background;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}
</style>
