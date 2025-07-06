document.addEventListener("DOMContentLoaded", () => {
  const btnFinalizar = document.getElementById("btn-finalizar");

  btnFinalizar.addEventListener("click", () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const totalCompra = carrinho.reduce((total, item) => {
      return total + item.preco * item.quantidade;
    }, 0);

    // Simula dados do cliente e endereço
    const dadosCompra = {
      cliente: "Nome do cliente fictício",
      endereco: {
        rua: "Rua das Estrelas",
        numero: "123",
        bairro: "Universo",
        cidade: "São Paulo",
        estado: "SP",
        cep: "00000-000"
      },
      itens: carrinho.map(item => ({
        nome: item.nome,
        preco: item.preco,
        quantidade: item.quantidade,
        total: item.preco * item.quantidade
      })),
      total: totalCompra.toFixed(2)
    };

    // Cria o arquivo .json
    const blob = new Blob([JSON.stringify(dadosCompra, null, 2)], {
      type: "application/json",
    });

    const agora = new Date();
    const timestamp = agora.toISOString().replace(/[:.]/g, "-");

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `pedido-${timestamp}.json`;
    link.click();

    // Limpa o carrinho
    localStorage.removeItem("carrinho");
    alert("Pedido finalizado com sucesso!");

    // Redireciona para a página inicial
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const corpoTabela = document.getElementById("resumo-itens");
  const totalSpan = document.getElementById("resumo-total");

  if (carrinho.length === 0) {
    corpoTabela.innerHTML = "<tr><td colspan='3'>Seu carrinho está vazio.</td></tr>";
    return;
  }

  let totalGeral = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    totalGeral += subtotal;

    totalCompra = totalGeral;
    atualizarParcelas(totalCompra);

    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.quantidade}</td>
      <td>R$ ${subtotal.toFixed(2).replace(".", ",")}</td>
    `;
    corpoTabela.appendChild(linha);
  });

  totalSpan.textContent = totalGeral.toFixed(2).replace(".", ",");
});

// Mostrar opções de parcelamento se for cartão de crédito
const radios = document.getElementsByName("pagamento");
const parcelaDiv = document.getElementById("opcao-parcelamento");
const selectParcelas = document.getElementById("parcelas");
const valorParcelaTexto = document.getElementById("valor-parcela");

let totalCompra = 0;

function atualizarParcelas(total) {
  totalCompra = total;
  selectParcelas.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const valorParcela = (total / i).toFixed(2).replace(".", ",");
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}x de R$ ${valorParcela} sem juros`;
    selectParcelas.appendChild(option);
  }
}

// Mostrar parcelas se for cartão de crédito
radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "credito" && radio.checked) {
      parcelaDiv.style.display = "block";
      atualizarParcelas(totalCompra);
    } else {
      parcelaDiv.style.display = "none";
      valorParcelaTexto.innerHTML = "";
    }
  });
});

// Atualizar valor da parcela escolhida
selectParcelas.addEventListener("change", () => {
  const qtd = parseInt(selectParcelas.value);
  const valor = totalCompra / qtd;
  valorParcelaTexto.textContent = `Você pagará ${qtd}x de R$ ${valor.toFixed(2).replace(".", ",")} sem juros.`;
});

