import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FixedMenu, StartingMenu, MenuTitleStarting, MenuTitle, Small, Medium, Large } from "../styledComponents";
import SearchBox from "../components/SearchBox";

const StickyHeader = (props) => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    const createFixedMenu = () => {
        return (
            <FixedMenu data-testid="fixed-title">
                <MenuTitle>
                    <SearchBox header/>
                </MenuTitle>
            </FixedMenu>
        )
    }

    const startingMenu = () => {
        return (
            <StartingMenu>
                <MenuTitleStarting onClick={scrollToTop}>Things Nearby: Powered by Foursquare</MenuTitleStarting>
            </StartingMenu>
        )
    }

    return (
        <div ref={ref}>
            {props.isDefaultSticky || isSticky ? createFixedMenu() : startingMenu()}
        </div>
    )
};

export default StickyHeader;