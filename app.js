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
        explotarGlobo(balloon) {
            balloon.explotado = true

            this.explotados++
        },
        inflarGlobo(balloon) {
            balloon.explotado = false

            this.explotados--
        },
        resetGame(){
            this.balloons.forEach(function(balloon){
                balloon.explotado = false
            })

            this.explotados = 0
        },
    },
    computed: {
        isEndGame(){
            return this.explotados == 16
        }
    }
})

app.mount('#app')