use targetpractice;
db.dropDatabase();

db.users.insertMany([
    {
        name: "Tanya" , 
        email: "tanya@email.com" , 
        cash: 10000,
        portfolio: 
        [
         
        ] 
    },
]);