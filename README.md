#### Projeto PAW Milestone 2

Neste projeto temos 2 aplicações ...

A Rest-api-back-end ... responsável pela interação com o servidor ...

A Angular-front-end ... responsável pela interação com o cliente ...

Para a aplicação funcionar, ambas tem de estar ativas ...

Assim ... sendo ...

### Como usar a aplicação?

## 1 - Navegar para os repositórios das aplicações ...

Deve abrir dividir a terminal pra poder executar ambas as aplicações na mesma janela ...

Posteriormente ...

# terminal1
cd .\Rest-api-back-end\

# terminal2
cd .\Angular-front-end\ 


## 2 - Instalar dependencias

Em ambas as aplicações, quando corridas pela primeira vez, é preciso instalar dependencias ... para isso ... 

# terminal1
npm install

# terminal2
npm install


## 3 - Correr a aplicação

Resta apenas correr as aplicações ...

# terminal1
npm start

# terminal2
npm start
(ou) ... ng server -o

# abrir o browser
http://localhost:4200/


#### Informação extra
A Rest-api-back-end, corre na porta 3000 ...
A Angular-front-end, corre na porta 4200 ...

A Rest-api-back-end não possui interface gráfica, servindo apenas de intermediário à Angular-front-end no q toca a interações com o servidor.