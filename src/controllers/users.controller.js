import { User } from "../models/User";
import {matchPassword } from "../helpers/encrypterpass.js";
import{limpiador, compararObjetos} from '../helpers/utils.js'
const jwt = require('jsonwebtoken')
import config from '../config.js';



export const getUsers=async (req, res) => {
  try {
    const users=await User.findAll();
    console.log('user', users);
    res.json(users)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const createUser=async(req, res) => {
  try {
    const b_user=await User.findOne({where:{ email: req.body.email}})
    if(b_user){
      return res.json({message: "El usuario ya está registrado"})
    }else{
      const user=await User.create(req.body)
      res.json({message: 'Usuario creado con éxito',
        user: user})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

};

export const updateUser=async(req, res) => {
  try {
    const id= parseInt(req.params.id)
    const {nombre, apellido, email, password}=req.body
    const user=await User.findByPk(id)
  
    if(!user){
    return res.json({message: "El usuario no existe"})
    }else{
    let match = await matchPassword(password, user.password);
      if(match){
        user.nombre=nombre;
        user.apellido=apellido;
        user.email=email;
        await user.save();
        res.json({message: "Usuario actualizado con 'exito"})
      }else{
        return res.json({message: "La contraseña es incorrecta"})
      }
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const deleteUser=async(req, res) => {
  try {
    const id= parseInt(req.params.id)
    const user=await User.destroy({ where: {id }})
    res.json({message: "Usuario eliminado con éxito"})
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }

};

/*/*//*/Funciones del examen DSS*//*/*/

export const login=async(req, res) =>{

  res.render('index')
}

export const validar=async(req, res) => {
  let result=limpiador(req.body)
  if(compararObjetos(req.body,result)){
    try {
      // console.log('result==>',result)
      const {email, password}=result
      const user=await User.findOne({where: {email: email}});
      if(!user){
        return res.json({message: "El usuario no existe"})
      }else{
        let match = await matchPassword(password, user.password);
        if(match){
          const Token = jwt.sign(user.toJSON(), config.SECRET_KEY)
          res.json({message: "Login exitoso", 
                    // body: result, 
                    user_id: user.id, 
                    token: Token,
                    state:true
                })
        }else{
          return res.json({message:"Login Fallido",state :false})
        }
      }
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }else{
    res.status(403).json({message: "Intentaste algo malévolo"})
  }

}
