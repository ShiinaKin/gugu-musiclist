<script setup lang="ts">
import AvatarProfile from "./components/AvatarProfile.vue";
import MusicLabel from "./components/MusicLabel.vue";
import MusicList from "./components/MusicList.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div id="container" class="bg-fixed bg-top bg-cover">
    <n-message-provider>
      <div class="container mx-auto w-2/3 pt-10 flex flex-col gap-6">
        <AvatarProfile />
        <MusicLabel />
        <MusicList />
        <FooterComponent />
      </div>
    </n-message-provider>
  </div>
</template>

<style>
#container {
  background-image: url("@/assets/bg.jpg");
}
</style>
