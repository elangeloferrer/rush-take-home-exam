<template>
    <header>
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><h2>Take Home Exam</h2></a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link"><router-link v-if="authenticated && this.user.role === 1" :to="{ name: 'Users' }">Users</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link v-if="!authenticated && this.user.role === 1" :to="{ name: 'Home' }">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link v-if="authenticated && this.user.role === 2" :to="{ name: 'NormalUserHome' }">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link v-if="!authenticated" :to="{ name: 'Login' }">Login</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-if="authenticated" @click="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    methods: {
        async logout() {
            try {
                await this.$store.dispatch('logout');
                await this.$router.push({ name: 'Login' });
            } catch (error) {
                console.log(error)
            }
        }
    },

    computed: {
        ...mapGetters({
            user: 'user',
            authenticated: 'authenticated'
        })
    }
}
</script>

<style>

</style>