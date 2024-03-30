import React from "react";

const Middle = () => {
  return (
    <div className="middle">
      <div className="middle-content">
        <h1>Your Feet Deserves the Best !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia
          quam aspernatur, facere ipsum modi quod sequi illum exercitationem
          labore error veritatis quae impedit maxime cum sunt quaerat voluptatum
          eveniet doloremque consequatur quidem voluptatem. Maiores nobis
          asperiores magnam, nam, laudantium corrupti ea quasi laborum
          blanditiis assumenda nihil consequatur ratione aliquid.
        </p>
        <div middle-btn>
          <button onClick={() => alert("You have Clicked")} type="button">
            Shop Now
          </button>
          <button onClick={() => alert("You have Clicked")} type="button">
            Category
          </button>
        </div>
        <p>Also Available on: </p>
        <img className="img1" src="./images/social.png" />
        <img className="img2" src="./images/flipkart-icon.png" />
      </div>
      <div className="middle-image">
        <img src="./public/images/shoes.png" />
      </div>
    </div>
  );
};

export default Middle;
