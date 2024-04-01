import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Widget = ({ type }) => {
  let data;
  let amount;

  switch (type) {
    case "user":
      data = {
        title: "Recipe Creator",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      amount = 325;
      break;
    case "order":
      data = {
        title: "Recipe Seeker",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      amount = 550;
      break;
    case "earning":
      data = {
        title: "Recipes",
        isMoney: false,
        link: "See all recipes",
        icon: (
          <RestaurantMenuIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      amount = 120;
      break;
    case "balance":
      data = {
        title: "Recipes With Ratings",
        isMoney: false,
        link: "See all ratings",
        icon: (
          <FoodBankIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      amount = 75;
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {Math.floor(Math.random() * 100)} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
