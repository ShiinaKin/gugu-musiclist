<script setup lang="ts">
import { ref } from "vue";
import { SearchFilled } from "@vicons/material";
import { useMusicStore } from "@/stores/counter";
import { useMessage } from "naive-ui";
import type { MusicData } from "@/type/MusicData";

const message = useMessage();

const musicStore = useMusicStore();
const searchValue = ref("");

function handleSort(type: string) {
  const musicList = musicStore.rawMusicList;
  if (type === "all") {
    musicStore.musicList = musicList;
    return;
  }
  musicStore.musicList = musicList.filter((item: MusicData) => {
    return item.label.includes(type);
  });
}

function handleSearch(value: string) {
  value = value.trim();
  if (value === "") {
    musicStore.musicList = musicStore.rawMusicList;
    return;
  }
  const musicList = musicStore.rawMusicList;
  musicStore.musicList = musicList.filter((item: MusicData) => {
    return item.name.includes(value) || item.singer.includes(value) || item.remark.includes(value);
  });
}
</script>

<template>
  <div class="container mx-auto flex flex-col content-center gap-6">
    <div class="flex flex-wrap content-evenly justify-between gap-6">
      <n-button id="btn" class="basis-1/6 bg-white opacity-90 rounded-lg" @click="handleSort('all')"
        >全部</n-button
      >
      <n-button id="btn" class="basis-1/6 bg-white opacity-90 rounded-lg" @click="handleSort('ACG')"
        >ACG</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('VOCALOID')"
        >Vocaloid</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('J-POP')"
        >J-POP</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('大友歌')"
        >大友歌</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('爱马仕')"
        >爱马仕</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('拉拉')"
        >拉拉</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('中文')"
        >中文</n-button
      >
      <n-button
        id="btn"
        class="basis-1/6 bg-white opacity-90 rounded-lg"
        @click="handleSort('英文')"
        >英文</n-button
      >
      <n-button
        id="btn"
        class="sm:basis-1/6 sm:opacity-90 sm:rounded-lg sm:inline-flex bg-white hidden"
        @click="message.info('ovO')"
        >-</n-button
      >
    </div>
    <div>
      <n-input
        class="rounded-lg opacity-90"
        placeholder="搜索"
        v-model:value="searchValue"
        @input="handleSearch"
      >
        <template #prefix>
          <n-icon :component="SearchFilled" />
        </template>
      </n-input>
    </div>
  </div>
</template>
