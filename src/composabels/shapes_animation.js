import { Bubble } from './shapes'

export class BubbleAnimation extends Bubble  {
    constructor (canvas) {
        super(canvas)

        this.canvas = canvas
    }

    movingBubble (bubble) {
        let {
            fill = 'red',
            size = 15,
            position = { x: 0, y: 0 },
            count = 1
        } = bubble || {}
        let moving_position = { x: position.x + count * 10, y: position.y + count * 10 }

        
        function moving () {
            moving_position.x += 5
            moving_position.y += .5
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.draw({fill, size, position: moving_position})
        }

        setInterval(() => moving.apply(this), 30)
    }
}
