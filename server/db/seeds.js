use targetpractice;
db.dropDatabase();

db.users.insertMany([
    {
        name: "Tanya" , 
        email: "tanya@email.com" , 
        portfolio: 
        [
            {
                coin: "BTC",
                quantity: 0.2
            },
            {
                coin: "ETH",
                quantity: 2.5
            },
            {
                coin: "BNB",
                quantity: 0.5
            },
        ] 
    },
]);