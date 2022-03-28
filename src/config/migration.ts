import { openDb } from './connection'

export const migrate = async () => {
  try {
    const db = await openDb

    await db.migrate({ migrationsPath: 'src/sqlite/migrations' })
  } catch (error) {
    console.log('🔧 Algo deu errado')
  }
}
