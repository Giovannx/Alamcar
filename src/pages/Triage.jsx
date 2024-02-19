import React from "react";
// import esi1 from "../assets/esi1.jpg";
// import esi2 from "../assets/esi2.jpg";
// import esi3 from "../assets/esi3.jpg";
// import esi4 from "../assets/esi4.jpg";
// import esi5 from "../assets/esi5.jpg";

export const Triage = () => {
  return (
    <>
      <h1 className="ti">Triage Hospitalario</h1>
      <h2 className="sub">
        Existen tres niveles de atención, dependiendo de la complejidad de la
        atención y que pueden tener dependencia municipal o del Servicio de
        Salud Respectivo:
      </h2>
      <div className="parf1">
        <h3>ESI 1: Emergencia con riesgo vital</h3>
        <p className="el-paciente-debe">
          El paciente debe recibir atención inmediata.
          <br />
          Ejemplos: Paro cardiorrespiratorio, o lesión traumática que no
          responde a estímulos.
        </p>
        <img src={esi1} style={{ maxWidth: "500px" }} />
      </div>
      <div className="parf2">
        <h3>ESI 2: Paciente de Alta Complejidad</h3>
        <p className="la-atenci-n-debe-ser">
          La atención debe ser a la brevedad o no más de 30 minutos.
          <br />
          Ejemplo: compromiso de conciencia, quemaduras de cara, cuello y/o
          genitales, sangramiento profuso.
        </p>
        <img src={esi2} style={{ maxWidth: "500px" }} />
      </div>
      <div className="parf3">
        <h3>ESI 3: Paciente de mediano riesgo o complejidad</h3>
        <p className="la-atenci-n-debe-ser-2">
          La atención debe ser antes de 1 hora y 30 minutos, pero dependerá de
          la cantidad de pacientes 
          <br />
          Ejemplo: crisis hipertensivas (alza/baja de presión arterial),
          contusiones múltiples.
        </p>
        <img src={esi3} style={{ maxWidth: "400px" }} />
      </div>
      <div className="parf4">
        <h3>ESI 4: No Urgente / Baja complejidad</h3>
        <p className="tiene-car-cter">
          Tiene carácter ambulatorio y puede ser atendido en el SAPU o SAR más
          cercano.
          <br />
          Ejemplo: cuadros gastrointestinales o respiratorios simples, dolor
          abdominal, reacciones alérgicas
        </p>
        <img src={esi4} style={{ maxWidth: "500px" }} />
      </div>
      <div className="parf5">
        <h3>ESI 5: No Urgente / Atención General</h3>
        <p className="no-requiere-una-acci">
          No requiere una acción diagnóstica, terapéutica o de enfermería de
          forma inmediata. Será atendido cuando exista cupo disponible o puede
          asistir a un Cesfam.
          <br />
          Ejemplo resfríos y curaciones.
        </p>
        <img src={esi5} style={{ maxWidth: "500px" }} />
      </div>
    </>
  );
};
export default Triage;
