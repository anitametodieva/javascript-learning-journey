enum LoggingLevel {
Info = "Info",
Error = "Error",
Warning = "Warning",
Debug = "Debug",
}

enum LoggingFormat {
Standard = "[%level][%date] %text",
Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
cachedLogs: Map<T, string[]>
log(logLevel: T, message: string): void;
getFormat(): V
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    cachedLogs: Map<T, string[]> = new Map();

    constructor(public loggingFormat: V) {}

    getFormat(): V {
        return this.loggingFormat;
    }

    log(logLevel: T, message: string): void {
        const date = new Date().toISOString();
        const logMessage = this.loggingFormat
        .replace("%level", logLevel)
        .replace("%date", date)
        .replace("%text", message);

        if (!this.cachedLogs.has(logLevel)) {
            this.cachedLogs.set(logLevel, []);
        }

        let cacheLevelLogs = this.cachedLogs.get(logLevel);
        cacheLevelLogs?.push(logMessage);

        console.log(logMessage);
        
    }
}

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");
console.log('-----------')
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))