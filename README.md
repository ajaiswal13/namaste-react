//Create the following html using React.createElement
{/\* <div id="parent">
<div id="class">
<h1>I am h1 tag</h1>
<h2>I am h2 tag</h2>
</div>

</div> */}
// ReactElement Object => Browser Understands

// create Element is core react function
// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// [
// React.createElement("h1",{},"I am h1 tag"),
// React.createElement("h2",{},"I am h2 tag")
// ])
// )

// Here we are using ReactDOM as we have to render data
// We are creating root inside react i.e. REACT IS ONLY WORKING INSIDE DIV ID ROOT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// If the root already contains any html then root.render command will replace that html with 'parent' element
// that we have created above.
// Any element written above and below 'root' will not be affected by root.render
