<template>
  <nav-bar :navber="navbar" />
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        Show List
      </h1>
      <div class="row">
        <div class="col-md-12">
          <table class="table-fixed">
            <thead>
              <tr class="text-white bg-black">
                <th class="w-1/4 ...">FullName</th>
                <th class="w-1/4 ...">Email</th>
                <th class="w-1/4 ...">Phone</th>
                <th class="w-1/4 ...">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="results in result"
                :key="results.id"
                class="bg-blue-200"
              >
                <th>
                  {{ results.Fullname }}
                </th>
                <th>{{ results.Email }}</th>
                <th>{{ results.Phone }}</th>
                <th>
                  <button
                    @click="deletedUser(results.id)"
                    class="m-1 bg-white"
                  >
                    <span class="material-icons-outlined">  <img src="@/assets/delete.svg" alt="" /> </span>
                    
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      url: "http://localhost:5000/user",
      result: [],
    };
  },
  methods: {
    async getInfoUser() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`error ${error}`);
      }
    },
    async deletedUser(deleteuser) {
      try {
        await fetch(`${this.url}/${deleteuser}`, {
          method: "DELETE",
        });
        this.result = this.result.filter(
          (results) => results.id !== deleteuser
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
  },
  async created() {
    this.result = await this.getInfoUser();
  },
};
</script>

<style scoped>

</style>