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