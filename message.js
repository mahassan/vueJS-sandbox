Vue.component('message',{
    props: ['title','body'],
    data(){
        return{
            invisible: true
        }
    },
    template: `
    <article class="message" v-show="invisible">
    <div class="message-header">
      {{title}}
      <button class="delete" 
       @mouseover.lazy="hideModal()" aria-label="delete"></button>
    </div>
    <div class="message-body">
     {{body}}
    </div>
</article>
    `,
    methods: {
        hideModal(){
            this.invisible = false;
        }
    }
})
new Vue({
    el: '#root',
})