<template>
  <div>
    <!-- Nav bar -->
    <header
      class="fixed flex flex-col w-full bg-white sm:relative pin-t pin-r pin-l"
    >
      <nav
        class="flex flex-col items-center justify-between w-full px-4 py-1 bg-white border-b-4 border-teal-500 shadow sm:flex-row sm:px-6 sm:shadow-none"
      >
        <div
          class="flex flex-row flex-no-wrap items-center self-start justify-between w-full sm:w-auto sm:self-center sm:flex-none"
        ></div>
        <a class="py-1 no-underline"
          ><h1 class="text-lg font-bold text">Get Start</h1></a
        >
        <ul class="flex-col">
          <li class="nav-item">
            <router-link
              to="/"
              class="w-full py-2 text-lg font-bold no-underline text-dark hover:text-red sm:w-auto sm:pr-4 sm:py-1 sm:pt-2"
              >Create User</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="w-full py-2 text-lg font-bold no-underline text-dark hover:text-red sm:w-auto sm:pr-4 sm:py-1 sm:pt-2"
              >View User</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <!-- Router view -->
    <div class="mt-5 containew">
      <router-view></router-view>
    </div>
  </div>
</template>
