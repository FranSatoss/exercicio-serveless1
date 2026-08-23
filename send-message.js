const { ServiceBusClient } = require('@azure/service-bus');

async function main() {
    const connectionString = process.env.SERVICE_BUS_CONNECTION;

    if (!connectionString) {
        throw new Error('A variável SERVICE_BUS_CONNECTION não foi configurada.');
    }

    const client = new ServiceBusClient(connectionString);
    const sender = client.createSender('orders');

    const order = {
        orderId: 'PEDIDO-001',
        cliente: 'Francine dos Santos',
        status: 'Novo'
    };

    await sender.sendMessages({
        body: order,
        contentType: 'application/json'
    });

    console.log('Mensagem publicada com sucesso:', order);

    await sender.close();
    await client.close();
}

main().catch((error) => {
    console.error('Erro ao publicar a mensagem:', error);
    process.exit(1);
});
``
