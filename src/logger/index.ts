import root from 'app-root-path';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { format } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

const levels = {
  levels: {
    ERROR: 0,
    INFO: 1,
    Game: 2,
  },
  color: {
    ERROR: 'bold red',
    INFO: 'gray',
    Game: 'green',
  },
};

interface CustomLevels extends winston.Logger {
  ERROR: winston.LeveledLogMethod;
  INFO: winston.LeveledLogMethod;
  Game: winston.LeveledLogMethod;
}

export const logger: CustomLevels = <CustomLevels>winston.createLogger({
  levels: levels.levels,
  transports: [
    new winston.transports.DailyRotateFile({
      filename: 'bot-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      dirname: `${root}/logs`,
      format: winston.format.combine(
        winston.format.timestamp({
          format: zonedTimeToUtc(new Date(), 'Asia/Tokyo').toString(),
        }),
        winston.format.simple(),
        winston.format.printf(
          (info) =>
            `[${format(utcToZonedTime(new Date(), 'Asia/Tokyo'), 'yyyy-MM-dd HH:mm:ss')}] [${info.level}] ${
              info.message
            }`
        )
      ),
      level: 'Game',
    }),
  ],
});
