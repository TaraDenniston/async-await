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


// 3.
async function drawAll() {
  try {
    let deckId = '';
    let $btn = $('button');
    let $pile = $('#pile');

    let { data: d } = await axios.get(`${baseUrl}/new/shuffle`)
    deckId = d.deck_id;

    $btn.on('click', async () => {
      let { data: c } = await axios.get(`${baseUrl}/${deckId}/draw`)
      $pile.empty();
      $pile.append(`<img src="${c.cards[0].image}" alt="">`);
      if (c.remaining === 0) {
        $btn.hide();
        $('#deck').append(`<img src="https://placehold.co/226x316/white/white" alt="">`)
      };
    });
  } catch (error) {
    console.log(error);
  }
}

drawAll();
