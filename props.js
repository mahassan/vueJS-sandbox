Vue.component('blog-post', {
    props:['post'],
    template:`
    <div class="blog-post">
    <h3>{{ post.title }}</h3>
  </div>  
    `
})
new Vue({
    el : '#app',
    data: {

    }
})