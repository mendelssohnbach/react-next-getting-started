# 学習メモ

[React.js&Next.js超入門 第2版](https://www.shuwasystem.co.jp/book/9784798063980.html)

![](https://www.shuwasystem.co.jp//images/book/561628.jpg)

## 値の扱い

- プロパティ
-- クラスに値を保管するのに使う。

- props
-- コンポーネントの属性をまとめて保管するために使う。
-- read only

- ステート
-- コンポーネントの状態を表す値を保管するために使う。
-- ステートの値を変更すればコンポーネントの状態を操作できる。

## setState

値を追加するだけ。削除はされない。 `setState` 関数に変更したい値を代入する。

以下のコードにはバグがあります。

```javascript
const App = (props) => {
  const [count, setCount] = useState(0);

  const timer = setInterval(() => {
    // setCount(count + 1);
  }, 5000);
  ...
  return (
    ...
        <p className="alert alert-warning">
          {msg}: {timer}
        </p>
```

`timer` 関数内の指定秒数でレンダリングが発生。
`p` エレメントの表示でレンダリングが発生。
状態が変化するので再度、`state` がレンダリング発火。

## ステートで表示を切り替える

**P170**

`doAction()` メソッドの引数 `e` の目的が不明。下記のコードはどちらでも操作した。

```
  doAction(e) {
    // doAction() {
  ...
            <button onClick={this.doAction}>
```

関数コンポーネントでの実装は [ステートフックの利用法](https://ja.reactjs.org/docs/hooks-state.html) を参考にした。

```
const [counter, setCounter] = useState(0);
...
{counter % 2 === 0 ? (
  <div className="alert alert-primary text-left">
    <p className="h5">{counter}です。</p>
  </div>
) : (
  <div className="alert alert-primary text-right">
    <p className="h5">count: {counter}</p>
  </div>
)}
<button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
  Click
)}
```

## プロパティとステートの連携

- ステートの値は直接操作してはいけない
- ステートに配列やオブジェクトをpushしてはいけない
- 配列やオブジェクトを操作する場合、プロパティに値を保管する
-- 保管した値を操作後、 `setState` で操作後の値をステートに渡す

## hook: ステート

- 値をコンポーネント内で保持
-- コンポーネントとして保持したい値はステートで管理する
- その値を更新し表示も更新する
- `useState` 関数
- 変数の値は、関数コンポーネントでは保持されない
- 関数コンポーネントは一時記憶、メモリを保持しない

## ローカルストレージ

`window` オブジェクトは省略可能

- 指定のキーから値を取得: `変数 = window.localStorage.getItem(キー);
- 値を指定のキーで保管: `window.localStorage.setItem(キー, 値)`
