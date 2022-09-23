import { ArgumentsHost, ExceptionFilter, Logger } from '@nestjs/common';

export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    Logger.log(
      `exception caught in AllExceptionsFilter: ${exception} | stacktrace: ${exception.stack}`,
    );
  }
}
