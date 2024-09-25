# eventScheduler
## 1. Clone the repo
## 2. Navigate to the project directory:
cd project-name
## 3. Install dependencies:
npm install
## 4. Navigate to the db file and start the postgres container
docker-compose up -d
## 4. Navigat to main directory and start the server:
npm start

end points: 
1. Add user
curl -X POST /api/users/ -H "Content-Type: application/json" -d '{
    "name": "Vineet",
    "email": "vineet123@gmail.com",
    "region_id": 3
}'

response: {
    "id": 5,
    "name": "Vineet",
    "email": "vineet123@gmail.com",
    "region_id": 3,
    "updatedAt": "2024-09-25T05:07:52.502Z",
    "createdAt": "2024-09-25T05:07:52.502Z"
}

2. Get user details
curl -X GET /api/users/5
response: {
    "id": 5,
    "name": "Vineet",
    "email": "vineet123@gmail.com",
    "region_id": 3,
    "createdAt": "2024-09-25T05:07:52.502Z",
    "updatedAt": "2024-09-25T05:07:52.502Z",
    "Region": {
        "id": 3,
        "name": "India",
        "time_zone": "Asia/Kolkata",
        "createdAt": "2024-09-24T06:42:28.363Z",
        "updatedAt": "2024-09-24T06:42:28.363Z"
    }
}

![user-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/user.png)

3. Add cycle
curl -X POST /api/cycles/ -H "Content-Type: application/json" -d '{
  "start_date": "2024-09-25 19:00:00",
  "end_date": "2024-10-02 19:00:00",
  "region_id": 2,
  "question_id": 2,
  "cycle_span": 7
}'

response: {
    "message": "Cycle created successfully",
    "cycle": {
        "id": 6,
        "start_date": "2024-09-25T19:00:00.000Z",
        "end_date": "2024-10-02T19:00:00.000Z",
        "region_id": 2,
        "question_id": 2,
        "cycle_span": 7,
        "updatedAt": "2024-09-25T06:26:37.650Z",
        "createdAt": "2024-09-25T06:26:37.650Z"
    }
}

4. Update cycle span
curl -X PUT /api/cycles/:cycleId -H "Content-Type: application/json" -d '{
  "cycle_span": 21
}'

response: {
    "question": {
        "id": 2,
        "text": "What is the main currency of Singapore?",
        "cycle": 2,
        "region_id": 1,
        "createdAt": "2024-09-24T06:44:30.486Z",
        "updatedAt": "2024-09-24T06:44:30.486Z"
    }
}

5. Update cycle question:
curl -X PUT /api/cycles/:cycleId/question -H "Content-Type: application/json" -d '{
    "question_id": 3
}'

response:{
  "message": "Question assigned to cycle updated successfully",
  "cycle": {
    "id": 1,
    "start_date": "2024-09-25 19:00:00",
    "end_date": "2024-10-02 19:00:00",
    "region_id": 1,
    "question_id": 3,
    "cycle_span": 7,
    "createdAt": "...",
    "updatedAt": "..."
  }
}


![cycle-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/cycle.png)

6. Current question based on region_id 
curl -X GET http://localhost:3000/api/regions/:regionId/current-question

response: {
    "question": {
        "id": 2,
        "text": "What is the main currency of Singapore?",
        "cycle": 2,
        "region_id": 1,
        "createdAt": "2024-09-24T06:44:30.486Z",
        "updatedAt": "2024-09-24T06:44:30.486Z"
    }
}

![question-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/question.png)
![region-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/region.png)

