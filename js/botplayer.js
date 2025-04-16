let tog = 1
let rollingSound = new Audio('../audio/rpg-dice-rolling-95182.mp3')
let winSound = new Audio('../audio/winharpsichord-39642.mp3')
let music=new Audio('../audio/music.mp3')

let p1sum = 0
let p2sum = 0
music.loop=true;
music.play()
// Function to disable scrolling
function disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScrolling() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}

// Call disableScrolling when the game starts
disableScrolling();

// Example: Call enableScrolling when the game ends or is paused
// enableScrolling();

function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 5) {
            p1sum = 24
        }
        if (p1sum == 12) {
            p1sum = 33
        }
        if (p1sum == 36) {
            p1sum = 75
        }
        if (p1sum == 62) {
            p1sum = 81
        }
        if (p1sum == 68) {
            p1sum = 87
        }
        if (p1sum == 99) {
            p1sum = 76
        }
        if (p1sum == 63) {
            p1sum = 41
        }
        if (p1sum == 71) {
            p1sum = 49
        }
        if (p1sum == 44) {
            p1sum = 21
        }
        if (p1sum == 46) {
            p1sum = 13
        }

        sum = p1sum;



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p2sum
        }
        
        if (p2sum == 5) {
            p2sum = 24
        }
        if (p2sum == 12) {
            p2sum = 33
        }
        if (p2sum == 36) {
            p2sum = 75
        }
        if (p2sum == 62) {
            p2sum = 81
        }
        if (p2sum == 68) {
            p2sum = 87
        }
        if (p2sum == 99) {
            p2sum = 76
        }
        if (p2sum == 63) {
            p2sum = 41
        }
        if (p2sum == 71) {
            p2sum = 49
        }
        if (p2sum == 44) {
            p2sum = 21
        }
        if (p2sum == 46) {
            p2sum = 13
        }


        sum = p2sum;



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        music.pause()
        if (player == 'p1') {
            alert("Computer Won !!")
        }
        else if (player == 'p2') {
            alert("Player Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


function botTurn() {
    setTimeout(function () {
        rollingSound.play();
        let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        document.getElementById("dice").innerText = num;
        document.getElementById("diceCnt").src = `../images/dice/${num}.svg`;

        play('p1', 'p1sum', 0, num);

        tog++;
        document.getElementById('tog').innerText = "Player's Turn: ";
    }, 250);
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    document.getElementById("diceCnt").src = `../images/dice/${num}.svg`;


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Player's Turn : "
        play('p2', 'p2sum', 55, num);
        tog++;
    }

    else{
        document.getElementById('tog').innerText = "Computer's Turn : "
        setTimeout(() => {
            botTurn();
        }, 1000);
    }

})