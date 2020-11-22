<template>
  <div>
    <h2>Posts</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
      <img :src="post.image" alt="">
      <h3>{{post.description}}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button class="update">Update</button>
      </router-link>
      <button class="delete" type="button" v-on:click="deletePost(post.id)">Delete</button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from"../firebase-db";
  export default {
    data() {
      return {
        posts: []
      };
    },
    methods: {
      deletePost(id) {
        console.log(id);
        postRef.doc(id).delete();
      }
    },
    firestore: {
      posts: postRef
    }
  };
</script>

<style>
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}



.update {
  padding: 10px;
  width: 40%;
  margin-right: 10px;
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
}

.delete {
  width: 40%;
  padding: 10px;
  margin-left: 10px; 
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
}

.delete:hover, .update:hover {
  transform: scale(1.03);
}



</style>