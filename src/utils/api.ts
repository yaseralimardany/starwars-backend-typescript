import fetch from 'node-fetch';

const BASE_URL = 'https://swapi.dev/api/';

export type FetchResponse = {
  error: boolean,
  data: any,
}

export async function fetchByUrl(url: string): Promise<FetchResponse> {
  try {
    const response = await fetch(BASE_URL + url);
    const body = await response.json();
    return { error: false, data: body };
  } catch (e) {
    console.error("Error happened on fetchByUrl", new Date(), e);
  }
  return { error: true, data: null };
}