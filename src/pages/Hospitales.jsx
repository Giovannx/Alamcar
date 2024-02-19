import CardCM from "../components/CardCM";
import { useEffect, useState } from "react";
import axios from "axios";
// import hos1 from "../assets/hosp.png";

const app2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacto/lista",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data[0] &&
        data.map((item) => (
          <div key={item.centroMedicoID}>
            <CardCM nombre={item.nombreDelCentro} />
          </div>
        ))}
    </>
  );
};
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/centromedico/lista",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data[0] &&
        data.map((item) => (
          <div key={item.centroMedicoID} className="cardta">
            <img src={hos1} className="imgtabla" />
            <CardCM
              nombre={item.nombreDelCentro}
              comuna={item.comunaCentro}
              direccion={item.direccionesCentros}
              horASemana={item.horarioAperturaSemana || "Horario no disponible"}
              horCSemana={item.horarioCierreSemana || "Horario no disponible"}
              horASabado={item.horarioAperturaSabado || "Horario no disponible"}
              horCSabado={item.horarioCierreSabado || "Horario no disponible"}
              horADomingo={
                item.horarioAperturaDomingo || "Horario no disponible"
              }
              horCDomingo={item.horarioCierreDomingo || "Horario no disponible"}
              telefonos={item.telefonoCentros || "Teléfono no disponible"}
              dominio={item.dominioWeb || "Sitio web no disponible "}
              red={item.redSocialId || "Sitio web no disponible "}
              email={item.contactoEmail || "Correo no disponible "}
              clasificacion={item.clasificacionTipoCentro}
              urgencia={item.urgencia}
            />
          </div>
        ))}
    </>
  );
}
export default Home;
