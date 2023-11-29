import React, { useState } from "react";


//import { useStoreContext } from "../../utils/store-context";
import Auth from "../../utils/auth";
import {
  StyledNav,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended
} from "./nav.style";

export default function Nav() {
  const [extendNavbar, setExtendedNavbar] = useState(false);


  return (
    <StyledNav extendNavbar={extendNavbar}>

      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {Auth.loggedIn() && (
              <>
                <NavbarLink key={1} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavbarLink>
                <NavbarLink key={2} to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</NavbarLink>
                <div className="logout-link" onClick={() => Auth.logout()}>Logout</div>
              </>
            )}
            {
              !Auth.loggedIn() && (
                <>
                  <NavbarLink to="/">Home</NavbarLink>
                  <NavbarLink to="/login">Login</NavbarLink>
                  <NavbarLink to="/signup">Sign Up</NavbarLink>
                </>
              )
            }
            <OpenLinksButton
              onClick={() => {
                setExtendedNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}

            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <div>
            <p className="title">DevGallery</p>
          </div>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {Auth.loggedIn() && (
            <>
              <NavbarLinkExtended to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</NavbarLinkExtended>
              <NavbarLinkExtended to="/login" className="logout-link" onClick={() => Auth.logout()}>Logout</NavbarLinkExtended>
            </>
          )}
          {
            !Auth.loggedIn() && (
              <>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/login">Login</NavbarLinkExtended>
                <NavbarLinkExtended to="/signup">Sign Up</NavbarLinkExtended>
              </>
            )
          }
        </NavbarExtendedContainer>
      )}
    </StyledNav>
  );
}