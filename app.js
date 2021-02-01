const app = Vue.createApp({
    data() {
        return {
            explotados: 0,
            balloons: [],
        }
    },
    created(){
        for (let i = 0; i < 16; i++) {
            this.balloons.push({
                explotado: false
            })            
        }
    },
    methods: {
        randomColor() { 
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            
            return randomColor
        },
        explotarGlobo(balloon) {
            balloon.explotado = true

            this.explotados++
        },
        inflarGlobo(balloon) {
            balloon.explotado = false

            this.explotados--
        }
    },
    computed: {
        isEndGame(){
            return this.explotados == 16
        }
    }
})

app.mount('#app')