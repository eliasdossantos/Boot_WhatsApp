# Automação em Python e JavaScript para Envio de Mensagens pelo WhatsApp Web
**Aviso Legal:** Este projeto é apenas para fins educacionais. O uso indevido deste boot pode violar os termos de serviço do WhatsApp. Portanto, use-o por sua conta e risco.

## Boot em Python (boot_whatsapp.py)
Um bot simples criado em Python usando a biblioteca Selenium para automatizar o envio de mensagens pelo WhatsApp Web.

### Pré-requisitos
- Python 3.x
- Chrome Web Browser
- ChromeDriver

### Instalação
1. Clone o repositório do GitHub.
2. Instale as dependências usando o pip: `pip install -r requirements.txt`.
3. Baixe o ChromeDriver apropriado para a versão do seu Chrome a partir do seguinte link: [ChromeDriver Downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads).
4. Extraia o arquivo do ChromeDriver e adicione o local do executável ao PATH do sistema operacional.

### Uso
1. Execute o script `boot_whatsapp.py`: `python boot_whatsapp.py`.
2. Aguarde até que o navegador Chrome seja aberto e carregue o WhatsApp Web.
3. Faça a leitura do código QR exibido no navegador usando o aplicativo WhatsApp no seu celular.
4. Digite o número de vezes que deseja enviar a mensagem quando solicitado pelo programa.
5. Insira o nome do contato para o qual deseja enviar a mensagem lembrando que deve ser o mesmo nome do contato do celular para não haver erros.
6. Aguarde enquanto o bot envia a mensagem o número especificado de vezes para o contato.

### Personalização
- **Contatos:** Edite a lista `contatos` no código para adicionar ou remover os contatos para os quais deseja enviar as mensagens.
- **Mensagem:** Modifique a variável `mensagem` para personalizar a mensagem que será enviada.

### Observações Importantes
- Certifique-se de ter o Chrome instalado e atualizado em sua máquina.
- Certifique-se de que o ChromeDriver esteja no PATH do sistema operacional ou especifique o caminho completo para o executável do ChromeDriver no script.

---

## Boot em JavaScript (boot_whatsapp.js)
Automatize o envio de mensagens pelo WhatsApp Web usando JavaScript com a biblioteca Selenium.

### Pré-requisitos
- Node.js
- Chrome Web Browser
- ChromeDriver

### Instalação
1. Clone o repositório do GitHub.
2. Instale as dependências usando o npm: `npm install`.

### Uso
1. Execute o script `boot_whatsapp.js`: `node boot_whatsapp.js`.
2. Aguarde até que o navegador Chrome seja aberto e carregue o WhatsApp Web.
3. Faça a leitura do código QR exibido no navegador usando o aplicativo WhatsApp no seu celular.
4. O boot enviará a mensagem definida na variável `mensagem` para o contato especificado na lista `contatos`.

### Personalização
- **Contatos:** Edite a lista `contatos` no código para adicionar ou remover os contatos para os quais deseja enviar as mensagens.
- **Mensagem:** Modifique a variável `mensagem` para personalizar a mensagem que será enviada.

---

**Nota:** Certifique-se de ter o Chrome instalado e atualizado em sua máquina, e de que o ChromeDriver esteja no PATH do sistema operacional ou especificado corretamente no script.
