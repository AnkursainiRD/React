const root=ReactDOM.createRoot(document.getElementById("root"));

const para=React.createElement("h2",{id:"para"},"this is paragraph from React")
const smallhead=React.createElement("h3",{},"this is h3 heading")


const head=React.createElement("div",{id:"heading"},[para,smallhead]);
console.log(head);
root.render(head);