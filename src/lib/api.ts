'use server';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getContent(contentType: string, locale: string) {
  const response = await client.getEntries({
    content_type: contentType,
    locale,
  });

  return response.items[0].fields;
}
