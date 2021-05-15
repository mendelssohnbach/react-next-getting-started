import React from 'react';
import './App.css';

class App extends React.Component {
  input = '';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Message title="Children!">
            これはコンポーネント内のコンテンツです。
            マルでテキストを分割し、リストにして表示します。 改行は必要ありません。
          </Message>
        </div>
      </div>
    );
  }
}

class Message extends React.Component {
  li = {
    fontSize: '14pt',
    fontWeight: 'bold',
    color: '#090',
  };

  render() {
    const content = this.props.children;
    const arr = content.split('。');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() !== '') {
        arr2.push(arr[i]);
      }
    }
    const list = arr2.map((value, key) => (
      <li className="list-group-item" style={this.li} key={key}>
        {key + 1}. {value} .
      </li>
    ));

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol className="list-group">{list}</ol>
      </div>
    );
  }
}

export default App;
