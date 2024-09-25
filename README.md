# eventScheduler
1. Clone the repo
2. Navigate to the project directory:
cd project-name
3. Install dependencies:
npm install
4. Navigate to the db file and start the postgres container
docker-compose up -d
4. Navigat to main directory and start the server:
npm start

end points: 
1. Add user
POST: /api/users/
2. Get user details
GET: /api/users/:userId
![user-table](https://github.com/Vineet369/websocket-multiplayer-typing-game/blob/main/public/images/2.png)

3. Add cycle
POST: /api/cycles/
body: {
  "start_date": "2024-09-25 19:00:00",
  "end_date": "2024-10-02 19:00:00",
  "region_id": 2,
  "question_id": 2,
  "cycle_span": 7
}
4. Update cycle span
PUT: /api/cycles/:cycleId
body: {
  "cycle_span": 21
}
5. Update cycle question:
PUT: /api/cycles/:cycleId/question
body: { 
    "question_id": 3 
}

![cycle-table](https://github.com/Vineet369/websocket-multiplayer-typing-game/blob/main/public/images/2.png)
6. Current question based on region_id 
GET: /api/regions/:regionId/current-question
![question-table](https://github.com/Vineet369/websocket-multiplayer-typing-game/blob/main/public/images/2.png)
![region-table](https://github.com/Vineet369/websocket-multiplayer-typing-game/blob/main/public/images/2.png)

