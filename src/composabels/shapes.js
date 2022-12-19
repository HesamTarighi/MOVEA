import P5 from 'p5'

function P5setup (p5) {
    p5.setup = () => {
        p5.background('#141414')
        p5.createCanvas(this.$el.clientWidth, this.$el.clientHeight).parent('canvas_container')
        p5.frameRate(60)
        p5.noStroke()
        p5.ellipseMode(p5.RADIUS)

        xpos = this.$el.clientWidth / 2
        ypos = this.$el.clientHeight / 2
    }
    p5.draw = () => {
        p5.background('#141414')
        
        xpos = xpos + xspeed * xdirection
        ypos = ypos + yspeed * ydirection

        if (xpos > this.$el.clientWidth - rad || xpos < rad) xdirection *= -1
        if (ypos > this.$el.clientHeight - rad || ypos < rad) ydirection *= -1

        p5.ellipse(xpos, ypos, rad, rad)
    }
}

export default class Ball {
    constructor ({
        width = 50, height = 50, position = {x: 50, y: 50}, background = 102, animation = false
    }) {
        this.width = width
        this.height = height
        this.position = position
        this.background = background
        this.animation = animation

        if (animation.move) this.isMove = true

        new P5((p5 => this.p5 = p5).bind(this))
    }

    defineCanvas ({ width, height, parentID }, options = {}) {
        this.p5.setup = () => {
            this.p5.frameRate(options.frameRate || 40)
            this.p5.createCanvas(width, height).parent(parentID)
        }
    }

    draw () {
        this.p5.draw = () => {
            this.p5.background(this.background)
            if (this.isMove) this.move()
            this.p5.ellipse(this.position.x, this.position.y, this.width, this.height)
        }
    }

    move () {
        this.position.x += this.animation.move.speed.x * this.animation.move.direction.x
    }
}
