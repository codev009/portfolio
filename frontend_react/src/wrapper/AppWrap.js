import React from 'react';
import { NavigationDots, SocialMedia } from '../constants'

const AppWrap = (Component, idName, className) => function HOC() {
    return (
        <div id={idName} className={`app__container ${className}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <component />

                <div className="copyright">
                    <p className="p-text">@2022 Lipin</p>
                    <p className="p-text">ALl rights reserved</p>
                </div>
            </div>
            <NavigationDots active={ idName } />
        </div>
    )
}

export default AppWrap;