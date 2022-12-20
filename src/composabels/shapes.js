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

<<<<<<< HEAD
    draw () {
        this.p5.draw = ({
            width = 50, height = 50, position = {x: 50, y: 50}, background = 102
        }) => {
            
            // set public properties
            this.width = width
            this.height = height
            this.position = position
            this.background = background

            this.p5.background(this.background)
            this.p5.ellipse(this.position.x, this.position.y, this.width, this.height)
=======
    draw ({
        width = 50, height = 50, position = {x: 50, y: 50}, background = 102, animation_options = {}
    }) {
        for (let i = 0; i < 6; i++) {
            this.p5.draw = () => {
                this.p5.background(background)
                if (animation_options.move) animations().move()
                this.p5.ellipse(position.x, 50 * i, width, height)
            }
>>>>>>> c1bb7b6a80fd387cc885d70f28deb0697a8f2fe7
        }

<<<<<<< HEAD
    move (move) {
        this.position.x += move.speed.x * move.direction.x
=======
        function animations () {
            return {
                move: () => position.x += animation_options.move.speed.x * animation_options.move.direction.x
            }
        }
>>>>>>> c1bb7b6a80fd387cc885d70f28deb0697a8f2fe7
    }

    // move (options) {
    //     this.position.x += options.speed.x * options.direction.x
    // }
}
