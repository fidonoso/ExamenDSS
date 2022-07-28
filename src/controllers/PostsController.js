import {Topic} from '../models/Topic.js'
import {Post} from '../models/Post.js'
import {User} from '../models/User.js'

export const getPosts=async (req, res) => {
    try {
      const posts=await User.findAll();
      console.log('posts', posts);
      res.json(posts)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  };
  
  export const createPost=async(req, res) => {
    try {
        const post=await Post.create(req.body)
        res.json({message: 'Post creado con éxito',
                post: post})  
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  
  };
  
//   export const updateUser=async(req, res) => {
//     try {
//       const id= parseInt(req.params.id)
//       const {nombre, apellido, email, password}=req.body
//       const user=await User.findByPk(id)
    
//       if(!user){
//       return res.json({message: "El usuario no existe"})
//       }else{
//       let match = await matchPassword(password, user.password);
//         if(match){
//           user.nombre=nombre;
//           user.apellido=apellido;
//           user.email=email;
//           await user.save();
//           res.json({message: "Usuario actualizado con 'exito"})
//         }else{
//           return res.json({message: "La contraseña es incorrecta"})
//         }
//       }
//     } catch (error) {
//       return res.status(500).json({message: error.message})
//     }
//   };
  
//   export const deleteUser=async(req, res) => {
//     try {
//       const id= parseInt(req.params.id)
//       const user=await User.destroy({ where: {id }})
//       res.json({message: "Usuario eliminado con éxito"})
      
//     } catch (error) {
//       return res.status(500).json({message: error.message})
//     } 
// };