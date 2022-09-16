<template>
    <div class="container card">
        <div class="card-body">
            <template>
            <div class="mt-2 mb-6 text-danger"  v-html="this.errors" v-if="this.errors !== ''">
            </div>
            </template>
            <h2 class="d-inline-block text-center">Edit User</h2>
            <form class="row g-3 p-4">
                <div class="col-md-6">
                    <label for="fname" class="form-label float-start">First Name</label>
                    <input v-model="data.fname" type="text" class="form-control" id="fname">
                </div>
                <div class="col-md-6">
                    <label for="lname" class="form-label float-start">Last Name</label>
                    <input v-model="data.lname" type="text" class="form-control" id="lname">
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label float-start">Email</label>
                    <input v-model="data.email" type="email" class="form-control" id="email">
                </div>
                <div class="col-md-6">
                    <label for="phone_number" class="form-label float-start">Phone Number</label>
                    <input v-model="data.phone_number" type="text" class="form-control" id="phone_number">
                </div>
                <div class="col-9">
                    <label for="address" class="form-label float-start">Address</label>
                    <input v-model="data.address" type="text" class="form-control" id="address">
                </div>
                <div class="col-3">
                    <label for="post_code" class="form-label float-start">Post Code</label>
                    <input v-model="data.post_code" type="number" class="form-control" id="post_code">
                </div>
                <div class="col-12 float-end">
                    <button @click.prevent="updateUser" type="submit" class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getUserInfo();
    },

    data() {
        return {
            id: this.userId,
            data: {
                fname: '',
                lname: '',
                address: '',
                post_code: '',
                phone_number: '',
                id: ''
            },
            errors: ''
        }
    },

    methods: {
        getUserInfo: async function () {
            let response = await axios.get('/api/users/' + this.$route.params.userId)
            // data.value = response.data.data
            console.log('getUserInfo', response.data.data)
            this.data.fname = response.data.data.fname;
            this.data.lname = response.data.data.lname;
            this.data.address = response.data.data.address;
            this.data.post_code = response.data.data.post_code;
            this.data.email = response.data.data.email;
            this.data.phone_number = response.data.data.phone_number;
            this.data.id = response.data.data.id;
        },

        async updateUser() {
            this.errors = '';
            this.errors = '<ul>';
            try {
                await axios.patch('/api/users/' + this.$route.params.userId, this.data);
                await this.$router.push({ name: 'Users' });
            } catch (error) {
                if(error.response.status === 422) {
                    
                    for (const key in error.response.data.errors) {
                        this.errors += '<li>';
                        this.errors += error.response.data.errors[key][0] + ' </li>';
                    }
                    this.errors += '</ul>';
                }
            }
        }
    },
}
</script>

<style>

</style>