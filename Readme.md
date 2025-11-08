# Google Drive Clone

This project is a simple clone of Google Drive, allowing users to register, log in, and upload files.

## Project Structure

```
├── .gitignore
├── config
│   └── db.js
├── middleware
│   └── Auth.js
├── models
│   ├── Image.js
│   └── User.js
├── package-lock.json
├── package.json
├── routes
│   ├── home.route.js
│   ├── upload.route.js
│   └── user.route.js
├── server.js
├── services
│   └── Storage.service.js
└── views
    ├── home.ejs
    ├── index.ejs
    └── login.ejs
```

## Features

*   User registration and login
*   File upload
*   View uploaded files

## Getting Started

### Prerequisites

*   Node.js
*   MongoDB

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/google-drive-clone.git
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    SECRET_KEY=your-secret-key
    MONGO_URI=your-mongo-uri
    ```
4.  Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### User

*   `GET /user/register`: Renders the registration page.
*   `POST /user/register`: Registers a new user.
*   `GET /user/login`: Renders the login page.
*   `POST /user/login`: Logs in a user.

### Home

*   `GET /home`: Renders the home page with the user's uploaded files.
*   `POST /upload`: Uploads a file.

## Dependencies

*   [bcrypt](https://www.npmjs.com/package/bcrypt): For hashing passwords.
*   [cookie-parser](https://www.npmjs.com/package/cookie-parser): For parsing cookies.
*   [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables.
*   [ejs](https://www.npmjs.com/package/ejs): For templating.
*   [express](https://www.npmjs.com/package/express): For the web framework.
*   [imagekit](https://www.npmjs.com/package/imagekit): For image uploading.
*   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): For generating JSON web tokens.
*   [mongoose](https://www.npmjs.com/package/mongoose): For MongoDB object modeling.
*   [morgan](https://www.npmjs.com/package/morgan): For logging HTTP requests.
*   [multer](https://www.npmjs.com/package/multer): For handling multipart/form-data.
*   [uuid](https://www.npmjs.com/package/uuid): For generating unique IDs.