import { INavigationFields } from '@/contentfulTypes/contentful';
import { getContent } from '@/lib/api';
import { MenuData } from '@/app/types/menuData';

export const fetchIds = async (locale: string): Promise<MenuData | null> => {
  try {
    const response: INavigationFields = await getContent('navigation', locale);
    const navItems =
      response.navItems &&
      response.navItems.map((item: string) => ({
        title: item,
      }));
    const formattedData: MenuData = { navItems: navItems || [] };
    return formattedData;
  } catch (error) {
    return null;
  }
};
