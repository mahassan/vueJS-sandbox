Vue.component('tasks',{
    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root',
})