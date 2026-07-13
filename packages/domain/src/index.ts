export interface Todo {
  readonly id: string
  readonly title: string
  readonly completed: boolean
}

export class InvalidTodoTitle extends Error {
  readonly _tag = 'InvalidTodoTitle'

  constructor() {
    super('Todo title must not be empty')
  }
}

export function makeTodo(id: string, title: string): Todo {
  const normalized = title.trim()

  if (!normalized)
    throw new InvalidTodoTitle()

  return {
    id,
    title: normalized,
    completed: false,
  }
}
