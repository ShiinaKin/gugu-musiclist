<script setup lang="ts">
import AvatarProfile from "./components/AvatarProfile.vue";
import MusicLabel from "./components/MusicLabel.vue";
import MusicList from "./components/MusicList.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div id="container" class="h-full bg-fixed bg-top bg-cover overflow-y-auto">
    <n-message-provider>
      <div class="container mx-auto w-5/6 lg:w-2/3 h-full pt-10 flex flex-col gap-6">
        <AvatarProfile />
        <MusicLabel />
        <MusicList />
        <FooterComponent class="mt-auto" />
      </div>
      <n-back-top />
    </n-message-provider>
  </div>
</template>

<style scoped>
#container {
  background-image: url("@/assets/bg.jpg");
}
</style>
