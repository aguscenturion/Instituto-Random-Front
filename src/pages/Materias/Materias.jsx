import React from "react";
import Materia from "./Materia";

import image1 from "../../components/assets/image1.jpg"
import LayoutContainer from "../../components/layout/LayoutContainer";

const cards = [
  {
    id: 1,
    title: "Programacion",
    image: image1,
    text: "Materia dictada por el Profesor : JUAN CARLOS"
  },
];

function Materias() {
  return (
    <LayoutContainer>
      <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4" key={id}>
            <Materia imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
    </LayoutContainer>
    
  );
}

export default Materias;