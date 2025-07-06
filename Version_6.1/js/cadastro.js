document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirma = document.getElementById("confirma").value;

    if (!nome || !email || !senha || !confirma) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirma) {
      alert("As senhas não coincidem.");
      return;
    }

    // Criar objeto do usuário
    const dadosCadastro = {
      nome: nome,
      email: email,
      senha: senha
    };

    // Gerar nome de arquivo com base no timestamp
    const agora = new Date();
    const timestamp = agora.toISOString().replace(/[:.]/g, "-");
    const nomeArquivo = `cadastro-${timestamp}.json`;

    // Criar o arquivo JSON para download
    const blob = new Blob([JSON.stringify(dadosCadastro, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();

    alert("Cadastro exportado com sucesso!");
    form.reset(); // limpa o formulário
  });
});
