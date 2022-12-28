# tom-redux-toolkit-typescript

Redux Toolkit Quick Start<br>
https://redux-toolkit.js.org/tutorials/quick-start<br>

<br>
1.npm i @reduxjs/toolkit, react-redux<br>
<br>
react-reduxも必要？<br>
<br>
2.src/app/stores.tsを作成<br>
<br>
3.ChromeにRedux DevTools extensionをインストール<br>
<br>
4.Provide the Redux Store to React<br>
　src/index.tsxを作成<br>
　作成したstoreをProviderに指定して、element rootで読み込む。<br>
　これにより、下層のコンポーネントにStoreが適用される<br>
<br>
ReactDOM.render is no longer supported in React 18.
Use createRoot instead. Until you switch to the new API,
your app will behave as if it's running React 17.
Learn more:
https://reactjs.org/link/switch-to-createroot
<br>

<br>
5.Create a Redux State Slice<br>
　src/features/counter/counterSlice.ts<br>
　CounterState 型を定義<br>
　initialState 値を設定<br>
　counterSlice関数をcreateSliceで作成<br>
　counterSlice内にactionがある（ActionCreatorがなくなった）<br>
　reducer関数を作成（increment/decrement)<br>
　actionを外部から呼び出せるようになる<br>
<br>
6.Add Slice Reducers to the Store<br>
　app/stores.js<br>
　reducer関数をStoreに登録する。<br>
<br>
7.Use Redux State and Actions in React Components<br>
　React-Redux hooksを使う。←なんのこっちゃない、componentからstoreを使えるようにする意味。<br>
　componentではuserSelectorで値を読み込み、useDispatchで値を登録する。<br>
　src/features/counter/Counter.tsx<br>
<br>





