# Exercise

This exercise was created using Angular, if it isn't installed run this to install it globally:

```
npm install -g @angular/cli
```

Also in '[backend/create-db.js](backend/create-db.js)' & '[backend/app.js](backend/app.js)', update this value: `your_db_password` to your own local db password.

```
const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "your_db_password",
  database: "test",
  port: 3306,
});

```

#

### Run the backend:

#

In a septate terminal, CD into the backend directory:

```
cd backend
```

Install dependencies:

```
npm install
```

Run the script the setup a new database:

```
npm run prep
```

Start up the backend:

```
npm run dev
```

The application will be started on: http://localhost:3000/

#

### Run the frontend:

#

CD into the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start up the frontend:

```
ng serve
```

The application will be started on: http://localhost:4200/
