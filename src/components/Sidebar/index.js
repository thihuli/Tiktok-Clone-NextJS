import React from 'react';

import User from '../User'

import * as S from './styles';

function Sidebar() {
  return (
    <S.Container>
      <S.MenuItem active>
        <img src='/assets/homeIcon.svg'></img>
        <span>Para você</span>
      </S.MenuItem>
      <S.MenuItem>
        <img src='/assets/peopleIcon.svg'></img>
        <span>Seguindo</span>
      </S.MenuItem>
      <S.Following>
        <S.FollowingHeader>Suas principais contas</S.FollowingHeader>
        <User
          user={{
            name: 'anitta',
            userName: 'Anitta',
            avatar: 'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dc0d8b023984267c2306453b4e060d9c.jpeg?x-expires=1604869200&x-signature=L%2FfN9tL6M70dxcTyKAZtsrA1QhI%3D'
          }}/>
      </S.Following>
      <S.InfoContainer>
        <S.Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </S.Links>
        <S.Links margin>
          <a>Ajuda</a>
          <a>Segurança</a>
        </S.Links>
        <S.Links margin>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </S.Links>
        <S.Links>
          <a>Privacidade</a>
        </S.Links>
        <S.Links margin>
          <a>	© 2020 TikTok</a>
        </S.Links>
      </S.InfoContainer>
    </S.Container >
  );
}

export default Sidebar;