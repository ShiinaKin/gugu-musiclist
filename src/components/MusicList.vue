<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMessage } from "naive-ui";
import { useMusicStore } from "@/stores/counter";
import { getMusicListFromTencentDoc } from "@/util/MusicUtils";
import type { MusicData } from "@/type/MusicData";

const message = useMessage();
const musicStore = useMusicStore();

const columns = ref([
  {
    title: "歌名",
    key: "name"
  },
  {
    title: "歌手",
    key: "singer"
  },
  {
    title: "曲风",
    key: "label",
    render(row: MusicData) {
      return row.label.join(", ");
    }
  },
  {
    title: "备注",
    key: "remark"
  }
]);

const rowProps = (row: MusicData) => {
  return {
    style: "cursor: pointer;",
    onClick: () => {
      navigator.clipboard.writeText(`点鸽 ${row.name}`);
      message.success("已复制点歌信息");
    }
  };
};

onMounted(async () => {
  try {
    const rawMusicList = await getMusicListFromTencentDoc();
    musicStore.rawMusicList = rawMusicList as Array<MusicData>;
    musicStore.musicList = rawMusicList as Array<MusicData>;
  } catch (error) {
    message.error("获取歌单失败，请刷新重试");
  }
});
</script>
<template>
  <div class="flex flex-col">
    <div class="pl-2 bg-white rounded-tl-lg rounded-tr-lg opacity-90 text-sm text-gray-700">
      点击条目任意位置可复制点歌弹幕 当前类目共：{{ musicStore.musicList.length }}首歌
    </div>
    <n-data-table
      size="medium"
      :columns="columns"
      :data="musicStore.musicList"
      :row-props="rowProps"
      class="rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg opacity-90"
    />
  </div>
</template>
<style scoped>
:deep(.n-data-table-wrapper) {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>
