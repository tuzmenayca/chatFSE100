let input;
let response;

function setup() {
  createCanvas(800, 400);
  textSize("12");
  input = createInput();
  input.size(400, 30);
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
    response.html('I need more information to check the weather. <br> Please tell me the city.');
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response.html('Hello there! How can I help you?');
  } else if (message.toLowerCase().includes('name of client') ) {
    response.html('The name of the customer is Valerie.');
  } else if (message.toLowerCase().includes('client need') || message.toLowerCase().includes('need')) {
    response.html('Something that can help the coach manages her volleyball team,\n<br>' + 
      'like help her to identify and list her best players and build\n<br>' + 
      'scrimmage teams for practices.');
  } else if (message.toLowerCase().includes('maximum') && message.toLowerCase().includes('players')) {
    response.html('The number varies from 12 to 25 depending on the year, right now, I have 15 players.');
  } else if (message.toLowerCase().includes('stat information') || message.toLowerCase().includes('roster data')) {
    response.html('I get an updated roster data file from the organizers after each official match.');
  } else if (message.toLowerCase().includes('how many players') || message.toLowerCase().includes('players per team')) {
    response.html('The idea is to create as many teams as possible, considering 6 players per team. \n <br>'+ 
      'The scrimmage teams should have six (6) players.');
  } else if (message.toLowerCase().includes('not assigned') || message.toLowerCase().includes('scrimmage team')) {
    response.html('Those players not assigned to a scrimmage team will run laps.');
  } else if (message.toLowerCase().includes('stats of a player'))  {
    response.html('They have data that includes the stats of a player. Blocking and attacking averages.');
  } else if (message.toLowerCase().includes('users')) {
    response.html('Initially, it will be coach Valerie but maybe in the future, \n<br>'+ 
      'she will share it with other coaches in the district.');
  } else if (message.toLowerCase().includes('cost')) {
    response.html('Based on the fact that the development team are junior programmers, \n<br>' + 
      'they are considering 36 dollars per hour.');
  } else if (message.toLowerCase().includes('users')) {
      response.html('Initially, it will be coach Valerie but maybe in the future, \n<br>'+ 
        'she will share it with other coaches in the district.');
  } else if (message.toLowerCase().includes('information stored')|| message.toLowerCase().includes('data stored')) {
        response.html('They have data that includes the stats of a player. Blocking and attacking averages'); 
  } else if (message.toLowerCase().includes('lower value')|| message.toLowerCase().includes('higher value')) {
        response.html('The higher the average the better for the player.'); 
  } else if (message.toLowerCase().includes('top attacker')) {
        response.html('Just text with the stats for each player ordered by their stats (best at top),\n <br>' +
        '3 best attackers and 3 best blockers would be enough.'); 
  } else if (message.toLowerCase().includes('player information')) {
        response.html('I have a roster data file with the team information and stats.'); 
  } else if (message.toLowerCase().includes('stat data')|| message.toLowerCase().includes('file')) {
        response.html('The data of one player is in a single line with four values: first name, last name, <br>\n' +
          'average of attacks per set, and average of blocks per set. Values are separated by spaces.'); 
  } else if (message.toLowerCase().includes('how often') || message.toLowerCase().includes('create scrimmage teams')) { 
        response.html('Every practice and during the season they have practice 2 or 3 times a week, <br> \n' + 
        'and at least one game each weekend.'); 
  } else if (message.toLowerCase().includes('platform') || message.toLowerCase().includes('use application')) {
        response.html('They would like it work on a phone and a laptop'); 
  } else if (message.toLowerCase().includes('language') || message.toLowerCase().includes('development')) { 
        response.html('No. They only have hear about Java but they are open to suggestions from the developers.'); 
  }  else {
    response.html('I am still learning. I can\'t understand that yet.');
  }
}
