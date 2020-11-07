import React from 'react';

import SideBar from '../Sidebar';
import Header from '../Header';

import * as S from './styles';


function Layout({children}) {
  return (
    <>
    <Header></Header>
    <S.Container>
      <S.SidebarContainer>
        <SideBar></SideBar>
      </S.SidebarContainer>
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
    </S.Container>
    </>
  );
}

export default Layout;