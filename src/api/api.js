import { nanoid } from 'nanoid'

export default class AviasalesAPI {
  static transformTicket = (tickets) => tickets.map((ticket) => ({ ...ticket, id: nanoid(5) }))

  apiBase = 'https://aviasales-test-api.kata.academy'

  searchId = null

  async getResource(resource, params = '') {
    const url = `${this.apiBase}/${resource}${params}`
    const res = await fetch(url)

    if (res.status === 500) {
      return null
    }

    if (res.status !== 200) {
      throw new Error(`Произошла ошибка запроса. Код ошибки: ${res.status}`)
    }

    return res.json()
  }

  async getSearchId() {
    const { searchId } = await this.getResource('search')
    this.searchId = searchId
  }

  async getTicketList() {
    if (!this.searchId) {
      await this.getSearchId()
    }

    const resource = 'tickets'
    const params = `?searchId=${this.searchId}`
    const res = await this.getResource(resource, params)

    if (res) {
      return {
        ...res,
        tickets: AviasalesAPI.transformTicket(res.tickets),
      }
    }

    return res
  }
}
