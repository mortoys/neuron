import { app } from 'electron'

import AppController from 'controllers/app'
import { changeLanguage } from 'locales/i18n'

const appController = new AppController()

const singleInstanceLock = app.requestSingleInstanceLock()
if (singleInstanceLock) {
  app.on('ready', async () => {
    changeLanguage(app.getLocale())

    appController.start()
  })

  app.on('before-quit', async () => {
    appController.end()
  })

  app.on('activate', appController.openWindow)

  app.on('second-instance', () => {
    appController.restoreWindow()
  })
} else {
  app.quit()
}
