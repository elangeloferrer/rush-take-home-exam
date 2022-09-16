<template>
    <div class="container card">
        <div class="card-body">
            <template>
            <div class="mt-2 mb-6 text-danger"  v-html="this.errors" v-if="this.errors !== ''">
            </div>
            </template>
            <h2 class="d-inline-block text-center">Add New User</h2>
            <form class="row g-3 p-4">
                <div class="col-md-6">
                    <label for="fname" class="form-label float-start">First Name</label>
                    <input v-model="data.fname" type="text" class="form-control" id="fname">
                </div>
                <div class="col-md-6">
                    <label for="lname" class="form-label float-start">Last Name</label>
                    <input v-model="data.lname" type="text" class="form-control" id="lname">
                </div>
                <div class="col-9">
                    <label for="address" class="form-label float-start">Address</label>
                    <input v-model="data.address" type="text" class="form-control" id="address">
                </div>
                <div class="col-3">
                    <label for="post_code" class="form-label float-start">Post Code</label>
                    <input v-model="data.post_code" type="number" class="form-control" id="post_code">
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label float-start">Email</label>
                    <input v-model="data.email" type="email" class="form-control" id="email">
                </div>
                <div class="col-6">
                    <label for="phone_number" class="form-label float-start">Phone Number</label>
                    <input v-model="data.phone_number" type="text" class="form-control" id="phone_number">
                </div>
                <div class="col-md-4">
                    <label for="username" class="form-label float-start">Username</label>
                    <input v-model="data.username" type="username" class="form-control" id="username">
                </div>
                <div class="col-md-4">
                    <label for="password" class="form-label float-start">Password</label>
                    <input v-model="data.password" type="password" class="form-control" id="password">
                </div>
                <div class="col-md-4">
                    <label for="password_confirmation" class="form-label float-start">Confirm Password</label>
                    <input v-model="data.password_confirmation" type="password" class="form-control" id="password_confirmation">
                </div>
                <div class="col-12 float-end">
                    <button @click.prevent="saveUser" type="submit" class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                fname: '',
                lname: '',
                address: '',
                post_code: '',
                phone_number: '',
                email: '',
                username: '',
                password: '',
                password_confirmation: '',
                role: 2,
            },
            errors: ''
        }
    },

    methods: {
        async saveUser() {
            this.errors = '';
            this.errors = '<ul>';
            try {
                await axios.post('/api/users', this.data);
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