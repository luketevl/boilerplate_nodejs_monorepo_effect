import process from 'node:process'

export interface AppConfig {
  readonly name: string
  readonly port: number
}

export const defaultConfig: AppConfig = {
  name: 'auto-freela',
  port: Number(process.env.PORT ?? 3333),
}
