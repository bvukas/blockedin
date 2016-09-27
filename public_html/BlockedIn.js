Block = function(horizontal, length, x, y) {
    this.horizontal = horizontal;
    this.length = length;
    this.x = x;
    this.y = y;
    this.main = false;
    this.element = document.createElement("DIV");
    this.element.className = "block ";
    if (this.horizontal) {
        this.element.className += "h";
    } else {
        this.element.className += "v";
    }
    this.element.className += this.length;
    this.element.setAttribute("draggable", "true");
    this.element.style.left = (1 + this.x * 50) + "px";
    this.element.style.top = (1 + this.y * 50) + "px";
    
    this.move = function(delta) {
        if (this.horizontal) {
            this.x += delta;
        } else {
            this.y += delta;
        }
    };
    
    this.setAsMain = function() {
        this.element.className += " main";
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
    this.boardElement = document.getElementById("board");

    /**
     * 
     * @param {Block} block
     * @returns {undefined}
     */
    this.addBlock = function(block) {
        var x = block.x,
            y = block.y;
        for (var i = 0; i < block.length; i++) {
            if (this.cells[y][x]) {
                throw "Cell [" + x + ", " + y + "] is occupied";
            }
            this.cells[y][x] = true;
            if (block.horizontal) {
                x++;
            } else {
                y++;
            }
        }
        if (this.blocks.length === 0) {
            block.setAsMain();
        }
        this.blocks.push(block);
    };
    
    this.draw = function() {
        for (var i = 0; i < this.blocks.length; i++) {
            this.boardElement.appendChild(this.blocks[i].element);
        }
    }
};

window.onload = function() {
    console.log("Evo me");
    var board = new Board();
    board.addBlock(new Block(true, 2, 0, 2));
    board.addBlock(new Block(false, 3, 2, 0));
    board.addBlock(new Block(false, 3, 3, 2));
    board.addBlock(new Block(false, 2, 5, 2));
    board.addBlock(new Block(true, 2, 1, 5));
    board.addBlock(new Block(true, 2, 3, 5));
    board.draw();
    console.log(board);
};
