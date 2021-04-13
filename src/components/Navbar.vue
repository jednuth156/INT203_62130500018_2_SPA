<template>
  <header class="flex justify-between place-items-center">
    <div class="flex justify-center"></div>
    <div class="space-x-10">
      <router-link to="/" class="inline-block">Home</router-link>
      <router-link to="/about" class="inline-block">AboutUs</router-link>
    </div>
  </header>
</template>
<style scoped>
* {
  font-size: 22px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  background-color: rgb(0, 0, 0);
  color: white;
}
header {
  padding: 8px 5%;
}
</style>