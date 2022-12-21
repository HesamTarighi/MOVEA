export default class Ball {
    display (p5, {position, size}) {
        p5.ellipse(position.x, position.y, size.width, size.height)
    }
}
