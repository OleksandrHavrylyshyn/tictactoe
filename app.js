let table = [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9]
];

let player = ['O', 'X'];

let turn = 0;

function disableAll() {
    document.querySelectorAll(".cell").forEach(cell => cell.disabled = true);
}

function enableAll() {
    document.querySelectorAll(".cell").forEach(cell => cell.disabled = false);
}

function won(id) {
    document.querySelector("#headertext").innerHTML = `PLAYER '${id}' WON!`
    disableAll();
}




function startGame(table,player) {
    
    if (event.target.value == '') {
        event.target.value = player[turn];
        if(event.target.id == '1') table [0][0] = player[turn];
        else if(event.target.id == '2') table [0][1] = player[turn];
        else if(event.target.id == '3') table [0][2] = player[turn];
        else if(event.target.id == '4') table [1][0] = player[turn];
        else if(event.target.id == '5') table [1][1] = player[turn];
        else if(event.target.id == '6') table [1][2] = player[turn];
        else if(event.target.id == '7') table [2][0] = player[turn];
        else if(event.target.id == '8') table [2][1] = player[turn];
        else if(event.target.id == '9') table [2][2] = player[turn];
        if(turn == 0)turn++;
        else turn--;
    }
    for (let i = 0; i < player.length; i++) {
        if (table[0][0] == player[i] && table[0][1] == player[i] && table[0][2] == player[i]) won(player[i]);
        else if (table[1][0] == player[i] && table[1][1] == player[i] && table[1][2] == player[i]) won(player[i]);
        else if (table[2][0] == player[i] && table[2][1] == player[i] && table[2][2] == player[i]) won(player[i]);
        else if (table[0][0] == player[i] && table[1][1] == player[i] && table[2][2] == player[i]) won(player[i]);
        else if (table[2][0] == player[i] && table[1][1] == player[i] && table[0][2] == player[i]) won(player[i]);
        else if (table[0][0] == player[i] && table[1][0] == player[i] && table[2][0] == player[i]) won(player[i]);
        else if (table[0][1] == player[i] && table[1][1] == player[i] && table[2][1] == player[i]) won(player[i]);
        else if (table[0][2] == player[i] && table[1][2] == player[i] && table[2][2] == player[i]) won(player[i]);

    }
}

function reset() {
    table = [
        [9, 9, 9],
        [9, 9, 9],
        [9, 9, 9]
    ];
    document.querySelectorAll(".cell").forEach(cell => cell.value = '');
    document.querySelector("#headertext").innerHTML = `TIC TAC TOE`
    enableAll();
    turn = 0;
}