import { InMemoryTodoRepositoryLive } from '@auto-freela/adapters'
import { createTodo, listTodos } from '@auto-freela/application'
import { Effect } from 'effect'
import React from 'react'
import { createRoot } from 'react-dom/client'

export function App() {
  const [items, setItems] = React.useState<string[]>([])

  async function addTodo() {
    const program = Effect.provide(
      Effect.gen(function* () {
        yield* createTodo('Created from React + Vite')
        return yield* listTodos
      }),
      InMemoryTodoRepositoryLive,
    )

    const todos = await Effect.runPromise(program)
    setItems(todos.map(todo => todo.title))
  }

  return (
    <main>
      <h1>Auto Freela</h1>
      <p>React + Vite consuming the shared Effect use case.</p>
      <button type="button" onClick={addTodo}>Create todo</button>
      <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
