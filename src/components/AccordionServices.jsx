import AccordionGallery from "./AccordionGallery";
import landingImg from "../assets/landingImage.webp";
import institucionalImg from "../assets/institucionalImagen.webp";
import ecommerceImg from "../assets/ecommerceImagen.webp";
import dashboardImg from "../assets/dashboardImagen.webp";

const items = [
  {
    image: landingImg,
    label: "Landing Pages",
    desc: "Páginas optimizadas para convertir visitas en contactos o ventas.",
    link: "#contact",
  },
  {
    image: institucionalImg,
    label: "Sitios Web Institucionales",
    desc: "Webs profesionales que transmiten confianza e identidad de marca.",
    link: "#contact",
  },
  {
    image: ecommerceImg,
    label: "E-Commerce",
    desc: "Tiendas online fáciles de administrar y pensadas para vender.",
    link: "#contact",
  },
  {
    image: dashboardImg,
    label: "Dashboards & Web Apps",
    desc: "Aplicaciones y paneles a medida para optimizar procesos internos.",
    link: "#contact",
  },
];

export default function AccordionServices() {
  return (
    <AccordionGallery
      items={items}
      defaultIndex={0}
      expandRatio={0.52}
      trigger="hover"
      accentColor="#ffffff"
      overlayColor="#0a0a0a"
      textColor="#ffffff"
      grayscale
      showLabels
      duration={0.6}
      ease="power3.out"
      height={460}
      gap={14}
      radius={20}
      orientation="horizontal"
    />
  );
}

