<template>
    <form @submit.prevent="Submit">
        <label for="">Username</label>
        <input type="text" v-model="form.username" required>
        <br><br>
        <label for="">Password</label>
        <input type="text" v-model="form.password" required>
        <br><br>
        <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        Submit() {
            this.$store.commit('login', this.form.username)
        }
    }
}
</script>