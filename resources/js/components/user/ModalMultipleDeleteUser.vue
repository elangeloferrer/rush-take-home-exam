<template>
    <div class="modal" id="deleteMultipleUserModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Delete All Selected User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Are you sure?</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeDeleteMultipleUserModalBtn">Close</button>
                <button type="button" @click="deleteUsers()" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userIds'],

    mounted() {
        this.$root.$on("selectedIds", () => {
            return this.selectedIds();
        });
    },

    data() {
        return {
            ids: []
        }
    },

    methods: {
        selectedIds: function() {
            this.ids = this.userIds
            console.log('selectedIds =>', this.ids);
        },

        deleteUsers: async function () {
            try {
                let res = await axios.post("/api/users/delete", { userIds : this.ids });
                console.log('DELETE MULTIPLE USERS success', res);
                document.getElementById("closeDeleteMultipleUserModalBtn").click();
                this.$root.$emit("getAllUsers");
            } catch (error) {
                console.log('DELETE MULTIPLE USERS error', error);
            }
        }
    }
}
</script>

<style>

</style>