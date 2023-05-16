import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer()
{
    return(
        <React.Fragment>
            <section id='footer'>
                <main className='fundo'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <a href='#'>
                                <picture>
                                <img src='/logo.png' className='icon' alt={""}/>
                                </picture>
                                </a>
                            </div>

                            

                            <div className='col-md-4'>
                                <p className='title'>
                                   
                                </p>
                                <p className='txt'>
                                    devjhones@outlook.com
                                </p>
                                <p className='txt'>
                                    +55 (51) 9.9411-9063
                                </p>
                                <p className='txt'>
                                    Porto Alegre, Brasil
                                </p>
                            </div>

                            <div className='col-md-4'>
                                <p className='title'>
                                    Redes Sociais
                                </p>
                                <a href='https://www.instagram.com/jhonesyure/' target='blank'>
                                    <picture>
                                    <img src='/insta.png' className='icon-rede'alt={""}/>
                                    </picture>
                                </a>
                                <a href='https://www.linkedin.com/in/devjhones/' target='blank'>
                                    <picture>
                                    <img src='/linkdin.png' className='icon-rede'alt={""}/>
                                    </picture>
                                </a>
                              
                                <a href='https://www.facebook.com/trinindad.bomfim' target='blank'>
                                    <picture>
                                    <img src='/face.png' className='icon-rede'alt={""}/>
                                    </picture>
                                </a>
                                
                            </div>

                            <div>
                                <p className='copy'>
                                    Direitos reservados DevJhones © 2023
                                </p>
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
                        display: flex;
                    }
                }
                  .main{
                    width: 885px; /* 885px */
                    height: auto;
                  }
                  .fundo{
                    background-color: #343434;  
                  }
                  .icon{
                    widht: 50px;
                    height: 70px;
                    margin-bottom: 15%;
                    margin-top: 15%;
                    align-items: center;
                    justfy-content: center;
                    margin-left: 40%;
                  }
                  .title{
                    color: white;
                    font-weight: bold;
                    margin-top: 10%;
                    text-align: center;
                  }
                  .txt{
                    color: white;
                    /* font-weight: bold; */
                    text-align: center;
                    margin-top: 0%;
                    text-decoration: none;
                  }
                  .txt:hover{
                    color: #126782;
                  }
                  .txt-info{
                    margin-top: 0%;
                  }
                  .icon-rede{
                    widht:50px;
                    height: 50px;
                    justify-content: center;
                    display: block;
                    margin: 0px auto;
                  }
                  .icon-rede:hover{
                    -webkit-transition: all 0.7s ease;
                    transition: all 0.7s ease;
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2);
                  }
                  .copy{
                    color: white;
                    text-align: center;
                    margin-top: 2%;
                  }
                `}
            </style>
        </React.Fragment>
    )
}