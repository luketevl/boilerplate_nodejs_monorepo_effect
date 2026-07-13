import { makeTodo } from '@auto-freela/domain'
import { TodoRepository } from '@auto-freela/ports'
import { Effect } from 'effect'

export function createTodo(title: string) {
  return Effect.gen(function* () {
    const repository = yield* TodoRepository
    const todo = makeTodo(crypto.randomUUID(), title)

    yield* repository.save(todo)

    return todo
  })
}

export const listTodos = Effect.gen(function* () {
  const repository = yield* TodoRepository

  return yield* repository.list()
})
