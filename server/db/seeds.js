use targetpractice;
db.dropDatabase();

db.users.insertMany([
    {
        name: 'Jack',
        email: 'jack@targetpractice.co.uk',
        cash: 10000,
        portfolio:[]
    },
    {
        name: 'Stephanie',
        email: 'stephy@targetpractice.co.uk',
        cash: 10000,
        portfolio:[]
    },
    {
        name: 'Kevin',
        email: 'kevin@targetpractice.co.uk',
        cash: 10000,
        portfolio:[]
    },
    {
        name: 'Matt',
        email: 'matt@targetpractice.co.uk',
        cash: 10000,
        portfolio:[]
    }
]);