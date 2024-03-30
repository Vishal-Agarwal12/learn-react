import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="container">
        <h1>CONTACT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab mollitia
          esse doloremque neque tempore porro. A, assumenda nam. Corrupti atque
          numquam quas eum maxime. Neque rerum illo numquam, nam sunt excepturi
          recusandae quas maiores eveniet optio aut velit facere dolor quibusdam
          dolore molestiae voluptate illum laudantium, quis magnam voluptates
          blanditiis.
        </p>

        <div className="btn1">
          <button>
            <div>
              <span class="material-symbols-outlined">message</span>VIA SUPPORT
              CHAT
            </div>
          </button>
          <button>
            <div>
              <span class="material-symbols-outlined">call</span>VIA CALL
            </div>
          </button>
        </div>
        <div className="btn1">
          <button>
            <div>
              {" "}
              <span class="material-symbols-outlined">email</span>VIEW EMAIL
              FORM
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
