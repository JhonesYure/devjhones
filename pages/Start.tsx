import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

function Start(){
    return(
        <>
        <section id="Start">
            <main className="fundo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="txt">
                                Olá, é um prazer <br/>
                                sou Jhones Yure. | <br/>
                                Desenvolvedor FullStack
                            </h1>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <picture>
                            <img src="/jhones.jfif" className="photo" alt={""} />
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
            .fundo
            {
                background-image: url('/fundo.png');
                background-size: cover;
                height: 100%;
            }
            .txt 
            {
                font-size: 50px;
                margin-top: 25%;
                color: white;
                font-weight: bold;
                margin-bottom: 10%;
            }
            .photo 
            {
                border-radius: 550px;
                height: 350px;
                margin-top: 20%;
                margin-bottom: 5%;
                float: right;
                object-fit: cover;
            }
            @media (max-width: 767px)
            {
                .photo{
                    display:none;
                }
            }
            
        `}
        </style>
        </>
    )
}
export default Start;