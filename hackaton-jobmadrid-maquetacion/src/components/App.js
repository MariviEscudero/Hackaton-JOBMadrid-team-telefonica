
import '../styles/App.scss';
import FilterBtn from './FilterBtn';

const App = () => {


 
  return (
    <div className="App">
      <main className="landing">
        <h1 className="landing__title">Dropzone viewer</h1>
        <div className="landing__dropzonearea">dropzone area</div>
        <FilterBtn text={'Resultado'} />
        <div className="landing__dataview">dataview area</div>
      </main>
    </div>
  );
};
export default App;
