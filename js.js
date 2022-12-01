// PLAYERS START

let players = (function () {
  if (localStorage.getItem('players') === null) {
    return [
      { id: 1, firstName: 'Cody', lastName: 'H', phone: '123-123-1234' },
      { id: 2, firstName: 'Charles', lastName: 'W', phone: '123-123-1234' },
      { id: 3, firstName: 'Jon', lastName: 'C', phone: '123-123-1234' }
    ];
  } else {
    return JSON.parse(localStorage.getItem('players'));
  }
})();



function createPlayers(players) {
    let html = '';
    for (let i = 0; i < players.length; i++) {
        html += createPlayerHTML(players[i]);
    }
    return '<h1>SELECT PLAYERS:</h1>' + html + '<button type="button" id="move-to-parks">CONTINUE</button>';
};

function createPlayerHTML(player) {
    let html = '<input class="ml-3 mb-3" type="checkbox" id="'+ player.id +'" name= "'+ player.id +'" value="'+ player.id +'">';
    html += '<label for="'+ player.id +'">'+ player.firstName + ' ' + player.lastName +'</label><br/>';
    return html;
};


let playersInGame = [];

function playersInGame(a){
playersInGame.push(a);

}
// PLAYERS END

let contentArea = document.querySelector('#content-area');
contentArea.innerHTML = createPlayers(players);
