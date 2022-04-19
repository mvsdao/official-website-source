import type { ArrRequestType } from '@/common/data.d'
import request from '@/utils/request'

/** read historical events  */
export const readGetPastEvents = (contract: any, events: string, filter?: object) => {
  return new Promise((reslove, reject) => {
    contract.getPastEvents(events, { fromBlock: 0, toBlock: 'latest', filter: { ...filter } }, function (error: any, event: any) {
      reslove(event)
      reject(error)
    })
  })
}

export const readGetApiEvents = (obj: ArrRequestType) =>
  request(`${obj.apiUrl}?module=logs&action=getLogs&fromBlock=0&address=${obj.address}&topic0=${obj.topic0}&apikey=${obj.apiKey}`)
