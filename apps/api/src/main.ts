import { InMemoryTodoRepositoryLive } from '@auto-freela/adapters'
import { createTodo, listTodos } from '@auto-freela/application'
import { defaultConfig } from '@auto-freela/config'
import { Effect } from 'effect'

const program = Effect.gen(function* () {
  yield* createTodo('Created from API bootstrap')
  const todos = yield* listTodos

  console.warn(`[api] ${defaultConfig.name} listening on :${defaultConfig.port}`)
  console.warn('[api] health: ok')
  console.warn('[api] todos:', todos)
})

function main() {
  void Effect.runPromise(Effect.provide(program, InMemoryTodoRepositoryLive))
}

main()
