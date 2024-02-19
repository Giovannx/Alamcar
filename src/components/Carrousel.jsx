import Carousel from "react-bootstrap/Carousel";
import Hosp from "../assets/Repuestos3.jpg";
import Hosp1 from "../assets/Repuestos1.jpg";
import Hosp2 from "../assets/Repuestos2.jpg";

const carouselelements = [
  {
    image: Hosp,
    text: "Imagen de la tienda",
    alt: "Carrousel1",
    title: "Promocion1",
  },
  {
    image: Hosp1,
    text: "Imagen de la tienda",
    alt: "Carrousel dos",
    title: "Promocion2",
  },
  {
    image: Hosp2,
    text: "Imagen de la tienda",
    alt: "Carrousel tres",
    title: "Promocion3",
  },
];

const carouselelements2 = [
  {
    image: Hosp,
    text: "Este es un hospital muy lindo",
    alt: "Hospital uno",
    title: "Hopital",
  },
  {
    image: Hosp1,
    text: "Este es un hospital muy lindo",
    alt: "Hospital dos",
    title: "Hosital",
  },
  {
    image: Hosp2,
    text: "Este es un hospital muy lindo",
    alt: "Hospital tres",
    title: "Hospital",
  },
];
const carouselelements3 = [
  {
    image: Hosp,
    text: "",
    alt: "b",
    title: "",
  },
  {
    image: Hosp1,
    text: "",
    alt: "a",
    title: "",
  },
  {
    image: Hosp2,
    text: "",
    alt: "",
    title: "",
  },
];

console.log(carouselelements);
function Carrousel() {
  return (
    <>
      <div className="CarouselFull">
        <div className="Carousel">
          <Carousel data-bs-theme="dark">
            {carouselelements3.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="carouselimg" src={item.image} alt={item.alt} />

                <Carousel.Caption>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Carrousel;
