<<<<<<< HEAD
# CyberQuiz

Um projeto educativo sobre hardware com quiz, guia de estudo e dois minijogos.
Feito com HTML, CSS e JavaScript, sem instalação ou etapa de build.

## 🚀 Começar

Abra no navegador o arquivo que deseja usar:

- 🧠 **Quiz e guia:** [`index.html`](index.html)
- 🎮 **Escolher um minijogo:** [`MiniGame/index.html`](MiniGame/index.html)
- 🃏 **Jogo da memória:** [`MiniGame/JogoDaMemoria/index.html`](MiniGame/JogoDaMemoria/index.html)
- 🖥️ **Montagem de PC em 3D:** [`MiniGame/MontagemDePC/index.html`](MiniGame/MontagemDePC/index.html)

O projeto funciona abrindo os arquivos diretamente. É necessária conexão com a
internet para carregar fontes, ícones e a biblioteca 3D usada no montador.

## 📚 O que você encontra

| Área | Conteúdo |
| --- | --- |
| 🧠 Quiz | 10 módulos, 10 perguntas por módulo, feedback e progresso salvo |
| 📖 Guia | Resumos e conteúdo de estudo sobre os componentes |
| 🃏 Jogo da memória | Quatro níveis, do Fácil ao Insano |
| 🖥️ Montagem de PC | Montagem em 3D com peças e requisitos de instalação |

## 🛠️ Onde editar

| Para alterar... | Arquivo principal |
| --- | --- |
| Perguntas, módulos e créditos das imagens | `js/data.js` |
| Textos do guia | `js/guide-data.js` |
| Nota mínima, cores, caminhos e opções do quiz | `js/config.js` |
| Aparência do quiz | `css/style.css` |
| Níveis e componentes da memória | `MiniGame/JogoDaMemoria/js/config.js` |
| Peças, ordem e dicas da montagem 3D | `MiniGame/MontagemDePC/js/config.js` |
| Aparência dos minijogos | CSS dentro de cada pasta em `MiniGame/` |

As imagens ficam em `img/`. Ao adicionar ou trocar uma foto, atualize também
os créditos em `img/CREDITOS.txt` e na página dos minijogos, quando aplicável.

## 🗂️ Estrutura

```text
index.html                  página principal do quiz
css/
  style.css                 estilos do quiz
img/                        imagens e créditos
js/                         dados, configurações e lógica do quiz
MiniGame/
  index.html                página de escolha dos jogos
  css/
    style.css               estilos da página de minijogos
  JogoDaMemoria/
    index.html
    css/                    estilos do jogo
    js/                     configuração, lógica e som
  MontagemDePC/
    index.html
    css/                    estilos do montador
    js/                     configuração, lógica e cena 3D
```

## 🖼️ Créditos e dependências

As fotos são do Wikimedia Commons e estão sob licenças CC BY ou CC BY-SA.
Consulte `img/CREDITOS.txt` e mantenha as atribuições ao reutilizá-las.

O projeto carrega fontes e ícones de serviços externos. O montador 3D também
usa Three.js via CDN; se a biblioteca não carregar, esse minijogo não poderá
iniciar, mas as outras páginas continuam independentes.
=======
# CyberQuiz

Um projeto educativo sobre hardware com quiz, guia de estudo e dois minijogos.
Feito com HTML, CSS e JavaScript, sem instalação ou etapa de build.

## 🚀 Começar

Abra no navegador o arquivo que deseja usar:

- 🧠 **Quiz e guia:** [`index.html`](index.html)
- 🎮 **Escolher um minijogo:** [`MiniGame/index.html`](MiniGame/index.html)
- 🃏 **Jogo da memória:** [`MiniGame/JogoDaMemoria/index.html`](MiniGame/JogoDaMemoria/index.html)
- 🖥️ **Montagem de PC em 3D:** [`MiniGame/MontagemDePC/index.html`](MiniGame/MontagemDePC/index.html)

O projeto funciona abrindo os arquivos diretamente. É necessária conexão com a
internet para carregar fontes, ícones e a biblioteca 3D usada no montador.

## 📚 O que você encontra

| Área | Conteúdo |
| --- | --- |
| 🧠 Quiz | 10 módulos, 10 perguntas por módulo, feedback e progresso salvo |
| 📖 Guia | Resumos e conteúdo de estudo sobre os componentes |
| 🃏 Jogo da memória | Quatro níveis, do Fácil ao Insano |
| 🖥️ Montagem de PC | Montagem em 3D com peças e requisitos de instalação |

## 🛠️ Onde editar

| Para alterar... | Arquivo principal |
| --- | --- |
| Perguntas, módulos e créditos das imagens | `js/data.js` |
| Textos do guia | `js/guide-data.js` |
| Nota mínima, cores, caminhos e opções do quiz | `js/config.js` |
| Aparência do quiz | `css/style.css` |
| Níveis e componentes da memória | `MiniGame/JogoDaMemoria/js/config.js` |
| Peças, ordem e dicas da montagem 3D | `MiniGame/MontagemDePC/js/config.js` |
| Aparência dos minijogos | CSS dentro de cada pasta em `MiniGame/` |

As imagens ficam em `img/`. Ao adicionar ou trocar uma foto, atualize também
os créditos em `img/CREDITOS.txt` e na página dos minijogos, quando aplicável.

## 🗂️ Estrutura

```text
index.html                  página principal do quiz
css/
  style.css                 estilos do quiz
img/                        imagens e créditos
js/                         dados, configurações e lógica do quiz
MiniGame/
  index.html                página de escolha dos jogos
  css/
    style.css               estilos da página de minijogos
  JogoDaMemoria/
    index.html
    css/                    estilos do jogo
    js/                     configuração, lógica e som
  MontagemDePC/
    index.html
    css/                    estilos do montador
    js/                     configuração, lógica e cena 3D
```

## 🖼️ Créditos e dependências

As fotos são do Wikimedia Commons e estão sob licenças CC BY ou CC BY-SA.
Consulte `img/CREDITOS.txt` e mantenha as atribuições ao reutilizá-las.

O projeto carrega fontes e ícones de serviços externos. O montador 3D também
usa Three.js via CDN; se a biblioteca não carregar, esse minijogo não poderá
iniciar, mas as outras páginas continuam independentes.
>>>>>>> a7d8cd93f1f2c9e6158539ccc60371634b51f844
