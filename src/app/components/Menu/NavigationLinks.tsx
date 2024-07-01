import { MenuData } from '@/app/types/menuData';

type Props = {
  links: MenuData;
  handleClick?: () => void;
  class_name: string;
};

const NavigationLinks = ({ links, handleClick, class_name }: Props) => {
  return (
    <>
      {links ? (
        links.navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={class_name}
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
