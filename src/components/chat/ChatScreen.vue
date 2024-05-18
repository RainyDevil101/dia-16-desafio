<script setup lang="ts">
import { onUpdated } from 'vue';
import type { Message } from '../../interfaces/index.ts';
import { MessageText } from './index.ts';

const props = defineProps<{
  messages: Message[];
  bgColorOne: string;
  bgColorTwo: string;
}>();

const scrollToBottom = () => {
  const chatBox = document.getElementById('chat-box');
  if (chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

onUpdated(scrollToBottom);

</script>

<template>
  <div id="chat-box" class="bg-[#1A1B26] w-full rounded-lg shadow-lg p-4 overflow-auto h-[400px] min-w-[300px]">
    <ul class="block">
      <MessageText v-for="message in messages" :key="message.text" :message="message" :bgColorOne="bgColorOne" :bgColorTwo="bgColorTwo" />
    </ul>
  </div>
</template>