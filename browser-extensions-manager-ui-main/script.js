let body = document.querySelector('body');
let searchContainer = document.querySelector('.search-bar');
let toggleBtn = document.querySelector('.dark-light-btn');
let allBtn = document.querySelector(".actions .btn--highlight");
let activeBtn = document.querySelector(".actions .active");
let inactiveBtn = document.querySelector(".actions .inactive");
let allData = [];
let isAllBtn = false;
let isActiveBtn = false;
let isInActiveBtn = false;


allBtn.addEventListener('click', () => {
    isAllBtn = true;
    isActiveBtn = false;
    isInActiveBtn = false;

    renderCards(allData);

    allBtn.style.backgroundColor = 'hsl(3, 71%, 56%)';
    activeBtn.style.backgroundColor = '#f7f7f7';
    inactiveBtn.style.backgroundColor = '#f7f7f7';
    allBtn.style.color = '#fff';
    activeBtn.style.color = 'hsl(226, 25%, 17%)';
    inactiveBtn.style.color = 'hsl(226, 25%, 17%)';
});

activeBtn.addEventListener('click', () => {
    isAllBtn = false;
    isActiveBtn = true;
    isInActiveBtn = false;

    const activeCards = allData.filter(item => item.isActive);
    renderCards(activeCards);

    activeBtn.style.backgroundColor = 'hsl(3, 71%, 56%)';
    allBtn.style.backgroundColor = '#f7f7f7';
    inactiveBtn.style.backgroundColor = '#f7f7f7';
    activeBtn.style.color = '#fff';
    allBtn.style.color = 'hsl(226, 25%, 17%)';
    inactiveBtn.style.color = 'hsl(226, 25%, 17%)';
});

inactiveBtn.addEventListener('click', () => {
    isAllBtn = false;
    isActiveBtn = false;
    isInActiveBtn = true;

    const inactiveCards = allData.filter(item => !item.isActive);
    renderCards(inactiveCards);

    inactiveBtn.style.backgroundColor = 'hsl(3, 71%, 56%)';
    allBtn.style.backgroundColor = '#f7f7f7';
    activeBtn.style.backgroundColor = '#f7f7f7';
    inactiveBtn.style.color = '#fff';
    allBtn.style.color = 'hsl(226, 25%, 17%)';
    activeBtn.style.color = 'hsl(226, 25%, 17%)';
});


const getJsonDetails = async () => {
    try {
      let response = await fetch('./data.json');
      let data = await response.json();

      allData = data;
      renderCards(allData);

    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
};

const renderCards = (cardsToRender) => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    cardsToRender.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <div class="details--one">
            <div class="image-container">
              <img src="${item.logo}" alt="${item.name}">
            </div>
            <div class="card-contents">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>
          </div>
          <div class="details--two">
            <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            <label class="switch">
              <input type="checkbox" ${item.isActive ? "checked" : ""}>
              <span class="slider"></span>
            </label>
          </div>
        `;

        cardContainer.appendChild(card);
    });
}


getJsonDetails();

function removeItem(index) {
    allData.splice(index, 1);
    renderCards(allData);
  }
toggleBtn.addEventListener('click', () => {
    let image = document.querySelector('.dark-light-btn img');
    const allCards = document.querySelectorAll('.card'); 
    let section_two_heading = document.querySelector(".section-two h2");
    console.log("section two header::",section_two_heading);
    if (image.src.includes('icon-moon.svg')) {
        image.src = './assets/images/icon-sun.svg';
        image.alt = "sun image";
        toggleBtn.style.backgroundColor = "hsl(226, 11%, 37%)";
        body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)"
        searchContainer.style.backgroundColor = "hsl(225, 23%, 24%)";
        section_two_heading.style.color = "#fff";
        allCards.forEach(card => {
            card.style.backgroundColor = "hsl(225, 23%, 24%)";
            card.style.color = "#fff";
        });

    } else {
        image.src = './assets/images/icon-moon.svg';
        image.alt = "moon image";
        body.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)"
        searchContainer.style.backgroundColor = "hsl(200, 60%, 99%)";
        toggleBtn.style.backgroundColor = "lightgray";
        section_two_heading.style.color = "hsl(225, 23%, 24%)";
        allCards.forEach(card => {
            card.style.backgroundColor = "#fff";
            card.style.color = "#000";
        });
      }
})
