import type { Todo } from '@auto-freela/domain'
import { TodoRepository } from '@auto-freela/ports'
import { Effect, Layer } from 'effect'

export const InMemoryTodoRepositoryLive = Layer.sync(TodoRepository, () => {
  const todos: Todo[] = []

  return {
    save: todo => Effect.sync(() => {
      todos.push(todo)
    }),
    list: () => Effect.sync(() => [...todos]),
  }
})
