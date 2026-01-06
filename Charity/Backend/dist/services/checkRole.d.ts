import { Response, NextFunction } from "express";
import { RequestWithUser } from "./authentication";
export declare function checkAdmin(req: RequestWithUser, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function checkNGO(req: RequestWithUser, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function checkDonor(req: RequestWithUser, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=checkRole.d.ts.map