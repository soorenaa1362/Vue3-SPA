<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <p>
                    Laravel makes API authentication a breeze using Laravel Passport, 
                    which provides a full OAuth2 server implementation for your Laravel 
                    application in a matter of minutes. Passport is built on top of the 
                    League OAuth2 server that is maintained by Andy Millington and Simon Hamp.
                </p>
                <router-link class="btn btn-primary" :to="{name: 'users'}">Users</router-link>
                <router-link class="btn btn-info ms-3" :to="{name: 'posts'}">Posts</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>