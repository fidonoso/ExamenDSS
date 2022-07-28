import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Post=sequelize.define('posts',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    descripcion:{
        type:DataTypes.STRING,
    },
    name:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
})