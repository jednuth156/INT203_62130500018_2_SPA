<template>
  <nav-bar :navber="navbar" />
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        Show List
      </h1>
      <div class="flex flex-col justify-center ">
        <div class="w-full ">
          <table class="mx-auto table-fixed">
            <thead>
              <tr class="text-white bg-black ">
                <th class="w-1/4 ...">FullName</th>
                <th class="w-1/4  ...">Email</th>
                <th class="w-1/4  ...">Phone</th>
                <th class="w-1/4  ...">Action</th>
              </tr>
            </thead>
            <tbody>
              
              <tr
                v-for="(results,index) in result"
                :key="results.id"
                class="bg-blue-200"
              >
            
                <th v-if="isedit[index]">{{ results.Fullname }}</th>
                <th v-else><input type="text" v-model="results.Fullname" :placeholder="results.Fullname"></th>
                <th v-if="isedit[index]">{{ results.Email }}</th>
                <th v-else><input type="email" id="email" v-model="results.Email" :placeholder="results.Email"  required></th>
                <th v-if="isedit[index]">{{ results.Phone }}</th>
                <th v-else><input type="text" v-model="results.Phone" :placeholder="results.Phone"></th>
              
                <th>
                  <button @click="editList(index,results)" class="m-1 bg-white">
                  <img src="@/assets/edit.svg" alt="" />
                  </button>
                  <button @click="deletedUser(results.id)" class="m-1 bg-white">
                    <img src="@/assets/delete.svg" alt="" />
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
      isedit: [],
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
    async editUser(edit){
      try {
        const res = await fetch(`${this.url}/${edit.id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              Fullname:edit.Fullname,
              Email:edit.Email,
              Phone:edit.Phone,
            }),
        });
        const data = await res.json();
        this.result = this.result.map((results) => 
        results.id === edit.id
        ? {
          ... results,
              Fullname:data.Fullname,
              Email:data.Email,
              Phone:data.Phone,
        }
        : results
        );
      }catch(error) {
        console.log(`Could not edit! ${error}`);
      }
    } ,
    editList(index,infos){
      this.isedit[index] = !this.isedit[index];   
      if (this.isedit[index]) {
        this.editUser({
          Fullname: infos.Fullname,
          Email:infos.Email,
          Phone:infos.Phone,
          id: infos.id,
        })
        console.log(infos)
      }
    },
    ChangeEdit(){
      for(let i = 0; i < this.result.length;i++){
        this.isedit[i] = true
        
      }
    }
    },
  async created() {
    this.result = await this.getInfoUser();
    this.ChangeEdit();
  },
};
</script>
