import React from 'react';
import './about.css';
const About = () => {
  return (
    <section id="about" className="about">
       <h2>About Our File Sharing App</h2>
      <div className="about-content">
        <p>
          Our file sharing app is designed to make sharing images quick and easy. With just a few clicks, you can upload an image and generate a corresponding link that can be shared with anyone you choose. Whether you need to send vacation photos to your family or collaborate on a project with colleagues, our app has you covered.
        </p>
        <p>
          Here's how it works: simply navigate to the upload page, select the image you want to share, and click the "Upload" button. Our app will process the image and provide you with a unique link. You can copy this link and share it through email, messaging apps, or social media platforms.
        </p>
        <p>
          The shared image can be accessed by anyone who has the link. It's a convenient way to securely share your images without the need for complex file attachments or bulky downloads. Plus, the link remains active as long as you want, giving you control over the accessibility of your shared content.
        </p>
        <p>
          Start using our file sharing app today and simplify the way you share images with others. It's fast, secure, and hassle-free. Try it out and experience the convenience for yourself!
        </p>
      </div>
      <hr />
    </section>
  );
};

export default About;

