// Part 1: Number Facts
let baseUrl = 'http://numbersapi.com';

// 1.
let favNum = 19;

async function getNumFact(num) {
  try {
    let response = await axios.get(`${baseUrl}/${num}?json`)
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getNumFact(favNum);