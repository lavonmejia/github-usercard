/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const lavon = axios.get('https://api.github.com/users/lavonmejia')
// const friendsGits = axios.get(`https://api.github.com/users/${followersArray}`)

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ['lavonmejia', 'marquesj8023', 'juliethrallstewart', 'dustyfingers'];
const followersArray = ['dustyfingers' , 'lavonmejia'];
const friendsGits = axios.get(`https://api.github.com/users/${followersArray}`)

// , "marquesJ8023"

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(cardObject) {
  // define new elements
  console.log(cardObject);
  cardObject = cardObject.data;
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = cardObject.avatar_url;
  card.appendChild(cardImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  const personName = document.createElement('h3');
  personName.classList.add('name');
  personName.textContent = cardObject.name;
  cardInfo.appendChild(personName);

  const personUsername = document.createElement('p');
  personUsername.classList.add('username');
  personUsername.textContent = cardObject.login;
  cardInfo.appendChild(personUsername);

  const personLocation = document.createElement('p');
  personLocation.innerHTML = `Location: ${cardObject.location}`;
  cardInfo.appendChild(personLocation);

  const personProfile = document.createElement('p');
  personProfile.innerHTML = `Profile: <a href=${cardObject.html_url}> ${cardObject.html_url}</a>`;
  cardInfo.appendChild(personProfile);

  const personFollowers = document.createElement('p');
  personFollowers.innerHTML = `Followers: ${cardObject.followers}`;
  cardInfo.appendChild(personFollowers);

  const personFollowing = document.createElement('p');
  personFollowing.innerHTML = `Following: ${cardObject.following}`;
  cardInfo.appendChild(personFollowing);

  const personBio = document.createElement('p');
  personBio.innerHTML = `Bio: ${cardObject.bio}`;
  cardInfo.appendChild(personBio);

return card
}

const cards = document.querySelector('.cards');
// lavon.then(data => {
//      cards.appendChild(createCard(data))})  
friendsGits.then(data => {
        cards.appendChild(createCard(data))
      console.log('All is well here')});

friendsGits.catch(error => {
       cards.appendChild(createCard(data))
      console.log('No worky', error)});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
