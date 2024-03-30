import React from "react";

const Card = (props) => {
  return (
    <>
      <figure class="bg-slate-100 rounded-xl p-8 bg-pink-200">
        {/* props--------------------------------- */}
        <h2 className="bg-blue-100 text-2xl">{props.username}</h2>
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/20276781/pexels-photo-20276781/free-photo-of-house-next-to-lighthouse-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;
