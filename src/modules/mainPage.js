import image from '../img/main.svg';
export const main = (container) => {
  const content = `
    <div class="mainContent">
      <div class="mainLeft">
        <p>Elevate Your Dining Experience - One Order at a Time!</p>
        <img src="${image}" alt="kitchen">
      </div>
      <div class="mainRight">
        <div class="coupon">
          10% off
          <p>Using code: offer</p>
        </div>
        <p>
          Experience the perfect blend of tradition and innovation with every bite at our restaurant. Our chefs craft
          each dish using the freshest ingredients, ensuring a memorable dining experience.
        </p>
        <a href="#" class="menuExtra">Order now</a>
        <div class="adress">
          <p class="adressMain">Adress:</p>
          <p class="adressInfo">
            84 Axletree Way St.
          </p>
          <p class="adressInfo">
            Wednesbury,LN WS10 9QY
          </p>
          <p class="adressMain">
            Phone:
          </p>
          <p class="adressInfo">
            +1 533 555 932
          </p>
          <p class="adressMain">
            Email:
          </p>
          <p class="adressInfo">
            info@ovenly.com
          </p>
        </div>
      </div>
    </div>

  `;

  container.innerHTML = content;
}
