function test1(x, y) {
    return y - x;
  };
  
test1(10, 40); //devolvera 30. y=40 x=10 {40 - 10=30}

function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
  }
  
  test2(10) //devolvera 20, porque la funcion nos delvolvera el primer return de orden (de arriba hacia abajo).