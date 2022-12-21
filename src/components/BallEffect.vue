<template>
    <div id="canvas_container" class="w-full h-full absolute">
        
    </div>
</template>

<script>
    import P5 from 'p5'
    import Ball from '../composabels/shapes'

    export default {
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
                    this.p5.createCanvas(this.$el.clientWidth, this.$el.clientHeight).parent('canvas_container')
                }
            },

            draw () {
                const balls = []
                for (let i = 0; i < 5; i++) balls.push(new Ball())

                this.p5.draw = () => {
                    for (let i = 0; i < balls.length; i++) {
                        balls[i].display(this.p5, {
                            position: { x: 80, y: (i + 1) * 20 },
                            size: { width: 60, height: 60 }
                        })
                    }
                }
            }
        }
    }
</script>
