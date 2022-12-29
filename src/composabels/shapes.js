export default class Snow {
    constructor (p5, { position, size, padding, container_size }) {
        this.p5 = p5
        this.position = position
        this.size = size
        this.setVelocity()
        this.fill = '#fff'
        this.direction = { x: Math.floor(-1 + Math.random() * 1), y: Math.floor(-1 + Math.random() * 1) }
        this.padding = padding
        this.container_size = container_size
    }

    setVelocity () {
        this.velocity = .5 + Math.random() * 3
    }

    display () {
        this.p5.fill(this.fill)
        this.p5.ellipse(this.position.x, this.position.y, this.size.width, this.size.height)
    }

    move ({ limitMoving }) {
        this.position.y += this.velocity

        if (limitMoving) {
            if (this.position.y > limitMoving.y + 100) {
                this.setVelocity()
                this.position.x = Math.random() * this.container_size.width
                this.position.y = -100
            }
        }
    }
}
