ReactDOM.render
( 
    <CardFloatLeft  btnText="Github" 
                     btnLink="https://github.com/AndersonPaschoalon/Simitar/tree/master/SIMITAR" 
                     image="../img/sim.png" 
                     title="SIMITAR traffic generator repository at GitHub" 
                     textLines={["Simitar: a tool for generation of generation of synthetic and realistic internet traffic for testing and benchmark." 
                                ]} >
    </CardFloatLeft>,
    document.getElementById("card-simitar")
);


ReactDOM.render
( 
    <CardFloatRight btnText="IEEE Xplore" 
                     btnLink="https://ieeexplore.ieee.org/document/8667676" 
                     image="../img/article.png" 
                     title="Automated Selection of Inter-Packet Time Models Through Information Criteria" 
                     textLines={["We evaluate the feasibility of using Bayesian information criterion (BIC) and Akaike information criterion (AIC) as tools for automated selection of the best-fit stochastic process for inter-packet times." 
                                ]} >
    </CardFloatRight>,
    document.getElementById("card-aic-bic")
);

ReactDOM.render
( 
    <CardFloatLeft  btnText="repositorio.unicamp.br" 
                     btnLink="http://repositorio.unicamp.br/handle/REPOSIP/334510?locale=es" 
                     image="../img/tese.png" 
                     title="SIMITAR : synthetic and realistic network traffic generation" 
                     textLines={["My master degree thesis: SIMITAR : synthetic and realistic network traffic generation."
                                ]} >
    </CardFloatLeft>,
    document.getElementById("card-ms-tese")
);


ReactDOM.render
( 
    <CardFloatRight btnText="PDF" 
                     btnLink="../files/PatenteEtherMonitor.pdf" 
                     image="../img/pat.png" 
                     title="CPQD3036 - ETHERMONITOR - V.1.0" 
                     textLines={["Certificado de Registro de Programa de Computador", 
                                "Processo Nº: BR512014001177-1"]} >
    </CardFloatRight>,
    document.getElementById("card-patente")
);

ReactDOM.render
( 
    <CardCarousel images={["../img/forest1.jpg", 
                           "../img/img_snowtops.jpg", 
                           "../img/forest1.jpg"]} 
                  //imagesStyle={{high:'250px', borderRadius:'8px'}}                                    
                  title="TITULO TITULO" 
                  btnText="ME CLIQUE!!!" 
                  btnLink="www.google.com" 
                  textLines={["line 1 line 1", 
                              "line 2 line 2", 
                              "line 3 line 3"]}>
    </CardCarousel>,
    document.getElementById("card-carousel-sample")
);

