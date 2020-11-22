<template>
  <div>
    <h1>Create new post page</h1><br><br>
    <form class="container">
      <input class="type" type="text" v-model="post.description" placeholder="Type a description here" required><br>
      <input type="file" ref="fileInput" accept="image/*" v-on:change="previewImage"><br><br>
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">Choose Image</button><br>
      <div>
        <img :src="post.image" class="image-preview">
      </div>
      <button class="create-post" type="button" v-on:click="createPost">Create post</button>
    </form>
  </div>
</template>



<script>
import { postRef } from '../firebase-db'
export default {
  name: 'Create',
  data () {
    return {
      post: {
        description: '',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
  }
}



</script>

<style>
.container {
  border: 1px solid;
  padding: 50px;
  margin-left: 32%;
  margin-right: 32%;
  background-color: #F6F4F4;
}

input[type="file" i] {
  display: none;
}

.type {
  width: 72%;
  padding: 17px;
  border: 0.5px solid;
  font-size: 15px;
}

.choose-image {
  width: 80%;
  padding: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: rgb(170, 169, 169);
  color: white;
}

.choose-image:hover {
  transform: scale(1.03);
}

.create-post {
  width: 50%;
  margin-top: 55px;
  padding: 15px;
  font-size: 15px;
  background-color: #008CBA;
  border: none;
  color: white;
  font-size: 17px;
  border-radius: 30px;
  cursor: pointer;
}

.create-post:hover {
  transform: scale(1.03);
}
</style>
