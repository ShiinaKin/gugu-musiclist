import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { MusicData } from "@/type/MusicData";

export const useMusicStore = defineStore("musicCounter", () => {
  const rawMusicList: Ref<Array<MusicData>> = ref([]);
  const musicList: Ref<Array<MusicData>> = ref([]);
  const getSongData = async () => {
    return fetch("./src/assets/song.json")
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching JSON:", error));
  };
  return { rawMusicList, musicList, getSongData };
});
