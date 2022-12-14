import { Bubble } from './shapes'

export class BubbleAnimation extends Bubble  {
    constructor (canvas) {
        super(canvas)

        this.canvas = canvas
        this.position = {
            x: 0,
            y: 0
        }
    }

    movingBubble ({bubble = {fill: ''}, limit = true}) {
        function drawBubble () {
            this.position.x += 2
            // this.position.y += .5
            this.drawBubble({fill: 'red', size: 15, position: {x: this.position.x, y: this.position.y}})
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        drawBubble.apply(this)

        setTimeout(() => this.movingBubble(),10)
    }
}
