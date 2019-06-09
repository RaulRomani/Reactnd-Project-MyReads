

# MyReads udacity project
MyReads is a simple book management app. You can add the books that you want to read, are currently reading or have already read. This project made for the udacity react course.

# Installation

### Install mysql database and load DR.sql

```
mysql -u {username} -p < DR.sql
```

### Add your mysql user and password in server.py

```
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://{user}:{password}@localhost/MyReads'
```

### Install node modules and build the app

```
cd static
npm install
npm run build
```

### Run the server.py

```
cd server
python server.py
```

### Open your browser and paste this url

```
http://localhost:5000/
```

### Screenshot

![Alt text](screenshot/main.png)

### License

MIT