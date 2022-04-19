import styled from 'styled-components'

export const WaterRippleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  z-index: 2;
  .info1 {
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    top: 80%;
    border-radius: 55%;
    border: 0px solid red;
    left: 50%;
    transform: translate(-50%, 0);
    animation: anim_wave 16s linear infinite;
  }

  .info2 {
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    top: 80%;
    border-radius: 55%;
    border: 0px solid red;
    transform: translate(-50%, 0);
    left: 0;
    animation: anim_wave 17s linear infinite;
  }

  .info3 {
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    top: 80%;
    border-radius: 55%;
    border: 0px solid red;
    transform: translate(-50%, 0);
    left: 100%;
    animation: anim_wave 18s linear infinite;
  }
}

@keyframes anim_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`
