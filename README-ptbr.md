# 🧹 Clean Architecture React + Vue 🚀

[README EN](README.md)

Esse projeto tem como objetivo ser uma prova de conceito, para testar e demostrar a aplicação de Clean Architecture em um ambiente de frontend.

A ideia é simular uma possível migração de uma aplicação React para uma aplicação Vue e vice-versa.

## 🛠️ Instalação

Siga os passos a baixo para configurar e executar o projeto em sua máquina.

### 📚 Requisitos

- [Node.js 20+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Node Corepack enabled](https://github.com/nodejs/corepack#readme)

### 🚀 Configuração

1. Clone este repositório:

```bash
# Via SSH
git clone git@github.com:gabrielscaranello/clean-arch-react-vue.git

# Via HTTPS
git clone https://github.com/gabrielscaranello/clean-arch-react-vue.git
```

2. Navegue até o diretório do projeto:

```bash
cd clean-arch-react-vue
```

3. Instale as dependências do projeto:

```bash
yarn install
```

4. Execute o projeto:

```bash
# Roda o projeto React
yarn dev:react

# Run o projeto Vue
yarn dev:vue
```

> ![NOTE]  
> O projeto React incia em [http://localhost:8081](http://localhost:8081)  
> e o projeto Vue inicia em [http://localhost:8080](http://localhost:8080)

5. Executando o build para produção:

> [!WARNING]  
> Ainda em desenvolvimento.

## 🧪 Testes Unitários

Para executar os testes unitários, use o seguinte comando:

```bash
# Executa todos os testes
yarn test

# Executa apenas os testes unitários (watch mode)
yarn test:unit

# Executa todos os testes e gera o relatório de cobertura de código
yarn test:ci
```
