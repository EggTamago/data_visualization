// App内に存在するreducerを全部記載する

import { combineReducers } from 'redux';
import count from './count'

export default combineReducers({ count })

// 複数ある場合
// export default combineReducers({ foo, bar, hoge })