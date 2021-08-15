ReactDOM.render
( 
    <FooterLinks1 footerNote= "This website was developed under MIT licence -- January of 2020" 
                  linkSet={[{url:"https://github.com/AndersonPaschoalon"                                 , label:"GitHub"         , show:true}, 
                            {url:"https://www.researchgate.net/profile/Anderson_Paschoalon2"             , label:"Research Gate"  , show:true}, 
                            {url:"https://br.linkedin.com/in/anderson-paschoalon-61054175"               , label:"Linkedin"       , show:true}, 
                            {url:"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8136551T3" , label:"Lattes"         , show:true}, 
                            {url:"https://intrig.dca.fee.unicamp.br/people/"                             , label:"INGTRIG"        , show:true}, 
                            {url:"mailto:anderson.paschoalon@gmail.com"                                  , label:"Email"          , show:true}]}>
    </FooterLinks1>,
    document.getElementById("the-page-footer")
);
