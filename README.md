<h2 align="center">
   Book Wise
</h2>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar-o-projeto">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 💻 Projeto

O Book Wise é uma aplicação para o usuário realizar a avaliação de livros. Nela o usuário poderá criar a sua avaliação para os livros disponíveis.

## 🧭 Como rodar o projeto

**Clone este repositório**

```bash
git clone https://github.com/f3l1p3v4/ignite-react-08-desafio-book-wise.git
```

**Acesse a pasta**

```bash
cd ignite-react-08-desafio-book-wise
```

**Instale as dependências**

```bash
npm install ou npm i
```

Para implementar a funcionalidade de agendamento, foram utilizados os serviços da Google Cloud. Para isso é necessário a configurar a permissão OAuth para obter as credenciais de ID do cliente para Aplicativo da Web. As credenciais criadas serão um ID do cliente e uma Chave secreta do cliente que devem ser utilizadas nas seguintes variáveis de ambiente:

**Crie um arquivo na raiz do projeto com o nome .env e coloque os dados abaixo e complete com seu dados**

```bash
DATABASE_URL="file:./prisma/dev.db"

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

**Em seguite execute:**

```bash
npx prisma migrate dev
```

Para realizar a autenticação com o NextAuth.js, é necessário definir um secret. Esse valor poder ser gerado por meio do comando abaixo como sugerido pela documentação:

**Em seguite execute:**

```bash
openssl rand -base64 32
```

**Por fim execute a aplicação**

```bash
npm run dev
```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/pt/)
- [Axios](https://axios-http.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Nookies](https://github.com/maticzav/nookies)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Stitches](https://stitches.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Date-fns](https://date-fns.org/)
- [Zod](https://zod.dev/)


## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
