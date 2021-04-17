<template>
  <nav-bar :navber="navbar" />
  <div class="flex items-center min-h-full bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="max-w-md p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div class="text-center">
          <!-- Content goes here -->
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Create Your User
          </h1>
          <div class="m-7">
            <form @submit="SubmitUser()">
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >Full Name</label
                >
                <input
                  v-model="user.fullname"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >Email Address</label
                >
                <input
                  v-model="user.email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="phone"
                  class="text-sm text-gray-600 dark:text-gray-400"
                  >Phone Number</label
                >
                <input
                  v-model="user.phone"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+99...."
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <page-button ton="Create User"></page-button>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageButton from "../components/PageButton.vue";

export default {
  name: "Home",
  components: { PageButton },
  data() {
    return {
      user: {
        fullname: "",
        email: "",
        phone: "",
      },
      url: "http://localhost:5000/user",
      result: [],
    };
  },

  methods: {
    SubmitUser() {
      this.addNewUser({
        fullname: this.user.fullname,
        email: this.user.email,
        phone: this.user.phone,
      });
      this.$router.push('/about')
    },

    async addNewUser(newUser) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Fullname: newUser.fullname,
            Email: newUser.email,
            Phone: newUser.phone,
          }),
        });
        const data = await res.json();
        this.result = [...this.result, data];
      } catch (error) {
        console.log(`Colud not save! ${error}`);
      }
    },
  },
};
</script>
