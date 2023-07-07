import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    label: "Shorten",
    to: "./",
  },
  {
    label: "Preview",
    to: "/preview",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(items[e.key].to);
  };

  return (
    <Header>
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="horizontal"
        items={items.map((item, index) => ({
          key: index,
          ...item,
        }))}
      />
    </Header>
  );
};

export default Navbar;
