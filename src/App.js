import React from 'react';
import './App.scss';
import ReactLoading from 'react-loading';
import ContentLoader, { Facebook } from 'react-content-loader'
import FadeIn from 'react-fade-in';
class App extends React.Component {
 
  render(){

    return (
      <>
      <div className="App">
      <h1>react-loading</h1>
        <ReactLoading type='bar' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='balls' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='bubbles' color='balck' height={'20%'} width={'20%'} />
        <ReactLoading type='cubes' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='cylon' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='spinningBubble' color='black' height={'20%'} width={'20%'} />
        <ReactLoading type='spokes' color='black' height={'20%'} width={'20%'} />
      </div>
      <div className="App">
      <h1>react-content-loader</h1>
      <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
      <Facebook />
      </div>
      <div className="App">
      <h1>react-fade-in</h1>
      <FadeIn>
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
    <div>Element 5</div>
    <div>Element 6</div>
  </FadeIn>
      </div>
   
      </>
    )
}}

export default App;
