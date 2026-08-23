# Checkpoint 2 - Arquitetura Event-Driven com Azure Functions

Projeto desenvolvido utilizando arquitetura orientada a eventos (Event-Driven) com Azure Functions e Azure Service Bus.

A função ProcessOrder é acionada automaticamente quando uma mensagem é publicada no tópico "orders", realizando o processamento do evento recebido.

## Provedor Utilizado

* Azure

## Como rodar localmente

### Pre-requisitos

* Node.js instalado (versão 18 ou superior)
* Azure Functions Core Tools
* Git instalado
* Terminal de comandos aberto

### Passo a passo

1. Clone o repositório para sua máquina:

```bash
git clone https://github.com/FranSatoss/exercicio-serveless1.git
```

2. Entre na pasta do projeto:

```bash
cd exercicio-serveless1
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Configure o arquivo local.settings.json com as credenciais do Azure Service Bus e Azure Functions.

5. Execute a Function localmente:

```bash
func start
```

6. Para enviar uma mensagem de teste para o tópico:

```bash
node send-message.js
```
