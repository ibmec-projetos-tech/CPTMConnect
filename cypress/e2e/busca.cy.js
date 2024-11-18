// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
/// <reference types="cypress" />
describe('Teste para o componente Busca', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Altere o caminho, se necessário, para onde o componente `Busca` está sendo servido
  });

  it('Deve alternar a opção de acessibilidade ao clicar no botão', () => {
      // Verifica o estado inicial
      cy.get('[data-cy="toggle-acessibilidade"]').should('contain', 'Sim');

      // Clica no botão e verifica a alternância
      cy.get('[data-cy="toggle-acessibilidade"]').click();
      cy.get('[data-cy="toggle-acessibilidade"]').should('contain', 'Não');

      // Clica novamente e verifica se retorna para "Sim"
      cy.get('[data-cy="toggle-acessibilidade"]').click();
      cy.get('[data-cy="toggle-acessibilidade"]').should('contain', 'Sim');
  });

  it('Deve carregar as opções de estação de partida e destino', () => {
      // Verifica se as opções de partida estão disponíveis
      cy.get('.Opc').should('exist').and('not.be.empty');
      
      // Seleciona uma estação de partida
      cy.get('.Opc').select('Jabaquara'); // Seleciona a primeira estação disponível
      cy.get('.Opc').should('have.value', 'Jabaquara');

      // Seleciona uma estação de destino
      cy.get('.Opc1').select('Vila Prudente'); // Seleciona a segunda estação disponível
      cy.get('.Opc1').should('have.value', 'Vila Prudente');
  });

  // it('Deve carregar as linhas disponíveis ao selecionar estação de destino', () => {
  //     // Seleciona uma estação de destino
  //     cy.get('.Opc1').select(2); // Exemplo: Seleciona a segunda estação disponível

  //     // Verifica se as linhas foram filtradas e estão visíveis
  //     cy.get('.availableLines').should('exist').and('not.be.empty');
  // });
});
