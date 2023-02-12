import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './slice/todoSlice'

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(fetchTodos());
  }
  if (state.todo.isLoading) return "Loading..."
  return (
    <>
      <button onClick={(e) => dispatch(fetchData)}>Fetch data</button>
      {
        state.todo.data && state.todo.data.map(({ title, id }, index) =>
          <p key={index}>{title}</p>
        )
      }
    </>
  )
}

export default App