<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../../interfaces/User.interface.ts';

const props = defineProps<{
  user: User;
  userPosition: string;
  bgColor: string;
}>();
const emits = defineEmits(['send-message', 'change-color']);

const { user, userPosition } = props;

const { name, picture } = user

const text = ref<string>('');

const setEmail = () => {

  if (!text.value) return;

  if (text.value.trim() === '') return;

  emits('send-message', {
    userPosition: userPosition,
    text: text.value,
    userName: name.first + ' ' + name.last,
  });
}

const changeColor = (event: Event) => {
  const selectedColor = (event.target as HTMLSelectElement).value;
  console.log(selectedColor);
  emits('change-color', selectedColor);
}


</script>

<template>
  <div class="p-4 bg-gray-900 text-white rounded-lg shadow-lg max-w-md mx-auto flex flex-col justify-between">
    <div class="">
      <img class="w-36 h-36 rounded-full mx-auto border-4 border-gray-700" :src="picture.large" alt="Profile Picture">
      <p class="text-center mt-4 text-2xl font-semibold">{{ name.first + ' ' +  name.last}}</p>
    </div>
    <select :style="{ backgroundColor: bgColor }" @change="changeColor">
      <option value="#1E90FF" style="background-color: #1E90FF;"></option>
      <option value="#008000" style="background-color: #008000;"></option>
      <option value="#800080" style="background-color: #800080;"></option>
      <option value="#FF8C00" style="background-color: #FF8C00;"></option>
    </select>
    <div class="mt-6">
      <textarea
        class="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-base"
        name="message" id="message" rows="4" placeholder="Escribe tu mensaje aquí..." v-model="text"></textarea>
      <button
        class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        @click="setEmail">
        Enviar
      </button>
    </div>
  </div>
</template>