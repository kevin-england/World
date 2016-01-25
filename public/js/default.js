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