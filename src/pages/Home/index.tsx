import React, { memo, useEffect, useState } from 'react'
import { Button, Image, message, Row, Col } from 'antd'
import {
  HomeWrapper,
  IntroduceDiv,
  IntroduceTitle,
  Banner,
  IntroduceSpan,
  IntroduceSrc,
  IntroduceList,
  ListInfo,
  ListInfoNumber,
  ListInfoNumberTwo,
  AboutDiv,
  AboutDivContent,
  AboutTitle,
  BannerContent,
  IntroduceXt,
} from './styled'
import { Adapth5, scrollToAnchor } from '@/utils'
import TopBar from '@/components/TopBar'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { useTranslation } from 'react-i18next'
import { useHomeHooks } from '@/hooks/useHomeHooks'
import BANNER from '@/assets/banner.png'
import { Link } from 'react-router-dom'
import BANNER_XT1 from '@/assets/banner_xt1.png'
import BANNER_XT11 from '@/assets/banner_xt11.png'
import BANNER_XT2 from '@/assets/banner_xt2.png'
import BANNER_FIGURE from '@/assets/banner_figure.png'
import HOME_ABOUT_1 from '@/assets/home_about_1.png'
import { useWindowSizeHooks } from '@/hooks/useWindowSizeHooks'

export default memo(function HomePages(pages: any) {
  const [spend, setSpend] = useState<number>(0)
  const { t } = useTranslation()
  const { homeList } = useHomeHooks()
  const { windowSize } = useWindowSizeHooks()
  const { REACT_APP_ENV = 'prd' } = process.env

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let hash = pages.location.hash
    if (hash.length > 0) {
      let str = hash.substr(1)
      scrollToAnchor(str)
    } else {
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages])

  const handleScroll = (e: any) => {
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0)
    let transparency = scrollTop / 500 > 1 ? 1 : (scrollTop / 500).toFixed(2)
    setSpend(Number(transparency))
  }

  const scrollDownClick = () => {
    let top = document.getElementById('scrollIntroduce')?.offsetTop || 928
    window.scrollTo({
      top: top - 88.6,
      behavior: 'smooth',
    })
  }

  return (
    <HomeWrapper>
      <TopBar
        background={`rgba(255,255,255,${spend})`}
        boxShadow={`0rem 0.19rem 0.63rem 0rem rgba(49, 50, 69, ${Number((spend / 10).toFixed(2))})`}
        isHome={true}
      ></TopBar>
      {/* banner */}
      <Banner>
        <Image src={BANNER} width="100%" height="38.56rem" preview={false} />
        <BannerContent>
          <Button
            className="HomeBannerTitle"
            title={t('home.open.tips')}
            onClick={() => {
              message.info({
                content: t('home.open.tips'),
                className: 'message-global',
              })
            }}
          >
            {t('home.banner.tips')}
            {windowSize.innerWidth > Adapth5 && <img src={BANNER_XT1} className="xt1" alt="" />}
            {windowSize.innerWidth <= Adapth5 && <img src={BANNER_XT11} className="xt1" alt="" />}
          </Button>
          <img src={BANNER_FIGURE} className="figure" alt="" />
          <img src={BANNER_XT2} className="xt2" alt="" />
        </BannerContent>
      </Banner>
      {/* introduce */}
      <OverPack playScale={[0.3, 0.7]}>
        <IntroduceDiv id="scrollIntroduce">
          {windowSize.innerWidth > Adapth5 && <IntroduceXt />}
          <QueueAnim leaveReverse delay={[0, 100]}>
            <IntroduceTitle key="nft">
              {t('home.nft.title1')}
              <span>&nbsp;NFT&nbsp;</span>
              {t('home.nft.title2')}
            </IntroduceTitle>
          </QueueAnim>
          <QueueAnim
            delay={100}
            type="bottom"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
          >
            <IntroduceSpan key="span">{t('home.nft.vice.title')}</IntroduceSpan>
            <Link to="/ballnft">
              <Button className="IntroduceA" key="a">
                {t('home.nft.check')}
              </Button>
            </Link>
          </QueueAnim>
          <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }} style={{ bottom: 30 }} key="icon">
            <IntroduceSrc onClick={scrollDownClick}></IntroduceSrc>
          </TweenOne>
          <QueueAnim type="left" key="img" delay={200} className="h5-anim">
            <IntroduceList>
              {homeList.map((item, i) => (
                <TweenOne key={i.toString()} animation={{ y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad', delay: i * 100 + 400 }}>
                  <ListInfo>
                    <img src={item.image} alt={item.name} />
                    {i === 0 && <ListInfoNumber />}
                    {i === 1 && <ListInfoNumberTwo />}
                    <span>{item.name}</span>
                  </ListInfo>
                </TweenOne>
              ))}
            </IntroduceList>
          </QueueAnim>
        </IntroduceDiv>
      </OverPack>
      {/* about */}
      <AboutDiv id="about" active={REACT_APP_ENV !== 'prd'}>
        <AboutDivContent>
          <Row>
            <Col span={24} md={{ span: 9 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AboutTitle>{t('home.about.title')}</AboutTitle>
              <Image src={HOME_ABOUT_1} width="21rem" height="auto" preview={false}></Image>
            </Col>
            <Col span={24} md={{ span: 15 }}>
              <OverPack playScale={[0.01, 0.99]}>
                <QueueAnim type="left" key="ul">
                  <ul>
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad', delay: 100 }}>
                      <li>{t('home.about.list.1')}</li>
                    </TweenOne>
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad', delay: 150 }}>
                      <li>{t('home.about.list.2')}</li>
                    </TweenOne>
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from', ease: 'easeOutQuad', delay: 200 }}>
                      <li>{t('home.about.list.3')}</li>
                    </TweenOne>
                  </ul>
                </QueueAnim>
              </OverPack>
            </Col>
          </Row>
        </AboutDivContent>
      </AboutDiv>
    </HomeWrapper>
  )
})
