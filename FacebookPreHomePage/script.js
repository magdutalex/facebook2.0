let langEl = document.querySelector('.langWrap');
let link = document.querySelector('a');
let titleEl = document.querySelector('.title');
let descrEl = document.querySelector('.description');

link.forEach(el => {
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