# 🧹 Clean Architecture React + Vue 🚀

[README PT-BR](README-ptbr.md)

This project aims to be a proof of concept, testing and demonstrating the application of Clean Architecture in a frontend environment.

The idea is to simulate a possible migration from a React application to a Vue application and vice versa.

## 🛠️ Installation

Follow the steps below to set up and run the project on your machine.

### 📚 Requirements

- [Node.js 20+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Node Corepack enabled](https://github.com/nodejs/corepack#readme)

### 🚀 Configuration

1. Clone this repository:

```bash
# Via SSH
git clone git@github.com:gabrielscaranello/clean-arch-react-vue.git

# Via HTTPS
git clone https://github.com/gabrielscaranello/clean-arch-react-vue.git
```

2. Navigate to the project directory:

```bash
cd clean-arch-react-vue
```

3. Install project dependencies:

```bash
yarn install
```

4. Run the project:

```bash
# Run React Project
yarn dev:react

# Run Vue Project
yarn dev:vue
```

> ![NOTE]  
> React project run in [http://localhost:8081](http://localhost:8081)  
> Vue project run in [http://localhost:8080](http://localhost:8080)

5. Running the build for production:

> [!WARNING]  
> Still in development.

## 🧪 Unit Tests

To run unit tests, use the following command:

```bash
# Run all tests
yarn test

# Run only unit tests (watch mode)
yarn test:unit

# Run all tests and generate code coverage report
yarn test:ci
```
