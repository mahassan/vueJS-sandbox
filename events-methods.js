
      var example2 = new Vue({
            el: '#example-2',
            data: {
                name: 'Vue.js'
            },
            // define methods under the `methods` object
            methods: {
                magic: function (event) {
                // `this` inside methods points to the Vue instance
                //alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
               console.log(event);
                }
            }
            })