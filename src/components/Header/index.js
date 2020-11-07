import React from 'react';

import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.LogoIcon/>
        </S.LogoContainer>
        <S.OptionsContainer>
          <S.Icon></S.Icon>
          <S.Avatar></S.Avatar>
        </S.OptionsContainer>
      </S.Content>
    </S.Container>
  );
}

export default Header;