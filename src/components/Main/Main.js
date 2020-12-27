import React from "react";

export const Main = () => {
  return (
    <main className="Main">
      <aside>
        <img
          src="./src/assets/jpg/image-about-dark.jpg"
          alt="Black sofa and white table"
        />
      </aside>
      <section className="AboutSection">
        <div className="Section-Heading">About our furniture</div>
        <div className="Section-Description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illo
          commodi molestias quidem optio impedit earum eaque ipsam, voluptatem
          est tempore totam officiis ut mollitia perferendis quibusdam
          asperiores rerum aut!
        </div>
      </section>
      <aside>
        <img src="./src/assets/jpg/image-about-light.jpg" alt="White chair" />
      </aside>
    </main>
  );
};
