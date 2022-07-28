import { Router } from "express";
const router = Router();



import { getUsers, createUser,updateUser, deleteUser } from "../controllers/PostsController.js";


router.get("/getpost", getPost);
router.post('/createpost', createpost)
// router.put('/updateuser/:id', updateUser)
// router.delete('/deleteuser/:id', deleteUser)