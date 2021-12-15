<template>
    <h2 class="mb-5">Create Post :</h2>
    <div class="col-md-6">
        <form @submit.prevent="validate">
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" v-model.lazy.trim="form.title">
                <div class="form-text text-danger">
                    {{ form.titleErrorText }}
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Body</label>
                <textarea class="form-control" v-model.lazy.trim="form.body"></textarea>
                <div class="form-text text-danger">
                    {{ form.titleErrorBody }}
                </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">
                <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                Create Post
            </button>
        </form>

    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import axios from 'axios';
import Swal from 'sweetalert2'
export default {
    setup(){
        const form = reactive({
            title: "",            
            body: "",
            titleErrorText: '',
            titleErrorBody: '',
        });

        const loading = ref(false)

        function validate(){
            if(form.title === ""){
                form.titleErrorText = "Title is required..."
            }else{
                form.titleErrorText = ""
            }

            if(form.body === ""){
                form.titleErrorBody = "Body is required..."
            }else{
                form.titleErrorBody = ""
            }

            if(form.title !== "" && form.body !== ""){                
                loading.value = true
                createPost()
            }
        }

        function createPost(){
            axios
            .post('https://jsonplaceholder.typicode.com/posts',{
                title: form.title,
                body: form.body,
                userId: 1
            })
            .then(function () {
                loading.value = false
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Post created successfully...',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }

        return { form, validate, loading }
    }
}
</script>

<style>

</style>