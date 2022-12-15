export class Bubble {
    constructor (canvas) {
        this.ctx = canvas.getContext('2d')
    }

    draw ({fill = 'blue', size = 25, position = {x: 0, y: 0}}) {
        this.ctx.fillStyle = fill
        this.ctx.beginPath()
        this.ctx.arc(position.x, position.y, size, 0, Math.PI * 2)
        this.ctx.fill()
    }
}
