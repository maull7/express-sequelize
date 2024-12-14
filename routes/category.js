const express = require('express');
const router = express.Router();
const {getALlUsers, findUser, storeUser, deleteUser, editUser} = require("../controllers/categoryController");

router.get('/', getALlUsers);
router.get('/detail/:id', findUser);
router.post('/post', storeUser);
router.delete('/destroy/:id',deleteUser);
router.put('/edit/:id', editUser);


module.exports = router;