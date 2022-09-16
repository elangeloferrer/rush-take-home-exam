<template>
    <div class="modal" id="deleteUserModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Delete User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Are you sure?</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeBtn">Close</button>
                <button type="button" @click="deleteUser(userId)" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userId'],

    data() {
        return {
            id: this.userId
        }
    },

    methods: {
        deleteUser: async function (id) {
            try {
                let res = await axios.delete("/api/users/" + id);
                console.log('delete user success', res);
                document.getElementById("closeBtn").click();
                this.$root.$emit("getAllUsers");
            } catch (error) {
                console.log('delete user error', error);
            }
        }
    }
}
</script>

<style>

</style>