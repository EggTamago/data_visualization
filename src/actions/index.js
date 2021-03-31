
// actionはjavascriptのオブジェクト
// objectの内部でtypeとtypeに対応する値を持ち、
// typeに対応する値はユニークでなければならない
// actionを定義してactionをリターンする関数(action creater)をexport
// 後々viewを担当するほうがこのプログラムをインポートして利用する

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 外部で使う関数やからexportしてあげる
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}