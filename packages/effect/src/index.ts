import { Effect } from 'effect'

export const runMain = <A, E>(effect: Effect.Effect<A, E>) => Effect.runPromise(effect)
