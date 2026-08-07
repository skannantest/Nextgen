import {test ,expect,request} from '@playwright/test';
let degreeId : number;

test.describe('API Testing',()=>{

    test('POST API',async({request})=>{
const response = await request.post(`${process.env.API_BASE_URL}degree-management`,
    {
        headers :{
            Authorization:`Bearer ${process.env.TOKEN}`,
            accept: 'application/json'

        },
        data:{
            name:"PATHsshggsssfss",
            description:"Collapse disorder Post",
            clientDegreeMapping:"LEO",
            prescriber:"Yes",
            status:"active",
            startDate:"2026-08-03T04:00:00.000Z",
            endDate:"2026-10-23T03:59:59.999Z"
        }

        });

        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        degreeId = responseBody.degreeId;
        expect(responseBody.success).toBe(true);
        expect(responseBody.message).toBe("The Degree was created successfully.");
        console.log('Response Body:', responseBody);
    })

    test('PUT API',async({request})=>{

        const response = await request.put(`${process.env.API_BASE_URL}degree-management/${degreeId}`,
            {
                headers :{
                    Authorization:`Bearer ${process.env.TOKEN}`,
                    accept: 'application/json'

                },
                data:{
                    name:"ssssss",
                    description:"Created id is updated",
                    clientDegreeMapping:"LEO",
                    prescriber:"Yes",
                    status:"active",
                    startDate:"2026-08-03T04:00:00.000Z",
                    endDate:"2026-10-23T03:59:59.999Z",
                    updateAlignedProfiles: true
                }
                
                });

                expect(response.status()).toBe(200);
                const responseBody = await response.json();
                expect(responseBody.success).toBe(true);
                expect(responseBody.message).toBe("The Degree details were updated successfully.");
                console.log('Response Body:', responseBody);
                

})
})