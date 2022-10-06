import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__overview">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="customerReview">
        <p class="reviewCustomer">"${review.review}"</p>
        <p class="reviewName">${review.name},</p>
        <p class="reviewDate">${review.date}</p>
    </div>`).join('')}
  </div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img class="restaurants-item__header__poster" alt="${restaurants.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <div class="restaurants-item__header__rating">
            <p>⭐️<span class="restaurants-item__header__rating__score">${restaurants.rating}  |  ${restaurants.city}</span></p>
        </div>
    </div>
    <div class="restaurants-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
