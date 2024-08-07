import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import NavBrand from "./NavBrand";
import NavItems from "./NavItems";

type NavbarProps = {
  isLogoVisible?: boolean;
  navTo: (path: string) => void;
} & HTMLAttributes<HTMLElement>;

const NavBar = ({ isLogoVisible = false, navTo, ...props }: NavbarProps) => {
  return (
    <nav
      className={twMerge(
        props.className,
        isLogoVisible ? "py-12" : "py-0",
        "fixed left-0 top-0 z-[999] flex h-20 w-full items-center justify-between px-8 sm:h-12 md:h-16",
        "px-[2rem] transition-all duration-300 ease-in-out",
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-start space-x-[70px]">
        <NavBrand isLogoVisible={isLogoVisible} />
      </div>

      <NavItems navTo={navTo} isLogoVisible={isLogoVisible}/>
    </nav>
  );
};

export default NavBar;
