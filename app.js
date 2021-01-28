//https://jsbeginners.com/javascript-balloon-popping-project/
//Con transición entre el globo y el POP!

const app = Vue.createApp({
    data() {
        return {
            explotado: 0,
            balloons: 16,
            globo: true,
            pop: false,
        }
    },
    methods: {
        randomColor() { 
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            console.log(randomColor)
            this.balloons.style.backgroundColor = randomColor
            //return randomColor
        },
        explotarGlobo(el) {
            el.style.cursor = 'pointer'
            el.style.backgroundColor = "#ededed"

            this.globo = false
            this.pop = true
            this.explotado++

            el.removeEventListener("mouseover", explotarGlobo(el))
        }
    },
    computed: {
    }
})

app.directive('pop', {
    beforeMount(el, binding, vnode) { 
        document.addEventListener("mousemove", () => {
            //setTimeout(explotarGlobo(el), binding.value * 1000)
        }, false)
    }
})

app.mount('#app')