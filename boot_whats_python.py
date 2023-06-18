from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import time

# Navegar até o WhatsApp Web
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://web.whatsapp.com/')
time.sleep(28)

# Definir contatos e mensagem a ser enviada
contatos = ['NOME DO CONTATO']
mensagem = "TESTANDO BOOT WHATSAPP 123..."

# Obter o número de vezes que a mensagem será enviada
num_envios = int(input("Digite o número de quantas vezes a mensagem será enviada: "))

# Buscar contato
def buscar_contato(contato):
    campo_pesquisa = driver.find_element_by_xpath('//div[contains(@class, "copyable-text selectable-text")]')
    time.sleep(3)
    campo_pesquisa.click()
    campo_pesquisa.send_keys(contato)
    campo_pesquisa.send_keys(Keys.ENTER)

# Enviar mensagem
def enviar_mensagem(mensagem):
    campo_mensagem = driver.find_elements_by_xpath('//div[contains(@class, "copyable-text selectable-text")]')
    time.sleep(3)
    campo_mensagem[1].click()
    campo_mensagem[1].send_keys(mensagem)
    campo_mensagem[1].send_keys(Keys.ENTER)

# Loop para enviar mensagem para o contato e repetir o número de vezes especificado
for contato in contatos:
    buscar_contato(contato)
    for _ in range(num_envios):
        enviar_mensagem(mensagem)