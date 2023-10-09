import "./cartCat.scss";
import { Link } from "react-router-dom";

const CartCat = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="cartCat">
        <img src={item.img} alt="cartItemImgErr" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CartCat;
