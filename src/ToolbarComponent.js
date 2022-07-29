import "./App.css";


const Toolbar = (props) => {
    return ( 
        <div className="toolbar">
            {props.text}
        </div>
     );
}
 
export default Toolbar;