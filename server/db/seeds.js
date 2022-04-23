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
                amount: 0.2
            },
            {
                coin: "ETH",
                amount: 2.5
            },
            {
                coin: "BNB",
                amount: 0.5
            },
        ] 
    },
]);