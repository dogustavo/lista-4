import { app as server } from './app'
import { migrate } from './config/migration'
;(async () => {
  migrate()
  server.listen(4000, () =>
    console.log('🚀 Server is run on port 4000!')
  )
})()
