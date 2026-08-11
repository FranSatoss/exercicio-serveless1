const { app } = require('@azure/functions');

app.http('HelloWorld', {
methods: ['GET', 'POST'],
authLevel: 'anonymous',
handler: async (request, context) => {
return {
jsonBody: {
mensagem: 'Olá Mundo!',
aluna: 'Francine dos Santos',
status: 'Funcionando'
    }
   };
  }
});





