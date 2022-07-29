import "./App.css";


const Preview = () => {
    return (
<article>
    <div
        id="preview"
        dangerouslySetInnerHTML={{
            __html: window.marked(this.state.input)
        }} 
        />
</article>
    );
}

export default Preview;