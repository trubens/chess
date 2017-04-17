var Chess = require('chess.js').Chess;

exports.Chess = function (fen) {
    var chess = new Chess(fen);
    
    chess.pieces = function () {
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            squares = [];

        for (var i = 1; i <= 8; i++) {
            letters.forEach(function (letter) {
                squares.push(letter + i);
            });
        };

        return squares.map(function (square) {
            return chess.get(square);
        }).filter(function (val) {
            return val;
        });
    };

    chess.number_of_pieces = function () {
        return chess.pieces().length;
    };

    return chess;
};