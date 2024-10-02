import aboutUs from "./assets/about-us.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <img src={aboutUs} alt="Image" />
      <div className="about-title">
        <h2> About Us</h2>
      </div>
      <div className="about-us">
        <p>
          {" "}
          Welcome to DartonFits, where minimalism and style come together to
          create clothing that is both timeless and versatile. We believe that
          fashion should be simple, elegant, and above all, comfortable. Our
          mission is to offer you a coll-ection of thoughtfully designed pieces
          that become the foundation of your wardrobe, allowing you to express
          your unique style effortlessly.
        </p>
      </div>
      <div className="our-collection">
        <h3>Our Collection</h3>
        <p>
          {" "}
          Our collection is a curated selection of wardrobe essentials that
          blend minimalism with modern style. From sleek dresses to tailored
          tops and versatile bottoms, each piece is designed to be a staple in
          your closet. Whether you’re dressing for a casual day out or a special
          event, our clothing is adaptable to any occasion.
        </p>
      </div>
      <div className="our-philosophy">
        <h3>Our Philosophy</h3>
        <p>
          At the core of our brand is a simple yet powerful philosophy: less is
          more. We believe that a well-curated wardrobe with fewer, better
          pieces can have a profound impact on your everyday life. Our designs
          are intentional, focusing on quality over quantity. Each garment is
          crafted with meticulous attention to detail, ensuring that it not only
          looks good but feels good too.
        </p>
      </div>

      <div className="our-community">
        <h3>Join Our Community</h3>
        <p>
          At DartonFits, we don’t just sell clothing—we build a community. We
          invite you to join us on our journey to redefine minimalism in
          fashion. Follow us on social media to stay updated on our latest
          collections, style tips, and exclusive offers. We’re excited to have
          you as part of our growing family.
        </p>
      </div>

      <div className="get-in-touch">
        <h3>Get in Touch</h3>
        <p>
          Have questions or need assistance? We’re here to help! Visit our{" "}
          <a href="/contactus"> contact us</a> page or reach out to us directly
          at nishreytal@gmail.com. We’d love to hear from you.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
