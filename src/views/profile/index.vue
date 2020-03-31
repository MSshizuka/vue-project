<template>
  <div id="profile">
    <div class="profile-entry" v-show="isShowEntry">
      <profile-header @showPersonalInformation="showPersInfo"/>
      <profile-message />
      <profile-order />
    </div>
    <profile-personal-info v-show="!isShowEntry" @hidePersonalInformation="hidePersInfo"/>
  </div>
</template>

<script>
import ProfileHeader from "@/views/profile/ProfileHeader";
import ProfileMessage from "@/views/profile/ProfileMessage";
import ProfileOrder from "@/views/profile/ProfileOrder";
import ProfilePersonalInfo from "@/views/profile/ProfilePersonalInfo";

export default {
  name: "Profile",
  data() {
    return {
      isShowEntry: true
    }
  },
  methods: {
    showPersInfo() {
      this.isShowEntry = false;
    },
    hidePersInfo() {
      this.isShowEntry = true;
    }
  },
  components: {
    ProfileHeader,
    ProfileMessage,
    ProfileOrder,
    ProfilePersonalInfo
  }
};
</script>

<style lang="stylus" scoped>
#profile {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>