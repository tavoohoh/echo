import type { Platform } from './definitions';
import { GsCapacitorKustomer } from './web';

/**
 * Private methods
 */
const initWebSdk = (apiKey: string, brandId: string) => {
  window.addEventListener('kustomerLoaded', () => {
    window.Kustomer.start({
      brandId: brandId,
    }, () => {
      window.Kustomer.addListener('onOpen', () => {
        handleChatOpen()
      })

      window.Kustomer.addListener('onClose', () => {
        handleChatClose()
      })

      handleChatClose()
    })
  })

  const script = document.createElement('script')
  script.src = 'https://cdn.kustomerapp.com/chat-web/widget.js'
  script.setAttribute('data-kustomer-api-key', apiKey)
  window.document.body.appendChild(script)
}

const handleChatOpen = () => {
  const frame = document.getElementById('kustomer-ui-sdk-iframe')

  if (!frame) {
    return
  }

  frame.style.cssText += `
      transform: scale(1)!important;
      padding-top:calc(58px + env(safe-area-inset-top))!important;
      padding-bottom:env(safe-area-inset-bottom)!important;
    `
  document.getElementsByTagName('body')[0].style.cssText += 'position:relative!important;'
}

const handleChatClose = () => {
  const frame = document.getElementById('kustomer-ui-sdk-iframe')

  if (!frame) {
    return
  }

  frame.style.cssText += `
      transform: scale(0)!important;
    `

  setTimeout(() => {
    document.getElementsByTagName('body')[0].style.cssText += 'position:relative!important;'
  }, 50)
}

/**
 * Public methods
 */
const init = (apiKey: string, brandId: string, platform: Platform): void => {
  switch (platform) {
    case 'web':
      initWebSdk(apiKey, brandId)
      break
    case 'ios':
      break
    case 'android':
      break
  }
}

const openChat = async (platform: Platform): Promise<void> => {
  switch (platform) {
    case 'web':
      if (!window.Kustomer) {
        return
      }

      window.Kustomer.open()
      break

    case 'ios':
      await GsCapacitorKustomer.echo({
        value: JSON.stringify({
          event: 'kustomerOpenChat'
        })
      })
      break

    case 'android':
      await GsCapacitorKustomer.echo({
        value: JSON.stringify({
          event: 'kustomerOpenChat'
        })
      })
      break
  }
}

const signIn = async (platform: Platform, jwtToken: string): Promise<void> => {
  try {
    switch (platform) {
      case 'web':
        if (window.Kustomer) {
          window.Kustomer.login({
            jwtToken
          }, () => null)
        }
        break

      case 'ios':
        await GsCapacitorKustomer.echo({
          value: JSON.stringify({ event: 'kustomerSignIn', jwtToken })
        })
        break

      case 'android':
        await GsCapacitorKustomer.echo({
          value: JSON.stringify({ event: 'kustomerSignIn', jwtToken })
        })
        break
    }
  } catch (e) {
    return
  }
}

const signOut = async (platform: Platform): Promise<void> => {
  switch (platform) {
    case 'web':
      if (!window.Kustomer) {
        return
      }

      window.Kustomer.logout((_callbackResponse: any, error: any) => {
        if (error) {
          console.error(error);
        }
      });
      break
    case 'ios':
      await GsCapacitorKustomer.echo({
        value: JSON.stringify({ event: 'kustomerSignOut' }
        )})
      break
    case 'android':
      await GsCapacitorKustomer.echo({
        value: JSON.stringify({ event: 'kustomerSignOut' })
      })
      break
  }
}

export const Kustomer = {
  init,
  openChat,
  signOut,
  signIn
}
