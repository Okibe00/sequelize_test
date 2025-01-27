import { request } from "express";
import db from "../models/engine/db.js";

const user = db.users;
export const createUser = async (request, response) => {
    try {
        const newUser = {
            firstname: request.body.firstname,
            lastname: request.body.lastname
        }
        await user.create(newUser);
        return response.status(200).json({ status: 'success', data: {} });

    } catch (error) {
        console.error(error);
    }

}

export const getAllUsers = async (request, response) => {
    try {
        const users = await user.findAll({});
        return response.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error) {
        console.error(error);
    }
}
export const getUser = async (request, response) => {
    try {
        const userId = request.params.id;
        const findUser = await user.findAll({where: {id: userId}});
        return response.status(200).json({status: 'success', data: findUser})
    } catch (error) {
        console.error(error);
    }
}
export const updateUser = async (request, response) => {
    try {
        
    } catch (error) {
        console.error(error);
    }
}
export const deleteUser = async (request, response) => {
    try {
        const userId = request.params.id;
        await user.destroy({where: {id: userId}})
        return response.status(200).json({status: 'success', data: []});
    } catch (error) {
        
    }
}