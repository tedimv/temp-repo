import { PrismaClient } from '@prisma/client';
import { redirect, json } from 'solid-start/server';
import type { APIEvent } from 'solid-start/api';

export const prismaClient = new PrismaClient();


type ApiFn = (event: APIEvent) => Promise<any>;

export function extractCookieValue(cookie: string, key: string) {
  const regex = new RegExp(`${key}=(?<${key}>[a-zA-Z0-9]+)`);
  return regex.exec(cookie)?.groups?.[key];
}

export function authenticatedEndpoint(apiFn: ApiFn): ApiFn {
  return async (event: APIEvent) => {
    const { request } = event;
    const cookies = request.headers.get('cookie');
    // if (!cookies) {
    //   return json({}, 302);
    //   // event.request
    // }

    const bookieSession = extractCookieValue(cookies || '', 'bookieSession');
    console.log({ cookies, bookieSession });

    // ?.split(';')
    // .map(cookie => cookie.trim())
    // .find(cookie => cookie.startsWith('bookieSession='));

    if (!bookieSession) {
   
      return redirect('/daebaaaa', 302);
    }

    console.log({ bookieSession });
    return apiFn(event);
  };
}
