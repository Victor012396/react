require('dotenv').config();
module.exports={
    local:{
        //client: process.env.DB_CLIENT,
        connection:{
            host:process.env.DB_HOST,
            user:process.env.DV_USERNAME,
            //port:process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            //database: process.env.DB_DATABASE,
            pool: {min:0, max:50},
            ssl:false,
        },
        migrations:{
            directory:`${__dirname}/database/migrations`,
        },
        seeds:{
            directory:`${__dirname}/database/seeds`,
        },
    },
}