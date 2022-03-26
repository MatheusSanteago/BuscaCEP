var cep = "https://viacep.com.br/ws/01001000/json/";

converter = () => {
  let address = document.querySelector("#address");
  let input = document.querySelector("#cep");
  valor = input.value;

  if (valor == "" || valor == undefined) {
    throw "CEP Vazio ou Nulo" ;
  }
  try {
    
  } catch (error) {
    console.log("error");
  }
  var cep = `https://viacep.com.br/ws/${valor}/json/`;

  fetch(cep)
    .then((response) => {
      return response.json();
    })
    .then((local) => {
      var rua = local;
      console.log(rua);
      address.innerHTML = `${rua.logradouro}, ${rua.localidade}, ${rua.bairro},  ${rua.uf}`;
    });
};
