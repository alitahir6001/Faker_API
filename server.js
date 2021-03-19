const express = require("express"); // the 'require' word is like 'import' so we're 'importing express'.
    app = express(),
    cors = require('cors'),
    faker = require('faker'),
    port = 8000

// initialize express and cors

app.use(cors());
app.use (express.json());
app.use(express.urlencoded({extended:true}));

// start with a landing page making sure it's working
app.get("/api/", (req, res) => {
    res.json("Now you're cooking with gas");
});


class User {
    constructor() {
        this.userId = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Company {
    constructor() {
        this.companyId = faker.random.uuid();
        this.companyName = faker.company.companyName();
        this.companyAddress = [
            this.compStreet = faker.address.streetAddress(),
            this.compCity = faker.address.city(),
            this.compState = faker.address.state(),
            this.compZip = faker.address.zipCode(),
            this.compCountry = faker.address.country(),
        ]
    }
}


// checking to see if the classes are working
console.log(new User());
// console.log(new companyId());
// console.log(new firstName());
console.log(new Company())
;

// new user route
app.get("/api/users/new", (req,res) =>{
    res.json(new User());
});


// new company route

app.get("/api/companies/new", (req,res) =>{
    res.json(new Company());
});

// new user and company on same route

app.get("/api/user/company", (req,res) =>{
    res.json([new User(), new Company()]);
});

// making sure the express server is up and running in the console.
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);