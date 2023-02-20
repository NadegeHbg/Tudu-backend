import express from "express"
// import getAllUsers from "../controllers/loginCRUD/userService/showAllUsers.mjs"
// import getOne from "../controllers/loginCRUD/userService/showOne.mjs"
// import createOne from "../controllers/loginCRUD/userService/createOne.mjs"
// import updateOne from "../controllers/loginCRUD/userService/updateOne.mjs"
// import deleteOne from "../controllers/loginCRUD/userService/deleteOne.mjs"
import getAllUsers from "../controllers/loginCRUD/login.mjs"
import createOne from "../controllers/loginCRUD/register.mjs"


const router = express.Router();

router.get('/users/', getAllUsers);
// router.get('/users/:id', getOne);
router.post('/users/', createOne);
// router.put('/users/:id', updateOne);
// router.delete('/users/:id',deleteOne);

export default router;