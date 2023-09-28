import Product from "../components/Product";
import custom from "../images/Products/Custom.png";
import LowProfil from "../images/Products/LowProfil.png";
import HighProfil from "../images/Products/HighProfil.png";
import CircleBlur from "../components/CircleBlur";
import Switches from "../components/Switches";

function ProductsPage() {
  const products = [
    {
      title: "Custom Keyboards",
      description: "ten produkt to ...",
      price: 229,
    },
    {
      title: "High-Profile Keyboards",
      description: "ten produkt to ...",
      price: 186,
    },
    {
      title: "Low-Profile Keyboards",
      description: "ten produkt to ...",
      price: 199,
    },
  ];
  return (
    <div>
      <div className="relative mt-80">
        <CircleBlur additionalClasses=" absolute -top-16 -right-40 lg:top-14 lg:right-0 bg-orange-500" />
        <h2 className="text-white text-[30px] md:text-[45px] lg:text-[72px] flex flex-col items-center justify-center font-bold mb-20">
          Choose the best solution <span>from CHROMEON</span>{" "}
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-4 ">
          <Product
            photo={custom}
            title={products[0].title}
            description={products[0].description}
            price={products[0].price}
          />
          <Product
            photo={HighProfil}
            title={products[1].title}
            description={products[1].description}
            price={products[1].price}
          />
          <Product
            photo={LowProfil}
            title={products[2].title}
            description={products[2].description}
            price={products[2].price}
          />
        </div>
      </div>
      <div>
        <div className="mt-80">
          <Switches />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
