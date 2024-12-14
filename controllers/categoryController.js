const { User } = require("../models");
const { use } = require("../routes/category");

exports.getALlUsers = async (req,res) => {
    const users = await User.findAll();

    res.status(200).json({
        status : "200",
        message: "anda berhasil mengambil data user",
        data: users
    })
}
exports.findUser = async (req,res) => {
    const user = await User.findAll({
        where: {
          id: req.params.id,
        },
      });
      try {
        res.status(200).json({
            status: "200",
            message: "berhasil mencari id",
            data: user
        })
      }catch(error){
        res.status(500).json({
            status: 500,
            error
        })
      }
}

exports.storeUser = async (req,res) => {
    try{
        let {name,username,password} = req.body
        const newUser = await User.create(
            { 
               name,
               username,
               password
            });

        res.status(201).json({
            status:"Success",
            massage : "data berhasil ditambah",
            data : newUser
        })
    }catch(error){
        res.status(500).json({
            status: "fail",
            message: error
        })
    }
}

exports.deleteUser = async (req,res) => {
    const user = User.destroy({
        where: {
          id:req.params.id
        },
      });
    
    if(user) {
        try {
            res.status(200).json({
                status: "200",
                message: "berhasil menghapus data",
            })
          }catch(error){
            res.status(500).json({
                status: 500,
                error
            })
          }
    }else {
        res.status(404).json({
            status: "404",
            message: "id tidak di temukan",
        })
    }
}
exports.editUser = async (req,res) => {
    let {name,username,password} = req.body
    let userUpdate = await User.update(
        { name,username,password },
        {
          where: {
            id: req.params.id,
          },
        },
      );
      try {
        res.status(200).json({
            status: "200",
            message: "berhasil mengubah data",
        })
      }catch(error){
        res.status(500).json({
            status: 500,
            error
        })
      }
}
