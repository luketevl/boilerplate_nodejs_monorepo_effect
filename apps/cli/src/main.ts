import process from 'node:process'
import { InMemoryTodoRepositoryLive } from '@auto-freela/adapters'
import { createTodo, listTodos } from '@auto-freela/application'
import { cancel, intro, isCancel, outro, text } from '@clack/prompts'
import { Effect } from 'effect'

intro('Auto Freela CLI')

const title = await text({
  message: 'Todo title?',
  placeholder: 'Build something useful',
})

if (isCancel(title)) {
  cancel('Cancelled')
  process.exit(0)
}

const program = Effect.gen(function* () {
  yield* createTodo(String(title))
  return yield* listTodos
})

const todos = await Effect.runPromise(Effect.provide(program, InMemoryTodoRepositoryLive))

outro(`Created. Total todos in this run: ${todos.length}`)
