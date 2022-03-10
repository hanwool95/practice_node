// reference: https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.17.6&externalPlugins=&assumptions=%7B%7D

// <div className="shopping-list">
//   <h1>Shopping List for {props.name}</h1>
//   <ul>
//     <li>Instagram</li>
//     <li>WhatsApp</li>
//     <li>Oculus</li>
//   </ul>
// </div>;


// creaeElement 첫 argument는 태그 이름, 2번째는 태그 안의 속성 정의, 세 번째 argument 이후는 태그 사이의 내용. 함수도 중간에 사용 가능.

React.createElement("div", {
  className: "shopping-list"
}, React.createElement("h1", null, "Shopping List for ", props.name),
    React.createElement("ul", null,
        React.createElement("li", null, "Instagram"),
        React.createElement("li", null, "WhatsApp"),
        React.createElement("li", null, "Oculus")
    )
);

// 이 element는 변수 저장으로 이곳 저곳 사용도 가능하다.
// 캡슐화되어서 독립적인 동작도 가능.
