import { combineReducers } from 'redux'
import { reducer as themeReducer } from './theme'
import { reducer as userReducer } from './user'
import { reducer as connectorReducer } from './connector'
import { reducer as walletReducer } from './wallet'
import { reducer as infoReducer } from './info'

/**
 * theme: theme styled-components
 * userInfo: Login user information and user address
 * connector: Link metamask synchronization information function
 * wallet: The currently selected network, wallet and whether to link (mainly for metamask, making users feel like quitting)
 * infoInfo: Dynamic configuration information
 */

const reducer = combineReducers({
  themeInfo: themeReducer,
  userInfo: userReducer,
  connectorInfo: connectorReducer,
  walletInfo: walletReducer,
  infoInfo: infoReducer,
})

export default reducer
