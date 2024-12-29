function restaurante() {
    const menu = {
      1: { nome: "Pizza", preco: 25.90, descricao: "Massa fina, queijo e molho de tomate" },
      2: { nome: "Hambúrguer", preco: 19.90, descricao: "Carne, queijo, alface e maionese" },
      3: { nome: "Salada", preco: 14.90, descricao: "Alface, tomate, pepino e queijo" },
      4: { nome: "Macarrão", preco: 22.90, descricao: "Macarrão ao molho de carne" }
    };
  
    const escolha = prompt("Escolha um prato:\n1. Pizza\n2. Hambúrguer\n3. Salada\n4. Macarrão");
  
    switch (escolha) {
      case "1":
        console.log(`Você escolheu: ${menu[1].nome}\nPreço: R$ ${menu[1].preco}\nDescrição: ${menu[1].descricao}`);
        break;
      case "2":
        console.log(`Você escolheu: ${menu[2].nome}\nPreço: R$ ${menu[2].preco}\nDescrição: ${menu[2].descricao}`);
        break;
      case "3":
        console.log(`Você escolheu: ${menu[3].nome}\nPreço: R$ ${menu[3].preco}\nDescrição: ${menu[3].descricao}`);
        break;
      case "4":
        console.log(`Você escolheu: ${menu[4].nome}\nPreço: R$ ${menu[4].preco}\nDescrição: ${menu[4].descricao}`);
        break;
      default:
        console.log("Erro: Opção inválida.");
    }
  }
  
  restaurante()