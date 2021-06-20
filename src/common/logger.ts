import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'silly',
  transports: [
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: format.combine(format.uncolorize(), format.json()),
    }),
    new transports.File({
      filename: './logs/info.log',
      level: 'info',
      format: format.combine(format.uncolorize(), format.json()),
    }),
  ],
});

export { logger };
