/**
 * 
<!--START Card Float Left-->
<div class="card float-left">
  <div class="row ">
    <div class="col-sm-7">
      <div class="card-block">
        <!--           <h4 class="card-title">Small card</h4> -->
        <p>Wetgple text to build your own card.</p>
        <p>Change around the content for awsomenes</p>
        <a href="#" class="btn btn-primary btn-sm">Read More</a>
      </div>
    </div>
    <div class="col-sm-5">
      <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt="">
    </div>
  </div>
</div>
<!--END Card Float Left-->
<CardCFloatLeft  btnText="Clique Aqui" btnLink="www.google.com" image="" title="Card Float Left" textLines=["linha 1 linha 1", "linha2, linha 2"] ></CardCFloatLeft>
 */
class CardFloatLeft extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillMount()
    {

    }

    render()
    {
        // vars
        let THIS_METHOD = "CardCFloatRight.render() ";
        let i = 0;
        let imgElements = [];
        let textBody = [];

        // Card image
        if(this.props.image != null && this.props.image != "")
        {
          imgElements.push(<img className="d-block w-100" src={this.props.image} alt=""></img>);
        }
        // title
        if('title' in this.props && this.props.title != null && this.props.title != "")
        {
            textBody.push(<h4 className="card-title">{this.props.title}</h4>);
        }
        // Card body
        if(Array.isArray(this.props.textLines))
        {
            for(i = 0; i < this.props.textLines.length; i++)
            {
                textBody.push(<p className="card-text">{this.props.textLines[i]}</p>);
            }
        }
        else if(this.props.textLines === null || this.props.textLines === "")
        {
            console.log(THIS_METHOD + " -- item textLines is malformed ");
        }
        else 
        {
            textBody.push(<p className="card-text">{this.props.textLines}</p>);
        }
        textBody.push(<br></br>);

        // card button
        if('btnText' in this.props && this.props.btnText != null && this.props.btnText != "" &&
           'btnLink' in this.props && this.props.btnLink != null && this.props.btnLink != "")
        {
            textBody.push(<a href={this.props.btnLink } 
                             className="mt-auto btn btn-primary" >
                                {this.props.btnText}
                          </a>);
        }
        else 
        {
            console.log(THIS_METHOD + " -- some items from card btn are malformed (btnText or btnLink)");
        }  
        // render        
        return(
        <div className="card float-left" style={{clear:'both'}}>
          <div className="row ">
            <div className="col-sm-7">
              <div className="card-block">
              {textBody}
              </div>
            </div>
            <div className="col-sm-5">
            {imgElements}
            </div>
          </div>
        </div>
        );
    }
}