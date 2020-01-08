# Mulheres de T.I. em Recife
Campanha feita por mulheres dos studios de software em Recife: Guava, Labcodes e Vinta.

## Setup de desenvolvimento
### Instalar o Xcode Command Line Tools
O Middleman possui algumas dependêndias que precisam do Xcode instalado. Você pode instalá-lo pelo terminal:
`xcode-select --install`

### Instalar o Ruby
Caso você não tenha o Ruby instalado no seu computador, vamos usar o [RVM](http://rvm.io) para instalar:
1. Digite isso no terminal: `curl -sSL https://get.rvm.io | bash -s stable`
2. Instale a última versão do ruby: `rvm install ruby`

### Instalar o Middleman
1. Adicionar a gem do Middleman `gem install middleman`
2. Rodar `bundle`
3. Iniciar o middleman `middleman`

## Setup de estilo
Usamos o SCSS Lint para ajudar na organização do nosso CSS. Instale o plugin para o seu editor de preferência:
- Atom: [Linter-scss-lint](https://atom.io/packages/linter-scss-lint)
- Visual Studio codo: [Linter-scss-lint](https://marketplace.visualstudio.com/items?itemName=adamwalzer.scss-lint)
- Sublime: [Scss-lint](https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint)
