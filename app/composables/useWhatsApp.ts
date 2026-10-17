import { WHATSAPP_PHONE } from '~/utils/constants'

export const useWhatsApp = () => {
  const buildLink = (message: string): string =>
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`

  const defaultLink = buildLink(
    'Olá, vim pelo site da Infinity Car Studio e gostaria de consultar um horário.',
  )

  return { buildLink, defaultLink }
}
