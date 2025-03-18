import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid token');
    }

    const token = authHeader.split(' ')[1];

   
    if (token !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzNDU2Nzg5YmFsYSIsImlhdCI6MTczOTIwMDQ4MywiZXhwIjoxNzQxNzkyNDgzfQ.GqGkbKmWcCVgSlUR2JsaiiAV09V7S-JE86W_3s5gPmY') {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
