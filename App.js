/*
*
    <div id="parent">
        <div id="child"
            <h1> I'm the H1 tag..</h1>
            <h2> I'm the H2 tag..</h2>
        </div>
        <div id="child2">
            <h1> I'm the H1 tag..</h1>
            <h2> I'm the H2 tag..</h2>
        </div>
    </div>
    https://github.com/swamysatyavarapu/React


*/

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm the H1 Tag..."),React.createElement("h2",{},"I'm the h2 tag...")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I'm the H1 Tag..."),React.createElement("h2",{},"I'm the h2 tag...")])]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);