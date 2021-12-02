import '../styles/App.scss';
const FilterBtn = (props) => {
  return (
    <button onClick={props.handleBtn} className="landing__filterbtn">
      {props.text}
    </button>
  );
};
export default FilterBtn;
