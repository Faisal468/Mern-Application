
import h1 from "../../../assets/images/hexagon 1.png";
import h2 from "../../../assets/images/hexagon 2.png";
import h3 from "../../../assets/images/hexagon 3.png";
import h4 from "../../../assets/images/hexagon 4.png";
import "./Blogs.css";


const Blogs = () => {
    return (
    <div className="full-blog-container">
        <header className="blog-header">
        <h1>We Offer Excellence: Luxury, Professionalism, and Affordability</h1>
        <p className="blog-subtitle">
            Discover how we redefine luxury travel with exceptional vehicles, reliable services, and unbeatable value.
        </p>
        </header>

        <section className="blog-content">
        {/* Top Brands Luxury Vehicles */}
        <div className="blog-section">
            <img
            src={h1} 
            alt="Luxury Vehicles"
            className="blog-image"
            />
            <h2>Top Brands Luxury Vehicles</h2>
            <p>
            Luxury vehicles represent the epitome of craftsmanship and comfort. From
            renowned brands like Rolls Royce, Bentley, and Mercedes-Benz, these vehicles
            redefine what it means to travel in style. Whether youre attending a corporate event, a wedding, or a leisurely getaway, our fleet is designed to make a lasting impression.
            </p>
            <p>
            Our collection includes the latest models equipped with cutting-edge technology, premium interiors, and unmatched performance. These vehicles are more than transportation—they are a statement of elegance and sophistication.
            </p>
        </div>

        {/* Professionals & Reliable Chauffeurs */}
        <div className="blog-section">
            <img
            src={h2} 
            alt="Professional Chauffeurs"
            className="blog-image"
            />
            <h2>Professionals & Reliable Chauffeurs</h2>
            <p>
            Our chauffeurs are the backbone of our service. Highly trained and experienced, they ensure every journey is safe, comfortable, and enjoyable. Punctuality and professionalism are at the core of our chauffeur services.
            </p>
            <p>
            From helping you with your luggage to providing insider tips on the best places to visit, our chauffeurs go above and beyond to deliver a personalized experience. Rest assured, you’re in the hands of professionals who prioritize your satisfaction and safety.
            </p>
        </div>

        {/* Best & Competitive Price Solutions */}
        <div className="blog-section">
            <img
            src={h3} // Replace with your image URL
            alt="Competitive Pricing"
            className="blog-image"
            />
            <h2>Best & Competitive Price Solutions</h2>
            <p>
            Luxury doesn’t have to break the bank. We believe everyone deserves to experience the best without compromising their budget. That’s why we offer competitive pricing for all our premium services.
            </p>
            <p>
            Whether you need a one-time service or a long-term arrangement, we tailor our pricing to fit your needs. Our transparent pricing ensures there are no hidden fees, giving you the best value for your investment.
           </p>
        </div>

        
        <div className="blog-section">
          <img
            src={h4} 
            alt="Customer Loyalty"
            className="blog-image"
            />
            <h2>Customer Loyalty Programs</h2>
            <p>
            Loyalty deserves to be rewarded. Our customer loyalty programs are designed to thank you for choosing us repeatedly. Earn points with every booking and redeem them for exclusive benefits, discounts, and upgrades.
          </p>
          <p>
            Our loyalty program members enjoy perks like priority booking, complimentary add-ons, and personalized offers tailored to their preferences. It’s our way of showing appreciation for your continued trust in our services.
          </p>
        </div>
      </section>

      <footer className="blog-footer">
        <p>© 2025 Luxury Travel Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blogs;
