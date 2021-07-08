import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  // verificar se o usuário possui permissões de administrador

  const admin = true;

  if (admin) return next();

  return response.status(401).json({
    error: 'User unauthorized'
  });
}
