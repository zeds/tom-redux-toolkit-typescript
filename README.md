# tom-redux-toolkit-typescript

Redux Toolkit Quick Start<br>
https://redux-toolkit.js.org/tutorials/quick-start<br>

<br>
1.npm i @reduxjs/toolkit, react-redux<br>
<br>
react-reduxも必要？<br>
<br>
2.src/app/stores.jsを作成<br>
<br>
3.ChromeにRedux DevTools extensionをインストール<br>
<br>
4.Provide the Redux Store to React<br>
　src/index.jsを作成<br>
　作成したstoreをProviderに指定して、ROOTで読み込む。<br>
　下層のコンポーネントにStoreが適用される<br>
<br>
5.Create a Redux State Slice<br>
  src/features/counter/counterSlice.js ← .tsに変更予定<br>
	CounterState 型を定義<br>
	initialState 値を設定<br>
	createSliceを呼び出し<br>
	reducer関数を作成（increment/decrement)<br>
	actionを外部から呼び出せるようになる<br>
6.Add Slice Reducers to the Store<br>
  app/stores.js<br>
	reducer関数をStoreに登録する。<br>
7.Use Redux State and Actions in React Components<br>
  React-Redux hooksを使う。←なんのこっちゃない、componentからstoreを使えるようにする意味。<br>
　componentではuserSelectorで値を読み込み、useDispatchで値を登録する。<br>
　src/features/counter/Counter.tsx<br>
<br>
index.htmlはsrc/index.tsxを呼び出す<br>
index.tsxは、App.tsxを呼び出す<br>
App.tsxは、<Counter />を描画する<br>





