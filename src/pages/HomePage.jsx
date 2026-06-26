import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';

const testimonials = [
  {
    guest: 'Sarah M.',
    imgSrc: './assets/restaurantfood.jpg',
    rating: '4.7',
    text: 'Little Lemon quickly became our favorite neighborhood restaurant. The food is always fresh, and the staff makes every visit feel special.',
  },
  {
    guest: 'David R.',
    imgSrc: './assets/restaurantfood.jpg',
    rating: '5',
    text: 'The flavors are incredible, and the seasonal specials never disappoint. You can truly taste the quality and attention to detail in every dish.',
  },
  {
    guest: 'Emma L.',
    imgSrc: './assets/restaurantfood.jpg',
    rating: '4.8',
    text: 'From the friendly service to the beautifully presented dishes, everything about Little Lemon exceeded our expectations. We can\'t wait to come back!',
  },
  {
    guest: 'James W.',
    imgSrc: './assets/restaurantfood.jpg',
    rating: '4.5',
    text: 'A wonderful dining experience every time. The atmosphere is cozy, the menu is diverse, and the Mediterranean cuisine is absolutely delicious.',
  }
];

const specials = [
  {
    dish: 'Greek Salat',
    imgSrc: './assets/greek salad.jpg',
    price: '12.99',
    text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    dish: 'Bruschetta',
    imgSrc: './assets/bruschetta.jpg',
    price: '5.99',
    text: 'Our Bruschetta is made grom grilled bread that has. been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    dish: 'Lemon Dessert',
    imgSrc: './assets/lemon dessert.jpg',
    price: '5.00',
    text: 'This comes straight from grandmas\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero
        title="Little Lemon"
        subtitle="Chicago"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        linkLabel="Reserve a table"
        linkUrl="/booking"
        imgSrc="./assets/restaurantfood.jpg"
        imgAlt="Restaurant"
      />
      {<Specials
        title="This weeks specials"
        data={specials}
        linkLabel="Order online"
        linkSrc="/order-online"
      />}
      <Testimonials
        title="Testimonials"
        data={testimonials}
      />
      <About
        title="Little Lemon"
        subtitle="Chicago"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
        imgSrc1="./assets/restaurant chef B.jpg"
        imgAlt1="Restaurant"
        imgSrc2="./assets/Mario and Adrian A.jpg"
        imgAlt2="Restaurant"
      />
    </>
  )
}

export default HomePage;