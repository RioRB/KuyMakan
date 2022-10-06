import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List of Restaurants</h2>
        <div id="resto-list" class="restaurants">

        </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    const restoContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
