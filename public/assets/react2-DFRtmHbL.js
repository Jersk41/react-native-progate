import{R as e,c as n}from"./client-Hj43yjYw.js";class m extends e.Component{render(){return e.createElement("div",{className:"language-item"},e.createElement("div",{className:"language-name"},this.props.name),e.createElement("img",{className:"language-image",src:this.props.image}))}}class r extends e.Component{render(){const t=[{name:"HTML & CSS",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg"},{name:"JavaScript",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg"},{name:"React",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg"},{name:"Ruby",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg"},{name:"Ruby on Rails",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg"},{name:"Python",image:"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg"}];return e.createElement("div",null,e.createElement("h1",null,"List of Language"),e.createElement("div",{className:"language"},t.map(a=>e.createElement(m,{name:a.name,image:a.image}))))}}n.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(r,null)));