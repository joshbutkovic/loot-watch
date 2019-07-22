import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        Logger.log(`${req.method}: ${req.url}`);
        if (Object.entries(req.body).length > 0) {
            Logger.log(`BODY: ${JSON.stringify(req.body)}`);
        }
        next();
    }
}
