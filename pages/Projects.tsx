import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function  Projects()
{
    return(
        <>
        <section id="Projects">
            <main className="background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title">
                                Projetos
                            </h1>
                        </div>
                        <div className="col-md-4 col-sm-12 box">
                            <Card style={{ width: '20rem', height: '350px' }}>
                                <Card.Img variant="top" src="/vent.png" style={{ height: '200px' }}/>
                                <Card.Body>
                                    <Card.Title>Vent Digital</Card.Title>
                                    <Card.Text>
                                        Empresa de gestão de dados<br/>
                                        cultura de dados para dentro das organizações<br/>
                                        <strong>React, NextJS</strong>
                                    </Card.Text>
                                    <a href="https://vent.digital/" target="_blank">
                                    <Button variant="primary">Visite</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12 box">
                            <Card style={{ width: '20rem', height: '350px' }}>
                                <Card.Img variant="top" src="/starcode.png" style={{ height: '200px' }}/>
                                <Card.Body>
                                    <Card.Title>StarCode Digital</Card.Title>
                                    <Card.Text>
                                    Sites, Apps, Data Analystic, Reparação & Manutenção <br/>
                                    <strong>PHP, HTML, CSS, JAVASCRIPT</strong>
                                    </Card.Text>
                                    <a href="https://starcodedigital.com.br/" target="_blank">
                                    <Button variant="primary">Visite</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12 box">
                            <Card style={{ width: '20rem', height: '350px' }}>
                                <Card.Img variant="top" src="/aware.png" style={{ height: '200px' }}/>
                                <Card.Body>
                                    <Card.Title>Estúdio Aware</Card.Title>
                                    <Card.Text>
                                    Criação de Site, Marketing, Videos, Redes sociais<br/>
                                    <strong>Em produção</strong>
                                    </Card.Text>
                                    <a href="https://estudioaware.com/" target="_blank">
                                    <Button variant="primary">Visite</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-12 box">
                            <picture>
                            <img src="/github.png" className="github" alt={""}/>
                            </picture>
                            <a href="" className="txt-git">
                                Repositório GutHub
                            </a>
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
            .title 
            {
                text-align: center;
                color: white;
                font-size: 50px;
                font-weight: bold;
                margin-top: 5%;
            }
            .box 
            {
                display: flex;
                justify-content: center;
                align-items: center; 
                margin-top: 5%;
            }
            .box:hover
            {
                -webkit-transition: all 0.7s ease;
                transition: all 0.7s ease;
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
            .image-box
            {
                width: 100%;
            }
            .txt-git 
            {
                color: white;
                text-align: center;
                font-weight: bold;
               
            }
            .github
            {
                
                margin-right: 1%;
                text-decoration: none;
            }
        `}
        </style>
        </>
    )
}
export default Projects;