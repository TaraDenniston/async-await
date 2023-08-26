// Part 1: Number Facts
let baseUrl = 'http://numbersapi.com';

// 1.
let favNum = 23;

async function getNumFact(num) {
  try {
    let response = await axios.get(`${baseUrl}/${num}?json`)
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

console.log(getNumFact(favNum));


// 2.
let numList = [29,31,37,41];

async function getNumFacts(nums) {
  try {
    let {data} = await axios.get(`${baseUrl}/${nums}?json`)
    $('body').append('<p>2.)</p><ul id="two"></ul>')
    for (let item of numList) {
      $('#two').append(`<li>${data[item]}</li>`);
    }
  } catch (error) {
    console.log(error);
  }
}

getNumFacts(numList);


// 3.
async function getFourFacts(num) {
  let promises = Array.from({ length: 4 }, () => {
    return axios.get(`${baseUrl}/${num}?json`);
  });

  let responseArr = await Promise.all(promises);
  $('body').append('<p>3.)</p><ul id="three"></ul>');
  responseArr.forEach(r => $('#three').append(`<li>${r.data.text}</li>`));
}

getFourFacts(favNum);