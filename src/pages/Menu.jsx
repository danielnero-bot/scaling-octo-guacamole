import '../styles/menu.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dish1 from '../assets/images/Jollofrice.webp'
import dish2 from '../assets/images/Beans.webp'
import dish3 from '../assets/images/EgusiSoup.webp'
import dish4 from '../assets/images/Yamandsauce.webp'
import dish5 from '../assets/images/Spaghetti.webp'

const Menu = () => {
  return (
    <div className="menu-container">
      <Navbar></Navbar>

      {/* Main */}
      <main className="menu-main">
        <section className="menu-hero">
          <h2>Our Menu</h2>
          <p>
            Explore our diverse menu, featuring fresh ingredients and innovative
            dishes.
          </p>
        </section>

        {/* Appetizers Section */}
        <section className="menu-section">
          <h3>Appetizers</h3>
          <div className="menu-grid">
            <div className="menu-card">
              <img src={dish1} alt="Jollof Rice" />
              <div className="menu-card-content">
                <h4>Jollof Rice</h4>
                <p>
                  A flavorful rice dish cooked in tomato, pepper, and onion
                  sauce.
                </p>
                <span>$12.99</span>
              </div>
            </div>

            <div className="menu-card">
              <img src={dish2} alt="Beans" />
              <div className="menu-card-content">
                <h4>Porridge Beans</h4>
                <p>
                  Soft-cooked beans mixed with palm oil, pepper, and spices;
                  hearty and filling.
                </p>
                <span>$10.99</span>
              </div>
            </div>

            <div className="menu-card">
              <img
                src={dish4}
                alt="Boiled Yam and egg Sauce"
              />
              <div className="menu-card-content">
                <h4>Boiled Yam And Egg Sauce</h4>
                <p>
                  Tender boiled yam served with a spicy tomato and egg sauce.
                </p>
                <span>$9.99</span>
              </div>
            </div>
            <div className="menu-card">
              <img
                src={dish3}
                alt="Egusi Soup"
              />
              <div className="menu-card-content">
                <h4>Egusi Soup</h4>
                <p>
                  Melon seed soup cooked with vegetables and meat, eaten with
                  eba (made from garri and hot water).
                </p>
                <span>$9.99</span>
              </div>
            </div>
            <div className="menu-card">
              <img
                src={dish5}
                alt="Spaghetti"
              />
              <div className="menu-card-content">
                <h4>Spaghetti</h4>
                <p>
                  Pasta cooked in spicy tomato sauce, often served with meat or
                  fish.
                </p>
                <span>$9.99</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Menu;