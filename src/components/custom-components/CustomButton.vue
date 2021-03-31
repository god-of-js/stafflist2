<template>
  <button
    id="btn"
    :class="[inactive ? 'btn-disabled ' : '', setClass]"
    :disabled="inactive"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    inactive: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    setClass: {
      type: String,
      default: "default-button",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";

.default-button {
  width: 100%;
  padding: 10px;
  height: 56px;
  outline: none;
  background: $green;
  color: $white;
  box-sizing: border-box;
  border-radius: 4px;
  border: transparent;
  font-size: 0.9em;
  cursor: pointer;
  &:active {
    transform: scale(1.04, 1.03);
  }
}
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.close-btn {
  background-color: transparent;
  border: transparent;
  outline: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.close-btn:hover {
  background-color: $dark-color;
  ::v-deep {
    #test-02 {
      fill: $white;
    }
  }
}
.text {
  font-size: 0.9em;
  background: transparent;
  border: transparent;
  outline: none;
  cursor: pointer;
  float: left;
}
</style>
