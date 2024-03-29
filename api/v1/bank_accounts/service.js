import prisma from "../../../config/db.js";

const getAll = async () => {
    return prisma.bank_account.findMany({
        include:{
            user:true
        }
    });
}

const getById = async (id) => {
    return prisma.bank_account.findUnique({
        where: {
            id: parseInt(id),
        },
        include:{
            user:true
        }
    });
}

const create = async (data) => {
    return prisma.bank_account.create({
        data: {
            ...data,
        },
    });
}

const update = async (id, data) => {
    return prisma.bank_account.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...data,
        },
    });
}


const deleteData = async (id) => {
    return prisma.bank_account.delete({
        where: {
            id: parseInt(id),
        },
    });
}

export { getAll, getById, update, deleteData, create };