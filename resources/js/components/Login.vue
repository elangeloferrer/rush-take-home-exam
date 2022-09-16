<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form method="POST" action="">
                            <div class="row mb-3">
                                <label for="username" class="col-md-4 col-form-label text-md-end">Email or Username</label>

                                <div class="col-md-6">
                                    <input v-model="form.username" id="username" type="text" class="form-control" name="username" value="" required autocomplete="username" autofocus>

                                    <!-- @error('username') -->
                                        <span class="invalid-feedback" role="alert">
                                            <!-- <strong>{{ $message }}</strong> -->
                                        </span>
                                    <!-- @enderror -->
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                <div class="col-md-6">
                                    <input v-model="form.password" id="password" type="password" class="form-control" name="password" required autocomplete="current-password">

                                    <!-- @error('password') -->
                                        <span class="invalid-feedback" role="alert">
                                            <!-- <strong>{{ $message }}</strong> -->
                                        </span>
                                    <!-- @enderror -->
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button @click.prevent="loginUser" type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            error: null
        }
    },

    methods: {
        async loginUser() {
            this.error = null;

            try {
                await this.$store.dispatch('login', this.form);
                await this.$router.push({ name: 'Users' });
            } catch (error) {
                this.error = error;
            }
        }
    },
}
</script>