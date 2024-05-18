<script setup lang="ts">
import { ChatView, LoadingView } from './views/index.ts';
import { ContainerComponent } from './components/utility/index.ts';
import { useUsers } from './composables/index.ts';


const { loadUsers, users, chatLoaded } = useUsers();

loadUsers();

</script>

<template>
  <ContainerComponent>
    <div class="flex justify-center items-center h-screen">
      <LoadingView v-if="!chatLoaded" />
      <ChatView v-else :users="users" />
    </div>
  </ContainerComponent>
</template>