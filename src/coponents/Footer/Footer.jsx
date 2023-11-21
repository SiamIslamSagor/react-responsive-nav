import SvgComponent from "./SvgComponent";

const Footer = () => {
  return (
    <div className="border-8 relative">
      <div className="absolute font-medium  leading-5 bottom-0 grid gap-8 p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam sint molestias. Facere possimus necessitatibus excepturi ut.
          Reprehenderit minima dolore explicabo quaerat fuga beatae neque
          debitis tenetur ab aliquid in vel, placeat perferendis, ducimus
          inventore dolores modi similique corrupti vitae omnis. Eveniet nulla
          doloremque quod libero temporibus perspiciatis placeat saepe um quos?
          Quis corporis possimus autem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam sint molestias. Facere possimus necessitatibus excepturi ut.
          Reprehenderit minima dolore explicabo quaerat fuga beatae neque
          debitis tenetur ab aliquid in vel, placeat perferendis, ducimus
          inventore dolores modi similique corrupti vitae omnis. Eveniet nulla
          doloremque quod libero temporibus perspiciatis placeat saepe quos?
          Quis corporis possimus autem?
        </p>
      </div>
      <SvgComponent></SvgComponent>
    </div>
  );
};

export default Footer;
