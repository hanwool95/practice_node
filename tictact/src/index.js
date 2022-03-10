// reference: https://ko.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 버튼을 처리하는 부분.
// class Square extends React.Component {
//     // 생성자 부분. state(값)을 관리해준다.
//     // constructor(props) {
//     //     // js에서 하위 클래스 생성자 만들 때는 super를 호출해야하므로 react 컴포넌트 클래스에 생성자 만들 때는 항상 super(props)로 시작해야 함.
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }
//
//     render() {
//         return (
//             // onclick의 prop으로 함수 전달하는 코드. 함수 형태로 묶어주어야 함. setState 함수 정의
//             <button className="square"
//                     // 버튼 클릭시 Board에서 prop으로 정의한 onClick 함수 호
//                     onClick= {() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// render 함수만 있는 경우, props를 받는 것으로 클래스 정의 대신 함수만으로 간단하게 정의 가능.
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// 사각형 9개, 게임 아웃라인 처리하는 부분.
class Board extends React.Component {
    constructor(props) {
        super(props);
        // custructor 실행되면서 초기 state 값을 부모 단위로 저장. state 안에는 squares. this.state.squares로 접근 가능.
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        // squares 불러와서 사본으로 만들어 놓고 나중에 사본으로 교체함. -> 불변성으로 코딩해야 '되돌리기 기능', '변화 감지' 등 가능.
        const squares = this.state.squares.slice();

        // 현재 squares 상황을 확인하여 만약 계산결과 승자가 있거나, 혹은 이미 값이 존재한 경우 실행 되지 않고 return.
        if (calculateWinner(squares) || squares[i]){
            return;
        }

        // 해당 부분 채워 넣음
        // if 문 ?로 축약. boolean 통해서 true면 left, 아니면 right.
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // set으로 사본 저장.
        this.setState({
            squares: squares,
            // !로 반대 boolean 전환.
            xIsNext: !this.state.xIsNext,
        });
    }


    // Square로 prop를 전달하는 함수를 생성.
  renderSquare(i) {
    return <Square
        // Square에 value와 onclick이라는 'prop'을 보낸 것. square 안에서 square.props로 접근 가능.
        value={this.state.squares[i]}
        // Square 안쪽에서 onClick 호출될 때 handleclick를 불러옴.
        onClick={() => this.handleClick(i)}
    />;
  }

  render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            // 괄호로 묶어서 string 반환하는 if 문 축약. boolean으로 true면 좌측 반환.
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

    return (
        // 각 row 마다 사각형을 renderSquare를 이용해서 선언하고, i 값으로 고유의 사각형 번호를 지정함.
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Board를 가져다가 표시자를 수정하는 부분.
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


// 승자 계산해주는 함수.
// 승리 배열에 같은 문자가 있을 경우 그 배열에 입력된 문자가 return. 아니면 null return.
function calculateWinner(squares) {
    // 승리의 경우 저장 배열.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}