import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div  className={styles.containerIn}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className={styles.button}
        >
          Increase
        </button>
        <span  className={styles.span}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className={styles.button}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}