import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import bcrypt from "bcryptjs";


export const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:false
});

User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(8);
    user.password=await bcrypt.hash(user.password, salt);
  });
