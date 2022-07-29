import "./App.css"

const Editor = () => {
    return ( 
        <div>
        <textarea  
        id="editor"
        type="text"
        value={this.state.input}
        onChange={(e)=>{this.onChange(e.target.value)}} 
        />
        </div>
     );
}
 
export default Editor;