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
        <a href="#">Order now</a>
      </div>
    </div>
  `;

  container.innerHTML = content;
}
