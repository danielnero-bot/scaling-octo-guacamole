import dish1 from '../assets/images/Jollofrice.webp'
import dish2 from '../assets/images/EgusiSoup.webp'
import dish3 from '../assets/images/Yamandsauce.webp'
import avatar1 from '../assets/images/istockphoto-2210411614-612x612.webp'
import avatar2 from "../assets/images/istockphoto-2215371929-612x612.webp"
import avatar3 from "../assets/images/istockphoto-1673644510-612x612.webp";


export default function Main() {
    return (
      <>
        <main className="main-content">
          <div className="content-wrapper">
            <section className="hero-section">
              <div className="hero-inner">
                <h1>Quick Plate</h1>
                <p>Savor the taste of home, delivered to your door.</p>
                <div className="hero-buttons">
                  <button className="btn-primary">Order Now</button>
                  <button className="btn-outline">View Menu</button>
                </div>
              </div>
            </section>

            <section className="featured-section">
              <h2>Featured Dishes</h2>
              <div className="dish-grid">
                <div className="dish-card">
                  <div
                    className="dish-image"
                    style={{ "background-image": `url(${dish1})` }}
                  ></div>
                  <div className="dish-info">
                    <h3>Jollof Rice</h3>
                    <p>Spiced tomato rice with rich, smoky flavor.</p>
                  </div>
                </div>

                <div className="dish-card">
                  <div
                    className="dish-image"
                    style={{ "background-image": `url(${dish2})` }}
                  ></div>
                  <div className="dish-info">
                    <h3>Egusi Soup</h3>
                    <p>Nutty melon seed stew with vegetables.</p>
                  </div>
                </div>

                <div className="dish-card">
                  <div className="dish-image" style={{ "background-image": `url(${dish3})` }}></div>
                  <div className="dish-info">
                    <h3>Boiled Yam And Egg Sauce</h3>
                    <p>Boiled yam with savory tomato-egg mix.</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className='btn-primary' type="button">View All Dishes</button>
              </div>
            </section>

            <section className="reviews-section">
              <h2>What Our Customers Say</h2>
              <div className="reviews-grid">
                <div className="review-card">
                  <div className="review-header">
                    <div
                      className="avatar"
                      style={{ "background-image": `url(${avatar1})` }}
                    ></div>
                    <div>
                      <p className="name">John Ephraim</p>
                      <p className="date">2 months ago</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="review-text">
                    “The Jollof rice was bursting with flavor — smoky, spicy,
                    and perfectly cooked. Truly one of the best I’ve had!”
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <div
                      className="avatar"
                      style={{ "background-image": `url(${avatar2})` }}
                    ></div>
                    <div>
                      <p className="name">Tolu Moses</p>
                      <p className="date">3 months ago</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="review-text">
                    “The Egusi soup was absolutely delicious — rich, flavorful,
                    and perfectly spiced. It tasted homemade and comforting.”
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <div
                      className="avatar"
                      style={{ "background-image": `url(${avatar3})` }}
                    ></div>
                    <div>
                      <p className="name">Favour Benson</p>
                      <p className="date">4 months ago</p>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="review-text">
                    “The yam and egg sauce was simple yet so satisfying — soft
                    yam paired with a rich, tasty tomato-egg mix.”
                  </p>
                </div>
              </div>
            </section>

            <section className="contact-section">
              <h2>Contact Us</h2>
              <p>For inquiries or reservations, please contact us at:</p>
              <p>
                Email:
                <a href="mailto:nero80311@gmail.com">nero80311@gmail.com</a> |
                Phone:
                <a href="tel:2348069132153">234(0)806-913-2153</a>
              </p>
            </section>
          </div>
        </main>
      </>
    );
    
}
