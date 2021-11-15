import React from "react";
import Burger from './Burger';
// import StoreIcon from "../Assets/logo.svg"
import SearchIcon from "../Assets/search.svg"
import CartIcon from "../Assets/bag.svg"

export type NavProps = {
  children?: React.ReactNode;
};

export default function Navbar(props: NavProps) {

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-between">
        {props.children}
        <Burger isExpanded={false} onClick={() => {}} />
        <div className= "h-10 w-24 px-0">
            {/* <img className="w-full h-full" src={StoreIcon} alt="Store Icon"/> */}
        </div>
        <button className="h-10 w-6 ml-10 -mr-6 px-0"> <img className="w-full h-full" src={SearchIcon} alt="Search Icon"/> </button>
        <button className="h-10 w-6 ml-0 -mr-1.5 px-0 order-last"> <img className="w-full h-full" src={CartIcon} alt="Cart Icon"/> </button>
    </div>
  )
}