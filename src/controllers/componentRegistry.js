import {lazy} from 'react'
const ButtonClick = lazy(() => import('../components/button-click'));
const HelloWorld = lazy(() => import('../components/hello-world'));
const JustGreen = lazy(() => import('../components/justgreen'));
const JustBlue = lazy(() => import('../components/justblue'));
const  ComponentRegistry = {
    ButtonClick,
    HelloWorld,
    JustGreen,
    JustBlue
}

export default ComponentRegistry;
