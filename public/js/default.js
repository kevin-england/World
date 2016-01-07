var characters = { characters: [
  { 
    name: 'Elvie the Egg', 
    description: 'Select and watch Elvie roll!',
    image: 'images/vlax.jpg',
    title: 'The Rolling Egg',
    button: 'Get Rolling'
  },
  { 
    name: 'Gervis the Hare', 
    description: 'Select and get Gervis racing!',
    image: 'images/octurnus.jpg',
    title: 'A Race Through Planet Orthia',
    button: 'Get Racing'
  }
]};

function createCharacter(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-5 options');

  var header = document.createElement('h1');
  header.setAttribute('class', 'character-name')
  header.textContent = info.name;

  var title = document.createElement('p');
  title.setAttribute('class', 'title')
  title.textContent = info.title;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'character-image')

  var description = document.createElement('p');
  description.setAttribute('class', 'description')
  description.textContent = info.description;

  var button = document.createElement('button');
  button.setAttribute('class', 'select')
  button.textContent = info.button;

  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(photo);
  container.appendChild(title);
  container.appendChild(button)
  console.log(container)
  return container;
}

var holder = document.getElementById('holder');

for (var i = 0; i < characters.characters.length; i++) {
  var theCharacter = createCharacter(characters.characters[i]);
  console.log(theCharacter)
  holder.appendChild(theCharacter);
}

var stories = { stories: [
  { 
    header: 'The Rolling Egg',
    subheader: 'An egg named Elvie begins to roll. Elvie rolls down a hillside shaped like a woman in a dress, here on the spanning Orthian planes. Swerving from right to left, he comes to a split in his path.', 
    content: 'Which way will Elvie go?',
    image: 'images/egg.jpg',
    buttonText: ['Continue down the hill', 'Go towards an unexpected alleyway']
  },
  { 
    header: 'The Rolling Egg',
    subheader: 'Elvie decides to roll towards the unexpected alleyway. As he enters the small village from the alley, he feels a very cold breeze. There is a local inn nearby that looks to be quite comfortable, but he also sees a big heat lamp that the locals are standing near. Decisions, decisions.', 
    content: 'Where will Elvie go?',
    image: 'images/eggFour.jpg',
    buttonText: ['Enter the inn', 'Keep warm under the heat lamp']
  },
  { 
    header: 'The Rolling Egg',
    subheader: 'Elvie continues on down the hill. Elvie rolls down the hill and sees two Orthian unicorns parting ways. One is a big white steed and the other was a black horn with a brown nose. He decides he wants to follow one!', 
    content: 'Which unicorn will Elvie follow?',
    image: 'images/eggOne.jpg',
    buttonText: ['White Unicorn', 'Black Unicorn']
  },
  { 
    header: 'The Rolling Egg',
    subheader: 'Elvie follows the white unicorn. Elvie has rolled into an odd opening near a big raging fire. Elvie watches as the unicorn nods towards a big black metal item sitting atop the flames, telling Elvie this is where he must go.', 
    content: 'Should Elvie enter the flames and listen to this crazy unicorn?',
    image: 'images/eggTwo.jpg',
    buttonText: ['Maybe not', 'Follow blindly']
  },
  { 
    header: 'The Rolling Egg',
    subheader: 'Elvie follows the black unicorn. Elvie rolls into a giant cavern where he meets a gnome guarding the path. The gnome tells Elvie that he must make a choice between a red potato and a blue onion before he lets him pass. If he chooses correctly, he may continue.', 
    content: 'Which will Elvie choose?',
    image: 'images/eggThree.jpg',
    buttonText: ['Red potato!', 'Blue onion!']
  },
  { 
    header: 'A Race Through Planet Orthia',
    subheader: 'A hare named Gervis has started a race. Though the race has just begun, his opponent is now far behind. The young hare has already gained a substantial lead and must decide his next move.', 
    content: 'What is Gervis going to do?',
    image: 'images/hare.jpg',
    buttonText: ['Take a quick break', 'Use shortcut through random cavern']
  },
  { 
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis decides to take a quick break. As he dozes off, he is suddenly awakened by the scent of two different pastries. He can smell a delicious carrot cake wafting from the window of a nearby house and can also smell the scent of amazing pies coming from a local bakery named Pieoneers. Gervis cannot resist.', 
    content: 'Which pastry should Gervis pursue?',
    image: 'images/hareTwo.jpg',
    buttonText: ['Take the carrot cake', 'Go to Pieoneers']
  },
  { 
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis stereotypically goes for the carrot cake. He could not resist, however, as he comes up to the window, there is something strange about this cake. It smells exactly like carrot cake, but has a moldy look to it that makes it a little less appealing to the young hare. But he did come all this way...', 
    content: 'What should Gervis do?',
    image: 'images/hareThree.jpg',
    buttonText: ['Eat it anyways!', 'Speak to the big insect nearby']
  },
  { 
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis chooses to head into Pieoneers, the local bakery, in the little Orthian village nearby. As he enters, the aromas overwhelm his senses and he feels a strange desire to gorge on as much pie as he possibly can. The human owner offers him a free pie to get started, but Gervis suddenly remembers he is still in a race.', 
    content: 'Should Gervis accept the slice of pie?',
    image: 'images/hareFour.jpg',
    buttonText: ['One bite should not hurt...', 'Finish the race instead']
  },
  { 
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis goes through the cavern. As Gervis enters the hole, he can see the light from the other side of his shortcut. The problem is the owner has just come out with an Orthian pistol shouting at him to get off his property!', 
    content: 'Uh oh, what will Gervis do now?',
    image: 'images/hareOne.jpg',
    buttonText: ['Run for the light!', 'Run back!']
  }
]};

function createStory(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-11 story');

  var header = document.createElement('h1');
  header.setAttribute('class', 'story-title')
  header.textContent = info.header;

  var subheader = document.createElement('h1');
  subheader.setAttribute('class', 'story-content')
  subheader.textContent = info.subheader;

  var content = document.createElement('p');
  content.setAttribute('class', 'story-question')
  content.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'col-md-4 col-md-offset-1 img-responsive story-image')

  var buttonText = document.createElement('button');
  buttonText.setAttribute('class', 'col-md-3 choice-one')
  buttonText.textContent = info.buttonText;

  container.appendChild(header);
  container.appendChild(subheader);
  container.appendChild(content);
  container.appendChild(buttonText)
  container.appendChild(photo);
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
    content: 'Elvie chooses to sit under heat lamp. After thirty seconds, Elvie hatches into a human toddler demanding you buy them a cellphone... Hm, that seemed to appease him! How about we start over?',
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
    content: 'Elvie decides to follow the white unicorn into the flames. When Elvie enters the center of the flames, his egg shell cracks and he turns into an enormous chicken. The unicorn transforms into President Lincoln and hops on his back. Orthia can be a very strange place.',
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
    content: 'Gervis runs for the light. As he exits the hole, he hears the sound of gun shots but makes haste to a ridge towards the finish line. The shortcut led straight to the finish and helped him win the race! He has finally beaten his arch-rival, the silver eyepatched Tuxedo Cheetah.',
    image: 'images/hareFive.jpg',
    button: 'You won the race!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Gervis decides to go back. However, as he exits the hole he runs into a vicious looking bear wielding a shotgun and crazed look on his face. It is the owner following him out! Gervis only has one option at this point. That was not a good shortcut!',
    image: 'images/hareSix.jpg',
    button: 'Go back to beginning!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Gervis eats the slice of carrot cake anyways. After continuing along his path, things start to get strange. He sees his nemesis the Tuxedo Cheetah, but he is a tiger now... Now he sees the finish line, but it changes into a large bird soaring above a pyramid. Cake...Bad idea...',
    image: 'images/hareSeven.jpg',
    button: 'Too sick to continue',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Gervis speaks to the large insect sitting next to the piece of carrot cake. After a short conversation, the bug reveals itself to be the notorious Orthian Magician and places a powerful spell on Gervis. The next thing Gervis knows he is starting the race over again. Was that time travel??',
    image: 'images/HareEight.jpg',
    button: 'Go back to beginning!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Gervis decides that one bite really could not hurt. One bite into the famous Pieoneers pie and Gervis looked like a cat on catnip, except one that turned into a big rampaging monster! There was not enough pie that day to keep this monster at bay, a story told to this day by the Pieoneers owner.',
    image: 'images/hareNine.jpg',
    button: 'Food coma time!',
  },
  { 
    header: 'A Race Through Planet Orthia', 
    content: 'Gervis decides to finish the race. He tells the owner he will have to take a raincheck and dashes out the door. Exiting, his whole world changes color and he notices Pieoneers has vanished. Suddenly, an alarm clock is buzzing loudly and Gervis awakens abruptly.',
    image: 'images/hareTen.jpg',
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
  photo.setAttribute('class', 'col-md-5 center-block img-responsive ending-image')

  var button = document.createElement('button');
  button.setAttribute('class', 'col-md-4 ending-button')
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

function hideContent(){
    var content = document.getElementById('hold');    
    content.style.display = 'none';
}

hideContent()

var sections = sections [ 
  {sections:[0, 1, 2]},
  {sections:[1, 10, 11]},
  {sections:[2, 3, 4]},
  {sections:[3, 12, 13]},
  {sections:[4, 14, 15]},
  {sections:[5, 6, 9]},
  {sections:[6, 7, 8]},
  {sections:[7, 18, 19]},
  {sections:[8, 20, 21]},
  {sections:[9, 16, 17]},
  {sections:[10, 0]},
  {sections:[11, 0]},
  {sections:[12, 0]},
  {sections:[13, 0]},
  {sections:[14, 0]},
  {sections:[15, 0]},
  {sections:[16, 1]},
  {sections:[17, 1]},
  {sections:[18, 1]},
  {sections:[19, 1]},
  {sections:[20, 1]},
  {sections:[21, 1]}
];