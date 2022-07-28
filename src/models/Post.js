import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Post=sequelize.define('posts',{
    id:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    titulo:{
        type:DataTypes.STRING,
    },
    tarea:{
        type:DataTypes.STRING,
    }
},{
    timestamps:false
})