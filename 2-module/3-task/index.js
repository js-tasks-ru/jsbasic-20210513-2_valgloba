let calculator = {
 a: 0,
 b: 0,
  sum: function (a,b) {
    return a+b
  
  },
  mul: function (a,b) {
    return a*b
  },
  read: function (a,b) {
    this.a = a
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
