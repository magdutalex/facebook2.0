currentLanguage = "GB";

changeLanguage = (lang) => {
  console.log(lang);
  document.querySelectorAll("*").forEach((htmlElement) => {
    if (
      htmlElement.classList.contains(lang) &&
      htmlElement.classList.contains("translateable")
    ) {
      htmlElement.classList.remove("hiddenElement");
      htmlElement.classList.add("showElement");
    }

    if (
      !htmlElement.classList.contains(lang) &&
      htmlElement.classList.contains("translateable")
    ) {
      htmlElement.classList.add("hiddenElement");
      htmlElement.classList.remove("showElement");
    }
  });
};
