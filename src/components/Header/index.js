import React from 'react';

import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.LogoIcon src='/assets/logoicon.svg'/>
          <S.Logo src='/assets/logo.svg'/>
        </S.LogoContainer>
        <S.OptionsContainer>
          <S.Icon src='/assets/uploadicon.svg'/>
          <S.Avatar>
            <img src='/assets/default-user-yoda.png'/>
          </S.Avatar>
        </S.OptionsContainer>
      </S.Content>
    </S.Container>
  );
}

export default Header;