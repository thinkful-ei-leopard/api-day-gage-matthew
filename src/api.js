const BASE_URL = 'https://thinkful-list-api.herokuapp.com/gage-matthew';

function getItems() {
  return fetch(`${BASE_URL}/items`)
}

function createItem(name) {
  let newItem = JSON.stringify({
    name
  });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: newItem
  })
}

export default {
  getItems,
  createItem
};
