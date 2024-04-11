import { Link } from "react-router-dom";
const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.",
  },
  {
    id: 2,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.",
  },
  {
    id: 3,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.",
  },
  {
    id: 4,
    title: "Banana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti animi dignissimos ad quaerat incidunt ipsam, qui nihil culpa temporibus voluptas laborum, vel excepturi, quis repellendus ipsa eveniet reprehenderit doloremque.",
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`}>
          <div key={product.id} className="bg-warning m-3 p-2 text-dark">
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
