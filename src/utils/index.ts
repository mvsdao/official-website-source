import HEAD_ICON1 from '@/assets/head/icon1.png'
import HEAD_ICON2 from '@/assets/head/icon2.png'
import HEAD_ICON3 from '@/assets/head/icon3.png'
import HEAD_ICON4 from '@/assets/head/icon4.png'
import HEAD_ICON5 from '@/assets/head/icon5.png'
import HEAD_ICON6 from '@/assets/head/icon6.png'
import type { CardType } from '@/hooks/data.d'

/** address interception */
export const formatStrAddress = (a: number, b: number, str: string) => {
  return str.substring(0, a) + new Array(4).join('.') + str.substring(str.length - b, str.length)
}

/** scroll throttle */
export const throttle = (fn: Function, rateTime: number) => {
  let timer: any = null
  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, rateTime)
    }
  }
}

/** Anti-Shake Search */
export const debounced = (fn: any, debTime: number) => {
  let timer: any = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, debTime)
  }
}

/** Anchor */
export const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView()
    }
  }
}

export const Adapth5 = 768
export const AdaptFontSize = 1100

/** Default avatar */
export const headDeafaultImg = [HEAD_ICON1, HEAD_ICON2, HEAD_ICON3, HEAD_ICON4, HEAD_ICON5, HEAD_ICON6]

/** Validation retains 6 decimal places */
export const validateValue = (value: any) => {
  let rs = /^[0-9]+(\.[0-9]{1,6})?$/
  if (!rs.test(value)) return false
  else return true
}

/** The array of cartype objects has tokenid de duplication */
export const objArrayDuplicateRemoval = (oldArr: CardType[]) => {
  let obj: { [key: string]: boolean } = {}
  let arr_new: CardType[] = oldArr.reduce<CardType[]>((cur: any, next: any) => {
    if (!obj[next.tokenId]) {
      cur.push(next)
      obj[next.tokenId] = true
    }
    return cur
  }, [])

  return arr_new
}
