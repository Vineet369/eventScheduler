# eventScheduler

### Project Strategy Overview

#### 1. Architecture Design

- **Microservices Architecture**: The application is structured into microservices, with dedicated services for user management, question scheduling, and cycle management.
- **Database**: PostgreSQL is used as the relational database, providing robust data integrity and complex querying capabilities. Connection pooling can be implemented to optimize database connections.
- **API Development**: RESTful APIs are designed for interaction with frontend applications, ensuring clear separation of concerns and ease of integration.

#### 2. **Data Flow**

- **User Registration and Management**: Users can register, and their information is stored in the database. Each user is associated with specific regions and cycles.
- **Cycle and Question Scheduling**: Questions are assigned to cycles based on region-specific criteria, allowing for tailored question distribution.
- **Dynamic Question Retrieval**: Users can retrieve the current question based on their assigned region and cycle, ensuring they receive relevant content.

### Pros and Cons of Design and Implementation

#### Pros

1. **Scalability**:
   - The microservices architecture allows for independent scaling of different components. For example, you can scale the question scheduling service separately from user management, optimizing resource usage.

2. **Flexibility**:
   - By decoupling services, it becomes easier to modify or replace individual components without affecting the entire system. This facilitates agile development practices and easier implementation of new features.

3. **Performance**:
   - Connection pooling minimizes the overhead of database connections, leading to faster response times. Caching frequently accessed data can further enhance performance by reducing the load on the database.

4. **Maintainability**:
   - Clear separation of concerns improves code organization, making the application easier to maintain and extend over time. Each microservice can be managed independently.

5. **User Experience**:
   - The system’s design allows for quick retrieval of questions based on user-specific criteria, enhancing the overall user experience.

#### Cons

1. **Complexity**:
   - The microservices architecture introduces complexity in deployment and communication between services.

2. **Overhead**:
   - While microservices offer benefits, they also introduce overhead in terms of managing multiple services, each with its own deployment and scaling requirements.

3. **Data Consistency**:
   - Ensuring data consistency across services can be challenging.



# Installation 

#### 1. Clone the repo
#### 2. Navigate to the project directory:
```cd project-name```
#### 3. Install dependencies:
```npm install```
#### 4. Navigate to the db file and start the postgres container
```docker-compose up -d```
#### 4. Navigat to main directory and start the server:
```npm start```


### end points: 
#### 1. Add user
POST: /api/users/

response: 
```
{
    "id": 5,
    "name": "Vineet",
    "email": "vineet123@gmail.com",
    "region_id": 3,
    "updatedAt": "2024-09-25T05:07:52.502Z",
    "createdAt": "2024-09-25T05:07:52.502Z"
}
```

#### 2. Get user details
GET: /api/users/:userId

response: 
```
{
    "id": 2,
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
```

![user-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/user.png)

#### 3. Add cycle
POST: /api/cycles/

body: 
```
{
  "start_date": "2024-09-25 19:00:00",
  "end_date": "2024-10-02 19:00:00",
  "region_id": 2,
  "question_id": 2,
  "cycle_span": 7
}
```

response: 
```
{
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
```

#### 4. Update cycle span
PUT: /api/cycles/:cycleId

body: 
```
{
  "cycle_span": 21
}
```

response: 
```
{
    "question": {
        "id": 2,
        "text": "What is the main currency of Singapore?",
        "cycle": 2,
        "region_id": 1,
        "createdAt": "2024-09-24T06:44:30.486Z",
        "updatedAt": "2024-09-24T06:44:30.486Z"
    }
}
```

#### 5. Update cycle question:
PUT: /api/cycles/:cycleId/question

body: 
```
{ 
    "question_id": 3 
}
```

response: 
```
{
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
```


![cycle-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/cycle.png)

#### 6. Current question based on region_id 
GET: /api/regions/:regionId/current-question

response: 
```
{
    "question": {
        "id": 2,
        "text": "What is the main currency of Singapore?",
        "cycle": 2,
        "region_id": 1,
        "createdAt": "2024-09-24T06:44:30.486Z",
        "updatedAt": "2024-09-24T06:44:30.486Z"
    }
}
```

![question-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/question.png)
![region-table](https://github.com/Vineet369/eventScheduler/blob/main/readme/region.png)
 
