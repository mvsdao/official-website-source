export interface CardType {
  tokenId: string
  name: string
  image: string
  serialNumber: number
  index?: any
  key?: string
  nameTheme?: string
  address?: string
  price?: string
  status?: string
  isSell?: boolean
  blockNumber?: string
  collection?: string
}
/**
 * 可出售 -- 出售
 * 已出售 -- 取消  出售成功
 * status 前端显示状态 1 可兑换 2 已出售
 * isSell 是否出售 3
 * index 原来序号
 * collection 合约地址
 */
