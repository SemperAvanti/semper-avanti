'use server';
import { createClient } from 'contentful';

const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

const client = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getContent(contentType: string, locale: string) {
  const response = await client.getEntries({
    content_type: contentType,
    locale,
  });

  return response.items[0].fields;
}
