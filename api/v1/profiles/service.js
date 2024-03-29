import prisma from "../../../config/db.js";

const getAll = async () => {
    return prisma.profile.findMany({
        include:{
            user:true
        }
    });
};

const getById = async (id) => {
    return prisma.profile.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            user: true,
        },
    });
}

const create = async (data) => {
    return prisma.profile.create({
        data: {
            ...data,
        },
    });
}

const update = async (id, data) => {
    return prisma.profile.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...data,
        },
    });
}

const deleteData = async (id) => {
    return prisma.profile.delete({
        where: {
            id: parseInt(id),
        },
    });
}

export { getAll, getById, update, deleteData, create };