import { getContent } from '@/lib/api';

type NavItem = {
  title: string;
};

type MenuData = {
  navItems: NavItem[];
};

export const fetchIds = async (locale: string): Promise<MenuData | null> => {
  try {
    const response = await getContent('navigation', locale);
    const navItems =
      response.navItems &&
      response.navItems.map((item: string) => ({
        title: item,
      }));
    const formattedData = { navItems };
    return formattedData;
  } catch (error) {
    return null;
  }
};
