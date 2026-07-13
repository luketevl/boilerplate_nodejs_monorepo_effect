import type { Todo } from '@auto-freela/domain'
import type { Effect } from 'effect'
import { Context } from 'effect'

export interface TodoRepositoryShape {
  readonly save: (todo: Todo) => Effect.Effect<void>
  readonly list: () => Effect.Effect<readonly Todo[]>
}

export const TodoRepository = Context.Service<TodoRepositoryShape>('@auto-freela/ports/TodoRepository')
