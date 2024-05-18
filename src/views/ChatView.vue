<script setup lang="ts">
import { ref } from 'vue';
import { UserProfile, ChatScreen } from '../components/chat/index.ts';
import type { User, Message } from '../interfaces/index.ts';

const props = defineProps<{
  users: User[];
}>();

const { users } = props;

const userOne = users[0];
const userTwo = users[1];

const messages = ref<Message[]>([]);
const bgColorOne = ref<string>('#1E90FF');
const bgColorTwo = ref<string>('#008000');


const handleMessage = (message: Message) => {
  messages.value.push(message);
}

const changeColorOne = (value: string) => {
  bgColorOne.value = value;
}

const changeColorTwo = (value: string) => {
  bgColorTwo.value = value;
}


</script>

<template>
  <div class="flex p-2 gap-2 w-full">
    <UserProfile @send-message="handleMessage" :user="userOne" userPosition="1" :bgColor="bgColorOne" @change-color="changeColorOne" />
    <ChatScreen :messages="messages" :bgColorOne="bgColorOne" :bgColorTwo="bgColorTwo" />
    <UserProfile @send-message="handleMessage" :user="userTwo" userPosition="2" :bgColor="bgColorTwo" @change-color="changeColorTwo" />
  </div>
</template>