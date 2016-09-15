//CSS
require('normalize.css/normalize.css');
require('styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

//获取图片相关的数据
var imageDatas = require('../images/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function getImageURL(imageDatasArr){
  for(var i = 0,j = imageDatasArr.length;i<j;j++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images'+singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);



let yeomanImage = require('../images/yeoman.png');

var GalleryByReactApp = React.createClass({
  render:function(){
    return(
      <section className="stage">
        <section className="img-sec">
          <span>hello</span>
        </section>
        <nav className="ctrl-nav">

        </nav>
      </section>
    )
  }
});




React.render(<GalleryByReactApp />,document.getElementById('content'));

module.exports = GalleryByReactApp;
