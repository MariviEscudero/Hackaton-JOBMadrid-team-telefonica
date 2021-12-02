import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DragDrop from './components/DragDrop/DragDrop';

function App() {
  const [files, setFiles] = useState([   
  'nice.pdf',
  'verycool.jpg',
  'amazing.png',
  'goodstuff.mp3',
  'thankyou.doc'
])

  const handleDrop = (files) => {
    let fileList = files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    setFiles(fileList)
  }
  return (
    <div className="App">
       <DragDrop handleDrop={handleDrop}>
        <div style={{height: 300, width: 250}}>
          {files.map((file) =>
            <div>{file}</div>
          )}
        </div>
      </DragDrop>
      </div>
  );
}

export default App;
