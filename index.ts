import pino from 'pino';

console.log('Hello via Bun!');

const prettyLogging = process.env.PRETTY_LOGGING === 'true';

const logger = pino({
  transport: prettyLogging
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      }
    : undefined
});

logger.info('Hello via Pino!');
