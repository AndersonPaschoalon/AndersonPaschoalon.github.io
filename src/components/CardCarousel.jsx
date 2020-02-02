/**
<!-- START Card Carousel -->
<div class="container py-3">
  <div class="card">
    <div class="row ">
      <div class="col-md-7 px-3">
        <div class="card-block px-6">
          <h4 class="card-title">Horizontal Card with Carousel - Bootstrap 4 </h4>
          <p class="card-text">
            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
          </p>
          <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
          <br>
          <a href="#" class="mt-auto btn btn-primary  ">Read More</a>
        </div>
      </div>
      <!-- Carousel start -->
      <div class="col-md-5">
        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
            <li data-target="#CarouselTest" data-slide-to="1"></li>
            <li data-target="#CarouselTest" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt="">
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=855" alt="">
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://picsum.photos/450/300?image=355" alt="">
            </div>
            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
        </div>
      </div>
      <!-- End of carousel -->
    </div>
  </div>
</div>
<!-- END of card Carousel -->
*/

 // <CardCarousel images={["", "", ""]} title="" btnText="" btnLink="" textLines={[], [], []}></CardCarousel>
class CardCarousel extends React.Component
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
        let THIS_METHOD = "CardCarousel.render() ";
        let i = 0;
        let imgElements = [];
        let textBody = [];
        let validatedImageStyle = {};
        // image style
        if(this.props.imagesStyle != null && this.props.imagesStyle.constructor == Object)
        {
            validatedImageStyle = this.props.imagesStyle;
        }
        else 
        {
            console.log(THIS_METHOD + " -- PROPERTY <imagesStyle> NOT DEFINED!");
        }        
        // Card images
        if(Array.isArray(this.props.images))
        {
            for (i=0; i < this.props.images.length; i++)
            {
                if(i == 0)
                {
                    imgElements.push(<CardCarouselImage imageStyle={validatedImageStyle} active={true} src={this.props.images[i]} ></CardCarouselImage>);
                }
                else 
                {
                    imgElements.push(<CardCarouselImage imageStyle={validatedImageStyle} active={false} src={this.props.images[i]} ></CardCarouselImage>);
                }
                
            }
        }


        // Card title
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
            <div className="container py-3">
                <div className="card">
                    <div className="row ">
                    <div className="col-md-7 px-3">
                        <div className="card-block px-6">
                            {textBody}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div id="CarouselTest" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#CarouselTest" data-slide-to="0" className="active"></li>
                            <li data-target="#CarouselTest" data-slide-to="1"></li>
                            <li data-target="#CarouselTest" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            {imgElements}
                            <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>            
        );
    }
}

// <CardCarouselImage active=true/false src="" ></CardCarouselImage imageStyle={}>
class CardCarouselImage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let THIS_METHOD = "CardCarouselImage.render() "
        console.log(THIS_METHOD + " -- Image: <" + this.props.src + ">");
        if('src' in this.props)
        {
            if(this.props.active)
            {
                console.log(THIS_METHOD + " Active is TRUE");                
                return(
                    <div className="carousel-item active">
                        <img className="d-block" src={this.props.src} style={this.props.imageStyle}>
                        </img>
                    </div>
                );
            }
            else 
            {
                console.log(THIS_METHOD + "Active is FALSE");
                return(
                    <div className="carousel-item">
                        <img className="d-block" src={this.props.src} style={this.props.imageStyle}>
                        </img>
                    </div>
                );                
            }
        }
        else 
        {
            console.log(THIS_METHOD + " -- null or invalid src property!");
            return "";
        }

    }
}