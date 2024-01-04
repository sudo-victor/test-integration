O Supertest é uma biblioteca popular para testar APIs em Node.js. Ele é comumente utilizado em conjunto com frameworks de teste como Mocha ou Jest. Aqui estão alguns passos básicos para começar a usar o Supertest com o Mocha, por exemplo.

1. **Instalação**:
   **Certifique**-se de ter o Supertest instalado junto com as dependências necessárias:

   ```bash
   npm install supertest --save-dev
   ```

2. **Configuração do Vitest**:
   Se você ainda não tiver o Vitest instalado, instale-o:

   ```bash
   npm install vitest
   ```

3. **Configuração do Supertest**:
   Crie um arquivo de configuração **OU** adicione diretamente no seus arquivos de teste para o Supertest (por exemplo, `test/helpers.js`):

   ```typescript
   import supertest from 'supertest'
   const app = require('../seu-app');  // Substitua pelo caminho real do seu aplicativo

   export const request = supertest(app);
   ```

   Este arquivo cria uma instância do Supertest associada ao seu aplicativo(Express) e a exporta para que você possa usá-la em seus testes.

4. **Escrevendo Testes**:
   Agora você pode escrever seus testes utilizando o Supertest. Aqui está um exemplo usando Mocha:

   ```javascript
   // test/sua-api-test.js
    import { it } from "vitest"

    // FORMA SYNC
    it('responds with json', () => {
      request(app)
        .post('/users')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });

    // FORMA ASYNC
    it('responds with json', () => {
      const response = await request(app)
        .get('/users')
        .set('Accept', 'application/json')
      expect(response.headers["Content-Type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.email).toEqual('foo@bar.com');
    });
  });
   ```

   Certifique-se de ajustar os caminhos, endpoints e lógica de teste de acordo com sua aplicação.

Esses são passos básicos para começar a usar o Supertest com o Vitest. Adapte conforme necessário para a estrutura do seu projeto e suas preferências de teste.