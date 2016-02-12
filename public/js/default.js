var characters = { characters: [
  { 
    id: 1,
    name: 'Elvie the Egg', 
    description: 'Select and watch Elvie roll!',
    image: 'images/vlax.jpg',
    title: 'The Rolling Egg',
    button: 'Get Rolling'
  },
  { 
    id: 2,
    name: 'Gervis the Hare', 
    description: 'Select and get Gervis racing!',
    image: 'images/octurnus.jpg',
    title: 'A Race Through Planet Orthia',
    button: 'Get Racing'
  }
]};

function createCharacter(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-5 character');

  var header = document.createElement('h1');
  header.setAttribute('class', 'character-name')
  header.textContent = info.name;

  var title = document.createElement('p');
  title.setAttribute('class', 'title')
  title.textContent = info.title;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'img-responsive character-image')

  var description = document.createElement('p');
  description.setAttribute('class', 'description')
  description.textContent = info.description;

  var button = document.createElement('button');
  button.setAttribute('class', 'character-button');
  button.setAttribute('data-character', info.id)
  button.textContent = info.button;
  button.addEventListener('click', function() {
    var choiceHolder = document.getElementById('holder');
    choiceHolder.innerHTML = '';
      if (button.getAttribute('data-character') == 1) {
        var chapters = document.getElementById('chap-0');
        chapters.style.display = 'block';
        var choose = document.getElementById('selection');
        choose.style.display = 'none';
    } else {
        var chapter = document.getElementById('chap-5');
        chapter.style.display = 'block';
        var choose = document.getElementById('selection');
        choose.style.display = 'none';
    }
  }, false);

  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(photo);
  container.appendChild(title);
  container.appendChild(button)
  console.log(container)
  return container;
}

var stories = { stories: [
  { 
    id: 0,
    header: 'The Rolling Egg',
    subheader: 'An egg named Elvie begins to roll. Elvie rolls down a hillside shaped like a woman in a dress, here on the spanning Orthian planes. Swerving from right to left, he comes to a split in his path.', 
    content: 'Which way will Elvie go?',
    image: 'images/egg.jpg',
    buttonText: ['Continue down the hill', 'Go towards an unexpected alleyway'],
    choices: [1, 2]
  },
  { 
    id: 1,
    header: 'The Rolling Egg',
    subheader: 'Elvie decides to roll towards the unexpected alleyway. As he enters the small village from the alley, he feels a very cold breeze. There is a local inn nearby that looks to be quite comfortable, but he also sees a big heat lamp that the locals are standing near. Decisions, decisions.', 
    content: 'Where will Elvie go?',
    image: 'images/eggFour.jpg',
    buttonText: ['Enter the inn', 'Keep warm under the heat lamp'],
    choices: [10, 11]
  },
  { 
    id: 2,
    header: 'The Rolling Egg',
    subheader: 'Elvie continues on down the hill. Elvie rolls down the hill and sees two Orthian unicorns parting ways. One is a big white steed and the other was a black horn with a brown nose. He decides he wants to follow one!', 
    content: 'Which unicorn will Elvie follow?',
    image: 'images/eggOne.jpg',
    buttonText: ['White Unicorn', 'Black Unicorn'],
    choices: [3, 4]
  },
  { 
    id: 3,
    header: 'The Rolling Egg',
    subheader: 'Elvie follows the white unicorn. Elvie has rolled into an odd opening near a big raging fire. Elvie watches as the unicorn nods towards a big black metal item sitting atop the flames, telling Elvie this is where he must go.', 
    content: 'Should Elvie enter the flames and listen to this crazy unicorn?',
    image: 'images/eggTwo.jpg',
    buttonText: ['Maybe not', 'Follow blindly'],
    choices: [12, 13]
  },
  { 
    id: 4,
    header: 'The Rolling Egg',
    subheader: 'Elvie follows the black unicorn. Elvie rolls into a giant cavern where he meets a gnome guarding the path. The gnome tells Elvie that he must make a choice between a red potato and a blue onion before he lets him pass. If he chooses correctly, he may continue.', 
    content: 'Which will Elvie choose?',
    image: 'images/eggThree.jpg',
    buttonText: ['Red potato!', 'Blue onion!'],
    choices: [14, 15]
  },
  { 
    id: 5,
    header: 'A Race Through Planet Orthia',
    subheader: 'A hare named Gervis has started a race through Orthia. Though the race has just begun, his opponent is now far behind. The young hare is feeling pretty sleepy, but sees a cavern that could be a shortcut nearby.', 
    content: 'What is Gervis going to do?',
    image: 'images/hare.jpg',
    buttonText: ['Take a quick break', 'Use shortcut through random cavern'],
    choices: [6, 9]
  },
  { 
    id: 6,
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis decides to take a quick break. As he dozes off, he is suddenly awakened by the scent of two different pastries. He can smell a delicious carrot cake wafting from the window of a nearby house and can also smell the scent of amazing pies coming from a local bakery named Pieoneers. Gervis cannot resist.', 
    content: 'Which pastry should Gervis pursue?',
    image: 'images/hareTwo.jpg',
    buttonText: ['Take the carrot cake', 'Go to Pieoneers'],
    choices: [7, 8]
  },
  { 
    id: 7,
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis stereotypically goes for the carrot cake. He could not resist, however, as he comes up to the window, there is something strange about this cake. It smells exactly like carrot cake, but has a moldy look to it that makes it a little less appealing to the young hare. But he did come all this way...', 
    content: 'What should Gervis do?',
    image: 'images/hareThree.jpg',
    buttonText: ['Eat it anyways!', 'Speak to the big insect nearby'],
    choices: [18, 19]
  },
  { 
    id: 8,
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis chooses to head into Pieoneers, the local bakery, in the little Orthian village nearby. As he enters, the aromas overwhelm his senses and he feels a strange desire to gorge on as much pie as he possibly can. The human owner offers him a free pie to get started, but Gervis suddenly remembers he is still in a race.', 
    content: 'Should Gervis accept the slice of pie?',
    image: 'images/hareFour.jpg',
    buttonText: ['One bite should not hurt...', 'Finish the race instead'],
    choices: [20, 21]
  },
  { 
    id: 9,
    header: 'A Race Through Planet Orthia',
    subheader: 'Gervis goes through the cavern. As Gervis enters the hole, he can see the light from the other side of his shortcut. The problem is the owner has just come out with an Orthian shotgun shouting at him to get off his property!', 
    content: 'Uh oh, what will Gervis do now?',
    image: 'images/hareOne.jpg',
    buttonText: ['Run for the light!', 'Run back!'],
    choices: [16, 17]
  },
  { 
    id: 10,
    header: 'The Rolling Egg', 
    subheader: 'Elvie enters the inn. As Elvie enjoys the warmth from within, his egg slowly begins to crack. Is that a...Dragon? Look out, Elvie just burned you!',
    image: 'images/eggFive.jpg',
    buttonText: ['You are burned to a crisp'],
    choices: [0]
  },
  { 
    id: 11,
    header: 'The Rolling Egg', 
    subheader: 'Elvie chooses to sit under heat lamp. After thirty seconds, Elvie hatches into a human toddler demanding you buy them a cellphone... Hm, that seemed to appease him! How about we start over?',
    image: 'images/eggSix.jpg',
    buttonText: ['Go back to beginning!'],
    choices: [0]
  },
  { 
    id: 12,
    header: 'The Rolling Egg', 
    subheader: 'Elvie decides he should not enter the fiery flames. As Elvie turns back, his egg begins cracking slowly. The egg shell crumbles and soon you realize Elvie is a pile of delicious scrambled eggs! What the?!',
    image: 'images/eggEight.jpg',
    buttonText: ['Time to eat!'],
    choices: [0]
  },
  { 
    id: 13,
    header: 'The Rolling Egg', 
    subheader: 'Elvie decides to follow the white unicorn into the flames. When Elvie enters the center of the flames, his egg shell cracks and he turns into an enormous chicken. The unicorn transforms into President Lincoln and hops on his back. Orthia can be a very strange place.',
    image: 'images/eggSeven.png',
    buttonText: ['Go back to beginning!'],
    choices: [0]
  },
  { 
    id: 14,
    header: 'The Rolling Egg', 
    subheader: 'Elvie takes the red potato. The gnome tells Elvie there is a difference between knowing the path and walking the path. All goes black and suddenly the little egg comes back to the light. Elvie has entered the matrix.',
    image: 'images/eggNine.jpg',
    buttonText: ['Free your mind'],
    choices: [0]
  },
  { 
    id: 15,
    header: 'The Rolling Egg', 
    subheader: 'Elvie takes the blue onion, though it looks much different than any onion he had ever seen. After a few seconds, Elvie begins to feel faint and asks the gnome what was in the onion. Before he could answer, Elvie disappears and reappears near the top of the hill he started at. That was no onion!',
    image: 'images/eggTen.jpg',
    buttonText: ['Go back to beginning!'],
    choices: [0]
  },
  { 
    id: 16,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis runs for the light. As he exits the hole, he hears the sound of gun shots but makes haste to a ridge towards the finish line. The shortcut led straight to the finish and helped him win the race! He has finally beaten his arch-rival, the silver eyepatched Tuxedo Cheetah.',
    image: 'images/hareFive.jpg',
    buttonText: ['You won the race!'],
    choices: [5]
  },
  { 
    id: 17,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis decides to go back. However, as he exits the hole he runs into a vicious looking bear wielding a shotgun and crazed look on his face. It is the owner following him out! Gervis only has one option at this point. That was not a good shortcut!',
    image: 'images/hareSix.jpg',
    buttonText: ['Go back to beginning!'],
    choices: [5]
  },
  { 
    id: 18,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis eats the slice of carrot cake anyways. After continuing along his path, things start to get strange. He sees his nemesis the Tuxedo Cheetah, but he is a tiger now... Now he sees the finish line, but it changes into a large bird soaring above a pyramid. Cake...Bad idea...',
    image: 'images/hareSeven.jpg',
    buttonText: ['Too sick to continue'],
    choices: [5]
  },
  { 
    id: 19,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis speaks to the large insect sitting next to the piece of carrot cake. After a short conversation, the bug reveals itself to be the notorious Orthian Magician and places a powerful spell on Gervis. The next thing Gervis knows he is starting the race over again. Was that time travel??',
    image: 'images/HareEight.jpg',
    buttonText: ['Go back to beginning!'],
    choices: [5]
  },
  { 
    id: 20,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis decides that one bite really could not hurt. One bite into the famous Pieoneers pie and Gervis looked like a cat on catnip, except one that turned into a big rampaging monster! There was not enough pie that day to keep this monster at bay, a story told to this day by the Pieoneers owner.',
    image: 'images/hareNine.jpg',
    buttonText: ['Food coma time!'],
    choices: [5]
  },
  { 
    id: 21,
    header: 'A Race Through Planet Orthia', 
    subheader: 'Gervis decides to finish the race. He tells the owner he will have to take a raincheck and dashes out the door. Exiting, his whole world changes color and he notices Pieoneers has vanished. Suddenly, an alarm clock is buzzing loudly and Gervis awakens abruptly.',
    image: 'images/hareTen.jpg',
    buttonText: ['Go back to the beginning!'],
    choices: [5]
  }
]};


function createStory(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-11 story');
  container.setAttribute('id', 'chap-' + info.id);
  container.style.display = 'none';

  var header = document.createElement('h1');
  header.setAttribute('class', 'story-title');
  header.textContent = info.header;

  var containerOne = document.createElement('div');
  containerOne.setAttribute('class', 'center-block')

  var subheader = document.createElement('h1');
  subheader.setAttribute('class', 'story-content');
  subheader.textContent = info.subheader;

  var content = document.createElement('p');
  content.setAttribute('class', 'story-question');
  content.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'col-md-6 col-md-offset-3 img-responsive story-image');

  var containerTwo = document.createElement('div');
  containerTwo.setAttribute('id', 'button-holder');

  var choices = document.createElement('span');
  choices.setAttribute('data-choice', info.id);

  for (var i = 0; i < info.choices.length; i++) {
    var chapterButtons = document.createElement('button');
    chapterButtons.setAttribute('class', 'col-md-5 choice');
    chapterButtons.setAttribute('data-choice', info.choices[i]);
    chapterButtons.textContent = info.buttonText[i];
    chapterButtons.addEventListener('click', function() {
      var choiceHolder = document.getElementById('chap-' + info.id);
      choiceHolder.style.display = 'none';
      var choose = document.getElementById('selection');
      choose.style.display = 'none';
      console.log(info.choices[i])
      var choice = document.getElementById('chap-' + this.getAttribute('data-choice'));
      choice.style.display = 'block';
    }, false);
    choices.appendChild(chapterButtons)
  }

  container.appendChild(containerOne);
  containerOne.appendChild(header);
  containerOne.appendChild(subheader);
  containerOne.appendChild(content);
  containerOne.appendChild(photo);
  containerOne.appendChild(containerTwo);
  containerTwo.appendChild(choices);
  console.log(container);
  return container;
}


var start = document.getElementById('select')
  start.addEventListener('click', function() {
    var content = document.getElementById('home');    
    content.style.display = 'none';
    var newContent = document.getElementById('characters');    
    newContent.style.display = 'block';
  }, false);

function hideContent(){
   var content = document.getElementById('characters');    
   content.style.display = 'none';
}

function content() {
  var holder = document.getElementById('holder');
  
  for (var i = 0; i < characters.characters.length; i++) {
    var theCharacter = createCharacter(characters.characters[i]);
    holder.appendChild(theCharacter);
  };

  var hold = document.getElementById('hold');

  for (var i = 0; i < stories.stories.length; i++) {
    var theStory = createStory(stories.stories[i]);
    hold.appendChild(theStory);
  };
}

hideContent()
content();