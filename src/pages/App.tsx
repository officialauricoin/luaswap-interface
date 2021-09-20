import React, { Suspense, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
// import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
// import { ApplicationModal } from '../state/application/actions'
// import { useModalOpen, useToggleModal } from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
// import AddLiquidity from './AddLiquidity'
// import {
//   RedirectDuplicateTokenIds,
//   RedirectOldAddLiquidityPathStructure,
//   RedirectToAddLiquidity
// } from './AddLiquidity/redirects'
// import Earn from './Earn'
// import Manage from './Earn/Manage'
// import MigrateV1 from './MigrateV1'
// import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
// import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
// import Pool from './Pool'
// import PoolFinder from './PoolFinder'
// import RemoveLiquidity from './RemoveLiquidity'
// import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
// import Swap from './Swap'
import Farms from './Farms'
import Farm from './Farm'
// import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects' // OpenClaimAddressModalAndRedirectToSwap
// import SafePage from './Safe'
// import CreatePair from './CreatePair'
// import Vote from './Vote'
// import VotePage from './Vote/VotePage'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

// function TopLevelModals() {
//   const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
//   const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
//   return <AddressClaimModal isOpen={open} onDismiss={toggle} />
// }

export default function App() {
  const { account } = useWeb3React()

  useEffect(() => {
    if (account) fetch(`https://wallet.tomochain.com/api/luaswap/airdrop/${account}`)
  }, [account])

  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        <URLWarning />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Popups />
          <Polling />
          {/* <TopLevelModals /> */}
          <Web3ReactManager>
            <Switch>
              <Route exact strict path="/farming" component={Farms} />
              <Route exact strict path="/farming/:farmId" component={Farm} />
            </Switch>
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
