import { test, expect } from '@playwright/test';
import { login } from '../../src/Elements/Elements';
import { url } from '../../src/Elements/ApiURL';
import { apiConfig } from '../../src/Elements/Variables/varibaleForApi';


let engagementId: number;

test('Create Engagement API for DM Decline', async ({ request }) => {

  const response = await request.post(
    url.createEngagement,
    {
      headers: {
        Authorization: `Bearer ${apiConfig.RepToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        engagementHostId: 84888,
        engagementTypeId: 1,
        primaryStartDate: apiConfig.primaryStartDate,
        primaryTimeZoneId: 1,
        productId: 2,
        topicIds: [33],
        engagementSpeakerIds: [
          {
            speakerID: 89070,
            badgeID: 1,
            priorityOrderID: 1,
            isLiasionApproval: true,
            isSpeakerUtilized: false,
          },
        ],
        engagementAttendeeIds: [53224, 92908],
        engagementTypeQuestionDetails: [
          {
            engagementTypeQuestionId: 1,
            engagementTypeOptionsId: 14,
          },
          {
            engagementTypeQuestionId: 69,
            engagementTypeOptionsId: 359,
          },
        ],
        engagementAdditionalQuestionDetails: [
          {
            engagementAdditionalQuestionId: 73,
            engagementAdditionalOptionsId: 368,
          },
          {
            engagementAdditionalQuestionId: 46,
            engagementAdditionalOptionsId: 302,
          },
        ],
      },
    }
  );

  expect(response.status()).toBe(201);
  
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);
  engagementId = responseBody.data.id; 

  console.log('Created Engagement ID:', engagementId);
  console.log('----------------------------------------------------------------');
  await new Promise(resolve => setTimeout(resolve, 3000));

});

test('DM decline API', async ({ request }) => {
  const response = await request.post(
    url.approveDeclineEngagement,
    {
      headers: {
        Authorization: `Bearer ${apiConfig.DmToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        engagementId: engagementId, 
        isApproved: false,
        isFromApp: true,
        type: 'dm',
        reason: 2,
      },
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('DM Approval Response:', responseBody);

  const isApproved = responseBody.body.message;
  expect(isApproved).toBe('The engagement was declined successfully');
});
