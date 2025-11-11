import jwt from 'jsonwebtoken';
import { serialize, parse } from 'cookie';

export function createAccessToken(payload, secret, expiresIn = '15m') {
  return jwt.sign(payload, secret, { expiresIn });
}

export function createRefreshToken(payload, secret, expiresIn = '7d') {
  return jwt.sign(payload, secret, { expiresIn });
}

export function setAuthCookies(res, accessToken, refreshToken, isProd = false) {
  const accessCookie = serialize('access_token', accessToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 15 * 60 // 15 minutes
  });

  const refreshCookie = serialize('refresh_token', refreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 // 7 days
  });

  res.setHeader('Set-Cookie', [accessCookie, refreshCookie]);
}

export function clearAuthCookies(res, isProd = false) {
  const accessCookie = serialize('access_token', '', {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
  const refreshCookie = serialize('refresh_token', '', {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
  res.setHeader('Set-Cookie', [accessCookie, refreshCookie]);
}

export function parseCookies(req) {
  const header = req.headers?.cookie;
  if (!header) return {};
  return parse(header);
}
