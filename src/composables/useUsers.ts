import { ref } from 'vue';
import axios from 'axios';

const useUsers = () => {
  const users = ref([]);
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const chatLoaded = ref(false);

  const loadUsers = async () => {
    loading.value = true;
    chatLoaded.value = false;
    error.value = null;

    try {
      const response = await axios.get(
        'https://randomuser.me/api/?inc=name,picture&results=2'
      );
      users.value = response.data.results;
      chatLoaded.value = true;
    } catch (err) {
      error.value = new Error('Unknown error occurred');
    } finally {
      loading.value = false;
    }
  };
  return { users, loading, error, loadUsers, chatLoaded };
};

export default useUsers;
