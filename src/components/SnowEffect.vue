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
                    this.p5.noStroke()
                    this.p5.frameRate(60)
                    this.p5.createCanvas(this.$el.clientWidth, this.$el.clientHeight).parent('canvas_container')
                }
            },

            draw () {
                const balls = []

                for (let i = 0; i < 350; i++) balls.push(
                    new Ball(this.p5, {
                        position: { x: 0 + Math.random() * this.$el.clientWidth, y: -100 + Math.random() * this.$el.clientHeight },
                        size: { width: 5, height: 5 },
                        padding: { x: 60, y: 50 },
                        container_size: { width: this.$el.clientWidth, height: this.$el.clientHeight }
                    })
                )

                this.p5.draw = () => {
                    this.p5.background('#141414')

                    for (let i = 0; i < balls.length; i++) {
                        balls[i].display()
                        balls[i].move({
                            limitMoving: { x: this.$el.clientWidth, y: this.$el.clientHeight }
                        })
                    }
                }
            }
        }
    }
</script>
