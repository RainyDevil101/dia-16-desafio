<script setup lang="ts">
import type { Message } from '../../interfaces/index.ts';

const props = defineProps<{
  message: Message;
  bgColorOne: string;
  bgColorTwo: string;
}>();

const { message } = props;


const isLeft = message.userPosition === '1';

</script>

<template>
  <li class="mb-2" :style="{ textAlign: isLeft ? 'left' : 'right' }">
    <div class="inline-block text-base max-w-xs">
      <span class="block p-2">{{ message.userName }}</span>
      <span class="block p-2 rounded-lg break-words message-text" :style="{ backgroundColor: isLeft ? bgColorOne : bgColorTwo }">{{ message.text }}</span>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  width: 100%;
}

.message-text {
  display: inline-block;
  max-width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
}
</style>