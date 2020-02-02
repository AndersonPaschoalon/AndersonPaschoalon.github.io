// <NavbarLeft1 title="Navbar title" menu = "" />
class NavbarLeft1 extends React.Component
{
    constructor(props){
        super(props);
        // 
        this.state = {
            title: "title",
            menu: []
        }
    }

    componentWillMount()
    {
        let THIS_METHOD = "NavbarLeft1.componentWillMount() ";
        console.log(THIS_METHOD);
        let parentLabel = "";
        let i = 0;
        let j = 0;
        let subMenu = [];
        let itemType = 0;
        let itemTypeSubMenu = 0;
        let visibleSubMenu = [];
        let visibleMenu = [];
        for(i = 0; i < this.props.menu.length; i++)
        {
            itemType = isNavbarListItem(this.props.menu[i]);
            if( itemType === 0)
            {
                console.log(THIS_METHOD + " -- LEAF {label:" + this.props.menu[i].label + ", content:" + this.props.menu[i].content + "}");
                if(this.props.menu[i].show === true)
                {
                    visibleMenu.push({label:this.props.menu[i].label, content:this.props.menu[i].content, show:true});
                }
                else
                {
                    console.log(THIS_METHOD + " -- HIDE THIS ITEM");
                }
            }
            else if(itemType === 1)
            {
                parentLabel = (this.props.menu[i].label == null)? "DROPDOWN": this.props.menu[i].label;
                subMenu = this.props.menu[i].content;
                visibleSubMenu = [];
                for(j = 0; j < subMenu.length; j++)
                {
                    if(isNavbarListItem(subMenu[j]) === 0)
                    {
                        console.log(THIS_METHOD + " SUB-LEAF : parentLabel:" + parentLabel + " { label:"+ subMenu[j].label + " ,content:" + subMenu[j].content + "}");
                        if(subMenu[j].show === true)
                        {
                            visibleSubMenu.push({"label":subMenu[j].label, "content":subMenu[j].content, show:true});
                        }
                        else 
                        {
                            console.log(THIS_METHOD + " -- HIDE THIS ITEM");
                        }
                    }
                    else
                    {
                        console.log(THIS_METHOD + " -- malformed SUB-LEAF item (i:" + i + ", j:" + j + ")");
                    }                
                }
                visibleMenu.push({label:parentLabel, content:visibleSubMenu});
            }
            else 
            {
                console.log(THIS_METHOD + "-- malformed LEAF item i:" + i);
            }
        }
        this.setState({title:this.props.title, menu:visibleMenu});
    }

    render()
    {
        let THIS_METHOD = "NavbarLeft1.render() "; 
        console.log(THIS_METHOD);        
        let i = 0;
        let itemType = 0;
        let theNavbarItems = [];
        //let theNavbarDropdowns = [];
        for(i = 0; i < this.state.menu.length; i++)
        {
            if(Array.isArray(this.state.menu[i].content)) // is a dropdown
            {
                console.log(THIS_METHOD + " -- A dropdown item");
                theNavbarItems.push(<NavbarItemDropdown  content={this.state.menu[i].content} 
                                                         label={this.state.menu[i].label} 
                                                         show={true} /> );                   
            }
            else // is a button  
            {
                console.log(THIS_METHOD + " -- A button item");
                theNavbarItems.push(<NavbarItem  content={this.state.menu[i].content} 
                                                 label={this.state.menu[i].label}
                                                 show={true} />);                

            }
        }
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
              <div className="d-flex w-50 order-0">
                <a className="navbar-brand mr-1" href="#">{this.state.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
                <ul className="navbar-nav">
                    {theNavbarItems}
                </ul>
              </div>
            </nav>
        );
    }
}


class NavbarItem extends React.Component
{
    constructor(props){
        super(props);
    }

    render()
    {
        let retCode = "";
        if(this.props.show)
        {
            retCode = (
                <li className="nav-item active">
                    <a className="nav-link" href={this.props.content}> {this.props.label} 
                    </a>
                </li>
            );
        }
        else 
        {
            console.log("-- property show is set FALSE");
        }
        return retCode;
    }    
}


class NavbarItemDropdown extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let parentLabel = this.props.label;
        let retCode = "";
        let itemType = 0;
        let showItem = false;
        let i = 0;
        let listButtons = [];
        for(i = 0; i < this.props.content.length; i++)
        {
            itemType = isNavbarListItem(this.props.content[i]);
            if(itemType == 0)
            {
                console.log("[OK] is a LEAF item");
                listButtons.push(<a className="dropdown-item nav-link active" 
                                    href={this.props.content[i].content}> 
                                        {this.props.content[i].label} 
                                 </a>);
            }
            else 
            {
                console.log("-- wrong list itemType: " + itemType);
            }
        }
        if(listButtons.length > 0 )
        {
            retCode =  <li className="nav-item">
                <div className="dropdown">
                    <button className="btn dropdown-toggle nav-link active" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.label}
                    </button>
                    <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        {listButtons}
                    </div>
                </div>
            </li>
        }
        return retCode;
    }
}


///////////////////////////////////////////////////////////////////////////////
// Utils functions
///////////////////////////////////////////////////////////////////////////////

/**
 * Check if the provided item by the list is a valid NavbarItem, wich are:
 * 0 : Leaf Item, with the format {label:"<string>", content:"<string>"}. 
 *     Eg: {label:"google", content:"www.google.com" }
 * 1 : Array Item, an item with the format {label:"string", content:[<list of Leaf Items>]}
 *     Eg: {label:"Fruits", content:[{label:"grape", content:"01"}, 
 *         {label:"banana", content:"02"}, {label:"apple", content:"03"}]}
 * -1 : Invalid Item 
 */
function isNavbarListItem(itemx)
{
    let itemContent;
    if(('content' in itemx ) && ('label' in itemx) && ('show' in itemx) )
    {
        itemContent = itemx.content;
        console.log("testing item {label:" + itemx.label + ", content:"  + itemx.content + "}");
        if(Object.prototype.toString.call(itemContent) === "[object String]")
        {
            console.log("-- content  is a string");
            return 0;
        }
        else if(Array.isArray(itemContent))
        {
            console.log("-- content  is an array");
            return 1;
        }
        else 
        {
            console.log("-- content  is in the wrong format");
            return -1 ;
        }
    }
    else 
    {
        console.log("-- item is bad formatted. label, content or show are missing");
        return -2;
    }
}


///////////////////////////////////////////////////////////////////////////////
// Test NavbarLeft1
///////////////////////////////////////////////////////////////////////////////
/*
ReactDOM.render
(
    <div id="page-container">
        <NavbarLeft1 title="Anderson Paschoalon" menu= {[
            {label:"Abacaxi", show:true,  content:"www.google.com"},
            {label:"Banana", show:true, content:"https://br.yahoo.com"},
            {label:"Carambola", show:true, content:"https://www.oantagonista.com/"},
            {label:"Damasco", show:false, content:"https://www.sublimetext.com/"} ,
            {label:"Universidades", show:true, content:[
                {label:"Usp", show:false, content:"https://www5.usp.br"},
                {label:"Unicamp", show:true, content:"https://www.unicamp.br/unicamp/"},
                {label:"Unesp", show:true, content:"https://www2.unesp.br/"}
            ]}, 
            {label:"Espinafre", show:true, content:"https://www.sublimetext.com/"}
        ]} /> 
    </div>,
    document.getElementById("root")
)
*/