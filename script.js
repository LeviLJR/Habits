/* const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-01", "01-02", "01-06"],
  takePills: ["01-03", "01-05"],
  journal: ["01-01", "01-08", "01-09"],
  food: ["01-12", "01-14", "01-20"],
  water: ["01-03", "01-13", "01-20"],
};

nlwSetup.setData(data);
nlwSetup.load();
 */

const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  var hoje = new Date(); // Crio uma data
  hoje.setMonth(hoje.getMonth() + 1); // aplico mais um mês
  var dias = [];
  var months = [];
  //percorro os dias até chegar a dia do mês seguinte
  for (var dia = new Date(); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
    dias.push(dia.getDate() + "/" + (dia.getMonth() + 1)); //salvo em um array
    nlwSetup.addDay(dia.getDate() + "/" + (dia.getMonth() + 1));
  }
}

/* 
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso ❌");
    return;
  }
  alert("Dia adicionado com sucesso ✅ ");
  nlwSetup.addDay(today);
}
*/

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
