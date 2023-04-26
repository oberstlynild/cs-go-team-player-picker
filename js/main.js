var playerItem = document.getElementsByClassName('player-item');

/*Stat elements*/
var playerStatsTitle = document.getElementById('player-stats-title');
var playerStatsRole = document.getElementById('player-stats-role');
var playerStatsName = document.getElementById('player-stats-name-value');
var playerStatsAge = document.getElementById('player-stats-age-value');
var playerStatsRating = document.getElementById('player-stats-rating-value');
var playerStatsKd = document.getElementById('player-stats-kd-value');
var playerStatsHs = document.getElementById('player-stats-hs-value');
var playerStatsAdr = document.getElementById('player-stats-adr-value');
var playerStatsKast = document.getElementById('player-stats-kast-value');

for (i = 0; i < playerItem.length; i++) {
    playerItem[i].addEventListener('click', addActiveClass);
}

var players = {
    "player": [
        {
            "id": "larsen",
            "nickname": "larsen",
            "name": "Sebastian Larsen",
            "role": "IGL",
            "age": "25",
            "rating": "1.27",
            "kd": "1.28",
            "hs": "28%",
            "adr": "84.72",
            "kast": "65,09%"
        },
        {
            "id": "thamlike",
            "nickname": "thamlike",
            "name": "Jacob Holm",
            "role": "Rifler",
            "age": "25",
            "rating": "1.13",
            "kd": "1.28",
            "hs": "44%",
            "adr": "74.80",
            "kast": "74,53%"
        },
        {
            "id": "logz",
            "nickname": "logz",
            "name": "Oliver Nørgaard Borresen",
            "role": "Rifler",
            "age": "18",
            "rating": "1.10",
            "kd": "1.19",
            "hs": "53%",
            "adr": "84.75",
            "kast": "69,81%"
        },
        {
            "id": "ansg1",
            "nickname": "ANSG1",
            "name": "Richart Saleela Nielsen",
            "role": "Rifler",
            "age": "15",
            "rating": "0.80",
            "kd": "0.74",
            "hs": "63%",
            "adr": "68.73",
            "kast": "62,26%"
        },
        {
            "id": "wagnr",
            "nickname": "wAGNR",
            "name": "Frederik Wagner",
            "role": "Rifler",
            "age": "22",
            "rating": "0.95",
            "kd": "0.93",
            "hs": "44%",
            "adr": "70.22",
            "kast": "67,92%"
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
                    playerStatsTitle.innerHTML = players.player[index].nickname;
                    playerStatsRole.innerHTML = players.player[index].role;
                    playerStatsName.innerHTML = players.player[index].name;
                    playerStatsAge.innerHTML = players.player[index].age;
                    playerStatsRating.innerHTML = players.player[index].rating;
                    playerStatsKd.innerHTML = players.player[index].kd;
                    playerStatsHs.innerHTML = players.player[index].hs;
                    playerStatsAdr.innerHTML = players.player[index].adr;
                    playerStatsKast.innerHTML = players.player[index].kast;
                }
            }
        }
    }
}