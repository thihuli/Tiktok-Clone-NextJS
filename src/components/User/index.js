import React from 'react';

import * as S from './styles';

function User({ user }) {
  return (
    <S.Container>
      <S.Avatar src={user.avatar} />
      <S.Info>
        <a>{user.name} </a>
        <span>{user.userName}</span>
      </S.Info>
    </S.Container>
  );
}

export default User;