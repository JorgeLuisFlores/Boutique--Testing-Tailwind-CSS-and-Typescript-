import React from 'react';
import MenuIcon from "../Assets/menu-icon.svg"
// import DropMenu from './DropMenu';

export type BurgerMenuButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  isExpanded: boolean;
  onClick: () => void;
};

export const Burger =({
  className = '',
  style = {},
  isExpanded,
  onClick,
}: BurgerMenuButtonProps) => {
  const classNames = "h-10 w-12 px-0 -ml-3 order-first"
  return (
    <button aria-label="Main Menu" aria-expanded={isExpanded} style={style} onClick={onClick} className={classNames}>
        <img className="w-full h-full" src={MenuIcon} alt="Menu Icon"/>

        {/* <DropMenu open={open} /> */}
    </button>
  )
}
export default Burger