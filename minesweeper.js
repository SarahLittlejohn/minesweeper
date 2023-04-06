var container = document.getElementById("container");

//reset buttons
var play = document.getElementById("play");

//mine
var mine = Math.floor(Math.random() * 100);
var mines = [];
var mineSpace = [];
var backgroundMineSpace = [];

for (var i = 0; i < 100; i++) {
    mineSpace[i] = 3;
    backgroundMineSpace[i] = 3;
}

for (var i = 0; i < 4; i++) {
    mines[i] = Math.floor(Math.random() * 100);
}

var backgroundColour = "#FFFAFA";
var mineBackgroundColour = "#FF0000";
var oneAway = "#FFA500";
var twoAway = "#FFD580";

init();

function init() {
    //Button listen for reset of game
    play.addEventListener("click", resetGame);

    //Resets the game
    function resetGame() {
        container.innerHTML = "";

        for (var i = 0; i < 100; i++) {
            container.innerHTML += '<div class="square"></div>';
        }

        var squares = document.getElementsByClassName("square");

        var mineAddOne = [];
        var mineAddTwo = [];
        var mineMinusOne = [];
        var mineMinusTwo = [];


        for (var k = 0; k < mines.length; k++) {
            if ((mines[k] + 1) % 10 === 0) {
                mineAddOne[k] = true;
            }

            if ((mines[k] + 2) % 10 === 0) {
                mineAddTwo[k] = true;
            }

            if (mines[k] % 10 === 0) {
                mineMinusOne[k] = true;
            }

            if ((mines[k] - 1) % 10 === 0) {
                mineMinusTwo[k] = true;
            }

        }

        for (var j = 0; j < squares.length; j++) {
            for (var k = 0; k < mines.length; k++) {
                if (j === mines[k]) {
                    mineSpace[j] = 0;
                    squares[j].addEventListener("click", function () {
                        this.style.backgroundColor = mineBackgroundColour;
                        for (var i = 0; i < squares.length; i++) {
                            for (var m = 0; m < mines.length; m++) {
                                if (i === mines[m]) {
                                    backgroundMineSpace[i] = 0;
                                    squares[i].style.backgroundColor = mineBackgroundColour;
                                } else if ((backgroundMineSpace[i] !== 0) && ((i === mines[m] + 1 && !mineAddOne[m]) || i === mines[m] + 10 || (i === mines[m] - 1 && !mineMinusOne[m]) || i === mines[m] - 10) || (i === mines[m] - 9 && !mineAddOne[m]) || (i === mines[m] + 9 && !mineMinusOne[m]) || (i === mines[m] + 11 && !mineAddOne[m]) || (i === mines[m] - 11 && !mineMinusOne[m])) {
                                    backgroundMineSpace[i] = 1;
                                    squares[i].style.backgroundColor = oneAway;
                                } else if ((backgroundMineSpace[i] === 3) && 
                                ((i === mines[m] + 2 && !mineAddTwo[m] && !mineAddOne[m]) 
                                || i === mines[m] + 20  
                                || (i === mines[m] + 19 && !mineMinusOne[m])
                                || (i === mines[m] + 21 && !mineAddOne[m])
                                || (i === mines[m] - 2 && (!mineMinusOne[m] && !mineMinusTwo[m])) 
                                || i === mines[m] - 20) 
                                || (i === mines[m] - 21 && !mineMinusOne[m]) 
                                || (i === mines[m] - 19 && !mineAddOne[m])
                                || (i === mines[m] - 18 && !mineAddTwo[m])
                                || (i === mines[m] - 8 && !mineAddTwo[m])
                                || (i === mines[m] + 12 && !mineAddTwo[m])
                                || (i === mines[m] + 22 && !mineAddTwo[m])
                                || (i === mines[m] - 22 && !mineMinusTwo[m])
                                || (i === mines[m] - 12 && !mineMinusTwo[m])
                                || (i === mines[m] + 8 && !mineMinusTwo[m])
                                || (i === mines[m] + 18 && !mineMinusTwo[m])) {
                                    backgroundMineSpace[i] = 2;
                                    squares[i].style.backgroundColor = twoAway;
                                }
                            }
                        }

                        for (var n = 0; n < squares.length; n++) {
                            if (backgroundMineSpace[n] === 3) {
                                squares[n].style.backgroundColor = backgroundColour;
                            }
                        }
                        message.textContent = "Try Again";
                        window.moveBy(40, 40);
                    })

                } else if ((mineSpace[j] !== 0) && ((j === mines[k] + 1 && !mineAddOne[k]) || j === mines[k] + 10 || (j === mines[k] - 1 && !mineMinusOne[k]) || j === mines[k] - 10) || (j === mines[k] - 9 && !mineAddOne[k]) || (j === mines[k] + 9 && !mineMinusOne[k]) || (j === mines[k] + 11 && !mineAddOne[k]) || (j === mines[k] - 11 && !mineMinusOne[k])) {
                    mineSpace[j] = 1;
                    squares[j].addEventListener("click", function () {
                        this.style.backgroundColor = oneAway;
                    })
                } else if ((mineSpace[j] === 3) && 
                ((j === mines[k] + 2 && !mineAddTwo[k] && !mineAddOne[k]) 
                || j === mines[k] + 20 
                || (j === mines[k] + 19 && !mineMinusOne[k])
                || (j === mines[k] + 21 && !mineAddOne[k])
                || (j === mines[k] - 2 && (!mineMinusOne[k] && !mineMinusTwo[k])) 
                || j === mines[k] - 20 )
                || (j === mines[k] - 21 && !mineMinusOne[k]) 
                || (j === mines[k] - 19 && !mineAddOne[k])
                || (j === mines[k] - 18 && !mineAddTwo[k])
                || (j === mines[k] - 8 && !mineAddTwo[k])
                || (j === mines[k] + 12 && !mineAddTwo[k])
                || (j === mines[k] + 22 && !mineAddTwo[k])
                || (j === mines[k] - 22 && !mineMinusTwo[k])
                || (j === mines[k] - 12 && !mineMinusTwo[k])
                || (j === mines[k] + 8 && !mineMinusTwo[k])
                || (j === mines[k] + 18 && !mineMinusTwo[k])
                ) {
                    mineSpace[j] = 2;
                    squares[j].addEventListener("click", function () {
                        this.style.backgroundColor = twoAway;
                    })
                }

            }

            if (mineSpace[j] === 3) {
                squares[j].addEventListener("click", function () {
                    this.style.backgroundColor = backgroundColour;
                })
            }

        }

    }
}
