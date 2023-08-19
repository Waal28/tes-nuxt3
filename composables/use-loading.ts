export const LoadingComp = () => {
  const loading = ref(true);
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  });
  return { loading };
};
