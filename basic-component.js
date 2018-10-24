Vue.component('task-list',{
    
    template: `
        <div>
            <task v-for="task in tasks">{{task.task}}</task>
        </div>
    `,
    data(){
        return {
            tasks: [
                {task: 'Go to the store', completed: true},
                {task: 'Go to the mall', completed: true},
                {task: 'Go to the school', completed: true},
                {task: 'Go to the office', completed: true}
            ]
        }
    }
})

Vue.component('task',{
    template : `<li><slot></slot></li>`
})
new Vue({
    el: '#app',

})