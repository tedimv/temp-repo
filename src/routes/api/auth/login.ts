import { APIEvent, json } from 'solid-start/api';
import { authenticatedEndpoint } from '..';

export const POST = authenticatedEndpoint(
  async ({ request }: APIEvent): Promise<any> => {
    const res = json({});
    res.headers.append(
      'Set-cookie',
      'bookieSession=12345;path=/;HttpOnly=true'
    );
    console.log(request.body);
    return res;
  }
);
