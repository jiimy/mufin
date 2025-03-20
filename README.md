## 코멘트
- /introduce 페이지 안에서만 사용되는 영역들이라면 <Tab>, <Tab.TabNav> 처럼 <Introduce.desc> 와 같이 사용하게 할 수 있습니다.

- tailwind, styled-component, scss module을 동시에 사용중인데, 기본으로 scss module을 사용하며, 필요에 따라 나머지 2개를 사용합니다. <br/>
(styled-component 는 타입을 지정하고 자동완성을 위해서, tailwind는 빠른 수정을 위해서)
(slide 커스텀을 위해서 Slider 컴포넌트만 예외로 module 이 아닌 기본 scss)

- tailwind.config.ts 에서 tailwind의 기본단위인 rem을 px화 하여 사용중입니다. (pt-[10px]이 아닌 pt-10 으로 사용가능합니다.)

- next.config.mjs에서 styles폴더 아래의 파일들을 참조 하고 있기 때문에 scss함수를 사용할때 import 를 하지 않아도 바로 적용이 가능합니다


## 시간이 오래 걸린 부분
- /introduce의 <Tab> 컴포넌트는 클릭 이벤트가 들어있기 때문에 context api 를 사용했는데, 이 context api 는 client 환경에서만 되기 때문에 <Tab>을 직접적으로 불러올때 불러오는 컴포넌트에서도 use client 를 해야했습니다. use client 를 없애기 위한 시도들이 있었습니다. 
(next가 아닌 react라면 신경쓰지 않아도 되는 문제이나 )

- 키 비쥬얼 슬라이더는 mask로 씌워서 하려고 했는데 dim 자체에 투명도가 있어서 mask로 해도 약간의 어색함이 있었고, 곡선이 있는 형태로의 통짜 이미를 사용했을때(현재)는 슬라이드 모션이 될때 버튼 영역이 

- app/introduce/page.module.scss 에는 :local 이라는 부분이 있는데 module 사용시에 지정한 dom의 하위 dom을 선택해주는 방식인데 오랜만에 쓰니 가물가물했습니다. 

