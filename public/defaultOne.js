function createTabs(text) {
  var tabs = document.createElement('li' + text);
  tabs.setAttribute('class', 'tabs')
  var oneTab = document.createTextNode('Overview');
  var twoTab = document.createTextNode('The Story');
  var threeTab = document.createTextNode('Characters');
  var fourTab = document.createTextNode('Members Login');
  tabs.appendChild(oneTab);
  tabs.appendChild(twoTab);
  tabs.appendChild(threeTab);
  tabs.appendChild(fourTab);

  document.body.appendChild(tabs);
}

createTabs()