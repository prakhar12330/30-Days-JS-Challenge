const sayHello = name => `Hello! ${name}`;

const sayHRY = str => console.log(`${str}, How are you?`);

const HOF = (sayHelloFunc, sayHRYFunc, value) => {
    const str = sayHelloFunc(value);
    sayHRYFunc(str);
};

HOF(sayHello, sayHRY, 'Prakhar');
