// Create or switch to the 'admin' database
use admin;

// Create an admin user
db.createUser({
    user: "coursework_admin",
    pwd: "coursework_password",
    roles: [
        {
            role: "userAdminAnyDatabase",
            db: "admin"
        }
    ]
});

// Switch to the 'product-service' database
use product-service;

// Create a user collection and insert an example user
db.user.insert({
    username: "admin",
    password: "password"
});
