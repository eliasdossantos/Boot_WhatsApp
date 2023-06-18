const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Configurar o ChromeDriver
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

// Criar uma instância do navegador
const driver = new Builder().forBrowser('chrome').build();

// Navegar até o WhatsApp Web
async function navigateToWhatsAppWeb() {
    await driver.get('https://web.whatsapp.com/');
    await driver.sleep(28000);
}

// Definir contatos e mensagem a ser enviada
const contatos = ['NOME DO CONTATO'];
const mensagem = 'TESTANDO BOOT WHATSAPP 123...';

// Buscar contato
async function buscarContato(contato) {
    const campoPesquisa = await driver.findElement(By.xpath('//div[contains(@class, "copyable-text selectable-text")]'));
    await driver.sleep(3000);
    await campoPesquisa.click();
    await campoPesquisa.sendKeys(contato);
    await campoPesquisa.sendKeys(Key.ENTER);
}

// Enviar mensagem
async function enviarMensagem(mensagem) {
    const campoMensagem = await driver.findElements(By.xpath('//div[contains(@class, "copyable-text selectable-text")]'));
    await driver.sleep(3000);
    await campoMensagem[1].click();
    await campoMensagem[1].sendKeys(mensagem);
    await campoMensagem[1].sendKeys(Key.ENTER);
}

// Loop para enviar mensagem para o contato
async function enviarMensagens() {
    for (const contato of contatos) {
        await buscarContato(contato);
        await enviarMensagem(mensagem);
    }
}

// Executar as funções para enviar as mensagens
(async function main() {
    try {
        await navigateToWhatsAppWeb();
        await enviarMensagens();
        console.log('Mensagens enviadas com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } finally {
        await driver.quit();
    }
})();
