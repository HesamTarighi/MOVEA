<template>
    <div id="canvas_container" class="absolute">
        
    </div>
</template>

<script>
    import P5 from 'p5'
    
    export default {
        props: ['width', 'height'],
        
        data () {
            return {
                p5: null
            }
        },

        mounted () {
            new P5((p5 => this.p5 = p5).bind(this))

            this.setup()
            this.draw()
        },

        methods: {
            setup () {
                this.p5.setup = () => {
                    this.p5.createCanvas(this.width, this.height).parent('canvas_container')
                }
            },

            draw () {
                this.p5.draw = () => {
                    this.p5.background(102)
                    this.p5.ellipse(80, 80, 60, 60)
                }
            }
        }
    }
</script>
