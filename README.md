# Project Overview
The Barnyard Buddies project is an interactive single-page web application designed to help find new homes for animals by providing a seamless way for pet shelters and potential adopters to connect. This project features an engaging user interface and robust functionality to draw attention and facilitate user interactions. \
The website is hosted on github pages: [barnyard-buddies.netlify.app](https://barnyard-buddies.netlify.app/)

## Features
- 15 Distinct Pages: Each page offers unique content and functionality, enhancing user experience.
- Live Chat Box: Users can engage in real-time conversations to inquire about pets and share information.
- Blog System: Includes liking features to foster community engagement and interaction.
- User Profile System: Users can create and update profiles to showcase their pets and share updates.
- Advanced Search Functionality: Search for pets by breed, age, and location to find the perfect match.
- Notification System: Keeps shelters and users informed about important updates and interactions.
- Secure Account System: Users can securely upload images and manage their pet's profile.
- Shelter Management: Shelters can easily add and manage pet profiles.
- Streamlined Adoption Application: Ensures pets find the perfect home by providing an efficient and user-friendly adoption process.
- Comments/Message: Facilitates clear communication between shelters and users, allowing for detailed inquiries and timely responses via notifications.
- Backend: Built with Django REST framework for robust API services.
- Frontend: Developed with React and Chakra UI for a responsive and modern user interface.
- Database: Utilizes SQLite3 for efficient data management.

# Local Setup and Run Instructions

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v9.x or later)
- [python3](https://www.python.org/downloads/) (v3.9x or later)
- [python3-pip](https://pip.pypa.io/en/stable/installation/) (v22.x or later)
- [nginx](https://nginx.org/en/download.html) (v1.20.x or later)

Alternatively, you can install these prerequisites via:
```
sudo apt-get update
sudo apt-get install nodejs npm python3 python3-pip nginx
```
### Installation
Clone the repository to your local machine: \
`git clone https://github.com/Thehashhobo/barnyard-buddies.git`

#### Client setup
Navigate to the client directory and install dependencies:
```
cd client
npm install 
npm run dev
```
#### Server 
Navigate to the server directory, create a virtual environment, and install dependencies:
```
python3 -m venv venv
venv/bin/activate
pip install -r .\requirements.txt
./manage makemigrations
./manage mirgrate
./manage runserver
```

# Project Structure
The project is organized into two main directories: 'client' and 'server'.


### client Directory: Contains the frontend.
- components: Contains reusable UI components, categorized by features.
- hooks: Contains custom React hooks for managing application state and effects.
- pages: Contains individual pages for the application, each representing a distinct route.

### server Directory: Contains the backend.
Subfolders corresponding to different features and functionalities of the backend.

# Application deployment
The website is hosted on github pages: [barnyard-buddies.netlify.app](https://barnyard-buddies.netlify.app/)
- The backend is hosted on [heroku](https://www.heroku.com/home)
- The frontend is hosted on [netlify](https://www.netlify.com/)

# Future improvements
- Implement Robust Database: Enhance the reliability and performance of the application by integrating a more scalable and robust database solution.
- Implement CDN: Utilize a Content Delivery Network (CDN) to improve the efficiency and scalability of the site, ensuring faster load times and better user experience.
- User-Friendly UI: Continuously improve the user interface to be more intuitive and user-friendly, enhancing the overall user experience.
- Additional Features: Add more features such as interactive maps to help users find location-based pets suitable for adoption.

# Contributers
This project is a collaborative effort with each team member contributing to both the frontend and backend development. Project deployment was managed by me.
- [Thehashhobo](https://github.com/Thehashhobo)
- [Majda](https://github.com/majdaloj)
- [Salwa](https://github.com/sms-sudo)
- [Nafio](https://github.com/nafiomiah) \
Origin Repository with complete history: https://github.com/Thehashhobo/ProjectHistory

