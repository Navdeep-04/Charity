import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface AuthUser extends JwtPayload {
    id: number;
    email: string;
    role: string;
}
export interface RequestWithUser extends Request {
    user?: AuthUser;
}
export declare function authenticateToken(req: RequestWithUser, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authentication.d.ts.map