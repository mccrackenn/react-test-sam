const express=require('express')
const app=express()
app.use(express.json());

app.listen({ port: 5001 }, async () => {
	console.log('server up on http://localhost:5000');
	//await sequelize.authenticate();
	//await sequelize.sync({force:true})
	console.log('Hello');
    
});