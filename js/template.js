export const Card = {
  Image: "asset/luke-stackpoole-ubSUwrr04Ks-unsplash.jpg",
  Title: "À propos",
  Ville: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme 
    l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
  Météo: "3°C, vent NO à 10 km/h, 58 % d'humidité weather.com",
  Quartiers: "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS",
  Population: "8,468 millions (2021)",
  Superficie: "783,8 km²",
};
// template
export const templateCard = {
  el: document.querySelector("section"),
  printf() {
    this.el.innerHTML += `
    <h2><span><ion-icon name="bulb-outline"></ion-icon></span>${Card.Title}</h2>
    <div class="image-container">
    <img
        src="${Card.Image}"
        alt="New York"
      />
      </div>
      <p>
      <span><ion-icon name="partly-sunny-outline"></ion-icon></span><b>Description :</b> ${Card.Ville}
      </p>
      <p><b>Météo :</b>${Card.Météo}</p>
      <p><b>Quartier :</b>${Card.Quartiers}</p>
      <p><b>Population :</b>${Card.Population}</p>
      <p><b>Superficie :</b>${Card.Superficie}</p>`;
  },
};
