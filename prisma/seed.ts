import prisma from "../src/database/db.js";

async function main() {
    await prisma.products.createMany({
        data: [
            {
              "name": "S22 Ultra",
              "price": 500000,
              "store": "Amazon",
              "target_date": "2022-10-22T00:00:00.000Z"
            },
            {
              "name": "S20FE",
              "price": 200000,
              "store": "Magalu",
              "target_date": "2022-10-22T00:00:00.000Z"
            },
            {
              "name": "Barco",
              "price": 200000,
              "store": "Magalu",
              "target_date": "2022-10-22T00:00:00.000Z"
            },
            {
              "name": "Avião bacana",
              "price": 200000,
              "store": "Magalu",
              "target_date": "2022-10-22T00:00:00.000Z"
            },
            {
              "name": "Boombox 2",
              "price": 200000,
              "store": "Carajás",
              "target_date": "2022-12-10T00:00:00.000Z"
            }
          ]
    })
}

main().then(
    ()=>console.log("Created products!")
).catch(
    (err) => {console.log(err);process.exit(1)}
).finally(
    async () => {await prisma.$disconnect}    
)