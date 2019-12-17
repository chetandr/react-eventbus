import React, { lazy, Suspense } from 'react';
const ButtonClick = lazy(() => import('../components/button-click'));
const HelloWorld = lazy(() => import('../components/hello-world'));
const JustGreen = lazy(() => import('../components/justgreen'));
const JustBlue = lazy(() => import('../components/justblue'));

export function getComponent(componentType, props, display = true) {

    if (!display) return undefined;
    switch (componentType) {
        case "ButtonClick":
            return (<Suspense fallback={<div>Loading...</div>}>
                <ButtonClick {...props}></ButtonClick>
            </Suspense>)
        case "HelloWorld":
            return (<Suspense fallback={<div>Loading...</div>}>
                <HelloWorld {...props}></HelloWorld>
            </Suspense>)
        case "JustBlue":
            return (<Suspense fallback={<div>Loading...</div>}>
                <JustBlue {...props}/>
            </Suspense>)
        case "JustGreen":
            return (<Suspense fallback={<div>Loading...</div>}>
                <JustGreen {...props}/>
            </Suspense>)
        default:
            return (<div>Define the correct component type</div>)

    }
}