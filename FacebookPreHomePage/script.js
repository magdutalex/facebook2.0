const langEl = document.querySelector('.langWrap');
const link = document.querySelector('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

letlink.forEach (el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

var data = {
    "english":
    {
      "title": "Facebook 2.0",
      "description":
      "Facebook helps you connect and communicate with the people in your life."  
    },
    "spanish":
    {
        "title": "Facebook 2.0",
        "description":
        "Facebook te ayuda a conectarte y comunicarte con las personas en tu vida.   "
    },
    "italiano":
    {
        "title": "Facebook 2.0",
        "description":
        "Facebook ti aiuta a connetterti e comunicare con le persone della tua vita."  
    }
}