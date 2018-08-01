# Javascript web calculator

> Performs simple calculations as well as advanced ones as exponent, rooting, nth rooting, factorization, calculation a logarithm.

&#x26a0; Warning! This app works stable with Google Chrome only.

## Local installation

1.  Clone this repo to your local machine

```sh
git clone https://github.com/ClarityOfMind/lecture_09.git
```

2.  Start up local static server

```sh
npm run start
```

## Development installation

1.  Clone this repo to your local machine

```sh
git clone https://github.com/ClarityOfMind/lecture_09.git
```

2.  Go to the project's root directory

3.  Run

```sh
docker-compose up
```

4.  Open your browser on `"localhost:8080"` to observe the app.

## Design patterns used

1.  Decorator

```sh
src/js/index.js   // line 5,6
```

2.  Memoization

```sh
src/js/calculator/core/calculations.js   // line 34
```

3.  Composite

```sh
src/js/calculator/calculator.js   // line 12
```

4.  Observer

```sh
src/js/calculator/calculator.js   // line 11
```
## ES6 features used

1.  Class

```sh
To reach module approach and make apllication's expansion fast and easy.
```

2.  Const

```sh
To ensure immutability of data assigned to variables.
```

3.  Let

```sh
To limit variables' scope.
```

4.  Arrow function

```sh
Use as a callback function to make parent's function context available.
```

5.  Destructuring assignment

```sh
syntactic sugar for quick writing and neat code style,
```
## Contributing

1.  Fork it (<https://github.com/yourname/yourproject/fork>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request

## Author

Dmitry Vasilev
