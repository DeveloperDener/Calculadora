function insert(num) {
  document.getElementById("display").value += num;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  try {
    const resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
  } catch (e) {
    alert("Comando Ínvalido");
  }
}

function ApagarUltimo() {
  document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function (e) {
  const display = document.getElementById("display");
  const teclasValidas = "0123456789*/.";
  if (teclasValidas.includes(e.key)) {
    insert(e.key);
  } else if (e.key === "Enter") {
    calcular();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key == "←") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    limpar();
  }
});
