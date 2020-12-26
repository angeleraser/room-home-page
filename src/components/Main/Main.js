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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          repellendus delectus provident natus vel, accusamus amet quibusdam
          maiores adipisci sit, commodi nostrum deleniti quaerat tempora
          officiis quos, asperiores voluptates fugiat.
        </div>
      </section>
      <aside>
        <img src="./src/assets/jpg/image-about-light.jpg" alt="White chair" />
      </aside>
    </main>
  );
};
