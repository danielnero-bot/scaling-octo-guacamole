import "../styles/menu.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import dish1 from "../assets/images/Jollofrice.webp";
import dish2 from "../assets/images/Beans.webp";
import dish3 from "../assets/images/EgusiSoup.webp";
import dish4 from "../assets/images/Yamandsauce.webp";
import dish5 from "../assets/images/Spaghetti.webp";
import dish6 from "../assets/images/puff puff.webp";
import dish7 from "../assets/images/samosa.webp";
import dish8 from "../assets/images/fishroll1.webp"
import dish9 from '../assets/images/goatmeat.webp'
import dish10 from '../assets/images/nkwobi.webp'

const Menu = () => {
  const appetizers = [
    {
      src: dish6,
      name: "Puff Puff",
      desc: "Soft, golden balls of sweet fried dough — fluffy inside, crisp outside, and irresistibly delicious.",
      price: "$5.99",
    },
    {
      src: dish7,
      name: "Samosa",
      desc: "Crispy, golden pastry pockets filled with spicy minced meat or vegetables — a perfect savory bite.",
      price: "$6.99",
    },
    {
      src: dish8,
      name: "Fish Rolls",
      desc: "A crispy golden pastry filled with spiced, flaky fish — a savory Nigerian favorite.",
      price: "$6.99",
    },
  ];

  const mainDishes = [
    {
      src: dish1,
      name: "Jollof Rice",
      desc: "A flavorful rice dish cooked in tomato, pepper, and onion sauce.",
      price: "$12.99",
    },
    {
      src: dish2,
      name: "Porridge Beans",
      desc: "Soft-cooked beans mixed with palm oil, pepper, and spices; hearty and filling.",
      price: "$10.99",
    },
    {
      src: dish4,
      name: "Boiled Yam And Egg Sauce",
      desc: "Tender boiled yam served with a spicy tomato and egg sauce.",
      price: "$9.99",
    },
    {
      src: dish3,
      name: "Egusi Soup",
      desc: "Melon seed soup cooked with vegetables and meat, eaten with eba.",
      price: "$9.99",
    },
    {
      src: dish5,
      name: "Spaghetti",
      desc: "Pasta cooked in spicy tomato sauce, often served with meat or fish.",
      price: "$9.99",
    },
    {
      src: dish9,
      name: "Goat Meat Peppersoup",
      desc: "A spicy, aromatic broth made with tender goat meat and bold Nigerian herbs.",
      price: "$9.99",
    },
    {
      src: dish10,
      name: "Nkwobi",
      desc: "Nkwobi is a delicious Nigerian dish made from cow foot cooked in spicy palm oil sauce, seasoned with local spices and garnished with utazi leaves",
      price: "$9.99",
    },
  ];

  const desserts = [
    {
      src: dish6,
      name: "Puff Puff (Sweet Treat)",
      desc: "Golden, fluffy fried dough balls, lightly sweet and perfect for dessert.",
      price: "$5.99",
    },
  ];

  const renderSection = (title, items) => (
    <section className="menu-section">
      <h3>{title}</h3>
      <div className="menu-grid">
        {items.map((dish, i) => (
          <motion.div
            key={i}
            className="menu-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <img loading="lazy" src={dish.src} alt={dish.name} />
            <div className="menu-card-content">
              <h4>{dish.name}</h4>
              <p>{dish.desc}</p>
              <span>{dish.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="menu-container">
      <Navbar />

      <main className="menu-main">
        <section className="menu-hero">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore our delicious range of Nigerian dishes — from classic main
            courses to sweet treats.
          </motion.p>
        </section>

        {renderSection("Appetizers", appetizers)}
        {renderSection("Main Dishes", mainDishes)}
        {renderSection("Desserts", desserts)}
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
