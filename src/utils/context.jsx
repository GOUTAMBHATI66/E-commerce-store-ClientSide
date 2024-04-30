import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const axiosClient = axios.create({
  baseURL: "https://e-commerce-store-admin.onrender.com",
});

// Get Nav-Links
const navLinks = () => axiosClient.get("/api/nav-links");

// Get men products
const menProducts = () => axiosClient.get("/api/men-products?populate=*");

const singleMenProduct = (id) =>
  axiosClient.get(`/api/men-products/${id}/?populate=*`);

// Get Women Products
const womenProducts = () => axiosClient.get("/api/women-products?populate=*");

const singleWomenProduct = (id) =>
  axiosClient.get(`/api/women-products/${id}/?populate=*`);

// Get Kids Products
const kidsProducts = () => axiosClient.get("/api/children-products?populate=*");

const singleKidProduct = (id) =>
  axiosClient.get(`/api/children-products/${id}/?populate=*`);

// Get Electronic Products
const electronicProducts = () =>
  axiosClient.get("/api/electronic-products?populate=*");

const singleElectronicProduct = (id) =>
  axiosClient.get(`/api/electronic-products/${id}/?populate=*`);

const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [cartItems, setCartItem] = useState(
    localStorage.getItem("CartItem")
      ? JSON.parse(localStorage.getItem("CartItem"))
      : []
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [selected, setSelected] = useState(null);
  const [singleProduct, setSingleProduct] = useState({});
  const [clicked, setClicked] = useState("");

  // handling add to beg section when user click on "add to beg" button
  const handleAddToBeg = (productObj, quantity) => {
    const titleURLArr = {
      title: productObj.attributes?.title,
      imgURL: productObj.attributes?.img?.data[0]?.attributes?.url,
      quantity: quantity,
      price: productObj.attributes?.Price,
    };

    let copyProduct = [...cartItems];
    // console.log(copyProduct);

    let index = copyProduct?.findIndex((p) => p.title === titleURLArr?.title);
    // console.log(index);
    if (index !== -1) {
      copyProduct[index].quantity += quantity;
    } else {
      copyProduct = [titleURLArr, ...copyProduct];
    }
    setCartItem(copyProduct);
    // console.log(copyProduct);
  };

  // console.log(cartItems);

  // hanling remove a item from chatItem on click delete
  const handleRemoveItem = (itemObj) => {
    // console.log(itemObj);
    const copyObj = [...cartItems];
    // console.log(copyObj);
    const filteredArr = copyObj.filter((data) => data.title !== itemObj.title);
    setCartItem(filteredArr);
    // console.log(filteredArr);
  };

  // handling decrease and increase button from cartItem
  const handleCartItemQuantity = (type, itemObj) => {
    let copyObj = [...cartItems];
    let index = copyObj.findIndex((p) => p.title === itemObj?.title);
    if (type === "increase") {
      copyObj[index].quantity += 1;
    } else if (type === "decrease") {
      if (copyObj[index].quantity === 1) return;
      copyObj[index].quantity -= 1;
    }
    setCartItem(copyObj);
    // console.log(copyObj);
  };

  // handling Total amount section
  const [totalAmount, setTotalAmout] = useState(0);

  useEffect(() => {
    let amount = 0;
    let copyObj = [...cartItems];
    if (copyObj.length !== 0) {
      copyObj.map((item) => (amount += item.quantity * item.price));
      setTotalAmout(amount);
    }
  }, [cartItems]);
  localStorage.setItem("CartItem", JSON.stringify(cartItems));

  // console.log(totalAmount);

  // Authentication Process (Create an new account)
  const registerUser = (userName, userEmail, userPass) =>
    axiosClient.post("/api/auth/local/register", {
      username: userName,
      email: userEmail,
      password: userPass,
    });

  // Sign in in your existing account
  const onSingIn = (userEmail, userPass) =>
    axiosClient.post("/api/auth/local", {
      identifier: userEmail,
      password: userPass,
    });

  return (
    <Context.Provider
      value={{
        navLinks,
        menProducts,
        singleMenProduct,
        womenProducts,
        singleWomenProduct,
        kidsProducts,
        singleKidProduct,
        electronicProducts,
        singleElectronicProduct,
        showCart,
        setShowCart,
        showMenuItems,
        setShowMenuItems,
        handleAddToBeg,
        cartItems,
        setCartItem,
        handleCartItemQuantity,
        handleRemoveItem,
        totalAmount,
        setTotalAmout,
        registerUser,
        onSingIn,
        theme,
        setTheme,
        selected,
        setSelected,
        singleProduct,
        setSingleProduct,
        clicked,
        setClicked,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
