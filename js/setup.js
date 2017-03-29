'use strict';

function generateRandomWizards(count, firstNames, lastNames, coatColors, eyeColors) {
  var result = [];
  for (var i = 0; i < count; i++) {
    result.push({
      name: getRandomElement(firstNames) + ' ' + getRandomElement(lastNames),
      coatColor: getRandomElement(coatColors),
      eyeColor: getRandomElement(eyeColors)
    });
  }
  return result;
}

function pasteWizardsIntoDOM(wizards, template) {
  var wizardsFragment = document.createDocumentFragment();
  wizards.forEach(function (wizard) {
    var nextWizard = template.cloneNode(true);
    nextWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    nextWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    nextWizard.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
    wizardsFragment.appendChild(nextWizard);
  });
  return wizardsFragment;
}

function getRandomElement(arr) {
  var idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

var setup = document.querySelector('.setup');
var similarWizards = setup.querySelector('.setup-similar');
var similarWizardsList = similarWizards.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content;

var FIRST_NAMES = ['Иван', 'Хуан Себастиан', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['Верон', 'де Марья', 'Вальц', 'Мирабелла', 'Онопко', 'Топольницкая', 'Ирвинг', 'Нионго'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var wizards = generateRandomWizards(WIZARDS_COUNT, FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYE_COLORS);

var similarWizardsFragment = pasteWizardsIntoDOM(wizards, wizardTemplate);

setup.classList.remove('hidden');
similarWizardsList.appendChild(similarWizardsFragment);
similarWizards.classList.remove('hidden');

