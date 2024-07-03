import React from "react";
import Card from "../../../components/card/Card";
function News() {
  return (
    <>
    <div className="text-navy-700 dark:text-white"> 

      <div className=" mx-[10%] mt-10">
        <h1>
          <span className="text-navy-700 font-bold dark:text-white">NEWS</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic
          culpa ea eum dolor. Commodi, accusamus aperiam ullam fugit modi
          facilis officia, eum est, consequatur numquam inventore? Atque fugit
          illum et libero voluptate quas! Velit expedita corrupti dolorem
          dignissimos unde culpa debitis error blanditiis eos repudiandae.
          Asperiores aliquid velit voluptatibus!
        </p>
      </div>
      <div className="mx-[10%] mt-10  grid gap-4 md:grid-cols-4">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
    </>
  );
}

export default News;
