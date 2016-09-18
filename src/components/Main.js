//css
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片的相关数据
let imageDatas = require('../data/imageDatas.json');

function getImageUrl(imageDataArr){
  for (let i= 0,j=imageDataArr.length; i<j;i++){
    var singeImageData = imageDataArr[i];
    singeImageData.imageUrl = require('../images/'+singeImageData.fileName);
    imageDataArr[i] = singeImageData;
  }
  return imageDataArr;
}
imageDatas = getImageUrl(imageDatas);

//图片部分
let ImgFigure = React.createClass({
  render:function(){
    return(
      <figure>
        <img src={this.props.data.imageUrl} alt={this.props.data.title} />
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
});
class AppComponent extends React.Component {
  render() {
    let controllerUnits = [],
      imgFigures = [];
    imageDatas.forEach(function(value){
      imgFigures.push(<ImgFigure data={value}/>)
    });
    return (
      <section className="stage">
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
