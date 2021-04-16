<template>
  <div>
    <button class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"> 
      {{ ton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PageButton",
  props: {
    ton: String,
  },
};
</script>

<style></style>