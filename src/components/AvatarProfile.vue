<script setup lang="ts">
import { ref } from "vue";

const showLie = ref(true);

function handleJump(target: string) {
  switch (target) {
    case "live":
      window.open("https://live.bilibili.com/850221");
      break;
    case "profile":
      window.open("https://space.bilibili.com/52522");
      break;
    case "musicList":
      window.open("https://docs.qq.com/doc/DQ2t2R3lIWVZRbWVq");
      break;
    default:
      console.error("Unknown target:", target);
  }
}
</script>
<template>
  <div class="h-1/4 flex content-center">
    <div class="basis-2/5 flex justify-center">
      <img src="../assets/avatar.jpg" alt="avatar" class="h-60 object-contain rounded-full" />
    </div>
    <div class="basis-3/5 flex flex-col justify-evenly">
      <n-card class="opacity-90 rounded-lg">
        <ul>
          <li>虚拟医生露蒂丝！ 露蒂丝=ルティス=Rutice，大家可以叫我「露医生」！</li>
          <li>
            因为很重要，所以强调一下：
            <div v-if="showLie" @mouseover="showLie = false">
              是清楚良心的人类医生！ 头上不是驾驶员（是鸽鸽），下面也不是什么机甲驾驶舱！
            </div>
            <div v-else @mouseout="showLie = true">
              是清除良心的<del>人类</del>医生！ 头上是驾驶员（鸽鸽），下面是机甲驾驶舱！
            </div>
          </li>
          <li>经营了一家「咕咕诊所」，可使用中/日/英文就诊（?</li>
          <li>日常诊疗业务是唱歌/杂谈/游戏/工作音</li>
          <li>开门时间……？诊所随机开门无可厚非吧。 休诊日一般会掉落动态通知（？</li>
          <li>歌单里的歌好多可能都忘了具体怎么唱了！</li>
          <li>艾宾浩斯遗忘曲线！！！！懂？？？？？</li>
          <li class="mt-4 flex gap-5">
            <n-button @click="handleJump('live')">直播间</n-button>
            <n-button @click="handleJump('profile')">个人主页</n-button>
            <n-button @click="handleJump('musicList')">官方歌单</n-button>
          </li>
        </ul>
      </n-card>
    </div>
  </div>
</template>
