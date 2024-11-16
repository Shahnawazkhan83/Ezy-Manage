# EZY|Manage 🚀

EZY|Manage is a comprehensive project management and team collaboration platform designed to streamline workflow, improve productivity, and enhance team communication. It offers a user-friendly interface with tools to manage tasks, track project progress, allocate resources, and set deadlines, all in one centralized hub.

## Live Application 🌐
[Visit the Live Application](https://main.d3ikvi1nsiy7mr.amplifyapp.com/)

---

## Technology Stack

### Frontend 🌟
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux Toolkit**: For state management.

### Backend 🖥️
- **Node.js**: Server-side runtime.
- **Express**: Backend framework.
- **Prisma**: PostgreSQL ORM for managing the database schema.

### Database 🗄️
- **PostgreSQL**: Relational database.
- **PgAdmin**: Database management.

### Cloud Infrastructure ☁️
- **AWS EC2**: Compute instance for backend deployment.
- **AWS RDS**: Relational database management system.
- **AWS Amplify**: Frontend hosting.
- **AWS API Gateway**: API management.
- **AWS S3**: Static file storage.
- **AWS Lambda**: Serverless functions.
- **AWS Cognito**: Authentication and user management.

---

## Getting Started 🏁

Follow these steps to set up the project locally:

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running ([Download PostgreSQL](https://www.postgresql.org/download/))
- PgAdmin installed ([Download PgAdmin](https://www.pgadmin.org/download/))

---

### Installation 📥

#### Install Dependencies

**Client**  
```bash
cd client
npm install
```
**Server**

```bash
cd ../server
npm install
```

**Set Up Database 🗂️**

Run the following command to generate the Prisma artifacts:
```bash
npx prisma generate
```

**Apply migrations 🔄**

```bash
npx prisma migrate dev --name init
```
**Seed the database 🌱**
```bash
npm run seed
```
**Configure Environment Variables 🔐** 

Server: Create a .env file with the following:
```bash
PORT=4000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ezy_manage
```
Client: Create a .env.local file with the following:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```
## Run the Project 🚀

**Backend**
```bash
npm run dev
```
**Frontend**
```bash
cd ../client
npm run dev
```
### The application should now be accessible locally:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:4000/api](http://localhost:4000/api)

---

## Deployment

- **Frontend**: Hosted on AWS Amplify.
- **Backend**: Deployed using AWS EC2 and API Gateway.
- **Database**: Managed with AWS RDS (PostgreSQL).

---

## Additional Resources 📚

- **Project Repository**: Complete project code [GitHub Repository Link](https://github.com/Shahnawazkhan83/Ezy-Manage)
- **AWS EC2 Setup Instructions**: [AWS EC2 Guide Link](https://github.com/Shahnawazkhan83/Ezy-Manage/blob/main/server/aws-ec2-instructions.md)
- **Data Model Diagram**: [Lucidchart Data Model](https://lucid.app/lucidchart/b922dc56-9460-424d-9e4a-918d974934e7/edit?viewport_loc=-748%2C-1682%2C2760%2C1426%2C0_0&invitationId=inv_2edf6425-22c1-4430-9eeb-67de2e2015f0)

---

## Database Management Commands 🛠️

### Reset the primary key sequence in PostgreSQL:

```sql
SELECT setval(
    pg_get_serial_sequence('"[DATA_MODEL_NAME_HERE]"', 'id'),
    COALESCE(MAX(id)+1, 1), 
    false
) 
FROM "[DATA_MODEL_NAME_HERE]";
```

## Features Under Development 🛠️

- Enhanced analytics for project tracking 📈.
- Integration with third-party tools like Slack and Trello 🛠️📱.
- Advanced user role and permission management 🔒.
