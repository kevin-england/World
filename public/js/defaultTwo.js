var stories = { stories: [
  { 
    headerOne: 'The Rolling Egg',
    header: 'An egg named Elvie begins to roll. Elvie rolls down a hillside shaped like a woman in a dress, here on the spanning Orthian planes. Swerving from right to left, he comes to a split in his path.', 
    content: 'Which way will Elvie go?',
    image: 'images/egg.jpg',
    button: 'Continue down the hill',
    buttonOne: 'Go towards an unexpected alleyway'
  },
  { 
    headerOne: 'The Rolling Egg',
    header: 'Elvie decides to roll towards the unexpected alleyway. As he enters the small village from the alley, he feels a very cold breeze. There is a local inn nearby that looks to be quite comfortable, but he also sees a big heat lamp that the locals are standing near. Decisions, decisions.', 
    content: 'Where will Elvie go?',
    image: 'images/eggFour.jpg',
    button: 'Enter the inn',
    buttonOne: 'Keep warm under the heat lamp'
  },
  { 
    headerOne: 'The Rolling Egg',
    header: 'Elvie continues on down the hill. Elvie rolls down the hill and sees two Orthian unicorns parting ways. One is a big white steed and the other was a black horn with a brown nose. He decides he wants to follow one!', 
    content: 'Which unicorn will Elvie follow?',
    image: 'images/eggOne.jpg',
    button: 'White Unicorn',
    buttonOne: 'Black Unicorn'
  },
  { 
    headerOne: 'The Rolling Egg',
    header: 'Elvie follows the white unicorn. Elvie has rolled into an odd opening near a big raging fire. Elvie watches as the unicorn nods towards a big black metal item sitting atop the flames, telling Elvie this is where he must go.', 
    content: 'Should Elvie enter the flames and listen to this crazy unicorn?',
    image: 'images/eggTwo.jpg',
    button: 'Maybe not',
    buttonOne: 'Follow blindly'
  },
  { 
    headerOne: 'The Rolling Egg',
    header: 'Elvie follows the black unicorn. Elvie rolls into a giant cavern where he meets a gnome guarding the path. The gnome tells Elvie that he must make a choice between a red potato and a blue onion before he lets him pass. If he chooses correctly, he may continue.', 
    content: 'Which will Elvie choose?',
    image: 'images/eggThree.jpg',
    button: 'Red potato!',
    buttonOne: 'Blue onion!'
  },
  { 
    headerOne: 'A Race Through Planet Orthia',
    header: 'A hare named Gervis has started a race. Though the race has just begun, his opponent is now far behind. The young hare has already gained a substantial lead and must decide his next move.', 
    content: 'What is Gervis going to do?',
    image: 'images/hare.jpg',
    button: 'Take a quick break',
    buttonOne: 'Use shortcut through random rabbit hole'
  },
  { 
    headerOne: 'A Race Through Planet Orthia',
    header: 'Gervis decides to take a quick break. As he dozes off, he is suddenly awakened by the scent of two different pastries. He can smell a delicious carrot cake wafting from the window of a nearby house and can also smell the scent of amazing pies coming from a local bakery named Pieoneers. Gervis cannot resist.', 
    content: 'Which pastry should Gervis pursue?',
    image: 'images/hareTwo.jpg',
    button: 'Take the carrot cake',
    buttonOne: 'Go to Pieoneers'
  },
  { 
    headerOne: 'A Race Through Planet Orthia',
    header: 'Gervis stereotypically goes for the carrot cake. He could not resist, however, as he comes up to the window, there is something strange about this cake. It smells exactly like carrot cake, but has a moldy look to it that makes it a little less appealing to the young hare. Though he did come all this way...', 
    content: 'What should Gervis do?',
    image: 'images/hareThree.jpg',
    button: 'Eat it anyways!',
    buttonOne: 'Finish the race instead'
  },
  { 
    headerOne: 'A Race Through Planet Orthia',
    header: 'Gervis chooses to head into Pieoneers, the local bakery, in the little Orthian village nearby. As he enters, the aromas overwhelm his senses and he feels a strange desire to gorge on as much pie as he possibly can. The human owner offers him a free pie to get started, but Gervis suddenly remembers he is still in a race.', 
    content: 'Should Gervis accept the slice of pie?',
    image: 'images/hareFour.jpg',
    button: 'One bite should not hurt...',
    buttonOne: 'Race? What race??'
  },
  { 
    headerOne: 'A Race Through Planet Orthia',
    header: 'Gervis goes through the rabbit hole. As Gervis enters the hole, he can see the light from the other side of his shortcut. The problem is the owner has just come out with an Orthian pistol shouting at him to get off his property!', 
    content: 'Uh oh, what will Gervis do now?',
    image: 'images/hareOne.jpg',
    button: 'Run for the light!',
    buttonOne: 'Run back!'
  }
]};

function createStory(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-11 story');

  var headerOne = document.createElement('h1');
  headerOne.setAttribute('class', 'story-title')
  headerOne.textContent = info.headerOne;

  var header = document.createElement('h1');
  header.setAttribute('class', 'story-content')
  header.textContent = info.header;

  var title = document.createElement('p');
  title.setAttribute('class', 'story-question')
  title.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'col-md-4 col-md-offset-1 img-responsive story-image')

  var button = document.createElement('button');
  button.setAttribute('class', 'col-md-3 choice-one')
  button.textContent = info.button;

  var buttonOne = document.createElement('button');
  buttonOne.setAttribute('class', 'col-md-3 choice-two')
  buttonOne.textContent = info.buttonOne;

  container.appendChild(headerOne);
  container.appendChild(header);
  container.appendChild(title);
  container.appendChild(button);
  container.appendChild(photo);
  container.appendChild(buttonOne)
  console.log(container)
  return container;
}

var hold = document.getElementById('hold');

for (var i = 0; i < stories.stories.length; i++) {
  var theStory = createStory(stories.stories[i]);
  console.log(theStory)
  hold.appendChild(theStory);
}


var endings = { endings: [
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie enters the inn. As Elvie enjoys the warmth from within, his egg slowly begins to crack. Is that a...Dragon? Look out, Elvie just burned you!',
    image: 'images/eggFive.jpg',
    button: 'You are burned to a crisp',
  },
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie chooses to sit under heat lamp. After thirty seconds, Elvie hatches into a human toddler demanding you buy them a cellphone... Hm, we can send you back to the beginning!',
    image: 'images/eggSix.jpg',
    button: 'Go back to beginning!',
  },
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie decides he should not enter the fiery flames. As Elvie turns back, his egg begins cracking slowly. The egg shell crumbles and soon you realize Elvie is a pile of delicious scrambled eggs! What the?!',
    image: 'images/eggEight.jpg',
    button: 'Time to eat!',
  },
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie decides to follow the white unicorn into the flames. When Elvie enters the center of the flames, his egg shell cracks and he turns into an enormous chicken. The unicorn transforms into President Lincoln and hops on his back. As the flames go out, they are in a city. Is this a dream?',
    image: 'images/eggSeven.png',
    button: 'Go back to beginning!',
  },
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie takes the red potato. The gnome tells Elvie there is a difference between knowing the path and walking the path. All goes black and suddenly the little egg comes back to the light. Elvie has entered the matrix.',
    image: 'images/eggNine.jpg',
    button: 'Free your mind',
  },
  { 
    header: 'The Rolling Egg', 
    content: 'Elvie takes the blue onion, though it looks much different than any onion he had ever seen. After a few seconds, Elvie begins to feel faint and asks the gnome what was in the onion. Before he could answer, Elvie disappears and reappears near the top of the hill he started at. That was no onion!',
    image: 'images/eggTen.jpg',
    button: 'Go back to beginning!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie enters the inn. As Elvie enjoys the warmth from within, his egg slowly begins to crack. Is that a...Dragon? Look out, Elvie just burned you!',
    image: 'images/eggFive.jpg',
    button: 'You are burned to a crisp',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie chooses to sit under heat lamp. After thirty seconds, Elvie hatches into a human toddler demanding you buy them a cellphone... Hm, we can send you back to the beginning!',
    image: 'images/eggSix.jpg',
    button: 'Go back to beginning!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie decides he should not enter the fiery flames. As Elvie turns back, his egg begins cracking slowly. The egg shell crumbles and soon you realize Elvie is a pile of delicious scrambled eggs! What the?!',
    image: 'images/eggEight.jpg',
    button: 'Time to eat!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie decides to follow the white unicorn into the flames. When Elvie enters the center of the flames, his egg shell cracks and he turns into an enormous chicken. The unicorn transforms into President Lincoln and hops on his back. As the flames go out, they are in a city. Is this a dream?',
    image: 'images/eggSeven.png',
    button: 'Go back to beginning!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie takes the red potato. The gnome tells Elvie there is a difference between knowing the path and walking the path. All goes black and suddenly the little egg comes back to the light. Elvie has entered the matrix.',
    image: 'images/eggNine.jpg',
    button: 'Free your mind',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Elvie takes the blue onion, though it looks much different than any onion he had ever seen. After a few seconds, Elvie begins to feel faint and asks the gnome what was in the onion. Before he could answer, Elvie disappears and reappears near the top of the hill he started at. That was no onion!',
    image: 'images/eggTen.jpg',
    button: 'Go back to beginning!',
  }
]};

function createEnding(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-11 ending');

  var header = document.createElement('h1');
  header.setAttribute('class', 'ending-title')
  header.textContent = info.header;

  var content = document.createElement('p');
  content.setAttribute('class', 'ending-content')
  content.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'col-md-8 img-responsive ending-image')

  var button = document.createElement('button');
  button.setAttribute('class', 'col-md-3 ending-button')
  button.textContent = info.button;

  container.appendChild(header);
  container.appendChild(content);
  container.appendChild(photo);
  container.appendChild(button);
  console.log(container);
  return container;
}

var hold = document.getElementById('hold');

for (var i = 0; i < endings.endings.length; i++) {
  var theEnding = createEnding(endings.endings[i]);
  console.log(theEnding)
  hold.appendChild(theEnding);
}