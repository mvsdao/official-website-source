import home from './en-us/home'
import nft from './en-us/nft'
import shop from './en-us/shop'
import trade from './en-us/trade'
import treasury from './en-us/treasury'
import governance from './en-us/governance'
import myhome from './en-us/myhome'
import mynft from './en-us/mynft'

const en = {
  'app.footer.copyright': 'MetaDAO The DAO of the open source technology community',
  'app.link.btn': 'Wallet Connect',
  'app.link.suceess': 'Login Success',
  'app.link.disconnect': 'Logout Success',
  'app.link.modal.title': 'Choose a connection method',
  'app.link.modal.ftitle1': 'Choose Network',
  'app.link.title': 'Wallet Connect',
  'app.link.modal.ftitle2': 'Choose Wallet',
  'app.link.test.tips':
    'If you switch the network to [Test], please manually switch to http://47.108.77.85:8545 in Metamask or Wallet APP, and click login to take effect',
  'app.my.title1': 'My Homepage',
  'app.my.title2': 'My NFT',
  'app.my.title3': 'Exit Link',
  'app.404.title': 'The requested URL was not found',
  'app.404.btn': 'Back to Homepage',
  'app.no.data.title': 'No related content is currently available,please stay tuned',
  'app.no.link.tips': 'Link broken or switch network to Ethereum',
  'app.no.chainid.tips': 'Please switch your network to Ethereum.',
  'app.no.chainid.btn': 'Change Network',
  'app.chainid.drawer.title': 'Select network',
  ...home,
  ...nft,
  ...shop,
  ...trade,
  ...treasury,
  ...governance,
  ...myhome,
  ...mynft,
}

export default en
