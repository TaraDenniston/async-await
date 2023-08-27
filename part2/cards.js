// Part 2: Deck of Cards
const baseUrl = 'https://deckofcardsapi.com/api/deck';


// 1.
async function drawOne() {
  try {
    let { data } = await axios.get(`${baseUrl}/new/draw`);
    let { suit, value } = data.cards[0];
    console.log(`${value} of ${suit}`);
  } catch (error) {
    console.log(error);
  }
}

drawOne();


// 2.
async function drawTwo() {
  let cards = [];

  try {
    let { data: c1 } = await axios.get(`${baseUrl}/new/draw`)
    cards.push(c1.cards[0]);

    let { data: c2 } = await axios.get(`${baseUrl}/new/draw`)
    cards.push(c2.cards[0]);

    cards.forEach(card => {
      console.log(`${card.value} of ${card.suit}`)
    })
  } catch (error) {
    console.log(error);
  }
}

drawTwo();

