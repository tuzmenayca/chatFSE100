let input;
let response;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(16);
  input = createInput();
  input.position(20, height - 50);
  button = createButton('Send');
  button.position(input.x + input.width + 20, height - 50);
  button.mousePressed(chat);
  response = createElement('h2', 'Hello! How can I assist you today?');
  response.position(20, 20);
}

function draw() {
  background(220);
}

function chat() {
  let message = input.value();
  input.value(''); // Clear input field

  if (message.toLowerCase().includes('time')) {
    let now = new Date();
    let time = now.toLocaleTimeString();
    response.html(`The current time is ${time}`);
  } else if (message.toLowerCase().includes('weather')) {
    response.html('I need more information to check the weather. Please tell me the city.');
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response.html('Hello there! How can I help you?');
  } else if (message.toLowerCase().includes('budget')) {
    response.html('The budget of the project is...');
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response.html('Hello there! How can I help you?');
  } else if (message.toLowerCase().includes('name of client') ) {
    response.html('The name of the customer is Valerie.');
  } else if (message.toLowerCase().includes('client need') || message.toLowerCase().includes('need')) {
    response.html('Something that can help the coach manages her volleyball team, like help her to identify and list her best players and build scrimmage teams for practices.');
  } else if (message.toLowerCase().includes('maximum') ) {
    response.html('The number varies from 12 to 25 depending on the year, right now, I have 15 players.');
  } else if (message.toLowerCase().includes('stat information') || message.toLowerCase().includes('roster data')) {
    response.html('I get an updated roster data file from the organizers after each official match.');
  } else if (message.toLowerCase().includes('how many') || message.toLowerCase().includes('players per team')) {
    response.html('The idea is to create as many teams as possible, considering 6 players per team. The scrimmage teams should have six (6) players.');
  } else if (message.toLowerCase().includes('client need') || message.toLowerCase().includes('scrimmage team')) {
    response.html('Those players not assigned to a scrimmage team will run laps.');
  } else if (message.toLowerCase().includes('stats of a player'))  {
    response.html('They have data that includes the stats of a player. Blocking and attacking averages.');
  } else if (message.toLowerCase().includes('users')) {
    response.html('Initially, it will be coach Valerie but maybe in the future, she will share it with other coaches in the district.');
  } else if (message.toLowerCase().includes('cost')) {
    response.html('Based on the fact that the development team are junior programmers, they are considering 36 dollars per hour.');
 
  }  else {
    response.html('I am still learning. I can\'t understand that yet.');
  }
  
}
