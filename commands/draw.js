// Stuff to implement later: max hand size
const Deck = require('../deckHelpers.js');

module.exports = {
    name: 'draw',
    description: 'Draws a card from a deck',
    execute(message, args, deck, draw_n, runningmode){
        // Make sure there are cards to draw
        let drawn_cards = [];
        try {
            drawn_cards = Deck.draw_cards(deck, draw_n);
        } catch (e) {
            message.channel.send(e.message);
        }
        for(let i=0; i < drawn_cards.length; i++) {
            const card = drawn_cards[i];
            // Set the new location of that card to be in hand
            card.location = 'hand';
            console.log('Drew the ' + card.name() + ' from deck to hand.');
            if (runningmode == 'loud') {
                message.channel.send('Drew the ' + card.name());
            }
        }
    }
}