import { JsonWebKeySet } from 'jose';

export enum AuthMethod {
  Bearer = 'Bearer',
  Basic = 'Basic',
  Digest = 'Digest',
  OAuth = 'OAuth',
}

export enum AuthScheme {
  Bearer = 'Bearer',
  Basic = 'Basic',
  Digest = 'Digest',
  OAuth = 'OAuth',
}

export interface JWK {
  alg: string;
  e: string;
  kty: string;
  n: string;
  use: string;
  kid: string;
}

export interface JWKS {
  keys: JWK[];
}

export interface JWT {
  payload: any;
  header: any;
  signature: string;
}

export interface JWTPayload {
  [key: string]: any;
}

export interface JWTHdr {
  alg: string;
  typ: string;
  kid: string;
}

export interface JWTCreds {
  [key: string]: any;
}

export interface Client {
  client_id: string;
  client_secret: string;
  grant_type: string;
  refresh_token?: string;
  username?: string;
  password?: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
}

export interface JWTOptions {
  issuer?: string;
  audience?: string;
  subject?: string;
  expires?: Date;
  notBefore?: Date;
  jwtid?: string;
  header?: JWTHdr;
  payload?: JWTPayload;
}

export interface JWTPayloadOptional extends Omit<JWTPayload, 'iss' | 'aud' | 'sub'> {
  iss?: string;
  aud?: string;
  sub?: string;
}

export interface JWTCustomClaims {
  [key: string]: any;
}

export interface JWTClaims {
  iss: string;
  aud: string;
  sub: string;
  exp: number;
  nbf: number;
  iat: number;
  jti: string;
  customClaims?: JWTCustomClaims;
}

export interface JWTCustomClaimsOptional extends Omit<JWTCustomClaims, 'key' | 'value'> {
  key?: string;
  value?: any;
}

export interface JWTClaimsOptional extends Omit<JWTClaims, 'iss' | 'aud' | 'sub' | 'exp' | 'nbf' | 'iat' | 'jti'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

export interface JWTCustomClaimsOptionalArray extends Omit<JWTCustomClaimsOptional, 'value'> {
  key: string;
  value: any[];
}

export interface JWTClaimsOptionalArray extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArray[];
}

export interface JWTCustomClaimsOptionalObject extends Omit<JWTCustomClaimsOptional, 'value'> {
  key: string;
  value: { [key: string]: any };
}

export interface JWTClaimsOptionalObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObject;
}

export interface JWTCustomClaimsOptionalObjectArray extends Omit<JWTCustomClaimsOptionalObject, 'value'> {
  key: string;
  value: { [key: string]: any }[];
}

export interface JWTClaimsOptionalObjectArray extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArray;
}

export interface JWTCustomClaimsOptionalArrayObject extends Omit<JWTCustomClaimsOptionalArray, 'value'> {
  key: string;
  value: { [key: string]: any }[];
}

export interface JWTClaimsOptionalArrayObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObject extends Omit<JWTCustomClaimsOptionalObjectArray, 'value'> {
  key: string;
  value: { [key: string]: any }[];
}

export interface JWTClaimsOptionalObjectArrayObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArray extends Omit<JWTCustomClaimsOptionalArrayObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArray extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArray;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArray extends Omit<JWTCustomClaimsOptionalObjectArrayObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArray extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArray;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObject extends Omit<JWTCustomClaimsOptionalArrayObjectArray, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArray, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject, 'value'> {
  key: string;
  value: { [key: string]: any }[][];
}

export interface JWTClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject extends Omit<JWTClaimsOptional, 'customClaims'> {
  iss?: string;
  aud?: string;
  sub?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  customClaims?: JWTCustomClaimsOptionalObjectArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObjectObject;
}

export interface JWTCustomClaimsOptionalArrayObjectArrayObjectObjectObjectObjectObjectObjectObjectObjectObjectObject