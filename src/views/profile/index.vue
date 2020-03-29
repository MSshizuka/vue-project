<template>
  <div id="profile">
    <profile-header/>
    <profile-message/>
    <profile-order/>
  </div>
</template>

<script>
import ProfileHeader from "@/views/profile/ProfileHeader"
import ProfileMessage from "@/views/profile/ProfileMessage"
import ProfileOrder from "@/views/profile/ProfileOrder"

export default {
  name: "Profile",
  components: {
    ProfileHeader,
    ProfileMessage,
    ProfileOrder
  }
};
</script>

<style lang="stylus" scoped>
#profile {
  width 100%
  height  100%
  background-color #eee
}
</style>