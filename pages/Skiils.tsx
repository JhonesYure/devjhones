import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
/* import './Home.module.css'; // Importe o arquivo CSS criado */

function Skills() {
  return (
    <>
      <section id="skills">
        <main className="background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">
                  Habilidades
                </h1>
              </div>
              <div className="col-12 tab">
                <Tabs
                  defaultActiveKey="profile"
                  id="fill-tab-example"
                  className="mb-3" style={{backgroundColor: '#0277BD', color: '#1E1E1E'}}
                  fill
                >
                  <Tab eventKey="HTML" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>Home</span>}>
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/html 1.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                        O HTML (HyperText Markup Language) é uma linguagem de marcação utilizada na criação de páginas da web. Por meio de uma sintaxe simples e estruturada, o HTML permite definir a estrutura e o conteúdo de uma página, utilizando tags para marcar elementos como títulos, parágrafos, imagens, links e tabelas. Essas tags são interpretadas pelos navegadores para renderizar e exibir o conteúdo corretamente. O HTML é a base fundamental do desenvolvimento web, fornecendo a estrutura básica para a criação de páginas acessíveis, semânticas e interativas. Combinado com o CSS para estilização e o JavaScript para interatividade, o HTML possibilita a construção de experiências web ricas e envolventes.
                        </p>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="CSharp C#" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>CSharp C#</span>} >
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/csharp 1.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                            O C# (C Sharp) é uma linguagem de programação moderna e orientada a objetos desenvolvida pela Microsoft. Criada com o objetivo de ser uma linguagem versátil e robusta, o C# oferece uma sintaxe elegante e fácil de entender, tornando-a uma escolha popular entre os desenvolvedores. O C# é amplamente utilizado para o desenvolvimento de aplicativos desktop, web e móveis, além de ser a principal linguagem utilizada para o desenvolvimento de aplicativos na plataforma .NET da Microsoft. Com recursos poderosos, como a verificação de tipo estática, gerenciamento automático de memória e suporte a programação assíncrona, o C# permite aos desenvolvedores criar software de alta qualidade e desempenho. Além disso, o ecossistema do C# é rico em bibliotecas e frameworks, oferecendo uma ampla gama de ferramentas e recursos para simplificar o desenvolvimento de aplicativos. Com sua combinação de usabilidade, desempenho e recursos avançados, o C# é uma linguagem confiável e amplamente adotada para atender às necessidades de desenvolvimento de software moderno.
                        </p>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="JavaScript" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>JavaScript</span>}>
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/javascript 1.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                        JavaScript é uma linguagem de programação de alto nível, interpretada e multiplataforma. Originalmente desenvolvida para ser executada nos navegadores web, o JavaScript expandiu seu alcance e se tornou uma das linguagens mais populares no desenvolvimento web, tanto no lado do cliente quanto no lado do servidor.
                        Com o JavaScript, os desenvolvedores podem adicionar interatividade e dinamismo às páginas da web. Ele permite a manipulação do conteúdo HTML, estilização CSS e interação com o usuário por meio de eventos, validações de formulário e animações. 
                        </p>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="ReactJS" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>ReactJS & Native</span>}>
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/react.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                        O ReactJS é uma biblioteca JavaScript de código aberto amplamente utilizada para criar interfaces de usuário interativas e reativas em aplicações web. Ele utiliza a abordagem baseada em componentes, permitindo que os desenvolvedores dividam a interface do usuário em componentes reutilizáveis e independentes. 

                        Por outro lado, o React Native é um framework JavaScript para o desenvolvimento de aplicativos móveis nativos para iOS e Android. Ao contrário do ReactJS, que é voltado para aplicações web, o React Native permite que os desenvolvedores criem interfaces de usuário nativas utilizando componentes reutilizáveis do React. Isso significa que os aplicativos desenvolvidos com React Native têm desempenho e aparência nativos, já que são traduzidos para os componentes e APIs nativas das plataformas móveis.
                        </p>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="PHP" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>PHP</span>}>
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/php.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                        PHP (Hypertext Preprocessor) é uma linguagem de script de código aberto amplamente utilizada para o desenvolvimento web. Ela foi especialmente projetada para criar páginas dinâmicas e interativas, permitindo a comunicação com bancos de dados e a geração de conteúdo personalizado.
                        O PHP é executado no lado do servidor, o que significa que o código PHP é processado no servidor antes que o resultado final seja enviado ao cliente. 
                        </p>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Banco de Dados" title={<span style={{ color: '#1E1E1E', fontWeight: 'bold', fontSize: 25, }}>Banco de Dados</span>}>
                    <div className="info">
                    <div className="col-md-6">
                        <img src="/sql.png" className="imageTab"/>
                    </div>
                    <div className="col-md-6">
                        <p className="txt">
                        forma eficiente. Ele permite que os dados sejam armazenados de forma persistente, acessados, atualizados e manipulados de acordo com as necessidades de uma aplicação.
                        Existem diferentes tipos de bancos de dados, incluindo bancos de dados relacionais e bancos de dados não relacionais. Os bancos de dados relacionais são baseados no modelo de dados relacional, onde os dados são organizados em tabelas com linhas e colunas. Exemplos populares de bancos de dados relacionais incluem MySQL, Oracle, SQL Server e PostgreSQL. 
                        </p>
                    </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
              <div className="col-md-6">
                <h1 className="endinfo">
                    Obrigado pela visita<br/>
                    Até breve! 
                </h1>
              </div>
              <div className="col-md-6">
                <img src="/robot.png" className="robot"/>
              </div>
            </div>
          </div>
        </main>
      </section>
      <style jsx>
        {`
           /*  @media (min-width: 768px) {
                .container {
                    position: relative;
                    min-height: 100%;
                    max-width: 100%;
                    padding: 0;
                }
            }
            .container {
                width: 885px;
                height: auto;
            }
            .main{
                width: 885px;
                height: auto;
            } */
            .background 
            {
                background-color: #1E1E1E;
                height: 100%;
            }
            .title 
            {
                text-align: center;
                color: white;
                font-size: 50px;
                font-weight: bold;
                margin-top: 5%;
            }
            .info
            {
                display: flex;
                justify-content: center;
                align-items: center; 
            }
            .txt
            {
                color: white;
                text-align: center;
            }
            .imageTab
            {
                float: left;
            }
            .endinfo
            {
                color: white;
                margin-top: 50%;
                text-align: center;
                font-weight: bold;
            }
            .robot
            {
                width: 100%;
                margin-top: 25%;
                margin-bottom: 10%;
            }
              
        `}
        </style>
    </>
  )
}

export default Skills;
