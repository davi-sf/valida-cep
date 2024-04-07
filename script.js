async function consultarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        const tabelaCEP = document.getElementById('tabelaCEP');
        const newRow = tabelaCEP.insertRow(-1);

        newRow.innerHTML = `
            <td>${data.cep}</td>
            <td>${data.logradouro}</td>
            <td>${data.localidade}</td>
            <td>${data.uf}</td>
        `;
    } else {
        console.error('Erro ao consultar CEP:', data.message);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>Erro ao consultar CEP. Verifique o CEP informado.</p>`;
    }

    
}