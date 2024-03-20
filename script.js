const navBar = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".header__navItem__link");
const workExperienceSection = document.querySelector(".main__workExperience");
const peachBoxSection = document.querySelector(".main__peachBox");
const skillsetSection = document.querySelector(".main__skillset");
const myProjectsSection = document.querySelector(".main__myProjects");
const instSection = document.querySelector(".main__violetBox");
const dribbleSection = document.querySelector(".main__dribbble");
const reviewsSection = document.querySelector(".main__reviews");
const photoSection = document.querySelector(".main__photography");
const sections = document.querySelectorAll(".section");
const navBtn = document.getElementById("nav-btn");
const navmenu = document.querySelector(".header__mobileMenu");

let dataJsonEn = "../json/en.json";
navBtn.addEventListener("click", () => {
  navmenu.classList.toggle("hidden");
});

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => WorkExpirence(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => peachBox(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => skillset(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => myProjects(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => inst(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => dribble(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => reviews(data))
  .catch((error) => console.error("error"));

fetch(dataJsonEn)
  .then((responce) => responce.json())
  .then((data) => photo(data))
  .catch((error) => console.error("error"));

console.log(sections);
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    this.classList.add("nav-active");
  });
});

window.addEventListener("scroll", scrolActiv);

function scrolActiv() {
  if (pageYOffset > 700) {
    navBar.classList.add("scroll-nav");
  } else {
    navBar.classList.remove("scroll-nav");
  }
  let start = 0;

  sections.forEach((section, i) => {
    let rect = section.getBoundingClientRect();
    if (rect.top <= 0) {
      start = i;
    }
    navLinks.forEach((link) => {
      link.classList.remove("nav-active");
    });

    navLinks[start].classList.add("nav-active");
  });
}
function WorkExpirence(data) {
  let firstBlock = `<div class ="main__text__workExperience"><span class="main__workExperience-p">${
    data[0].WorkExperience.titel[0]
  }</span>

    <h2 class="main__workExperience-h2">${data[0].WorkExperience.titel[1]}</h2>
</div>
    <div class ="experinceList ">${data[0].WorkExperience.item.map(
      (val) => `<div class="experince-item">
      <p class="experience-num">${val.number}</p>
      <div>
      <span class="experience-val"><span style="color: #609bff ">${val.titelI[0]},</span>
      ${val.titelI[1]}</span>
      </div>
      <p class="expernce-discp">${val.description}</p>
      </div>`
    )}
      
      </div>
  `;
  workExperienceSection.innerHTML = firstBlock;
}
function peachBox(data) {
  let secondBlock = `<div class="wrapper wrapper__md"><div class="main__philosophy">
  <div class="philosophy__textBlock">
    <h2 class="philosophy__textBlock-h2">${data[1].main__peachBox.title[0]}</h2>
    <p class="philosophy__textBlock-p">
      I think everyone wants the same thing - relationship with
      humanity, peace with the metaphysical, and experience with the
      universe. I try to grasp these things with my values:
      authenticity, creativity, & hospitality.
    </p>
    <span class="philosophy__textBox-span">${data[1].main__peachBox.title[1]}</span>
  </div>
  <div class="philosophy__photo">
    <img src="${data[1].main__peachBox.item}" alt="Philosophy & values" />
  </div>
</div>
</div>`;
  peachBoxSection.innerHTML = secondBlock;
}

function skillset(data) {
  let threBlock = `
  <div class="wrapper wrapper__md">
  <div class="wrapper__skillset">
    <div class="skillset__textBlock">
      <h2 class="skillset__textblock-h2">${data[2].skillset.title}</h2>
      <p class="skillset__textblock-p">
        With skills in over 4 different fields of design, I am the
        perfect person to hire when it comes to a full fledged project.
        Whatever your needs are, I can pretty much take on any
        challenge.
      </p>
    </div>
    <div class="skillset__list">
      <div class="skillset__list-item">
        <img
          src="${data[2].skillset.item[0].src}"
          alt="${data[2].skillset.item[0].alt}"
          class="skill-item-icon"
        />
        <h3 class="skill-item-h3">${data[2].skillset.item[0].heading}</h3>
        <p class="skill-item-p">
        Working at Facebook has taught me a lot about how to
          understand users, solve problems and build great products.
        </p>
      </div>
      <div class="skillset__list-item">
        <img
          src="${data[2].skillset.item[1].src}"
          alt="${data[2].skillset.item[1].alt}"
          class="skill-item-icon"
        />
        <h3 class="skill-item-h3">${data[2].skillset.item[1].heading}</h3>
        <p class="skill-item-p">
          I started my design journey with motion design in my college
          days. Motion is something that really fascinates me because of
          the flexibility of story telling.
        </p>
      </div>
      <div class="skillset__list-item">
        <img
          src="${data[2].skillset.item[2].src}"
          alt="${data[2].skillset.item[2].alt}"
          class="skill-item-icon"
        />
        <h3 class="skill-item-h3">${data[2].skillset.item[2].heading}</h3>
        <p class="skill-item-p">
          My experience at dribbble has helped me learn to develop the
          eye for design. Colors, typography, layout and the whole
          package.
        </p>
      </div>
      <div class="skillset__list-item">
        <img
          src="${data[2].skillset.item[3].src}"
          alt="${data[2].skillset.item[3].alt}"
          class="skill-item-icon"
        />
        <h3 class="skill-item-h3">${data[2].skillset.item[3].heading}</h3>
        <p class="skill-item-p">
          Clicking pictures really brings out the creative in me.
          Phtography really makes you look and percieve things in a
          different way.
        </p>
      </div>
    </div>
  </div>
</div>
  `;
  skillsetSection.innerHTML = threBlock;
}

function myProjects(data) {
  let fourthSection = `
  <div class="main__myProjects-firstColmn">
          <div class="myProjects-textBlock">
            <span class="myProjects-textBlock-span">${data[3].myProjects.title[0]}</span>
            <h2 class="myProjects-textBlock-h2">
            ${data[3].myProjects.title[1]}
            </h2>
          </div>
          <div class="myProjects-item">
            <img
              src="${data[3].myProjects.item[0].src}"
              alt=""
              class="myProjects-item-img"
            />
            <div class="myProjects-item-TextBlock">
              <h3 class="myProjects-item-h3">${data[3].myProjects.item[0].textBlockHeading}</h3>
              <p class="myProjects-item-p">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <div class="myProjects-item">
            <img
              src="${data[3].myProjects.item[1].src}"
              alt=""
              class="myProjects-item-img"
            />
            <div class="myProjects-item-TextBlock">
              <h3 class="myProjects-item-h3">${data[3].myProjects.item[1].textBlockHeading}</h3>
              <p class="myProjects-item-p">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </div>
        </div>
        <div class="main__myProjects-secondColumn">
          <div class="myProjects-item">
            <img
              src="${data[3].myProjects.item[2].src}"
              alt=""
              class="myProjects-item-img"
            />
            <div class="myProjects-item-TextBlock">
              <h3 class="myProjects-item-h3">${data[3].myProjects.item[2].textBlockHeading}</h3>
              <p class="myProjects-item-p">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <div class="myProjects-item">
            <img
              src="${data[3].myProjects.item[3].src}"
              alt=""
              class="myProjects-item-img"
            />
            <div class="myProjects-item-TextBlock">
              <h3 class="myProjects-item-h3">${data[3].myProjects.item[3].textBlockHeading}</h3>
              <p class="myProjects-item-p">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <button class="myProjects-btn">${data[3].myProjects.btnVal}</button>
        </div>
  `;
  myProjectsSection.innerHTML = fourthSection;
}

function inst(data) {
  let fifthSection = `
  <div class="main__instagram">
  <div class="wrapper wrapper__md">
    <div class="main__wrapper-instagram">
      <div class="main__instagram-textBlock">
        <h2 class="main__instagram-textBlock-h2">${data[4].inst.title[0]}</h2>
        <p class="main__instagram-textBlock-p">
          If you area a person who enjoys photography, then I highly
          recommend that you check out my Instagram. I’m an avid
          traveller and I capture the best moments that I would love to
          cherish with the world
        </p>
        <span class="main__instagram-textBlock-span"
          >${data[4].inst.title[1]}</span
        >
      </div>
      <div class="main__instagram-photo">
        <img src="${data[4].inst.item[0]}" alt="${data[4].inst.item[1]}" />
      </div>
    </div>
  </div>
</div>
  `;
  instSection.innerHTML = fifthSection;
}
function dribble(data) {
  let sixthSection = `
  <div class="dribbble__textblock">
  <h2 class="dribbble__textblock-h2">${data[5].dribble.title[0]}</h2>
  <p class="dribbble__textblock-p">
    Each dribbble shot is made with love and care. Do check out my work
    on Dribbble. Likes and comments are appreciated.
  </p>
  <a href="https://dribbble.com/" class="dribbblie__textblock-a"
    >${data[5].dribble.title[1]}</a
  >
</div>
<img
  src="${data[5].dribble.item[0]}"
  alt="${data[5].dribble.item[1]}""
  class="dribbble-img"
/>
  `;
  dribbleSection.innerHTML = sixthSection;
}

function reviews(data) {
  let seventhSection = `
  <div class="reviews__textBlock">
            <h2 class="reviews__textBlock-h2">
            ${data[6].reviews.title[0]}
            </h2>
            <p class="reviews__textBlock-p">
            ${data[6].reviews.title[1]}
            </p>
            <a href="/" class="reviews__textBlock-a">${data[6].reviews.title[2]}</a>
          </div>
          <div class="reviews__cardBlock">
            <div class="reviews__cardBlock-card">
              <img
                src="${data[6].reviews.item[0].img[0]}"
                alt="${data[6].reviews.item[0].img[1]}"
                class="reviews__cardBlock-card-img"
              />
              <p class="reviews__cardBlock-card-p">
              ${data[6].reviews.item[0].reviews}
              </p>
              <span class="reviews__cardBlock-card-span1">${data[6].reviews.item[0].name}</span>
              <span class="reviews__cardBlock-card-span2">${data[6].reviews.item[0].company}</span>
            </div>
            <div class="reviews__cardBlock-card">
              <img
                src="${data[6].reviews.item[1].img[0]}"
                alt="${data[6].reviews.item[1].img[1]}"
                class="reviews__cardBlock-card-img"
              />
              <p class="reviews__cardBlock-card-p">
              ${data[6].reviews.item[1].reviews}
              </p>
              <span class="reviews__cardBlock-card-span1">${data[6].reviews.item[1].name}</span>
              <span class="reviews__cardBlock-card-span2">${data[6].reviews.item[0].company}</span>
            </div>
            <div class="reviews__cardBlock-card">
              <img
                src="${data[6].reviews.item[2].img[0]}"
                alt="${data[6].reviews.item[2].img[1]}"
                class="reviews__cardBlock-card-img"
              />
              <p class="reviews__cardBlock-card-p">
              ${data[6].reviews.item[2].reviews}
              </p>
              <span class="reviews__cardBlock-card-span1">${data[6].reviews.item[2].name}</span>
              <span class="reviews__cardBlock-card-span2">${data[6].reviews.item[2].company}</span>
            </div>
          </div>
  
  `;
  reviewsSection.innerHTML = seventhSection;
}
function photo(data) {
  let eightSection = `
  <div class="wrapper wrapper__md">
          <div class="photography__textBlock">
            <h2 class="photography__textBlock-h2">${data[7].photo.title[0]}</h2>
            <p class="photography__textBlock-p">
            ${data[7].photo.title[1]}
            </p>
          </div>
          <div class="main__photography-bar">
            <button class="photography-bar-btn">${data[7].photo.btns[0]}</button>
            <button class="photography-bar-btn">${data[7].photo.btns[1]}</button>
            <button class="photography-bar-btn">${data[7].photo.btns[2]}</button>
            <button class="photography-bar-btn">${data[7].photo.btns[3]}</button>
          </div>
          <div class="main__photography-photoBlock">
            <img
              src="${data[7].photo.img.img1[0]}"
              alt="${data[7].photo.img.img1[1]}"
              class="photography-photoBlock-img"
            />
            <img
              src="${data[7].photo.img.img2[0]}"
              alt="${data[7].photo.img.img2[1]}"
              class="photography-photoBlock-img"
            />
            <img
              src="${data[7].photo.img.img3[0]}"
              alt="${data[7].photo.img.img3[1]}"
              class="photography-photoBlock-img"
            />
            <img
              src="${data[7].photo.img.img4[0]}"
              alt="${data[7].photo.img.img4[1]}"
              class="photography-photoBlock-img"
            />
          </div>
        </div>
  `;
  photoSection.innerHTML = eightSection;
}
function form(data) {}
