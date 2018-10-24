Vue.component('task-list',{
    template: `
        <div>
            <task v-for="tasks in details">{{tasks.desc}}</task>
        </div>
    `,
    data(){
        return{
            details: [
                {desc: 'Go to the store', complete: true},
                {desc: 'Go to the Mall', complete: true},
                {desc: 'Go to Home', complete: true}
            ]
        }
    }
})
Vue.component('task',{
    template: "<li><slot></slot></li>"
})

new Vue({
    el: '#root'
})