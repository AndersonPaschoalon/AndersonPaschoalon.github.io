/* <FooterLinks1 footerNote= "" 
                 linkSet={[{url:, label:"", show:true }, 
                           {url:, label:"", show:true}, 
                           {url:, label:"", show:true}]}>
    </FooterLinks1>
HTML Template: 
      <footer id="footer" class="footer-area">
        <div class="divTable" style="width: 100%;" >
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell"><a href="https://github.com/AndersonPaschoalon" class="nav-link">GitHub</a></div>
              <div class="divTableCell"><a href="https://www.researchgate.net/profile/Anderson_Paschoalon2" class="nav-link">Research Gate</a></div>
              <div class="divTableCell"><a href="https://br.linkedin.com/in/anderson-paschoalon-61054175" class="nav-link">Linkedin</a></div>
              <div class="divTableCell"><a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8136551T3" class="nav-link">Lattes</a></div>
              <div class="divTableCell"><a href="https://intrig.dca.fee.unicamp.br/people/" class="nav-link">INGTRIG</a></div>
              <div class="divTableCell"><a class="nav-link">Email</a></div>
              <div class="divTableCell"><a class="nav-link">Email</a></div>
              <div class="divTableCell">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="divTable" style="width: 100%;" >
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell" style="width: 25%;" >&nbsp;</div>  
              <div class="divTableCell" style="width: 50%;" >
                <p>Copyright © 2012 Andrew Louis</p>
              </div> 
              <div class="divTableCell" style="width: 25%;" >&nbsp;</div>  
            </div>
          </div>
        </div>            
      </footer>
*/
class FooterLinks1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerNote: "",
            linkSet: []
        };
    }

    componentWillMount() {
        let THIS_METHOD = "FooterLinks1.componentWillMount() ";
        let i = 0;
        let theLinkSet = [];
        if (this.props.linkSet != null && this.props.linkSet.length > 0) {
            for (i = 0; i < this.props.linkSet.length; i++) {
                if (this._isFooterItem(this.props.linkSet[i]) == 1) {
                    theLinkSet.push({ url: this.props.linkSet[i].url, label: this.props.linkSet[i].label });
                }
            }
            if (this.props.footerNote != null) {
                this.setState({ linkSet: theLinkSet, footerNote: this.props.footerNote });
            }
            else {
                console.log(THIS_METHOD + "  footerNote property is null or invalid")
            }
        }
        else {
            console.log(THIS_METHOD + " linkSet property is null or invalid")
        }
    }

    render() {
        let THIS_METHOD = "FooterLinks1.render() ";
        let i = 0;
        let footerItemsList = [];
        let footerMsg = [];
        console.log(THIS_METHOD + " this.state.footerNote:" + this.state.footerNote);
        if (this.state.footerNote != null && this.state.footerNote != "") {
            footerMsg.push(<p  style={{margin:'auto'}}  >{this.state.footerNote}</p>);
        }
        console.log(THIS_METHOD + " this.state.linkSet.length:" + this.state.linkSet.length);
        for (i = 0; i < this.state.linkSet.length; i++) {
            console.log(THIS_METHOD + " -- this.state.linkSet[" + i + "].url:" + this.state.linkSet[i].url);
            console.log(THIS_METHOD + " -- this.state.linkSet[" + i + "].label:" + this.state.linkSet[i].label);
            footerItemsList.push(
                <FooterItem url={this.state.linkSet[i].url}
                    label={this.state.linkSet[i].label}>
                </FooterItem>);
        }
        console.log(THIS_METHOD + " footerItemsList.length:" + footerItemsList.length);
        console.log(THIS_METHOD + " footerMsg.length:" + footerMsg.length);
        return (
            <div className="container" >
                <br></br>
                <br></br>
                <footer id="footer" className="footer-area" style={{clear:'both'}}>
                    <div className="divTable" style={{ width: '100%' }} >
                        <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableCell">&nbsp;</div>
                                {footerItemsList}
                                <div className="divTableCell">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div className="divTable" style={{ width: '100%' }} >
                        <div className="divTableBody">
                            <div className="divTableRow" >
                                <div className="divTableCell" style={{width: '50%' }} >
                                    {footerMsg}
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

    /***
     * This method returns 1 in case the foots item is visible, 0 it must be hidden, and -1 in case it is
     * malformed.
     */
    _isFooterItem(itemx) {
        let THIS_METHOD = "isFooterItem()";
        let itemContent;
        if (('url' in itemx) && ('label' in itemx) && ('show' in itemx)) {
            if (itemx.show) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            console.log(THIS_METHOD + "-- item is bad formatted. label, content or show are missing");
            return -1;
        }
    }

}


/***
* <FooterItem url="" label: "" ></FooterItem>
*/
class FooterItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="divTableCell">
                <a href={this.props.url} className="nav-link" target="_blank">
                    {this.props.label}
                </a>
            </div>
        );
    }

}