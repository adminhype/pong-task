class Ball extends Drawable {

    // ########### Attributes ###########
    x = 450;
    y = 300;
    w = 5;
    h = 5;
    spdX = 2;
    spdY = .5;
    ponged = false;
    fieldheight

    // ########### Constructor ###########
    constructor(fldwdth, fldhght) {
        super();
        this.fieldheight = fldhght;
        this.x = fldwdth / 2;
        this.y = fldhght / 2
        this.animate();
    }

    // ########### Methods ###########

    // \o/ hier kann deine Kollisionsabfrage stehen. \o/
    // Check method to check if ball colldies with player
    // returns true if colliision hits, otherwise false 
    isColliding(player) {
        return this.x + this.w > player.x && // check right side
            this.x < player.x + player.w && // check left side
            this.y + this.h > player.y && // check bottom side
            this.y < player.y + player.h; // check top side
    }

    changeDirection() {
        if (!this.ponged) {
            this.spdX *= -1.05
                ;
        }
    }

    animate() {
        setInterval(() => {
            this.x += this.spdX;
            this.y += this.spdY;

            if (this.y >= this.fieldheight - this.h || this.y <= 0) {
                this.spdY = this.spdY * -1;
            }
        }, 1000 / 30);
    }
}