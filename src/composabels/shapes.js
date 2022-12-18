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
    constructor () {
        // this.raduis = radius
        // this.xpos, xpos
        // this.ypos, ypos
        // this.xspeed = xspeed
        // this.yspeed = yspeed
        // this.xdirection = xdirection
        // this.ydirection = ydirection

        new P5(this.P5setup.bind(this))
    }

    P5setup (p5) {
        this.p5 = p5
    
        this.p5.setup = () => {
            this.p5.createCanvas(this.canvas.canvasWidth, this.canvas.canvasHeight)
        }
    }

    defineCanvas (width, height, parentID) {

    }


}
