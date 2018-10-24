Vue.component('tabs',{
    template: `
    <div>
    <div class="tabs">
        <ul>
           <li v-for="tab in tabs">{{tab.name}}</li>
        </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data(){
        return {
            tabs : []
        }
    },
    mounted(){
        console.log(this.$children)
    },
    created(){
        this.tabs = this.$children;
    }
})
Vue.component('tab',{
    template: `<div><slot></slot></div>`
})
new Vue({
    el : '#data'
})