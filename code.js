const fullname = Vue.createApp({
    data: function() {
        return {
            name: 'Cassidy',
            surname: 'Manuel'
        }
    }
});
fullname.mount('#fullname');