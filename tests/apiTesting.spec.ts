import { test, expect, } from '@playwright/test';
import inviteeList from '../apiJson/inviteeList.json'

test('Get Invitee list API', async ({ request }) => {

  const response = await request.post(process.env.INVITE_API_URL!, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_API!}`,
      'Content-Type': 'application/json',
    },
    data: {
      ...inviteeList,
    },
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
 // console.log('Response Body:', responseBody);
  console.log(responseBody.totalCount);
  expect(responseBody.totalCount).toBe(742);  
  console.log('----------------------------------------------------------------');
});