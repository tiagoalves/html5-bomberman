
TILE_EMPTY = 0;
TILE_BRICK = 1;
TILE_SOLID = 2;

require.config(
    {
        baseUrl: "js",
        paths: {
            "backbone": "lib/backbone",
            "underscore": "lib/underscore",
            "text": "lib/text"
        },
        locale: "en"
    }
);


require([
    "jquery", "underscore", "backbone",
    "polyfills/jscript",
    "Game"
],function($, _, Backbone, core) {


    
    var startGame = function(/*e*/) {

        //character: "mary"
        //fbuid: undefined
        //game: "game1"
        //playerName: "Tiago

        var name = 'Muzzley';
        var game = 'game1';
        var character = 'mary';

        //localStorage.setItem("userName", name);
        //localStorage.setItem("character", character);

        console.log("Joining " + game);

        if (name.length==0) {
            //alert("Please enter a name.");
            console.log("Please enter a name.");
            return;
        }

        $("#lobby").hide();
        $("#game").show();

        new Game({
            playerName: name,
            fbuid: undefined,
            character: character,
            game: game
        });
    }


    /**
     * Initialize
     */
    $(function() {

        //new LobbyView({el: $("#lobby")});

        $("#loading").hide();
        startGame();


    });


});

// FIXME move
function info(m) {
    chat(m, "info");
}

// FIXME move
function kill(p1, p2) {
    chat("<div class='bomb'></div><u>"+p1+"</u> killed by <u>"+p2+"</u>", "kill");
}

// FIXME move
function suicide(p1, p2) {
    chat("<div class='bomb'></div><u>"+p1+"</u> suicided", "kill");
}

// FIXME move
function chat(m, cls) {
    var d = $("<div>");
    d.html(m);
    d.addClass(cls);
    var $chat = $('#chat');
    $chat.append(d);
    $chat.prop('scrollTop', $chat.prop('scrollHeight') );
}

// FIXME move
function play(snd) {
    // FIXME detect audio
    var a = new Audio("/snd/" + snd + ".wav");
    a.play();
}
