import { useState } from "react";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "absolute top-[200px] z-50 flex w-full flex-col items-start text-black lg:text-text-light gap-6 bg-white font-bebas py-5 px-4 text-2xl transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen ? "left-0 z-40 shadow shadow-neutral-200" : "-left-full")
        }
      >
        {links.map((link, idx) => {
          if (link.sublinks) {
            return (
              <li key={idx} className="group relative">
                <a href={link.link}>{link.linkText}</a>
                <ul className="z-50 w-full pt-1 pl-5 text-center lg:absolute lg:left-1/2 lg:hidden lg:w-[200px] lg:-translate-x-1/2 lg:pl-0  lg:shadow lg:group-hover:block">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="text-left first:rounded-t last:rounded-b lg:bg-white lg:text-center lg:hover:bg-primary lg:hover:text-white"
                    >
                      <a className="block py-2 px-4" href={sublink.link}>
                        {sublink.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li
                className="relative hover:text-accent  transition-all duration-300"
                key={idx}
              >
                <a href={link.link}>{link.linkText}</a>
              </li>
            );
          }
        })}
        <li className="!block lg:w-auto lg:bg-transparent w-full bg-cta px-2 py-4">
          <a
            href="https://order.toasttab.com/online/hoodoobrownbbq"
            className="block w-full text-white lg:text-accent text-center lg:text-left lg:w-auto"
          >
            Order Online
          </a>
        </li>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
