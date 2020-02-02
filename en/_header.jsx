ReactDOM.render
(
    <NavbarLeft1 title="Anderson Paschoalon" menu= {[
        {label:"Home", show:true,  content:"./index.html"},
        {label:"Bio", show:true, content:"./bio.html"},
        {label:"Publications", show:true, content:"./publications.html"},
        {label:"Publications", show:true, content:"./publications.html"},
        {label:"Projects", show:true, content:[
            {label:"Simitar", show:true, content:"./simitar.html"},
            {label:"EtherMonitor", show:true, content:"./etherMonitor.html"},
            {label:"Customize Ubuntu", show:true, content:"./customizeUbuntu.html"},
            {label:"CppTools", show:true, content:"./cpptools.html"},
            {label:"Tabletop RPG Soundtrack", show:true, content:"./tabletop.html"},                
            {label:"Mods: Age Of Mitology", show:true, content:"./aom.html"},    
            {label:"Mods: Skyrim", show:true, content:"./skyrim-silverhand.html"}
        ]}, 
        {label:"Curriculum", show:true, content:"./curriculum.html"}
    ]} /> ,
    document.getElementById("page-navbar")
);