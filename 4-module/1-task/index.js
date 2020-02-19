/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let elem = document.createElement('ul');
  
  for (let i = 0; i < friends.length; i++ ) {
  elem.innerHTML += `<li>${friends[i].firstName} ` + `${friends[i].lastName}</li>`;
  }

  return elem;
 }
