var playerItem = document.getElementsByClassName('player-item');
var playerStatsName = document.getElementById('player-stats-name');

for (i = 0; i < playerItem.length; i++) {
    playerItem[i].addEventListener('click', addActiveClass);
}

var players = {
    "player": [
        {
            "id": "larsen",
            "name": "Sebastian Larsen",
            "role": "IGL",
            "age": "25",
            "rating": "1.27",
            "KD": "1.28",
            "HS": "84.72",
            "kast": "65,09%"
        },
        {
            "id": "thamlike",
            "name": "Jacob Holm",
            "role": "Rifler",
            "age": "25",
            "rating": "1.27",
            "KD": "1.28",
            "HS": "84.72",
            "kast": "65,09%"
        }
    ]
}

function addActiveClass() {
    for (i = 0; i < playerItem.length; i++) {
        playerItem[i].classList.remove('active-player');
    }
    this.classList.add('active-player');
    addStats();
}

function addStats() {
    for (i=0; i<playerItem.length; i++) {
        if (playerItem[i].classList.contains('active-player')) {
            for (index=0; index<players.player.length; index++){
                if (playerItem[i].dataset.id === players.player[index].id) {
                    //NU HAR VI STYR PÅ DET
                    console.log(playerItem[i].dataset.id);
                    console.log(players.player[index].id);
                    playerStatsName.innerHTML = players.player[index].name;
                }
            }
        }
    }
}