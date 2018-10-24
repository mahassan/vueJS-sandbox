Vue.component('card' , {
    props: ['title','body'],
    data() {
        return {
            isVisible: true
        }
    },
    template : `
    <div class="card-body" v-show="isVisible">
    <button type="button" class="close" aria-label="Close" @click="dismiss()">
        <span aria-hidden="true">&times;</span>
    </button>
       <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{body}}</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
    `,
    methods : {
        dismiss(){
           this.isVisible = false;
        }
    }
})

new Vue({
    el: "#root"
})