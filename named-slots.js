Vue.component('panel-custom' ,{
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="header">
                This is default title
            </slot>
        </p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
             <slot name="body">
                This is going to work, I hope!
            </slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
    `
})

new Vue({
    el: '#root'
})