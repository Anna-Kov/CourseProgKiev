import React from 'react';
import ReactDOM from 'react-dom';
import './hello.css';

const ImgMain = () => {
  return (
    <div>
      <img src={"./image/main.jpg"} alt="photo"></img>
    </div>
  )
}

const Content = () => {
  return (
    <div className="main_content">
      <h4>Rappresent your life with a simple photo</h4>
      <p className="post_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit est, ullamcorper a vestibulum eu, pulvinar ut orci. Donec gravida orci non suscipit consequat. Suspendisse ut dui sed tortor ultrices tempus. Phasellus dictum lectus ex, ut placerat massa pharetra at. Nullam felis dolor, volutpat nec congue eget, ornare vitae quam. In finibus urna vel molestie tempus. Duis et convallis odio, convallis porta eros. Curabitur vel leo turpis. Morbi consequat ante in odio varius hendrerit.
</p>
      <p className="post_2">Vestibulum varius pretium mattis. Aliquam vulputate maximus est, quis euismod elit sodales placerat. Proin pretium arcu a odio consectetur, nec vestibulum nisi venenatis. Nulla eleifend nisi vel pretium aliquam. Cras ornare elementum vehicula. Curabitur at hendrerit nisl. Donec ligula mauris, commodo non diam et, aliquam aliquet lectus. Maecenas volutpat, nisl in consectetur condimentum, ligula mauris fringilla mauris, eu aliquet mauris ligula at orci. Cras efficitur non massa in auctor. Sed posuere leo quam, sed varius massa euismod sit amet. Proin vehicula egestas massa. Nullam tempus massa a elementum posuere. Nam ac velit ac purus vestibulum fringilla. Nunc a tortor posuere, ultrices nisi id, interdum risus. Donec laoreet tempus libero ut viverra. Proin dapibus magna vel urna ornare, et pretium metus facilisis. </p>
    <button>GET STARTED</button>
    </div>
  )
}

const Footer=()=>{
  return(
    <div>
      <p className="footer">Copyright by phototime - all right reserved</p>
    </div>
  )
}

const Hello = () => {
  return (
    <div>
      <header>
        <ul>
          <li>Home</li>
          <li>Photoapp</li>
          <li>Design</li>
          <li>Download</li>
        </ul>
      </header>
      <ImgMain></ImgMain>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}
ReactDOM.render(<Hello></Hello>, document.querySelector("#root"));