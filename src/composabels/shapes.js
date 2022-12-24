export default class Ball {
    constructor (p5, { position, size, fill, direction }) {
        this.p5 = p5
        this.position = position
        this.velocity = 1 + Math.random() * 3
        this.size = size
        this.fill = fill
        this.direction = { x: Math.floor(-1 + Math.random() * 1), y: Math.floor(-1 + Math.random() * 1) }
    }

    display () {
        this.p5.fill(this.fill)
        this.p5.ellipse(this.position.x, this.position.y, this.size.width, this.size.height)
    }

    move ({ limitMoving }) {
        this.position.x += this.velocity * this.direction.x
        this.position.y += this.velocity * this.direction.y

        if (limitMoving) {
            if (this.position.x > limitMoving.x) this.direction.x = -1
            if (this.position.x <= 0) this.direction.x = 1
            if (this.position.y > limitMoving.y) this.direction.y = -1
            if (this.position.y <= 0) this.direction.y = 1
        }
    }
}
