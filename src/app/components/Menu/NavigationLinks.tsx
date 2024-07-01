import { MenuData } from "@/app/types/menuData";

type Props = {
  links: MenuData;
  handleClick?: () => void;
};

const NavigationLinks = ({ links, handleClick }: Props) => {
  return (
    <>
      {links ? (
        links.navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="navigation__item"
              onClick={handleClick}
            >
              {item.title}
            </a>
          </li>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default NavigationLinks;
