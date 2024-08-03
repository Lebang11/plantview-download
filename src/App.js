import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-success display-1 fw-light'>Plantview</h1>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/uiJ0UFSHBYs`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
     
        <a className='btn btn-outline-secondary mt-3' href="https://drive.google.com/file/d/1BEnGuMXeodjXEtH0kMoxCcM2cCv5kHAI/view?usp=sharing" target='_blank' download>Download Plantview</a>
    </div>
  );
}

export default App;
