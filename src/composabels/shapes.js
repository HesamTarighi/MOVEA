import P5 from 'p5'

export default class Ball {
    constructor () {
        new P5((p5 => this.p5 = p5).bind(this))
    }

    defineCanvas ({ width, height, parentID }, options = {}) {
        this.p5.setup = () => {
            this.p5.frameRate(options.frameRate || 40)
            this.p5.createCanvas(width, height).parent(parentID)
        }
    }

    draw ({
        width = 50, height = 50, position = {x: 50, y: 50}, background = 102, animation_options = {}
    }) {
        this.p5.draw = () => {
            this.p5.background(background)
            if (animation_options.move) animations().move()
            this.p5.ellipse(position.x, 50 * i, width, height)
        }

        function animations () {
            return {
                move: () => position.x += animation_options.move.speed.x * animation_options.move.direction.x
            }
        }
    }

    // move (options) {
    //     this.position.x += options.speed.x * options.direction.x
    // }
}
