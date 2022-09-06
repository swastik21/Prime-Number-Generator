
# Prime Number Generator

A robust and efficient engine that could generate Prime Numbers between a range provided by the users.
## Features

- It has the capability to generate 1 to 10 million Prime Numbers under 1 seconds.

- There are three generations stratergies provided to the user to generate the Prime Numbers.

- ### Generation Stratergies

    1. Sieve of EratosThenes
    2. Sieve of Sundaram
    3. Sieve of Atkin


## Authors

- [Swastik Poojari](https://www.github.com/swastik21)


## Run Locally

Clone the project

```bash
  git clone https://github.com/swastik21/Prime-Number-Generator.git
```

Go to the project directory

```bash
  cd Prime-Number-Generator
```

Install dependencies

```bash
  npm install
```

Run the Engine

```bash
  npm run engine
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Run Server

To Start Server, run the following command

```bash
  npm run server
```
## API Reference

#### Get Prime Numbers

```http
  GET http://localhost:8080/generator
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `range` | `string` | **Required**. Provide range  |
| `choice`| `string` | **Required**. Provide choice |


## API Documentation

Refer this [Link](https://documenter.getpostman.com/view/16997552/VV4tVeRV) for better understanding the working of the API.


## Support

For support, email swastikpoojari21@gmail.com.

