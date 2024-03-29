import prisma from "../../../config/db.js";

const getAll = async () => {
    return prisma.transaction.findMany({
        include: {
            source: true
        },
    });
}

const getById = async (id) => {
    return prisma.transaction.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            destination: true,
            source: true,
        },
    });
}

const transfer = async (data) => {
    const sender = await prisma.bank_account.findUnique({
        where: {
            id: parseInt(data.source_account_id),
        },
    });

    const receiver = await prisma.bank_account.findUnique({
        where: {
            id: parseInt(data.destination_account_id),
        },
    });

    if(!sender || !receiver){
        throw new Error("Account not found");
    }
    
    if(sender.ballance < data.amount){
        throw new Error("Insufficient ballance");
    }

    
    const transaction = await prisma.transaction.create({
        data: {
            amount: data.amount,
            source_account_id: data.source_account_id,
            destination_account_id: data.destination_account_id,
        },
    });

    
    await prisma.bank_account.update({
        where: {
            id: parseInt(data.source_account_id),
        },
        data: {
            ballance: sender.ballance - data.amount,
        },
    });

    await prisma.bank_account.update({
        where: {
            id: parseInt(data.destination_account_id),
        },
        data: {
            ballance: receiver.ballance + data.amount,
        },
    });

    return transaction;
}

export { getAll, getById, transfer };