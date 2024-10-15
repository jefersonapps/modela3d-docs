---
sidebar_position: 1
---

# Propriedades dos Objetos

### `adicao`

A propriedade `adicao` é utilizada no objeto [OperadorGeometrico](/docs/tutorial-basics/available-objects#operador-geométrico-operadorgeometrico) e define um array (lista) de objetos 3D a serem adicionados ao objeto base.

#### Tipo

`Objeto3D[]`

#### Valor Padrão

`[]`

#### Exemplo

```js
const c = Caixa()

const e = Esfera({
  posicao: [0, 1, 0],
})

OperadorGeometrico({
  elemento: c,
  adicao: [e],
})
```

### `altura`

A propriedade `altura` define a altura de objetos como [caixas](/docs/tutorial-basics/available-objects#caixa-caixa), [cones](/docs/tutorial-basics/available-objects#cone-cone), [cilindros](/docs/tutorial-basics/available-objects#cilindro-cilindro), [prismas](/docs/tutorial-basics/available-objects#prisma-prisma), [pirâmides](/docs/tutorial-basics/available-objects#pirâmide-piramide) e [tubos](/docs/tutorial-basics/available-objects#tubo-tubo).

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Caixa({
  altura: 2,
})
```

### `anguloFinal`

A propriedade `anguloFinal` define o ângulo final de revolução de [cones](/docs/tutorial-basics/available-objects#cone-cone) e [cilindros](/docs/tutorial-basics/available-objects#cilindro-cilindro),, em radianos.

#### Tipo

`number`

#### Valor Padrão

`2 * Math.PI` (equivalente a 360 graus)

#### Exemplo

```js
Cone({
  anguloFinal: Math.PI, // 180 graus
})
```

### `anguloInicial`

A propriedade `anguloInicial` define o ângulo inicial de revolução de [cones](/docs/tutorial-basics/available-objects#cone-cone) e [cilindros](/docs/tutorial-basics/available-objects#cilindro-cilindro),, em radianos.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Cilindro({
  anguloInicial: Math.PI / 4, // 45 graus
})
```

### `animacao`

A propriedade `animacao` define o tipo de animação pré-definida a ser aplicada ao objeto.

#### Tipo

`string`

#### Valor Padrão

`"none"`

#### Valores permitidos

| Tipo de Transformação | Eixos/Planos | Valores Permitidos                                                              |
| --------------------- | ------------ | ------------------------------------------------------------------------------- |
| Rotação               | x, y, z      | `rotacao-x`, `rotacao-y`, `rotacao-z`, `-rotacao-x`, `-rotacao-y`, `-rotacao-z` |
| Posição               | x, y, z      | `posicao-x`, `posicao-y`, `posicao-z`, `-posicao-x`, `-posicao-y`, `-posicao-z` |
| Nenhuma               |              | `none`                                                                          |
| Translação no Plano   | xy, xz, yz   | `translacao-plano-fator` (ex: `translacao-xz-5`)                                |

#### Exemplo

```js
Esfera({
  animacao: "rotacao-y",
})
```

### `animar`

A propriedade `animar` permite definir animações complexas para o objeto, especificando valores finais para posição, rotação e escala, bem como a duração e o modo de transição da animação.

#### Tipo

`object`

#### Valor Padrão

`null`

#### Propriedades do Objeto `animar`

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                       |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `posicao`   | `number[]` | Posição final do objeto na animação (x, y, z).                                                                                                                                                                                  |
| `rotacao`   | `number[]` | Rotação final do objeto na animação (x, y, z, em radianos).                                                                                                                                                                     |
| `escala`    | `number[]` | Escala final do objeto na animação (x, y, z).                                                                                                                                                                                   |
| `ordem`     | `string`   | Ordem em que as transformações serão aplicadas. Valores permitidos: "posicao rotacao escala", "posicao escala rotacao", "rotacao posicao escala", "rotacao escala posicao", "escala posicao rotacao", "escala rotacao posicao". |
| `duracao`   | `number`   | Duração da animação em segundos.                                                                                                                                                                                                |
| `modo`      | `string`   | Modo de transição da animação. Veja a lista de modos disponíveis na tabela abaixo.                                                                                                                                              |

#### Modos de Transição Disponíveis

| Modo                         | Descrição                                                         |
| ---------------------------- | ----------------------------------------------------------------- |
| `nenhum`                     | Sem transição, mudança instantânea.                               |
| `linear`                     | Transição linear.                                                 |
| `potência 1`                 | Transição com aceleração gradual.                                 |
| `potência 1 entrada`         | Aceleração gradual no início da animação.                         |
| `potência 1 saída`           | Aceleração gradual no final da animação.                          |
| `potência 1 entrada e saída` | Aceleração gradual no início e no final da animação.              |
| `potência 2`                 | Transição com aceleração mais acentuada.                          |
| `potência 2 entrada`         | Aceleração mais acentuada no início da animação.                  |
| `potência 2 saída`           | Aceleração mais acentuada no final da animação.                   |
| `potência 2 entrada e saída` | Aceleração mais acentuada no início e no final da animação.       |
| `potência 3`                 | Transição com aceleração ainda mais acentuada.                    |
| `potência 3 entrada`         | Aceleração ainda mais acentuada no início da animação.            |
| `potência 3 saída`           | Aceleração ainda mais acentuada no final da animação.             |
| `potência 3 entrada e saída` | Aceleração ainda mais acentuada no início e no final da animação. |
| `potência 4`                 | Transição com aceleração máxima.                                  |
| `potência 4 entrada`         | Aceleração máxima no início da animação.                          |
| `potência 4 saída`           | Aceleração máxima no final da animação.                           |
| `potência 4 entrada e saída` | Aceleração máxima no início e no final da animação.               |
| `costas`                     | Transição com um pequeno recuo antes de avançar.                  |
| `costas entrada`             | Recuo no início da animação.                                      |
| `costas saída`               | Recuo no final da animação.                                       |
| `costas entrada e saída`     | Recuo no início e no final da animação.                           |
| `saltar`                     | Transição com efeito de quique.                                   |
| `saltar entrada`             | Efeito de quique no início da animação.                           |
| `saltar saída`               | Efeito de quique no final da animação.                            |
| `saltar entrada e saída`     | Efeito de quique no início e no final da animação.                |
| `circ`                       | Transição circular.                                               |
| `circ entrada`               | Efeito circular no início da animação.                            |
| `circ saída`                 | Efeito circular no final da animação.                             |
| `circ entrada e saída`       | Efeito circular no início e no final da animação.                 |
| `elástico`                   | Transição com efeito elástico.                                    |
| `elástico entrada`           | Efeito elástico no início da animação.                            |
| `elástico saída`             | Efeito elástico no final da animação.                             |
| `elástico entrada e saída`   | Efeito elástico no início e no final da animação.                 |
| `expo`                       | Transição exponencial.                                            |
| `expo entrada`               | Efeito exponencial no início da animação.                         |
| `expo saída`                 | Efeito exponencial no final da animação.                          |
| `expo entrada e saída`       | Efeito exponencial no início e no final da animação.              |
| `seno`                       | Transição senoidal.                                               |
| `seno entrada`               | Efeito senoidal no início da animação.                            |
| `seno saída`                 | Efeito senoidal no final da animação.                             |
| `seno entrada e saída`       | Efeito senoidal no início e no final da animação.                 |

#### Exemplo

```js
Cubo({
  animar: {
    posicao: [0, 2, 0],
    rotacao: [0, Math.PI, 0],
    escala: [0.5, 0.5, 0.5],
    ordem: "posicao rotacao escala",
    duracao: 2,
    modo: "elástico",
  },
})
```

### `arco`

A propriedade `arco` define o arco do toroide, em radianos.

#### Tipo

`number`

#### Valor Padrão

`Math.PI * 2` (equivalente a 360 graus)

#### Exemplo

```js
Toroide({
  arco: Math.PI, // 180 graus
})
```

### `calcularArea`

A propriedade `calcularArea` define se a área da superfície do objeto deve ser calculada e exibida na interface.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  calcularArea: true,
})
```

### `calcularVolume`

A propriedade `calcularVolume` define se o volume do objeto deve ser calculado e exibido na interface.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  calcularVolume: true,
})
```

### `centralizar`

A propriedade `centralizar`, utilizada no objeto `Texto`, define se o texto deve ser centralizado em relação ao objeto.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  centralizar: true,
})
```

### `centralizarX`

A propriedade `centralizarX`, utilizada no objeto `Texto`, define se o texto deve ser centralizado no eixo X.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  centralizarX: true,
})
```

### `centralizarY`

A propriedade `centralizarY`, utilizada no objeto `Texto`, define se o texto deve ser centralizado no eixo Y.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  centralizarY: true,
})
```

### `centralizarZ`

A propriedade `centralizarZ`, utilizada no objeto `Texto`, define se o texto deve ser centralizado no eixo Z.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  centralizarZ: true,
})
```

### `comprimento`

A propriedade `comprimento` define o comprimento da caixa.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Caixa({
  comprimento: 2,
})
```

### `conectar`

A propriedade `conectar` estabelece uma conexão visual entre dois objetos através de uma linha. Para isso, defina nesta propriedade o valor do `id` do objeto ao qual deseja conectar.

#### Tipo

`string`

#### Valor Padrão

`""` (vazio) - nenhum objeto conectado

#### Exemplo

```js
Esfera({
  id: "esfera",
})

Caixa({
  posicao: [3, 0, 3],
  conectar: "esfera",
})
```

### `cor`

A propriedade `cor` define a cor do objeto. Você pode inserir o nome de uma cor em inglês ou seu código hexadecimal.

#### Tipo

`string`

#### Valor Padrão

`"white"`

#### Exemplo

```js
Caixa({
  cor: "red",
})
```

### `corArestas`

A propriedade `corArestas` define a cor das arestas do objeto, quando `mostrarArestas` está definido como `true`.

#### Tipo

`string`

#### Valor Padrão

`"blue"`

#### Exemplo

```js
Caixa({
  mostrarArestas: true,
  corArestas: "red",
})
```

### `corConexao`

A propriedade `corConexao` define a cor da linha de conexão entre dois objetos, quando a propriedade [conectar](/docs/tutorial-basics/objects-properties#conectar) é utilizada.

#### Tipo

`string`

#### Valor Padrão

`"blue"`

#### Exemplo

```js
Esfera({
  id: "esfera",
})

Caixa({
  posicao: [3, 0, 3],
  conectar: "esfera",
  corConexao: "red",
})
```

### `corDiagonais`

A propriedade `corDiagonais` define a cor das diagonais da caixa, quando `mostrarDiagonaisFaces` ou `mostrarDiagonaisInternas` estão definidos como `true`.

#### Tipo

`string`

#### Valor Padrão

`"red"`

#### Exemplo

```js
Caixa({
  mostrarDiagonaisFaces: true,
  corDiagonais: "blue",
})
```

### `corEsfera`

A propriedade `corEsfera` define a cor da esfera do pêndulo.

#### Tipo

`string`

#### Valor Padrão

`"white"`

#### Exemplo

```js
Pendulo({
  corEsfera: "red",
})
```

### `corFio`

A propriedade `corFio` define a cor do fio do pêndulo.

#### Tipo

`string`

#### Valor Padrão

`"white"`

#### Exemplo

```js
Pendulo({
  corFio: "blue",
})
```

### `corRastro`

A propriedade `corRastro` define a cor do rastro do objeto, quando `rastro` está definido como `true`.

#### Tipo

`string`

#### Valor Padrão

`"#6D28D9"` (roxo)

#### Exemplo

```js
Esfera({
  rastro: true,
  animacao: "translacao-xz-5",
  corRastro: "red",
})
```

### `corVertices`

A propriedade `corVertices` define a cor dos vértices do objeto, quando `mostrarVertices` está definido como `true`.

#### Tipo

`string`

#### Valor Padrão

`"blue"`

#### Exemplo

```js
Caixa({
  mostrarVertices: true,
  corVertices: "red",
})
```

### `cronometro`

A propriedade `cronometro` define se o objeto terá um cronômetro associado, que será iniciado ou parado por meio das propriedades `iniciarAoColidirEm` e `pararAoColidirEm`.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  posicao: [0, 5, 0],
  massa: 1,
  cronometro: true,
  pararAoColidirEm: "plano",
})

Plano({
  id: "plano",
  altura: 5,
  largura: 5,
})
```

### `densidadePontos`

A propriedade `densidadePontos` define a densidade de pontos da superfície, utilizada no objeto `Superficie`.

#### Tipo

`number`

#### Valor Padrão

`10`

#### Exemplo

```js
Superficie({
  densidadePontos: 20,
})
```

### `deslocarEixo`

A propriedade `deslocarEixo` define um valor de deslocamento vertical do objeto em relação a sua posição original.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Caixa({
  deslocarEixo: 1,
})
```

### `direcao`

A propriedade `direcao` define a orientação da luz no objeto `LuzDirecional`.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 0, 0]`

#### Exemplo

```js
LuzDirecional({
  visivel: true,
  posicao: [1, 2, 0],
  direcao: [0, 0, 0],
})
```

### `distancia`

A propriedade `distancia` define a distância máxima das estrelas em relação ao centro, utilizada no objeto `Estrelas`.

#### Tipo

`number`

#### Valor Padrão

`100`

#### Exemplo

```js
Estrelas({
  distancia: 200,
})
```

### `distanciaCamera`

A propriedade `distanciaCamera` define a distância da câmera acoplada ao objeto quando a propriedade `seguirCamera` está ativa.

#### Tipo

`number`

#### Valor Padrão

`false`

#### Exemplo

```js
function frente(esfera) {
  esfera.posicao.x += 0.01
}

Esfera({
  movimentar: frente,
  seguirCamera: true,
  distanciaCamera: [0, 0, 5],
})
```

### `elemento`

A propriedade `elemento`, utilizada no objeto `OperadorGeometrico`, define o objeto 3D base para a operação geométrica.

#### Tipo

`Objeto3D`

#### Valor Padrão

`null`

#### Exemplo

```js
const c = Caixa()
const e = Esfera({
  posicao: [0, 1, 0],
})

OperadorGeometrico({
  elemento: c,
  subtracao: [e],
})
```

### `emitirLuz`

A propriedade `emitirLuz` define se o objeto deve emitir luz.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  emitirLuz: true,
})
```

### `espacamento`

A propriedade `espacamento`, utilizada no objeto `Texto`, define o espaçamento entre as letras do texto.

#### Tipo

`number`

#### Valor Padrão

`0.2`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  espacamento: 0.5,
})
```

### `espere`

A propriedade `espere` define um tempo de espera em segundos antes de iniciar a animação ou movimento do objeto.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Caixa({
  animacao: "rotacionar",
  espere: 2, // Aguarda 2 segundos antes de iniciar a rotação
})
```

### `escala`

A propriedade `escala` define a escala do objeto nos eixos X, Y e Z.

#### Tipo

`number[]`

#### Valor Padrão

`[1, 1, 1]`

#### Exemplo

```js
Esfera({
  escala: [2, 2, 2], // Dobra o tamanho da esfera em todas as direções
})
```

### `espessura`

A propriedade `espessura`, utilizada no objeto `Texto`, define a espessura do texto.

#### Tipo

`number`

#### Valor Padrão

`0.2`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  espessura: 0.5,
})
```

### `fazerSombra`

A propriedade `fazerSombra`, utilizada no objeto `ModeloGLB`, define se o modelo 3D deve projetar sombra.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
ModeloGLB({
  modelo: "nome do arquivo GLB importado",
  fazerSombra: true,
})
```

### `funcao`

A propriedade `funcao`, utilizada no objeto `Superficie`, define a função matemática que descreve a superfície.

#### Tipo

`string`

#### Valor Padrão

`"2*(sin(x/2) * cos(z))"`

#### Exemplo

```js
Superficie({
  funcao: "x^2 + y^2", // Superfície de um parabolóide
})
```

### `grafico`

A propriedade `grafico` define se o objeto terá um gráfico associado, que exibirá dados do objeto durante as simulações.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
let t = 0
function translacao(esfera) {
  esfera.posicao.x = 5 * Math.cos(t)
  esfera.posicao.z = 5 * Math.sin(t)
  t += 0.01
}

Esfera({
  movimentar: translacao,
  grafico: true,
})
```

### `graficoConfig`

A propriedade `graficoConfig` define as configurações do gráfico associado ao objeto, quando `grafico` está definido como `true`.

#### Tipo

`object`

#### Valor Padrão

`{}`

#### Exemplo

```js
let t = 0
function translacao(esfera) {
  esfera.posicao.x = 5 * Math.cos(t)
  esfera.posicao.z = 5 * Math.sin(t)
  t += 0.01
}

Esfera({
  movimentar: translacao,
  grafico: true,
  graficoConfig: {
    eixos: ["t", "x"],
    titulo: "Posição da Esfera",
  },
})
```

### `graficoDistancia`

A propriedade `graficoDistancia` define se o objeto terá um gráfico de distância associado, que exibirá a distância entre este objeto e outro objeto durante as simulações.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
const esfera1 = Esfera({
  id: "esfera1",
})

let t = 0
function translacao(esfera) {
  esfera.posicao.x = 5 * Math.cos(t)
  esfera.posicao.z = 6 * Math.sin(t)
  t += 0.01
}

Esfera({
  movimentar: translacao,
  graficoDistancia: true,
  mostrarDistancia: true,
  graficoDistanciaConfig: {
    delta: 0.5,
  },
  conectar: "esfera1",
})
```

### `graficoDistanciaConfig`

A propriedade `graficoDistanciaConfig` define as configurações do gráfico de distância associado ao objeto, quando `graficoDistancia` está definido como `true`.

#### Tipo

`object`

#### Valor Padrão

`{}`

#### Exemplo

```js
const esfera1 = Esfera({
  id: "esfera1",
})

let t = 0
function translacao(esfera) {
  esfera.posicao.x = 5 * Math.cos(t)
  esfera.posicao.z = 6 * Math.sin(t)
  t += 0.01
}

Esfera({
  movimentar: translacao,
  graficoDistancia: true,
  mostrarDistancia: true,
  graficoDistanciaConfig: {
    titulo: "Gráfico da distância",
    delta: 0.5,
    limitePontos: 10,
  },
  conectar: "esfera1",
})
```

### `id`

A propriedade `id` define um ID único para o objeto.

#### Tipo

`string`

#### Valor Padrão

`""` (uma string vazia)

#### Exemplo

```js
Caixa({
  id: "minhaCaixa",
})
```

### `imagem`

A propriedade `imagem` define a imagem a ser usada como textura do objeto.

#### Tipo

`string`

#### Valor Padrão

`null`

#### Exemplo

```js
Caixa({
  imagem: "nome da imagem importada",
})
```

### `iniciarAoColidirEm`

A propriedade `iniciarAoColidirEm` recebe o id do objeto com o qual o objeto deve iniciar o cronômetro ao colidir.

#### Tipo

`string`

#### Valor Padrão

`"none"`

#### Exemplo

```js
Esfera({
  posicao: [0, 5, 0],
  massa: 1,
  cronometro: true,
  iniciarAoColidirEm: "plano",
})

Plano({
  largura: 5,
  altura: 5,
  id: "plano",
})
```

### `intensidade`

A propriedade `intensidade` define a intensidade da luz ambiente (objeto `LuzAmbiente`) ou da luz pontual (objeto `Luz`).

#### Tipo

`number`

#### Valor Padrão

- `1` para `LuzAmbiente`
- `1.5` para `Luz`

#### Exemplo

```js
// Luz Ambiente
LuzAmbiente({
  intensidade: 0.5,
})

// Luz Pontual
Luz({
  intensidade: 2,
})
```

### `intensidadeLuz`

A propriedade `intensidadeLuz` define a intensidade da luz emitida pelo objeto, quando `emitirLuz` está definido como `true`.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Esfera({
  emitirLuz: true,
  intensidadeLuz: 2,
})
```

### `intersecao`

A propriedade `intersecao`, utilizada no objeto `OperadorGeometrico`, define um array (lista) de objetos 3D a serem utilizados para calcular a interseção com o objeto base.

#### Tipo

`Objeto3D[]`

#### Valor Padrão

`[]`

#### Exemplo

```js
const c = Caixa()

const e = Esfera({
  posicao: [0, 1, 0],
})

OperadorGeometrico({
  elemento: c,
  intersecao: [e],
})
```

### `intervaloX`

A propriedade `intervaloX`, utilizada no objeto `Superficie`, define o intervalo de valores para o eixo X.

#### Tipo

`number[]`

#### Valor Padrão

`[-1, 1]`

#### Exemplo

```js
Superficie({
  intervaloX: [-2, 2],
})
```

### `intervaloY`

A propriedade `intervaloY`, utilizada no objeto `Superficie`, define o intervalo de valores para o eixo Y.

#### Tipo

`number[]`

#### Valor Padrão

`[-1, 1]`

#### Exemplo

```js
Superficie({
  intervaloY: [-2, 2],
})
```

### `lado`

A propriedade `lado` define o tamanho do lado de cubos, dodecaedros, icosaedros, octaedros, prismas, pirâmides e tetraedros.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Cubo({
  lado: 2,
})
```

### `lados`

A propriedade `lados` define o número de lados de prismas e pirâmides.

#### Tipo

`number`

#### Valor Padrão

- `5` para `Prisma`
- `4` para `Piramide`

#### Exemplo

```js
// Prisma hexagonal
Prisma({
  lados: 6,
})

// Pirâmide pentagonal
Piramide({
  lados: 5,
})
```

### `largura`

A propriedade `largura` define a largura de caixas e planos.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Caixa({
  largura: 2,
})
```

### `larguraArestas`

A propriedade `larguraArestas` define a largura das arestas do objeto, quando `mostrarArestas` está definido como `true`.

#### Tipo

`number`

#### Valor Padrão

`0.05`

#### Exemplo

```js
Caixa({
  mostrarArestas: true,
  larguraArestas: 0.1,
})
```

### `larguraDiagonais`

A propriedade `larguraDiagonais` define a largura das diagonais da caixa, quando `mostrarDiagonaisFaces` ou `mostrarDiagonaisInternas` estão definidos como `true`.

#### Tipo

`number`

#### Valor Padrão

`0.05`

#### Exemplo

```js
Caixa({
  mostrarDiagonaisFaces: true,
  larguraDiagonais: 0.1,
})
```

### `larguraRastro`

A propriedade `larguraRastro` define a largura do rastro do objeto, quando `rastro` está definido como `true`.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Esfera({
  animacao: "translacao-xz-5",
  rastro: true,
  larguraRastro: 2,
})
```

### `link`

A propriedade `link`, utilizada no objeto `Ambiente`, define o link da imagem a ser usada como textura do ambiente.

#### Tipo

`string`

#### Valor Padrão

`""` (uma string vazia)

#### Exemplo

```js
Ambiente({
  link: "https://exemplo.com/imagem.jpg",
})
```

### `massa`

A propriedade `massa` define a massa do objeto, utilizada em simulações físicas.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Esfera({
  massa: 10,
})
```

### `metalico`

A propriedade `metalico` define o nível de efeito metálico da superfície do objeto. O valor varia de 0 a 1, onde 0 representa um material não metálico e 1 representa um material totalmente metálico.

#### Tipo

`number`

#### Valor Padrão

`0`

#### Exemplo

```js
Caixa({
  metalico: 0.5, // Define um efeito metálico suave
})
```

### `modelo`

A propriedade `modelo` refere-se ao nome do arquivo GLB (objeto `ModeloGLB`) ou OBJ (objeto `ModeloOBJ`) importado no modelo 3D.

#### Tipo

`string`

#### Valor Padrão

`""` (uma string vazia)

#### Exemplo

```js
// Modelo GLB
ModeloGLB({
  modelo: "nome do arquivo GLB importado",
})

// Modelo OBJ
ModeloOBJ({
  modelo: "/nome do arquivo OBJ importado",
})
```

### `mostrarArestas`

A propriedade `mostrarArestas` define se as arestas do objeto devem ser exibidas.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  mostrarArestas: true,
})
```

### `mostrarDiagonaisFaces`

A propriedade `mostrarDiagonaisFaces` define se as diagonais das faces da caixa devem ser exibidas.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  mostrarDiagonaisFaces: true,
})
```

### `mostrarDiagonaisInternas`

A propriedade `mostrarDiagonaisInternas` define se as diagonais internas da caixa devem ser exibidas.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  mostrarDiagonaisInternas: true,
  opacidade: 0.5,
})
```

### `mostrarDistancia`

A propriedade `mostrarDistancia`, quando definida como `true`, exibe o tamanho da conexão que interliga dois objetos. **Esta propriedade só terá efeito se utilizada em conjunto com a propriedade [conectar](/docs/tutorial-basics/objects-properties#conectar).**

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  id: "esfera",
})

Cubo({
  posicao: [4, 0, 4],
  conectar: "esfera",
  mostrarDistancia: true,
})
```

### `mostrarPeriodo`

A propriedade `mostrarPeriodo`, utilizada no objeto `Pendulo`, define se o período do pêndulo deve ser calculado e exibido na interface.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Pendulo({
  mostrarPeriodo: true,
})
```

### `mostrarVertices`

A propriedade `mostrarVertices` define se os vértices do objeto devem ser exibidos.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  mostrarVertices: true,
})
```

### `movimentar`

A propriedade `movimentar` recebe uma função personalizada que define o movimento do objeto. Esta função será executada a cada frame da animação.

#### Tipo

`function`

#### Valor Padrão

`function() {}` (uma função vazia)

#### Exemplo

```js
Caixa({
  movimentar: (objeto) => {
    objeto.posicao.x += 0.01 // Move a caixa para a direita a cada frame
  },
})
```

### `movimentos`

A propriedade `movimentos` define um array (lista) de movimentos pré-definidos a serem aplicados ao objeto.

#### Tipo

`array`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
function paraFrente(caixa) {
  caixa.posicao.x += 0.01
}

function paraCima(caixa) {
  caixa.posicao.y += 0.01
}

Caixa({
  movimentos: [paraFrente, paraCima],
})
```

### `objetos`

A propriedade `objetos`, utilizada no objeto `Grupo`, define um array (lista) de objetos 3D a serem agrupados.

#### Tipo

`Objeto3D[]`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
const c = Caixa()
const e = Esfera({ posicao: [2, 0, 0] })

Grupo({
  objetos: [c, e],
})
```

### `opacidade`

A propriedade `opacidade` define a opacidade do objeto. O valor varia de 0 a 1, onde 0 representa um objeto totalmente transparente e 1 representa um objeto totalmente opaco.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Caixa({
  opacidade: 0.5, // Define a caixa como semi-transparente
})
```

### `operacao`

A propriedade `operacao`, utilizada no objeto `OperacaoVetores`, define a operação a ser realizada entre os vetores. As opções disponíveis são: "soma", "subtracao" e "produtoInterno".

#### Tipo

`string`

#### Valor Padrão

`"soma"`

#### Exemplo

```js
OperacaoVetores({
  vetor1: [0, 1, 0],
  vetor2: [1, 0, 0],
  operacao: "produtoInterno",
})
```

### `pararAoColidirEm`

A propriedade `pararAoColidirEm` define o ID do objeto com o qual o objeto deve parar ao colidir.

#### Tipo

`string`

#### Valor Padrão

`"none"`

#### Exemplo

```js
Esfera({
  massa: 1,
  cronometro: true,
  pararAoColidirEm: "caixa",
  raio: 0.5,
  posicao: [0, 5, 0],
})

Caixa({
  id: "caixa",
})
```

### `planificar`

A propriedade `planificar` define se o objeto deve ser planificado (aberto).

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  planificar: true,
})
```

### `ponto1`

A propriedade `ponto1`, utilizada no objeto `Regua`, define as coordenadas 3D do primeiro ponto da régua.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 0, 0]`

#### Exemplo

```js
Regua({
  ponto1: [1, 2, 3],
})
```

### `ponto2`

A propriedade `ponto2`, utilizada no objeto `Regua`, define as coordenadas 3D do segundo ponto da régua.

#### Tipo

`number[]`

#### Valor Padrão

`[1, 0, 0]`

#### Exemplo

```js
Regua({
  ponto2: [2, 3, 4],
})
```

### `pontos`

A propriedade `pontos`, utilizada no objeto `Poligono`, define os pontos do polígono no espaço 3D.

#### Tipo

`number[][]`

#### Valor Padrão

`[[-2, 0, 0], [-1, 1, 0], [1, 1, 0], [2, 0, 0]]` (um quadrado)

#### Exemplo

```js
Poligono({
  pontos: [
    [0, 0, 0],
    [1, 0, 0],
    [0.5, 1, 0],
  ], // Um triângulo
})
```

### `posicao`

A propriedade `posicao` define a posição do objeto no espaço 3D.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 0, 0]`

#### Exemplo

```js
Caixa({
  posicao: [1, 2, 3], // Define a posição da caixa como x=1, y=2, z=3
})
```

### `posicaoDoSol`

A propriedade `posicaoDoSol`, utilizada no objeto `Ceu`, define a posição do sol no céu.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 1000, 0]`

#### Exemplo

```js
Ceu({
  posicaoDoSol: [0, 1000, 0],
})
```

### `quantidade`

A propriedade `quantidade`, utilizada no objeto `Estrelas`, define a quantidade de estrelas a serem geradas.

#### Tipo

`number`

#### Valor Padrão

`1000`

#### Exemplo

```js
Estrelas({
  quantidade: 2000,
})
```

### `raio`

A propriedade `raio` define o raio de cones, cilindros, esferas, toroides e tubos.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Esfera({
  raio: 2,
})
```

### `raioBase`

A propriedade `raioBase` define o raio da base do cilindro.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Cilindro({
  raioBase: 2,
})
```

### `raioInterno`

A propriedade `raioInterno` define o raio interno do tubo.

#### Tipo

`number`

#### Valor Padrão

`0.3`

#### Exemplo

```js
Tubo({
  raioInterno: 0.5,
})
```

### `raioExterno`

A propriedade `raioExterno` define o raio externo do tubo.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Tubo({
  raioExterno: 2,
})
```

### `raioTopo`

A propriedade `raioTopo` define o raio do topo do cilindro.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Cilindro({
  raioTopo: 2,
})
```

### `raioTubo`

A propriedade `raioTubo` define o raio do tubo do toroide.

#### Tipo

`number`

#### Valor Padrão

`0.5`

#### Exemplo

```js
Toroide({
  raioTubo: 1,
})
```

### `rotulo`

A propriedade `rotulo`, utilizada no objeto `Vetor`, define se o vetor terá um rótulo exibindo suas coordenadas.

#### Tipo

`boolean`

#### Valor Padrão

`true`

#### Exemplo

```js
Vetor(0, 1, 0, {
  rotulo: false,
})
```

### `rotacao`

A propriedade `rotacao` define a rotação do objeto em torno dos eixos X, Y e Z, em radianos.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 0, 0]`

#### Exemplo

```js
Caixa({
  rotacao: [Math.PI / 4, 0, 0], // Rotaciona a caixa 45 graus no eixo X
})
```

### `rotulos`

A propriedade `rotulos`, utilizada no objeto `OperacaoVetores`, define se os vetores terão rótulos exibindo suas coordenadas.

#### Tipo

`boolean[]`

#### Valor Padrão

`[true, true, true]` (exibe os rótulos de todos os vetores)

#### Exemplo

```js
OperacaoVetores({
  vetor1: [0, 1, 0],
  vetor2: [1, 0, 0],
  rotulos: [false, true, true], // Exibe apenas os rótulos do segundo e terceiro vetores
})
```

### `rugosidade`

A propriedade `rugosidade` define a rugosidade da superfície do objeto. O valor varia de 0 a 1, onde 0 representa uma superfície totalmente lisa e 1 representa uma superfície totalmente rugosa.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Caixa({
  rugosidade: 0.2, // Define uma superfície suave
})
```

### `seguirCamera`

A propriedade `seguirCamera` define se o objeto deve seguir a câmera.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  seguirCamera: true,
})
```

### `som`

A propriedade `som` define se o objeto deve emitir um som ao colidir com outros objetos.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  som: true,
})
```

### `soltarEm`

A propriedade `soltarEm`, utilizada no objeto `Pendulo`, define o tempo em segundos para soltar o pêndulo.

#### Tipo

`number`

#### Valor Padrão

`0` (o pêndulo é solto imediatamente)

#### Exemplo

```js
Pendulo({
  soltarEm: 2, // O pêndulo será solto após 2 segundos
})
```

### `subtracao`

A propriedade `subtracao`, utilizada no objeto `OperadorGeometrico`, define um array (lista) de objetos 3D a serem subtraídos do objeto base.

#### Tipo

`Objeto3D[]`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
const c = Caixa()
const e = Esfera({ posicao: [0, 1, 0] })

OperadorGeometrico({
  elemento: c,
  subtracao: [e], // Remove a esfera da caixa
})
```

### `subtracaoReversa`

A propriedade `subtracaoReversa`, utilizada no objeto `OperadorGeometrico`, define um array (lista) de objetos 3D a serem subtraídos do objeto base de forma reversa.

#### Tipo

`Objeto3D[]`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
const c = Caixa()
const e = Esfera({ posicao: [0, 1, 0] })

OperadorGeometrico({
  elemento: c,
  subtracaoReversa: [e], // Remove a parte da caixa que não está intersectando a esfera
})
```

### `tamanho`

A propriedade `tamanho`, utilizada no objeto `Texto`, define o tamanho do texto.

#### Tipo

`number`

#### Valor Padrão

`1`

#### Exemplo

```js
Texto({
  texto: "Olá mundo!",
  tamanho: 2, // Dobra o tamanho do texto
})
```

### `tamanhoFonte`

A propriedade `tamanhoFonte` define o tamanho da fonte do texto, utilizada em objetos que exibem texto.

#### Tipo

`number`

#### Valor Padrão

`16`

#### Exemplo

```js
Caixa({
  texto: "Minha Caixa",
  tamanhoFonte: 24,
})
```

### `tamanhoRastro`

A propriedade `tamanhoRastro` define o tamanho do rastro do objeto (quantidade de pontos), quando `rastro` está definido como `true`.

#### Tipo

`number`

#### Valor Padrão

`50`

#### Exemplo

```js
Esfera({
  rastro: true,
  tamanhoRastro: 100, // Define um rastro com 100 pontos
})
```

### `tamanhoVertices`

A propriedade `tamanhoVertices` define o tamanho dos vértices do objeto, quando `mostrarVertices` está definido como `true`.

#### Tipo

`number`

#### Valor Padrão

`0.1`

#### Exemplo

```js
Caixa({
  mostrarVertices: true,
  tamanhoVertices: 0.2,
})
```

### `texto`

A propriedade `texto` define um texto a ser exibido próximo ao objeto.

#### Tipo

`string`

#### Valor Padrão

`""` (uma string vazia)

#### Exemplo

```js
Caixa({
  texto: "Minha Caixa",
})
```

### `totalDiagonaisFaces`

A propriedade `totalDiagonaisFaces` define se o número total de diagonais das faces da caixa deve ser exibido na interface.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  totalDiagonaisFaces: true,
})
```

### `totalDiagonaisInternas`

A propriedade `totalDiagonaisInternas` define se o número total de diagonais internas da caixa deve ser exibido na interface.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  totalDiagonaisInternas: true,
})
```

### `velocidade`

A propriedade `velocidade` define a velocidade inicial do objeto nos eixos X, Y e Z.

#### Tipo

`number[]`

#### Valor Padrão

`[0, 0, 0]`

#### Exemplo

```js
Esfera({
  velocidade: [1, 0, 0], // Define a velocidade inicial da esfera como 1 unidade por segundo na direção X
})
```

### `vetor1`

A propriedade `vetor1`, utilizada no objeto `OperacaoVetores`, define as coordenadas do primeiro vetor.

#### Tipo

`number[]`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
OperacaoVetores({
  vetor1: [0, 1, 0],
  vetor2: [1, 0, 0],
})
```

### `vetor2`

A propriedade `vetor2`, utilizada no objeto `OperacaoVetores`, define as coordenadas do segundo vetor.

#### Tipo

`number[]`

#### Valor Padrão

`[]` (um array vazio)

#### Exemplo

```js
OperacaoVetores({
  vetor1: [0, 1, 0],
  vetor2: [1, 0, 0],
})
```

### `vidro`

A propriedade `vidro` define se o objeto deve ter aparência de vidro.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Esfera({
  vidro: true,
})
```

### `visivel`

A propriedade `visivel`, utilizada no objeto `Luz`, define se a fonte de luz é visível.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Luz({
  visivel: true,
})
```

### `wireframe`

A propriedade `wireframe` define se o objeto deve ser exibido como uma estrutura de arame.

#### Tipo

`boolean`

#### Valor Padrão

`false`

#### Exemplo

```js
Caixa({
  wireframe: true,
})
```
