import prisma from "../src/database/db.js";

async function main() {
    await prisma.users.create({
        data: {
            username: "fernando",
            email: "fernando@fernando.com",
            password: "fernando"
        }
    })
    await prisma.sessions.create({
        data:{
            user_id: 1,
            token: "fernando"
        }
    })
    await prisma.products.create({
        data:{
            user_id: 1,
            product: "Acer Nitro 5",
            price: 500000,
            store: "Amazon"
        }
    })
}

main().then(
    ()=>console.log("Created info!")
).catch(
    (err) => {console.log(err);process.exit(1)}
).finally(
    async () => {await prisma.$disconnect}    
)