Barnyard-buddies is a pet adoption website with a React frontend and Django framework backend.

# Features

- Live chat box between users

# How to Run in development
you will need these installed on your machine
```
sudo apt-get update
sudo apt-get install nodejs npm python3 python3-pip nginx
```
***
In the terminal, after navigating to the client folder run:
```
npm install 
npm run dev
```

After navigating to the Server folder (Use a virtual Enviroment) run:
```
python3 -m venv venv
source venv/bin/activate
pip install -r .\requirements.txt
./manage makemigrations
./manage mirgrate
./manage runserver
```
The site is deployed on https://barnyard-buddies-k1ra.onrender.com/
