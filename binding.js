Vue.component('card-info',{
    template: `
        <div id="root">
        <button v-on:click="{'is-loading': true}">Click me</button>
        {{isLoading}}
    </div>
    `,
    data(){
        return{
            isLoading: false
        }
    },
    methods : {
        toggleClass(){
            this.isLoading = !this.isLoading;
        }
    }
})
new Vue({
    el: '#root',
    
})