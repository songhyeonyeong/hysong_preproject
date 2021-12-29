
## 프로젝트 개요
```
react-typescript vite 로 구성된 FE 프로젝트
이전에 했던 프로젝트가 없어 전회사에서 했던 프로젝트 기억을 되살려  간단한 스켈레톤 소스를 구성해보았습니다. 
```
start
```
yarn start
```

## 프로젝트의 포인트
1. 폴더구조
```
├── src
│   ├── apis          // api 모듈화
│   ├── components    // 컴포넌트 구성
│   └── enums         // enums 정의
│   ├── layouts       // 시스템 레이아웃 구성
│   ├── models        // parmeter 등 model 구성
│   └── router        // router 라우팅 구성
│   └── utills        // 시스템 공통 utills
│   └── views         // 페이지
위와 같이 폴더 구조를 구성
```
2. vite 를 사용하여 번들링 구성
3. React-meterial-ui  ui 구성 후, 컴포넌트 구성 (vuetify 와 비슷)
4. React-router-config 로 기존 vue-router 처럼 라우팅을 나열 할 수 있도록 구성  ->  router/router.ts
5. 공통 layout 을 만들어, layout 안에서 view page 들이 라우팅 될 수 있게 구성    ->  App.tsx
6. 함수형 컴포넌트 사용하여 react-hook 활용 layout/DefaultLayout.tsx line 14
7. axios 캡슐화 하여, api 구성

