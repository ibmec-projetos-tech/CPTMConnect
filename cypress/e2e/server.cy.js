describe('Testes da API do Servidor', () => {
  const baseUrl = 'http://localhost:5001/api';

  it('Deve retornar todas as estações', () => {
      cy.request(`${baseUrl}/stations`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
      });
  });

  it('Deve filtrar estações por acessibilidade', () => {
      cy.request(`${baseUrl}/stations?acessibilidade=true`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          response.body.forEach((station) => {
              expect(station.acessibilidade).to.eq(true);
          });
      });
  });

  it('Deve retornar todas as linhas', () => {
      cy.request(`${baseUrl}/lines`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
      });
  });

  it('Deve filtrar linhas por acessibilidade', () => {
      cy.request(`${baseUrl}/lines?acessibilidade=true`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          response.body.forEach((line) => {
              const estacoesComAcessibilidade = line.estacoes.some(estacao => estacao.acessibilidade === true);
              expect(estacoesComAcessibilidade).to.eq(true);
          });
      });
  });

  it('Deve filtrar linhas por estação de destino', () => {
      const destino = 'Estação Exemplo'; // Substitua pelo nome de uma estação real para testar
      cy.request(`${baseUrl}/lines?estacaoDestino=${encodeURIComponent(destino)}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          response.body.forEach((line) => {
              const incluiEstacaoDestino = line.estacoes.includes(destino);
              expect(incluiEstacaoDestino).to.eq(true);
          });
      });
  });
});

