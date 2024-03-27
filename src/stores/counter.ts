import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { MusicData } from "@/type/MusicData";

export const useMusicStore = defineStore("musicCounter", () => {
  const rawMusicList: Ref<Array<MusicData>> = ref([]);
  const musicList: Ref<Array<MusicData>> = ref([]);
  return { rawMusicList, musicList };
});
