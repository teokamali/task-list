import React from 'react';

export interface IAuthenticationToken {
  access_token: string;
  refresh_token: string;
}
export interface ITokenData {
  expires: string;
  token: string;
}
export interface IPageProps<T = {}> extends React.FC<T> {
  needAuth: boolean;
}
