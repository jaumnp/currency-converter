<h1 align="center">
  💱 Convert - Conversor de Moedas
</h1>

<p align="center">
  <b>Aplicação web elegante e interativa para conversão de moedas internacionais em Real Brasileiro (BRL) em tempo real.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Moedas Suportadas](#-moedas-suportadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Convert** é uma aplicação web focada em conversão rápida e intuitiva de moedas estrangeiras para o Real Brasileiro (BRL). Desenvolvido com HTML5, CSS3 e Vanilla JavaScript, o projeto conta com uma interface no estilo *dark mode*, validações de entrada por expressão regular (Regex) e formatação monetária nativa com a API `Intl.NumberFormat`.

---

## ✨ Funcionalidades

- 💵 **Conversão Instantânea**: Cálculo preciso de conversão de valores para Reais (BRL).
- 🏷️ **Cotação de Referência**: Exibição da taxa de câmbio unitária utilizada na conversão.
- 🛡️ **Máscara de Entrada Inteligente**: Filtro via Regex (`/\D+/g`) que impede a digitação de letras ou caracteres especiais no campo de valor.
- 🇧🇷 **Formatação Internacionalizada**: Utilização de `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` para exibição correta de símbolos, vírgulas e casas decimais.
- 🎨 **Interface Moderna & Responsiva**: Design escuro com tipografia moderna (Google Fonts: *Inter*, *Roboto* e *IBM Plex Mono*) e transições suaves de exibição.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível do formulário.
- **CSS3**: Estilização moderna com Flexbox, custom scrollbars, background estilizado e responsividade.
- **JavaScript (Vanilla / ES6+)**:
  - Manipulação de eventos do DOM (`input`, `submit`).
  - Expressões Regulares (Regex) para sanitização de inputs.
  - Formatação monetária com a API `Intl` / `Number.prototype.toLocaleString`.

---

## 🌐 Moedas Suportadas

| Moeda | Símbolo | Código |
|---|:---:|:---:|
| **Dólar Americano** | `US$` | `USD` |
| **Euro** | `€` | `EUR` |
| **Libra Esterlina** | `£` | `GBP` |

---

## 📁 Estrutura do Projeto

```text
currency-converter/
├── img/                  # Imagens e ícones da aplicação (logos, backgrounds, chevrons)
├── index.html            # Estrutura principal da página
├── script.js             # Lógica de conversão, validações e manipulação do DOM
└── styles.css            # Estilos visuais e regras de layout
```

---

## 🛠️ Como Executar o Projeto

Como o projeto é construído em Vanilla Web (sem necessidade de bundlers ou instalação de pacotes), você pode executá-lo de forma direta:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/currency-converter.git
   cd currency-converter
   ```

2. **Abra o arquivo `index.html`:**
   - Dê um duplo clique no arquivo `index.html`, ou
   - Utilize a extensão **Live Server** no VS Code para rodar com recarregamento automático.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

<p align="center">
  Desenvolvido por <a href="https://github.com/SEU_USUARIO">João</a>
</p>
