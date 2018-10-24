Vue.component('modal',{
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <p>Lorem Ipsum</p>
        </div>
    </div>
    <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
  </div>
    `
})
new Vue({
    el : '#root',
    data: {
        showModal : false
    }
})