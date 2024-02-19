import Nosotros from "../assets/TiendaRepuestos.jpg";
export default function Info() {
  return (
    <>
      <header className="HeaderHistoria">
        <h1 className="TitulosHistoriaH1">Repuestos de Vehículos</h1>
        <p>Tu Tienda Online de Repuestos para Autos y Motos</p>
        <img style={{ maxWidth: "25vw" }} src={Nosotros} alt="Calendario" />
      </header>
      <main className="MainHistoria">
        <section class="nosotros">
          <h2 className="TitulosHistoriaH2">Quiénes Somos</h2>
          <p className="PHisoria">
            Somos una empresa dedicada a la venta de repuestos de vehículos para
            autos y motos. Contamos con una amplia variedad de repuestos
            originales y alternativos de las mejores marcas.
          </p>
          <p className="PHisoria">
            Ofrecemos un servicio de atención al cliente personalizado y
            profesional, para que encuentres los repuestos que necesitas al
            mejor precio.
          </p>
        </section>
        <section class="productos">
          <h2 className="TitulosHistoriaH2">Nuestra Historia</h2>
          <ul>
            <p className="PHisoria">
              En Repuestos de Vehículos, nuestra pasión por los autos y las
              motos nos llevó a convertirnos en tu tienda online de confianza.
              Todo comenzó en el año 2017, cuando un grupo de amigos, unidos por
              su pasión por los vehículos, decidió crear un espacio donde los
              amantes de los autos y las motos pudieran encontrar todo lo que
              necesitan para mantener sus vehículos en perfecto estado. Desde
              nuestros inicios, nos hemos dedicado a ofrecer a nuestros clientes
              la mejor experiencia de compra posible. Contamos con una amplia
              variedad de repuestos originales y alternativos de las mejores
              marcas, a precios competitivos. Además, nuestro equipo de expertos
              está siempre dispuesto a ayudarte a encontrar los repuestos que
              necesitas y a brindarte el mejor asesoramiento. En Repuestos de
              Vehículos, nos sentimos orgullosos de ser parte de la comunidad
              automotriz y de poder contribuir a que los amantes de los autos y
              las motos puedan disfrutar al máximo de su pasión. Gracias por
              elegirnos. Somos tu mejor aliado en el cuidado de tu vehículo.
              Aquí te dejo algunos detalles que puedes agregar a tu historia: El
              año en que se fundó la empresa. Los nombres de los fundadores. La
              motivación que los llevó a iniciar el negocio. Los hitos más
              importantes en la historia de la empresa. Los valores que definen
              a la empresa. El compromiso de la empresa con sus clientes.
              También puedes incluir fotos o videos que ilustren la historia de
              la empresa. Recuerda que el objetivo de la historia es conectar
              con tus clientes y transmitirles la pasión por tu empresa. Espero
              que esto te ayude a crear una historia atractiva y memorable. Si
              tienes alguna otra pregunta, no dudes en preguntar.
            </p>
          </ul>
        </section>
      </main>
    </>
  );
}
