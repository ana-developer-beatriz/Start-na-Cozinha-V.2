# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
* Navegador de internet: Google Chrome, Mozilla Firefox ou Microsoft Edge. 

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-1 - Verificação do funcionamento da barra de pesquisas |
|:---|:---|
| Requisitos Associados | RF-01 A aplicação deve conter uma barra de pesquisa, onde o usuário poderá pesquisar receitas. |
| Objetivo do Teste | Verificar se a barra de pesquisas da página "Menu de receitas" insere caracteres e efetua os filtros da pesquisa digitada. |
| Passos | <ol> <li> Abrir o arquivo html da página "Menu de receitas" em um navegador de internet; <li> Visualizar a página "Menu de receitas"; <li> Clicar na barra de pesquisas e digitar alguma palavra ou caracteres que remeta a alguma receita da página; <li> Verificar se foi filtrada a receita conforme a palavra/caracteres digitados.  |
| Critérios de êxito | Os caracteres ou palavra digitada na barra de pesquisa devem apresentar como resultado a receita que possui os caracteres informados. |
| Responsável por elaborar o caso de Teste | Clarence |

---
---

|Caso de Teste    | CT-2 - Verificação do funcionamento dos seletores de ingredientes |
|:---|:---|
| Requisitos Associados | RF-02 A aplicação deve conter filtros onde o usuário poderá pesquisar a receita por ingredientes. |
| Objetivo do Teste | Verificar se os seletores de ingredientes realizam filtros de receitas pertinentes ao ingrediente selecionado. |
| Passos | <ol> <li> Abrir o arquivo html da página "Menu de receitas" em um navegador de internet; <li> Visualizar a página "Menu de receitas"; <li> Clicar nos seletores de ingredientes e selecionar algum dos itens pré-cadastrados; <li> Verificar se foi filtrada a receita conforme o ingrediente selecionado. |
| Critérios de êxito | O ingrediente selecionado nos seletores deve indicar alguma receita que contenha esse ingrediente.  |
| Responsável por elaborar o caso de Teste | Caio |

---
---

|Caso de Teste    | CT-3 - Verificação do funcionamento da indicação do nível de dificuldade da receita |
|:---|:---|
| Requisitos Associados | RF-03 A aplicação deve possibilitar a indicação do nível de dificuldade em cada receita. |
| Objetivo do Teste | Verificar se é possível inserir o nível de dificuldade no cadastro da receita. |
| Passos | <ol> <li> Abrir o arquivo html da página "Cadastre uma nova receita" em um navegador de internet; <li> Visualizar a página "Cadastre uma nova receita"; <li> Inserir as informações da receita nos respectivos campos, incluindo o nível de dificuldade; <li> Clicar em "enviar receita"; <li> Verificar se foi confirmado o envio da receita com a mensagem de confirmação. |
| Critérios de êxito | O nível de dificuldade deve ser preenchido, junto com as outras informações da receita, e deve aparecer a mensagem de confirmação de envio das informações depois de clicar em "enviar receita".  |
| Responsável por elaborar o caso de Teste | Ana Beatriz |

---
---

|Caso de Teste    | CT-4 - Verificação do funcionamento da inclusão de comentários nas receitas |
|:---|:---|
| Requisitos Associados | RF-04 A aplicação deve ter uma sessão de comentários para cada receita publicada. |
| Objetivo do Teste | Verificar se é possível inserir comentários nas páginas de exibição das receitas cadastradas. |
| Passos | <ol> <li> Abrir o arquivo html da página "Visualização da receita" em um navegador de internet; <li> Visualizar a página "Visualização da receita"; <li> Localizar o link "Comentários" logo abaixo da lista de ingredientes; <li> Clicar no link "Comentários"; <li> Digitar um exemplo de comentário no modal aberto e submeter o comentário clicando no botão "Comentar"; <li> Verificar se foi publicado o comentário acessando a página de visualização da receita novamente. |
| Critérios de êxito | A inserção do comentários deve ser confirmada através da "publicação" do mesmo, estando listado entre os comentários publicados na página de visualização da receita.  |
| Responsável por elaborar o caso de Teste | Estevão |

---
---

|Caso de Teste    | CT-5 - Verificação dos links da tela principal para exibição de receitas |
|:---|:---|
| Requisitos Associados | RF-05 A aplicação deve ter na tela principal dicas de receitas. |
| Objetivo do Teste | Verificar se os links de receitas dispostos na página "Home" levam às receitas cadastradas. |
| Passos | <ol> <li> Abrir o arquivo html da página "Home" em um navegador de internet; <li> Visualizar a página "Home"; <li> Localizar os links de sugestões de receitas; <li> Clicar em cada um dos links de sugestões de receitas; <li> Verificar se o destino de cada link são as pagians de exibição das receitas. |
| Critérios de êxito | Cada link de receita da págia "Home" deve levar a sua respectiva página de exibição de receita.  |
| Responsável por elaborar o caso de Teste | Gabriel |

---
---

|Caso de Teste    | CT-6 - Verificação do funcionamento dos formulários de cadastros dos Chef's e de novas receitas |
|:---|:---|
| Requisitos Associados | RF-06 A aplicação deve ter um formulário para a inserção de novos chefs e novas receitas.|
| Objetivo do Teste | Varificar se as informações preenchidas nos formulários estão sendo armazenadas. |
| Passos | <ol> <li> Abrir o arquivo html das página "Cadastro do Chef" e "Cadastre uma nova receita" em um navegador de internet; <li> Visualizar as páginas "Cadastro do Chef" e "Cadastre uma nova receita"; <li> Preencher os formulários de cadastro do Chef e de uma nova receita; <li> Clicar nos botões de submissão das informações cadastradas e verificar as confirmações de registro de cada página; <li> Verificar se consegue efetuar login na página "Login do Chef" com os dados informados no cadastro e verificar se a receita cadastrada aparece para aprovação do moderador na página de "Aprovação/reprovação de receitas". |
| Critérios de êxito | Após a submissão das informações cadastradas nos formulários, deve ser possível efetuar login com os dados informados no cadastro do chef e deve ser possível visualizar a receita para aprovação pelo moderador.  |
| Responsável por elaborar o caso de Teste | Estevão |

---
---

|Caso de Teste    | CT-7 - Veificação da funcionalidade das aprovações/reprovações das receitas cadastradas |
|:---|:---|
| Requisitos Associados | RF-07 A aplicação deve ter espaço que exibirá os formulários pendentes para aprovação. |
| Objetivo do Teste | Verificar se é possível aprovar e reprovar receitas na página do moderador. |
| Passos | <ol> <li> Abrir o arquivo html da página "Aprovação/reprovação de receita" em um navegador de internet; <li> Visualizar a página "Aprovação/reprovação de receita"; <li> Localizar uma receita pré-cadastrada; <li> Clicar na "lupa" da receita a ser aprovada/reprovada e visualizar as informações da receita cadastrada; <li> Fechar a janela de apresentação da receita e clicar no botão de aprovar, verificando se a receita aparecerá nas opções de receitas para consulta na página "Menu de receitas"; <li> Clicar na botão de reprovar de outra receita para verificar se a receita não aparece nas opções de receitas para consulta. |
| Critérios de êxito | Caso aprove uma receita, a mesma deve ficar disponível para consulta na página "Menu de receitas" e, caso reprove uma receita, a mesma não pode ficar visível para consultas.  |
| Responsável por elaborar o caso de Teste | Caio |

---

