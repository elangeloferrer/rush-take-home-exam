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
                <p>{{ _id }}</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        _id: Number,
    },

    created() {

    },


    data() {
        return {
            id: ''
        }
    },

    methods: {

    },

    watch: {
        id: function(val) {
            console.log('VAL ID =>', val)
        }
    }
}
</script>

<style>

</style>