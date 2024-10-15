---
sidebar_position: 2
---

# Objetos Disponíveis

## Propriedades Comuns

A maioria dos objetos 3D compartilha as seguintes propriedades:

| Propriedade              | Tipo       | Valor Padrão           | Descrição                                                                                                                                                                     |
| ------------------------ | ---------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `posicao`                | `number[]` | `[0, 0, 0]`            | A posição do objeto no espaço 3D.                                                                                                                                             |
| `rotacao`                | `number[]` | `[0, 0, 0]`            | A rotação do objeto em torno dos eixos X, Y e Z, em radianos.                                                                                                                 |
| `escala`                 | `number[]` | `[1, 1, 1]`            | A escala do objeto nos eixos X, Y e Z.                                                                                                                                        |
| `cor`                    | `string`   | `"white"`              | A cor do objeto.                                                                                                                                                              |
| `opacidade`              | `number`   | `1`                    | A opacidade do objeto. O valor varia de 0 a 1, onde 0 representa um objeto totalmente transparente e 1 representa um objeto totalmente opaco.                                 |
| `wireframe`              | `boolean`  | `false`                | Define se o objeto deve ser exibido como uma estrutura de arame.                                                                                                              |
| `metalico`               | `number`   | `0`                    | Define o nível de efeito metálico da superfície do objeto. O valor varia de 0 a 1, onde 0 representa um material não metálico e 1 representa um material totalmente metálico. |
| `rugosidade`             | `number`   | `1`                    | Define a rugosidade da superfície do objeto. O valor varia de 0 a 1, onde 0 representa uma superfície totalmente lisa e 1 representa uma superfície totalmente rugosa.        |
| `som`                    | `boolean`  | `false`                | Define se o objeto deve emitir um som ao colidir com outros objetos.                                                                                                          |
| `rastro`                 | `boolean`  | `false`                | Define se o objeto deve deixar um rastro durante seu movimento.                                                                                                               |
| `larguraRastro`          | `number`   | `1`                    | Define a largura do rastro do objeto.                                                                                                                                         |
| `tamanhoRastro`          | `number`   | `50`                   | Define o tamanho do rastro do objeto (quantidade de pontos).                                                                                                                  |
| `corRastro`              | `string`   | `"#6D28D9"`            | Define a cor do rastro do objeto.                                                                                                                                             |
| `seguirCamera`           | `boolean`  | `false`                | Define se o objeto deve seguir a câmera.                                                                                                                                      |
| `distanciaCamera`        | `number`   | `undefined`            | Define a distância do objeto em relação à câmera quando a propriedade `seguirCamera` está ativa.                                                                              |
| `emitirLuz`              | `boolean`  | `false`                | Define se o objeto deve emitir luz.                                                                                                                                           |
| `intensidadeLuz`         | `number`   | `0`                    | Define a intensidade da luz emitida pelo objeto.                                                                                                                              |
| `vidro`                  | `boolean`  | `false`                | Define se o objeto deve ter aparência de vidro.                                                                                                                               |
| `grafico`                | `boolean`  | `false`                | Define se o objeto terá um gráfico associado, que exibirá dados do objeto durante as simulações.                                                                              |
| `graficoConfig`          | `object`   | `{}`                   | Define as configurações do gráfico associado ao objeto.                                                                                                                       |
| `uuid`                   | `string`   | Gerado automaticamente | Um identificador único do objeto, gerado automaticamente pelo sistema.                                                                                                        |
| `espere`                 | `number`   | `0`                    | Define um tempo de espera em segundos antes de iniciar a animação ou movimento do objeto.                                                                                     |
| `deslocarEixo`           | `number`   | `0`                    | Define um valor de deslocamento do objeto em relação ao seu eixo de movimento.                                                                                                |
| `animar`                 | `function` | `null`                 | Recebe uma função personalizada que permite definir animações complexas para o objeto. Esta função será executada a cada frame da animação.                                   |
| `imagem`                 | `string`   | `null`                 | Nome da imagem importada objeto.                                                                                                                                              |
| `conectar`               | `string`   | `""`                   | Define o ID de outro objeto ao qual este objeto deve ser conectado por uma linha.                                                                                             |
| `corConexao`             | `string`   | `"blue"`               | Define a cor da linha de conexão entre dois objetos.                                                                                                                          |
| `graficoDistancia`       | `boolean`  | `false`                | Define se o objeto terá um gráfico de distância associado, que exibirá a distância entre este objeto e outro objeto durante as simulações.                                    |
| `graficoDistanciaConfig` | `object`   | `{}`                   | Define as configurações do gráfico de distância associado ao objeto.                                                                                                          |
| `id`                     | `string`   | `""`                   | Define um ID único para o objeto.                                                                                                                                             |

## Luz Ambiente (`LuzAmbiente`)

Cria uma luz ambiente que ilumina todos os objetos na cena igualmente.

| Propriedade   | Tipo     | Valor Padrão | Descrição                      |
| ------------- | -------- | ------------ | ------------------------------ |
| `intensidade` | `number` | `1`          | A intensidade da luz ambiente. |
| `cor`         | `string` | `white`      | A cor da luz ambiente.         |

**Exemplo:**

```js
LuzAmbiente({
  cor: "blue",
  intensidade: 0.5,
})
```

## Caixa (`Caixa`)

Cria uma caixa.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `largura`                  | `number`   | `1`             | A largura da caixa.                                                                                                        |
| `altura`                   | `number`   | `1`             | A altura da caixa.                                                                                                         |
| `comprimento`              | `number`   | `1`             | O comprimento da caixa.                                                                                                    |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `planificar`               | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas da caixa devem ser exibidas.                                                               |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces da caixa devem ser exibidas.                                                              |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais da caixa.                                                                                   |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais da caixa.                                                                                       |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas da caixa deve ser exibido na interface.                                     |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces da caixa deve ser exibido na interface.                                    |

**Exemplo:**

```js
Caixa({
  largura: 2,
  altura: 3,
  comprimento: 4,
  cor: "red",
  imagem: "nome de imagem importada",
})
```

## Cone (`Cone`)

Cria um cone.

| Propriedade          | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `raio`               | `number`   | `1`             | O raio da base do cone.                                                                                                    |
| `altura`             | `number`   | `1`             | A altura do cone.                                                                                                          |
| `anguloInicial`      | `number`   | `0`             | O ângulo inicial do cone, em radianos.                                                                                     |
| `anguloFinal`        | `number`   | `2 * Math.PI`   | O ângulo final do cone, em radianos.                                                                                       |
| `velocidade`         | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`              | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`           | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`         | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`         | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                 | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`         | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`   | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm` | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`       | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`     | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`              | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`       | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`    | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `tamanhoVertices`    | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`        | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `mostrarArestas`     | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `larguraArestas`     | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `corArestas`         | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `planificar`         | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |

**Exemplo:**

```js
Cone({
  raio: 2,
  altura: 3,
  cor: "green",
  imagem: "nome de imagem importada",
})
```

## Cubo (`Cubo`)

Cria um cubo.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`                     | `number`   | `1`             | O tamanho do lado do cubo.                                                                                                 |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `planificar`               | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas da caixa devem ser exibidas.                                                               |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces da caixa devem ser exibidas.                                                              |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais da caixa.                                                                                   |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais da caixa.                                                                                       |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas da caixa deve ser exibido na interface.                                     |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces da caixa deve ser exibido na interface.                                    |

**Exemplo:**

```js
Cubo({
  lado: 2,
  cor: "blue",
  imagem: "nome de imagem importada",
})
```

## Cilindro (`Cilindro`)

Cria um cilindro.

| Propriedade          | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `raioTopo`           | `number`   | `1`             | O raio do topo do cilindro.                                                                                                |
| `raioBase`           | `number`   | `1`             | O raio da base do cilindro.                                                                                                |
| `altura`             | `number`   | `1`             | A altura do cilindro.                                                                                                      |
| `anguloInicial`      | `number`   | `0`             | O ângulo inicial do cilindro, em radianos.                                                                                 |
| `anguloFinal`        | `number`   | `2 * Math.PI`   | O ângulo final do cilindro, em radianos.                                                                                   |
| `velocidade`         | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`              | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`           | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`         | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`         | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                 | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`         | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`   | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm` | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`       | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`     | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`              | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`       | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `raio`               | `number`   | `1`             | O raio do cilindro (usado se `raioTopo` e `raioBase` não forem definidos).                                                 |
| `mostrarArestas`     | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `planificar`         | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |
| `mostrarVertices`    | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `corVertices`        | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `tamanhoVertices`    | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corArestas`         | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`     | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |

**Exemplo:**

```js
Cilindro({
  raioTopo: 2,
  raioBase: 1,
  altura: 3,
  cor: "yellow",
  imagem: "nome de imagem importada",
})
```

## Dodecaedro (`Dodecaedro`)

Cria um dodecaedro.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`                     | `number`   | `1`             | O tamanho do lado do dodecaedro.                                                                                           |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do dodecaedro devem ser exibidas.                                                          |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do dodecaedro devem ser exibidas.                                                         |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do dodecaedro.                                                                              |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais do dodecaedro.                                                                                  |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas do dodecaedro deve ser exibido na interface.                                |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces do dodecaedro deve ser exibido na interface.                               |

**Exemplo:**

```js
Dodecaedro({
  lado: 2,
  cor: "purple",
  imagem: "nome de imagem importada",
})
```

## Ambiente (`Ambiente`)

Define a imagem de fundo (ambiente) da cena.

| Propriedade | Tipo     | Valor Padrão | Descrição                                              |
| ----------- | -------- | ------------ | ------------------------------------------------------ |
| `link`      | `string` | `""`         | O link da imagem a ser usada como textura do ambiente. |
| `imagem`    | `string` | `""`         | Nome da imagem importada                               |
| `cor`       | `string` | `""`         | A cor de fundo do ambiente.                            |
| `lugar`     | `any`    |              | Um objeto que representa o lugar do ambiente.          |

**Exemplo:**

```js
Ambiente({
  link: "https://exemplo.com/imagem.jpg",
})
```

## Operador Geométrico (`OperadorGeometrico`)

Permite realizar operações geométricas entre objetos 3D.

| Propriedade        | Tipo         | Valor Padrão    | Descrição                                                                                                              |
| ------------------ | ------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `elemento`         | `Objeto3D`   | `null`          | O objeto 3D base para a operação geométrica.                                                                           |
| `subtracao`        | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem subtraídos do objeto base.                                                              |
| `adicao`           | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem adicionados ao objeto base.                                                             |
| `subtracaoReversa` | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem subtraídos do objeto base de forma reversa.                                             |
| `intersecao`       | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem utilizados para calcular a interseção com o objeto base.                                |
| `diferenca`        | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem utilizados para calcular a diferença com o objeto base.                                 |
| `animacao`         | `string`     | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`       | `function`   | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`       | `array`      | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `texto`            | `string`     | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte`     | `number`     | `16`            | Define o tamanho da fonte do texto.                                                                                    |
| `calcularArea`     | `boolean`    | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                    |
| `calcularVolume`   | `boolean`    | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                |
| `id`               | `string`     | `""`            | Define um ID único para o objeto.                                                                                      |

**Exemplo:**

```js
const c = Caixa()
const e = Esfera({ posicao: [0, 1, 0] })

OperadorGeometrico({
  elemento: c,
  subtracao: [e],
})
```

## Modelo GLB (`ModeloGLB`)

Carrega um modelo 3D a partir de um arquivo GLB.

| Propriedade    | Tipo       | Valor Padrão    | Descrição                                                                                                              |
| -------------- | ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modelo`       | `string`   | `""`            | Nome do arquivo GLB importado 3D.                                                                                      |
| `animacao`     | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`   | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`   | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `fazerSombra`  | `boolean`  | `false`         | Define se o modelo 3D deve projetar sombra.                                                                            |
| `texto`        | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte` | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                    |

**Exemplo:**

```js
ModeloGLB({
  modelo: "nome do arquivo GLB importado",
})
```

## Grupo (`Grupo`)

Agrupa vários objetos 3D em um único objeto.

| Propriedade     | Tipo         | Valor Padrão    | Descrição                                                                                                              |
| --------------- | ------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `objetos`       | `Objeto3D[]` | `[]`            | Um array de objetos 3D a serem agrupados.                                                                              |
| `animacao`      | `string`     | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`    | `function`   | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`    | `array`      | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `grafico`       | `boolean`    | `false`         | Define se o objeto terá um gráfico associado, que exibirá dados do objeto durante as simulações.                       |
| `graficoConfig` | `object`     | `{}`            | Define as configurações do gráfico associado ao objeto.                                                                |
| `texto`         | `string`     | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte`  | `number`     | `16`            | Define o tamanho da fonte do texto.                                                                                    |

**Exemplo:**

```js
const c = Caixa()
const e = Esfera({ posicao: [2, 0, 0] })

Grupo({
  objetos: [c, e],
})
```

## Icosaedro (`Icosaedro`)

Cria um icosaedro.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`                     | `number`   | `1`             | O tamanho do lado do icosaedro.                                                                                            |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do icosaedro devem ser exibidas.                                                           |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do icosaedro devem ser exibidas.                                                          |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do icosaedro.                                                                               |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais do icosaedro.                                                                                   |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas do icosaedro deve ser exibido na interface.                                 |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces do icosaedro deve ser exibido na interface.                                |

**Exemplo:**

```js
Icosaedro({
  lado: 2,
  cor: "cyan",
  imagem: "nome de imagem importada",
})
```

## Movimento (`Movimento`)

Aplica movimentos a um objeto 3D.

| Propriedade     | Tipo       | Valor Padrão    | Descrição                                                                                        |
| --------------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------ |
| `objeto`        | `Objeto3D` | `null`          | O objeto 3D ao qual os movimentos serão aplicados.                                               |
| `movimentar`    | `function` | `function() {}` | Uma função que define o movimento do objeto.                                                     |
| `movimentos`    | `array`    | `[]`            | Um array de movimentos pré-definidos a serem aplicados ao objeto.                                |
| `seguirCamera`  | `boolean`  | `false`         | Define se o objeto deve seguir a câmera.                                                         |
| `animacao`      | `string`   |                 | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                 |
| `grafico`       | `boolean`  | `false`         | Define se o objeto terá um gráfico associado, que exibirá dados do objeto durante as simulações. |
| `graficoConfig` | `object`   | `{}`            | Define as configurações do gráfico associado ao objeto.                                          |
| `texto`         | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                 |
| `tamanhoFonte`  | `number`   | `16`            | Define o tamanho da fonte do texto.                                                              |

**Exemplo:**

```js
const c = Caixa()

Movimento({
  objeto: c,
  movimentar: (objeto) => {
    objeto.posicao.x += 0.01
  },
})
```

## Modelo OBJ (`ModeloOBJ`)

Carrega um modelo 3D a partir de um arquivo OBJ.

| Propriedade     | Tipo       | Valor Padrão    | Descrição                                                                                                              |
| --------------- | ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modelo`        | `string`   | `""`            | Nome do arquivo OBJ importado 3D.                                                                                      |
| `animacao`      | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`    | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`    | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `texto`         | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte`  | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                    |
| `objectTexture` | `object`   | `null`          | Define a textura do objeto.                                                                                            |

**Exemplo:**

```js
ModeloOBJ({
  modelo: "nome do arquivo OBJ importado",
  cor: "red",
  imagem: "nome de imagem importada",
})
```

## Octaedro (`Octaedro`)

Cria um octaedro.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`                     | `number`   | `1`             | O tamanho do lado do octaedro.                                                                                             |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do octaedro devem ser exibidas.                                                            |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do octaedro devem ser exibidas.                                                           |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do octaedro.                                                                                |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais do octaedro.                                                                                    |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas do octaedro deve ser exibido na interface.                                  |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces do octaedro deve ser exibido na interface.                                 |

**Exemplo:**

```js
Octaedro({
  lado: 2,
  cor: "orange",
  imagem: "nome de imagem importada",
})
```

## Pêndulo (`Pendulo`)

Cria um pêndulo simples.

| Propriedade      | Tipo      | Valor Padrão   | Descrição                                                                 |
| ---------------- | --------- | -------------- | ------------------------------------------------------------------------- |
| `tamanhoFio`     | `number`  | `6`            | O comprimento do fio do pêndulo.                                          |
| `soltarEm`       | `number`  | `0`            | O tempo em segundos para soltar o pêndulo.                                |
| `anguloInicial`  | `number`  | `Math.PI / 18` | O ângulo inicial do pêndulo em radianos.                                  |
| `mostrarPeriodo` | `boolean` | `false`        | Define se o período do pêndulo deve ser calculado e exibido na interface. |
| `corEsfera`      | `string`  | `"white"`      | A cor da esfera do pêndulo.                                               |
| `corFio`         | `string`  | `"white"`      | A cor do fio do pêndulo.                                                  |

**Exemplo:**

```js
Pendulo({
  tamanhoFio: 8,
  anguloInicial: Math.PI / 4,
  corEsfera: "red",
  corFio: "blue",
})
```

## Plano (`Plano`)

Cria um plano.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `largura`                  | `number`   | `1`             | A largura do plano.                                                                                                        |
| `altura`                   | `number`   | `1`             | A altura do plano.                                                                                                         |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do plano devem ser exibidas.                                                               |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do plano devem ser exibidas.                                                              |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do plano.                                                                                   |
| `corDiagonais`             | `string`   | `"blue"`        | Define a cor das diagonais do plano.                                                                                       |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas do plano deve ser exibido na interface.                                     |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces do plano deve ser exibido na interface.                                    |

**Exemplo:**

```js
Plano({
  largura: 10,
  altura: 10,
  cor: "gray",
  imagem: "nome de imagem importada",
})
```

## Luz Pontual (`Luz`)

Cria uma luz pontual que emite luz em todas as direções a partir de um ponto.

| Propriedade   | Tipo       | Valor Padrão    | Descrição                                                                                                              |
| ------------- | ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `intensidade` | `number`   | `1.5`           | A intensidade da luz pontual.                                                                                          |
| `visivel`     | `boolean`  | `false`         | Define se a fonte de luz é visível.                                                                                    |
| `animacao`    | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`  | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`  | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |

**Exemplo:**

```js
Luz({
  posicao: [2, 5, 2],
  intensidade: 2,
  cor: "yellow",
})
```

## Polígono (`Poligono`)

Cria um polígono a partir de um conjunto de pontos.

| Propriedade       | Tipo         | Valor Padrão                                     | Descrição                                                                                                              |
| ----------------- | ------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `pontos`          | `number[][]` | `[[-2, 0, 0], [-1, 1, 0], [1, 1, 0], [2, 0, 0]]` | Um array de pontos que definem o polígono no espaço 3D.                                                                |
| `velocidade`      | `number[]`   | `[0, 0, 0]`                                      | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                     |
| `animacao`        | `string`     | `"none"`                                         | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`      | `function`   | `function() {}`                                  | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`      | `array`      | `[]`                                             | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `calcularArea`    | `boolean`    | `false`                                          | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                    |
| `texto`           | `string`     | `""`                                             | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte`    | `number`     | `16`                                             | Define o tamanho da fonte do texto.                                                                                    |
| `mostrarArestas`  | `boolean`    | `false`                                          | Define se as arestas do objeto devem ser exibidas.                                                                     |
| `larguraArestas`  | `number`     | `0.05`                                           | Define a largura das arestas do objeto.                                                                                |
| `corArestas`      | `string`     | `"blue"`                                         | Define a cor das arestas do objeto.                                                                                    |
| `mostrarVertices` | `boolean`    | `false`                                          | Define se os vértices do objeto devem ser exibidos.                                                                    |
| `tamanhoVertices` | `number`     | `0.1`                                            | Define o tamanho dos vértices do objeto.                                                                               |
| `corVertices`     | `string`     | `"blue"`                                         | Define a cor dos vértices do objeto.                                                                                   |
| `id`              | `string`     | `""`                                             | Define um ID único para o objeto.                                                                                      |

**Exemplo:**

```js
Poligono({
  pontos: [
    [0, 0, 0],
    [1, 0, 0],
    [0.5, 1, 0],
  ],
  cor: "pink",
  imagem: "nome de imagem importada",
})
```

## Prisma (`Prisma`)

Cria um prisma.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lados`                    | `number`   | `5`             | O número de lados do prisma.                                                                                               |
| `altura`                   | `number`   | `1`             | A altura do prisma.                                                                                                        |
| `lado`                     | `number`   | `1`             | O tamanho do lado do prisma.                                                                                               |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `planificar`               | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do prisma devem ser exibidas.                                                              |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do prisma devem ser exibidas.                                                             |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do prisma.                                                                                  |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais do prisma.                                                                                      |
| `totalDiagonaisInternas`   | `boolean`  | `false`         | Define se o número total de diagonais internas do prisma deve ser exibido na interface.                                    |
| `totalDiagonaisFaces`      | `boolean`  | `false`         | Define se o número total de diagonais das faces do prisma deve ser exibido na interface.                                   |

**Exemplo:**

```js
Prisma({
  lados: 6,
  altura: 2,
  lado: 1.5,
  cor: "brown",
  imagem: "nome de imagem importada",
})
```

## Pirâmide (`Piramide`)

Cria uma pirâmide.

| Propriedade          | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`               | `number`   | `1`             | O tamanho do lado da base da pirâmide.                                                                                     |
| `lados`              | `number`   | `4`             | O número de lados da base da pirâmide.                                                                                     |
| `altura`             | `number`   | `1`             | A altura da pirâmide.                                                                                                      |
| `velocidade`         | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`              | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`           | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`         | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`         | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                 | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`         | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`   | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm` | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`       | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`     | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`              | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`       | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`    | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`     | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`         | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `corVertices`        | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `larguraArestas`     | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`    | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `planificar`         | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |

**Exemplo:**

```js
Piramide({
  lado: 2,
  lados: 6,
  altura: 3,
  cor: "gold",
  imagem: "nome de imagem importada",
})
```

## Régua (`Regua`)

Cria uma régua que mostra a distância entre dois pontos.

| Propriedade | Tipo       | Valor Padrão | Descrição                                     |
| ----------- | ---------- | ------------ | --------------------------------------------- |
| `ponto1`    | `number[]` | `[0, 0, 0]`  | As coordenadas 3D do primeiro ponto da régua. |
| `ponto2`    | `number[]` | `[1, 0, 0]`  | As coordenadas 3D do segundo ponto da régua.  |

**Exemplo:**

```js
Regua({
  ponto1: [1, 2, 3],
  ponto2: [4, 5, 6],
})
```

## Céu (`Ceu`)

Cria um céu com estrelas.

| Propriedade    | Tipo       | Valor Padrão   | Descrição                |
| -------------- | ---------- | -------------- | ------------------------ |
| `posicaoDoSol` | `number[]` | `[0, 1000, 0]` | A posição do sol no céu. |

**Exemplo:**

```js
Ceu({
  posicaoDoSol: [1000, 1000, 0],
})
```

## Esfera (`Esfera`)

Cria uma esfera.

| Propriedade          | Tipo       | Valor Padrão                                                                         | Descrição                                                                                                                  |
| -------------------- | ---------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `raio`               | `number`   | `1`                                                                                  | O raio da esfera.                                                                                                          |
| `massa`              | `number`   | `0`                                                                                  | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `wireframe`          | `boolean`  | `false`                                                                              | Define se o objeto deve ser exibido como uma estrutura de arame.                                                           |
| `cronometro`         | `boolean`  | `false`                                                                              | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`   | `string`   | `"none"`                                                                             | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `velocidade`         | `number[]` | `[0, 0, 0]`                                                                          | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `id`                 | `string`   | `""`                                                                                 | Define um ID único para o objeto.                                                                                          |
| `calcularArea`       | `boolean`  | `false`                                                                              | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`     | `boolean`  | `false`                                                                              | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `iniciarAoColidirEm` | `string`   | `"none"`                                                                             | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `texto`              | `string`   | `""`                                                                                 | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`       | `number`   | `16`                                                                                 | Define o tamanho da fonte do texto.                                                                                        |
| `graficoConfig`      | `object`   | `{ eixos: ["t", "x"], pontos: 20, distance: 1, titulo: "Meu gráfico", fixo: false }` | Define as configurações do gráfico associado ao objeto.                                                                    |
| `link`               | `string`   |                                                                                      | O link da imagem a ser usada como textura da esfera.                                                                       |

**Exemplo:**

```js
Esfera({
  raio: 2,
  cor: "red",
  imagem: "nome de imagem importada",
})
```

## Luz Direcional (`LuzDirecional`)

Cria uma luz direcional que emite luz em uma única direção.

| Propriedade   | Tipo       | Valor Padrão    | Descrição                                                                                                              |
| ------------- | ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `intensidade` | `number`   | `1.5`           | A intensidade da luz direcional.                                                                                       |
| `direcao`     | `number[]` | `[0, 0, 0]`     | A direção da luz direcional.                                                                                           |
| `visivel`     | `boolean`  | `false`         | Define se a fonte de luz é visível.                                                                                    |
| `animacao`    | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`  | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`  | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |

**Exemplo:**

```js
LuzDirecional({
  posicao: [5, 5, 5],
  intensidade: 2,
  direcao: [-1, -1, -1],
  cor: "white",
})
```

## Estrelas (`Estrelas`)

Cria um conjunto de estrelas.

| Propriedade  | Tipo     | Valor Padrão | Descrição                                             |
| ------------ | -------- | ------------ | ----------------------------------------------------- |
| `quantidade` | `number` |              | A quantidade de estrelas a serem geradas.             |
| `distancia`  | `number` |              | A distância máxima das estrelas em relação ao centro. |
| `velocidade` | `number` |              | A velocidade de rotação das estrelas.                 |

**Exemplo:**

```js
Estrelas({
  quantidade: 2000,
  distancia: 200,
})
```

## Superfície (`Superficie`)

Cria uma superfície a partir de uma função matemática.

| Propriedade       | Tipo       | Valor Padrão              | Descrição                                                                                                              |
| ----------------- | ---------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `funcao`          | `string`   | `"2*(sin(x/2) * cos(z))"` | A função matemática que descreve a superfície.                                                                         |
| `intervaloX`      | `number[]` | `[-1, 1]`                 | O intervalo de valores para o eixo X.                                                                                  |
| `intervaloY`      | `number[]` | `[-1, 1]`                 | O intervalo de valores para o eixo Y.                                                                                  |
| `calcularArea`    | `boolean`  | `false`                   | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                    |
| `animacao`        | `string`   | `"none"`                  | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                       |
| `movimentar`      | `function` | `function() {}`           | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação. |
| `movimentos`      | `array`    | `[]`                      | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                       |
| `texto`           | `string`   | `""`                      | Define um texto a ser exibido próximo ao objeto.                                                                       |
| `tamanhoFonte`    | `number`   | `16`                      | Define o tamanho da fonte do texto.                                                                                    |
| `densidadePontos` | `number`   | `10`                      | Define a densidade de pontos da superfície.                                                                            |
| `objectTexture`   | `object`   | `null`                    | Define a textura do objeto.                                                                                            |
| `id`              | `string`   | `""`                      | Define um ID único para o objeto.                                                                                      |

**Exemplo:**

```js
Superficie({
  funcao: "x^2 + y^2",
  cor: "blue",
  imagem: "nome de imagem importada",
})
```

## Tetraedro (`Tetraedro`)

Cria um tetraedro.

| Propriedade                | Tipo       | Valor Padrão    | Descrição                                                                                                                  |
| -------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lado`                     | `number`   | `1`             | O tamanho do lado do tetraedro.                                                                                            |
| `velocidade`               | `number[]` | `[0, 0, 0]`     | A velocidade inicial do objeto nos eixos X, Y e Z.                                                                         |
| `massa`                    | `number`   | `0`             | A massa do objeto, utilizada em simulações físicas.                                                                        |
| `animacao`                 | `string`   | `"none"`        | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                                           |
| `movimentar`               | `function` | `function() {}` | Recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.     |
| `movimentos`               | `array`    | `[]`            | Define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.                                           |
| `id`                       | `string`   | `""`            | Define um ID único para o objeto.                                                                                          |
| `cronometro`               | `boolean`  | `false`         | Define se o objeto terá um cronômetro associado, que será iniciado e parado automaticamente durante as simulações físicas. |
| `pararAoColidirEm`         | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve parar ao colidir.                                                           |
| `iniciarAoColidirEm`       | `string`   | `"none"`        | Define o ID do objeto com o qual o objeto deve iniciar seu movimento ao colidir.                                           |
| `calcularArea`             | `boolean`  | `false`         | Define se a área da superfície do objeto deve ser calculada e exibida na interface.                                        |
| `calcularVolume`           | `boolean`  | `false`         | Define se o volume do objeto deve ser calculado e exibido na interface.                                                    |
| `texto`                    | `string`   | `""`            | Define um texto a ser exibido próximo ao objeto.                                                                           |
| `tamanhoFonte`             | `number`   | `16`            | Define o tamanho da fonte do texto.                                                                                        |
| `mostrarVertices`          | `boolean`  | `false`         | Define se os vértices do objeto devem ser exibidos.                                                                        |
| `mostrarArestas`           | `boolean`  | `false`         | Define se as arestas do objeto devem ser exibidas.                                                                         |
| `corArestas`               | `string`   | `"blue"`        | Define a cor das arestas do objeto.                                                                                        |
| `larguraArestas`           | `number`   | `0.05`          | Define a largura das arestas do objeto.                                                                                    |
| `tamanhoVertices`          | `number`   | `0.1`           | Define o tamanho dos vértices do objeto.                                                                                   |
| `corVertices`              | `string`   | `"blue"`        | Define a cor dos vértices do objeto.                                                                                       |
| `planificar`               | `boolean`  | `false`         | Define se o objeto deve ser planificado (aberto).                                                                          |
| `mostrarDiagonaisInternas` | `boolean`  | `false`         | Define se as diagonais internas do tetraedro devem ser exibidas.                                                           |
| `mostrarDiagonaisFaces`    | `boolean`  | `false`         | Define se as diagonais das faces do tetraedro devem ser exibidas.                                                          |
| `larguraDiagonais`         | `number`   | `0.05`          | Define a largura das diagonais do tetraedro.                                                                               |
| `corDiagonais`             | `string`   | `"red"`         | Define a cor das diagonais do tetraedro.                                                                                   |

**Exemplo:**

```js
Tetraedro({
  lado: 2,
  cor: "green",
  imagem: "nome de imagem importada",
})
```

## Texto (`Texto`)

Cria um objeto de texto.

| Propriedade     | Tipo       | Valor Padrão | Descrição                                                                                        |
| --------------- | ---------- | ------------ | ------------------------------------------------------------------------------------------------ |
| `texto`         | `string`   | `""`         | O texto a ser exibido.                                                                           |
| `tamanho`       | `number`   | `1`          | O tamanho do texto.                                                                              |
| `espacamento`   | `number`   | `0.2`        | O espaçamento entre as letras do texto.                                                          |
| `espessura`     | `number`   | `0.2`        | A espessura do texto.                                                                            |
| `centralizar`   | `boolean`  | `false`      | Define se o texto deve ser centralizado em relação ao objeto.                                    |
| `centralizarX`  | `boolean`  | `false`      | Define se o texto deve ser centralizado no eixo X.                                               |
| `centralizarY`  | `boolean`  | `false`      | Define se o texto deve ser centralizado no eixo Y.                                               |
| `centralizarZ`  | `boolean`  | `false`      | Define se o texto deve ser centralizado no eixo Z.                                               |
| `movimentar`    | `function` |              | Uma função que define o movimento do objeto.                                                     |
| `movimentos`    | `array`    | `[]`         | Um array de movimentos pré-definidos a serem aplicados ao objeto.                                |
| `animacao`      | `string`   |              | Define o tipo de animação pré-definida a ser aplicada ao objeto.                                 |
| `grafico`       | `boolean`  | `false`      | Define se o objeto terá um gráfico associado, que exibirá dados do objeto durante as simulações. |
| `graficoConfig` | `object`   | `{}`         | Define as configurações do gráfico associado ao objeto.                                          |
| `objectTexture` | `object`   | `null`       | Define a textura do objeto.                                                                      |

**Exemplo:**

```js
Texto({
  texto: "Olá, mundo!",
  tamanho: 2,
  cor: "red",
  posicao: [1, 2, 3],
})
```

## Toroide (`Toroide`)

Cria um toroide.

| Propriedade      | Tipo      | Valor Padrão  | Descrição                                                                           |
| ---------------- | --------- | ------------- | ----------------------------------------------------------------------------------- |
| `raio`           | `number`  | `1`           | O raio do toroide.                                                                  |
| `raioTubo`       | `number`  | `0.5`         | O raio do tubo do toroide.                                                          |
| `arco`           | `number`  | `Math.PI * 2` | O arco do toroide, em radianos.                                                     |
| `calcularArea`   | `boolean` | `false`       | Define se a área da superfície do objeto deve ser calculada e exibida na interface. |
| `calcularVolume` | `boolean` | `false`       | Define se o volume do objeto deve ser calculado e exibido na interface.             |
| `texto`          | `string`  | `""`          | Define um texto a ser exibido próximo ao objeto.                                    |
| `tamanhoFonte`   | `number`  | `16`          | Define o tamanho da fonte do texto.                                                 |
| `id`             | `string`  | `""`          | Define um ID único para o objeto.                                                   |

**Exemplo:**

```js
Toroide({
  raio: 2,
  raioTubo: 0.8,
  cor: "blue",
  imagem: "nome de imagem importada",
})
```

## Tubo (`Tubo`)

Cria um tubo.

| Propriedade           | Tipo      | Valor Padrão | Descrição                                                                           |
| --------------------- | --------- | ------------ | ----------------------------------------------------------------------------------- |
| `raioInterno`         | `number`  | `0.3`        | O raio interno do tubo.                                                             |
| `raioExterno`         | `number`  | `1`          | O raio externo do tubo.                                                             |
| `altura`              | `number`  | `1`          | A altura do tubo.                                                                   |
| `calcularArea`        | `boolean` | `false`      | Define se a área da superfície do objeto deve ser calculada e exibida na interface. |
| `calcularVolume`      | `boolean` | `false`      | Define se o volume do objeto deve ser calculado e exibido na interface.             |
| `texto`               | `string`  | `""`         | Define um texto a ser exibido próximo ao objeto.                                    |
| `tamanhoFonte`        | `number`  | `16`         | Define o tamanho da fonte do texto.                                                 |
| `mostrarArestas`      | `boolean` | `false`      | Define se as arestas do objeto devem ser exibidas.                                  |
| `corArestas`          | `string`  | `"blue"`     | Define a cor das arestas do objeto.                                                 |
| `larguraArestas`      | `number`  | `0.05`       | Define a largura das arestas do objeto.                                             |
| `id`                  | `string`  | `""`         | Define um ID único para o objeto.                                                   |
| `useChartContext`     | `any`     |              | Contexto do gráfico.                                                                |
| `useCanvasContext`    | `any`     |              | Contexto do canvas.                                                                 |
| `useInterfaceContext` | `any`     |              | Contexto da interface.                                                              |

**Exemplo:**

```js
Tubo({
  raioInterno: 0.5,
  raioExterno: 1.2,
  altura: 3,
  cor: "yellow",
  imagem: "nome de imagem importada",
})
```

## Vetor (`Vetor`)

Cria um vetor.

| Propriedade      | Tipo      | Valor Padrão | Descrição                                                       |
| ---------------- | --------- | ------------ | --------------------------------------------------------------- |
| `x`              | `number`  |              | A coordenada X do vetor.                                        |
| `y`              | `number`  |              | A coordenada Y do vetor.                                        |
| `z`              | `number`  |              | A coordenada Z do vetor.                                        |
| `cor`            | `string`  | `"white"`    | A cor do vetor.                                                 |
| `rotulo`         | `boolean` | `true`       | Define se o vetor terá um rótulo exibindo suas coordenadas.     |
| `vidro`          | `boolean` | `false`      | Define se o vetor deve ter aparência de vidro.                  |
| `metalico`       | `number`  | `0`          | Define o nível de efeito metálico da superfície do vetor.       |
| `opacidade`      | `number`  | `1`          | A opacidade do vetor.                                           |
| `rugosidade`     | `number`  | `1`          | Define a rugosidade da superfície do vetor.                     |
| `wireframe`      | `boolean` | `false`      | Define se o vetor deve ser exibido como uma estrutura de arame. |
| `emitirLuz`      | `boolean` | `true`       | Define se o vetor deve emitir luz.                              |
| `intensidadeLuz` | `number`  | `0.8`        | Define a intensidade da luz emitida pelo vetor.                 |

**Exemplo:**

```js
Vetor(1, 2, 3, { cor: "red" })
```

## Operação de Vetores (`OperacaoVetores`)

Realiza operações entre dois vetores.

| Propriedade | Tipo        | Valor Padrão               | Descrição                                                                                                                          |
| ----------- | ----------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `vetor1`    | `number[]`  | `[]`                       | As coordenadas do primeiro vetor.                                                                                                  |
| `vetor2`    | `number[]`  | `[]`                       | As coordenadas do segundo vetor.                                                                                                   |
| `operacao`  | `string`    | `"soma"`                   | A operação a ser realizada entre os vetores. As opções disponíveis são: "soma", "subtracao", "produtoEscalar" e "produtoVetorial". |
| `cores`     | `string[]`  | `["red", "green", "blue"]` | As cores dos vetores resultantes.                                                                                                  |
| `rotulos`   | `boolean[]` | `[true, true, true]`       | Define se os vetores terão rótulos exibindo suas coordenadas.                                                                      |

**Exemplo:**

```js
OperacaoVetores({
  vetor1: [1, 2, 3],
  vetor2: [4, 5, 6],
  operacao: "produtoVetorial",
})
```
