<template>
  <div></div>
</template>

<script>
import { Toast } from "cube-ui";
export default {
  name: "Loading",
  activated() {
    this.toast = Toast.$create({
      txt: "loading...",
      time: 0
    });
    this.toast.show();
  },
  deactivated() {
    this.toast.hide();
  }
};
</script>
