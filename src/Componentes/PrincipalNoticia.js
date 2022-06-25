import React from 'react';
const PrincipalNoticia = (props) => {
    const{url, author, title, urlToImage, content}= props.noticia;
    console.log(props.noticia)
return(
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm" >
                    <img src={urlToImage} width="100%" className="img-rounded "></img>
                </div>
                <div className="col-sm">
                    <h1 align="center">{title}                    
                    </h1>
                    <p></p>
                    <h6 >{content}       </h6>
                </div>
            </div>
        </div>
)
}
export default PrincipalNoticia;