ReactDOM.render
(
    <NavbarLeft1 title="Anderson Paschoalon" menu= {[
        {label:"Home", show:true,  content:"./index.html"},
        {label:"Bio", show:true, content:"./bio.html"},
        {label:"Publications & Patents", show:true, content:"./publications.html"},
        {label:"Projects", show:true, content:[
            /*completed*/
            {label:"Simitar", show:true, content:"./simitar.html"},
            {label:"EtherMonitor", show:true, content:"./etherMonitor.html"},
            {label:"(WIP) (Skyrim) Dawn of the Silver Hands", show:true, content:"./skyrim-silverhand.html"},
            /*wip*/
            {label:"(WIP) Spear", show:true, content:"https://github.com/AndersonPaschoalon/SkyrimSteamProfileManager.git"},
            {label:"(WIP) CppTools", show:true, content:"./cpptools.html"},
            {label:"(WIP) Age Of Mitology", show:false, content:"./aom.html"},
            /*depecrated*/
            {label:"Tabletop RPG Soundtrack", show:false, content:"./tabletop.html"},                
            {label:"Customize Ubuntu", show:false, content:"./customizeUbuntu.html"},  
        ]}, 
        {label:"Curriculum", show:true, content:"./curriculum.html"}
    ]} /> ,
    document.getElementById("page-navbar")
);