"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const app_root_path_1 = __importDefault(require("app-root-path"));
const winston = __importStar(require("winston"));
require("winston-daily-rotate-file");
const date_fns_tz_1 = require("date-fns-tz");
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
exports.logger = winston.createLogger({
    levels: levels.levels,
    transports: [
        new winston.transports.DailyRotateFile({
            filename: 'bot-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            dirname: `${app_root_path_1.default}/logs`,
            format: winston.format.combine(winston.format.timestamp({
                format: date_fns_tz_1.zonedTimeToUtc(new Date(), 'Asia/Tokyo').toString(),
            }), winston.format.simple(), winston.format.printf((info) => `[${info.timestamp}] [${info.level}] ${info.message}`)),
            level: 'Game',
        }),
    ],
});
//# sourceMappingURL=index.js.map