import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
    return(
        <>
        <section id="About">
            <main className="background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1 className="title-about">
                                Sobre mim
                            </h1>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="txt-about">
                                Olá a todos! Meu nome é Jhones Yure e sou um desenvolvedor fullstack estudante em Ciência da Computação. 
                                É um prazer estar aqui hoje e compartilhar um pouco sobre mim.
                            </p>
                            <p className="text-about">
                                Desde jovem, sempre fui fascinado por tecnologia e computadores. Essa paixão me levou a seguir uma carreira na área de desenvolvimento de software. Além do meu curso técnico em desenvolvimento de software, busquei continuamente expandir meus conhecimentos e habilidades por meio de cursos profissionalizantes e workshops.
                                Ao longo da minha jornada, tive a oportunidade de participar de diversos projetos desafiadores. Isso me proporcionou a chance de aprimorar minhas habilidades em áreas como desenvolvimento web, criação de APIs, integração de banco de dados e implementação de recursos de segurança da informação.
                                Sou apaixonado por encontrar soluções criativas e eficientes para problemas complexos. Tenho uma abordagem analítica e focada na resolução de desafios. Além disso, valorizo a qualidade do código e a entrega de projetos no prazo.
                                Estou entusiasmado com a possibilidade de enfrentar novos desafios e contribuir para o sucesso deste projeto. Tenho uma mentalidade de aprendizado contínuo e estou sempre aberto a novas oportunidades de crescimento profissional.
                                Agradeço a todos pela atenção e pela oportunidade de me apresentar. Estou ansioso para colaborar com vocês e alcançarmos resultados excepcionais juntos. Muito obrigado!
                                Espero que essa versão mais detalhada atenda às suas expectativas!
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <picture>
                            <img src="/about-image.png" className="image-about" alt={""}/>
                            </picture>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        <style jsx>
        {`
            @media (min-widht: 768px){
                .container{
                    position: relative;
                    min-heigth: 100%;
                    max-widht: 100%;
                    padding: 0;
                }
            }
            .main{
                width: 885px;
                height: auto;
            }
            .background 
            {
                background-color: #1E1E1E;
                height: 100%;
            }
            .title-about 
            {
                text-align: center;
                color: white;
                font-size: 50px;
                font-weight: bold;
                margin-top: 5%;
            }
            .txt-about
            {
                margin-top: 10%;
                color: white;
                font-weight: bold;
                margin-left: 5%;
            }
            .text-about
            {
                color: white;
                text-aling: center;
                margin-left: 5%;
            }
            .image-about
            {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            @media (max-width: 767px)
            {
                .image-about{
                    widht: 100%
                }
            }
        `}
        </style>
        </>
    )
}
export default About;