#Fontes de estudo

[1] http://www.bosontreinamentos.com.br/eletronica/arduino/instalando-o-software-arduino-ide-no-ubuntu-linux/
[2] http://nodebots.io/
[3] http://johnny-five.io/
[4] http://blog.modulus.io/build-your-first-http-server-in-nodejs
[5] http://www.codetutorial.io/nodejs-socket-io-and-jhonny-five-to-control-arduino/

#Configurando o Arduino no Linux

Verifique se a placa foi reconhecida pelo SO emitindo o comando `lsusb`.

```
lsusb
```

Instale os pacotes necessários para rodar o Arduino IDE.

```
sudo apt-get install arduino arduino-core -y
```

Abra a IDE, selecione File > Examples > Firmata > StandardFirmata e clique no botão 'Update'.
Feche a IDE e rode o nodejs.