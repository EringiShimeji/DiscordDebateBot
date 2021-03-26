import * as winston from 'winston';
import 'winston-daily-rotate-file';
interface CustomLevels extends winston.Logger {
    ERROR: winston.LeveledLogMethod;
    INFO: winston.LeveledLogMethod;
    Game: winston.LeveledLogMethod;
}
export declare const logger: CustomLevels;
export {};
//# sourceMappingURL=index.d.ts.map