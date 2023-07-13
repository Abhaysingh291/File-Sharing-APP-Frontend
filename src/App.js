import './App.css';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './Services/api.js';
// import axios from 'axios';
import Navbar from './Navbar';
import About from './AboutApp';
import Footer from './footer';
function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileinputref = useRef();

  useEffect(() => {
    // console.log("start");
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }

    getImage();
  }, [file])

  const onUploadClick = () => {
    fileinputref.current.click();
  }

  // console.log(file.name);
  return (
    <>
      <Navbar />
      <div className="myComponent">
        <div className="left-container">
          <div className="left box">
            <h1>Share Your Files with Ease</h1>
            <p>Upload and share the Link</p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileinputref}
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a className="result" href={result} target="blank">{result}</a>
          </div>
        </div>
        <div className="right-container"></div>
      </div>


      <About />
      <Footer />
    </>
  );
}

export default App;
