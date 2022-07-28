import { Router } from "express";
const router = Router();



import {login, validar, getUsers, createUser,updateUser, deleteUser } from "../controllers/users.controller";
//rutas examen DSS///Solo estáregistrado fidonoso@gmail.com    123456  en la base de datos
router.get('/', login); //para verel formulario de logueo
router.post('/login', validar)
///////////////////////////////////////////
router.get("/getusers", getUsers);
router.post('/createuser', createUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)



export default router;
