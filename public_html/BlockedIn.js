Block = function(horizontal, length, x, y) {
    this.horizontal = horizontal;
    this.length = length;
    this.x = x;
    this.y = y;
    
    this.move = function(delta) {
        if (this.horizontal) {
            this.x += delta;
        } else {
            this.y += delta;
        }
    };
};

Board = function() {
    this.blocks = [];
    this.cells = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ];
    
    /**
     * 
     * @param Block block
     * @returns {undefined}
     */
    this.addBlock = function(block) {
        for (var i = 0; i < block.length; i++) {
        }
    };
};

window.onload = function() {
    console.log("Evo me");
};
