var { somar, subtrair, multiplicar, maiorDeIdade, dividir } = require('./index');
test('somar dois numeros', function () {
    var resultado = somar(10, 10);
    expect(resultado).toBe(20);
})
test('subtrair dois numeros', function () {
    var resultado = subtrair(10, 2);
    expect(resultado).toBe(8);
})
test('multiplicar dois numeros', function () {
    var resultado = multiplicar(10, 10);
    expect(resultado).toBe(100);
})
test('dividir dois numeros', function () {
    var resultado = dividir(10, 2);
    expect(resultado).toBe(5);
})
test('saber se é maior de idade', function () {
    var resultado = maiorDeIdade(18);
    expect(resultado).toBe('Você é maior de idade');
})
test('saber se é maior de idade', function () {
    var resultado = maiorDeIdade(17);
    expect(resultado).toBe('Você é menor de idade');
})