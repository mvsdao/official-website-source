const initState = {
  shopBlindBoxRule: [],
  NFTAndTradeRule: [],
  cardNftList: [],
}

function reducer(state = initState, action: any) {
  const { type } = action

  switch (type) {
    case 'setInfo':
      return {
        ...state,
        shopBlindBoxRule: action.res.shopBlindBoxRule,
        NFTAndTradeRule: action.res.NFTAndTradeRule,
        cardNftList: action.res.cardNftList,
      }
    default:
      return state
  }
}
export default reducer
