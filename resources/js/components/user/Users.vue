<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <h2 class="d-inline-block float-start">List of Users</h2>
            <button type="button" class="btn btn-success float-end"><router-link class="router-link" :to="{ name: 'AddNewUser' }"> Add </router-link></button>
            <button type="button" class="btn btn-danger float-end" @click="deleteMultipleUser()">Delete Selected User</button>
            <button type="button" hidden  data-bs-toggle="modal" data-bs-target="#deleteMultipleUserModal" id="showDeleteMultipleUserModalBtn"></button>
        </div>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <td><input type="checkbox" @change="checkAllBox($event)"> </td>
                    <th class="text-center">#</th>
                    <th class="text-center">Lastname</th>
                    <th class="text-center">Firstname</th>
                    <th class="text-center">Address</th>
                    <th class="text-center">Phone Number</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Username</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="this.users">
                    <template v-for="(v, i) in this.users">
                        <tr>
                            <td>
                                <input type="checkbox" class="checkbox" :value="v.id" @change="checkBox($event)"> 
                            </td>
                            <td>{{ i+1 }}</td>
                            <td>{{ v.lname }}</td>
                            <td>{{ v.fname }}</td>
                            <td>{{ v.address }}, {{ v.post_code }}</td>
                            <td>{{ v.phone_number }}</td>
                            <td>{{ v.email }}</td>
                            <td>{{ v.username }}</td>
                            <td>
                                <button type="button" @click.prevent="deleteUser(v.id)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                                    Delete
                                </button>
                                <button type="button" class="btn btn-warning float-end"><router-link class="router-link" :to="{ name: 'EditUser', params: { userId: v.id } }">Edit</router-link></button>

                            </td>
                        </tr>
                    </template>
                </template>
                <template v-else>
                        <tr>
                            <td colspan="8" class="text-center">No data found.</td>
                        </tr>
                </template>
            </tbody>
        </table>
        <ModalDeleteUser :user-id="id"/>
        <ModalMultipleDeleteUser :user-ids="ids"/>
    </div>
</template>

<script>
import ModalDeleteUser from './ModalDeleteUser.vue';
import ModalMultipleDeleteUser from './ModalMultipleDeleteUser.vue';

export default {
    created() {
        this.getAllUsers();
    },

    mounted() {
        this.$root.$on("getAllUsers", () => {
            let checkBoxes = document.getElementsByClassName("checkbox");
            for(var i = 0; i < checkBoxes.length; i++) {
                checkBoxes[i].checked = false;
            }
            this.ids.splice(0, this.ids.length)
            this.$root.$emit("selectedIds");
            return this.getAllUsers();
        });
    },

    data() {
        return {
            users: [],
            id: '',
            ids: []
        }
    },

    methods: {
        getAllUsers: async function () {
            try {
                let users = await this.$store.dispatch('getAllUsers');
                this.users = users.data.data;
            } catch (error) {
                
            }
        },

        editUser(value) {
            this.id = value;
            // console.log('push id to edituser', value)
            this.$router.push({ name: 'EditUser' });
        },

        deleteUser(value) {
            this.id = value;
        },

        deleteMultipleUser() {
            if(this.ids.length > 0) {
                document.getElementById("showDeleteMultipleUserModalBtn").click();
            }
        },

        checkAllBox(event) {
            console.log(event.target.checked)
            let checkBoxes = document.getElementsByClassName("checkbox");
            if(event.target.checked) {
                for(var i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].checked = true;

                    let isExist = this.ids.includes(checkBoxes[i].value)
                    if(!isExist) {
                        this.ids.push(checkBoxes[i].value);
                    }
                }
            } else {
                for(var i = 0; i < checkBoxes.length; i++) {
                    checkBoxes[i].checked = false;
                    this.splice(checkBoxes[i].value);
                }
            }
            this.$root.$emit("selectedIds");
            // console.log('this.ids', this.ids);
        },

        checkBox(event) {
            if(event.target.checked) {
                this.ids.push(event.target.value);
                // console.log('after push => ', this.ids);
            } else {
                this.splice(event.target.value);
            }
            this.$root.$emit("selectedIds");
        },

        splice(value) {
            const _array = this.ids;
            let arrayIndex
            while((arrayIndex = _array.indexOf(value)) > -1)
            {
            _array.splice(arrayIndex, 1);
            }
            this.ids = _array;
            console.log('after splice => ', this.ids);
        }
    },

    components: {
        ModalDeleteUser,
        ModalMultipleDeleteUser,
    }
}
</script>

<style scoped>

</style>