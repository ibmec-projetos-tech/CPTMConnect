# CPTMConnect

- **CPTMConnect** é uma aplicação web desenvolvida pelos estudantes do Ibmec-BH para melhorar a experiência dos usuários que utilizam o sistema de trens de São Paulo. O objetivo é otimizar a usabilidade do aplicativo atual, melhorando a interação do usuário com o sistema de transporte público e garantindo informações precisas em tempo real.

## Descrição do Projeto

A aplicação visa oferecer uma plataforma mais acessível e intuitiva para a consulta de horários, rotas, e estações do metrô de São Paulo, com foco na inclusão de funcionalidades que melhorem a jornada do usuário desde a entrada até o desembarque no metrô.

## Problema Resolvido

O projeto resolve os seguintes problemas do sistema atual:

- **Difícil Visualização**: A atual estrutura do aplicativo é confusa, com muitas etapas e informações desnecessárias.
- **Falta de Informações Atualizadas**: Os usuários enfrentam dificuldades em acessar informações atualizadas sobre o status das estações e horários de funcionamento.
- **Acessibilidade Limitada**: Necessidade de melhorias na acessibilidade para pessoas com deficiência visual e auditiva.

## Requisitos Funcionais

1. **Filtros de Busca**:
   - Adicionar a possibilidade de filtrar baseado em características das estações, como acesso para deficientes.
2. **Informações em Tempo Real**:
   - Exibir status atualizado das estações e horários de funcionamento das linhas.
3. **Atualização do Mapa com localização do usuário**:
   - Recomendar caminhos e estações baseadas em CEP inseridos por usuários.
4. **Mapas Interativos**:
   - Incluir mapas interativos para exibir as rotas e linhas do metrô, com informações detalhadas sobre as estações.

## Testes Unitários

- **Testes de Filtros de Busca**:
  • Teste de Filtro por Acessibilidade:
  • Verificar se o filtro retorna apenas estações com acessibilidade.
  • Teste de Combinação de Filtros:
  • Verificar se múltiplos filtros, como “acessibilidade” e “estacionamento”, funcionam corretamente.
  • Teste de Filtros Não Correspondentes:
  • Exibir mensagem “Nenhuma estação encontrada” se nenhum resultado atender aos filtros.

- **Testes de Informações em Tempo Real**:
  • Teste de Atualização de Status:
  • Verificar se o status da estação é atualizado automaticamente em tempo real.
  • Teste de Atualização de Horários:
  • Validar se os horários das linhas são atualizados sem recarregar a página.
  • Teste de Erro de Atualização:
  • Verificar se o sistema exibe mensagem de erro em caso de falha na atualização.

- **Teste de Atualização do Mapa com Localização do Usuário**:
  - Verificar a inclusão de elementos de acessibilidade (tanto visuais quanto auditivos) em todas as interfaces.
    • Teste de Recomendação por CEP:
    • Verificar se a estação mais próxima é exibida corretamente com base no CEP fornecido.
    • Teste de Rota Recomendada:
    • Validar se a rota mais curta entre o CEP inserido e uma estação é exibida corretamente no mapa.
    • Teste de CEP Inválido:
    • Exibir mensagem de erro apropriada para CEP inválido.
- **Teste de Mapas Interativos**:
  • Teste de Exibição de Rotas:
  • Verificar se o mapa desenha a rota correta entre a origem e o destino selecionados.
  • Teste de Zoom e Navegação:
  • Validar se o zoom e a navegação funcionam sem afetar a visualização das rotas.
  • Teste de Detalhes da Estação:
  • Verificar se, ao clicar em uma estação, as informações detalhadas são exibidas corretamente.

## Base de Dados

Será utilizada uma base de dados em JSON para armazenar informações sobre estações e linhas do metrô, como status, horários e acessibilidade. Um exemplo da estrutura de dados:

```json
{
  "estacoes": [
    {
      "nome": "Estação Central",
      "status": "Aberta",
      "horario-abertura": "05:00",
      "horario-fechamento": "23:00"
      "acessibilidade": true,
      "tarifa": 4.5
    },
    {
      "nome": "Estação Lagoinha",
      "status": "Fechada",
      "horario-abertura": "06:00",
      "horario-fechamento":"22:00"
      "acessibilidade": false,
      "tarifa": 4.5
    }
  ]
}
```

## APIs Utilizadas

- **Google Maps API**: Será utilizada para conseguir os dados geográficos da cidade de São Paulo.

- **OpenWeather API**: Exibir condições meteorológicas em tempo real para os usuários. Pode ser especialmente útil para informar sobre o clima em determinadas estações ou áreas, ajudando os usuários a planejar melhor suas viagens.

- **Tembici API**: Para melhrar a analise de estações e entender quais tem points de bicicletas perto.

## Lista de Tarefas e Responsabilidades

- **Lucas Pereira**:
  - Gerenciamento do banco de dados.
- **Emanuel Gandra**:
  - Desenvolvimento do back-end e integração com APIs externas.
- **Diogo Biscoto**:
  - Testes Unitários.

## Convenções de Nomenclatura

- **Branches**: Usar o formato `integrante/nome-da-funcionalidade` ou `integrante/bugfix/descricao-do-problema`. Exemplo: `feature/filtro-buscas`.
- **Pull Requests**:Cada PR deve conter uma descrição objetiva e das alterações realizadas. Formato do título: ` Resumo da Funcionalidade, Funcionalidade`. Exemplo: `Implementação de Filtros de Acessibilidade, Filtros de Busca`.
