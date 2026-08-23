const { app } = require('@azure/functions');

app.serviceBusTopic('ProcessOrder', {
    connection: 'ServiceBusConnection',
    topicName: 'orders',
    subscriptionName: 'processador',
    handler: async  (message, context) => {
        context.log('Nova mensagem recebida no tópico orders');
        context.log('Conteúdo da mensagem:', message);

       if(message && message.orderId) {
       context.log(`Pedido ${message.orderId} processado com sucesso`);
      }
    }
});
