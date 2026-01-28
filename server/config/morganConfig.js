import morgan from "morgan";

// Morgan time format configuration
const morganConfig = morgan.token('timestamp', () => new Date().toLocaleString('en-IN', { timeZone: "Asia/Kolkata" }))

export const morganFormat = ':remote-addr - :remote-user [:timestamp] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'

export default morganConfig;