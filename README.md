# Checkpoint 3 - Orquestração de Serviços com Azure Functions

Projeto desenvolvido utilizando Azure Functions, Azure Service Bus e Azure Logic Apps para implementação de uma arquitetura orientada a eventos com orquestração de serviços.

O workflow realiza a integração entre funções serverless e mensageria, permitindo a execução coordenada dos componentes da aplicação.

## Provedor Utilizado

* Azure

## Como rodar localmente

### Pre-requisitos

* Node.js instalado (versão 18 ou superior)
* Azure Functions Core Tools instalados
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

4. Configure o arquivo `local.settings.json` com as configurações do ambiente Azure.

5. Inicie a aplicação localmente:

```bash
func start
```

6. Para testar o envio de eventos:

```bash
node send-message.js
```
