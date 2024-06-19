'use server';

import { CONTENT_TYPE } from '@/contentfulTypes/contentful';
import { createClient, EntryCollection, EntrySkeletonType } from 'contentful';

console.log('sprawdzanie czy deploy na vercelu to widzi: ', process.env.TEST);

const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

const client = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getContent<T>(
  contentType: CONTENT_TYPE,
  locale: string,
): Promise<T> {
  const response = await client.getEntries({
    content_type: contentType,
    locale,
  });

  return response.items[0].fields as T;
}

export async function getMultipleContent<T>(
  contentType: CONTENT_TYPE,
  locale: string,
): Promise<T[] | null> {
  try {
    const response: EntryCollection<EntrySkeletonType> =
      await client.getEntries<EntrySkeletonType>({
        content_type: contentType,
        locale,
      });

    const data = response.items.map((x) => {
      return x.fields;
    });

    return data as T[];
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
}
