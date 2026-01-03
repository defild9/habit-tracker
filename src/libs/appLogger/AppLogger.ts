type LogType = "LOG" | "DEBUG" | "ERROR";

export class AppLogger {
  private serviceName: string;
  private static currentScreen: string | null = null;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  private getFormatMessage(text: string) {
    return `[${text}]`;
  }

  private getTimestamp() {
    const date = new Date().toISOString().replace(/\..+/, "");
    return this.getFormatMessage(date);
  }

  private getServiceName() {
    return this.getFormatMessage(this.serviceName);
  }

  private getCurrentScreen() {
    return AppLogger.currentScreen
      ? this.getFormatMessage(AppLogger.currentScreen)
      : null;
  }

  // Log message to console such as [date] [serviceName] [screen] [topic] [level] message
  private normolizeMessage(topic: string, log: LogType, message: string) {
    return [
      this.getTimestamp(),
      this.getServiceName(),
      this.getCurrentScreen(),
      this.getFormatMessage(topic),
      this.getFormatMessage(log),
      message,
    ].filter((z) => !!z);
  }

  static async setCurrentScreen(currentScreen: string | null) {
    AppLogger.currentScreen = currentScreen;
  }

  log(topic: string, message: string) {
    console.log(this.normolizeMessage(topic, "LOG", message).join(" "));
  }

  debug(topic: string, message: string) {
    console.debug(this.normolizeMessage(topic, "DEBUG", message).join(" "));
  }

  error(topic: string, message: string) {
    console.error(this.normolizeMessage(topic, "ERROR", message).join(" "));
  }
}
