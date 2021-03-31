<template>
  <fieldset
    :class="[err ? 'error' : '', 'input-container']"
    :id="elementType === 'textarea' ? 'input-cont-grow' : ''"
  >
    <component :is="img" class="margin" v-if="img" />
    <input
      :type="type"
      placeholder="."
      v-model="value"
      @input="$emit('data', value)"
      v-if="elementType === 'input'"
      name="input"
    />
    <textarea
      name=""
      id=""
      class="mt"
      v-else-if="elementType === 'textarea'"
    ></textarea>
    <select name="" id="" v-model="value" v-else @change="$emit('data', value)">
      <option
        v-for="(option, index) in optionsArr"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <label for="" id="label" :style="checkFocusedSelect + checkTextArea">
      <img src="" alt="" v-if="elementType === 'checkbox'" />
      {{ placeholder }}</label
    >
    <label for="input" v-if="type === 'checkbox'" class="check-box-label"
      >All</label
    >
  </fieldset>
</template>

<script>
import SelectImg from "../images/SelectImg";
import DateImg from "../images/DateImg";
import EmailImg from "../images/EmailImg";
export default {
  name: "CustomInputContainer",
  props: {
    err: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    img: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    elementType: {
      type: String,
      default: "input",
    },
    optionsArr: {
      type: Array,
    },
  },
  data: () => {
    return {
      value: "",
    };
  },
  computed: {
    checkFocusedSelect() {
      return this.elementType !== "input" && this.value
        ? "padding: 0px 30px;"
        : "";
    },
    checkTextArea() {
      return this.elementType === "textarea" ? "padding: 5px 15px;" : "";
    },
  },
  components: {
    SelectImg,
    DateImg,
    EmailImg,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.input-container {
  width: 100%;
  background: $white;
  line-height: 1.2em;
  height: 56px;
  padding: 0px 7px;
  border-radius: 5px;
  border: 1px solid $border-color;
  font-size: 1.2em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  input {
    outline: none;
    border: transparent;
    width: 100%;
    background-color: $white;
    ::placeholder {
      color: $border-color;
    }
  }
  select {
    width: 95%;
    height: 100%;
    outline: none;
    border: transparent;
    background: $white;
  }
  #label {
    padding: 15px 35px;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    font-size: 0.8em;
    opacity: 0.5;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    opacity: 1;
    transform: scale(0.75) translateY(-40%) translateX(-14px);
  }
  .check-box-label {
    font-size: 0.8em;
    margin-left: 7px;
  }
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
input[type="checkbox"] {
  width: fit-content;
}
.margin {
  margin-right: 15px;
}
textarea {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  border-radius: 5px;
  border: transparent;
  height: 100%;
  padding: 30px 20px;
}
#input-cont-grow {
  height: 35%;
}
</style>
