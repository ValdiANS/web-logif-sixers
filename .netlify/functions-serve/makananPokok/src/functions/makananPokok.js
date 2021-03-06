var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module3, desc) => {
  if (module3 && typeof module3 === "object" || typeof module3 === "function") {
    for (let key of __getOwnPropNames(module3))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module3[key], enumerable: !(desc = __getOwnPropDesc(module3, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module3) => {
  return __reExport(__markAsModule(__defProp(module3 != null ? __create(__getProtoOf(module3)) : {}, "default", module3 && module3.__esModule && "default" in module3 ? { get: () => module3.default, enumerable: true } : { value: module3, enumerable: true })), module3);
};

// node_modules/@grpc/grpc-js/build/src/constants.js
var require_constants = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = exports2.Propagate = exports2.LogVerbosity = exports2.Status = void 0;
    var Status;
    (function(Status2) {
      Status2[Status2["OK"] = 0] = "OK";
      Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
      Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
      Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
      Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
      Status2[Status2["NOT_FOUND"] = 5] = "NOT_FOUND";
      Status2[Status2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
      Status2[Status2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
      Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
      Status2[Status2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
      Status2[Status2["ABORTED"] = 10] = "ABORTED";
      Status2[Status2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
      Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
      Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
      Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
      Status2[Status2["DATA_LOSS"] = 15] = "DATA_LOSS";
      Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    })(Status = exports2.Status || (exports2.Status = {}));
    var LogVerbosity;
    (function(LogVerbosity2) {
      LogVerbosity2[LogVerbosity2["DEBUG"] = 0] = "DEBUG";
      LogVerbosity2[LogVerbosity2["INFO"] = 1] = "INFO";
      LogVerbosity2[LogVerbosity2["ERROR"] = 2] = "ERROR";
      LogVerbosity2[LogVerbosity2["NONE"] = 3] = "NONE";
    })(LogVerbosity = exports2.LogVerbosity || (exports2.LogVerbosity = {}));
    var Propagate;
    (function(Propagate2) {
      Propagate2[Propagate2["DEADLINE"] = 1] = "DEADLINE";
      Propagate2[Propagate2["CENSUS_STATS_CONTEXT"] = 2] = "CENSUS_STATS_CONTEXT";
      Propagate2[Propagate2["CENSUS_TRACING_CONTEXT"] = 4] = "CENSUS_TRACING_CONTEXT";
      Propagate2[Propagate2["CANCELLATION"] = 8] = "CANCELLATION";
      Propagate2[Propagate2["DEFAULTS"] = 65535] = "DEFAULTS";
    })(Propagate = exports2.Propagate || (exports2.Propagate = {}));
    exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
  }
});

// node_modules/@grpc/grpc-js/build/src/logging.js
var require_logging = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/logging.js"(exports2) {
    "use strict";
    var _a;
    var _b;
    var _c;
    var _d;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.trace = exports2.log = exports2.setLoggerVerbosity = exports2.setLogger = exports2.getLogger = void 0;
    var constants_1 = require_constants();
    var DEFAULT_LOGGER = {
      error: (message, ...optionalParams) => {
        console.error("E " + message, ...optionalParams);
      },
      info: (message, ...optionalParams) => {
        console.error("I " + message, ...optionalParams);
      },
      debug: (message, ...optionalParams) => {
        console.error("D " + message, ...optionalParams);
      }
    };
    var _logger = DEFAULT_LOGGER;
    var _logVerbosity = constants_1.LogVerbosity.ERROR;
    var verbosityString = (_b = (_a = process.env.GRPC_NODE_VERBOSITY) !== null && _a !== void 0 ? _a : process.env.GRPC_VERBOSITY) !== null && _b !== void 0 ? _b : "";
    switch (verbosityString.toUpperCase()) {
      case "DEBUG":
        _logVerbosity = constants_1.LogVerbosity.DEBUG;
        break;
      case "INFO":
        _logVerbosity = constants_1.LogVerbosity.INFO;
        break;
      case "ERROR":
        _logVerbosity = constants_1.LogVerbosity.ERROR;
        break;
      case "NONE":
        _logVerbosity = constants_1.LogVerbosity.NONE;
        break;
      default:
    }
    exports2.getLogger = () => {
      return _logger;
    };
    exports2.setLogger = (logger2) => {
      _logger = logger2;
    };
    exports2.setLoggerVerbosity = (verbosity) => {
      _logVerbosity = verbosity;
    };
    exports2.log = (severity, ...args) => {
      let logFunction;
      if (severity >= _logVerbosity) {
        switch (severity) {
          case constants_1.LogVerbosity.DEBUG:
            logFunction = _logger.debug;
            break;
          case constants_1.LogVerbosity.INFO:
            logFunction = _logger.info;
            break;
          case constants_1.LogVerbosity.ERROR:
            logFunction = _logger.error;
            break;
        }
        if (!logFunction) {
          logFunction = _logger.error;
        }
        if (logFunction) {
          logFunction.bind(_logger)(...args);
        }
      }
    };
    var tracersString = (_d = (_c = process.env.GRPC_NODE_TRACE) !== null && _c !== void 0 ? _c : process.env.GRPC_TRACE) !== null && _d !== void 0 ? _d : "";
    var enabledTracers = new Set();
    var disabledTracers = new Set();
    for (const tracerName of tracersString.split(",")) {
      if (tracerName.startsWith("-")) {
        disabledTracers.add(tracerName.substring(1));
      } else {
        enabledTracers.add(tracerName);
      }
    }
    var allEnabled = enabledTracers.has("all");
    function trace(severity, tracer, text) {
      if (!disabledTracers.has(tracer) && (allEnabled || enabledTracers.has(tracer))) {
        exports2.log(severity, new Date().toISOString() + " | " + tracer + " | " + text);
      }
    }
    exports2.trace = trace;
  }
});

// node_modules/@grpc/grpc-js/build/src/metadata.js
var require_metadata = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/metadata.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Metadata = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var LEGAL_KEY_REGEX = /^[0-9a-z_.-]+$/;
    var LEGAL_NON_BINARY_VALUE_REGEX = /^[ -~]*$/;
    function isLegalKey(key) {
      return LEGAL_KEY_REGEX.test(key);
    }
    function isLegalNonBinaryValue(value) {
      return LEGAL_NON_BINARY_VALUE_REGEX.test(value);
    }
    function isBinaryKey(key) {
      return key.endsWith("-bin");
    }
    function isCustomMetadata(key) {
      return !key.startsWith("grpc-");
    }
    function normalizeKey(key) {
      return key.toLowerCase();
    }
    function validate(key, value) {
      if (!isLegalKey(key)) {
        throw new Error('Metadata key "' + key + '" contains illegal characters');
      }
      if (value !== null && value !== void 0) {
        if (isBinaryKey(key)) {
          if (!(value instanceof Buffer)) {
            throw new Error("keys that end with '-bin' must have Buffer values");
          }
        } else {
          if (value instanceof Buffer) {
            throw new Error("keys that don't end with '-bin' must have String values");
          }
          if (!isLegalNonBinaryValue(value)) {
            throw new Error('Metadata string value "' + value + '" contains illegal characters');
          }
        }
      }
    }
    var Metadata2 = class {
      constructor(options) {
        this.internalRepr = new Map();
        if (options === void 0) {
          this.options = {};
        } else {
          this.options = options;
        }
      }
      set(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        this.internalRepr.set(key, [value]);
      }
      add(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        const existingValue = this.internalRepr.get(key);
        if (existingValue === void 0) {
          this.internalRepr.set(key, [value]);
        } else {
          existingValue.push(value);
        }
      }
      remove(key) {
        key = normalizeKey(key);
        validate(key);
        this.internalRepr.delete(key);
      }
      get(key) {
        key = normalizeKey(key);
        validate(key);
        return this.internalRepr.get(key) || [];
      }
      getMap() {
        const result = {};
        this.internalRepr.forEach((values, key) => {
          if (values.length > 0) {
            const v = values[0];
            result[key] = v instanceof Buffer ? v.slice() : v;
          }
        });
        return result;
      }
      clone() {
        const newMetadata = new Metadata2(this.options);
        const newInternalRepr = newMetadata.internalRepr;
        this.internalRepr.forEach((value, key) => {
          const clonedValue = value.map((v) => {
            if (v instanceof Buffer) {
              return Buffer.from(v);
            } else {
              return v;
            }
          });
          newInternalRepr.set(key, clonedValue);
        });
        return newMetadata;
      }
      merge(other) {
        other.internalRepr.forEach((values, key) => {
          const mergedValue = (this.internalRepr.get(key) || []).concat(values);
          this.internalRepr.set(key, mergedValue);
        });
      }
      setOptions(options) {
        this.options = options;
      }
      getOptions() {
        return this.options;
      }
      toHttp2Headers() {
        const result = {};
        this.internalRepr.forEach((values, key) => {
          result[key] = values.map((value) => {
            if (value instanceof Buffer) {
              return value.toString("base64");
            } else {
              return value;
            }
          });
        });
        return result;
      }
      _getCoreRepresentation() {
        return this.internalRepr;
      }
      toJSON() {
        const result = {};
        for (const [key, values] of this.internalRepr.entries()) {
          result[key] = values;
        }
        return result;
      }
      static fromHttp2Headers(headers) {
        const result = new Metadata2();
        Object.keys(headers).forEach((key) => {
          if (key.charAt(0) === ":") {
            return;
          }
          const values = headers[key];
          try {
            if (isBinaryKey(key)) {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, Buffer.from(value, "base64"));
                });
              } else if (values !== void 0) {
                if (isCustomMetadata(key)) {
                  values.split(",").forEach((v) => {
                    result.add(key, Buffer.from(v.trim(), "base64"));
                  });
                } else {
                  result.add(key, Buffer.from(values, "base64"));
                }
              }
            } else {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, value);
                });
              } else if (values !== void 0) {
                result.add(key, values);
              }
            }
          } catch (error) {
            const message = `Failed to add metadata entry ${key}: ${values}. ${error.message}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
            logging_1.log(constants_1.LogVerbosity.ERROR, message);
          }
        });
        return result;
      }
    };
    exports2.Metadata = Metadata2;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-credentials.js
var require_call_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallCredentials = void 0;
    var metadata_1 = require_metadata();
    function isCurrentOauth2Client(client) {
      return "getRequestHeaders" in client && typeof client.getRequestHeaders === "function";
    }
    var CallCredentials = class {
      static createFromMetadataGenerator(metadataGenerator) {
        return new SingleCallCredentials(metadataGenerator);
      }
      static createFromGoogleCredential(googleCredentials) {
        return CallCredentials.createFromMetadataGenerator((options, callback) => {
          let getHeaders;
          if (isCurrentOauth2Client(googleCredentials)) {
            getHeaders = googleCredentials.getRequestHeaders(options.service_url);
          } else {
            getHeaders = new Promise((resolve2, reject) => {
              googleCredentials.getRequestMetadata(options.service_url, (err, headers) => {
                if (err) {
                  reject(err);
                  return;
                }
                resolve2(headers);
              });
            });
          }
          getHeaders.then((headers) => {
            const metadata = new metadata_1.Metadata();
            for (const key of Object.keys(headers)) {
              metadata.add(key, headers[key]);
            }
            callback(null, metadata);
          }, (err) => {
            callback(err);
          });
        });
      }
      static createEmpty() {
        return new EmptyCallCredentials();
      }
    };
    exports2.CallCredentials = CallCredentials;
    var ComposedCallCredentials = class extends CallCredentials {
      constructor(creds) {
        super();
        this.creds = creds;
      }
      async generateMetadata(options) {
        const base = new metadata_1.Metadata();
        const generated = await Promise.all(this.creds.map((cred) => cred.generateMetadata(options)));
        for (const gen of generated) {
          base.merge(gen);
        }
        return base;
      }
      compose(other) {
        return new ComposedCallCredentials(this.creds.concat([other]));
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof ComposedCallCredentials) {
          return this.creds.every((value, index) => value._equals(other.creds[index]));
        } else {
          return false;
        }
      }
    };
    var SingleCallCredentials = class extends CallCredentials {
      constructor(metadataGenerator) {
        super();
        this.metadataGenerator = metadataGenerator;
      }
      generateMetadata(options) {
        return new Promise((resolve2, reject) => {
          this.metadataGenerator(options, (err, metadata) => {
            if (metadata !== void 0) {
              resolve2(metadata);
            } else {
              reject(err);
            }
          });
        });
      }
      compose(other) {
        return new ComposedCallCredentials([this, other]);
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof SingleCallCredentials) {
          return this.metadataGenerator === other.metadataGenerator;
        } else {
          return false;
        }
      }
    };
    var EmptyCallCredentials = class extends CallCredentials {
      generateMetadata(options) {
        return Promise.resolve(new metadata_1.Metadata());
      }
      compose(other) {
        return other;
      }
      _equals(other) {
        return other instanceof EmptyCallCredentials;
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/stream-decoder.js
var require_stream_decoder = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/stream-decoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamDecoder = void 0;
    var ReadState;
    (function(ReadState2) {
      ReadState2[ReadState2["NO_DATA"] = 0] = "NO_DATA";
      ReadState2[ReadState2["READING_SIZE"] = 1] = "READING_SIZE";
      ReadState2[ReadState2["READING_MESSAGE"] = 2] = "READING_MESSAGE";
    })(ReadState || (ReadState = {}));
    var StreamDecoder = class {
      constructor() {
        this.readState = ReadState.NO_DATA;
        this.readCompressFlag = Buffer.alloc(1);
        this.readPartialSize = Buffer.alloc(4);
        this.readSizeRemaining = 4;
        this.readMessageSize = 0;
        this.readPartialMessage = [];
        this.readMessageRemaining = 0;
      }
      write(data) {
        let readHead = 0;
        let toRead;
        const result = [];
        while (readHead < data.length) {
          switch (this.readState) {
            case ReadState.NO_DATA:
              this.readCompressFlag = data.slice(readHead, readHead + 1);
              readHead += 1;
              this.readState = ReadState.READING_SIZE;
              this.readPartialSize.fill(0);
              this.readSizeRemaining = 4;
              this.readMessageSize = 0;
              this.readMessageRemaining = 0;
              this.readPartialMessage = [];
              break;
            case ReadState.READING_SIZE:
              toRead = Math.min(data.length - readHead, this.readSizeRemaining);
              data.copy(this.readPartialSize, 4 - this.readSizeRemaining, readHead, readHead + toRead);
              this.readSizeRemaining -= toRead;
              readHead += toRead;
              if (this.readSizeRemaining === 0) {
                this.readMessageSize = this.readPartialSize.readUInt32BE(0);
                this.readMessageRemaining = this.readMessageSize;
                if (this.readMessageRemaining > 0) {
                  this.readState = ReadState.READING_MESSAGE;
                } else {
                  const message = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                  this.readState = ReadState.NO_DATA;
                  result.push(message);
                }
              }
              break;
            case ReadState.READING_MESSAGE:
              toRead = Math.min(data.length - readHead, this.readMessageRemaining);
              this.readPartialMessage.push(data.slice(readHead, readHead + toRead));
              this.readMessageRemaining -= toRead;
              readHead += toRead;
              if (this.readMessageRemaining === 0) {
                const framedMessageBuffers = [
                  this.readCompressFlag,
                  this.readPartialSize
                ].concat(this.readPartialMessage);
                const framedMessage = Buffer.concat(framedMessageBuffers, this.readMessageSize + 5);
                this.readState = ReadState.NO_DATA;
                result.push(framedMessage);
              }
              break;
            default:
              throw new Error("Unexpected read state");
          }
        }
        return result;
      }
    };
    exports2.StreamDecoder = StreamDecoder;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-stream.js
var require_call_stream = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2CallStream = exports2.InterceptingListenerImpl = exports2.isInterceptingListener = void 0;
    var http2 = require("http2");
    var os = require("os");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var constants_2 = require_constants();
    var TRACER_NAME = "call_stream";
    var { HTTP2_HEADER_STATUS, HTTP2_HEADER_CONTENT_TYPE, NGHTTP2_CANCEL } = http2.constants;
    function getSystemErrorName(errno) {
      for (const [name4, num] of Object.entries(os.constants.errno)) {
        if (num === errno) {
          return name4;
        }
      }
      return "Unknown system error " + errno;
    }
    function getMinDeadline(deadlineList) {
      let minValue = Infinity;
      for (const deadline of deadlineList) {
        const deadlineMsecs = deadline instanceof Date ? deadline.getTime() : deadline;
        if (deadlineMsecs < minValue) {
          minValue = deadlineMsecs;
        }
      }
      return minValue;
    }
    function isInterceptingListener(listener) {
      return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
    }
    exports2.isInterceptingListener = isInterceptingListener;
    var InterceptingListenerImpl = class {
      constructor(listener, nextListener) {
        this.listener = listener;
        this.nextListener = nextListener;
        this.processingMessage = false;
        this.pendingStatus = null;
      }
      onReceiveMetadata(metadata) {
        this.listener.onReceiveMetadata(metadata, (metadata2) => {
          this.nextListener.onReceiveMetadata(metadata2);
        });
      }
      onReceiveMessage(message) {
        this.processingMessage = true;
        this.listener.onReceiveMessage(message, (msg) => {
          this.processingMessage = false;
          this.nextListener.onReceiveMessage(msg);
          if (this.pendingStatus) {
            this.nextListener.onReceiveStatus(this.pendingStatus);
          }
        });
      }
      onReceiveStatus(status) {
        this.listener.onReceiveStatus(status, (processedStatus) => {
          if (this.processingMessage) {
            this.pendingStatus = processedStatus;
          } else {
            this.nextListener.onReceiveStatus(processedStatus);
          }
        });
      }
    };
    exports2.InterceptingListenerImpl = InterceptingListenerImpl;
    var Http2CallStream = class {
      constructor(methodName, channel, options, filterStackFactory, channelCallCredentials, callNumber) {
        this.methodName = methodName;
        this.channel = channel;
        this.options = options;
        this.channelCallCredentials = channelCallCredentials;
        this.callNumber = callNumber;
        this.http2Stream = null;
        this.pendingRead = false;
        this.isWriteFilterPending = false;
        this.pendingWrite = null;
        this.pendingWriteCallback = null;
        this.writesClosed = false;
        this.decoder = new stream_decoder_1.StreamDecoder();
        this.isReadFilterPending = false;
        this.canPush = false;
        this.readsClosed = false;
        this.statusOutput = false;
        this.unpushedReadMessages = [];
        this.unfilteredReadMessages = [];
        this.mappedStatusCode = constants_1.Status.UNKNOWN;
        this.finalStatus = null;
        this.subchannel = null;
        this.listener = null;
        this.internalError = null;
        this.configDeadline = Infinity;
        this.statusWatchers = [];
        this.streamEndWatchers = [];
        this.callStatsTracker = null;
        this.filterStack = filterStackFactory.createFilter(this);
        this.credentials = channelCallCredentials;
        this.disconnectListener = () => {
          this.endCall({
            code: constants_1.Status.UNAVAILABLE,
            details: "Connection dropped",
            metadata: new metadata_1.Metadata()
          });
        };
        if (this.options.parentCall && this.options.flags & constants_1.Propagate.CANCELLATION) {
          this.options.parentCall.on("cancelled", () => {
            this.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled by parent call");
          });
        }
      }
      outputStatus() {
        if (!this.statusOutput) {
          this.statusOutput = true;
          const filteredStatus = this.filterStack.receiveTrailers(this.finalStatus);
          this.statusWatchers.forEach((watcher) => watcher(filteredStatus));
          process.nextTick(() => {
            var _a;
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(filteredStatus);
          });
          if (this.subchannel) {
            this.subchannel.callUnref();
            this.subchannel.removeDisconnectListener(this.disconnectListener);
          }
        }
      }
      trace(text) {
        logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
      }
      endCall(status) {
        if (this.finalStatus === null || this.finalStatus.code === constants_1.Status.OK) {
          this.trace("ended with status: code=" + status.code + ' details="' + status.details + '"');
          this.finalStatus = status;
          this.maybeOutputStatus();
        }
        this.destroyHttp2Stream();
      }
      maybeOutputStatus() {
        if (this.finalStatus !== null) {
          if (this.finalStatus.code !== constants_1.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && this.unfilteredReadMessages.length === 0 && !this.isReadFilterPending) {
            this.outputStatus();
          }
        }
      }
      push(message) {
        this.trace("pushing to reader message of length " + (message instanceof Buffer ? message.length : null));
        this.canPush = false;
        process.nextTick(() => {
          var _a;
          if (this.statusOutput) {
            return;
          }
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveMessage(message);
          this.maybeOutputStatus();
        });
      }
      handleFilterError(error) {
        this.cancelWithStatus(constants_1.Status.INTERNAL, error.message);
      }
      handleFilteredRead(message) {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.maybeOutputStatus();
          return;
        }
        this.isReadFilterPending = false;
        if (this.canPush) {
          this.http2Stream.pause();
          this.push(message);
        } else {
          this.trace("unpushedReadMessages.push message of length " + message.length);
          this.unpushedReadMessages.push(message);
        }
        if (this.unfilteredReadMessages.length > 0) {
          const nextMessage = this.unfilteredReadMessages.shift();
          this.filterReceivedMessage(nextMessage);
        }
      }
      filterReceivedMessage(framedMessage) {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.maybeOutputStatus();
          return;
        }
        this.trace("filterReceivedMessage of length " + framedMessage.length);
        this.isReadFilterPending = true;
        this.filterStack.receiveMessage(Promise.resolve(framedMessage)).then(this.handleFilteredRead.bind(this), this.handleFilterError.bind(this));
      }
      tryPush(messageBytes) {
        if (this.isReadFilterPending) {
          this.trace("unfilteredReadMessages.push message of length " + (messageBytes && messageBytes.length));
          this.unfilteredReadMessages.push(messageBytes);
        } else {
          this.filterReceivedMessage(messageBytes);
        }
      }
      handleTrailers(headers) {
        this.streamEndWatchers.forEach((watcher) => watcher(true));
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "		" + header + ": " + headers[header] + "\n";
        }
        this.trace("Received server trailers:\n" + headersString);
        let metadata;
        try {
          metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        } catch (e) {
          metadata = new metadata_1.Metadata();
        }
        const metadataMap = metadata.getMap();
        let code = this.mappedStatusCode;
        if (code === constants_1.Status.UNKNOWN && typeof metadataMap["grpc-status"] === "string") {
          const receivedStatus = Number(metadataMap["grpc-status"]);
          if (receivedStatus in constants_1.Status) {
            code = receivedStatus;
            this.trace("received status code " + receivedStatus + " from server");
          }
          metadata.remove("grpc-status");
        }
        let details = "";
        if (typeof metadataMap["grpc-message"] === "string") {
          details = decodeURI(metadataMap["grpc-message"]);
          metadata.remove("grpc-message");
          this.trace('received status details string "' + details + '" from server');
        }
        const status = { code, details, metadata };
        this.endCall(status);
      }
      writeMessageToStream(message, callback) {
        var _a;
        (_a = this.callStatsTracker) === null || _a === void 0 ? void 0 : _a.addMessageSent();
        this.http2Stream.write(message, callback);
      }
      attachHttp2Stream(stream, subchannel, extraFilters, callStatsTracker) {
        this.filterStack.push(extraFilters);
        if (this.finalStatus !== null) {
          stream.close(NGHTTP2_CANCEL);
        } else {
          this.trace("attachHttp2Stream from subchannel " + subchannel.getAddress());
          this.http2Stream = stream;
          this.subchannel = subchannel;
          this.callStatsTracker = callStatsTracker;
          subchannel.addDisconnectListener(this.disconnectListener);
          subchannel.callRef();
          stream.on("response", (headers, flags) => {
            var _a;
            let headersString = "";
            for (const header of Object.keys(headers)) {
              headersString += "		" + header + ": " + headers[header] + "\n";
            }
            this.trace("Received server headers:\n" + headersString);
            switch (headers[":status"]) {
              case 400:
                this.mappedStatusCode = constants_1.Status.INTERNAL;
                break;
              case 401:
                this.mappedStatusCode = constants_1.Status.UNAUTHENTICATED;
                break;
              case 403:
                this.mappedStatusCode = constants_1.Status.PERMISSION_DENIED;
                break;
              case 404:
                this.mappedStatusCode = constants_1.Status.UNIMPLEMENTED;
                break;
              case 429:
              case 502:
              case 503:
              case 504:
                this.mappedStatusCode = constants_1.Status.UNAVAILABLE;
                break;
              default:
                this.mappedStatusCode = constants_1.Status.UNKNOWN;
            }
            if (flags & http2.constants.NGHTTP2_FLAG_END_STREAM) {
              this.handleTrailers(headers);
            } else {
              let metadata;
              try {
                metadata = metadata_1.Metadata.fromHttp2Headers(headers);
              } catch (error) {
                this.endCall({
                  code: constants_1.Status.UNKNOWN,
                  details: error.message,
                  metadata: new metadata_1.Metadata()
                });
                return;
              }
              try {
                const finalMetadata = this.filterStack.receiveMetadata(metadata);
                (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveMetadata(finalMetadata);
              } catch (error) {
                this.endCall({
                  code: constants_1.Status.UNKNOWN,
                  details: error.message,
                  metadata: new metadata_1.Metadata()
                });
              }
            }
          });
          stream.on("trailers", this.handleTrailers.bind(this));
          stream.on("data", (data) => {
            this.trace("receive HTTP/2 data frame of length " + data.length);
            const messages = this.decoder.write(data);
            for (const message of messages) {
              this.trace("parsed message of length " + message.length);
              this.callStatsTracker.addMessageReceived();
              this.tryPush(message);
            }
          });
          stream.on("end", () => {
            this.readsClosed = true;
            this.maybeOutputStatus();
          });
          stream.on("close", () => {
            process.nextTick(() => {
              var _a;
              this.trace("HTTP/2 stream closed with code " + stream.rstCode);
              if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
                return;
              }
              let code;
              let details = "";
              switch (stream.rstCode) {
                case http2.constants.NGHTTP2_NO_ERROR:
                  if (this.finalStatus !== null) {
                    return;
                  }
                  code = constants_1.Status.INTERNAL;
                  details = `Received RST_STREAM with code ${stream.rstCode}`;
                  break;
                case http2.constants.NGHTTP2_REFUSED_STREAM:
                  code = constants_1.Status.UNAVAILABLE;
                  details = "Stream refused by server";
                  break;
                case http2.constants.NGHTTP2_CANCEL:
                  code = constants_1.Status.CANCELLED;
                  details = "Call cancelled";
                  break;
                case http2.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                  code = constants_1.Status.RESOURCE_EXHAUSTED;
                  details = "Bandwidth exhausted";
                  break;
                case http2.constants.NGHTTP2_INADEQUATE_SECURITY:
                  code = constants_1.Status.PERMISSION_DENIED;
                  details = "Protocol not secure enough";
                  break;
                case http2.constants.NGHTTP2_INTERNAL_ERROR:
                  code = constants_1.Status.INTERNAL;
                  if (this.internalError === null) {
                    details = `Received RST_STREAM with code ${stream.rstCode} (Internal server error)`;
                  } else {
                    if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") {
                      code = constants_1.Status.UNAVAILABLE;
                      details = this.internalError.message;
                    } else {
                      details = `Received RST_STREAM with code ${stream.rstCode} triggered by internal client error: ${this.internalError.message}`;
                    }
                  }
                  break;
                default:
                  code = constants_1.Status.INTERNAL;
                  details = `Received RST_STREAM with code ${stream.rstCode}`;
              }
              this.endCall({ code, details, metadata: new metadata_1.Metadata() });
            });
          });
          stream.on("error", (err) => {
            if (err.code !== "ERR_HTTP2_STREAM_ERROR") {
              this.trace("Node error event: message=" + err.message + " code=" + err.code + " errno=" + getSystemErrorName(err.errno) + " syscall=" + err.syscall);
              this.internalError = err;
            }
            this.streamEndWatchers.forEach((watcher) => watcher(false));
          });
          if (!this.pendingRead) {
            stream.pause();
          }
          if (this.pendingWrite) {
            if (!this.pendingWriteCallback) {
              throw new Error("Invalid state in write handling code");
            }
            this.trace("sending data chunk of length " + this.pendingWrite.length + " (deferred)");
            try {
              this.writeMessageToStream(this.pendingWrite, this.pendingWriteCallback);
            } catch (error) {
              this.endCall({
                code: constants_1.Status.UNAVAILABLE,
                details: `Write failed with error ${error.message}`,
                metadata: new metadata_1.Metadata()
              });
            }
          }
          this.maybeCloseWrites();
        }
      }
      start(metadata, listener) {
        this.trace("Sending metadata");
        this.listener = listener;
        this.channel._startCallStream(this, metadata);
      }
      destroyHttp2Stream() {
        var _a;
        if (this.http2Stream !== null && !this.http2Stream.destroyed) {
          let code;
          if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
            code = http2.constants.NGHTTP2_NO_ERROR;
          } else {
            code = http2.constants.NGHTTP2_CANCEL;
          }
          this.trace("close http2 stream with code " + code);
          this.http2Stream.close(code);
        }
      }
      cancelWithStatus(status, details) {
        this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
        this.endCall({ code: status, details, metadata: new metadata_1.Metadata() });
      }
      getDeadline() {
        const deadlineList = [this.options.deadline];
        if (this.options.parentCall && this.options.flags & constants_1.Propagate.DEADLINE) {
          deadlineList.push(this.options.parentCall.getDeadline());
        }
        if (this.configDeadline) {
          deadlineList.push(this.configDeadline);
        }
        return getMinDeadline(deadlineList);
      }
      getCredentials() {
        return this.credentials;
      }
      setCredentials(credentials2) {
        this.credentials = this.channelCallCredentials.compose(credentials2);
      }
      getStatus() {
        return this.finalStatus;
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.subchannel) === null || _a === void 0 ? void 0 : _a.getAddress()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
      }
      getMethod() {
        return this.methodName;
      }
      getHost() {
        return this.options.host;
      }
      setConfigDeadline(configDeadline) {
        this.configDeadline = configDeadline;
      }
      addStatusWatcher(watcher) {
        this.statusWatchers.push(watcher);
      }
      addStreamEndWatcher(watcher) {
        this.streamEndWatchers.push(watcher);
      }
      addFilters(extraFilters) {
        this.filterStack.push(extraFilters);
      }
      startRead() {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.readsClosed = true;
          this.maybeOutputStatus();
          return;
        }
        this.canPush = true;
        if (this.http2Stream === null) {
          this.pendingRead = true;
        } else {
          if (this.unpushedReadMessages.length > 0) {
            const nextMessage = this.unpushedReadMessages.shift();
            this.push(nextMessage);
            return;
          }
          this.http2Stream.resume();
        }
      }
      maybeCloseWrites() {
        if (this.writesClosed && !this.isWriteFilterPending && this.http2Stream !== null) {
          this.trace("calling end() on HTTP/2 stream");
          this.http2Stream.end();
        }
      }
      sendMessageWithContext(context, message) {
        var _a;
        this.trace("write() called with message of length " + message.length);
        const writeObj = {
          message,
          flags: context.flags
        };
        const cb = (_a = context.callback) !== null && _a !== void 0 ? _a : () => {
        };
        this.isWriteFilterPending = true;
        this.filterStack.sendMessage(Promise.resolve(writeObj)).then((message2) => {
          this.isWriteFilterPending = false;
          if (this.http2Stream === null) {
            this.trace("deferring writing data chunk of length " + message2.message.length);
            this.pendingWrite = message2.message;
            this.pendingWriteCallback = cb;
          } else {
            this.trace("sending data chunk of length " + message2.message.length);
            try {
              this.writeMessageToStream(message2.message, cb);
            } catch (error) {
              this.endCall({
                code: constants_1.Status.UNAVAILABLE,
                details: `Write failed with error ${error.message}`,
                metadata: new metadata_1.Metadata()
              });
            }
            this.maybeCloseWrites();
          }
        }, this.handleFilterError.bind(this));
      }
      halfClose() {
        this.trace("end() called");
        this.writesClosed = true;
        this.maybeCloseWrites();
      }
    };
    exports2.Http2CallStream = Http2CallStream;
  }
});

// node_modules/@grpc/grpc-js/build/src/tls-helpers.js
var require_tls_helpers = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/tls-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getDefaultRootsData = exports2.CIPHER_SUITES = void 0;
    var fs = require("fs");
    exports2.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
    var DEFAULT_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
    var defaultRootsData = null;
    function getDefaultRootsData() {
      if (DEFAULT_ROOTS_FILE_PATH) {
        if (defaultRootsData === null) {
          defaultRootsData = fs.readFileSync(DEFAULT_ROOTS_FILE_PATH);
        }
        return defaultRootsData;
      }
      return null;
    }
    exports2.getDefaultRootsData = getDefaultRootsData;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel-credentials.js
var require_channel_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelCredentials = void 0;
    var tls_1 = require("tls");
    var call_credentials_1 = require_call_credentials();
    var tls_helpers_1 = require_tls_helpers();
    function verifyIsBufferOrNull(obj, friendlyName) {
      if (obj && !(obj instanceof Buffer)) {
        throw new TypeError(`${friendlyName}, if provided, must be a Buffer.`);
      }
    }
    function bufferOrNullEqual(buf1, buf2) {
      if (buf1 === null && buf2 === null) {
        return true;
      } else {
        return buf1 !== null && buf2 !== null && buf1.equals(buf2);
      }
    }
    var ChannelCredentials = class {
      constructor(callCredentials) {
        this.callCredentials = callCredentials || call_credentials_1.CallCredentials.createEmpty();
      }
      _getCallCredentials() {
        return this.callCredentials;
      }
      static createSsl(rootCerts, privateKey, certChain, verifyOptions) {
        verifyIsBufferOrNull(rootCerts, "Root certificate");
        verifyIsBufferOrNull(privateKey, "Private key");
        verifyIsBufferOrNull(certChain, "Certificate chain");
        if (privateKey && !certChain) {
          throw new Error("Private key must be given with accompanying certificate chain");
        }
        if (!privateKey && certChain) {
          throw new Error("Certificate chain must be given with accompanying private key");
        }
        return new SecureChannelCredentialsImpl(rootCerts || tls_helpers_1.getDefaultRootsData(), privateKey || null, certChain || null, verifyOptions || {});
      }
      static createInsecure() {
        return new InsecureChannelCredentialsImpl();
      }
    };
    exports2.ChannelCredentials = ChannelCredentials;
    var InsecureChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(callCredentials) {
        super(callCredentials);
      }
      compose(callCredentials) {
        throw new Error("Cannot compose insecure credentials");
      }
      _getConnectionOptions() {
        return null;
      }
      _isSecure() {
        return false;
      }
      _equals(other) {
        return other instanceof InsecureChannelCredentialsImpl;
      }
    };
    var SecureChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(rootCerts, privateKey, certChain, verifyOptions) {
        super();
        this.rootCerts = rootCerts;
        this.privateKey = privateKey;
        this.certChain = certChain;
        this.verifyOptions = verifyOptions;
        const secureContext = tls_1.createSecureContext({
          ca: rootCerts || void 0,
          key: privateKey || void 0,
          cert: certChain || void 0,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
        this.connectionOptions = { secureContext };
        if (verifyOptions && verifyOptions.checkServerIdentity) {
          this.connectionOptions.checkServerIdentity = (host, cert) => {
            return verifyOptions.checkServerIdentity(host, { raw: cert.raw });
          };
        }
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentialsImpl(this, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return Object.assign({}, this.connectionOptions);
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof SecureChannelCredentialsImpl) {
          if (!bufferOrNullEqual(this.rootCerts, other.rootCerts)) {
            return false;
          }
          if (!bufferOrNullEqual(this.privateKey, other.privateKey)) {
            return false;
          }
          if (!bufferOrNullEqual(this.certChain, other.certChain)) {
            return false;
          }
          return this.verifyOptions.checkServerIdentity === other.verifyOptions.checkServerIdentity;
        } else {
          return false;
        }
      }
    };
    var ComposedChannelCredentialsImpl = class extends ChannelCredentials {
      constructor(channelCredentials, callCreds) {
        super(callCreds);
        this.channelCredentials = channelCredentials;
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentialsImpl(this.channelCredentials, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return this.channelCredentials._getConnectionOptions();
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof ComposedChannelCredentialsImpl) {
          return this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials);
        } else {
          return false;
        }
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer.js
var require_load_balancer = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateLoadBalancingConfig = exports2.getFirstUsableConfig = exports2.isLoadBalancerNameRegistered = exports2.createLoadBalancer = exports2.registerDefaultLoadBalancerType = exports2.registerLoadBalancerType = exports2.createChildChannelControlHelper = void 0;
    function createChildChannelControlHelper(parent, overrides) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      return {
        createSubchannel: (_b = (_a = overrides.createSubchannel) === null || _a === void 0 ? void 0 : _a.bind(overrides)) !== null && _b !== void 0 ? _b : parent.createSubchannel.bind(parent),
        updateState: (_d = (_c = overrides.updateState) === null || _c === void 0 ? void 0 : _c.bind(overrides)) !== null && _d !== void 0 ? _d : parent.updateState.bind(parent),
        requestReresolution: (_f = (_e = overrides.requestReresolution) === null || _e === void 0 ? void 0 : _e.bind(overrides)) !== null && _f !== void 0 ? _f : parent.requestReresolution.bind(parent),
        addChannelzChild: (_h = (_g = overrides.addChannelzChild) === null || _g === void 0 ? void 0 : _g.bind(overrides)) !== null && _h !== void 0 ? _h : parent.addChannelzChild.bind(parent),
        removeChannelzChild: (_k = (_j = overrides.removeChannelzChild) === null || _j === void 0 ? void 0 : _j.bind(overrides)) !== null && _k !== void 0 ? _k : parent.removeChannelzChild.bind(parent)
      };
    }
    exports2.createChildChannelControlHelper = createChildChannelControlHelper;
    var registeredLoadBalancerTypes = {};
    var defaultLoadBalancerType = null;
    function registerLoadBalancerType(typeName, loadBalancerType, loadBalancingConfigType) {
      registeredLoadBalancerTypes[typeName] = {
        LoadBalancer: loadBalancerType,
        LoadBalancingConfig: loadBalancingConfigType
      };
    }
    exports2.registerLoadBalancerType = registerLoadBalancerType;
    function registerDefaultLoadBalancerType(typeName) {
      defaultLoadBalancerType = typeName;
    }
    exports2.registerDefaultLoadBalancerType = registerDefaultLoadBalancerType;
    function createLoadBalancer(config, channelControlHelper) {
      const typeName = config.getLoadBalancerName();
      if (typeName in registeredLoadBalancerTypes) {
        return new registeredLoadBalancerTypes[typeName].LoadBalancer(channelControlHelper);
      } else {
        return null;
      }
    }
    exports2.createLoadBalancer = createLoadBalancer;
    function isLoadBalancerNameRegistered(typeName) {
      return typeName in registeredLoadBalancerTypes;
    }
    exports2.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
    function getFirstUsableConfig(configs, fallbackTodefault = false) {
      for (const config of configs) {
        if (config.getLoadBalancerName() in registeredLoadBalancerTypes) {
          return config;
        }
      }
      if (fallbackTodefault) {
        if (defaultLoadBalancerType) {
          return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig();
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    exports2.getFirstUsableConfig = getFirstUsableConfig;
    function validateLoadBalancingConfig(obj) {
      if (!(obj !== null && typeof obj === "object")) {
        throw new Error("Load balancing config must be an object");
      }
      const keys = Object.keys(obj);
      if (keys.length !== 1) {
        throw new Error("Provided load balancing config has multiple conflicting entries");
      }
      const typeName = keys[0];
      if (typeName in registeredLoadBalancerTypes) {
        return registeredLoadBalancerTypes[typeName].LoadBalancingConfig.createFromJson(obj[typeName]);
      } else {
        throw new Error(`Unrecognized load balancing config name ${typeName}`);
      }
    }
    exports2.validateLoadBalancingConfig = validateLoadBalancingConfig;
  }
});

// node_modules/@grpc/grpc-js/build/src/service-config.js
var require_service_config = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/service-config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractAndSelectServiceConfig = exports2.validateServiceConfig = void 0;
    var os = require("os");
    var load_balancer_1 = require_load_balancer();
    var TIMEOUT_REGEX = /^\d+(\.\d{1,9})?s$/;
    var CLIENT_LANGUAGE_STRING = "node";
    function validateName(obj) {
      if (!("service" in obj) || typeof obj.service !== "string") {
        throw new Error("Invalid method config name: invalid service");
      }
      const result = {
        service: obj.service
      };
      if ("method" in obj) {
        if (typeof obj.method === "string") {
          result.method = obj.method;
        } else {
          throw new Error("Invalid method config name: invalid method");
        }
      }
      return result;
    }
    function validateMethodConfig(obj) {
      var _a;
      const result = {
        name: []
      };
      if (!("name" in obj) || !Array.isArray(obj.name)) {
        throw new Error("Invalid method config: invalid name array");
      }
      for (const name4 of obj.name) {
        result.name.push(validateName(name4));
      }
      if ("waitForReady" in obj) {
        if (typeof obj.waitForReady !== "boolean") {
          throw new Error("Invalid method config: invalid waitForReady");
        }
        result.waitForReady = obj.waitForReady;
      }
      if ("timeout" in obj) {
        if (typeof obj.timeout === "object") {
          if (!("seconds" in obj.timeout) || !(typeof obj.timeout.seconds === "number")) {
            throw new Error("Invalid method config: invalid timeout.seconds");
          }
          if (!("nanos" in obj.timeout) || !(typeof obj.timeout.nanos === "number")) {
            throw new Error("Invalid method config: invalid timeout.nanos");
          }
          result.timeout = obj.timeout;
        } else if (typeof obj.timeout === "string" && TIMEOUT_REGEX.test(obj.timeout)) {
          const timeoutParts = obj.timeout.substring(0, obj.timeout.length - 1).split(".");
          result.timeout = {
            seconds: timeoutParts[0] | 0,
            nanos: ((_a = timeoutParts[1]) !== null && _a !== void 0 ? _a : 0) | 0
          };
        } else {
          throw new Error("Invalid method config: invalid timeout");
        }
      }
      if ("maxRequestBytes" in obj) {
        if (typeof obj.maxRequestBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxRequestBytes = obj.maxRequestBytes;
      }
      if ("maxResponseBytes" in obj) {
        if (typeof obj.maxResponseBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxResponseBytes = obj.maxResponseBytes;
      }
      return result;
    }
    function validateServiceConfig(obj) {
      const result = {
        loadBalancingConfig: [],
        methodConfig: []
      };
      if ("loadBalancingPolicy" in obj) {
        if (typeof obj.loadBalancingPolicy === "string") {
          result.loadBalancingPolicy = obj.loadBalancingPolicy;
        } else {
          throw new Error("Invalid service config: invalid loadBalancingPolicy");
        }
      }
      if ("loadBalancingConfig" in obj) {
        if (Array.isArray(obj.loadBalancingConfig)) {
          for (const config of obj.loadBalancingConfig) {
            result.loadBalancingConfig.push(load_balancer_1.validateLoadBalancingConfig(config));
          }
        } else {
          throw new Error("Invalid service config: invalid loadBalancingConfig");
        }
      }
      if ("methodConfig" in obj) {
        if (Array.isArray(obj.methodConfig)) {
          for (const methodConfig of obj.methodConfig) {
            result.methodConfig.push(validateMethodConfig(methodConfig));
          }
        }
      }
      const seenMethodNames = [];
      for (const methodConfig of result.methodConfig) {
        for (const name4 of methodConfig.name) {
          for (const seenName of seenMethodNames) {
            if (name4.service === seenName.service && name4.method === seenName.method) {
              throw new Error(`Invalid service config: duplicate name ${name4.service}/${name4.method}`);
            }
          }
          seenMethodNames.push(name4);
        }
      }
      return result;
    }
    exports2.validateServiceConfig = validateServiceConfig;
    function validateCanaryConfig(obj) {
      if (!("serviceConfig" in obj)) {
        throw new Error("Invalid service config choice: missing service config");
      }
      const result = {
        serviceConfig: validateServiceConfig(obj.serviceConfig)
      };
      if ("clientLanguage" in obj) {
        if (Array.isArray(obj.clientLanguage)) {
          result.clientLanguage = [];
          for (const lang of obj.clientLanguage) {
            if (typeof lang === "string") {
              result.clientLanguage.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientLanguage");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientLanguage");
        }
      }
      if ("clientHostname" in obj) {
        if (Array.isArray(obj.clientHostname)) {
          result.clientHostname = [];
          for (const lang of obj.clientHostname) {
            if (typeof lang === "string") {
              result.clientHostname.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientHostname");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientHostname");
        }
      }
      if ("percentage" in obj) {
        if (typeof obj.percentage === "number" && 0 <= obj.percentage && obj.percentage <= 100) {
          result.percentage = obj.percentage;
        } else {
          throw new Error("Invalid service config choice: invalid percentage");
        }
      }
      const allowedFields = [
        "clientLanguage",
        "percentage",
        "clientHostname",
        "serviceConfig"
      ];
      for (const field in obj) {
        if (!allowedFields.includes(field)) {
          throw new Error(`Invalid service config choice: unexpected field ${field}`);
        }
      }
      return result;
    }
    function validateAndSelectCanaryConfig(obj, percentage) {
      if (!Array.isArray(obj)) {
        throw new Error("Invalid service config list");
      }
      for (const config of obj) {
        const validatedConfig = validateCanaryConfig(config);
        if (typeof validatedConfig.percentage === "number" && percentage > validatedConfig.percentage) {
          continue;
        }
        if (Array.isArray(validatedConfig.clientHostname)) {
          let hostnameMatched = false;
          for (const hostname of validatedConfig.clientHostname) {
            if (hostname === os.hostname()) {
              hostnameMatched = true;
            }
          }
          if (!hostnameMatched) {
            continue;
          }
        }
        if (Array.isArray(validatedConfig.clientLanguage)) {
          let languageMatched = false;
          for (const language of validatedConfig.clientLanguage) {
            if (language === CLIENT_LANGUAGE_STRING) {
              languageMatched = true;
            }
          }
          if (!languageMatched) {
            continue;
          }
        }
        return validatedConfig.serviceConfig;
      }
      throw new Error("No matching service config found");
    }
    function extractAndSelectServiceConfig(txtRecord, percentage) {
      for (const record of txtRecord) {
        if (record.length > 0 && record[0].startsWith("grpc_config=")) {
          const recordString = record.join("").substring("grpc_config=".length);
          const recordJson = JSON.parse(recordString);
          return validateAndSelectCanaryConfig(recordJson, percentage);
        }
      }
      return null;
    }
    exports2.extractAndSelectServiceConfig = extractAndSelectServiceConfig;
  }
});

// node_modules/@grpc/grpc-js/build/src/connectivity-state.js
var require_connectivity_state = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/connectivity-state.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectivityState = void 0;
    var ConnectivityState;
    (function(ConnectivityState2) {
      ConnectivityState2[ConnectivityState2["IDLE"] = 0] = "IDLE";
      ConnectivityState2[ConnectivityState2["CONNECTING"] = 1] = "CONNECTING";
      ConnectivityState2[ConnectivityState2["READY"] = 2] = "READY";
      ConnectivityState2[ConnectivityState2["TRANSIENT_FAILURE"] = 3] = "TRANSIENT_FAILURE";
      ConnectivityState2[ConnectivityState2["SHUTDOWN"] = 4] = "SHUTDOWN";
    })(ConnectivityState = exports2.ConnectivityState || (exports2.ConnectivityState = {}));
  }
});

// node_modules/@grpc/grpc-js/build/src/uri-parser.js
var require_uri_parser = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/uri-parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriToString = exports2.splitHostPort = exports2.parseUri = void 0;
    var URI_REGEX = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
    function parseUri(uriString) {
      const parsedUri = URI_REGEX.exec(uriString);
      if (parsedUri === null) {
        return null;
      }
      return {
        scheme: parsedUri[1],
        authority: parsedUri[2],
        path: parsedUri[3]
      };
    }
    exports2.parseUri = parseUri;
    var NUMBER_REGEX = /^\d+$/;
    function splitHostPort(path) {
      if (path.startsWith("[")) {
        const hostEnd = path.indexOf("]");
        if (hostEnd === -1) {
          return null;
        }
        const host = path.substring(1, hostEnd);
        if (host.indexOf(":") === -1) {
          return null;
        }
        if (path.length > hostEnd + 1) {
          if (path[hostEnd + 1] === ":") {
            const portString = path.substring(hostEnd + 2);
            if (NUMBER_REGEX.test(portString)) {
              return {
                host,
                port: +portString
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return {
            host
          };
        }
      } else {
        const splitPath = path.split(":");
        if (splitPath.length === 2) {
          if (NUMBER_REGEX.test(splitPath[1])) {
            return {
              host: splitPath[0],
              port: +splitPath[1]
            };
          } else {
            return null;
          }
        } else {
          return {
            host: path
          };
        }
      }
    }
    exports2.splitHostPort = splitHostPort;
    function uriToString(uri) {
      let result = "";
      if (uri.scheme !== void 0) {
        result += uri.scheme + ":";
      }
      if (uri.authority !== void 0) {
        result += "//" + uri.authority + "/";
      }
      result += uri.path;
      return result;
    }
    exports2.uriToString = uriToString;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver.js
var require_resolver = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mapUriDefaultScheme = exports2.getDefaultAuthority = exports2.createResolver = exports2.registerDefaultScheme = exports2.registerResolver = void 0;
    var uri_parser_1 = require_uri_parser();
    var registeredResolvers = {};
    var defaultScheme = null;
    function registerResolver(scheme, resolverClass) {
      registeredResolvers[scheme] = resolverClass;
    }
    exports2.registerResolver = registerResolver;
    function registerDefaultScheme(scheme) {
      defaultScheme = scheme;
    }
    exports2.registerDefaultScheme = registerDefaultScheme;
    function createResolver(target, listener, options) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return new registeredResolvers[target.scheme](target, listener, options);
      } else {
        throw new Error(`No resolver could be created for target ${uri_parser_1.uriToString(target)}`);
      }
    }
    exports2.createResolver = createResolver;
    function getDefaultAuthority(target) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return registeredResolvers[target.scheme].getDefaultAuthority(target);
      } else {
        throw new Error(`Invalid target ${uri_parser_1.uriToString(target)}`);
      }
    }
    exports2.getDefaultAuthority = getDefaultAuthority;
    function mapUriDefaultScheme(target) {
      if (target.scheme === void 0 || !(target.scheme in registeredResolvers)) {
        if (defaultScheme !== null) {
          return {
            scheme: defaultScheme,
            authority: void 0,
            path: uri_parser_1.uriToString(target)
          };
        } else {
          return null;
        }
      }
      return target;
    }
    exports2.mapUriDefaultScheme = mapUriDefaultScheme;
  }
});

// node_modules/@grpc/grpc-js/build/src/picker.js
var require_picker = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/picker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueuePicker = exports2.UnavailablePicker = exports2.PickResultType = void 0;
    var metadata_1 = require_metadata();
    var constants_1 = require_constants();
    var PickResultType;
    (function(PickResultType2) {
      PickResultType2[PickResultType2["COMPLETE"] = 0] = "COMPLETE";
      PickResultType2[PickResultType2["QUEUE"] = 1] = "QUEUE";
      PickResultType2[PickResultType2["TRANSIENT_FAILURE"] = 2] = "TRANSIENT_FAILURE";
      PickResultType2[PickResultType2["DROP"] = 3] = "DROP";
    })(PickResultType = exports2.PickResultType || (exports2.PickResultType = {}));
    var UnavailablePicker = class {
      constructor(status) {
        if (status !== void 0) {
          this.status = status;
        } else {
          this.status = {
            code: constants_1.Status.UNAVAILABLE,
            details: "No connection established",
            metadata: new metadata_1.Metadata()
          };
        }
      }
      pick(pickArgs) {
        return {
          pickResultType: PickResultType.TRANSIENT_FAILURE,
          subchannel: null,
          status: this.status,
          extraFilterFactories: [],
          onCallStarted: null
        };
      }
    };
    exports2.UnavailablePicker = UnavailablePicker;
    var QueuePicker = class {
      constructor(loadBalancer) {
        this.loadBalancer = loadBalancer;
        this.calledExitIdle = false;
      }
      pick(pickArgs) {
        if (!this.calledExitIdle) {
          process.nextTick(() => {
            this.loadBalancer.exitIdle();
          });
          this.calledExitIdle = true;
        }
        return {
          pickResultType: PickResultType.QUEUE,
          subchannel: null,
          status: null,
          extraFilterFactories: [],
          onCallStarted: null
        };
      }
    };
    exports2.QueuePicker = QueuePicker;
  }
});

// node_modules/@grpc/grpc-js/build/src/backoff-timeout.js
var require_backoff_timeout = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/backoff-timeout.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackoffTimeout = void 0;
    var INITIAL_BACKOFF_MS = 1e3;
    var BACKOFF_MULTIPLIER = 1.6;
    var MAX_BACKOFF_MS = 12e4;
    var BACKOFF_JITTER = 0.2;
    function uniformRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    var BackoffTimeout = class {
      constructor(callback, options) {
        this.callback = callback;
        this.initialDelay = INITIAL_BACKOFF_MS;
        this.multiplier = BACKOFF_MULTIPLIER;
        this.maxDelay = MAX_BACKOFF_MS;
        this.jitter = BACKOFF_JITTER;
        this.running = false;
        this.hasRef = true;
        if (options) {
          if (options.initialDelay) {
            this.initialDelay = options.initialDelay;
          }
          if (options.multiplier) {
            this.multiplier = options.multiplier;
          }
          if (options.jitter) {
            this.jitter = options.jitter;
          }
          if (options.maxDelay) {
            this.maxDelay = options.maxDelay;
          }
        }
        this.nextDelay = this.initialDelay;
        this.timerId = setTimeout(() => {
        }, 0);
        clearTimeout(this.timerId);
      }
      runOnce() {
        var _a, _b;
        this.running = true;
        this.timerId = setTimeout(() => {
          this.callback();
          this.running = false;
        }, this.nextDelay);
        if (!this.hasRef) {
          (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        const nextBackoff = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
        const jitterMagnitude = nextBackoff * this.jitter;
        this.nextDelay = nextBackoff + uniformRandom(-jitterMagnitude, jitterMagnitude);
      }
      stop() {
        clearTimeout(this.timerId);
        this.running = false;
      }
      reset() {
        this.nextDelay = this.initialDelay;
      }
      isRunning() {
        return this.running;
      }
      ref() {
        var _a, _b;
        this.hasRef = true;
        (_b = (_a = this.timerId).ref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      unref() {
        var _a, _b;
        this.hasRef = false;
        (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    };
    exports2.BackoffTimeout = BackoffTimeout;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js
var require_load_balancer_child_handler = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChildLoadBalancerHandler = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var TYPE_NAME = "child_load_balancer_helper";
    var ChildLoadBalancerHandler = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.currentChild = null;
        this.pendingChild = null;
        this.ChildPolicyHelper = class {
          constructor(parent) {
            this.parent = parent;
            this.child = null;
          }
          createSubchannel(subchannelAddress, subchannelArgs) {
            return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
          }
          updateState(connectivityState, picker) {
            var _a;
            if (this.calledByPendingChild()) {
              if (connectivityState !== connectivity_state_1.ConnectivityState.READY) {
                return;
              }
              (_a = this.parent.currentChild) === null || _a === void 0 ? void 0 : _a.destroy();
              this.parent.currentChild = this.parent.pendingChild;
              this.parent.pendingChild = null;
            } else if (!this.calledByCurrentChild()) {
              return;
            }
            this.parent.channelControlHelper.updateState(connectivityState, picker);
          }
          requestReresolution() {
            var _a;
            const latestChild = (_a = this.parent.pendingChild) !== null && _a !== void 0 ? _a : this.parent.currentChild;
            if (this.child === latestChild) {
              this.parent.channelControlHelper.requestReresolution();
            }
          }
          setChild(newChild) {
            this.child = newChild;
          }
          addChannelzChild(child) {
            this.parent.channelControlHelper.addChannelzChild(child);
          }
          removeChannelzChild(child) {
            this.parent.channelControlHelper.removeChannelzChild(child);
          }
          calledByPendingChild() {
            return this.child === this.parent.pendingChild;
          }
          calledByCurrentChild() {
            return this.child === this.parent.currentChild;
          }
        };
      }
      updateAddressList(addressList, lbConfig, attributes) {
        let childToUpdate;
        if (this.currentChild === null || this.currentChild.getTypeName() !== lbConfig.getLoadBalancerName()) {
          const newHelper = new this.ChildPolicyHelper(this);
          const newChild = load_balancer_1.createLoadBalancer(lbConfig, newHelper);
          newHelper.setChild(newChild);
          if (this.currentChild === null) {
            this.currentChild = newChild;
            childToUpdate = this.currentChild;
          } else {
            if (this.pendingChild) {
              this.pendingChild.destroy();
            }
            this.pendingChild = newChild;
            childToUpdate = this.pendingChild;
          }
        } else {
          if (this.pendingChild === null) {
            childToUpdate = this.currentChild;
          } else {
            childToUpdate = this.pendingChild;
          }
        }
        childToUpdate.updateAddressList(addressList, lbConfig, attributes);
      }
      exitIdle() {
        if (this.currentChild) {
          this.currentChild.resetBackoff();
          if (this.pendingChild) {
            this.pendingChild.resetBackoff();
          }
        }
      }
      resetBackoff() {
        if (this.currentChild) {
          this.currentChild.resetBackoff();
          if (this.pendingChild) {
            this.pendingChild.resetBackoff();
          }
        }
      }
      destroy() {
        if (this.currentChild) {
          this.currentChild.destroy();
          this.currentChild = null;
        }
        if (this.pendingChild) {
          this.pendingChild.destroy();
          this.pendingChild = null;
        }
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.ChildLoadBalancerHandler = ChildLoadBalancerHandler;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js
var require_resolving_load_balancer = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResolvingLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var service_config_1 = require_service_config();
    var connectivity_state_1 = require_connectivity_state();
    var resolver_1 = require_resolver();
    var picker_1 = require_picker();
    var backoff_timeout_1 = require_backoff_timeout();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    var TRACER_NAME = "resolving_load_balancer";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function getDefaultConfigSelector(serviceConfig) {
      return function defaultConfigSelector(methodName, metadata) {
        var _a, _b;
        const splitName = methodName.split("/").filter((x) => x.length > 0);
        const service = (_a = splitName[0]) !== null && _a !== void 0 ? _a : "";
        const method = (_b = splitName[1]) !== null && _b !== void 0 ? _b : "";
        if (serviceConfig && serviceConfig.methodConfig) {
          for (const methodConfig of serviceConfig.methodConfig) {
            for (const name4 of methodConfig.name) {
              if (name4.service === service && (name4.method === void 0 || name4.method === method)) {
                return {
                  methodConfig,
                  pickInformation: {},
                  status: constants_1.Status.OK,
                  dynamicFilterFactories: []
                };
              }
            }
          }
        }
        return {
          methodConfig: { name: [] },
          pickInformation: {},
          status: constants_1.Status.OK,
          dynamicFilterFactories: []
        };
      };
    }
    var ResolvingLoadBalancer = class {
      constructor(target, channelControlHelper, channelOptions, onSuccessfulResolution, onFailedResolution) {
        this.target = target;
        this.channelControlHelper = channelControlHelper;
        this.channelOptions = channelOptions;
        this.onSuccessfulResolution = onSuccessfulResolution;
        this.onFailedResolution = onFailedResolution;
        this.latestChildState = connectivity_state_1.ConnectivityState.IDLE;
        this.latestChildPicker = new picker_1.QueuePicker(this);
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.previousServiceConfig = null;
        this.continueResolving = false;
        if (channelOptions["grpc.service_config"]) {
          this.defaultServiceConfig = service_config_1.validateServiceConfig(JSON.parse(channelOptions["grpc.service_config"]));
        } else {
          this.defaultServiceConfig = {
            loadBalancingConfig: [],
            methodConfig: []
          };
        }
        this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        this.childLoadBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
          createSubchannel: channelControlHelper.createSubchannel.bind(channelControlHelper),
          requestReresolution: () => {
            if (this.backoffTimeout.isRunning()) {
              this.continueResolving = true;
            } else {
              this.updateResolution();
            }
          },
          updateState: (newState, picker) => {
            this.latestChildState = newState;
            this.latestChildPicker = picker;
            this.updateState(newState, picker);
          },
          addChannelzChild: channelControlHelper.addChannelzChild.bind(channelControlHelper),
          removeChannelzChild: channelControlHelper.removeChannelzChild.bind(channelControlHelper)
        });
        this.innerResolver = resolver_1.createResolver(target, {
          onSuccessfulResolution: (addressList, serviceConfig, serviceConfigError, configSelector, attributes) => {
            var _a;
            let workingServiceConfig = null;
            if (serviceConfig === null) {
              if (serviceConfigError === null) {
                this.previousServiceConfig = null;
                workingServiceConfig = this.defaultServiceConfig;
              } else {
                if (this.previousServiceConfig === null) {
                  this.handleResolutionFailure(serviceConfigError);
                } else {
                  workingServiceConfig = this.previousServiceConfig;
                }
              }
            } else {
              workingServiceConfig = serviceConfig;
              this.previousServiceConfig = serviceConfig;
            }
            const workingConfigList = (_a = workingServiceConfig === null || workingServiceConfig === void 0 ? void 0 : workingServiceConfig.loadBalancingConfig) !== null && _a !== void 0 ? _a : [];
            const loadBalancingConfig = load_balancer_1.getFirstUsableConfig(workingConfigList, true);
            if (loadBalancingConfig === null) {
              this.handleResolutionFailure({
                code: constants_1.Status.UNAVAILABLE,
                details: "All load balancer options in service config are not compatible",
                metadata: new metadata_1.Metadata()
              });
              return;
            }
            this.childLoadBalancer.updateAddressList(addressList, loadBalancingConfig, attributes);
            const finalServiceConfig = workingServiceConfig !== null && workingServiceConfig !== void 0 ? workingServiceConfig : this.defaultServiceConfig;
            this.onSuccessfulResolution(configSelector !== null && configSelector !== void 0 ? configSelector : getDefaultConfigSelector(finalServiceConfig));
          },
          onError: (error) => {
            this.handleResolutionFailure(error);
          }
        }, channelOptions);
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          if (this.continueResolving) {
            this.updateResolution();
            this.continueResolving = false;
          } else {
            this.updateState(this.latestChildState, this.latestChildPicker);
          }
        });
        this.backoffTimeout.unref();
      }
      updateResolution() {
        this.innerResolver.updateResolution();
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE) {
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        }
      }
      updateState(connectivityState, picker) {
        trace(uri_parser_1.uriToString(this.target) + " " + connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[connectivityState]);
        if (connectivityState === connectivity_state_1.ConnectivityState.IDLE) {
          picker = new picker_1.QueuePicker(this);
        }
        this.currentState = connectivityState;
        this.channelControlHelper.updateState(connectivityState, picker);
      }
      handleResolutionFailure(error) {
        if (this.latestChildState === connectivity_state_1.ConnectivityState.IDLE) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(error));
          this.onFailedResolution(error);
        }
        this.backoffTimeout.runOnce();
      }
      exitIdle() {
        this.childLoadBalancer.exitIdle();
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE) {
          if (this.backoffTimeout.isRunning()) {
            this.continueResolving = true;
          } else {
            this.updateResolution();
          }
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        }
      }
      updateAddressList(addressList, lbConfig) {
        throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
      }
      resetBackoff() {
        this.backoffTimeout.reset();
        this.childLoadBalancer.resetBackoff();
      }
      destroy() {
        this.childLoadBalancer.destroy();
        this.innerResolver.destroy();
        this.updateState(connectivity_state_1.ConnectivityState.SHUTDOWN, new picker_1.UnavailablePicker());
      }
      getTypeName() {
        return "resolving_load_balancer";
      }
    };
    exports2.ResolvingLoadBalancer = ResolvingLoadBalancer;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel-options.js
var require_channel_options = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.channelOptionsEqual = exports2.recognizedOptions = void 0;
    exports2.recognizedOptions = {
      "grpc.ssl_target_name_override": true,
      "grpc.primary_user_agent": true,
      "grpc.secondary_user_agent": true,
      "grpc.default_authority": true,
      "grpc.keepalive_time_ms": true,
      "grpc.keepalive_timeout_ms": true,
      "grpc.keepalive_permit_without_calls": true,
      "grpc.service_config": true,
      "grpc.max_concurrent_streams": true,
      "grpc.initial_reconnect_backoff_ms": true,
      "grpc.max_reconnect_backoff_ms": true,
      "grpc.use_local_subchannel_pool": true,
      "grpc.max_send_message_length": true,
      "grpc.max_receive_message_length": true,
      "grpc.enable_http_proxy": true,
      "grpc.enable_channelz": true,
      "grpc-node.max_session_memory": true
    };
    function channelOptionsEqual(options1, options2) {
      const keys1 = Object.keys(options1).sort();
      const keys2 = Object.keys(options2).sort();
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let i = 0; i < keys1.length; i += 1) {
        if (keys1[i] !== keys2[i]) {
          return false;
        }
        if (options1[keys1[i]] !== options2[keys2[i]]) {
          return false;
        }
      }
      return true;
    }
    exports2.channelOptionsEqual = channelOptionsEqual;
  }
});

// node_modules/@grpc/grpc-js/build/src/subchannel-address.js
var require_subchannel_address = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/subchannel-address.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringToSubchannelAddress = exports2.subchannelAddressToString = exports2.subchannelAddressEqual = exports2.isTcpSubchannelAddress = void 0;
    var net_1 = require("net");
    function isTcpSubchannelAddress(address) {
      return "port" in address;
    }
    exports2.isTcpSubchannelAddress = isTcpSubchannelAddress;
    function subchannelAddressEqual(address1, address2) {
      if (isTcpSubchannelAddress(address1)) {
        return isTcpSubchannelAddress(address2) && address1.host === address2.host && address1.port === address2.port;
      } else {
        return !isTcpSubchannelAddress(address2) && address1.path === address2.path;
      }
    }
    exports2.subchannelAddressEqual = subchannelAddressEqual;
    function subchannelAddressToString(address) {
      if (isTcpSubchannelAddress(address)) {
        return address.host + ":" + address.port;
      } else {
        return address.path;
      }
    }
    exports2.subchannelAddressToString = subchannelAddressToString;
    var DEFAULT_PORT = 443;
    function stringToSubchannelAddress(addressString, port) {
      if (net_1.isIP(addressString)) {
        return {
          host: addressString,
          port: port !== null && port !== void 0 ? port : DEFAULT_PORT
        };
      } else {
        return {
          path: addressString
        };
      }
    }
    exports2.stringToSubchannelAddress = stringToSubchannelAddress;
  }
});

// node_modules/@grpc/grpc-js/build/src/http_proxy.js
var require_http_proxy = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/http_proxy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getProxiedConnection = exports2.mapProxyName = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var resolver_1 = require_resolver();
    var http = require("http");
    var tls = require("tls");
    var logging = require_logging();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var url_1 = require("url");
    var TRACER_NAME = "proxy";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function getProxyInfo() {
      let proxyEnv = "";
      let envVar = "";
      if (process.env.grpc_proxy) {
        envVar = "grpc_proxy";
        proxyEnv = process.env.grpc_proxy;
      } else if (process.env.https_proxy) {
        envVar = "https_proxy";
        proxyEnv = process.env.https_proxy;
      } else if (process.env.http_proxy) {
        envVar = "http_proxy";
        proxyEnv = process.env.http_proxy;
      } else {
        return {};
      }
      let proxyUrl;
      try {
        proxyUrl = new url_1.URL(proxyEnv);
      } catch (e) {
        logging_1.log(constants_1.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
        return {};
      }
      if (proxyUrl.protocol !== "http:") {
        logging_1.log(constants_1.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
        return {};
      }
      let userCred = null;
      if (proxyUrl.username) {
        if (proxyUrl.password) {
          logging_1.log(constants_1.LogVerbosity.INFO, "userinfo found in proxy URI");
          userCred = `${proxyUrl.username}:${proxyUrl.password}`;
        } else {
          userCred = proxyUrl.username;
        }
      }
      const hostname = proxyUrl.hostname;
      let port = proxyUrl.port;
      if (port === "") {
        port = "80";
      }
      const result = {
        address: `${hostname}:${port}`
      };
      if (userCred) {
        result.creds = userCred;
      }
      trace("Proxy server " + result.address + " set by environment variable " + envVar);
      return result;
    }
    function getNoProxyHostList() {
      let noProxyStr = process.env.no_grpc_proxy;
      let envVar = "no_grpc_proxy";
      if (!noProxyStr) {
        noProxyStr = process.env.no_proxy;
        envVar = "no_proxy";
      }
      if (noProxyStr) {
        trace("No proxy server list set by environment variable " + envVar);
        return noProxyStr.split(",");
      } else {
        return [];
      }
    }
    function mapProxyName(target, options) {
      var _a;
      const noProxyResult = {
        target,
        extraOptions: {}
      };
      if (((_a = options["grpc.enable_http_proxy"]) !== null && _a !== void 0 ? _a : 1) === 0) {
        return noProxyResult;
      }
      const proxyInfo = getProxyInfo();
      if (!proxyInfo.address) {
        return noProxyResult;
      }
      const hostPort = uri_parser_1.splitHostPort(target.path);
      if (!hostPort) {
        return noProxyResult;
      }
      const serverHost = hostPort.host;
      for (const host of getNoProxyHostList()) {
        if (host === serverHost) {
          trace("Not using proxy for target in no_proxy list: " + uri_parser_1.uriToString(target));
          return noProxyResult;
        }
      }
      const extraOptions = {
        "grpc.http_connect_target": uri_parser_1.uriToString(target)
      };
      if (proxyInfo.creds) {
        extraOptions["grpc.http_connect_creds"] = proxyInfo.creds;
      }
      return {
        target: {
          scheme: "dns",
          path: proxyInfo.address
        },
        extraOptions
      };
    }
    exports2.mapProxyName = mapProxyName;
    function getProxiedConnection(address, channelOptions, connectionOptions) {
      if (!("grpc.http_connect_target" in channelOptions)) {
        return Promise.resolve({});
      }
      const realTarget = channelOptions["grpc.http_connect_target"];
      const parsedTarget = uri_parser_1.parseUri(realTarget);
      if (parsedTarget === null) {
        return Promise.resolve({});
      }
      const options = {
        method: "CONNECT",
        path: parsedTarget.path
      };
      const headers = {
        Host: parsedTarget.path
      };
      if (subchannel_address_1.isTcpSubchannelAddress(address)) {
        options.host = address.host;
        options.port = address.port;
      } else {
        options.socketPath = address.path;
      }
      if ("grpc.http_connect_creds" in channelOptions) {
        headers["Proxy-Authorization"] = "Basic " + Buffer.from(channelOptions["grpc.http_connect_creds"]).toString("base64");
      }
      options.headers = headers;
      const proxyAddressString = subchannel_address_1.subchannelAddressToString(address);
      trace("Using proxy " + proxyAddressString + " to connect to " + options.path);
      return new Promise((resolve2, reject) => {
        const request = http.request(options);
        request.once("connect", (res, socket, head) => {
          var _a;
          request.removeAllListeners();
          socket.removeAllListeners();
          if (res.statusCode === 200) {
            trace("Successfully connected to " + options.path + " through proxy " + proxyAddressString);
            if ("secureContext" in connectionOptions) {
              const targetPath = resolver_1.getDefaultAuthority(parsedTarget);
              const hostPort = uri_parser_1.splitHostPort(targetPath);
              const remoteHost = (_a = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _a !== void 0 ? _a : targetPath;
              const cts = tls.connect(Object.assign({ host: remoteHost, servername: remoteHost, socket }, connectionOptions), () => {
                trace("Successfully established a TLS connection to " + options.path + " through proxy " + proxyAddressString);
                resolve2({ socket: cts, realTarget: parsedTarget });
              });
              cts.on("error", (error) => {
                trace("Failed to establish a TLS connection to " + options.path + " through proxy " + proxyAddressString + " with error " + error.message);
                reject();
              });
            } else {
              trace("Successfully established a plaintext connection to " + options.path + " through proxy " + proxyAddressString);
              resolve2({
                socket,
                realTarget: parsedTarget
              });
            }
          } else {
            logging_1.log(constants_1.LogVerbosity.ERROR, "Failed to connect to " + options.path + " through proxy " + proxyAddressString + " with status " + res.statusCode);
            reject();
          }
        });
        request.once("error", (err) => {
          request.removeAllListeners();
          logging_1.log(constants_1.LogVerbosity.ERROR, "Failed to connect to proxy " + proxyAddressString + " with error " + err.message);
          reject();
        });
        request.end();
      });
    }
    exports2.getProxiedConnection = getProxiedConnection;
  }
});

// node_modules/@grpc/grpc-js/build/src/admin.js
var require_admin = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/admin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addAdminServicesToServer = exports2.registerAdminService = void 0;
    var registeredAdminServices = [];
    function registerAdminService(getServiceDefinition, getHandlers) {
      registeredAdminServices.push({ getServiceDefinition, getHandlers });
    }
    exports2.registerAdminService = registerAdminService;
    function addAdminServicesToServer(server) {
      for (const { getServiceDefinition, getHandlers } of registeredAdminServices) {
        server.addService(getServiceDefinition(), getHandlers());
      }
    }
    exports2.addAdminServicesToServer = addAdminServicesToServer;
  }
});

// node_modules/@grpc/grpc-js/build/src/call.js
var require_call = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClientDuplexStreamImpl = exports2.ClientWritableStreamImpl = exports2.ClientReadableStreamImpl = exports2.ClientUnaryCallImpl = exports2.callErrorFromStatus = void 0;
    var events_1 = require("events");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    function callErrorFromStatus(status) {
      const message = `${status.code} ${constants_1.Status[status.code]}: ${status.details}`;
      return Object.assign(new Error(message), status);
    }
    exports2.callErrorFromStatus = callErrorFromStatus;
    var ClientUnaryCallImpl = class extends events_1.EventEmitter {
      constructor() {
        super();
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
    };
    exports2.ClientUnaryCallImpl = ClientUnaryCallImpl;
    var ClientReadableStreamImpl = class extends stream_1.Readable {
      constructor(deserialize) {
        super({ objectMode: true });
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
    };
    exports2.ClientReadableStreamImpl = ClientReadableStreamImpl;
    var ClientWritableStreamImpl = class extends stream_1.Writable {
      constructor(serialize) {
        super({ objectMode: true });
        this.serialize = serialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientWritableStreamImpl = ClientWritableStreamImpl;
    var ClientDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(serialize, deserialize) {
        super({ objectMode: true });
        this.serialize = serialize;
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientDuplexStreamImpl = ClientDuplexStreamImpl;
  }
});

// node_modules/@grpc/grpc-js/build/src/client-interceptors.js
var require_client_interceptors = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/client-interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getInterceptingCall = exports2.InterceptingCall = exports2.RequesterBuilder = exports2.ListenerBuilder = exports2.InterceptorConfigurationError = void 0;
    var metadata_1 = require_metadata();
    var call_stream_1 = require_call_stream();
    var constants_1 = require_constants();
    var InterceptorConfigurationError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "InterceptorConfigurationError";
        Error.captureStackTrace(this, InterceptorConfigurationError);
      }
    };
    exports2.InterceptorConfigurationError = InterceptorConfigurationError;
    var ListenerBuilder = class {
      constructor() {
        this.metadata = void 0;
        this.message = void 0;
        this.status = void 0;
      }
      withOnReceiveMetadata(onReceiveMetadata) {
        this.metadata = onReceiveMetadata;
        return this;
      }
      withOnReceiveMessage(onReceiveMessage) {
        this.message = onReceiveMessage;
        return this;
      }
      withOnReceiveStatus(onReceiveStatus) {
        this.status = onReceiveStatus;
        return this;
      }
      build() {
        return {
          onReceiveMetadata: this.metadata,
          onReceiveMessage: this.message,
          onReceiveStatus: this.status
        };
      }
    };
    exports2.ListenerBuilder = ListenerBuilder;
    var RequesterBuilder = class {
      constructor() {
        this.start = void 0;
        this.message = void 0;
        this.halfClose = void 0;
        this.cancel = void 0;
      }
      withStart(start) {
        this.start = start;
        return this;
      }
      withSendMessage(sendMessage) {
        this.message = sendMessage;
        return this;
      }
      withHalfClose(halfClose) {
        this.halfClose = halfClose;
        return this;
      }
      withCancel(cancel) {
        this.cancel = cancel;
        return this;
      }
      build() {
        return {
          start: this.start,
          sendMessage: this.message,
          halfClose: this.halfClose,
          cancel: this.cancel
        };
      }
    };
    exports2.RequesterBuilder = RequesterBuilder;
    var defaultListener = {
      onReceiveMetadata: (metadata, next) => {
        next(metadata);
      },
      onReceiveMessage: (message, next) => {
        next(message);
      },
      onReceiveStatus: (status, next) => {
        next(status);
      }
    };
    var defaultRequester = {
      start: (metadata, listener, next) => {
        next(metadata, listener);
      },
      sendMessage: (message, next) => {
        next(message);
      },
      halfClose: (next) => {
        next();
      },
      cancel: (next) => {
        next();
      }
    };
    var InterceptingCall = class {
      constructor(nextCall, requester) {
        var _a, _b, _c, _d;
        this.nextCall = nextCall;
        this.processingMessage = false;
        this.pendingHalfClose = false;
        if (requester) {
          this.requester = {
            start: (_a = requester.start) !== null && _a !== void 0 ? _a : defaultRequester.start,
            sendMessage: (_b = requester.sendMessage) !== null && _b !== void 0 ? _b : defaultRequester.sendMessage,
            halfClose: (_c = requester.halfClose) !== null && _c !== void 0 ? _c : defaultRequester.halfClose,
            cancel: (_d = requester.cancel) !== null && _d !== void 0 ? _d : defaultRequester.cancel
          };
        } else {
          this.requester = defaultRequester;
        }
      }
      cancelWithStatus(status, details) {
        this.requester.cancel(() => {
          this.nextCall.cancelWithStatus(status, details);
        });
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      start(metadata, interceptingListener) {
        var _a, _b, _c, _d, _e, _f;
        const fullInterceptingListener = {
          onReceiveMetadata: (_b = (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(interceptingListener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          onReceiveMessage: (_d = (_c = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _c === void 0 ? void 0 : _c.bind(interceptingListener)) !== null && _d !== void 0 ? _d : (message) => {
          },
          onReceiveStatus: (_f = (_e = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _e === void 0 ? void 0 : _e.bind(interceptingListener)) !== null && _f !== void 0 ? _f : (status) => {
          }
        };
        this.requester.start(metadata, fullInterceptingListener, (md, listener) => {
          var _a2, _b2, _c2;
          let finalInterceptingListener;
          if (call_stream_1.isInterceptingListener(listener)) {
            finalInterceptingListener = listener;
          } else {
            const fullListener = {
              onReceiveMetadata: (_a2 = listener.onReceiveMetadata) !== null && _a2 !== void 0 ? _a2 : defaultListener.onReceiveMetadata,
              onReceiveMessage: (_b2 = listener.onReceiveMessage) !== null && _b2 !== void 0 ? _b2 : defaultListener.onReceiveMessage,
              onReceiveStatus: (_c2 = listener.onReceiveStatus) !== null && _c2 !== void 0 ? _c2 : defaultListener.onReceiveStatus
            };
            finalInterceptingListener = new call_stream_1.InterceptingListenerImpl(fullListener, fullInterceptingListener);
          }
          this.nextCall.start(md, finalInterceptingListener);
        });
      }
      sendMessageWithContext(context, message) {
        this.processingMessage = true;
        this.requester.sendMessage(message, (finalMessage) => {
          this.processingMessage = false;
          this.nextCall.sendMessageWithContext(context, finalMessage);
          if (this.pendingHalfClose) {
            this.nextCall.halfClose();
          }
        });
      }
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      startRead() {
        this.nextCall.startRead();
      }
      halfClose() {
        this.requester.halfClose(() => {
          if (this.processingMessage) {
            this.pendingHalfClose = true;
          } else {
            this.nextCall.halfClose();
          }
        });
      }
      setCredentials(credentials2) {
        this.nextCall.setCredentials(credentials2);
      }
    };
    exports2.InterceptingCall = InterceptingCall;
    function getCall(channel, path, options) {
      var _a, _b;
      const deadline = (_a = options.deadline) !== null && _a !== void 0 ? _a : Infinity;
      const host = options.host;
      const parent = (_b = options.parent) !== null && _b !== void 0 ? _b : null;
      const propagateFlags = options.propagate_flags;
      const credentials2 = options.credentials;
      const call = channel.createCall(path, deadline, host, parent, propagateFlags);
      if (credentials2) {
        call.setCredentials(credentials2);
      }
      return call;
    }
    var BaseInterceptingCall = class {
      constructor(call, methodDefinition) {
        this.call = call;
        this.methodDefinition = methodDefinition;
      }
      cancelWithStatus(status, details) {
        this.call.cancelWithStatus(status, details);
      }
      getPeer() {
        return this.call.getPeer();
      }
      setCredentials(credentials2) {
        this.call.setCredentials(credentials2);
      }
      sendMessageWithContext(context, message) {
        let serialized;
        try {
          serialized = this.methodDefinition.requestSerialize(message);
        } catch (e) {
          this.call.cancelWithStatus(constants_1.Status.INTERNAL, `Request message serialization failure: ${e.message}`);
          return;
        }
        this.call.sendMessageWithContext(context, serialized);
      }
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      start(metadata, interceptingListener) {
        let readError = null;
        this.call.start(metadata, {
          onReceiveMetadata: (metadata2) => {
            var _a;
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, metadata2);
          },
          onReceiveMessage: (message) => {
            var _a;
            let deserialized;
            try {
              deserialized = this.methodDefinition.responseDeserialize(message);
            } catch (e) {
              readError = {
                code: constants_1.Status.INTERNAL,
                details: `Response message parsing error: ${e.message}`,
                metadata: new metadata_1.Metadata()
              };
              this.call.cancelWithStatus(readError.code, readError.details);
              return;
            }
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, deserialized);
          },
          onReceiveStatus: (status) => {
            var _a, _b;
            if (readError) {
              (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, readError);
            } else {
              (_b = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _b === void 0 ? void 0 : _b.call(interceptingListener, status);
            }
          }
        });
      }
      startRead() {
        this.call.startRead();
      }
      halfClose() {
        this.call.halfClose();
      }
    };
    var BaseUnaryInterceptingCall = class extends BaseInterceptingCall {
      constructor(call, methodDefinition) {
        super(call, methodDefinition);
      }
      start(metadata, listener) {
        var _a, _b;
        let receivedMessage = false;
        const wrapperListener = {
          onReceiveMetadata: (_b = (_a = listener === null || listener === void 0 ? void 0 : listener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(listener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          onReceiveMessage: (message) => {
            var _a2;
            receivedMessage = true;
            (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, message);
          },
          onReceiveStatus: (status) => {
            var _a2, _b2;
            if (!receivedMessage) {
              (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, null);
            }
            (_b2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveStatus) === null || _b2 === void 0 ? void 0 : _b2.call(listener, status);
          }
        };
        super.start(metadata, wrapperListener);
        this.call.startRead();
      }
    };
    var BaseStreamingInterceptingCall = class extends BaseInterceptingCall {
    };
    function getBottomInterceptingCall(channel, options, methodDefinition) {
      const call = getCall(channel, methodDefinition.path, options);
      if (methodDefinition.responseStream) {
        return new BaseStreamingInterceptingCall(call, methodDefinition);
      } else {
        return new BaseUnaryInterceptingCall(call, methodDefinition);
      }
    }
    function getInterceptingCall(interceptorArgs, methodDefinition, options, channel) {
      if (interceptorArgs.clientInterceptors.length > 0 && interceptorArgs.clientInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      }
      if (interceptorArgs.callInterceptors.length > 0 && interceptorArgs.callInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
      }
      let interceptors = [];
      if (interceptorArgs.callInterceptors.length > 0 || interceptorArgs.callInterceptorProviders.length > 0) {
        interceptors = [].concat(interceptorArgs.callInterceptors, interceptorArgs.callInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      } else {
        interceptors = [].concat(interceptorArgs.clientInterceptors, interceptorArgs.clientInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      }
      const interceptorOptions = Object.assign({}, options, {
        method_definition: methodDefinition
      });
      const getCall2 = interceptors.reduceRight((nextCall, nextInterceptor) => {
        return (currentOptions) => nextInterceptor(currentOptions, nextCall);
      }, (finalOptions) => getBottomInterceptingCall(channel, finalOptions, methodDefinition));
      return getCall2(interceptorOptions);
    }
    exports2.getInterceptingCall = getInterceptingCall;
  }
});

// node_modules/@grpc/grpc-js/build/src/client.js
var require_client = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Client = void 0;
    var call_1 = require_call();
    var channel_1 = require_channel();
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var client_interceptors_1 = require_client_interceptors();
    var CHANNEL_SYMBOL = Symbol();
    var INTERCEPTOR_SYMBOL = Symbol();
    var INTERCEPTOR_PROVIDER_SYMBOL = Symbol();
    var CALL_INVOCATION_TRANSFORMER_SYMBOL = Symbol();
    function isFunction(arg) {
      return typeof arg === "function";
    }
    var Client = class {
      constructor(address, credentials2, options = {}) {
        var _a, _b;
        options = Object.assign({}, options);
        this[INTERCEPTOR_SYMBOL] = (_a = options.interceptors) !== null && _a !== void 0 ? _a : [];
        delete options.interceptors;
        this[INTERCEPTOR_PROVIDER_SYMBOL] = (_b = options.interceptor_providers) !== null && _b !== void 0 ? _b : [];
        delete options.interceptor_providers;
        if (this[INTERCEPTOR_SYMBOL].length > 0 && this[INTERCEPTOR_PROVIDER_SYMBOL].length > 0) {
          throw new Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
        }
        this[CALL_INVOCATION_TRANSFORMER_SYMBOL] = options.callInvocationTransformer;
        delete options.callInvocationTransformer;
        if (options.channelOverride) {
          this[CHANNEL_SYMBOL] = options.channelOverride;
        } else if (options.channelFactoryOverride) {
          const channelFactoryOverride = options.channelFactoryOverride;
          delete options.channelFactoryOverride;
          this[CHANNEL_SYMBOL] = channelFactoryOverride(address, credentials2, options);
        } else {
          this[CHANNEL_SYMBOL] = new channel_1.ChannelImplementation(address, credentials2, options);
        }
      }
      close() {
        this[CHANNEL_SYMBOL].close();
      }
      getChannel() {
        return this[CHANNEL_SYMBOL];
      }
      waitForReady(deadline, callback) {
        const checkState = (err) => {
          if (err) {
            callback(new Error("Failed to connect before the deadline"));
            return;
          }
          let newState;
          try {
            newState = this[CHANNEL_SYMBOL].getConnectivityState(true);
          } catch (e) {
            callback(new Error("The channel has been closed"));
            return;
          }
          if (newState === connectivity_state_1.ConnectivityState.READY) {
            callback();
          } else {
            try {
              this[CHANNEL_SYMBOL].watchConnectivityState(newState, deadline, checkState);
            } catch (e) {
              callback(new Error("The channel has been closed"));
            }
          }
        };
        setImmediate(checkState);
      }
      checkOptionalUnaryResponseArguments(arg1, arg2, arg3) {
        if (isFunction(arg1)) {
          return { metadata: new metadata_1.Metadata(), options: {}, callback: arg1 };
        } else if (isFunction(arg2)) {
          if (arg1 instanceof metadata_1.Metadata) {
            return { metadata: arg1, options: {}, callback: arg2 };
          } else {
            return { metadata: new metadata_1.Metadata(), options: arg1, callback: arg2 };
          }
        } else {
          if (!(arg1 instanceof metadata_1.Metadata && arg2 instanceof Object && isFunction(arg3))) {
            throw new Error("Incorrect arguments passed");
          }
          return { metadata: arg1, options: arg2, callback: arg3 };
        }
      }
      makeUnaryRequest(method, serialize, deserialize, argument, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientUnaryCallImpl(),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let responseMessage = null;
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status.code === constants_1.Status.OK) {
              callProperties.callback(null, responseMessage);
            } else {
              callProperties.callback(call_1.callErrorFromStatus(status));
            }
            emitter.emit("status", status);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return emitter;
      }
      makeClientStreamRequest(method, serialize, deserialize, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientWritableStreamImpl(serialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let responseMessage = null;
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status.code === constants_1.Status.OK) {
              callProperties.callback(null, responseMessage);
            } else {
              callProperties.callback(call_1.callErrorFromStatus(status));
            }
            emitter.emit("status", status);
          }
        });
        return emitter;
      }
      checkMetadataAndOptions(arg1, arg2) {
        let metadata;
        let options;
        if (arg1 instanceof metadata_1.Metadata) {
          metadata = arg1;
          if (arg2) {
            options = arg2;
          } else {
            options = {};
          }
        } else {
          if (arg1) {
            options = arg1;
          } else {
            options = {};
          }
          metadata = new metadata_1.Metadata();
        }
        return { metadata, options };
      }
      makeServerStreamRequest(method, serialize, deserialize, argument, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientReadableStreamImpl(deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status.code !== constants_1.Status.OK) {
              stream.emit("error", call_1.callErrorFromStatus(status));
            }
            stream.emit("status", status);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return stream;
      }
      makeBidiStreamRequest(method, serialize, deserialize, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientDuplexStreamImpl(serialize, deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = client_interceptors_1.getInterceptingCall(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        if (callProperties.callOptions.credentials) {
          call.setCredentials(callProperties.callOptions.credentials);
        }
        let receivedStatus = false;
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status.code !== constants_1.Status.OK) {
              stream.emit("error", call_1.callErrorFromStatus(status));
            }
            stream.emit("status", status);
          }
        });
        return stream;
      }
    };
    exports2.Client = Client;
  }
});

// node_modules/@grpc/grpc-js/build/src/make-client.js
var require_make_client = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/make-client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadPackageDefinition = exports2.makeClientConstructor = void 0;
    var client_1 = require_client();
    var requesterFuncs = {
      unary: client_1.Client.prototype.makeUnaryRequest,
      server_stream: client_1.Client.prototype.makeServerStreamRequest,
      client_stream: client_1.Client.prototype.makeClientStreamRequest,
      bidi: client_1.Client.prototype.makeBidiStreamRequest
    };
    function isPrototypePolluted(key) {
      return ["__proto__", "prototype", "constructor"].includes(key);
    }
    function makeClientConstructor(methods, serviceName, classOptions) {
      if (!classOptions) {
        classOptions = {};
      }
      class ServiceClientImpl extends client_1.Client {
      }
      Object.keys(methods).forEach((name4) => {
        if (isPrototypePolluted(name4)) {
          return;
        }
        const attrs = methods[name4];
        let methodType;
        if (typeof name4 === "string" && name4.charAt(0) === "$") {
          throw new Error("Method names cannot start with $");
        }
        if (attrs.requestStream) {
          if (attrs.responseStream) {
            methodType = "bidi";
          } else {
            methodType = "client_stream";
          }
        } else {
          if (attrs.responseStream) {
            methodType = "server_stream";
          } else {
            methodType = "unary";
          }
        }
        const serialize = attrs.requestSerialize;
        const deserialize = attrs.responseDeserialize;
        const methodFunc = partial(requesterFuncs[methodType], attrs.path, serialize, deserialize);
        ServiceClientImpl.prototype[name4] = methodFunc;
        Object.assign(ServiceClientImpl.prototype[name4], attrs);
        if (attrs.originalName && !isPrototypePolluted(attrs.originalName)) {
          ServiceClientImpl.prototype[attrs.originalName] = ServiceClientImpl.prototype[name4];
        }
      });
      ServiceClientImpl.service = methods;
      return ServiceClientImpl;
    }
    exports2.makeClientConstructor = makeClientConstructor;
    function partial(fn, path, serialize, deserialize) {
      return function(...args) {
        return fn.call(this, path, serialize, deserialize, ...args);
      };
    }
    function isProtobufTypeDefinition(obj) {
      return "format" in obj;
    }
    function loadPackageDefinition2(packageDef) {
      const result = {};
      for (const serviceFqn in packageDef) {
        if (Object.prototype.hasOwnProperty.call(packageDef, serviceFqn)) {
          const service = packageDef[serviceFqn];
          const nameComponents = serviceFqn.split(".");
          if (nameComponents.some((comp) => isPrototypePolluted(comp))) {
            continue;
          }
          const serviceName = nameComponents[nameComponents.length - 1];
          let current = result;
          for (const packageName of nameComponents.slice(0, -1)) {
            if (!current[packageName]) {
              current[packageName] = {};
            }
            current = current[packageName];
          }
          if (isProtobufTypeDefinition(service)) {
            current[serviceName] = service;
          } else {
            current[serviceName] = makeClientConstructor(service, serviceName, {});
          }
        }
      }
      return result;
    }
    exports2.loadPackageDefinition = loadPackageDefinition2;
  }
});

// node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.camelcase/index.js"(exports2, module3) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module3.exports = camelCase;
  }
});

// node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS({
  "node_modules/@protobufjs/aspromise/index.js"(exports2, module3) {
    "use strict";
    module3.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve2, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve2.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }
});

// node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS({
  "node_modules/@protobufjs/base64/index.js"(exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (var i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }
});

// node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS({
  "node_modules/@protobufjs/eventemitter/index.js"(exports2, module3) {
    "use strict";
    module3.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = {};
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === void 0)
        this._listeners = {};
      else {
        if (fn === void 0)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }
});

// node_modules/@protobufjs/float/index.js
var require_float = __commonJS({
  "node_modules/@protobufjs/float/index.js"(exports2, module3) {
    "use strict";
    module3.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined")
        (function() {
          var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
          function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
          }
          function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
          }
          exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
          exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
          function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
          }
          function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
          }
          exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
          exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
        })();
      else
        (function() {
          function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0)
              writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos);
            else if (isNaN(val))
              writeUint(2143289344, buf, pos);
            else if (val > 34028234663852886e22)
              writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 11754943508222875e-54)
              writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
            else {
              var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
              writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
          }
          exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
          exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
          function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
          }
          exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
          exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
        })();
      if (typeof Float64Array !== "undefined")
        (function() {
          var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
          function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
          }
          function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
          }
          exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
          exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
          function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
          }
          function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
          }
          exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
          exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
        })();
      else
        (function() {
          function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0) {
              writeUint(0, buf, pos + off0);
              writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
              writeUint(0, buf, pos + off0);
              writeUint(2146959360, buf, pos + off1);
            } else if (val > 17976931348623157e292) {
              writeUint(0, buf, pos + off0);
              writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
              var mantissa;
              if (val < 22250738585072014e-324) {
                mantissa = val / 5e-324;
                writeUint(mantissa >>> 0, buf, pos + off0);
                writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
              } else {
                var exponent = Math.floor(Math.log(val) / Math.LN2);
                if (exponent === 1024)
                  exponent = 1023;
                mantissa = val * Math.pow(2, -exponent);
                writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
              }
            }
          }
          exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
          exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
          function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
          }
          exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
          exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
        })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }
});

// node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS({
  "node_modules/@protobufjs/inquire/index.js"(exports, module) {
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length))
          return mod;
      } catch (e) {
      }
      return null;
    }
  }
});

// node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS({
  "node_modules/@protobufjs/utf8/index.js"(exports2) {
    "use strict";
    var utf8 = exports2;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1)
        return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128)
          chunk[i++] = t;
        else if (t > 191 && t < 224)
          chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
          t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (t & 1023);
        } else
          chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }
});

// node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS({
  "node_modules/@protobufjs/pool/index.js"(exports2, module3) {
    "use strict";
    module3.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }
});

// node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS({
  "node_modules/protobufjs/src/util/longbits.js"(exports2, module3) {
    "use strict";
    module3.exports = LongBits;
    var util = require_minimal();
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }
});

// node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS({
  "node_modules/protobufjs/src/util/minimal.js"(exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require_aspromise();
    util.base64 = require_base64();
    util.EventEmitter = require_eventemitter();
    util.float = require_float();
    util.inquire = require_inquire();
    util.utf8 = require_utf8();
    util.pool = require_pool();
    util.LongBits = require_longbits();
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
    util.emptyArray = Object.freeze ? Object.freeze([]) : [];
    util.emptyObject = Object.freeze ? Object.freeze({}) : {};
    util.isInteger = Number.isInteger || function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject2(value) {
      return value && typeof value === "object";
    };
    util.isset = util.isSet = function isSet(obj, prop) {
      var value = obj[prop];
      if (value != null && obj.hasOwnProperty(prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = function() {
      try {
        var Buffer2 = util.inquire("buffer").Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : null;
      } catch (e) {
        return null;
      }
    }();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst, src, ifNotSet) {
      for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === void 0 || !ifNotSet)
          dst[keys[i]] = src[keys[i]];
      return dst;
    }
    util.merge = merge;
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name4) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
      Object.defineProperty(CustomError.prototype, "name", { get: function() {
        return name4;
      } });
      CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
      };
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name4) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name4)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer2 = util.Buffer;
      if (!Buffer2) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer2.allocUnsafe || function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  }
});

// node_modules/protobufjs/src/writer.js
var require_writer = __commonJS({
  "node_modules/protobufjs/src/writer.js"(exports2, module3) {
    "use strict";
    module3.exports = Writer;
    var util = require_minimal();
    var BufferWriter;
    var LongBits = util.LongBits;
    var base64 = util.base64;
    var utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
      }
      while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }
});

// node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS({
  "node_modules/protobufjs/src/writer_buffer.js"(exports2, module3) {
    "use strict";
    module3.exports = BufferWriter;
    var Writer = require_writer();
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require_minimal();
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else
          for (var i = 0; i < val.length; )
            buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }
});

// node_modules/protobufjs/src/reader.js
var require_reader = __commonJS({
  "node_modules/protobufjs/src/reader.js"(exports2, module3) {
    "use strict";
    module3.exports = Reader;
    var util = require_minimal();
    var BufferReader;
    var LongBits = util.LongBits;
    var utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
    Reader.prototype.uint32 = function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    }();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.prototype.skipType = function(wireType) {
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType);
          }
          break;
        case 5:
          this.skip(4);
          break;
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : "toNumber";
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }
});

// node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS({
  "node_modules/protobufjs/src/reader_buffer.js"(exports2, module3) {
    "use strict";
    module3.exports = BufferReader;
    var Reader = require_reader();
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require_minimal();
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }
});

// node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS({
  "node_modules/protobufjs/src/rpc/service.js"(exports2, module3) {
    "use strict";
    module3.exports = Service;
    var util = require_minimal();
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return void 0;
      }
      try {
        return self2.rpcImpl(method, requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
          if (err) {
            self2.emit("error", err, method);
            return callback(err);
          }
          if (response === null) {
            self2.end(true);
            return void 0;
          }
          if (!(response instanceof responseCtor)) {
            try {
              response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
            } catch (err2) {
              self2.emit("error", err2, method);
              return callback(err2);
            }
          }
          self2.emit("data", response, method);
          return callback(null, response);
        });
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return void 0;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }
});

// node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS({
  "node_modules/protobufjs/src/rpc.js"(exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require_service();
  }
});

// node_modules/protobufjs/src/roots.js
var require_roots = __commonJS({
  "node_modules/protobufjs/src/roots.js"(exports2, module3) {
    "use strict";
    module3.exports = {};
  }
});

// node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS({
  "node_modules/protobufjs/src/index-minimal.js"(exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require_writer();
    protobuf.BufferWriter = require_writer_buffer();
    protobuf.Reader = require_reader();
    protobuf.BufferReader = require_reader_buffer();
    protobuf.util = require_minimal();
    protobuf.rpc = require_rpc();
    protobuf.roots = require_roots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }
});

// node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/@protobufjs/codegen/index.js"(exports2, module3) {
    "use strict";
    module3.exports = codegen;
    function codegen(functionParams, functionName) {
      if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = void 0;
      }
      var body = [];
      function Codegen(formatStringOrScope) {
        if (typeof formatStringOrScope !== "string") {
          var source = toString();
          if (codegen.verbose)
            console.log("codegen: " + source);
          source = "return " + source;
          if (formatStringOrScope) {
            var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
            while (scopeOffset < scopeKeys.length) {
              scopeParams[scopeOffset] = scopeKeys[scopeOffset];
              scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
            }
            scopeParams[scopeOffset] = source;
            return Function.apply(null, scopeParams).apply(null, scopeValues);
          }
          return Function(source)();
        }
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while (formatOffset < formatParams.length)
          formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
          var value = formatParams[formatOffset++];
          switch ($1) {
            case "d":
            case "f":
              return String(Number(value));
            case "i":
              return String(Math.floor(value));
            case "j":
              return JSON.stringify(value);
            case "s":
              return String(value);
          }
          return "%";
        });
        if (formatOffset !== formatParams.length)
          throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
      }
      function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
      }
      Codegen.toString = toString;
      return Codegen;
    }
    codegen.verbose = false;
  }
});

// node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/@protobufjs/fetch/index.js"(exports2, module3) {
    "use strict";
    module3.exports = fetch;
    var asPromise = require_aspromise();
    var inquire2 = require_inquire();
    var fs = inquire2("fs");
    function fetch(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (!options)
        options = {};
      if (!callback)
        return asPromise(fetch, this, filename, options);
      if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        });
      return fetch.xhr(filename, options, callback);
    }
    fetch.xhr = function fetch_xhr(filename, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4)
          return void 0;
        if (xhr.status !== 0 && xhr.status !== 200)
          return callback(Error("status " + xhr.status));
        if (options.binary) {
          var buffer = xhr.response;
          if (!buffer) {
            buffer = [];
            for (var i = 0; i < xhr.responseText.length; ++i)
              buffer.push(xhr.responseText.charCodeAt(i) & 255);
          }
          return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
      };
      if (options.binary) {
        if ("overrideMimeType" in xhr)
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
      }
      xhr.open("GET", filename);
      xhr.send();
    };
  }
});

// node_modules/@protobufjs/path/index.js
var require_path = __commonJS({
  "node_modules/@protobufjs/path/index.js"(exports2) {
    "use strict";
    var path = exports2;
    var isAbsolute = path.isAbsolute = function isAbsolute2(path2) {
      return /^(?:\/|\w+:)/.test(path2);
    };
    var normalize = path.normalize = function normalize2(path2) {
      path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
      var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
      if (absolute)
        prefix = parts.shift() + "/";
      for (var i = 0; i < parts.length; ) {
        if (parts[i] === "..") {
          if (i > 0 && parts[i - 1] !== "..")
            parts.splice(--i, 2);
          else if (absolute)
            parts.splice(i, 1);
          else
            ++i;
        } else if (parts[i] === ".")
          parts.splice(i, 1);
        else
          ++i;
      }
      return prefix + parts.join("/");
    };
    path.resolve = function resolve2(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  }
});

// node_modules/protobufjs/src/types.js
var require_types = __commonJS({
  "node_modules/protobufjs/src/types.js"(exports2) {
    "use strict";
    var types = exports2;
    var util = require_util();
    var s = [
      "double",
      "float",
      "int32",
      "uint32",
      "sint32",
      "fixed32",
      "sfixed32",
      "int64",
      "uint64",
      "sint64",
      "fixed64",
      "sfixed64",
      "bool",
      "string",
      "bytes"
    ];
    function bake(values, offset) {
      var i = 0, o = {};
      offset |= 0;
      while (i < values.length)
        o[s[i + offset]] = values[i++];
      return o;
    }
    types.basic = bake([
      1,
      5,
      0,
      0,
      0,
      5,
      5,
      0,
      0,
      0,
      1,
      1,
      0,
      2,
      2
    ]);
    types.defaults = bake([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      false,
      "",
      util.emptyArray,
      null
    ]);
    types.long = bake([
      0,
      0,
      0,
      1,
      1
    ], 7);
    types.mapKey = bake([
      0,
      0,
      0,
      5,
      5,
      0,
      0,
      0,
      1,
      1,
      0,
      2
    ], 2);
    types.packed = bake([
      1,
      5,
      0,
      0,
      0,
      5,
      5,
      0,
      0,
      0,
      1,
      1,
      0
    ]);
  }
});

// node_modules/protobufjs/src/field.js
var require_field = __commonJS({
  "node_modules/protobufjs/src/field.js"(exports2, module3) {
    "use strict";
    module3.exports = Field;
    var ReflectionObject = require_object();
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    var Type;
    var ruleRe = /^required|optional|repeated$/;
    Field.fromJSON = function fromJSON(name4, json) {
      return new Field(name4, json.id, json.type, json.rule, json.extend, json.options, json.comment);
    };
    function Field(name4, id, type, rule, extend, options, comment) {
      if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = void 0;
      } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = void 0;
      }
      ReflectionObject.call(this, name4, options);
      if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");
      if (!util.isString(type))
        throw TypeError("type must be a string");
      if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");
      if (extend !== void 0 && !util.isString(extend))
        throw TypeError("extend must be a string");
      if (rule === "proto3_optional") {
        rule = "optional";
      }
      this.rule = rule && rule !== "optional" ? rule : void 0;
      this.type = type;
      this.id = id;
      this.extend = extend || void 0;
      this.required = rule === "required";
      this.optional = !this.required;
      this.repeated = rule === "repeated";
      this.map = false;
      this.message = null;
      this.partOf = null;
      this.typeDefault = null;
      this.defaultValue = null;
      this.long = util.Long ? types.long[type] !== void 0 : false;
      this.bytes = type === "bytes";
      this.resolvedType = null;
      this.extensionField = null;
      this.declaringField = null;
      this._packed = null;
      this.comment = comment;
    }
    Object.defineProperty(Field.prototype, "packed", {
      get: function() {
        if (this._packed === null)
          this._packed = this.getOption("packed") !== false;
        return this._packed;
      }
    });
    Field.prototype.setOption = function setOption(name4, value, ifNotSet) {
      if (name4 === "packed")
        this._packed = null;
      return ReflectionObject.prototype.setOption.call(this, name4, value, ifNotSet);
    };
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "rule",
        this.rule !== "optional" && this.rule || void 0,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Field.prototype.resolve = function resolve2() {
      if (this.resolved)
        return this;
      if ((this.typeDefault = types.defaults[this.type]) === void 0) {
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
          this.typeDefault = null;
        else
          this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      }
      if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
          this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
      if (this.options) {
        if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
          delete this.options.packed;
        if (!Object.keys(this.options).length)
          this.options = void 0;
      }
      if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
        if (Object.freeze)
          Object.freeze(this.typeDefault);
      } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
          util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
          util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
      }
      if (this.map)
        this.defaultValue = util.emptyObject;
      else if (this.repeated)
        this.defaultValue = util.emptyArray;
      else
        this.defaultValue = this.typeDefault;
      if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;
      return ReflectionObject.prototype.resolve.call(this);
    };
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
      if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;
      else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;
      return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
      };
    };
    Field._configure = function configure(Type_) {
      Type = Type_;
    };
  }
});

// node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS({
  "node_modules/protobufjs/src/oneof.js"(exports2, module3) {
    "use strict";
    module3.exports = OneOf;
    var ReflectionObject = require_object();
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
    var Field = require_field();
    var util = require_util();
    function OneOf(name4, fieldNames, options, comment) {
      if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = void 0;
      }
      ReflectionObject.call(this, name4, options);
      if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");
      this.oneof = fieldNames || [];
      this.fieldsArray = [];
      this.comment = comment;
    }
    OneOf.fromJSON = function fromJSON(name4, json) {
      return new OneOf(name4, json.oneof, json.options, json.comment);
    };
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    function addFieldsToParent(oneof) {
      if (oneof.parent) {
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
          if (!oneof.fieldsArray[i].parent)
            oneof.parent.add(oneof.fieldsArray[i]);
      }
    }
    OneOf.prototype.add = function add(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
      this.oneof.push(field.name);
      this.fieldsArray.push(field);
      field.partOf = this;
      addFieldsToParent(this);
      return this;
    };
    OneOf.prototype.remove = function remove(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      var index = this.fieldsArray.indexOf(field);
      if (index < 0)
        throw Error(field + " is not a member of " + this);
      this.fieldsArray.splice(index, 1);
      index = this.oneof.indexOf(field.name);
      if (index > -1)
        this.oneof.splice(index, 1);
      field.partOf = null;
      return this;
    };
    OneOf.prototype.onAdd = function onAdd(parent) {
      ReflectionObject.prototype.onAdd.call(this, parent);
      var self2 = this;
      for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
          field.partOf = self2;
          self2.fieldsArray.push(field);
        }
      }
      addFieldsToParent(this);
    };
    OneOf.prototype.onRemove = function onRemove(parent) {
      for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
          field.parent.remove(field);
      ReflectionObject.prototype.onRemove.call(this, parent);
    };
    OneOf.d = function decorateOneOf() {
      var fieldNames = new Array(arguments.length), index = 0;
      while (index < arguments.length)
        fieldNames[index] = arguments[index++];
      return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
          get: util.oneOfGetter(fieldNames),
          set: util.oneOfSetter(fieldNames)
        });
      };
    };
  }
});

// node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS({
  "node_modules/protobufjs/src/namespace.js"(exports2, module3) {
    "use strict";
    module3.exports = Namespace;
    var ReflectionObject = require_object();
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
    var Field = require_field();
    var OneOf = require_oneof();
    var util = require_util();
    var Type;
    var Service;
    var Enum;
    Namespace.fromJSON = function fromJSON(name4, json) {
      return new Namespace(name4, json.options).addJSON(json.nested);
    };
    function arrayToJSON(array, toJSONOptions) {
      if (!(array && array.length))
        return void 0;
      var obj = {};
      for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
      return obj;
    }
    Namespace.arrayToJSON = arrayToJSON;
    Namespace.isReservedId = function isReservedId(reserved, id) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
            return true;
      }
      return false;
    };
    Namespace.isReservedName = function isReservedName(reserved, name4) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (reserved[i] === name4)
            return true;
      }
      return false;
    };
    function Namespace(name4, options) {
      ReflectionObject.call(this, name4, options);
      this.nested = void 0;
      this._nestedArray = null;
    }
    function clearCache(namespace) {
      namespace._nestedArray = null;
      return namespace;
    }
    Object.defineProperty(Namespace.prototype, "nestedArray", {
      get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
      }
    });
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
      return util.toObject([
        "options",
        this.options,
        "nested",
        arrayToJSON(this.nestedArray, toJSONOptions)
      ]);
    };
    Namespace.prototype.addJSON = function addJSON(nestedJson) {
      var ns = this;
      if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
          nested = nestedJson[names[i]];
          ns.add((nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
        }
      }
      return this;
    };
    Namespace.prototype.get = function get(name4) {
      return this.nested && this.nested[name4] || null;
    };
    Namespace.prototype.getEnum = function getEnum(name4) {
      if (this.nested && this.nested[name4] instanceof Enum)
        return this.nested[name4].values;
      throw Error("no such enum: " + name4);
    };
    Namespace.prototype.add = function add(object) {
      if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace || object instanceof OneOf))
        throw TypeError("object must be a valid nested object");
      if (!this.nested)
        this.nested = {};
      else {
        var prev = this.get(object.name);
        if (prev) {
          if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
            var nested = prev.nestedArray;
            for (var i = 0; i < nested.length; ++i)
              object.add(nested[i]);
            this.remove(prev);
            if (!this.nested)
              this.nested = {};
            object.setOptions(prev.options, true);
          } else
            throw Error("duplicate name '" + object.name + "' in " + this);
        }
      }
      this.nested[object.name] = object;
      object.onAdd(this);
      return clearCache(this);
    };
    Namespace.prototype.remove = function remove(object) {
      if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
      if (object.parent !== this)
        throw Error(object + " is not a member of " + this);
      delete this.nested[object.name];
      if (!Object.keys(this.nested).length)
        this.nested = void 0;
      object.onRemove(this);
      return clearCache(this);
    };
    Namespace.prototype.define = function define(path, json) {
      if (util.isString(path))
        path = path.split(".");
      else if (!Array.isArray(path))
        throw TypeError("illegal path");
      if (path && path.length && path[0] === "")
        throw Error("path must be relative");
      var ptr = this;
      while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
          ptr = ptr.nested[part];
          if (!(ptr instanceof Namespace))
            throw Error("path conflicts with non-namespace objects");
        } else
          ptr.add(ptr = new Namespace(part));
      }
      if (json)
        ptr.addJSON(json);
      return ptr;
    };
    Namespace.prototype.resolveAll = function resolveAll() {
      var nested = this.nestedArray, i = 0;
      while (i < nested.length)
        if (nested[i] instanceof Namespace)
          nested[i++].resolveAll();
        else
          nested[i++].resolve();
      return this.resolve();
    };
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
      if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = void 0;
      } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [filterTypes];
      if (util.isString(path) && path.length) {
        if (path === ".")
          return this.root;
        path = path.split(".");
      } else if (!path.length)
        return this;
      if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
      var found = this.get(path[0]);
      if (found) {
        if (path.length === 1) {
          if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
            return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
          return found;
      } else
        for (var i = 0; i < this.nestedArray.length; ++i)
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
            return found;
      if (this.parent === null || parentAlreadyChecked)
        return null;
      return this.parent.lookup(path, filterTypes);
    };
    Namespace.prototype.lookupType = function lookupType(path) {
      var found = this.lookup(path, [Type]);
      if (!found)
        throw Error("no such type: " + path);
      return found;
    };
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
      var found = this.lookup(path, [Enum]);
      if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
      var found = this.lookup(path, [Type, Enum]);
      if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupService = function lookupService(path) {
      var found = this.lookup(path, [Service]);
      if (!found)
        throw Error("no such Service '" + path + "' in " + this);
      return found;
    };
    Namespace._configure = function(Type_, Service_, Enum_) {
      Type = Type_;
      Service = Service_;
      Enum = Enum_;
    };
  }
});

// node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS({
  "node_modules/protobufjs/src/mapfield.js"(exports2, module3) {
    "use strict";
    module3.exports = MapField;
    var Field = require_field();
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
    var types = require_types();
    var util = require_util();
    function MapField(name4, id, keyType, type, options, comment) {
      Field.call(this, name4, id, type, void 0, void 0, options, comment);
      if (!util.isString(keyType))
        throw TypeError("keyType must be a string");
      this.keyType = keyType;
      this.resolvedKeyType = null;
      this.map = true;
    }
    MapField.fromJSON = function fromJSON(name4, json) {
      return new MapField(name4, json.id, json.keyType, json.type, json.options, json.comment);
    };
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "keyType",
        this.keyType,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    MapField.prototype.resolve = function resolve2() {
      if (this.resolved)
        return this;
      if (types.mapKey[this.keyType] === void 0)
        throw Error("invalid key type: " + this.keyType);
      return Field.prototype.resolve.call(this);
    };
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
      if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;
      else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;
      return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
      };
    };
  }
});

// node_modules/protobufjs/src/method.js
var require_method = __commonJS({
  "node_modules/protobufjs/src/method.js"(exports2, module3) {
    "use strict";
    module3.exports = Method;
    var ReflectionObject = require_object();
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
    var util = require_util();
    function Method(name4, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
      if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = void 0;
      } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = void 0;
      }
      if (!(type === void 0 || util.isString(type)))
        throw TypeError("type must be a string");
      if (!util.isString(requestType))
        throw TypeError("requestType must be a string");
      if (!util.isString(responseType))
        throw TypeError("responseType must be a string");
      ReflectionObject.call(this, name4, options);
      this.type = type || "rpc";
      this.requestType = requestType;
      this.requestStream = requestStream ? true : void 0;
      this.responseType = responseType;
      this.responseStream = responseStream ? true : void 0;
      this.resolvedRequestType = null;
      this.resolvedResponseType = null;
      this.comment = comment;
      this.parsedOptions = parsedOptions;
    }
    Method.fromJSON = function fromJSON(name4, json) {
      return new Method(name4, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
    };
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "type",
        this.type !== "rpc" && this.type || void 0,
        "requestType",
        this.requestType,
        "requestStream",
        this.requestStream,
        "responseType",
        this.responseType,
        "responseStream",
        this.responseStream,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0,
        "parsedOptions",
        this.parsedOptions
      ]);
    };
    Method.prototype.resolve = function resolve2() {
      if (this.resolved)
        return this;
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return ReflectionObject.prototype.resolve.call(this);
    };
  }
});

// node_modules/protobufjs/src/service.js
var require_service2 = __commonJS({
  "node_modules/protobufjs/src/service.js"(exports2, module3) {
    "use strict";
    module3.exports = Service;
    var Namespace = require_namespace();
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
    var Method = require_method();
    var util = require_util();
    var rpc = require_rpc();
    function Service(name4, options) {
      Namespace.call(this, name4, options);
      this.methods = {};
      this._methodsArray = null;
    }
    Service.fromJSON = function fromJSON(name4, json) {
      var service = new Service(name4, json.options);
      if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
      if (json.nested)
        service.addJSON(json.nested);
      service.comment = json.comment;
      return service;
    };
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "methods",
        Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || {},
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Object.defineProperty(Service.prototype, "methodsArray", {
      get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
      }
    });
    function clearCache(service) {
      service._methodsArray = null;
      return service;
    }
    Service.prototype.get = function get(name4) {
      return this.methods[name4] || Namespace.prototype.get.call(this, name4);
    };
    Service.prototype.resolveAll = function resolveAll() {
      var methods = this.methodsArray;
      for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
      return Namespace.prototype.resolve.call(this);
    };
    Service.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Service.prototype.remove = function remove(object) {
      if (object instanceof Method) {
        if (this.methods[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
      for (var i = 0, method; i < this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
          m: method,
          q: method.resolvedRequestType.ctor,
          s: method.resolvedResponseType.ctor
        });
      }
      return rpcService;
    };
  }
});

// node_modules/protobufjs/src/message.js
var require_message = __commonJS({
  "node_modules/protobufjs/src/message.js"(exports2, module3) {
    "use strict";
    module3.exports = Message;
    var util = require_minimal();
    function Message(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          this[keys[i]] = properties[keys[i]];
    }
    Message.create = function create(properties) {
      return this.$type.create(properties);
    };
    Message.encode = function encode(message, writer) {
      return this.$type.encode(message, writer);
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.$type.encodeDelimited(message, writer);
    };
    Message.decode = function decode(reader) {
      return this.$type.decode(reader);
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      return this.$type.decodeDelimited(reader);
    };
    Message.verify = function verify(message) {
      return this.$type.verify(message);
    };
    Message.fromObject = function fromObject(object) {
      return this.$type.fromObject(object);
    };
    Message.toObject = function toObject(message, options) {
      return this.$type.toObject(message, options);
    };
    Message.prototype.toJSON = function toJSON() {
      return this.$type.toObject(this, util.toJSONOptions);
    };
  }
});

// node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS({
  "node_modules/protobufjs/src/decoder.js"(exports2, module3) {
    "use strict";
    module3.exports = decoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function missing(field) {
      return "missing required '" + field.name + "'";
    }
    function decoder(mtype) {
      var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
        return field2.map;
      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
      if (mtype.group)
        gen("if((t&7)===4)")("break");
      gen("switch(t>>>3){");
      var i = 0;
      for (; i < mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
        gen("case %i:", field.id);
        if (field.map) {
          gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
          if (types.defaults[field.keyType] !== void 0)
            gen("k=%j", types.defaults[field.keyType]);
          else
            gen("k=null");
          if (types.defaults[type] !== void 0)
            gen("value=%j", types.defaults[type]);
          else
            gen("value=null");
          gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
          if (types.basic[type] === void 0)
            gen("value=types[%i].decode(r,r.uint32())", i);
          else
            gen("value=r.%s()", type);
          gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
          if (types.long[field.keyType] !== void 0)
            gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
          else
            gen("%s[k]=value", ref);
        } else if (field.repeated) {
          gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
          if (types.packed[type] !== void 0)
            gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
          if (types.basic[type] === void 0)
            gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
          else
            gen("%s.push(r.%s())", ref, type);
        } else if (types.basic[type] === void 0)
          gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else
          gen("%s=r.%s()", ref, type);
        gen("break");
      }
      gen("default:")("r.skipType(t&7)")("break")("}")("}");
      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required)
          gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
      }
      return gen("return m");
    }
  }
});

// node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS({
  "node_modules/protobufjs/src/verifier.js"(exports2, module3) {
    "use strict";
    module3.exports = verifier;
    var Enum = require_enum();
    var util = require_util();
    function invalid(field, expected) {
      return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }
    function genVerifyValue(gen, field, fieldIndex, ref) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
          for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j)
            gen("case %i:", field.resolvedType.values[keys[j]]);
          gen("break")("}");
        } else {
          gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
        }
      } else {
        switch (field.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
            break;
          case "float":
          case "double":
            gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
            break;
          case "bool":
            gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
            break;
          case "string":
            gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
            break;
          case "bytes":
            gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            break;
        }
      }
      return gen;
    }
    function genVerifyKey(gen, field, ref) {
      switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
          break;
        case "bool":
          gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
          break;
      }
      return gen;
    }
    function verifier(mtype) {
      var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
      var oneofs = mtype.oneofsArray, seenFirstField = {};
      if (oneofs.length)
        gen("var p={}");
      for (var i = 0; i < mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
        if (field.optional)
          gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
        if (field.map) {
          gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
          genVerifyKey(gen, field, "k[i]");
          genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
        } else if (field.repeated) {
          gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
          genVerifyValue(gen, field, i, ref + "[i]")("}");
        } else {
          if (field.partOf) {
            var oneofProp = util.safeProp(field.partOf.name);
            if (seenFirstField[field.partOf.name] === 1)
              gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
            seenFirstField[field.partOf.name] = 1;
            gen("p%s=1", oneofProp);
          }
          genVerifyValue(gen, field, i, ref);
        }
        if (field.optional)
          gen("}");
      }
      return gen("return null");
    }
  }
});

// node_modules/protobufjs/src/converter.js
var require_converter = __commonJS({
  "node_modules/protobufjs/src/converter.js"(exports2) {
    "use strict";
    var converter = exports2;
    var Enum = require_enum();
    var util = require_util();
    function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (field.repeated && values[keys[i]] === field.typeDefault)
              gen("default:");
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else
          gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length)
        return gen("return new this.ctor");
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), prop = util.safeProp(field.name);
        if (field.map) {
          gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          genValuePartial_fromObject(gen, field, i, prop + "[ks[i]]")("}")("}");
        } else if (field.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(gen, field, i, prop + "[i]")("}")("}");
        } else {
          if (!(field.resolvedType instanceof Enum))
            gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(gen, field, i, prop);
          if (!(field.resolvedType instanceof Enum))
            gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum)
          gen("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop);
        else
          gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      if (!fields.length)
        return util.codegen()("return {}");
      var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i)
          gen("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i)
          gen("d%s={}", util.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field = normalFields[i], prop = util.safeProp(field.name);
          if (field.resolvedType instanceof Enum)
            gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
          else if (field.long)
            gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
          else if (field.bytes) {
            var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else
            gen("d%s=%j", prop, field.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          genValuePartial_toObject(gen, field, index, prop + "[ks2[j]]")("}");
        } else if (field.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(gen, field, index, prop + "[j]")("}");
        } else {
          gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
          genValuePartial_toObject(gen, field, index, prop);
          if (field.partOf)
            gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  }
});

// node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS({
  "node_modules/protobufjs/src/wrappers.js"(exports2) {
    "use strict";
    var wrappers = exports2;
    var Message = require_message();
    wrappers[".google.protobuf.Any"] = {
      fromObject: function(object) {
        if (object && object["@type"]) {
          var name4 = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
          var type = this.lookup(name4);
          if (type) {
            var type_url = object["@type"].charAt(0) === "." ? object["@type"].substr(1) : object["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type.encode(type.fromObject(object)).finish()
            });
          }
        }
        return this.fromObject(object);
      },
      toObject: function(message, options) {
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name4 = "";
        if (options && options.json && message.type_url && message.value) {
          name4 = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
          prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
          var type = this.lookup(name4);
          if (type)
            message = type.decode(message.value);
        }
        if (!(message instanceof this.ctor) && message instanceof Message) {
          var object = message.$type.toObject(message, options);
          var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.substr(1) : message.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name4 = prefix + messageName;
          object["@type"] = name4;
          return object;
        }
        return this.toObject(message, options);
      }
    };
  }
});

// node_modules/protobufjs/src/type.js
var require_type = __commonJS({
  "node_modules/protobufjs/src/type.js"(exports2, module3) {
    "use strict";
    module3.exports = Type;
    var Namespace = require_namespace();
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
    var Enum = require_enum();
    var OneOf = require_oneof();
    var Field = require_field();
    var MapField = require_mapfield();
    var Service = require_service2();
    var Message = require_message();
    var Reader = require_reader();
    var Writer = require_writer();
    var util = require_util();
    var encoder = require_encoder();
    var decoder = require_decoder();
    var verifier = require_verifier();
    var converter = require_converter();
    var wrappers = require_wrappers();
    function Type(name4, options) {
      Namespace.call(this, name4, options);
      this.fields = {};
      this.oneofs = void 0;
      this.extensions = void 0;
      this.reserved = void 0;
      this.group = void 0;
      this._fieldsById = null;
      this._fieldsArray = null;
      this._oneofsArray = null;
      this._ctor = null;
    }
    Object.defineProperties(Type.prototype, {
      fieldsById: {
        get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
            var field = this.fields[names[i]], id = field.id;
            if (this._fieldsById[id])
              throw Error("duplicate id " + id + " in " + this);
            this._fieldsById[id] = field;
          }
          return this._fieldsById;
        }
      },
      fieldsArray: {
        get: function() {
          return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
      },
      oneofsArray: {
        get: function() {
          return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
      },
      ctor: {
        get: function() {
          return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {
          var prototype = ctor.prototype;
          if (!(prototype instanceof Message)) {
            (ctor.prototype = new Message()).constructor = ctor;
            util.merge(ctor.prototype, prototype);
          }
          ctor.$type = ctor.prototype.$type = this;
          util.merge(ctor, Message, true);
          this._ctor = ctor;
          var i = 0;
          for (; i < this.fieldsArray.length; ++i)
            this._fieldsArray[i].resolve();
          var ctorProperties = {};
          for (i = 0; i < this.oneofsArray.length; ++i)
            ctorProperties[this._oneofsArray[i].resolve().name] = {
              get: util.oneOfGetter(this._oneofsArray[i].oneof),
              set: util.oneOfSetter(this._oneofsArray[i].oneof)
            };
          if (i)
            Object.defineProperties(ctor.prototype, ctorProperties);
        }
      }
    });
    Type.generateConstructor = function generateConstructor(mtype) {
      var gen = util.codegen(["p"], mtype.name);
      for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map)
          gen("this%s={}", util.safeProp(field.name));
        else if (field.repeated)
          gen("this%s=[]", util.safeProp(field.name));
      return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
    };
    function clearCache(type) {
      type._fieldsById = type._fieldsArray = type._oneofsArray = null;
      delete type.encode;
      delete type.decode;
      delete type.verify;
      return type;
    }
    Type.fromJSON = function fromJSON(name4, json) {
      var type = new Type(name4, json.options);
      type.extensions = json.extensions;
      type.reserved = json.reserved;
      var names = Object.keys(json.fields), i = 0;
      for (; i < names.length; ++i)
        type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
      if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
      if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add((nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
        }
      if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
      if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
      if (json.group)
        type.group = true;
      if (json.comment)
        type.comment = json.comment;
      return type;
    };
    Type.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "oneofs",
        Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields",
        Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {},
        "extensions",
        this.extensions && this.extensions.length ? this.extensions : void 0,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "group",
        this.group || void 0,
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Type.prototype.resolveAll = function resolveAll() {
      var fields = this.fieldsArray, i = 0;
      while (i < fields.length)
        fields[i++].resolve();
      var oneofs = this.oneofsArray;
      i = 0;
      while (i < oneofs.length)
        oneofs[i++].resolve();
      return Namespace.prototype.resolveAll.call(this);
    };
    Type.prototype.get = function get(name4) {
      return this.fields[name4] || this.oneofs && this.oneofs[name4] || this.nested && this.nested[name4] || null;
    };
    Type.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Field && object.extend === void 0) {
        if (this._fieldsById ? this._fieldsById[object.id] : this.fieldsById[object.id])
          throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
          throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.parent)
          object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs)
          this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Type.prototype.remove = function remove(object) {
      if (object instanceof Field && object.extend === void 0) {
        if (!this.fields || this.fields[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs || this.oneofs[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Type.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Type.prototype.isReservedName = function isReservedName(name4) {
      return Namespace.isReservedName(this.reserved, name4);
    };
    Type.prototype.create = function create(properties) {
      return new this.ctor(properties);
    };
    Type.prototype.setup = function setup() {
      var fullName = this.fullName, types = [];
      for (var i = 0; i < this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
      this.encode = encoder(this)({
        Writer,
        types,
        util
      });
      this.decode = decoder(this)({
        Reader,
        types,
        util
      });
      this.verify = verifier(this)({
        types,
        util
      });
      this.fromObject = converter.fromObject(this)({
        types,
        util
      });
      this.toObject = converter.toObject(this)({
        types,
        util
      });
      var wrapper = wrappers[fullName];
      if (wrapper) {
        var originalThis = Object.create(this);
        originalThis.fromObject = this.fromObject;
        this.fromObject = wrapper.fromObject.bind(originalThis);
        originalThis.toObject = this.toObject;
        this.toObject = wrapper.toObject.bind(originalThis);
      }
      return this;
    };
    Type.prototype.encode = function encode_setup(message, writer) {
      return this.setup().encode(message, writer);
    };
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };
    Type.prototype.decode = function decode_setup(reader, length) {
      return this.setup().decode(reader, length);
    };
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof Reader))
        reader = Reader.create(reader);
      return this.decode(reader, reader.uint32());
    };
    Type.prototype.verify = function verify_setup(message) {
      return this.setup().verify(message);
    };
    Type.prototype.fromObject = function fromObject(object) {
      return this.setup().fromObject(object);
    };
    Type.prototype.toObject = function toObject(message, options) {
      return this.setup().toObject(message, options);
    };
    Type.d = function decorateType(typeName) {
      return function typeDecorator(target) {
        util.decorateType(target, typeName);
      };
    };
  }
});

// node_modules/protobufjs/src/root.js
var require_root = __commonJS({
  "node_modules/protobufjs/src/root.js"(exports2, module3) {
    "use strict";
    module3.exports = Root;
    var Namespace = require_namespace();
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
    var Field = require_field();
    var Enum = require_enum();
    var OneOf = require_oneof();
    var util = require_util();
    var Type;
    var parse;
    var common;
    function Root(options) {
      Namespace.call(this, "", options);
      this.deferred = [];
      this.files = [];
    }
    Root.fromJSON = function fromJSON(json, root) {
      if (!root)
        root = new Root();
      if (json.options)
        root.setOptions(json.options);
      return root.addJSON(json.nested);
    };
    Root.prototype.resolvePath = util.path.resolve;
    Root.prototype.fetch = util.fetch;
    function SYNC() {
    }
    Root.prototype.load = function load(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
      var self2 = this;
      if (!callback)
        return util.asPromise(load, self2, filename, options);
      var sync = callback === SYNC;
      function finish(err, root) {
        if (!callback)
          return;
        var cb = callback;
        callback = null;
        if (sync)
          throw err;
        cb(err, root);
      }
      function getBundledFileName(filename2) {
        var idx = filename2.lastIndexOf("google/protobuf/");
        if (idx > -1) {
          var altname = filename2.substring(idx);
          if (altname in common)
            return altname;
        }
        return null;
      }
      function process2(filename2, source) {
        try {
          if (util.isString(source) && source.charAt(0) === "{")
            source = JSON.parse(source);
          if (!util.isString(source))
            self2.setOptions(source.options).addJSON(source.nested);
          else {
            parse.filename = filename2;
            var parsed = parse(source, self2, options), resolved2, i2 = 0;
            if (parsed.imports) {
              for (; i2 < parsed.imports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                  fetch(resolved2);
            }
            if (parsed.weakImports) {
              for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                  fetch(resolved2, true);
            }
          }
        } catch (err) {
          finish(err);
        }
        if (!sync && !queued)
          finish(null, self2);
      }
      function fetch(filename2, weak) {
        if (self2.files.indexOf(filename2) > -1)
          return;
        self2.files.push(filename2);
        if (filename2 in common) {
          if (sync)
            process2(filename2, common[filename2]);
          else {
            ++queued;
            setTimeout(function() {
              --queued;
              process2(filename2, common[filename2]);
            });
          }
          return;
        }
        if (sync) {
          var source;
          try {
            source = util.fs.readFileSync(filename2).toString("utf8");
          } catch (err) {
            if (!weak)
              finish(err);
            return;
          }
          process2(filename2, source);
        } else {
          ++queued;
          self2.fetch(filename2, function(err, source2) {
            --queued;
            if (!callback)
              return;
            if (err) {
              if (!weak)
                finish(err);
              else if (!queued)
                finish(null, self2);
              return;
            }
            process2(filename2, source2);
          });
        }
      }
      var queued = 0;
      if (util.isString(filename))
        filename = [filename];
      for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self2.resolvePath("", filename[i]))
          fetch(resolved);
      if (sync)
        return self2;
      if (!queued)
        finish(null, self2);
      return void 0;
    };
    Root.prototype.loadSync = function loadSync2(filename, options) {
      if (!util.isNode)
        throw Error("not supported");
      return this.load(filename, options, SYNC);
    };
    Root.prototype.resolveAll = function resolveAll() {
      if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
      return Namespace.prototype.resolveAll.call(this);
    };
    var exposeRe = /^[A-Z]/;
    function tryHandleExtension(root, field) {
      var extendedType = field.parent.lookup(field.extend);
      if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
      }
      return false;
    }
    Root.prototype._handleAdd = function _handleAdd(object) {
      if (object instanceof Field) {
        if (object.extend !== void 0 && !object.extensionField) {
          if (!tryHandleExtension(this, object))
            this.deferred.push(object);
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          object.parent[object.name] = object.values;
      } else if (!(object instanceof OneOf)) {
        if (object instanceof Type)
          for (var i = 0; i < this.deferred.length; )
            if (tryHandleExtension(this, this.deferred[i]))
              this.deferred.splice(i, 1);
            else
              ++i;
        for (var j = 0; j < object.nestedArray.length; ++j)
          this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
          object.parent[object.name] = object;
      }
    };
    Root.prototype._handleRemove = function _handleRemove(object) {
      if (object instanceof Field) {
        if (object.extend !== void 0) {
          if (object.extensionField) {
            object.extensionField.parent.remove(object.extensionField);
            object.extensionField = null;
          } else {
            var index = this.deferred.indexOf(object);
            if (index > -1)
              this.deferred.splice(index, 1);
          }
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      } else if (object instanceof Namespace) {
        for (var i = 0; i < object.nestedArray.length; ++i)
          this._handleRemove(object._nestedArray[i]);
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      }
    };
    Root._configure = function(Type_, parse_, common_) {
      Type = Type_;
      parse = parse_;
      common = common_;
    };
  }
});

// node_modules/protobufjs/src/util.js
var require_util = __commonJS({
  "node_modules/protobufjs/src/util.js"(exports2, module3) {
    "use strict";
    var util = module3.exports = require_minimal();
    var roots = require_roots();
    var Type;
    var Enum;
    util.codegen = require_codegen();
    util.fetch = require_fetch();
    util.path = require_path();
    util.fs = util.inquire("fs");
    util.toArray = function toArray(object) {
      if (object) {
        var keys = Object.keys(object), array = new Array(keys.length), index = 0;
        while (index < keys.length)
          array[index] = object[keys[index++]];
        return array;
      }
      return [];
    };
    util.toObject = function toObject(array) {
      var object = {}, index = 0;
      while (index < array.length) {
        var key = array[index++], val = array[index++];
        if (val !== void 0)
          object[key] = val;
      }
      return object;
    };
    var safePropBackslashRe = /\\/g;
    var safePropQuoteRe = /"/g;
    util.isReserved = function isReserved(name4) {
      return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name4);
    };
    util.safeProp = function safeProp(prop) {
      if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
      return "." + prop;
    };
    util.ucFirst = function ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    var camelCaseRe = /_([a-z])/g;
    util.camelCase = function camelCase(str) {
      return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
        return $1.toUpperCase();
      });
    };
    util.compareFieldsById = function compareFieldsById(a, b) {
      return a.id - b.id;
    };
    util.decorateType = function decorateType(ctor, typeName) {
      if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
          util.decorateRoot.remove(ctor.$type);
          ctor.$type.name = typeName;
          util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
      }
      if (!Type)
        Type = require_type();
      var type = new Type(typeName || ctor.name);
      util.decorateRoot.add(type);
      type.ctor = ctor;
      Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
      Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
      return type;
    };
    var decorateEnumIndex = 0;
    util.decorateEnum = function decorateEnum(object) {
      if (object.$type)
        return object.$type;
      if (!Enum)
        Enum = require_enum();
      var enm = new Enum("Enum" + decorateEnumIndex++, object);
      util.decorateRoot.add(enm);
      Object.defineProperty(object, "$type", { value: enm, enumerable: false });
      return enm;
    };
    util.setProperty = function setProperty(dst, path, value) {
      function setProp(dst2, path2, value2) {
        var part = path2.shift();
        if (path2.length > 0) {
          dst2[part] = setProp(dst2[part] || {}, path2, value2);
        } else {
          var prevValue = dst2[part];
          if (prevValue)
            value2 = [].concat(prevValue).concat(value2);
          dst2[part] = value2;
        }
        return dst2;
      }
      if (typeof dst !== "object")
        throw TypeError("dst must be an object");
      if (!path)
        throw TypeError("path must be specified");
      path = path.split(".");
      return setProp(dst, path, value);
    };
    Object.defineProperty(util, "decorateRoot", {
      get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require_root())());
      }
    });
  }
});

// node_modules/protobufjs/src/object.js
var require_object = __commonJS({
  "node_modules/protobufjs/src/object.js"(exports2, module3) {
    "use strict";
    module3.exports = ReflectionObject;
    ReflectionObject.className = "ReflectionObject";
    var util = require_util();
    var Root;
    function ReflectionObject(name4, options) {
      if (!util.isString(name4))
        throw TypeError("name must be a string");
      if (options && !util.isObject(options))
        throw TypeError("options must be an object");
      this.options = options;
      this.parsedOptions = null;
      this.name = name4;
      this.parent = null;
      this.resolved = false;
      this.comment = null;
      this.filename = null;
    }
    Object.defineProperties(ReflectionObject.prototype, {
      root: {
        get: function() {
          var ptr = this;
          while (ptr.parent !== null)
            ptr = ptr.parent;
          return ptr;
        }
      },
      fullName: {
        get: function() {
          var path = [this.name], ptr = this.parent;
          while (ptr) {
            path.unshift(ptr.name);
            ptr = ptr.parent;
          }
          return path.join(".");
        }
      }
    });
    ReflectionObject.prototype.toJSON = function toJSON() {
      throw Error();
    };
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
      if (this.parent && this.parent !== parent)
        this.parent.remove(this);
      this.parent = parent;
      this.resolved = false;
      var root = parent.root;
      if (root instanceof Root)
        root._handleAdd(this);
    };
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
      var root = parent.root;
      if (root instanceof Root)
        root._handleRemove(this);
      this.parent = null;
      this.resolved = false;
    };
    ReflectionObject.prototype.resolve = function resolve2() {
      if (this.resolved)
        return this;
      if (this.root instanceof Root)
        this.resolved = true;
      return this;
    };
    ReflectionObject.prototype.getOption = function getOption(name4) {
      if (this.options)
        return this.options[name4];
      return void 0;
    };
    ReflectionObject.prototype.setOption = function setOption(name4, value, ifNotSet) {
      if (!ifNotSet || !this.options || this.options[name4] === void 0)
        (this.options || (this.options = {}))[name4] = value;
      return this;
    };
    ReflectionObject.prototype.setParsedOption = function setParsedOption(name4, value, propName) {
      if (!this.parsedOptions) {
        this.parsedOptions = [];
      }
      var parsedOptions = this.parsedOptions;
      if (propName) {
        var opt = parsedOptions.find(function(opt2) {
          return Object.prototype.hasOwnProperty.call(opt2, name4);
        });
        if (opt) {
          var newValue = opt[name4];
          util.setProperty(newValue, propName, value);
        } else {
          opt = {};
          opt[name4] = util.setProperty({}, propName, value);
          parsedOptions.push(opt);
        }
      } else {
        var newOpt = {};
        newOpt[name4] = value;
        parsedOptions.push(newOpt);
      }
      return this;
    };
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
      if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
          this.setOption(keys[i], options[keys[i]], ifNotSet);
      return this;
    };
    ReflectionObject.prototype.toString = function toString() {
      var className = this.constructor.className, fullName = this.fullName;
      if (fullName.length)
        return className + " " + fullName;
      return className;
    };
    ReflectionObject._configure = function(Root_) {
      Root = Root_;
    };
  }
});

// node_modules/protobufjs/src/enum.js
var require_enum = __commonJS({
  "node_modules/protobufjs/src/enum.js"(exports2, module3) {
    "use strict";
    module3.exports = Enum;
    var ReflectionObject = require_object();
    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = require_namespace();
    var util = require_util();
    function Enum(name4, values, options, comment, comments) {
      ReflectionObject.call(this, name4, options);
      if (values && typeof values !== "object")
        throw TypeError("values must be an object");
      this.valuesById = {};
      this.values = Object.create(this.valuesById);
      this.comment = comment;
      this.comments = comments || {};
      this.reserved = void 0;
      if (values) {
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
          if (typeof values[keys[i]] === "number")
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
      }
    }
    Enum.fromJSON = function fromJSON(name4, json) {
      var enm = new Enum(name4, json.values, json.options, json.comment, json.comments);
      enm.reserved = json.reserved;
      return enm;
    };
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "values",
        this.values,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "comment",
        keepComments ? this.comment : void 0,
        "comments",
        keepComments ? this.comments : void 0
      ]);
    };
    Enum.prototype.add = function add(name4, id, comment) {
      if (!util.isString(name4))
        throw TypeError("name must be a string");
      if (!util.isInteger(id))
        throw TypeError("id must be an integer");
      if (this.values[name4] !== void 0)
        throw Error("duplicate name '" + name4 + "' in " + this);
      if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);
      if (this.isReservedName(name4))
        throw Error("name '" + name4 + "' is reserved in " + this);
      if (this.valuesById[id] !== void 0) {
        if (!(this.options && this.options.allow_alias))
          throw Error("duplicate id " + id + " in " + this);
        this.values[name4] = id;
      } else
        this.valuesById[this.values[name4] = id] = name4;
      this.comments[name4] = comment || null;
      return this;
    };
    Enum.prototype.remove = function remove(name4) {
      if (!util.isString(name4))
        throw TypeError("name must be a string");
      var val = this.values[name4];
      if (val == null)
        throw Error("name '" + name4 + "' does not exist in " + this);
      delete this.valuesById[val];
      delete this.values[name4];
      delete this.comments[name4];
      return this;
    };
    Enum.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Enum.prototype.isReservedName = function isReservedName(name4) {
      return Namespace.isReservedName(this.reserved, name4);
    };
  }
});

// node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS({
  "node_modules/protobufjs/src/encoder.js"(exports2, module3) {
    "use strict";
    module3.exports = encoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function genTypePartial(gen, field, fieldIndex, ref) {
      return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
    }
    function encoder(mtype) {
      var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
      var i, ref;
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
        ref = "m" + util.safeProp(field.name);
        if (field.map) {
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
          if (wireType === void 0)
            gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
          else
            gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
          gen("}")("}");
        } else if (field.repeated) {
          gen("if(%s!=null&&%s.length){", ref, ref);
          if (field.packed && types.packed[type] !== void 0) {
            gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
          } else {
            gen("for(var i=0;i<%s.length;++i)", ref);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref + "[i]");
            else
              gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
          }
          gen("}");
        } else {
          if (field.optional)
            gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
          if (wireType === void 0)
            genTypePartial(gen, field, index, ref);
          else
            gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
        }
      }
      return gen("return w");
    }
  }
});

// node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS({
  "node_modules/protobufjs/src/index-light.js"(exports2, module3) {
    "use strict";
    var protobuf = module3.exports = require_index_minimal();
    protobuf.build = "light";
    function load(filename, root, callback) {
      if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
      } else if (!root)
        root = new protobuf.Root();
      return root.load(filename, callback);
    }
    protobuf.load = load;
    function loadSync2(filename, root) {
      if (!root)
        root = new protobuf.Root();
      return root.loadSync(filename);
    }
    protobuf.loadSync = loadSync2;
    protobuf.encoder = require_encoder();
    protobuf.decoder = require_decoder();
    protobuf.verifier = require_verifier();
    protobuf.converter = require_converter();
    protobuf.ReflectionObject = require_object();
    protobuf.Namespace = require_namespace();
    protobuf.Root = require_root();
    protobuf.Enum = require_enum();
    protobuf.Type = require_type();
    protobuf.Field = require_field();
    protobuf.OneOf = require_oneof();
    protobuf.MapField = require_mapfield();
    protobuf.Service = require_service2();
    protobuf.Method = require_method();
    protobuf.Message = require_message();
    protobuf.wrappers = require_wrappers();
    protobuf.types = require_types();
    protobuf.util = require_util();
    protobuf.ReflectionObject._configure(protobuf.Root);
    protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
    protobuf.Root._configure(protobuf.Type);
    protobuf.Field._configure(protobuf.Type);
  }
});

// node_modules/protobufjs/src/tokenize.js
var require_tokenize = __commonJS({
  "node_modules/protobufjs/src/tokenize.js"(exports2, module3) {
    "use strict";
    module3.exports = tokenize;
    var delimRe = /[\s{}=;:[\],'"()<>]/g;
    var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
    var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
    var setCommentRe = /^ *[*/]+ */;
    var setCommentAltRe = /^\s*\*?\/*/;
    var setCommentSplitRe = /\n/g;
    var whitespaceRe = /\s/;
    var unescapeRe = /\\(.?)/g;
    var unescapeMap = {
      "0": "\0",
      "r": "\r",
      "n": "\n",
      "t": "	"
    };
    function unescape(str) {
      return str.replace(unescapeRe, function($0, $1) {
        switch ($1) {
          case "\\":
          case "":
            return $1;
          default:
            return unescapeMap[$1] || "";
        }
      });
    }
    tokenize.unescape = unescape;
    function tokenize(source, alternateCommentMode) {
      source = source.toString();
      var offset = 0, length = source.length, line = 1, commentType = null, commentText = null, commentLine = 0, commentLineEmpty = false, commentIsLeading = false;
      var stack = [];
      var stringDelim = null;
      function illegal(subject) {
        return Error("illegal " + subject + " (line " + line + ")");
      }
      function readString() {
        var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
        re.lastIndex = offset - 1;
        var match = re.exec(source);
        if (!match)
          throw illegal("string");
        offset = re.lastIndex;
        push(stringDelim);
        stringDelim = null;
        return unescape(match[1]);
      }
      function charAt(pos) {
        return source.charAt(pos);
      }
      function setComment(start, end, isLeading) {
        commentType = source.charAt(start++);
        commentLine = line;
        commentLineEmpty = false;
        commentIsLeading = isLeading;
        var lookback;
        if (alternateCommentMode) {
          lookback = 2;
        } else {
          lookback = 3;
        }
        var commentOffset = start - lookback, c;
        do {
          if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
            commentLineEmpty = true;
            break;
          }
        } while (c === " " || c === "	");
        var lines = source.substring(start, end).split(setCommentSplitRe);
        for (var i = 0; i < lines.length; ++i)
          lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
        commentText = lines.join("\n").trim();
      }
      function isDoubleSlashCommentLine(startOffset) {
        var endOffset = findEndOfLine(startOffset);
        var lineText = source.substring(startOffset, endOffset);
        var isComment = /^\s*\/{1,2}/.test(lineText);
        return isComment;
      }
      function findEndOfLine(cursor) {
        var endOffset = cursor;
        while (endOffset < length && charAt(endOffset) !== "\n") {
          endOffset++;
        }
        return endOffset;
      }
      function next() {
        if (stack.length > 0)
          return stack.shift();
        if (stringDelim)
          return readString();
        var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
        do {
          if (offset === length)
            return null;
          repeat = false;
          while (whitespaceRe.test(curr = charAt(offset))) {
            if (curr === "\n") {
              isLeadingComment = true;
              ++line;
            }
            if (++offset === length)
              return null;
          }
          if (charAt(offset) === "/") {
            if (++offset === length) {
              throw illegal("comment");
            }
            if (charAt(offset) === "/") {
              if (!alternateCommentMode) {
                isDoc = charAt(start = offset + 1) === "/";
                while (charAt(++offset) !== "\n") {
                  if (offset === length) {
                    return null;
                  }
                }
                ++offset;
                if (isDoc) {
                  setComment(start, offset - 1, isLeadingComment);
                }
                ++line;
                repeat = true;
              } else {
                start = offset;
                isDoc = false;
                if (isDoubleSlashCommentLine(offset)) {
                  isDoc = true;
                  do {
                    offset = findEndOfLine(offset);
                    if (offset === length) {
                      break;
                    }
                    offset++;
                  } while (isDoubleSlashCommentLine(offset));
                } else {
                  offset = Math.min(length, findEndOfLine(offset) + 1);
                }
                if (isDoc) {
                  setComment(start, offset, isLeadingComment);
                }
                line++;
                repeat = true;
              }
            } else if ((curr = charAt(offset)) === "*") {
              start = offset + 1;
              isDoc = alternateCommentMode || charAt(start) === "*";
              do {
                if (curr === "\n") {
                  ++line;
                }
                if (++offset === length) {
                  throw illegal("comment");
                }
                prev = curr;
                curr = charAt(offset);
              } while (prev !== "*" || curr !== "/");
              ++offset;
              if (isDoc) {
                setComment(start, offset - 2, isLeadingComment);
              }
              repeat = true;
            } else {
              return "/";
            }
          }
        } while (repeat);
        var end = offset;
        delimRe.lastIndex = 0;
        var delim = delimRe.test(charAt(end++));
        if (!delim)
          while (end < length && !delimRe.test(charAt(end)))
            ++end;
        var token = source.substring(offset, offset = end);
        if (token === '"' || token === "'")
          stringDelim = token;
        return token;
      }
      function push(token) {
        stack.push(token);
      }
      function peek() {
        if (!stack.length) {
          var token = next();
          if (token === null)
            return null;
          push(token);
        }
        return stack[0];
      }
      function skip(expected, optional) {
        var actual = peek(), equals = actual === expected;
        if (equals) {
          next();
          return true;
        }
        if (!optional)
          throw illegal("token '" + actual + "', '" + expected + "' expected");
        return false;
      }
      function cmnt(trailingLine) {
        var ret = null;
        if (trailingLine === void 0) {
          if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
            ret = commentIsLeading ? commentText : null;
          }
        } else {
          if (commentLine < trailingLine) {
            peek();
          }
          if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
            ret = commentIsLeading ? null : commentText;
          }
        }
        return ret;
      }
      return Object.defineProperty({
        next,
        peek,
        push,
        skip,
        cmnt
      }, "line", {
        get: function() {
          return line;
        }
      });
    }
  }
});

// node_modules/protobufjs/src/parse.js
var require_parse = __commonJS({
  "node_modules/protobufjs/src/parse.js"(exports2, module3) {
    "use strict";
    module3.exports = parse;
    parse.filename = null;
    parse.defaults = { keepCase: false };
    var tokenize = require_tokenize();
    var Root = require_root();
    var Type = require_type();
    var Field = require_field();
    var MapField = require_mapfield();
    var OneOf = require_oneof();
    var Enum = require_enum();
    var Service = require_service2();
    var Method = require_method();
    var types = require_types();
    var util = require_util();
    var base10Re = /^[1-9][0-9]*$/;
    var base10NegRe = /^-?[1-9][0-9]*$/;
    var base16Re = /^0[x][0-9a-fA-F]+$/;
    var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
    var base8Re = /^0[0-7]+$/;
    var base8NegRe = /^-?0[0-7]+$/;
    var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
    var typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
    var fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
    function parse(source, root, options) {
      if (!(root instanceof Root)) {
        options = root;
        root = new Root();
      }
      if (!options)
        options = parse.defaults;
      var preferTrailingComment = options.preferTrailingComment || false;
      var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
      var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
      var ptr = root;
      var applyCase = options.keepCase ? function(name4) {
        return name4;
      } : util.camelCase;
      function illegal(token2, name4, insideTryCatch) {
        var filename = parse.filename;
        if (!insideTryCatch)
          parse.filename = null;
        return Error("illegal " + (name4 || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
      }
      function readString() {
        var values = [], token2;
        do {
          if ((token2 = next()) !== '"' && token2 !== "'")
            throw illegal(token2);
          values.push(next());
          skip(token2);
          token2 = peek();
        } while (token2 === '"' || token2 === "'");
        return values.join("");
      }
      function readValue(acceptTypeRef) {
        var token2 = next();
        switch (token2) {
          case "'":
          case '"':
            push(token2);
            return readString();
          case "true":
          case "TRUE":
            return true;
          case "false":
          case "FALSE":
            return false;
        }
        try {
          return parseNumber(token2, true);
        } catch (e) {
          if (acceptTypeRef && typeRefRe.test(token2))
            return token2;
          throw illegal(token2, "value");
        }
      }
      function readRanges(target, acceptStrings) {
        var token2, start;
        do {
          if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'"))
            target.push(readString());
          else
            target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
        } while (skip(",", true));
        skip(";");
      }
      function parseNumber(token2, insideTryCatch) {
        var sign = 1;
        if (token2.charAt(0) === "-") {
          sign = -1;
          token2 = token2.substring(1);
        }
        switch (token2) {
          case "inf":
          case "INF":
          case "Inf":
            return sign * Infinity;
          case "nan":
          case "NAN":
          case "Nan":
          case "NaN":
            return NaN;
          case "0":
            return 0;
        }
        if (base10Re.test(token2))
          return sign * parseInt(token2, 10);
        if (base16Re.test(token2))
          return sign * parseInt(token2, 16);
        if (base8Re.test(token2))
          return sign * parseInt(token2, 8);
        if (numberRe.test(token2))
          return sign * parseFloat(token2);
        throw illegal(token2, "number", insideTryCatch);
      }
      function parseId(token2, acceptNegative) {
        switch (token2) {
          case "max":
          case "MAX":
          case "Max":
            return 536870911;
          case "0":
            return 0;
        }
        if (!acceptNegative && token2.charAt(0) === "-")
          throw illegal(token2, "id");
        if (base10NegRe.test(token2))
          return parseInt(token2, 10);
        if (base16NegRe.test(token2))
          return parseInt(token2, 16);
        if (base8NegRe.test(token2))
          return parseInt(token2, 8);
        throw illegal(token2, "id");
      }
      function parsePackage() {
        if (pkg !== void 0)
          throw illegal("package");
        pkg = next();
        if (!typeRefRe.test(pkg))
          throw illegal(pkg, "name");
        ptr = ptr.define(pkg);
        skip(";");
      }
      function parseImport() {
        var token2 = peek();
        var whichImports;
        switch (token2) {
          case "weak":
            whichImports = weakImports || (weakImports = []);
            next();
            break;
          case "public":
            next();
          default:
            whichImports = imports || (imports = []);
            break;
        }
        token2 = readString();
        skip(";");
        whichImports.push(token2);
      }
      function parseSyntax() {
        skip("=");
        syntax = readString();
        isProto3 = syntax === "proto3";
        if (!isProto3 && syntax !== "proto2")
          throw illegal(syntax, "syntax");
        skip(";");
      }
      function parseCommon(parent, token2) {
        switch (token2) {
          case "option":
            parseOption(parent, token2);
            skip(";");
            return true;
          case "message":
            parseType(parent, token2);
            return true;
          case "enum":
            parseEnum(parent, token2);
            return true;
          case "service":
            parseService(parent, token2);
            return true;
          case "extend":
            parseExtension(parent, token2);
            return true;
        }
        return false;
      }
      function ifBlock(obj, fnIf, fnElse) {
        var trailingLine = tn.line;
        if (obj) {
          if (typeof obj.comment !== "string") {
            obj.comment = cmnt();
          }
          obj.filename = parse.filename;
        }
        if (skip("{", true)) {
          var token2;
          while ((token2 = next()) !== "}")
            fnIf(token2);
          skip(";", true);
        } else {
          if (fnElse)
            fnElse();
          skip(";");
          if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
            obj.comment = cmnt(trailingLine) || obj.comment;
        }
      }
      function parseType(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "type name");
        var type = new Type(token2);
        ifBlock(type, function parseType_block(token3) {
          if (parseCommon(type, token3))
            return;
          switch (token3) {
            case "map":
              parseMapField(type, token3);
              break;
            case "required":
            case "repeated":
              parseField(type, token3);
              break;
            case "optional":
              if (isProto3) {
                parseField(type, "proto3_optional");
              } else {
                parseField(type, "optional");
              }
              break;
            case "oneof":
              parseOneOf(type, token3);
              break;
            case "extensions":
              readRanges(type.extensions || (type.extensions = []));
              break;
            case "reserved":
              readRanges(type.reserved || (type.reserved = []), true);
              break;
            default:
              if (!isProto3 || !typeRefRe.test(token3))
                throw illegal(token3);
              push(token3);
              parseField(type, "optional");
              break;
          }
        });
        parent.add(type);
      }
      function parseField(parent, rule, extend) {
        var type = next();
        if (type === "group") {
          parseGroup(parent, rule);
          return;
        }
        if (!typeRefRe.test(type))
          throw illegal(type, "type");
        var name4 = next();
        if (!nameRe.test(name4))
          throw illegal(name4, "name");
        name4 = applyCase(name4);
        skip("=");
        var field = new Field(name4, parseId(next()), type, rule, extend);
        ifBlock(field, function parseField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseField_line() {
          parseInlineOptions(field);
        });
        if (rule === "proto3_optional") {
          var oneof = new OneOf("_" + name4);
          field.setOption("proto3_optional", true);
          oneof.add(field);
          parent.add(oneof);
        } else {
          parent.add(field);
        }
        if (!isProto3 && field.repeated && (types.packed[type] !== void 0 || types.basic[type] === void 0))
          field.setOption("packed", false, true);
      }
      function parseGroup(parent, rule) {
        var name4 = next();
        if (!nameRe.test(name4))
          throw illegal(name4, "name");
        var fieldName = util.lcFirst(name4);
        if (name4 === fieldName)
          name4 = util.ucFirst(name4);
        skip("=");
        var id = parseId(next());
        var type = new Type(name4);
        type.group = true;
        var field = new Field(fieldName, id, name4, rule);
        field.filename = parse.filename;
        ifBlock(type, function parseGroup_block(token2) {
          switch (token2) {
            case "option":
              parseOption(type, token2);
              skip(";");
              break;
            case "required":
            case "repeated":
              parseField(type, token2);
              break;
            case "optional":
              if (isProto3) {
                parseField(type, "proto3_optional");
              } else {
                parseField(type, "optional");
              }
              break;
            default:
              throw illegal(token2);
          }
        });
        parent.add(type).add(field);
      }
      function parseMapField(parent) {
        skip("<");
        var keyType = next();
        if (types.mapKey[keyType] === void 0)
          throw illegal(keyType, "type");
        skip(",");
        var valueType = next();
        if (!typeRefRe.test(valueType))
          throw illegal(valueType, "type");
        skip(">");
        var name4 = next();
        if (!nameRe.test(name4))
          throw illegal(name4, "name");
        skip("=");
        var field = new MapField(applyCase(name4), parseId(next()), keyType, valueType);
        ifBlock(field, function parseMapField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseMapField_line() {
          parseInlineOptions(field);
        });
        parent.add(field);
      }
      function parseOneOf(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var oneof = new OneOf(applyCase(token2));
        ifBlock(oneof, function parseOneOf_block(token3) {
          if (token3 === "option") {
            parseOption(oneof, token3);
            skip(";");
          } else {
            push(token3);
            parseField(oneof, "optional");
          }
        });
        parent.add(oneof);
      }
      function parseEnum(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var enm = new Enum(token2);
        ifBlock(enm, function parseEnum_block(token3) {
          switch (token3) {
            case "option":
              parseOption(enm, token3);
              skip(";");
              break;
            case "reserved":
              readRanges(enm.reserved || (enm.reserved = []), true);
              break;
            default:
              parseEnumValue(enm, token3);
          }
        });
        parent.add(enm);
      }
      function parseEnumValue(parent, token2) {
        if (!nameRe.test(token2))
          throw illegal(token2, "name");
        skip("=");
        var value = parseId(next(), true), dummy = {};
        ifBlock(dummy, function parseEnumValue_block(token3) {
          if (token3 === "option") {
            parseOption(dummy, token3);
            skip(";");
          } else
            throw illegal(token3);
        }, function parseEnumValue_line() {
          parseInlineOptions(dummy);
        });
        parent.add(token2, value, dummy.comment);
      }
      function parseOption(parent, token2) {
        var isCustom = skip("(", true);
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2, "name");
        var name4 = token2;
        var option = name4;
        var propName;
        if (isCustom) {
          skip(")");
          name4 = "(" + name4 + ")";
          option = name4;
          token2 = peek();
          if (fqTypeRefRe.test(token2)) {
            propName = token2.substr(1);
            name4 += token2;
            next();
          }
        }
        skip("=");
        var optionValue = parseOptionValue(parent, name4);
        setParsedOption(parent, option, optionValue, propName);
      }
      function parseOptionValue(parent, name4) {
        if (skip("{", true)) {
          var result = {};
          while (!skip("}", true)) {
            if (!nameRe.test(token = next()))
              throw illegal(token, "name");
            var value;
            var propName = token;
            if (peek() === "{")
              value = parseOptionValue(parent, name4 + "." + token);
            else {
              skip(":");
              if (peek() === "{")
                value = parseOptionValue(parent, name4 + "." + token);
              else {
                value = readValue(true);
                setOption(parent, name4 + "." + token, value);
              }
            }
            var prevValue = result[propName];
            if (prevValue)
              value = [].concat(prevValue).concat(value);
            result[propName] = value;
            skip(",", true);
          }
          return result;
        }
        var simpleValue = readValue(true);
        setOption(parent, name4, simpleValue);
        return simpleValue;
      }
      function setOption(parent, name4, value) {
        if (parent.setOption)
          parent.setOption(name4, value);
      }
      function setParsedOption(parent, name4, value, propName) {
        if (parent.setParsedOption)
          parent.setParsedOption(name4, value, propName);
      }
      function parseInlineOptions(parent) {
        if (skip("[", true)) {
          do {
            parseOption(parent, "option");
          } while (skip(",", true));
          skip("]");
        }
        return parent;
      }
      function parseService(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "service name");
        var service = new Service(token2);
        ifBlock(service, function parseService_block(token3) {
          if (parseCommon(service, token3))
            return;
          if (token3 === "rpc")
            parseMethod(service, token3);
          else
            throw illegal(token3);
        });
        parent.add(service);
      }
      function parseMethod(parent, token2) {
        var commentText = cmnt();
        var type = token2;
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var name4 = token2, requestType, requestStream, responseType, responseStream;
        skip("(");
        if (skip("stream", true))
          requestStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        requestType = token2;
        skip(")");
        skip("returns");
        skip("(");
        if (skip("stream", true))
          responseStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        responseType = token2;
        skip(")");
        var method = new Method(name4, type, requestType, responseType, requestStream, responseStream);
        method.comment = commentText;
        ifBlock(method, function parseMethod_block(token3) {
          if (token3 === "option") {
            parseOption(method, token3);
            skip(";");
          } else
            throw illegal(token3);
        });
        parent.add(method);
      }
      function parseExtension(parent, token2) {
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2, "reference");
        var reference = token2;
        ifBlock(null, function parseExtension_block(token3) {
          switch (token3) {
            case "required":
            case "repeated":
              parseField(parent, token3, reference);
              break;
            case "optional":
              if (isProto3) {
                parseField(parent, "proto3_optional", reference);
              } else {
                parseField(parent, "optional", reference);
              }
              break;
            default:
              if (!isProto3 || !typeRefRe.test(token3))
                throw illegal(token3);
              push(token3);
              parseField(parent, "optional", reference);
              break;
          }
        });
      }
      var token;
      while ((token = next()) !== null) {
        switch (token) {
          case "package":
            if (!head)
              throw illegal(token);
            parsePackage();
            break;
          case "import":
            if (!head)
              throw illegal(token);
            parseImport();
            break;
          case "syntax":
            if (!head)
              throw illegal(token);
            parseSyntax();
            break;
          case "option":
            parseOption(ptr, token);
            skip(";");
            break;
          default:
            if (parseCommon(ptr, token)) {
              head = false;
              continue;
            }
            throw illegal(token);
        }
      }
      parse.filename = null;
      return {
        "package": pkg,
        "imports": imports,
        weakImports,
        syntax,
        root
      };
    }
  }
});

// node_modules/protobufjs/src/common.js
var require_common = __commonJS({
  "node_modules/protobufjs/src/common.js"(exports2, module3) {
    "use strict";
    module3.exports = common;
    var commonRe = /\/|\./;
    function common(name4, json) {
      if (!commonRe.test(name4)) {
        name4 = "google/protobuf/" + name4 + ".proto";
        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
      }
      common[name4] = json;
    }
    common("any", {
      Any: {
        fields: {
          type_url: {
            type: "string",
            id: 1
          },
          value: {
            type: "bytes",
            id: 2
          }
        }
      }
    });
    var timeType;
    common("duration", {
      Duration: timeType = {
        fields: {
          seconds: {
            type: "int64",
            id: 1
          },
          nanos: {
            type: "int32",
            id: 2
          }
        }
      }
    });
    common("timestamp", {
      Timestamp: timeType
    });
    common("empty", {
      Empty: {
        fields: {}
      }
    });
    common("struct", {
      Struct: {
        fields: {
          fields: {
            keyType: "string",
            type: "Value",
            id: 1
          }
        }
      },
      Value: {
        oneofs: {
          kind: {
            oneof: [
              "nullValue",
              "numberValue",
              "stringValue",
              "boolValue",
              "structValue",
              "listValue"
            ]
          }
        },
        fields: {
          nullValue: {
            type: "NullValue",
            id: 1
          },
          numberValue: {
            type: "double",
            id: 2
          },
          stringValue: {
            type: "string",
            id: 3
          },
          boolValue: {
            type: "bool",
            id: 4
          },
          structValue: {
            type: "Struct",
            id: 5
          },
          listValue: {
            type: "ListValue",
            id: 6
          }
        }
      },
      NullValue: {
        values: {
          NULL_VALUE: 0
        }
      },
      ListValue: {
        fields: {
          values: {
            rule: "repeated",
            type: "Value",
            id: 1
          }
        }
      }
    });
    common("wrappers", {
      DoubleValue: {
        fields: {
          value: {
            type: "double",
            id: 1
          }
        }
      },
      FloatValue: {
        fields: {
          value: {
            type: "float",
            id: 1
          }
        }
      },
      Int64Value: {
        fields: {
          value: {
            type: "int64",
            id: 1
          }
        }
      },
      UInt64Value: {
        fields: {
          value: {
            type: "uint64",
            id: 1
          }
        }
      },
      Int32Value: {
        fields: {
          value: {
            type: "int32",
            id: 1
          }
        }
      },
      UInt32Value: {
        fields: {
          value: {
            type: "uint32",
            id: 1
          }
        }
      },
      BoolValue: {
        fields: {
          value: {
            type: "bool",
            id: 1
          }
        }
      },
      StringValue: {
        fields: {
          value: {
            type: "string",
            id: 1
          }
        }
      },
      BytesValue: {
        fields: {
          value: {
            type: "bytes",
            id: 1
          }
        }
      }
    });
    common("field_mask", {
      FieldMask: {
        fields: {
          paths: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      }
    });
    common.get = function get(file) {
      return common[file] || null;
    };
  }
});

// node_modules/protobufjs/src/index.js
var require_src = __commonJS({
  "node_modules/protobufjs/src/index.js"(exports2, module3) {
    "use strict";
    var protobuf = module3.exports = require_index_light();
    protobuf.build = "full";
    protobuf.tokenize = require_tokenize();
    protobuf.parse = require_parse();
    protobuf.common = require_common();
    protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
  }
});

// node_modules/protobufjs/index.js
var require_protobufjs = __commonJS({
  "node_modules/protobufjs/index.js"(exports2, module3) {
    "use strict";
    module3.exports = require_src();
  }
});

// node_modules/protobufjs/google/protobuf/descriptor.json
var require_descriptor = __commonJS({
  "node_modules/protobufjs/google/protobuf/descriptor.json"(exports2, module3) {
    module3.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                FileDescriptorSet: {
                  fields: {
                    file: {
                      rule: "repeated",
                      type: "FileDescriptorProto",
                      id: 1
                    }
                  }
                },
                FileDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    package: {
                      type: "string",
                      id: 2
                    },
                    dependency: {
                      rule: "repeated",
                      type: "string",
                      id: 3
                    },
                    publicDependency: {
                      rule: "repeated",
                      type: "int32",
                      id: 10,
                      options: {
                        packed: false
                      }
                    },
                    weakDependency: {
                      rule: "repeated",
                      type: "int32",
                      id: 11,
                      options: {
                        packed: false
                      }
                    },
                    messageType: {
                      rule: "repeated",
                      type: "DescriptorProto",
                      id: 4
                    },
                    enumType: {
                      rule: "repeated",
                      type: "EnumDescriptorProto",
                      id: 5
                    },
                    service: {
                      rule: "repeated",
                      type: "ServiceDescriptorProto",
                      id: 6
                    },
                    extension: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 7
                    },
                    options: {
                      type: "FileOptions",
                      id: 8
                    },
                    sourceCodeInfo: {
                      type: "SourceCodeInfo",
                      id: 9
                    },
                    syntax: {
                      type: "string",
                      id: 12
                    }
                  }
                },
                DescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    field: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 2
                    },
                    extension: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 6
                    },
                    nestedType: {
                      rule: "repeated",
                      type: "DescriptorProto",
                      id: 3
                    },
                    enumType: {
                      rule: "repeated",
                      type: "EnumDescriptorProto",
                      id: 4
                    },
                    extensionRange: {
                      rule: "repeated",
                      type: "ExtensionRange",
                      id: 5
                    },
                    oneofDecl: {
                      rule: "repeated",
                      type: "OneofDescriptorProto",
                      id: 8
                    },
                    options: {
                      type: "MessageOptions",
                      id: 7
                    },
                    reservedRange: {
                      rule: "repeated",
                      type: "ReservedRange",
                      id: 9
                    },
                    reservedName: {
                      rule: "repeated",
                      type: "string",
                      id: 10
                    }
                  },
                  nested: {
                    ExtensionRange: {
                      fields: {
                        start: {
                          type: "int32",
                          id: 1
                        },
                        end: {
                          type: "int32",
                          id: 2
                        }
                      }
                    },
                    ReservedRange: {
                      fields: {
                        start: {
                          type: "int32",
                          id: 1
                        },
                        end: {
                          type: "int32",
                          id: 2
                        }
                      }
                    }
                  }
                },
                FieldDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 3
                    },
                    label: {
                      type: "Label",
                      id: 4
                    },
                    type: {
                      type: "Type",
                      id: 5
                    },
                    typeName: {
                      type: "string",
                      id: 6
                    },
                    extendee: {
                      type: "string",
                      id: 2
                    },
                    defaultValue: {
                      type: "string",
                      id: 7
                    },
                    oneofIndex: {
                      type: "int32",
                      id: 9
                    },
                    jsonName: {
                      type: "string",
                      id: 10
                    },
                    options: {
                      type: "FieldOptions",
                      id: 8
                    }
                  },
                  nested: {
                    Type: {
                      values: {
                        TYPE_DOUBLE: 1,
                        TYPE_FLOAT: 2,
                        TYPE_INT64: 3,
                        TYPE_UINT64: 4,
                        TYPE_INT32: 5,
                        TYPE_FIXED64: 6,
                        TYPE_FIXED32: 7,
                        TYPE_BOOL: 8,
                        TYPE_STRING: 9,
                        TYPE_GROUP: 10,
                        TYPE_MESSAGE: 11,
                        TYPE_BYTES: 12,
                        TYPE_UINT32: 13,
                        TYPE_ENUM: 14,
                        TYPE_SFIXED32: 15,
                        TYPE_SFIXED64: 16,
                        TYPE_SINT32: 17,
                        TYPE_SINT64: 18
                      }
                    },
                    Label: {
                      values: {
                        LABEL_OPTIONAL: 1,
                        LABEL_REQUIRED: 2,
                        LABEL_REPEATED: 3
                      }
                    }
                  }
                },
                OneofDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    options: {
                      type: "OneofOptions",
                      id: 2
                    }
                  }
                },
                EnumDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      rule: "repeated",
                      type: "EnumValueDescriptorProto",
                      id: 2
                    },
                    options: {
                      type: "EnumOptions",
                      id: 3
                    }
                  }
                },
                EnumValueDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 2
                    },
                    options: {
                      type: "EnumValueOptions",
                      id: 3
                    }
                  }
                },
                ServiceDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    method: {
                      rule: "repeated",
                      type: "MethodDescriptorProto",
                      id: 2
                    },
                    options: {
                      type: "ServiceOptions",
                      id: 3
                    }
                  }
                },
                MethodDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    inputType: {
                      type: "string",
                      id: 2
                    },
                    outputType: {
                      type: "string",
                      id: 3
                    },
                    options: {
                      type: "MethodOptions",
                      id: 4
                    },
                    clientStreaming: {
                      type: "bool",
                      id: 5
                    },
                    serverStreaming: {
                      type: "bool",
                      id: 6
                    }
                  }
                },
                FileOptions: {
                  fields: {
                    javaPackage: {
                      type: "string",
                      id: 1
                    },
                    javaOuterClassname: {
                      type: "string",
                      id: 8
                    },
                    javaMultipleFiles: {
                      type: "bool",
                      id: 10
                    },
                    javaGenerateEqualsAndHash: {
                      type: "bool",
                      id: 20,
                      options: {
                        deprecated: true
                      }
                    },
                    javaStringCheckUtf8: {
                      type: "bool",
                      id: 27
                    },
                    optimizeFor: {
                      type: "OptimizeMode",
                      id: 9,
                      options: {
                        default: "SPEED"
                      }
                    },
                    goPackage: {
                      type: "string",
                      id: 11
                    },
                    ccGenericServices: {
                      type: "bool",
                      id: 16
                    },
                    javaGenericServices: {
                      type: "bool",
                      id: 17
                    },
                    pyGenericServices: {
                      type: "bool",
                      id: 18
                    },
                    deprecated: {
                      type: "bool",
                      id: 23
                    },
                    ccEnableArenas: {
                      type: "bool",
                      id: 31
                    },
                    objcClassPrefix: {
                      type: "string",
                      id: 36
                    },
                    csharpNamespace: {
                      type: "string",
                      id: 37
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      38,
                      38
                    ]
                  ],
                  nested: {
                    OptimizeMode: {
                      values: {
                        SPEED: 1,
                        CODE_SIZE: 2,
                        LITE_RUNTIME: 3
                      }
                    }
                  }
                },
                MessageOptions: {
                  fields: {
                    messageSetWireFormat: {
                      type: "bool",
                      id: 1
                    },
                    noStandardDescriptorAccessor: {
                      type: "bool",
                      id: 2
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    mapEntry: {
                      type: "bool",
                      id: 7
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      8,
                      8
                    ]
                  ]
                },
                FieldOptions: {
                  fields: {
                    ctype: {
                      type: "CType",
                      id: 1,
                      options: {
                        default: "STRING"
                      }
                    },
                    packed: {
                      type: "bool",
                      id: 2
                    },
                    jstype: {
                      type: "JSType",
                      id: 6,
                      options: {
                        default: "JS_NORMAL"
                      }
                    },
                    lazy: {
                      type: "bool",
                      id: 5
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    weak: {
                      type: "bool",
                      id: 10
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      4,
                      4
                    ]
                  ],
                  nested: {
                    CType: {
                      values: {
                        STRING: 0,
                        CORD: 1,
                        STRING_PIECE: 2
                      }
                    },
                    JSType: {
                      values: {
                        JS_NORMAL: 0,
                        JS_STRING: 1,
                        JS_NUMBER: 2
                      }
                    }
                  }
                },
                OneofOptions: {
                  fields: {
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                EnumOptions: {
                  fields: {
                    allowAlias: {
                      type: "bool",
                      id: 2
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                EnumValueOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 1
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                ServiceOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 33
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                MethodOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 33
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                UninterpretedOption: {
                  fields: {
                    name: {
                      rule: "repeated",
                      type: "NamePart",
                      id: 2
                    },
                    identifierValue: {
                      type: "string",
                      id: 3
                    },
                    positiveIntValue: {
                      type: "uint64",
                      id: 4
                    },
                    negativeIntValue: {
                      type: "int64",
                      id: 5
                    },
                    doubleValue: {
                      type: "double",
                      id: 6
                    },
                    stringValue: {
                      type: "bytes",
                      id: 7
                    },
                    aggregateValue: {
                      type: "string",
                      id: 8
                    }
                  },
                  nested: {
                    NamePart: {
                      fields: {
                        namePart: {
                          rule: "required",
                          type: "string",
                          id: 1
                        },
                        isExtension: {
                          rule: "required",
                          type: "bool",
                          id: 2
                        }
                      }
                    }
                  }
                },
                SourceCodeInfo: {
                  fields: {
                    location: {
                      rule: "repeated",
                      type: "Location",
                      id: 1
                    }
                  },
                  nested: {
                    Location: {
                      fields: {
                        path: {
                          rule: "repeated",
                          type: "int32",
                          id: 1
                        },
                        span: {
                          rule: "repeated",
                          type: "int32",
                          id: 2
                        },
                        leadingComments: {
                          type: "string",
                          id: 3
                        },
                        trailingComments: {
                          type: "string",
                          id: 4
                        },
                        leadingDetachedComments: {
                          rule: "repeated",
                          type: "string",
                          id: 6
                        }
                      }
                    }
                  }
                },
                GeneratedCodeInfo: {
                  fields: {
                    annotation: {
                      rule: "repeated",
                      type: "Annotation",
                      id: 1
                    }
                  },
                  nested: {
                    Annotation: {
                      fields: {
                        path: {
                          rule: "repeated",
                          type: "int32",
                          id: 1
                        },
                        sourceFile: {
                          type: "string",
                          id: 2
                        },
                        begin: {
                          type: "int32",
                          id: 3
                        },
                        end: {
                          type: "int32",
                          id: 4
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/protobufjs/ext/descriptor/index.js
var require_descriptor2 = __commonJS({
  "node_modules/protobufjs/ext/descriptor/index.js"(exports2, module3) {
    "use strict";
    var $protobuf = require_protobufjs();
    module3.exports = exports2 = $protobuf.descriptor = $protobuf.Root.fromJSON(require_descriptor()).lookup(".google.protobuf");
    var Namespace = $protobuf.Namespace;
    var Root = $protobuf.Root;
    var Enum = $protobuf.Enum;
    var Type = $protobuf.Type;
    var Field = $protobuf.Field;
    var MapField = $protobuf.MapField;
    var OneOf = $protobuf.OneOf;
    var Service = $protobuf.Service;
    var Method = $protobuf.Method;
    Root.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.FileDescriptorSet.decode(descriptor);
      var root = new Root();
      if (descriptor.file) {
        var fileDescriptor, filePackage;
        for (var j = 0, i; j < descriptor.file.length; ++j) {
          filePackage = root;
          if ((fileDescriptor = descriptor.file[j])["package"] && fileDescriptor["package"].length)
            filePackage = root.define(fileDescriptor["package"]);
          if (fileDescriptor.name && fileDescriptor.name.length)
            root.files.push(filePackage.filename = fileDescriptor.name);
          if (fileDescriptor.messageType)
            for (i = 0; i < fileDescriptor.messageType.length; ++i)
              filePackage.add(Type.fromDescriptor(fileDescriptor.messageType[i], fileDescriptor.syntax));
          if (fileDescriptor.enumType)
            for (i = 0; i < fileDescriptor.enumType.length; ++i)
              filePackage.add(Enum.fromDescriptor(fileDescriptor.enumType[i]));
          if (fileDescriptor.extension)
            for (i = 0; i < fileDescriptor.extension.length; ++i)
              filePackage.add(Field.fromDescriptor(fileDescriptor.extension[i]));
          if (fileDescriptor.service)
            for (i = 0; i < fileDescriptor.service.length; ++i)
              filePackage.add(Service.fromDescriptor(fileDescriptor.service[i]));
          var opts = fromDescriptorOptions(fileDescriptor.options, exports2.FileOptions);
          if (opts) {
            var ks = Object.keys(opts);
            for (i = 0; i < ks.length; ++i)
              filePackage.setOption(ks[i], opts[ks[i]]);
          }
        }
      }
      return root;
    };
    Root.prototype.toDescriptor = function toDescriptor(syntax) {
      var set = exports2.FileDescriptorSet.create();
      Root_toDescriptorRecursive(this, set.file, syntax);
      return set;
    };
    function Root_toDescriptorRecursive(ns, files, syntax) {
      var file = exports2.FileDescriptorProto.create({ name: ns.filename || (ns.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto" });
      if (syntax)
        file.syntax = syntax;
      if (!(ns instanceof Root))
        file["package"] = ns.fullName.substring(1);
      for (var i = 0, nested; i < ns.nestedArray.length; ++i)
        if ((nested = ns._nestedArray[i]) instanceof Type)
          file.messageType.push(nested.toDescriptor(syntax));
        else if (nested instanceof Enum)
          file.enumType.push(nested.toDescriptor());
        else if (nested instanceof Field)
          file.extension.push(nested.toDescriptor(syntax));
        else if (nested instanceof Service)
          file.service.push(nested.toDescriptor());
        else if (nested instanceof Namespace)
          Root_toDescriptorRecursive(nested, files, syntax);
      file.options = toDescriptorOptions(ns.options, exports2.FileOptions);
      if (file.messageType.length + file.enumType.length + file.extension.length + file.service.length)
        files.push(file);
    }
    var unnamedMessageIndex = 0;
    Type.fromDescriptor = function fromDescriptor(descriptor, syntax) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.DescriptorProto.decode(descriptor);
      var type = new Type(descriptor.name.length ? descriptor.name : "Type" + unnamedMessageIndex++, fromDescriptorOptions(descriptor.options, exports2.MessageOptions)), i;
      if (descriptor.oneofDecl)
        for (i = 0; i < descriptor.oneofDecl.length; ++i)
          type.add(OneOf.fromDescriptor(descriptor.oneofDecl[i]));
      if (descriptor.field)
        for (i = 0; i < descriptor.field.length; ++i) {
          var field = Field.fromDescriptor(descriptor.field[i], syntax);
          type.add(field);
          if (descriptor.field[i].hasOwnProperty("oneofIndex"))
            type.oneofsArray[descriptor.field[i].oneofIndex].add(field);
        }
      if (descriptor.extension)
        for (i = 0; i < descriptor.extension.length; ++i)
          type.add(Field.fromDescriptor(descriptor.extension[i], syntax));
      if (descriptor.nestedType)
        for (i = 0; i < descriptor.nestedType.length; ++i) {
          type.add(Type.fromDescriptor(descriptor.nestedType[i], syntax));
          if (descriptor.nestedType[i].options && descriptor.nestedType[i].options.mapEntry)
            type.setOption("map_entry", true);
        }
      if (descriptor.enumType)
        for (i = 0; i < descriptor.enumType.length; ++i)
          type.add(Enum.fromDescriptor(descriptor.enumType[i]));
      if (descriptor.extensionRange && descriptor.extensionRange.length) {
        type.extensions = [];
        for (i = 0; i < descriptor.extensionRange.length; ++i)
          type.extensions.push([descriptor.extensionRange[i].start, descriptor.extensionRange[i].end]);
      }
      if (descriptor.reservedRange && descriptor.reservedRange.length || descriptor.reservedName && descriptor.reservedName.length) {
        type.reserved = [];
        if (descriptor.reservedRange)
          for (i = 0; i < descriptor.reservedRange.length; ++i)
            type.reserved.push([descriptor.reservedRange[i].start, descriptor.reservedRange[i].end]);
        if (descriptor.reservedName)
          for (i = 0; i < descriptor.reservedName.length; ++i)
            type.reserved.push(descriptor.reservedName[i]);
      }
      return type;
    };
    Type.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor = exports2.DescriptorProto.create({ name: this.name }), i;
      for (i = 0; i < this.fieldsArray.length; ++i) {
        var fieldDescriptor;
        descriptor.field.push(fieldDescriptor = this._fieldsArray[i].toDescriptor(syntax));
        if (this._fieldsArray[i] instanceof MapField) {
          var keyType = toDescriptorType(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType), valueType = toDescriptorType(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType), valueTypeName = valueType === 11 || valueType === 14 ? this._fieldsArray[i].resolvedType && shortname(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : void 0;
          descriptor.nestedType.push(exports2.DescriptorProto.create({
            name: fieldDescriptor.typeName,
            field: [
              exports2.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: keyType }),
              exports2.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: valueType, typeName: valueTypeName })
            ],
            options: exports2.MessageOptions.create({ mapEntry: true })
          }));
        }
      }
      for (i = 0; i < this.oneofsArray.length; ++i)
        descriptor.oneofDecl.push(this._oneofsArray[i].toDescriptor());
      for (i = 0; i < this.nestedArray.length; ++i) {
        if (this._nestedArray[i] instanceof Field)
          descriptor.field.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Type)
          descriptor.nestedType.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Enum)
          descriptor.enumType.push(this._nestedArray[i].toDescriptor());
      }
      if (this.extensions)
        for (i = 0; i < this.extensions.length; ++i)
          descriptor.extensionRange.push(exports2.DescriptorProto.ExtensionRange.create({ start: this.extensions[i][0], end: this.extensions[i][1] }));
      if (this.reserved)
        for (i = 0; i < this.reserved.length; ++i)
          if (typeof this.reserved[i] === "string")
            descriptor.reservedName.push(this.reserved[i]);
          else
            descriptor.reservedRange.push(exports2.DescriptorProto.ReservedRange.create({ start: this.reserved[i][0], end: this.reserved[i][1] }));
      descriptor.options = toDescriptorOptions(this.options, exports2.MessageOptions);
      return descriptor;
    };
    var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    Field.fromDescriptor = function fromDescriptor(descriptor, syntax) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.DescriptorProto.decode(descriptor);
      if (typeof descriptor.number !== "number")
        throw Error("missing field id");
      var fieldType;
      if (descriptor.typeName && descriptor.typeName.length)
        fieldType = descriptor.typeName;
      else
        fieldType = fromDescriptorType(descriptor.type);
      var fieldRule;
      switch (descriptor.label) {
        case 1:
          fieldRule = void 0;
          break;
        case 2:
          fieldRule = "required";
          break;
        case 3:
          fieldRule = "repeated";
          break;
        default:
          throw Error("illegal label: " + descriptor.label);
      }
      var extendee = descriptor.extendee;
      if (descriptor.extendee !== void 0) {
        extendee = extendee.length ? extendee : void 0;
      }
      var field = new Field(descriptor.name.length ? descriptor.name : "field" + descriptor.number, descriptor.number, fieldType, fieldRule, extendee);
      field.options = fromDescriptorOptions(descriptor.options, exports2.FieldOptions);
      if (descriptor.defaultValue && descriptor.defaultValue.length) {
        var defaultValue = descriptor.defaultValue;
        switch (defaultValue) {
          case "true":
          case "TRUE":
            defaultValue = true;
            break;
          case "false":
          case "FALSE":
            defaultValue = false;
            break;
          default:
            var match = numberRe.exec(defaultValue);
            if (match)
              defaultValue = parseInt(defaultValue);
            break;
        }
        field.setOption("default", defaultValue);
      }
      if (packableDescriptorType(descriptor.type)) {
        if (syntax === "proto3") {
          if (descriptor.options && !descriptor.options.packed)
            field.setOption("packed", false);
        } else if (!(descriptor.options && descriptor.options.packed))
          field.setOption("packed", false);
      }
      return field;
    };
    Field.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor = exports2.FieldDescriptorProto.create({ name: this.name, number: this.id });
      if (this.map) {
        descriptor.type = 11;
        descriptor.typeName = $protobuf.util.ucFirst(this.name);
        descriptor.label = 3;
      } else {
        switch (descriptor.type = toDescriptorType(this.type, this.resolve().resolvedType)) {
          case 10:
          case 11:
          case 14:
            descriptor.typeName = this.resolvedType ? shortname(this.parent, this.resolvedType) : this.type;
            break;
        }
        switch (this.rule) {
          case "repeated":
            descriptor.label = 3;
            break;
          case "required":
            descriptor.label = 2;
            break;
          default:
            descriptor.label = 1;
            break;
        }
      }
      descriptor.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend;
      if (this.partOf) {
        if ((descriptor.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
          throw Error("missing oneof");
      }
      if (this.options) {
        descriptor.options = toDescriptorOptions(this.options, exports2.FieldOptions);
        if (this.options["default"] != null)
          descriptor.defaultValue = String(this.options["default"]);
      }
      if (syntax === "proto3") {
        if (!this.packed)
          (descriptor.options || (descriptor.options = exports2.FieldOptions.create())).packed = false;
      } else if (this.packed)
        (descriptor.options || (descriptor.options = exports2.FieldOptions.create())).packed = true;
      return descriptor;
    };
    var unnamedEnumIndex = 0;
    Enum.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.EnumDescriptorProto.decode(descriptor);
      var values = {};
      if (descriptor.value)
        for (var i = 0; i < descriptor.value.length; ++i) {
          var name4 = descriptor.value[i].name, value = descriptor.value[i].number || 0;
          values[name4 && name4.length ? name4 : "NAME" + value] = value;
        }
      return new Enum(descriptor.name && descriptor.name.length ? descriptor.name : "Enum" + unnamedEnumIndex++, values, fromDescriptorOptions(descriptor.options, exports2.EnumOptions));
    };
    Enum.prototype.toDescriptor = function toDescriptor() {
      var values = [];
      for (var i = 0, ks = Object.keys(this.values); i < ks.length; ++i)
        values.push(exports2.EnumValueDescriptorProto.create({ name: ks[i], number: this.values[ks[i]] }));
      return exports2.EnumDescriptorProto.create({
        name: this.name,
        value: values,
        options: toDescriptorOptions(this.options, exports2.EnumOptions)
      });
    };
    var unnamedOneofIndex = 0;
    OneOf.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.OneofDescriptorProto.decode(descriptor);
      return new OneOf(descriptor.name && descriptor.name.length ? descriptor.name : "oneof" + unnamedOneofIndex++);
    };
    OneOf.prototype.toDescriptor = function toDescriptor() {
      return exports2.OneofDescriptorProto.create({
        name: this.name
      });
    };
    var unnamedServiceIndex = 0;
    Service.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.ServiceDescriptorProto.decode(descriptor);
      var service = new Service(descriptor.name && descriptor.name.length ? descriptor.name : "Service" + unnamedServiceIndex++, fromDescriptorOptions(descriptor.options, exports2.ServiceOptions));
      if (descriptor.method)
        for (var i = 0; i < descriptor.method.length; ++i)
          service.add(Method.fromDescriptor(descriptor.method[i]));
      return service;
    };
    Service.prototype.toDescriptor = function toDescriptor() {
      var methods = [];
      for (var i = 0; i < this.methodsArray.length; ++i)
        methods.push(this._methodsArray[i].toDescriptor());
      return exports2.ServiceDescriptorProto.create({
        name: this.name,
        method: methods,
        options: toDescriptorOptions(this.options, exports2.ServiceOptions)
      });
    };
    var unnamedMethodIndex = 0;
    Method.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.MethodDescriptorProto.decode(descriptor);
      return new Method(descriptor.name && descriptor.name.length ? descriptor.name : "Method" + unnamedMethodIndex++, "rpc", descriptor.inputType, descriptor.outputType, Boolean(descriptor.clientStreaming), Boolean(descriptor.serverStreaming), fromDescriptorOptions(descriptor.options, exports2.MethodOptions));
    };
    Method.prototype.toDescriptor = function toDescriptor() {
      return exports2.MethodDescriptorProto.create({
        name: this.name,
        inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
        outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
        clientStreaming: this.requestStream,
        serverStreaming: this.responseStream,
        options: toDescriptorOptions(this.options, exports2.MethodOptions)
      });
    };
    function fromDescriptorType(type) {
      switch (type) {
        case 1:
          return "double";
        case 2:
          return "float";
        case 3:
          return "int64";
        case 4:
          return "uint64";
        case 5:
          return "int32";
        case 6:
          return "fixed64";
        case 7:
          return "fixed32";
        case 8:
          return "bool";
        case 9:
          return "string";
        case 12:
          return "bytes";
        case 13:
          return "uint32";
        case 15:
          return "sfixed32";
        case 16:
          return "sfixed64";
        case 17:
          return "sint32";
        case 18:
          return "sint64";
      }
      throw Error("illegal type: " + type);
    }
    function packableDescriptorType(type) {
      switch (type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          return true;
      }
      return false;
    }
    function toDescriptorType(type, resolvedType) {
      switch (type) {
        case "double":
          return 1;
        case "float":
          return 2;
        case "int64":
          return 3;
        case "uint64":
          return 4;
        case "int32":
          return 5;
        case "fixed64":
          return 6;
        case "fixed32":
          return 7;
        case "bool":
          return 8;
        case "string":
          return 9;
        case "bytes":
          return 12;
        case "uint32":
          return 13;
        case "sfixed32":
          return 15;
        case "sfixed64":
          return 16;
        case "sint32":
          return 17;
        case "sint64":
          return 18;
      }
      if (resolvedType instanceof Enum)
        return 14;
      if (resolvedType instanceof Type)
        return resolvedType.group ? 10 : 11;
      throw Error("illegal type: " + type);
    }
    function fromDescriptorOptions(options, type) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, field, key, val; i < type.fieldsArray.length; ++i)
        if ((key = (field = type._fieldsArray[i]).name) !== "uninterpretedOption") {
          if (options.hasOwnProperty(key)) {
            val = options[key];
            if (field.resolvedType instanceof Enum && typeof val === "number" && field.resolvedType.valuesById[val] !== void 0)
              val = field.resolvedType.valuesById[val];
            out.push(underScore(key), val);
          }
        }
      return out.length ? $protobuf.util.toObject(out) : void 0;
    }
    function toDescriptorOptions(options, type) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, ks = Object.keys(options), key, val; i < ks.length; ++i) {
        val = options[key = ks[i]];
        if (key === "default")
          continue;
        var field = type.fields[key];
        if (!field && !(field = type.fields[key = $protobuf.util.camelCase(key)]))
          continue;
        out.push(key, val);
      }
      return out.length ? type.fromObject($protobuf.util.toObject(out)) : void 0;
    }
    function shortname(from, to) {
      var fromPath = from.fullName.split("."), toPath = to.fullName.split("."), i = 0, j = 0, k = toPath.length - 1;
      if (!(from instanceof Root) && to instanceof Namespace)
        while (i < fromPath.length && j < k && fromPath[i] === toPath[j]) {
          var other = to.lookup(fromPath[i++], true);
          if (other !== null && other !== to)
            break;
          ++j;
        }
      else
        for (; i < fromPath.length && j < k && fromPath[i] === toPath[j]; ++i, ++j)
          ;
      return toPath.slice(j).join(".");
    }
    function underScore(str) {
      return str.substring(0, 1) + str.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function($0, $1) {
        return "_" + $1.toLowerCase();
      });
    }
  }
});

// node_modules/protobufjs/google/protobuf/api.json
var require_api = __commonJS({
  "node_modules/protobufjs/google/protobuf/api.json"(exports2, module3) {
    module3.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                Api: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    methods: {
                      rule: "repeated",
                      type: "Method",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    },
                    version: {
                      type: "string",
                      id: 4
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 5
                    },
                    mixins: {
                      rule: "repeated",
                      type: "Mixin",
                      id: 6
                    },
                    syntax: {
                      type: "Syntax",
                      id: 7
                    }
                  }
                },
                Method: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    requestTypeUrl: {
                      type: "string",
                      id: 2
                    },
                    requestStreaming: {
                      type: "bool",
                      id: 3
                    },
                    responseTypeUrl: {
                      type: "string",
                      id: 4
                    },
                    responseStreaming: {
                      type: "bool",
                      id: 5
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 6
                    },
                    syntax: {
                      type: "Syntax",
                      id: 7
                    }
                  }
                },
                Mixin: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    root: {
                      type: "string",
                      id: 2
                    }
                  }
                },
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                Option: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "Any",
                      id: 2
                    }
                  }
                },
                Syntax: {
                  values: {
                    SYNTAX_PROTO2: 0,
                    SYNTAX_PROTO3: 1
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/protobufjs/google/protobuf/source_context.json
var require_source_context = __commonJS({
  "node_modules/protobufjs/google/protobuf/source_context.json"(exports2, module3) {
    module3.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/protobufjs/google/protobuf/type.json
var require_type2 = __commonJS({
  "node_modules/protobufjs/google/protobuf/type.json"(exports2, module3) {
    module3.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                Type: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    fields: {
                      rule: "repeated",
                      type: "Field",
                      id: 2
                    },
                    oneofs: {
                      rule: "repeated",
                      type: "string",
                      id: 3
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 4
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 5
                    },
                    syntax: {
                      type: "Syntax",
                      id: 6
                    }
                  }
                },
                Field: {
                  fields: {
                    kind: {
                      type: "Kind",
                      id: 1
                    },
                    cardinality: {
                      type: "Cardinality",
                      id: 2
                    },
                    number: {
                      type: "int32",
                      id: 3
                    },
                    name: {
                      type: "string",
                      id: 4
                    },
                    typeUrl: {
                      type: "string",
                      id: 6
                    },
                    oneofIndex: {
                      type: "int32",
                      id: 7
                    },
                    packed: {
                      type: "bool",
                      id: 8
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 9
                    },
                    jsonName: {
                      type: "string",
                      id: 10
                    },
                    defaultValue: {
                      type: "string",
                      id: 11
                    }
                  },
                  nested: {
                    Kind: {
                      values: {
                        TYPE_UNKNOWN: 0,
                        TYPE_DOUBLE: 1,
                        TYPE_FLOAT: 2,
                        TYPE_INT64: 3,
                        TYPE_UINT64: 4,
                        TYPE_INT32: 5,
                        TYPE_FIXED64: 6,
                        TYPE_FIXED32: 7,
                        TYPE_BOOL: 8,
                        TYPE_STRING: 9,
                        TYPE_GROUP: 10,
                        TYPE_MESSAGE: 11,
                        TYPE_BYTES: 12,
                        TYPE_UINT32: 13,
                        TYPE_ENUM: 14,
                        TYPE_SFIXED32: 15,
                        TYPE_SFIXED64: 16,
                        TYPE_SINT32: 17,
                        TYPE_SINT64: 18
                      }
                    },
                    Cardinality: {
                      values: {
                        CARDINALITY_UNKNOWN: 0,
                        CARDINALITY_OPTIONAL: 1,
                        CARDINALITY_REQUIRED: 2,
                        CARDINALITY_REPEATED: 3
                      }
                    }
                  }
                },
                Enum: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    enumvalue: {
                      rule: "repeated",
                      type: "EnumValue",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 4
                    },
                    syntax: {
                      type: "Syntax",
                      id: 5
                    }
                  }
                },
                EnumValue: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    }
                  }
                },
                Option: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "Any",
                      id: 2
                    }
                  }
                },
                Syntax: {
                  values: {
                    SYNTAX_PROTO2: 0,
                    SYNTAX_PROTO3: 1
                  }
                },
                Any: {
                  fields: {
                    type_url: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "bytes",
                      id: 2
                    }
                  }
                },
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/@grpc/proto-loader/build/src/util.js
var require_util2 = __commonJS({
  "node_modules/@grpc/proto-loader/build/src/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fs = require("fs");
    var path = require("path");
    var Protobuf = require_protobufjs();
    function addIncludePathResolver(root, includePaths) {
      const originalResolvePath = root.resolvePath;
      root.resolvePath = (origin, target) => {
        if (path.isAbsolute(target)) {
          return target;
        }
        for (const directory of includePaths) {
          const fullPath = path.join(directory, target);
          try {
            fs.accessSync(fullPath, fs.constants.R_OK);
            return fullPath;
          } catch (err) {
            continue;
          }
        }
        process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
        return originalResolvePath(origin, target);
      };
    }
    async function loadProtosWithOptions(filename, options) {
      const root = new Protobuf.Root();
      options = options || {};
      if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
          return Promise.reject(new Error("The includeDirs option must be an array"));
        }
        addIncludePathResolver(root, options.includeDirs);
      }
      const loadedRoot = await root.load(filename, options);
      loadedRoot.resolveAll();
      return loadedRoot;
    }
    exports2.loadProtosWithOptions = loadProtosWithOptions;
    function loadProtosWithOptionsSync(filename, options) {
      const root = new Protobuf.Root();
      options = options || {};
      if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
          throw new Error("The includeDirs option must be an array");
        }
        addIncludePathResolver(root, options.includeDirs);
      }
      const loadedRoot = root.loadSync(filename, options);
      loadedRoot.resolveAll();
      return loadedRoot;
    }
    exports2.loadProtosWithOptionsSync = loadProtosWithOptionsSync;
    function addCommonProtos() {
      const apiDescriptor = require_api();
      const descriptorDescriptor = require_descriptor();
      const sourceContextDescriptor = require_source_context();
      const typeDescriptor = require_type2();
      Protobuf.common("api", apiDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("descriptor", descriptorDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("source_context", sourceContextDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("type", typeDescriptor.nested.google.nested.protobuf.nested);
    }
    exports2.addCommonProtos = addCommonProtos;
  }
});

// node_modules/@grpc/proto-loader/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/@grpc/proto-loader/build/src/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var camelCase = require_lodash();
    var Protobuf = require_protobufjs();
    var descriptor = require_descriptor2();
    var util_1 = require_util2();
    function isAnyExtension(obj) {
      return "@type" in obj && typeof obj["@type"] === "string";
    }
    exports2.isAnyExtension = isAnyExtension;
    var descriptorOptions = {
      longs: String,
      enums: String,
      bytes: String,
      defaults: true,
      oneofs: true,
      json: true
    };
    function joinName(baseName, name4) {
      if (baseName === "") {
        return name4;
      } else {
        return baseName + "." + name4;
      }
    }
    function isHandledReflectionObject(obj) {
      return obj instanceof Protobuf.Service || obj instanceof Protobuf.Type || obj instanceof Protobuf.Enum;
    }
    function isNamespaceBase(obj) {
      return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
    }
    function getAllHandledReflectionObjects(obj, parentName) {
      const objName = joinName(parentName, obj.name);
      if (isHandledReflectionObject(obj)) {
        return [[objName, obj]];
      } else {
        if (isNamespaceBase(obj) && typeof obj.nested !== "undefined") {
          return Object.keys(obj.nested).map((name4) => {
            return getAllHandledReflectionObjects(obj.nested[name4], objName);
          }).reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
        }
      }
      return [];
    }
    function createDeserializer(cls, options) {
      return function deserialize(argBuf) {
        return cls.toObject(cls.decode(argBuf), options);
      };
    }
    function createSerializer(cls) {
      return function serialize(arg) {
        if (Array.isArray(arg)) {
          throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);
        }
        const message = cls.fromObject(arg);
        return cls.encode(message).finish();
      };
    }
    function createMethodDefinition(method, serviceName, options, fileDescriptors) {
      const requestType = method.resolvedRequestType;
      const responseType = method.resolvedResponseType;
      return {
        path: "/" + serviceName + "/" + method.name,
        requestStream: !!method.requestStream,
        responseStream: !!method.responseStream,
        requestSerialize: createSerializer(requestType),
        requestDeserialize: createDeserializer(requestType, options),
        responseSerialize: createSerializer(responseType),
        responseDeserialize: createDeserializer(responseType, options),
        originalName: camelCase(method.name),
        requestType: createMessageDefinition(requestType, fileDescriptors),
        responseType: createMessageDefinition(responseType, fileDescriptors)
      };
    }
    function createServiceDefinition(service, name4, options, fileDescriptors) {
      const def = {};
      for (const method of service.methodsArray) {
        def[method.name] = createMethodDefinition(method, name4, options, fileDescriptors);
      }
      return def;
    }
    function createMessageDefinition(message, fileDescriptors) {
      const messageDescriptor = message.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 DescriptorProto",
        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createEnumDefinition(enumType, fileDescriptors) {
      const enumDescriptor = enumType.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 EnumDescriptorProto",
        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createDefinition(obj, name4, options, fileDescriptors) {
      if (obj instanceof Protobuf.Service) {
        return createServiceDefinition(obj, name4, options, fileDescriptors);
      } else if (obj instanceof Protobuf.Type) {
        return createMessageDefinition(obj, fileDescriptors);
      } else if (obj instanceof Protobuf.Enum) {
        return createEnumDefinition(obj, fileDescriptors);
      } else {
        throw new Error("Type mismatch in reflection object handling");
      }
    }
    function createPackageDefinition(root, options) {
      const def = {};
      root.resolveAll();
      const descriptorList = root.toDescriptor("proto3").file;
      const bufferList = descriptorList.map((value) => Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));
      for (const [name4, obj] of getAllHandledReflectionObjects(root, "")) {
        def[name4] = createDefinition(obj, name4, options, bufferList);
      }
      return def;
    }
    function createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {
      options = options || {};
      const root = Protobuf.Root.fromDescriptor(decodedDescriptorSet);
      root.resolveAll();
      return createPackageDefinition(root, options);
    }
    function load(filename, options) {
      return util_1.loadProtosWithOptions(filename, options).then((loadedRoot) => {
        return createPackageDefinition(loadedRoot, options);
      });
    }
    exports2.load = load;
    function loadSync2(filename, options) {
      const loadedRoot = util_1.loadProtosWithOptionsSync(filename, options);
      return createPackageDefinition(loadedRoot, options);
    }
    exports2.loadSync = loadSync2;
    function fromJSON(json, options) {
      options = options || {};
      const loadedRoot = Protobuf.Root.fromJSON(json);
      loadedRoot.resolveAll();
      return createPackageDefinition(loadedRoot, options);
    }
    exports2.fromJSON = fromJSON;
    function loadFileDescriptorSetFromBuffer(descriptorSet, options) {
      const decodedDescriptorSet = descriptor.FileDescriptorSet.decode(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports2.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;
    function loadFileDescriptorSetFromObject(descriptorSet, options) {
      const decodedDescriptorSet = descriptor.FileDescriptorSet.fromObject(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports2.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;
    util_1.addCommonProtos();
  }
});

// node_modules/@grpc/grpc-js/build/src/channelz.js
var require_channelz = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channelz.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.getChannelzServiceDefinition = exports2.getChannelzHandlers = exports2.unregisterChannelzRef = exports2.registerChannelzSocket = exports2.registerChannelzServer = exports2.registerChannelzSubchannel = exports2.registerChannelzChannel = exports2.ChannelzCallTracker = exports2.ChannelzChildrenTracker = exports2.ChannelzTrace = void 0;
    var net_1 = require("net");
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var subchannel_address_1 = require_subchannel_address();
    var admin_1 = require_admin();
    var make_client_1 = require_make_client();
    function channelRefToMessage(ref) {
      return {
        channel_id: ref.id,
        name: ref.name
      };
    }
    function subchannelRefToMessage(ref) {
      return {
        subchannel_id: ref.id,
        name: ref.name
      };
    }
    function serverRefToMessage(ref) {
      return {
        server_id: ref.id
      };
    }
    function socketRefToMessage(ref) {
      return {
        socket_id: ref.id,
        name: ref.name
      };
    }
    var TARGET_RETAINED_TRACES = 32;
    var ChannelzTrace = class {
      constructor() {
        this.events = [];
        this.eventsLogged = 0;
        this.creationTimestamp = new Date();
      }
      addTrace(severity, description, child) {
        const timestamp = new Date();
        this.events.push({
          description,
          severity,
          timestamp,
          childChannel: (child === null || child === void 0 ? void 0 : child.kind) === "channel" ? child : void 0,
          childSubchannel: (child === null || child === void 0 ? void 0 : child.kind) === "subchannel" ? child : void 0
        });
        if (this.events.length >= TARGET_RETAINED_TRACES * 2) {
          this.events = this.events.slice(TARGET_RETAINED_TRACES);
        }
        this.eventsLogged += 1;
      }
      getTraceMessage() {
        return {
          creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
          num_events_logged: this.eventsLogged,
          events: this.events.map((event) => {
            return {
              description: event.description,
              severity: event.severity,
              timestamp: dateToProtoTimestamp(event.timestamp),
              channel_ref: event.childChannel ? channelRefToMessage(event.childChannel) : null,
              subchannel_ref: event.childSubchannel ? subchannelRefToMessage(event.childSubchannel) : null
            };
          })
        };
      }
    };
    exports2.ChannelzTrace = ChannelzTrace;
    var ChannelzChildrenTracker = class {
      constructor() {
        this.channelChildren = new Map();
        this.subchannelChildren = new Map();
        this.socketChildren = new Map();
      }
      refChild(child) {
        var _a, _b, _c;
        switch (child.kind) {
          case "channel": {
            let trackedChild = (_a = this.channelChildren.get(child.id)) !== null && _a !== void 0 ? _a : { ref: child, count: 0 };
            trackedChild.count += 1;
            this.channelChildren.set(child.id, trackedChild);
            break;
          }
          case "subchannel": {
            let trackedChild = (_b = this.subchannelChildren.get(child.id)) !== null && _b !== void 0 ? _b : { ref: child, count: 0 };
            trackedChild.count += 1;
            this.subchannelChildren.set(child.id, trackedChild);
            break;
          }
          case "socket": {
            let trackedChild = (_c = this.socketChildren.get(child.id)) !== null && _c !== void 0 ? _c : { ref: child, count: 0 };
            trackedChild.count += 1;
            this.socketChildren.set(child.id, trackedChild);
            break;
          }
        }
      }
      unrefChild(child) {
        switch (child.kind) {
          case "channel": {
            let trackedChild = this.channelChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.channelChildren.delete(child.id);
              } else {
                this.channelChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
          case "subchannel": {
            let trackedChild = this.subchannelChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.subchannelChildren.delete(child.id);
              } else {
                this.subchannelChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
          case "socket": {
            let trackedChild = this.socketChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.socketChildren.delete(child.id);
              } else {
                this.socketChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
        }
      }
      getChildLists() {
        const channels2 = [];
        for (const { ref } of this.channelChildren.values()) {
          channels2.push(ref);
        }
        const subchannels2 = [];
        for (const { ref } of this.subchannelChildren.values()) {
          subchannels2.push(ref);
        }
        const sockets2 = [];
        for (const { ref } of this.socketChildren.values()) {
          sockets2.push(ref);
        }
        return { channels: channels2, subchannels: subchannels2, sockets: sockets2 };
      }
    };
    exports2.ChannelzChildrenTracker = ChannelzChildrenTracker;
    var ChannelzCallTracker = class {
      constructor() {
        this.callsStarted = 0;
        this.callsSucceeded = 0;
        this.callsFailed = 0;
        this.lastCallStartedTimestamp = null;
      }
      addCallStarted() {
        this.callsStarted += 1;
        this.lastCallStartedTimestamp = new Date();
      }
      addCallSucceeded() {
        this.callsSucceeded += 1;
      }
      addCallFailed() {
        this.callsFailed += 1;
      }
    };
    exports2.ChannelzCallTracker = ChannelzCallTracker;
    var nextId = 1;
    function getNextId() {
      return nextId++;
    }
    var channels = [];
    var subchannels = [];
    var servers = [];
    var sockets = [];
    function registerChannelzChannel(name4, getInfo) {
      const id = getNextId();
      const ref = { id, name: name4, kind: "channel" };
      channels[id] = { ref, getInfo };
      return ref;
    }
    exports2.registerChannelzChannel = registerChannelzChannel;
    function registerChannelzSubchannel(name4, getInfo) {
      const id = getNextId();
      const ref = { id, name: name4, kind: "subchannel" };
      subchannels[id] = { ref, getInfo };
      return ref;
    }
    exports2.registerChannelzSubchannel = registerChannelzSubchannel;
    function registerChannelzServer(getInfo) {
      const id = getNextId();
      const ref = { id, kind: "server" };
      servers[id] = { ref, getInfo };
      return ref;
    }
    exports2.registerChannelzServer = registerChannelzServer;
    function registerChannelzSocket(name4, getInfo) {
      const id = getNextId();
      const ref = { id, name: name4, kind: "socket" };
      sockets[id] = { ref, getInfo };
      return ref;
    }
    exports2.registerChannelzSocket = registerChannelzSocket;
    function unregisterChannelzRef(ref) {
      switch (ref.kind) {
        case "channel":
          delete channels[ref.id];
          return;
        case "subchannel":
          delete subchannels[ref.id];
          return;
        case "server":
          delete servers[ref.id];
          return;
        case "socket":
          delete sockets[ref.id];
          return;
      }
    }
    exports2.unregisterChannelzRef = unregisterChannelzRef;
    function parseIPv6Section(addressSection) {
      const numberValue = Number.parseInt(addressSection, 16);
      return [numberValue / 256 | 0, numberValue % 256];
    }
    function parseIPv6Chunk(addressChunk) {
      if (addressChunk === "") {
        return [];
      }
      const bytePairs = addressChunk.split(":").map((section) => parseIPv6Section(section));
      const result = [];
      return result.concat(...bytePairs);
    }
    function ipAddressStringToBuffer(ipAddress) {
      if (net_1.isIPv4(ipAddress)) {
        return Buffer.from(Uint8Array.from(ipAddress.split(".").map((segment) => Number.parseInt(segment))));
      } else if (net_1.isIPv6(ipAddress)) {
        let leftSection;
        let rightSection;
        const doubleColonIndex = ipAddress.indexOf("::");
        if (doubleColonIndex === -1) {
          leftSection = ipAddress;
          rightSection = "";
        } else {
          leftSection = ipAddress.substring(0, doubleColonIndex);
          rightSection = ipAddress.substring(doubleColonIndex + 2);
        }
        const leftBuffer = Buffer.from(parseIPv6Chunk(leftSection));
        const rightBuffer = Buffer.from(parseIPv6Chunk(rightSection));
        const middleBuffer = Buffer.alloc(16 - leftBuffer.length - rightBuffer.length, 0);
        return Buffer.concat([leftBuffer, middleBuffer, rightBuffer]);
      } else {
        return null;
      }
    }
    function connectivityStateToMessage(state) {
      switch (state) {
        case connectivity_state_1.ConnectivityState.CONNECTING:
          return {
            state: "CONNECTING"
          };
        case connectivity_state_1.ConnectivityState.IDLE:
          return {
            state: "IDLE"
          };
        case connectivity_state_1.ConnectivityState.READY:
          return {
            state: "READY"
          };
        case connectivity_state_1.ConnectivityState.SHUTDOWN:
          return {
            state: "SHUTDOWN"
          };
        case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
          return {
            state: "TRANSIENT_FAILURE"
          };
        default:
          return {
            state: "UNKNOWN"
          };
      }
    }
    function dateToProtoTimestamp(date) {
      if (!date) {
        return null;
      }
      const millisSinceEpoch = date.getTime();
      return {
        seconds: millisSinceEpoch / 1e3 | 0,
        nanos: millisSinceEpoch % 1e3 * 1e6
      };
    }
    function getChannelMessage(channelEntry) {
      const resolvedInfo = channelEntry.getInfo();
      return {
        ref: channelRefToMessage(channelEntry.ref),
        data: {
          target: resolvedInfo.target,
          state: connectivityStateToMessage(resolvedInfo.state),
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        channel_ref: resolvedInfo.children.channels.map((ref) => channelRefToMessage(ref)),
        subchannel_ref: resolvedInfo.children.subchannels.map((ref) => subchannelRefToMessage(ref))
      };
    }
    function GetChannel(call, callback) {
      const channelId = Number.parseInt(call.request.channel_id);
      const channelEntry = channels[channelId];
      if (channelEntry === void 0) {
        callback({
          "code": constants_1.Status.NOT_FOUND,
          "details": "No channel data found for id " + channelId
        });
        return;
      }
      callback(null, { channel: getChannelMessage(channelEntry) });
    }
    function GetTopChannels(call, callback) {
      const maxResults = Number.parseInt(call.request.max_results);
      const resultList = [];
      let i = Number.parseInt(call.request.start_channel_id);
      for (; i < channels.length; i++) {
        const channelEntry = channels[i];
        if (channelEntry === void 0) {
          continue;
        }
        resultList.push(getChannelMessage(channelEntry));
        if (resultList.length >= maxResults) {
          break;
        }
      }
      callback(null, {
        channel: resultList,
        end: i >= servers.length
      });
    }
    function getServerMessage(serverEntry) {
      const resolvedInfo = serverEntry.getInfo();
      return {
        ref: serverRefToMessage(serverEntry.ref),
        data: {
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        listen_socket: resolvedInfo.listenerChildren.sockets.map((ref) => socketRefToMessage(ref))
      };
    }
    function GetServer(call, callback) {
      const serverId = Number.parseInt(call.request.server_id);
      const serverEntry = servers[serverId];
      if (serverEntry === void 0) {
        callback({
          "code": constants_1.Status.NOT_FOUND,
          "details": "No server data found for id " + serverId
        });
        return;
      }
      callback(null, { server: getServerMessage(serverEntry) });
    }
    function GetServers(call, callback) {
      const maxResults = Number.parseInt(call.request.max_results);
      const resultList = [];
      let i = Number.parseInt(call.request.start_server_id);
      for (; i < servers.length; i++) {
        const serverEntry = servers[i];
        if (serverEntry === void 0) {
          continue;
        }
        resultList.push(getServerMessage(serverEntry));
        if (resultList.length >= maxResults) {
          break;
        }
      }
      callback(null, {
        server: resultList,
        end: i >= servers.length
      });
    }
    function GetSubchannel(call, callback) {
      const subchannelId = Number.parseInt(call.request.subchannel_id);
      const subchannelEntry = subchannels[subchannelId];
      if (subchannelEntry === void 0) {
        callback({
          "code": constants_1.Status.NOT_FOUND,
          "details": "No subchannel data found for id " + subchannelId
        });
        return;
      }
      const resolvedInfo = subchannelEntry.getInfo();
      const subchannelMessage = {
        ref: subchannelRefToMessage(subchannelEntry.ref),
        data: {
          target: resolvedInfo.target,
          state: connectivityStateToMessage(resolvedInfo.state),
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        socket_ref: resolvedInfo.children.sockets.map((ref) => socketRefToMessage(ref))
      };
      callback(null, { subchannel: subchannelMessage });
    }
    function subchannelAddressToAddressMessage(subchannelAddress) {
      var _a;
      if (subchannel_address_1.isTcpSubchannelAddress(subchannelAddress)) {
        return {
          address: "tcpip_address",
          tcpip_address: {
            ip_address: (_a = ipAddressStringToBuffer(subchannelAddress.host)) !== null && _a !== void 0 ? _a : void 0,
            port: subchannelAddress.port
          }
        };
      } else {
        return {
          address: "uds_address",
          uds_address: {
            filename: subchannelAddress.path
          }
        };
      }
    }
    function GetSocket(call, callback) {
      var _a, _b, _c, _d, _e;
      const socketId = Number.parseInt(call.request.socket_id);
      const socketEntry = sockets[socketId];
      if (socketEntry === void 0) {
        callback({
          "code": constants_1.Status.NOT_FOUND,
          "details": "No socket data found for id " + socketId
        });
        return;
      }
      const resolvedInfo = socketEntry.getInfo();
      const securityMessage = resolvedInfo.security ? {
        model: "tls",
        tls: {
          cipher_suite: resolvedInfo.security.cipherSuiteStandardName ? "standard_name" : "other_name",
          standard_name: (_a = resolvedInfo.security.cipherSuiteStandardName) !== null && _a !== void 0 ? _a : void 0,
          other_name: (_b = resolvedInfo.security.cipherSuiteOtherName) !== null && _b !== void 0 ? _b : void 0,
          local_certificate: (_c = resolvedInfo.security.localCertificate) !== null && _c !== void 0 ? _c : void 0,
          remote_certificate: (_d = resolvedInfo.security.remoteCertificate) !== null && _d !== void 0 ? _d : void 0
        }
      } : null;
      const socketMessage = {
        ref: socketRefToMessage(socketEntry.ref),
        local: resolvedInfo.localAddress ? subchannelAddressToAddressMessage(resolvedInfo.localAddress) : null,
        remote: resolvedInfo.remoteAddress ? subchannelAddressToAddressMessage(resolvedInfo.remoteAddress) : null,
        remote_name: (_e = resolvedInfo.remoteName) !== null && _e !== void 0 ? _e : void 0,
        security: securityMessage,
        data: {
          keep_alives_sent: resolvedInfo.keepAlivesSent,
          streams_started: resolvedInfo.streamsStarted,
          streams_succeeded: resolvedInfo.streamsSucceeded,
          streams_failed: resolvedInfo.streamsFailed,
          last_local_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastLocalStreamCreatedTimestamp),
          last_remote_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastRemoteStreamCreatedTimestamp),
          messages_received: resolvedInfo.messagesReceived,
          messages_sent: resolvedInfo.messagesSent,
          last_message_received_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageReceivedTimestamp),
          last_message_sent_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageSentTimestamp),
          local_flow_control_window: resolvedInfo.localFlowControlWindow ? { value: resolvedInfo.localFlowControlWindow } : null,
          remote_flow_control_window: resolvedInfo.remoteFlowControlWindow ? { value: resolvedInfo.remoteFlowControlWindow } : null
        }
      };
      callback(null, { socket: socketMessage });
    }
    function GetServerSockets(call, callback) {
      const serverId = Number.parseInt(call.request.server_id);
      const serverEntry = servers[serverId];
      if (serverEntry === void 0) {
        callback({
          "code": constants_1.Status.NOT_FOUND,
          "details": "No server data found for id " + serverId
        });
        return;
      }
      const startId = Number.parseInt(call.request.start_socket_id);
      const maxResults = Number.parseInt(call.request.max_results);
      const resolvedInfo = serverEntry.getInfo();
      const allSockets = resolvedInfo.sessionChildren.sockets.sort((ref1, ref2) => ref1.id - ref2.id);
      const resultList = [];
      let i = 0;
      for (; i < allSockets.length; i++) {
        if (allSockets[i].id >= startId) {
          resultList.push(socketRefToMessage(allSockets[i]));
          if (resultList.length >= maxResults) {
            break;
          }
        }
      }
      callback(null, {
        socket_ref: resultList,
        end: i >= allSockets.length
      });
    }
    function getChannelzHandlers() {
      return {
        GetChannel,
        GetTopChannels,
        GetServer,
        GetServers,
        GetSubchannel,
        GetSocket,
        GetServerSockets
      };
    }
    exports2.getChannelzHandlers = getChannelzHandlers;
    var loadedChannelzDefinition = null;
    function getChannelzServiceDefinition() {
      if (loadedChannelzDefinition) {
        return loadedChannelzDefinition;
      }
      const loaderLoadSync = require_src2().loadSync;
      const loadedProto = loaderLoadSync("channelz.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [
          `${__dirname}/../../proto`
        ]
      });
      const channelzGrpcObject = make_client_1.loadPackageDefinition(loadedProto);
      loadedChannelzDefinition = channelzGrpcObject.grpc.channelz.v1.Channelz.service;
      return loadedChannelzDefinition;
    }
    exports2.getChannelzServiceDefinition = getChannelzServiceDefinition;
    function setup() {
      admin_1.registerAdminService(getChannelzServiceDefinition, getChannelzHandlers);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/package.json
var require_package = __commonJS({
  "node_modules/@grpc/grpc-js/package.json"(exports2, module3) {
    module3.exports = {
      _from: "@grpc/grpc-js@^1.3.2",
      _id: "@grpc/grpc-js@1.4.4",
      _inBundle: false,
      _integrity: "sha512-a6222b7Dl6fIlMgzVl7e+NiRoLiZFbpcwvBH2Oli56Bn7W4/3Ld+86hK4ffPn5rx2DlDidmIcvIJiOQXyhv9gA==",
      _location: "/@grpc/grpc-js",
      _phantomChildren: {},
      _requested: {
        type: "range",
        registry: true,
        raw: "@grpc/grpc-js@^1.3.2",
        name: "@grpc/grpc-js",
        escapedName: "@grpc%2fgrpc-js",
        scope: "@grpc",
        rawSpec: "^1.3.2",
        saveSpec: null,
        fetchSpec: "^1.3.2"
      },
      _requiredBy: [
        "/@firebase/firestore"
      ],
      _resolved: "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.4.4.tgz",
      _shasum: "59336f13d77bc446bbdf2161564a32639288dc5b",
      _spec: "@grpc/grpc-js@^1.3.2",
      _where: "D:\\Rcorp\\Coding\\Personal Practice\\Web Practice\\Web LogIf - Implementasi Metode SMART\\web-logif-sixers\\node_modules\\@firebase\\firestore",
      author: {
        name: "Google Inc."
      },
      bundleDependencies: false,
      contributors: [
        {
          name: "Google Inc."
        }
      ],
      dependencies: {
        "@grpc/proto-loader": "^0.6.4",
        "@types/node": ">=12.12.47"
      },
      deprecated: false,
      description: "gRPC Library for Node - pure JS implementation",
      devDependencies: {
        "@types/gulp": "^4.0.6",
        "@types/gulp-mocha": "0.0.32",
        "@types/lodash": "^4.14.108",
        "@types/mocha": "^5.2.6",
        "@types/ncp": "^2.0.1",
        "@types/pify": "^3.0.2",
        "@types/yargs": "^15.0.5",
        "clang-format": "^1.0.55",
        execa: "^2.0.3",
        gts: "^2.0.0",
        gulp: "^4.0.2",
        "gulp-mocha": "^6.0.0",
        lodash: "^4.17.4",
        madge: "^5.0.1",
        "mocha-jenkins-reporter": "^0.4.1",
        ncp: "^2.0.0",
        pify: "^4.0.1",
        rimraf: "^3.0.2",
        "ts-node": "^8.3.0",
        typescript: "^3.7.2",
        yargs: "^15.4.1"
      },
      engines: {
        node: "^8.13.0 || >=10.10.0"
      },
      files: [
        "src/**/*.ts",
        "build/src/**/*.{js,d.ts,js.map}",
        "proto/*.proto",
        "LICENSE",
        "deps/envoy-api/envoy/api/v2/**/*.proto",
        "deps/envoy-api/envoy/config/**/*.proto",
        "deps/envoy-api/envoy/service/**/*.proto",
        "deps/envoy-api/envoy/type/**/*.proto",
        "deps/udpa/udpa/**/*.proto",
        "deps/googleapis/google/api/*.proto",
        "deps/googleapis/google/rpc/*.proto",
        "deps/protoc-gen-validate/validate/**/*.proto"
      ],
      homepage: "https://grpc.io/",
      keywords: [],
      license: "Apache-2.0",
      main: "build/src/index.js",
      name: "@grpc/grpc-js",
      repository: {
        type: "git",
        url: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js"
      },
      scripts: {
        build: "npm run compile",
        check: "gts check src/**/*.ts",
        clean: `node -e 'require("rimraf")("./build", () => {})'`,
        compile: "tsc -p .",
        fix: "gts fix src/*.ts",
        format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
        "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ -O src/generated/ --grpcLib ../index channelz.proto",
        lint: "npm run check",
        posttest: "npm run check && madge -c ./build/src",
        prepare: "npm run generate-types && npm run compile",
        pretest: "npm run generate-types && npm run compile",
        test: "gulp test"
      },
      types: "build/src/index.d.ts",
      version: "1.4.4"
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/subchannel.js
var require_subchannel = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/subchannel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Subchannel = void 0;
    var http2 = require("http2");
    var tls_1 = require("tls");
    var connectivity_state_1 = require_connectivity_state();
    var backoff_timeout_1 = require_backoff_timeout();
    var resolver_1 = require_resolver();
    var logging = require_logging();
    var constants_1 = require_constants();
    var http_proxy_1 = require_http_proxy();
    var net = require("net");
    var uri_parser_1 = require_uri_parser();
    var subchannel_address_1 = require_subchannel_address();
    var channelz_1 = require_channelz();
    var clientVersion = require_package().version;
    var TRACER_NAME = "subchannel";
    var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
    var KEEPALIVE_TIMEOUT_MS = 2e4;
    var { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = http2.constants;
    var tooManyPingsData = Buffer.from("too_many_pings", "ascii");
    var Subchannel = class {
      constructor(channelTarget, subchannelAddress, options, credentials2) {
        this.channelTarget = channelTarget;
        this.subchannelAddress = subchannelAddress;
        this.options = options;
        this.credentials = credentials2;
        this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
        this.session = null;
        this.continueConnecting = false;
        this.stateListeners = [];
        this.disconnectListeners = [];
        this.keepaliveTimeMs = KEEPALIVE_MAX_TIME_MS;
        this.keepaliveTimeoutMs = KEEPALIVE_TIMEOUT_MS;
        this.keepaliveWithoutCalls = false;
        this.callRefcount = 0;
        this.refcount = 0;
        this.channelzEnabled = true;
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.childrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.channelzSocketRef = null;
        this.remoteName = null;
        this.streamTracker = new channelz_1.ChannelzCallTracker();
        this.keepalivesSent = 0;
        this.messagesSent = 0;
        this.messagesReceived = 0;
        this.lastMessageSentTimestamp = null;
        this.lastMessageReceivedTimestamp = null;
        this.userAgent = [
          options["grpc.primary_user_agent"],
          `grpc-node-js/${clientVersion}`,
          options["grpc.secondary_user_agent"]
        ].filter((e) => e).join(" ");
        if ("grpc.keepalive_time_ms" in options) {
          this.keepaliveTimeMs = options["grpc.keepalive_time_ms"];
        }
        if ("grpc.keepalive_timeout_ms" in options) {
          this.keepaliveTimeoutMs = options["grpc.keepalive_timeout_ms"];
        }
        if ("grpc.keepalive_permit_without_calls" in options) {
          this.keepaliveWithoutCalls = options["grpc.keepalive_permit_without_calls"] === 1;
        } else {
          this.keepaliveWithoutCalls = false;
        }
        this.keepaliveIntervalId = setTimeout(() => {
        }, 0);
        clearTimeout(this.keepaliveIntervalId);
        this.keepaliveTimeoutId = setTimeout(() => {
        }, 0);
        clearTimeout(this.keepaliveTimeoutId);
        const backoffOptions = {
          initialDelay: options["grpc.initial_reconnect_backoff_ms"],
          maxDelay: options["grpc.max_reconnect_backoff_ms"]
        };
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          this.handleBackoffTimer();
        }, backoffOptions);
        this.subchannelAddressString = subchannel_address_1.subchannelAddressToString(subchannelAddress);
        if (options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        this.channelzTrace = new channelz_1.ChannelzTrace();
        if (this.channelzEnabled) {
          this.channelzRef = channelz_1.registerChannelzSubchannel(this.subchannelAddressString, () => this.getChannelzInfo());
          this.channelzTrace.addTrace("CT_INFO", "Subchannel created");
        } else {
          this.channelzRef = {
            kind: "subchannel",
            id: -1,
            name: ""
          };
        }
        this.trace("Subchannel constructed with options " + JSON.stringify(options, void 0, 2));
      }
      getChannelzInfo() {
        return {
          state: this.connectivityState,
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists(),
          target: this.subchannelAddressString
        };
      }
      getChannelzSocketInfo() {
        var _a, _b, _c;
        if (this.session === null) {
          return null;
        }
        const sessionSocket = this.session.socket;
        const remoteAddress = sessionSocket.remoteAddress ? subchannel_address_1.stringToSubchannelAddress(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
        const localAddress = sessionSocket.localAddress ? subchannel_address_1.stringToSubchannelAddress(sessionSocket.localAddress, sessionSocket.localPort) : null;
        let tlsInfo;
        if (this.session.encrypted) {
          const tlsSocket = sessionSocket;
          const cipherInfo = tlsSocket.getCipher();
          const certificate = tlsSocket.getCertificate();
          const peerCertificate = tlsSocket.getPeerCertificate();
          tlsInfo = {
            cipherSuiteStandardName: (_a = cipherInfo.standardName) !== null && _a !== void 0 ? _a : null,
            cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
            localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
            remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
          };
        } else {
          tlsInfo = null;
        }
        const socketInfo = {
          remoteAddress,
          localAddress,
          security: tlsInfo,
          remoteName: this.remoteName,
          streamsStarted: this.streamTracker.callsStarted,
          streamsSucceeded: this.streamTracker.callsSucceeded,
          streamsFailed: this.streamTracker.callsFailed,
          messagesSent: this.messagesSent,
          messagesReceived: this.messagesReceived,
          keepAlivesSent: this.keepalivesSent,
          lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: this.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
          localFlowControlWindow: (_b = this.session.state.localWindowSize) !== null && _b !== void 0 ? _b : null,
          remoteFlowControlWindow: (_c = this.session.state.remoteWindowSize) !== null && _c !== void 0 ? _c : null
        };
        return socketInfo;
      }
      resetChannelzSocketInfo() {
        if (!this.channelzEnabled) {
          return;
        }
        if (this.channelzSocketRef) {
          channelz_1.unregisterChannelzRef(this.channelzSocketRef);
          this.childrenTracker.unrefChild(this.channelzSocketRef);
          this.channelzSocketRef = null;
        }
        this.remoteName = null;
        this.streamTracker = new channelz_1.ChannelzCallTracker();
        this.keepalivesSent = 0;
        this.messagesSent = 0;
        this.messagesReceived = 0;
        this.lastMessageSentTimestamp = null;
        this.lastMessageReceivedTimestamp = null;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      refTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      handleBackoffTimer() {
        if (this.continueConnecting) {
          this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
        } else {
          this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.IDLE);
        }
      }
      startBackoff() {
        this.backoffTimeout.runOnce();
      }
      stopBackoff() {
        this.backoffTimeout.stop();
        this.backoffTimeout.reset();
      }
      sendPing() {
        var _a, _b;
        if (this.channelzEnabled) {
          this.keepalivesSent += 1;
        }
        logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " Sending ping");
        this.keepaliveTimeoutId = setTimeout(() => {
          this.transitionToState([connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
        }, this.keepaliveTimeoutMs);
        (_b = (_a = this.keepaliveTimeoutId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.session.ping((err, duration, payload) => {
          clearTimeout(this.keepaliveTimeoutId);
        });
      }
      startKeepalivePings() {
        var _a, _b;
        this.keepaliveIntervalId = setInterval(() => {
          this.sendPing();
        }, this.keepaliveTimeMs);
        (_b = (_a = this.keepaliveIntervalId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      stopKeepalivePings() {
        clearInterval(this.keepaliveIntervalId);
        clearTimeout(this.keepaliveTimeoutId);
      }
      createSession(proxyConnectionResult) {
        var _a, _b, _c;
        if (proxyConnectionResult.realTarget) {
          this.remoteName = uri_parser_1.uriToString(proxyConnectionResult.realTarget);
          this.trace("creating HTTP/2 session through proxy to " + proxyConnectionResult.realTarget);
        } else {
          this.remoteName = null;
          this.trace("creating HTTP/2 session");
        }
        const targetAuthority = resolver_1.getDefaultAuthority((_a = proxyConnectionResult.realTarget) !== null && _a !== void 0 ? _a : this.channelTarget);
        let connectionOptions = this.credentials._getConnectionOptions() || {};
        connectionOptions.maxSendHeaderBlockLength = Number.MAX_SAFE_INTEGER;
        if ("grpc-node.max_session_memory" in this.options) {
          connectionOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        }
        let addressScheme = "http://";
        if ("secureContext" in connectionOptions) {
          addressScheme = "https://";
          if (this.options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = this.options["grpc.ssl_target_name_override"];
            connectionOptions.checkServerIdentity = (host, cert) => {
              return tls_1.checkServerIdentity(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            const authorityHostname = (_c = (_b = uri_parser_1.splitHostPort(targetAuthority)) === null || _b === void 0 ? void 0 : _b.host) !== null && _c !== void 0 ? _c : "localhost";
            connectionOptions.servername = authorityHostname;
          }
          if (proxyConnectionResult.socket) {
            connectionOptions.createConnection = (authority, option) => {
              return proxyConnectionResult.socket;
            };
          }
        } else {
          connectionOptions.createConnection = (authority, option) => {
            if (proxyConnectionResult.socket) {
              return proxyConnectionResult.socket;
            } else {
              return net.connect(this.subchannelAddress);
            }
          };
        }
        connectionOptions = Object.assign(Object.assign({}, connectionOptions), this.subchannelAddress);
        const session = http2.connect(addressScheme + targetAuthority, connectionOptions);
        this.session = session;
        if (this.channelzEnabled) {
          this.channelzSocketRef = channelz_1.registerChannelzSocket(this.subchannelAddressString, () => this.getChannelzSocketInfo());
          this.childrenTracker.refChild(this.channelzSocketRef);
        }
        session.unref();
        session.once("connect", () => {
          if (this.session === session) {
            this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.READY);
          }
        });
        session.once("close", () => {
          if (this.session === session) {
            this.trace("connection closed");
            this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE);
            this.transitionToState([connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
          }
        });
        session.once("goaway", (errorCode, lastStreamID, opaqueData) => {
          if (this.session === session) {
            if (errorCode === http2.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData.equals(tooManyPingsData)) {
              this.keepaliveTimeMs = Math.min(2 * this.keepaliveTimeMs, KEEPALIVE_MAX_TIME_MS);
              logging.log(constants_1.LogVerbosity.ERROR, `Connection to ${uri_parser_1.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTimeMs} ms`);
            }
            this.trace("connection closed by GOAWAY with code " + errorCode);
            this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING, connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
          }
        });
        session.once("error", (error) => {
          this.trace("connection closed with error " + error.message);
        });
      }
      startConnectingInternal() {
        var _a, _b;
        const connectionOptions = this.credentials._getConnectionOptions() || {};
        if ("secureContext" in connectionOptions) {
          connectionOptions.ALPNProtocols = ["h2"];
          if (this.options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = this.options["grpc.ssl_target_name_override"];
            connectionOptions.checkServerIdentity = (host, cert) => {
              return tls_1.checkServerIdentity(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            if ("grpc.http_connect_target" in this.options) {
              const targetPath = resolver_1.getDefaultAuthority((_a = uri_parser_1.parseUri(this.options["grpc.http_connect_target"])) !== null && _a !== void 0 ? _a : {
                path: "localhost"
              });
              const hostPort = uri_parser_1.splitHostPort(targetPath);
              connectionOptions.servername = (_b = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _b !== void 0 ? _b : targetPath;
            }
          }
        }
        http_proxy_1.getProxiedConnection(this.subchannelAddress, this.options, connectionOptions).then((result) => {
          this.createSession(result);
        }, (reason) => {
          this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE);
        });
      }
      transitionToState(oldStates, newState) {
        if (oldStates.indexOf(this.connectivityState) === -1) {
          return false;
        }
        this.trace(connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        }
        const previousState = this.connectivityState;
        this.connectivityState = newState;
        switch (newState) {
          case connectivity_state_1.ConnectivityState.READY:
            this.stopBackoff();
            this.session.socket.once("close", () => {
              for (const listener of this.disconnectListeners) {
                listener();
              }
            });
            if (this.keepaliveWithoutCalls) {
              this.startKeepalivePings();
            }
            break;
          case connectivity_state_1.ConnectivityState.CONNECTING:
            this.startBackoff();
            this.startConnectingInternal();
            this.continueConnecting = false;
            break;
          case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
            if (this.session) {
              this.session.close();
            }
            this.session = null;
            this.resetChannelzSocketInfo();
            this.stopKeepalivePings();
            if (!this.backoffTimeout.isRunning()) {
              process.nextTick(() => {
                this.handleBackoffTimer();
              });
            }
            break;
          case connectivity_state_1.ConnectivityState.IDLE:
            if (this.session) {
              this.session.close();
            }
            this.session = null;
            this.resetChannelzSocketInfo();
            this.stopKeepalivePings();
            break;
          default:
            throw new Error(`Invalid state: unknown ConnectivityState ${newState}`);
        }
        for (const listener of [...this.stateListeners]) {
          listener(this, previousState, newState);
        }
        return true;
      }
      checkBothRefcounts() {
        if (this.callRefcount === 0 && this.refcount === 0) {
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Shutting down");
          }
          this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING, connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE);
          if (this.channelzEnabled) {
            channelz_1.unregisterChannelzRef(this.channelzRef);
          }
        }
      }
      callRef() {
        this.refTrace("callRefcount " + this.callRefcount + " -> " + (this.callRefcount + 1));
        if (this.callRefcount === 0) {
          if (this.session) {
            this.session.ref();
          }
          this.backoffTimeout.ref();
          if (!this.keepaliveWithoutCalls) {
            this.startKeepalivePings();
          }
        }
        this.callRefcount += 1;
      }
      callUnref() {
        this.refTrace("callRefcount " + this.callRefcount + " -> " + (this.callRefcount - 1));
        this.callRefcount -= 1;
        if (this.callRefcount === 0) {
          if (this.session) {
            this.session.unref();
          }
          this.backoffTimeout.unref();
          if (!this.keepaliveWithoutCalls) {
            this.stopKeepalivePings();
          }
          this.checkBothRefcounts();
        }
      }
      ref() {
        this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1));
        this.refcount += 1;
      }
      unref() {
        this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1));
        this.refcount -= 1;
        this.checkBothRefcounts();
      }
      unrefIfOneRef() {
        if (this.refcount === 1) {
          this.unref();
          return true;
        }
        return false;
      }
      startCallStream(metadata, callStream, extraFilters) {
        const headers = metadata.toHttp2Headers();
        headers[HTTP2_HEADER_AUTHORITY] = callStream.getHost();
        headers[HTTP2_HEADER_USER_AGENT] = this.userAgent;
        headers[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
        headers[HTTP2_HEADER_METHOD] = "POST";
        headers[HTTP2_HEADER_PATH] = callStream.getMethod();
        headers[HTTP2_HEADER_TE] = "trailers";
        let http2Stream;
        try {
          http2Stream = this.session.request(headers);
        } catch (e) {
          this.transitionToState([connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE);
          throw e;
        }
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "		" + header + ": " + headers[header] + "\n";
        }
        logging.trace(constants_1.LogVerbosity.DEBUG, "call_stream", "Starting stream on subchannel (" + this.channelzRef.id + ") " + this.subchannelAddressString + " with headers\n" + headersString);
        const streamSession = this.session;
        let statsTracker;
        if (this.channelzEnabled) {
          this.callTracker.addCallStarted();
          callStream.addStatusWatcher((status) => {
            if (status.code === constants_1.Status.OK) {
              this.callTracker.addCallSucceeded();
            } else {
              this.callTracker.addCallFailed();
            }
          });
          this.streamTracker.addCallStarted();
          callStream.addStreamEndWatcher((success) => {
            if (streamSession === this.session) {
              if (success) {
                this.streamTracker.addCallSucceeded();
              } else {
                this.streamTracker.addCallFailed();
              }
            }
          });
          statsTracker = {
            addMessageSent: () => {
              this.messagesSent += 1;
              this.lastMessageSentTimestamp = new Date();
            },
            addMessageReceived: () => {
              this.messagesReceived += 1;
            }
          };
        } else {
          statsTracker = {
            addMessageSent: () => {
            },
            addMessageReceived: () => {
            }
          };
        }
        callStream.attachHttp2Stream(http2Stream, this, extraFilters, statsTracker);
      }
      startConnecting() {
        if (!this.transitionToState([connectivity_state_1.ConnectivityState.IDLE], connectivity_state_1.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            this.continueConnecting = true;
          }
        }
      }
      getConnectivityState() {
        return this.connectivityState;
      }
      addConnectivityStateListener(listener) {
        this.stateListeners.push(listener);
      }
      removeConnectivityStateListener(listener) {
        const listenerIndex = this.stateListeners.indexOf(listener);
        if (listenerIndex > -1) {
          this.stateListeners.splice(listenerIndex, 1);
        }
      }
      addDisconnectListener(listener) {
        this.disconnectListeners.push(listener);
      }
      removeDisconnectListener(listener) {
        const listenerIndex = this.disconnectListeners.indexOf(listener);
        if (listenerIndex > -1) {
          this.disconnectListeners.splice(listenerIndex, 1);
        }
      }
      resetBackoff() {
        this.backoffTimeout.reset();
        this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
      }
      getAddress() {
        return this.subchannelAddressString;
      }
      getChannelzRef() {
        return this.channelzRef;
      }
    };
    exports2.Subchannel = Subchannel;
  }
});

// node_modules/@grpc/grpc-js/build/src/subchannel-pool.js
var require_subchannel_pool = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/subchannel-pool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSubchannelPool = exports2.SubchannelPool = void 0;
    var channel_options_1 = require_channel_options();
    var subchannel_1 = require_subchannel();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var REF_CHECK_INTERVAL = 1e4;
    var SubchannelPool = class {
      constructor(global2) {
        this.global = global2;
        this.pool = Object.create(null);
        this.cleanupTimer = null;
      }
      unrefUnusedSubchannels() {
        let allSubchannelsUnrefed = true;
        for (const channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          const refedSubchannels = subchannelObjArray.filter((value) => !value.subchannel.unrefIfOneRef());
          if (refedSubchannels.length > 0) {
            allSubchannelsUnrefed = false;
          }
          this.pool[channelTarget] = refedSubchannels;
        }
        if (allSubchannelsUnrefed && this.cleanupTimer !== null) {
          clearInterval(this.cleanupTimer);
          this.cleanupTimer = null;
        }
      }
      ensureCleanupTask() {
        var _a, _b;
        if (this.global && this.cleanupTimer === null) {
          this.cleanupTimer = setInterval(() => {
            this.unrefUnusedSubchannels();
          }, REF_CHECK_INTERVAL);
          (_b = (_a = this.cleanupTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      getOrCreateSubchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials) {
        this.ensureCleanupTask();
        const channelTarget = uri_parser_1.uriToString(channelTargetUri);
        if (channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          for (const subchannelObj of subchannelObjArray) {
            if (subchannel_address_1.subchannelAddressEqual(subchannelTarget, subchannelObj.subchannelAddress) && channel_options_1.channelOptionsEqual(channelArguments, subchannelObj.channelArguments) && channelCredentials._equals(subchannelObj.channelCredentials)) {
              return subchannelObj.subchannel;
            }
          }
        }
        const subchannel = new subchannel_1.Subchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials);
        if (!(channelTarget in this.pool)) {
          this.pool[channelTarget] = [];
        }
        this.pool[channelTarget].push({
          subchannelAddress: subchannelTarget,
          channelArguments,
          channelCredentials,
          subchannel
        });
        if (this.global) {
          subchannel.ref();
        }
        return subchannel;
      }
    };
    exports2.SubchannelPool = SubchannelPool;
    var globalSubchannelPool = new SubchannelPool(true);
    function getSubchannelPool(global2) {
      if (global2) {
        return globalSubchannelPool;
      } else {
        return new SubchannelPool(false);
      }
    }
    exports2.getSubchannelPool = getSubchannelPool;
  }
});

// node_modules/@grpc/grpc-js/build/src/filter-stack.js
var require_filter_stack = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/filter-stack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FilterStackFactory = exports2.FilterStack = void 0;
    var FilterStack = class {
      constructor(filters) {
        this.filters = filters;
      }
      sendMetadata(metadata) {
        let result = metadata;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMetadata(result);
        }
        return result;
      }
      receiveMetadata(metadata) {
        let result = metadata;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMetadata(result);
        }
        return result;
      }
      sendMessage(message) {
        let result = message;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMessage(result);
        }
        return result;
      }
      receiveMessage(message) {
        let result = message;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMessage(result);
        }
        return result;
      }
      receiveTrailers(status) {
        let result = status;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveTrailers(result);
        }
        return result;
      }
      refresh() {
        for (const filter of this.filters) {
          filter.refresh();
        }
      }
      push(filters) {
        this.filters.unshift(...filters);
      }
      getFilters() {
        return this.filters;
      }
    };
    exports2.FilterStack = FilterStack;
    var FilterStackFactory = class {
      constructor(factories) {
        this.factories = factories;
      }
      push(filterFactories) {
        this.factories.unshift(...filterFactories);
      }
      createFilter(callStream) {
        return new FilterStack(this.factories.map((factory) => factory.createFilter(callStream)));
      }
    };
    exports2.FilterStackFactory = FilterStackFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/filter.js
var require_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseFilter = void 0;
    var BaseFilter = class {
      async sendMetadata(metadata) {
        return metadata;
      }
      receiveMetadata(metadata) {
        return metadata;
      }
      async sendMessage(message) {
        return message;
      }
      async receiveMessage(message) {
        return message;
      }
      receiveTrailers(status) {
        return status;
      }
      refresh() {
      }
    };
    exports2.BaseFilter = BaseFilter;
  }
});

// node_modules/@grpc/grpc-js/build/src/call-credentials-filter.js
var require_call_credentials_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/call-credentials-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallCredentialsFilterFactory = exports2.CallCredentialsFilter = void 0;
    var filter_1 = require_filter();
    var constants_1 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var CallCredentialsFilter = class extends filter_1.BaseFilter {
      constructor(channel, stream) {
        var _a, _b;
        super();
        this.channel = channel;
        this.stream = stream;
        this.channel = channel;
        this.stream = stream;
        const splitPath = stream.getMethod().split("/");
        let serviceName = "";
        if (splitPath.length >= 2) {
          serviceName = splitPath[1];
        }
        const hostname = (_b = (_a = uri_parser_1.splitHostPort(stream.getHost())) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : "localhost";
        this.serviceUrl = `https://${hostname}/${serviceName}`;
      }
      async sendMetadata(metadata) {
        const credentials2 = this.stream.getCredentials();
        const credsMetadata = credentials2.generateMetadata({
          service_url: this.serviceUrl
        });
        const resultMetadata = await metadata;
        try {
          resultMetadata.merge(await credsMetadata);
        } catch (error) {
          this.stream.cancelWithStatus(constants_1.Status.UNAUTHENTICATED, `Failed to retrieve auth metadata with error: ${error.message}`);
          return Promise.reject("Failed to retrieve auth metadata");
        }
        if (resultMetadata.get("authorization").length > 1) {
          this.stream.cancelWithStatus(constants_1.Status.INTERNAL, '"authorization" metadata cannot have multiple values');
          return Promise.reject('"authorization" metadata cannot have multiple values');
        }
        return resultMetadata;
      }
    };
    exports2.CallCredentialsFilter = CallCredentialsFilter;
    var CallCredentialsFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
        this.channel = channel;
      }
      createFilter(callStream) {
        return new CallCredentialsFilter(this.channel, callStream);
      }
    };
    exports2.CallCredentialsFilterFactory = CallCredentialsFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/deadline-filter.js
var require_deadline_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/deadline-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeadlineFilterFactory = exports2.DeadlineFilter = void 0;
    var constants_1 = require_constants();
    var filter_1 = require_filter();
    var units = [
      ["m", 1],
      ["S", 1e3],
      ["M", 60 * 1e3],
      ["H", 60 * 60 * 1e3]
    ];
    function getDeadline(deadline) {
      const now = new Date().getTime();
      const timeoutMs = Math.max(deadline - now, 0);
      for (const [unit, factor] of units) {
        const amount = timeoutMs / factor;
        if (amount < 1e8) {
          return String(Math.ceil(amount)) + unit;
        }
      }
      throw new Error("Deadline is too far in the future");
    }
    var DeadlineFilter = class extends filter_1.BaseFilter {
      constructor(channel, callStream) {
        super();
        this.channel = channel;
        this.callStream = callStream;
        this.timer = null;
        this.deadline = Infinity;
        this.retreiveDeadline();
        this.runTimer();
      }
      retreiveDeadline() {
        const callDeadline = this.callStream.getDeadline();
        if (callDeadline instanceof Date) {
          this.deadline = callDeadline.getTime();
        } else {
          this.deadline = callDeadline;
        }
      }
      runTimer() {
        var _a, _b;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        const now = new Date().getTime();
        const timeout = this.deadline - now;
        if (timeout <= 0) {
          process.nextTick(() => {
            this.callStream.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          });
        } else if (this.deadline !== Infinity) {
          this.timer = setTimeout(() => {
            this.callStream.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          }, timeout);
          (_b = (_a = this.timer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      refresh() {
        this.retreiveDeadline();
        this.runTimer();
      }
      async sendMetadata(metadata) {
        if (this.deadline === Infinity) {
          return metadata;
        }
        const finalMetadata = await metadata;
        const timeoutString = getDeadline(this.deadline);
        finalMetadata.set("grpc-timeout", timeoutString);
        return finalMetadata;
      }
      receiveTrailers(status) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        return status;
      }
    };
    exports2.DeadlineFilter = DeadlineFilter;
    var DeadlineFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
      }
      createFilter(callStream) {
        return new DeadlineFilter(this.channel, callStream);
      }
    };
    exports2.DeadlineFilterFactory = DeadlineFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/compression-filter.js
var require_compression_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/compression-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompressionFilterFactory = exports2.CompressionFilter = void 0;
    var zlib = require("zlib");
    var filter_1 = require_filter();
    var CompressionHandler = class {
      async writeMessage(message, compress) {
        let messageBuffer = message;
        if (compress) {
          messageBuffer = await this.compressMessage(messageBuffer);
        }
        const output = Buffer.allocUnsafe(messageBuffer.length + 5);
        output.writeUInt8(compress ? 1 : 0, 0);
        output.writeUInt32BE(messageBuffer.length, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      async readMessage(data) {
        const compressed = data.readUInt8(0) === 1;
        let messageBuffer = data.slice(5);
        if (compressed) {
          messageBuffer = await this.decompressMessage(messageBuffer);
        }
        return messageBuffer;
      }
    };
    var IdentityHandler = class extends CompressionHandler {
      async compressMessage(message) {
        return message;
      }
      async writeMessage(message, compress) {
        const output = Buffer.allocUnsafe(message.length + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(message.length, 1);
        message.copy(output, 5);
        return output;
      }
      decompressMessage(message) {
        return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
      }
    };
    var DeflateHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve2, reject) => {
          zlib.deflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve2(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve2, reject) => {
          zlib.inflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve2(output);
            }
          });
        });
      }
    };
    var GzipHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve2, reject) => {
          zlib.gzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve2(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve2, reject) => {
          zlib.unzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve2(output);
            }
          });
        });
      }
    };
    var UnknownHandler = class extends CompressionHandler {
      constructor(compressionName) {
        super();
        this.compressionName = compressionName;
      }
      compressMessage(message) {
        return Promise.reject(new Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
      }
      decompressMessage(message) {
        return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
      }
    };
    function getCompressionHandler(compressionName) {
      switch (compressionName) {
        case "identity":
          return new IdentityHandler();
        case "deflate":
          return new DeflateHandler();
        case "gzip":
          return new GzipHandler();
        default:
          return new UnknownHandler(compressionName);
      }
    }
    var CompressionFilter = class extends filter_1.BaseFilter {
      constructor() {
        super(...arguments);
        this.sendCompression = new IdentityHandler();
        this.receiveCompression = new IdentityHandler();
      }
      async sendMetadata(metadata) {
        const headers = await metadata;
        headers.set("grpc-accept-encoding", "identity,deflate,gzip");
        headers.set("accept-encoding", "identity");
        return headers;
      }
      receiveMetadata(metadata) {
        const receiveEncoding = metadata.get("grpc-encoding");
        if (receiveEncoding.length > 0) {
          const encoding = receiveEncoding[0];
          if (typeof encoding === "string") {
            this.receiveCompression = getCompressionHandler(encoding);
          }
        }
        metadata.remove("grpc-encoding");
        metadata.remove("grpc-accept-encoding");
        return metadata;
      }
      async sendMessage(message) {
        const resolvedMessage = await message;
        const compress = resolvedMessage.flags === void 0 ? false : (resolvedMessage.flags & 2) === 0;
        return {
          message: await this.sendCompression.writeMessage(resolvedMessage.message, compress),
          flags: resolvedMessage.flags
        };
      }
      async receiveMessage(message) {
        return this.receiveCompression.readMessage(await message);
      }
    };
    exports2.CompressionFilter = CompressionFilter;
    var CompressionFilterFactory = class {
      constructor(channel) {
        this.channel = channel;
      }
      createFilter(callStream) {
        return new CompressionFilter();
      }
    };
    exports2.CompressionFilterFactory = CompressionFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js
var require_max_message_size_filter = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MaxMessageSizeFilterFactory = exports2.MaxMessageSizeFilter = void 0;
    var filter_1 = require_filter();
    var constants_1 = require_constants();
    var MaxMessageSizeFilter = class extends filter_1.BaseFilter {
      constructor(options, callStream) {
        super();
        this.options = options;
        this.callStream = callStream;
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
      }
      async sendMessage(message) {
        if (this.maxSendMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.message.length > this.maxSendMessageSize) {
            this.callStream.cancelWithStatus(constants_1.Status.RESOURCE_EXHAUSTED, `Sent message larger than max (${concreteMessage.message.length} vs. ${this.maxSendMessageSize})`);
            return Promise.reject("Message too large");
          } else {
            return concreteMessage;
          }
        }
      }
      async receiveMessage(message) {
        if (this.maxReceiveMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.length > this.maxReceiveMessageSize) {
            this.callStream.cancelWithStatus(constants_1.Status.RESOURCE_EXHAUSTED, `Received message larger than max (${concreteMessage.length} vs. ${this.maxReceiveMessageSize})`);
            return Promise.reject("Message too large");
          } else {
            return concreteMessage;
          }
        }
      }
    };
    exports2.MaxMessageSizeFilter = MaxMessageSizeFilter;
    var MaxMessageSizeFilterFactory = class {
      constructor(options) {
        this.options = options;
      }
      createFilter(callStream) {
        return new MaxMessageSizeFilter(this.options, callStream);
      }
    };
    exports2.MaxMessageSizeFilterFactory = MaxMessageSizeFilterFactory;
  }
});

// node_modules/@grpc/grpc-js/build/src/channel.js
var require_channel = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelImplementation = void 0;
    var call_stream_1 = require_call_stream();
    var channel_credentials_1 = require_channel_credentials();
    var resolving_load_balancer_1 = require_resolving_load_balancer();
    var subchannel_pool_1 = require_subchannel_pool();
    var picker_1 = require_picker();
    var constants_1 = require_constants();
    var filter_stack_1 = require_filter_stack();
    var call_credentials_filter_1 = require_call_credentials_filter();
    var deadline_filter_1 = require_deadline_filter();
    var compression_filter_1 = require_compression_filter();
    var resolver_1 = require_resolver();
    var logging_1 = require_logging();
    var max_message_size_filter_1 = require_max_message_size_filter();
    var http_proxy_1 = require_http_proxy();
    var uri_parser_1 = require_uri_parser();
    var connectivity_state_1 = require_connectivity_state();
    var channelz_1 = require_channelz();
    var MAX_TIMEOUT_TIME = 2147483647;
    var nextCallNumber = 0;
    function getNewCallNumber() {
      const callNumber = nextCallNumber;
      nextCallNumber += 1;
      if (nextCallNumber >= Number.MAX_SAFE_INTEGER) {
        nextCallNumber = 0;
      }
      return callNumber;
    }
    var ChannelImplementation = class {
      constructor(target, credentials2, options) {
        var _a, _b, _c;
        this.credentials = credentials2;
        this.options = options;
        this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentPicker = new picker_1.UnavailablePicker();
        this.configSelectionQueue = [];
        this.pickQueue = [];
        this.connectivityStateWatchers = [];
        this.configSelector = null;
        this.channelzEnabled = true;
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.childrenTracker = new channelz_1.ChannelzChildrenTracker();
        if (typeof target !== "string") {
          throw new TypeError("Channel target must be a string");
        }
        if (!(credentials2 instanceof channel_credentials_1.ChannelCredentials)) {
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        }
        if (options) {
          if (typeof options !== "object") {
            throw new TypeError("Channel options must be an object");
          }
        }
        this.originalTarget = target;
        const originalTargetUri = uri_parser_1.parseUri(target);
        if (originalTargetUri === null) {
          throw new Error(`Could not parse target name "${target}"`);
        }
        const defaultSchemeMapResult = resolver_1.mapUriDefaultScheme(originalTargetUri);
        if (defaultSchemeMapResult === null) {
          throw new Error(`Could not find a default scheme for target name "${target}"`);
        }
        this.callRefTimer = setInterval(() => {
        }, MAX_TIMEOUT_TIME);
        (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        this.channelzTrace = new channelz_1.ChannelzTrace();
        if (this.channelzEnabled) {
          this.channelzRef = channelz_1.registerChannelzChannel(target, () => this.getChannelzInfo());
          this.channelzTrace.addTrace("CT_INFO", "Channel created");
        } else {
          this.channelzRef = {
            kind: "channel",
            id: -1,
            name: ""
          };
        }
        if (this.options["grpc.default_authority"]) {
          this.defaultAuthority = this.options["grpc.default_authority"];
        } else {
          this.defaultAuthority = resolver_1.getDefaultAuthority(defaultSchemeMapResult);
        }
        const proxyMapResult = http_proxy_1.mapProxyName(defaultSchemeMapResult, options);
        this.target = proxyMapResult.target;
        this.options = Object.assign({}, this.options, proxyMapResult.extraOptions);
        this.subchannelPool = subchannel_pool_1.getSubchannelPool(((_c = options["grpc.use_local_subchannel_pool"]) !== null && _c !== void 0 ? _c : 0) === 0);
        const channelControlHelper = {
          createSubchannel: (subchannelAddress, subchannelArgs) => {
            const subchannel = this.subchannelPool.getOrCreateSubchannel(this.target, subchannelAddress, Object.assign({}, this.options, subchannelArgs), this.credentials);
            if (this.channelzEnabled) {
              this.channelzTrace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", subchannel.getChannelzRef());
            }
            return subchannel;
          },
          updateState: (connectivityState, picker) => {
            this.currentPicker = picker;
            const queueCopy = this.pickQueue.slice();
            this.pickQueue = [];
            this.callRefTimerUnref();
            for (const { callStream, callMetadata, callConfig, dynamicFilters } of queueCopy) {
              this.tryPick(callStream, callMetadata, callConfig, dynamicFilters);
            }
            this.updateState(connectivityState);
          },
          requestReresolution: () => {
            throw new Error("Resolving load balancer should never call requestReresolution");
          },
          addChannelzChild: (child) => {
            if (this.channelzEnabled) {
              this.childrenTracker.refChild(child);
            }
          },
          removeChannelzChild: (child) => {
            if (this.channelzEnabled) {
              this.childrenTracker.unrefChild(child);
            }
          }
        };
        this.resolvingLoadBalancer = new resolving_load_balancer_1.ResolvingLoadBalancer(this.target, channelControlHelper, options, (configSelector) => {
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Address resolution succeeded");
          }
          this.configSelector = configSelector;
          process.nextTick(() => {
            const localQueue = this.configSelectionQueue;
            this.configSelectionQueue = [];
            this.callRefTimerUnref();
            for (const { callStream, callMetadata } of localQueue) {
              this.tryGetConfig(callStream, callMetadata);
            }
            this.configSelectionQueue = [];
          });
        }, (status) => {
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_WARNING", "Address resolution failed with code " + status.code + ' and details "' + status.details + '"');
          }
          if (this.configSelectionQueue.length > 0) {
            this.trace("Name resolution failed with calls queued for config selection");
          }
          const localQueue = this.configSelectionQueue;
          this.configSelectionQueue = [];
          this.callRefTimerUnref();
          for (const { callStream, callMetadata } of localQueue) {
            if (callMetadata.getOptions().waitForReady) {
              this.callRefTimerRef();
              this.configSelectionQueue.push({ callStream, callMetadata });
            } else {
              callStream.cancelWithStatus(status.code, status.details);
            }
          }
        });
        this.filterStackFactory = new filter_stack_1.FilterStackFactory([
          new call_credentials_filter_1.CallCredentialsFilterFactory(this),
          new deadline_filter_1.DeadlineFilterFactory(this),
          new max_message_size_filter_1.MaxMessageSizeFilterFactory(this.options),
          new compression_filter_1.CompressionFilterFactory(this)
        ]);
        this.trace("Channel constructed with options " + JSON.stringify(options, void 0, 2));
      }
      getChannelzInfo() {
        return {
          target: this.originalTarget,
          state: this.connectivityState,
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists()
        };
      }
      trace(text, verbosityOverride) {
        logging_1.trace(verbosityOverride !== null && verbosityOverride !== void 0 ? verbosityOverride : constants_1.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + uri_parser_1.uriToString(this.target) + " " + text);
      }
      callRefTimerRef() {
        var _a, _b, _c, _d;
        if (!((_b = (_a = this.callRefTimer).hasRef) === null || _b === void 0 ? void 0 : _b.call(_a))) {
          this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_d = (_c = this.callRefTimer).ref) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
      }
      callRefTimerUnref() {
        var _a, _b;
        if (!this.callRefTimer.hasRef || this.callRefTimer.hasRef()) {
          this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      pushPick(callStream, callMetadata, callConfig, dynamicFilters) {
        this.pickQueue.push({ callStream, callMetadata, callConfig, dynamicFilters });
        this.callRefTimerRef();
      }
      tryPick(callStream, callMetadata, callConfig, dynamicFilters) {
        var _a, _b, _c;
        const pickResult = this.currentPicker.pick({
          metadata: callMetadata,
          extraPickInfo: callConfig.pickInformation
        });
        this.trace("Pick result: " + picker_1.PickResultType[pickResult.pickResultType] + " subchannel: " + ((_a = pickResult.subchannel) === null || _a === void 0 ? void 0 : _a.getAddress()) + " status: " + ((_b = pickResult.status) === null || _b === void 0 ? void 0 : _b.code) + " " + ((_c = pickResult.status) === null || _c === void 0 ? void 0 : _c.details));
        switch (pickResult.pickResultType) {
          case picker_1.PickResultType.COMPLETE:
            if (pickResult.subchannel === null) {
              callStream.cancelWithStatus(constants_1.Status.UNAVAILABLE, "Request dropped by load balancing policy");
            } else {
              if (pickResult.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
                logging_1.log(constants_1.LogVerbosity.ERROR, "Error: COMPLETE pick result subchannel " + pickResult.subchannel.getAddress() + " has state " + connectivity_state_1.ConnectivityState[pickResult.subchannel.getConnectivityState()]);
                this.pushPick(callStream, callMetadata, callConfig, dynamicFilters);
                break;
              }
              callStream.filterStack.sendMetadata(Promise.resolve(callMetadata.clone())).then((finalMetadata) => {
                var _a2, _b2;
                const subchannelState = pickResult.subchannel.getConnectivityState();
                if (subchannelState === connectivity_state_1.ConnectivityState.READY) {
                  try {
                    const pickExtraFilters = pickResult.extraFilterFactories.map((factory) => factory.createFilter(callStream));
                    pickResult.subchannel.startCallStream(finalMetadata, callStream, [...dynamicFilters, ...pickExtraFilters]);
                    (_a2 = callConfig.onCommitted) === null || _a2 === void 0 ? void 0 : _a2.call(callConfig);
                    (_b2 = pickResult.onCallStarted) === null || _b2 === void 0 ? void 0 : _b2.call(pickResult);
                  } catch (error) {
                    if (error.code === "ERR_HTTP2_GOAWAY_SESSION") {
                      this.trace("Failed to start call on picked subchannel " + pickResult.subchannel.getAddress() + " with error " + error.message + ". Retrying pick", constants_1.LogVerbosity.INFO);
                      this.tryPick(callStream, callMetadata, callConfig, dynamicFilters);
                    } else {
                      this.trace("Failed to start call on picked subchanel " + pickResult.subchannel.getAddress() + " with error " + error.message + ". Ending call", constants_1.LogVerbosity.INFO);
                      callStream.cancelWithStatus(constants_1.Status.INTERNAL, `Failed to start HTTP/2 stream with error: ${error.message}`);
                    }
                  }
                } else {
                  this.trace("Picked subchannel " + pickResult.subchannel.getAddress() + " has state " + connectivity_state_1.ConnectivityState[subchannelState] + " after metadata filters. Retrying pick", constants_1.LogVerbosity.INFO);
                  this.tryPick(callStream, callMetadata, callConfig, dynamicFilters);
                }
              }, (error) => {
                callStream.cancelWithStatus(typeof error.code === "number" ? error.code : constants_1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error.message}`);
              });
            }
            break;
          case picker_1.PickResultType.QUEUE:
            this.pushPick(callStream, callMetadata, callConfig, dynamicFilters);
            break;
          case picker_1.PickResultType.TRANSIENT_FAILURE:
            if (callMetadata.getOptions().waitForReady) {
              this.pushPick(callStream, callMetadata, callConfig, dynamicFilters);
            } else {
              callStream.cancelWithStatus(pickResult.status.code, pickResult.status.details);
            }
            break;
          case picker_1.PickResultType.DROP:
            callStream.cancelWithStatus(pickResult.status.code, pickResult.status.details);
            break;
          default:
            throw new Error(`Invalid state: unknown pickResultType ${pickResult.pickResultType}`);
        }
      }
      removeConnectivityStateWatcher(watcherObject) {
        const watcherIndex = this.connectivityStateWatchers.findIndex((value) => value === watcherObject);
        if (watcherIndex >= 0) {
          this.connectivityStateWatchers.splice(watcherIndex, 1);
        }
      }
      updateState(newState) {
        logging_1.trace(constants_1.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + uri_parser_1.uriToString(this.target) + " " + connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        }
        this.connectivityState = newState;
        const watchersCopy = this.connectivityStateWatchers.slice();
        for (const watcherObject of watchersCopy) {
          if (newState !== watcherObject.currentState) {
            if (watcherObject.timer) {
              clearTimeout(watcherObject.timer);
            }
            this.removeConnectivityStateWatcher(watcherObject);
            watcherObject.callback();
          }
        }
      }
      tryGetConfig(stream, metadata) {
        if (stream.getStatus() !== null) {
          return;
        }
        if (this.configSelector === null) {
          this.resolvingLoadBalancer.exitIdle();
          this.configSelectionQueue.push({
            callStream: stream,
            callMetadata: metadata
          });
          this.callRefTimerRef();
        } else {
          const callConfig = this.configSelector(stream.getMethod(), metadata);
          if (callConfig.status === constants_1.Status.OK) {
            if (callConfig.methodConfig.timeout) {
              const deadline = new Date();
              deadline.setSeconds(deadline.getSeconds() + callConfig.methodConfig.timeout.seconds);
              deadline.setMilliseconds(deadline.getMilliseconds() + callConfig.methodConfig.timeout.nanos / 1e6);
              stream.setConfigDeadline(deadline);
              stream.filterStack.refresh();
            }
            if (callConfig.dynamicFilterFactories.length > 0) {
              const dynamicFilterStackFactory = new filter_stack_1.FilterStackFactory(callConfig.dynamicFilterFactories);
              const dynamicFilterStack = dynamicFilterStackFactory.createFilter(stream);
              dynamicFilterStack.sendMetadata(Promise.resolve(metadata)).then((filteredMetadata) => {
                this.tryPick(stream, filteredMetadata, callConfig, dynamicFilterStack.getFilters());
              });
            } else {
              this.tryPick(stream, metadata, callConfig, []);
            }
          } else {
            stream.cancelWithStatus(callConfig.status, "Failed to route call to method " + stream.getMethod());
          }
        }
      }
      _startCallStream(stream, metadata) {
        this.tryGetConfig(stream, metadata.clone());
      }
      close() {
        this.resolvingLoadBalancer.destroy();
        this.updateState(connectivity_state_1.ConnectivityState.SHUTDOWN);
        clearInterval(this.callRefTimer);
        if (this.channelzEnabled) {
          channelz_1.unregisterChannelzRef(this.channelzRef);
        }
        this.subchannelPool.unrefUnusedSubchannels();
      }
      getTarget() {
        return uri_parser_1.uriToString(this.target);
      }
      getConnectivityState(tryToConnect) {
        const connectivityState = this.connectivityState;
        if (tryToConnect) {
          this.resolvingLoadBalancer.exitIdle();
        }
        return connectivityState;
      }
      watchConnectivityState(currentState, deadline, callback) {
        if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        let timer = null;
        if (deadline !== Infinity) {
          const deadlineDate = deadline instanceof Date ? deadline : new Date(deadline);
          const now = new Date();
          if (deadline === -Infinity || deadlineDate <= now) {
            process.nextTick(callback, new Error("Deadline passed without connectivity state change"));
            return;
          }
          timer = setTimeout(() => {
            this.removeConnectivityStateWatcher(watcherObject);
            callback(new Error("Deadline passed without connectivity state change"));
          }, deadlineDate.getTime() - now.getTime());
        }
        const watcherObject = {
          currentState,
          callback,
          timer
        };
        this.connectivityStateWatchers.push(watcherObject);
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      createCall(method, deadline, host, parentCall, propagateFlags) {
        if (typeof method !== "string") {
          throw new TypeError("Channel#createCall: method must be a string");
        }
        if (!(typeof deadline === "number" || deadline instanceof Date)) {
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        }
        if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        const callNumber = getNewCallNumber();
        this.trace("createCall [" + callNumber + '] method="' + method + '", deadline=' + deadline);
        const finalOptions = {
          deadline,
          flags: propagateFlags !== null && propagateFlags !== void 0 ? propagateFlags : constants_1.Propagate.DEFAULTS,
          host: host !== null && host !== void 0 ? host : this.defaultAuthority,
          parentCall
        };
        const stream = new call_stream_1.Http2CallStream(method, this, finalOptions, this.filterStackFactory, this.credentials._getCallCredentials(), callNumber);
        if (this.channelzEnabled) {
          this.callTracker.addCallStarted();
          stream.addStatusWatcher((status) => {
            if (status.code === constants_1.Status.OK) {
              this.callTracker.addCallSucceeded();
            } else {
              this.callTracker.addCallFailed();
            }
          });
        }
        return stream;
      }
    };
    exports2.ChannelImplementation = ChannelImplementation;
  }
});

// node_modules/@grpc/grpc-js/build/src/server-call.js
var require_server_call = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2ServerCallStream = exports2.ServerDuplexStreamImpl = exports2.ServerWritableStreamImpl = exports2.ServerReadableStreamImpl = exports2.ServerUnaryCallImpl = void 0;
    var events_1 = require("events");
    var http2 = require("http2");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var TRACER_NAME = "server_call";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var GRPC_ACCEPT_ENCODING_HEADER = "grpc-accept-encoding";
    var GRPC_ENCODING_HEADER = "grpc-encoding";
    var GRPC_MESSAGE_HEADER = "grpc-message";
    var GRPC_STATUS_HEADER = "grpc-status";
    var GRPC_TIMEOUT_HEADER = "grpc-timeout";
    var DEADLINE_REGEX = /(\d{1,8})\s*([HMSmun])/;
    var deadlineUnitsToMs = {
      H: 36e5,
      M: 6e4,
      S: 1e3,
      m: 1,
      u: 1e-3,
      n: 1e-6
    };
    var defaultResponseHeaders = {
      [GRPC_ACCEPT_ENCODING_HEADER]: "identity",
      [GRPC_ENCODING_HEADER]: "identity",
      [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK,
      [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
    };
    var defaultResponseOptions = {
      waitForTrailers: true
    };
    var ServerUnaryCallImpl = class extends events_1.EventEmitter {
      constructor(call, metadata, request) {
        super();
        this.call = call;
        this.metadata = metadata;
        this.request = request;
        this.cancelled = false;
        this.call.setupSurfaceCall(this);
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
    };
    exports2.ServerUnaryCallImpl = ServerUnaryCallImpl;
    var ServerReadableStreamImpl = class extends stream_1.Readable {
      constructor(call, metadata, deserialize) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.deserialize = deserialize;
        this.cancelled = false;
        this.call.setupSurfaceCall(this);
        this.call.setupReadable(this);
      }
      _read(size) {
        if (!this.call.consumeUnpushedMessages(this)) {
          return;
        }
        this.call.resume();
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
    };
    exports2.ServerReadableStreamImpl = ServerReadableStreamImpl;
    var ServerWritableStreamImpl = class extends stream_1.Writable {
      constructor(call, metadata, serialize, request) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.serialize = serialize;
        this.request = request;
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.call.setupSurfaceCall(this);
        this.on("error", (err) => {
          this.call.sendError(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      _write(chunk, encoding, callback) {
        try {
          const response = this.call.serializeMessage(chunk);
          if (!this.call.write(response)) {
            this.call.once("drain", callback);
            return;
          }
        } catch (err) {
          err.code = constants_1.Status.INTERNAL;
          this.emit("error", err);
        }
        callback();
      }
      _final(callback) {
        this.call.sendStatus({
          code: constants_1.Status.OK,
          details: "OK",
          metadata: this.trailingMetadata
        });
        callback(null);
      }
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        super.end();
      }
    };
    exports2.ServerWritableStreamImpl = ServerWritableStreamImpl;
    var ServerDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(call, metadata, serialize, deserialize) {
        super({ objectMode: true });
        this.call = call;
        this.metadata = metadata;
        this.serialize = serialize;
        this.deserialize = deserialize;
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.call.setupSurfaceCall(this);
        this.call.setupReadable(this);
        this.on("error", (err) => {
          this.call.sendError(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        super.end();
      }
    };
    exports2.ServerDuplexStreamImpl = ServerDuplexStreamImpl;
    ServerDuplexStreamImpl.prototype._read = ServerReadableStreamImpl.prototype._read;
    ServerDuplexStreamImpl.prototype._write = ServerWritableStreamImpl.prototype._write;
    ServerDuplexStreamImpl.prototype._final = ServerWritableStreamImpl.prototype._final;
    ServerDuplexStreamImpl.prototype.end = ServerWritableStreamImpl.prototype.end;
    var Http2ServerCallStream = class extends events_1.EventEmitter {
      constructor(stream, handler, options) {
        super();
        this.stream = stream;
        this.handler = handler;
        this.options = options;
        this.cancelled = false;
        this.deadlineTimer = setTimeout(() => {
        }, 0);
        this.deadline = Infinity;
        this.wantTrailers = false;
        this.metadataSent = false;
        this.canPush = false;
        this.isPushPending = false;
        this.bufferedMessages = [];
        this.messagesToPush = [];
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        this.stream.once("error", (err) => {
        });
        this.stream.once("close", () => {
          var _a;
          trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " stream closed with rstCode " + this.stream.rstCode);
          this.cancelled = true;
          this.emit("cancelled", "cancelled");
          this.emit("streamEnd", false);
          this.sendStatus({ code: constants_1.Status.CANCELLED, details: "Cancelled by client", metadata: new metadata_1.Metadata() });
        });
        this.stream.on("drain", () => {
          this.emit("drain");
        });
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
        clearTimeout(this.deadlineTimer);
      }
      checkCancelled() {
        if (this.stream.destroyed || this.stream.closed) {
          this.cancelled = true;
        }
        return this.cancelled;
      }
      sendMetadata(customMetadata) {
        if (this.checkCancelled()) {
          return;
        }
        if (this.metadataSent) {
          return;
        }
        this.metadataSent = true;
        const custom = customMetadata ? customMetadata.toHttp2Headers() : null;
        const headers = Object.assign({}, defaultResponseHeaders, custom);
        this.stream.respond(headers, defaultResponseOptions);
      }
      receiveMetadata(headers) {
        const metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        const timeoutHeader = metadata.get(GRPC_TIMEOUT_HEADER);
        if (timeoutHeader.length > 0) {
          const match = timeoutHeader[0].toString().match(DEADLINE_REGEX);
          if (match === null) {
            const err = new Error("Invalid deadline");
            err.code = constants_1.Status.OUT_OF_RANGE;
            this.sendError(err);
            return;
          }
          const timeout = +match[1] * deadlineUnitsToMs[match[2]] | 0;
          const now = new Date();
          this.deadline = now.setMilliseconds(now.getMilliseconds() + timeout);
          this.deadlineTimer = setTimeout(handleExpiredDeadline, timeout, this);
          metadata.remove(GRPC_TIMEOUT_HEADER);
        }
        metadata.remove(http2.constants.HTTP2_HEADER_ACCEPT_ENCODING);
        metadata.remove(http2.constants.HTTP2_HEADER_TE);
        metadata.remove(http2.constants.HTTP2_HEADER_CONTENT_TYPE);
        metadata.remove("grpc-encoding");
        metadata.remove("grpc-accept-encoding");
        return metadata;
      }
      receiveUnaryMessage() {
        return new Promise((resolve2, reject) => {
          const stream = this.stream;
          const chunks = [];
          let totalLength = 0;
          stream.on("data", (data) => {
            chunks.push(data);
            totalLength += data.byteLength;
          });
          stream.once("end", async () => {
            try {
              const requestBytes = Buffer.concat(chunks, totalLength);
              if (this.maxReceiveMessageSize !== -1 && requestBytes.length > this.maxReceiveMessageSize) {
                this.sendError({
                  code: constants_1.Status.RESOURCE_EXHAUSTED,
                  details: `Received message larger than max (${requestBytes.length} vs. ${this.maxReceiveMessageSize})`
                });
                resolve2();
              }
              this.emit("receiveMessage");
              resolve2(this.deserializeMessage(requestBytes));
            } catch (err) {
              err.code = constants_1.Status.INTERNAL;
              this.sendError(err);
              resolve2();
            }
          });
        });
      }
      serializeMessage(value) {
        const messageBuffer = this.handler.serialize(value);
        const byteLength = messageBuffer.byteLength;
        const output = Buffer.allocUnsafe(byteLength + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(byteLength, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      deserializeMessage(bytes) {
        const receivedMessage = bytes.slice(5);
        return this.handler.deserialize(receivedMessage);
      }
      async sendUnaryMessage(err, value, metadata, flags) {
        if (this.checkCancelled()) {
          return;
        }
        if (!metadata) {
          metadata = new metadata_1.Metadata();
        }
        if (err) {
          if (!Object.prototype.hasOwnProperty.call(err, "metadata")) {
            err.metadata = metadata;
          }
          this.sendError(err);
          return;
        }
        try {
          const response = this.serializeMessage(value);
          this.write(response);
          this.sendStatus({ code: constants_1.Status.OK, details: "OK", metadata });
        } catch (err2) {
          err2.code = constants_1.Status.INTERNAL;
          this.sendError(err2);
        }
      }
      sendStatus(statusObj) {
        var _a;
        this.emit("callEnd", statusObj.code);
        this.emit("streamEnd", statusObj.code === constants_1.Status.OK);
        if (this.checkCancelled()) {
          return;
        }
        trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " ended with status code: " + constants_1.Status[statusObj.code] + " details: " + statusObj.details);
        clearTimeout(this.deadlineTimer);
        if (!this.wantTrailers) {
          this.wantTrailers = true;
          this.stream.once("wantTrailers", () => {
            const trailersToSend = Object.assign({
              [GRPC_STATUS_HEADER]: statusObj.code,
              [GRPC_MESSAGE_HEADER]: encodeURI(statusObj.details)
            }, statusObj.metadata.toHttp2Headers());
            this.stream.sendTrailers(trailersToSend);
          });
          this.sendMetadata();
          this.stream.end();
        }
      }
      sendError(error) {
        const status = {
          code: constants_1.Status.UNKNOWN,
          details: "message" in error ? error.message : "Unknown Error",
          metadata: "metadata" in error && error.metadata !== void 0 ? error.metadata : new metadata_1.Metadata()
        };
        if ("code" in error && typeof error.code === "number" && Number.isInteger(error.code)) {
          status.code = error.code;
          if ("details" in error && typeof error.details === "string") {
            status.details = error.details;
          }
        }
        this.sendStatus(status);
      }
      write(chunk) {
        if (this.checkCancelled()) {
          return;
        }
        if (this.maxSendMessageSize !== -1 && chunk.length > this.maxSendMessageSize) {
          this.sendError({
            code: constants_1.Status.RESOURCE_EXHAUSTED,
            details: `Sent message larger than max (${chunk.length} vs. ${this.maxSendMessageSize})`
          });
          return;
        }
        this.sendMetadata();
        this.emit("sendMessage");
        return this.stream.write(chunk);
      }
      resume() {
        this.stream.resume();
      }
      setupSurfaceCall(call) {
        this.once("cancelled", (reason) => {
          call.cancelled = true;
          call.emit("cancelled", reason);
        });
      }
      setupReadable(readable) {
        const decoder = new stream_decoder_1.StreamDecoder();
        this.stream.on("data", async (data) => {
          const messages = decoder.write(data);
          for (const message of messages) {
            if (this.maxReceiveMessageSize !== -1 && message.length > this.maxReceiveMessageSize) {
              this.sendError({
                code: constants_1.Status.RESOURCE_EXHAUSTED,
                details: `Received message larger than max (${message.length} vs. ${this.maxReceiveMessageSize})`
              });
              return;
            }
            this.emit("receiveMessage");
            this.pushOrBufferMessage(readable, message);
          }
        });
        this.stream.once("end", () => {
          this.pushOrBufferMessage(readable, null);
        });
      }
      consumeUnpushedMessages(readable) {
        this.canPush = true;
        while (this.messagesToPush.length > 0) {
          const nextMessage = this.messagesToPush.shift();
          const canPush = readable.push(nextMessage);
          if (nextMessage === null || canPush === false) {
            this.canPush = false;
            break;
          }
        }
        return this.canPush;
      }
      pushOrBufferMessage(readable, messageBytes) {
        if (this.isPushPending) {
          this.bufferedMessages.push(messageBytes);
        } else {
          this.pushMessage(readable, messageBytes);
        }
      }
      async pushMessage(readable, messageBytes) {
        if (messageBytes === null) {
          if (this.canPush) {
            readable.push(null);
          } else {
            this.messagesToPush.push(null);
          }
          return;
        }
        this.isPushPending = true;
        try {
          const deserialized = await this.deserializeMessage(messageBytes);
          if (this.canPush) {
            if (!readable.push(deserialized)) {
              this.canPush = false;
              this.stream.pause();
            }
          } else {
            this.messagesToPush.push(deserialized);
          }
        } catch (error) {
          this.bufferedMessages.length = 0;
          if (!("code" in error && typeof error.code === "number" && Number.isInteger(error.code) && error.code >= constants_1.Status.OK && error.code <= constants_1.Status.UNAUTHENTICATED)) {
            error.code = constants_1.Status.INTERNAL;
          }
          readable.emit("error", error);
        }
        this.isPushPending = false;
        if (this.bufferedMessages.length > 0) {
          this.pushMessage(readable, this.bufferedMessages.shift());
        }
      }
      getPeer() {
        const socket = this.stream.session.socket;
        if (socket.remoteAddress) {
          if (socket.remotePort) {
            return `${socket.remoteAddress}:${socket.remotePort}`;
          } else {
            return socket.remoteAddress;
          }
        } else {
          return "unknown";
        }
      }
      getDeadline() {
        return this.deadline;
      }
    };
    exports2.Http2ServerCallStream = Http2ServerCallStream;
    function handleExpiredDeadline(call) {
      const err = new Error("Deadline exceeded");
      err.code = constants_1.Status.DEADLINE_EXCEEDED;
      call.sendError(err);
      call.cancelled = true;
      call.emit("cancelled", "deadline");
    }
  }
});

// node_modules/@grpc/grpc-js/build/src/server-credentials.js
var require_server_credentials = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerCredentials = void 0;
    var tls_helpers_1 = require_tls_helpers();
    var ServerCredentials = class {
      static createInsecure() {
        return new InsecureServerCredentials();
      }
      static createSsl(rootCerts, keyCertPairs, checkClientCertificate = false) {
        if (rootCerts !== null && !Buffer.isBuffer(rootCerts)) {
          throw new TypeError("rootCerts must be null or a Buffer");
        }
        if (!Array.isArray(keyCertPairs)) {
          throw new TypeError("keyCertPairs must be an array");
        }
        if (typeof checkClientCertificate !== "boolean") {
          throw new TypeError("checkClientCertificate must be a boolean");
        }
        const cert = [];
        const key = [];
        for (let i = 0; i < keyCertPairs.length; i++) {
          const pair = keyCertPairs[i];
          if (pair === null || typeof pair !== "object") {
            throw new TypeError(`keyCertPair[${i}] must be an object`);
          }
          if (!Buffer.isBuffer(pair.private_key)) {
            throw new TypeError(`keyCertPair[${i}].private_key must be a Buffer`);
          }
          if (!Buffer.isBuffer(pair.cert_chain)) {
            throw new TypeError(`keyCertPair[${i}].cert_chain must be a Buffer`);
          }
          cert.push(pair.cert_chain);
          key.push(pair.private_key);
        }
        return new SecureServerCredentials({
          ca: rootCerts || tls_helpers_1.getDefaultRootsData() || void 0,
          cert,
          key,
          requestCert: checkClientCertificate,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
      }
    };
    exports2.ServerCredentials = ServerCredentials;
    var InsecureServerCredentials = class extends ServerCredentials {
      _isSecure() {
        return false;
      }
      _getSettings() {
        return null;
      }
    };
    var SecureServerCredentials = class extends ServerCredentials {
      constructor(options) {
        super();
        this.options = options;
      }
      _isSecure() {
        return true;
      }
      _getSettings() {
        return this.options;
      }
    };
  }
});

// node_modules/@grpc/grpc-js/build/src/server.js
var require_server = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Server = void 0;
    var http2 = require("http2");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var server_call_1 = require_server_call();
    var server_credentials_1 = require_server_credentials();
    var resolver_1 = require_resolver();
    var logging = require_logging();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var channelz_1 = require_channelz();
    var TRACER_NAME = "server";
    function noop() {
    }
    function getUnimplementedStatusResponse(methodName) {
      return {
        code: constants_1.Status.UNIMPLEMENTED,
        details: `The server does not implement the method ${methodName}`,
        metadata: new metadata_1.Metadata()
      };
    }
    function getDefaultHandler(handlerType, methodName) {
      const unimplementedStatusResponse = getUnimplementedStatusResponse(methodName);
      switch (handlerType) {
        case "unary":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "clientStream":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "serverStream":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        case "bidi":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        default:
          throw new Error(`Invalid handlerType ${handlerType}`);
      }
    }
    var Server = class {
      constructor(options) {
        this.http2ServerList = [];
        this.handlers = new Map();
        this.sessions = new Map();
        this.started = false;
        this.channelzEnabled = true;
        this.channelzTrace = new channelz_1.ChannelzTrace();
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.options = options !== null && options !== void 0 ? options : {};
        if (this.options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        if (this.channelzEnabled) {
          this.channelzRef = channelz_1.registerChannelzServer(() => this.getChannelzInfo());
          this.channelzTrace.addTrace("CT_INFO", "Server created");
          this.trace("Server constructed");
        } else {
          this.channelzRef = {
            kind: "server",
            id: -1
          };
        }
      }
      getChannelzInfo() {
        return {
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          listenerChildren: this.listenerChildrenTracker.getChildLists(),
          sessionChildren: this.sessionChildrenTracker.getChildLists()
        };
      }
      getChannelzSessionInfoGetter(session) {
        return () => {
          var _a, _b, _c;
          const sessionInfo = this.sessions.get(session);
          const sessionSocket = session.socket;
          const remoteAddress = sessionSocket.remoteAddress ? subchannel_address_1.stringToSubchannelAddress(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
          const localAddress = sessionSocket.localAddress ? subchannel_address_1.stringToSubchannelAddress(sessionSocket.localAddress, sessionSocket.localPort) : null;
          let tlsInfo;
          if (session.encrypted) {
            const tlsSocket = sessionSocket;
            const cipherInfo = tlsSocket.getCipher();
            const certificate = tlsSocket.getCertificate();
            const peerCertificate = tlsSocket.getPeerCertificate();
            tlsInfo = {
              cipherSuiteStandardName: (_a = cipherInfo.standardName) !== null && _a !== void 0 ? _a : null,
              cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
              localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
              remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
            };
          } else {
            tlsInfo = null;
          }
          const socketInfo = {
            remoteAddress,
            localAddress,
            security: tlsInfo,
            remoteName: null,
            streamsStarted: sessionInfo.streamTracker.callsStarted,
            streamsSucceeded: sessionInfo.streamTracker.callsSucceeded,
            streamsFailed: sessionInfo.streamTracker.callsFailed,
            messagesSent: sessionInfo.messagesSent,
            messagesReceived: sessionInfo.messagesReceived,
            keepAlivesSent: 0,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: sessionInfo.streamTracker.lastCallStartedTimestamp,
            lastMessageSentTimestamp: sessionInfo.lastMessageSentTimestamp,
            lastMessageReceivedTimestamp: sessionInfo.lastMessageReceivedTimestamp,
            localFlowControlWindow: (_b = session.state.localWindowSize) !== null && _b !== void 0 ? _b : null,
            remoteFlowControlWindow: (_c = session.state.remoteWindowSize) !== null && _c !== void 0 ? _c : null
          };
          return socketInfo;
        };
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + text);
      }
      addProtoService() {
        throw new Error("Not implemented. Use addService() instead");
      }
      addService(service, implementation) {
        if (service === null || typeof service !== "object" || implementation === null || typeof implementation !== "object") {
          throw new Error("addService() requires two objects as arguments");
        }
        const serviceKeys = Object.keys(service);
        if (serviceKeys.length === 0) {
          throw new Error("Cannot add an empty service to a server");
        }
        serviceKeys.forEach((name4) => {
          const attrs = service[name4];
          let methodType;
          if (attrs.requestStream) {
            if (attrs.responseStream) {
              methodType = "bidi";
            } else {
              methodType = "clientStream";
            }
          } else {
            if (attrs.responseStream) {
              methodType = "serverStream";
            } else {
              methodType = "unary";
            }
          }
          let implFn = implementation[name4];
          let impl;
          if (implFn === void 0 && typeof attrs.originalName === "string") {
            implFn = implementation[attrs.originalName];
          }
          if (implFn !== void 0) {
            impl = implFn.bind(implementation);
          } else {
            impl = getDefaultHandler(methodType, name4);
          }
          const success = this.register(attrs.path, impl, attrs.responseSerialize, attrs.requestDeserialize, methodType);
          if (success === false) {
            throw new Error(`Method handler for ${attrs.path} already provided.`);
          }
        });
      }
      removeService(service) {
        if (service === null || typeof service !== "object") {
          throw new Error("removeService() requires object as argument");
        }
        const serviceKeys = Object.keys(service);
        serviceKeys.forEach((name4) => {
          const attrs = service[name4];
          this.unregister(attrs.path);
        });
      }
      bind(port, creds) {
        throw new Error("Not implemented. Use bindAsync() instead");
      }
      bindAsync(port, creds, callback) {
        if (this.started === true) {
          throw new Error("server is already started");
        }
        if (typeof port !== "string") {
          throw new TypeError("port must be a string");
        }
        if (creds === null || !(creds instanceof server_credentials_1.ServerCredentials)) {
          throw new TypeError("creds must be a ServerCredentials object");
        }
        if (typeof callback !== "function") {
          throw new TypeError("callback must be a function");
        }
        const initialPortUri = uri_parser_1.parseUri(port);
        if (initialPortUri === null) {
          throw new Error(`Could not parse port "${port}"`);
        }
        const portUri = resolver_1.mapUriDefaultScheme(initialPortUri);
        if (portUri === null) {
          throw new Error(`Could not get a default scheme for port "${port}"`);
        }
        const serverOptions = {
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
        };
        if ("grpc-node.max_session_memory" in this.options) {
          serverOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        }
        if ("grpc.max_concurrent_streams" in this.options) {
          serverOptions.settings = {
            maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
          };
        }
        const deferredCallback = (error, port2) => {
          process.nextTick(() => callback(error, port2));
        };
        const setupServer = () => {
          let http2Server;
          if (creds._isSecure()) {
            const secureServerOptions = Object.assign(serverOptions, creds._getSettings());
            http2Server = http2.createSecureServer(secureServerOptions);
          } else {
            http2Server = http2.createServer(serverOptions);
          }
          http2Server.setTimeout(0, noop);
          this._setupHandlers(http2Server);
          return http2Server;
        };
        const bindSpecificPort = (addressList, portNum, previousCount) => {
          if (addressList.length === 0) {
            return Promise.resolve({ port: portNum, count: previousCount });
          }
          return Promise.all(addressList.map((address) => {
            this.trace("Attempting to bind " + subchannel_address_1.subchannelAddressToString(address));
            let addr;
            if (subchannel_address_1.isTcpSubchannelAddress(address)) {
              addr = {
                host: address.host,
                port: portNum
              };
            } else {
              addr = address;
            }
            const http2Server = setupServer();
            return new Promise((resolve2, reject) => {
              const onError = (err) => {
                this.trace("Failed to bind " + subchannel_address_1.subchannelAddressToString(address) + " with error " + err.message);
                resolve2(err);
              };
              http2Server.once("error", onError);
              http2Server.listen(addr, () => {
                const boundAddress = http2Server.address();
                let boundSubchannelAddress;
                if (typeof boundAddress === "string") {
                  boundSubchannelAddress = {
                    path: boundAddress
                  };
                } else {
                  boundSubchannelAddress = {
                    host: boundAddress.address,
                    port: boundAddress.port
                  };
                }
                const channelzRef = channelz_1.registerChannelzSocket(subchannel_address_1.subchannelAddressToString(boundSubchannelAddress), () => {
                  return {
                    localAddress: boundSubchannelAddress,
                    remoteAddress: null,
                    security: null,
                    remoteName: null,
                    streamsStarted: 0,
                    streamsSucceeded: 0,
                    streamsFailed: 0,
                    messagesSent: 0,
                    messagesReceived: 0,
                    keepAlivesSent: 0,
                    lastLocalStreamCreatedTimestamp: null,
                    lastRemoteStreamCreatedTimestamp: null,
                    lastMessageSentTimestamp: null,
                    lastMessageReceivedTimestamp: null,
                    localFlowControlWindow: null,
                    remoteFlowControlWindow: null
                  };
                });
                this.listenerChildrenTracker.refChild(channelzRef);
                this.http2ServerList.push({ server: http2Server, channelzRef });
                this.trace("Successfully bound " + subchannel_address_1.subchannelAddressToString(boundSubchannelAddress));
                resolve2("port" in boundSubchannelAddress ? boundSubchannelAddress.port : portNum);
                http2Server.removeListener("error", onError);
              });
            });
          })).then((results) => {
            let count = 0;
            for (const result of results) {
              if (typeof result === "number") {
                count += 1;
                if (result !== portNum) {
                  throw new Error("Invalid state: multiple port numbers added from single address");
                }
              }
            }
            return {
              port: portNum,
              count: count + previousCount
            };
          });
        };
        const bindWildcardPort = (addressList) => {
          if (addressList.length === 0) {
            return Promise.resolve({ port: 0, count: 0 });
          }
          const address = addressList[0];
          const http2Server = setupServer();
          return new Promise((resolve2, reject) => {
            const onError = (err) => {
              this.trace("Failed to bind " + subchannel_address_1.subchannelAddressToString(address) + " with error " + err.message);
              resolve2(bindWildcardPort(addressList.slice(1)));
            };
            http2Server.once("error", onError);
            http2Server.listen(address, () => {
              const boundAddress = http2Server.address();
              const boundSubchannelAddress = {
                host: boundAddress.address,
                port: boundAddress.port
              };
              const channelzRef = channelz_1.registerChannelzSocket(subchannel_address_1.subchannelAddressToString(boundSubchannelAddress), () => {
                return {
                  localAddress: boundSubchannelAddress,
                  remoteAddress: null,
                  security: null,
                  remoteName: null,
                  streamsStarted: 0,
                  streamsSucceeded: 0,
                  streamsFailed: 0,
                  messagesSent: 0,
                  messagesReceived: 0,
                  keepAlivesSent: 0,
                  lastLocalStreamCreatedTimestamp: null,
                  lastRemoteStreamCreatedTimestamp: null,
                  lastMessageSentTimestamp: null,
                  lastMessageReceivedTimestamp: null,
                  localFlowControlWindow: null,
                  remoteFlowControlWindow: null
                };
              });
              this.listenerChildrenTracker.refChild(channelzRef);
              this.http2ServerList.push({ server: http2Server, channelzRef });
              this.trace("Successfully bound " + subchannel_address_1.subchannelAddressToString(boundSubchannelAddress));
              resolve2(bindSpecificPort(addressList.slice(1), boundAddress.port, 1));
              http2Server.removeListener("error", onError);
            });
          });
        };
        const resolverListener = {
          onSuccessfulResolution: (addressList, serviceConfig, serviceConfigError) => {
            resolverListener.onSuccessfulResolution = () => {
            };
            if (addressList.length === 0) {
              deferredCallback(new Error(`No addresses resolved for port ${port}`), 0);
              return;
            }
            let bindResultPromise;
            if (subchannel_address_1.isTcpSubchannelAddress(addressList[0])) {
              if (addressList[0].port === 0) {
                bindResultPromise = bindWildcardPort(addressList);
              } else {
                bindResultPromise = bindSpecificPort(addressList, addressList[0].port, 0);
              }
            } else {
              bindResultPromise = bindSpecificPort(addressList, 1, 0);
            }
            bindResultPromise.then((bindResult) => {
              if (bindResult.count === 0) {
                const errorString = `No address added out of total ${addressList.length} resolved`;
                logging.log(constants_1.LogVerbosity.ERROR, errorString);
                deferredCallback(new Error(errorString), 0);
              } else {
                if (bindResult.count < addressList.length) {
                  logging.log(constants_1.LogVerbosity.INFO, `WARNING Only ${bindResult.count} addresses added out of total ${addressList.length} resolved`);
                }
                deferredCallback(null, bindResult.port);
              }
            }, (error) => {
              const errorString = `No address added out of total ${addressList.length} resolved`;
              logging.log(constants_1.LogVerbosity.ERROR, errorString);
              deferredCallback(new Error(errorString), 0);
            });
          },
          onError: (error) => {
            deferredCallback(new Error(error.details), 0);
          }
        };
        const resolver = resolver_1.createResolver(portUri, resolverListener, this.options);
        resolver.updateResolution();
      }
      forceShutdown() {
        for (const { server: http2Server, channelzRef: ref } of this.http2ServerList) {
          if (http2Server.listening) {
            http2Server.close(() => {
              this.listenerChildrenTracker.unrefChild(ref);
              channelz_1.unregisterChannelzRef(ref);
            });
          }
        }
        this.started = false;
        this.sessions.forEach((channelzInfo, session) => {
          session.destroy(http2.constants.NGHTTP2_CANCEL);
        });
        this.sessions.clear();
        channelz_1.unregisterChannelzRef(this.channelzRef);
      }
      register(name4, handler, serialize, deserialize, type) {
        if (this.handlers.has(name4)) {
          return false;
        }
        this.handlers.set(name4, {
          func: handler,
          serialize,
          deserialize,
          type,
          path: name4
        });
        return true;
      }
      unregister(name4) {
        return this.handlers.delete(name4);
      }
      start() {
        if (this.http2ServerList.length === 0 || this.http2ServerList.every(({ server: http2Server }) => http2Server.listening !== true)) {
          throw new Error("server must be bound in order to start");
        }
        if (this.started === true) {
          throw new Error("server is already started");
        }
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Starting");
        }
        this.started = true;
      }
      tryShutdown(callback) {
        const wrappedCallback = (error) => {
          channelz_1.unregisterChannelzRef(this.channelzRef);
          callback(error);
        };
        let pendingChecks = 0;
        function maybeCallback() {
          pendingChecks--;
          if (pendingChecks === 0) {
            wrappedCallback();
          }
        }
        this.started = false;
        for (const { server: http2Server, channelzRef: ref } of this.http2ServerList) {
          if (http2Server.listening) {
            pendingChecks++;
            http2Server.close(() => {
              this.listenerChildrenTracker.unrefChild(ref);
              channelz_1.unregisterChannelzRef(ref);
              maybeCallback();
            });
          }
        }
        this.sessions.forEach((channelzInfo, session) => {
          if (!session.closed) {
            pendingChecks += 1;
            session.close(maybeCallback);
          }
        });
        if (pendingChecks === 0) {
          wrappedCallback();
        }
      }
      addHttp2Port() {
        throw new Error("Not yet implemented");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _setupHandlers(http2Server) {
        if (http2Server === null) {
          return;
        }
        http2Server.on("stream", (stream, headers) => {
          const channelzSessionInfo = this.sessions.get(stream.session);
          this.callTracker.addCallStarted();
          channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallStarted();
          const contentType = headers[http2.constants.HTTP2_HEADER_CONTENT_TYPE];
          if (typeof contentType !== "string" || !contentType.startsWith("application/grpc")) {
            stream.respond({
              [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
            }, { endStream: true });
            this.callTracker.addCallFailed();
            channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
            return;
          }
          let call = null;
          try {
            const path = headers[http2.constants.HTTP2_HEADER_PATH];
            const serverAddress = http2Server.address();
            let serverAddressString = "null";
            if (serverAddress) {
              if (typeof serverAddress === "string") {
                serverAddressString = serverAddress;
              } else {
                serverAddressString = serverAddress.address + ":" + serverAddress.port;
              }
            }
            this.trace("Received call to method " + path + " at address " + serverAddressString);
            const handler = this.handlers.get(path);
            if (handler === void 0) {
              this.trace("No handler registered for method " + path + ". Sending UNIMPLEMENTED status.");
              throw getUnimplementedStatusResponse(path);
            }
            call = new server_call_1.Http2ServerCallStream(stream, handler, this.options);
            call.once("callEnd", (code) => {
              if (code === constants_1.Status.OK) {
                this.callTracker.addCallSucceeded();
              } else {
                this.callTracker.addCallFailed();
              }
            });
            if (channelzSessionInfo) {
              call.once("streamEnd", (success) => {
                if (success) {
                  channelzSessionInfo.streamTracker.addCallSucceeded();
                } else {
                  channelzSessionInfo.streamTracker.addCallFailed();
                }
              });
              call.on("sendMessage", () => {
                channelzSessionInfo.messagesSent += 1;
                channelzSessionInfo.lastMessageSentTimestamp = new Date();
              });
              call.on("receiveMessage", () => {
                channelzSessionInfo.messagesReceived += 1;
                channelzSessionInfo.lastMessageReceivedTimestamp = new Date();
              });
            }
            const metadata = call.receiveMetadata(headers);
            switch (handler.type) {
              case "unary":
                handleUnary(call, handler, metadata);
                break;
              case "clientStream":
                handleClientStreaming(call, handler, metadata);
                break;
              case "serverStream":
                handleServerStreaming(call, handler, metadata);
                break;
              case "bidi":
                handleBidiStreaming(call, handler, metadata);
                break;
              default:
                throw new Error(`Unknown handler type: ${handler.type}`);
            }
          } catch (err) {
            if (!call) {
              call = new server_call_1.Http2ServerCallStream(stream, null, this.options);
              this.callTracker.addCallFailed();
              channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
            }
            if (err.code === void 0) {
              err.code = constants_1.Status.INTERNAL;
            }
            call.sendError(err);
          }
        });
        http2Server.on("session", (session) => {
          var _a;
          if (!this.started) {
            session.destroy();
            return;
          }
          const channelzRef = channelz_1.registerChannelzSocket((_a = session.socket.remoteAddress) !== null && _a !== void 0 ? _a : "unknown", this.getChannelzSessionInfoGetter(session));
          const channelzSessionInfo = {
            ref: channelzRef,
            streamTracker: new channelz_1.ChannelzCallTracker(),
            messagesSent: 0,
            messagesReceived: 0,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null
          };
          this.sessions.set(session, channelzSessionInfo);
          const clientAddress = session.socket.remoteAddress;
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + clientAddress);
            this.sessionChildrenTracker.refChild(channelzRef);
          }
          session.on("close", () => {
            if (this.channelzEnabled) {
              this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + clientAddress);
              this.sessionChildrenTracker.unrefChild(channelzRef);
              channelz_1.unregisterChannelzRef(channelzRef);
            }
            this.sessions.delete(session);
          });
        });
      }
    };
    exports2.Server = Server;
    async function handleUnary(call, handler, metadata) {
      const request = await call.receiveUnaryMessage();
      if (request === void 0 || call.cancelled) {
        return;
      }
      const emitter = new server_call_1.ServerUnaryCallImpl(call, metadata, request);
      handler.func(emitter, (err, value, trailer, flags) => {
        call.sendUnaryMessage(err, value, trailer, flags);
      });
    }
    function handleClientStreaming(call, handler, metadata) {
      const stream = new server_call_1.ServerReadableStreamImpl(call, metadata, handler.deserialize);
      function respond(err, value, trailer, flags) {
        stream.destroy();
        call.sendUnaryMessage(err, value, trailer, flags);
      }
      if (call.cancelled) {
        return;
      }
      stream.on("error", respond);
      handler.func(stream, respond);
    }
    async function handleServerStreaming(call, handler, metadata) {
      const request = await call.receiveUnaryMessage();
      if (request === void 0 || call.cancelled) {
        return;
      }
      const stream = new server_call_1.ServerWritableStreamImpl(call, metadata, handler.serialize, request);
      handler.func(stream);
    }
    function handleBidiStreaming(call, handler, metadata) {
      const stream = new server_call_1.ServerDuplexStreamImpl(call, metadata, handler.serialize, handler.deserialize);
      if (call.cancelled) {
        return;
      }
      handler.func(stream);
    }
  }
});

// node_modules/@grpc/grpc-js/build/src/status-builder.js
var require_status_builder = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/status-builder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StatusBuilder = void 0;
    var StatusBuilder = class {
      constructor() {
        this.code = null;
        this.details = null;
        this.metadata = null;
      }
      withCode(code) {
        this.code = code;
        return this;
      }
      withDetails(details) {
        this.details = details;
        return this;
      }
      withMetadata(metadata) {
        this.metadata = metadata;
        return this;
      }
      build() {
        const status = {};
        if (this.code !== null) {
          status.code = this.code;
        }
        if (this.details !== null) {
          status.details = this.details;
        }
        if (this.metadata !== null) {
          status.metadata = this.metadata;
        }
        return status;
      }
    };
    exports2.StatusBuilder = StatusBuilder;
  }
});

// node_modules/@grpc/grpc-js/build/src/experimental.js
var require_experimental = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/experimental.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var logging_1 = require_logging();
    Object.defineProperty(exports2, "trace", { enumerable: true, get: function() {
      return logging_1.trace;
    } });
    var resolver_1 = require_resolver();
    Object.defineProperty(exports2, "registerResolver", { enumerable: true, get: function() {
      return resolver_1.registerResolver;
    } });
    var uri_parser_1 = require_uri_parser();
    Object.defineProperty(exports2, "uriToString", { enumerable: true, get: function() {
      return uri_parser_1.uriToString;
    } });
    var backoff_timeout_1 = require_backoff_timeout();
    Object.defineProperty(exports2, "BackoffTimeout", { enumerable: true, get: function() {
      return backoff_timeout_1.BackoffTimeout;
    } });
    var load_balancer_1 = require_load_balancer();
    Object.defineProperty(exports2, "createChildChannelControlHelper", { enumerable: true, get: function() {
      return load_balancer_1.createChildChannelControlHelper;
    } });
    Object.defineProperty(exports2, "registerLoadBalancerType", { enumerable: true, get: function() {
      return load_balancer_1.registerLoadBalancerType;
    } });
    Object.defineProperty(exports2, "getFirstUsableConfig", { enumerable: true, get: function() {
      return load_balancer_1.getFirstUsableConfig;
    } });
    Object.defineProperty(exports2, "validateLoadBalancingConfig", { enumerable: true, get: function() {
      return load_balancer_1.validateLoadBalancingConfig;
    } });
    var subchannel_address_1 = require_subchannel_address();
    Object.defineProperty(exports2, "subchannelAddressToString", { enumerable: true, get: function() {
      return subchannel_address_1.subchannelAddressToString;
    } });
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    Object.defineProperty(exports2, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
      return load_balancer_child_handler_1.ChildLoadBalancerHandler;
    } });
    var picker_1 = require_picker();
    Object.defineProperty(exports2, "UnavailablePicker", { enumerable: true, get: function() {
      return picker_1.UnavailablePicker;
    } });
    Object.defineProperty(exports2, "QueuePicker", { enumerable: true, get: function() {
      return picker_1.QueuePicker;
    } });
    Object.defineProperty(exports2, "PickResultType", { enumerable: true, get: function() {
      return picker_1.PickResultType;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports2, "BaseFilter", { enumerable: true, get: function() {
      return filter_1.BaseFilter;
    } });
    var filter_stack_1 = require_filter_stack();
    Object.defineProperty(exports2, "FilterStackFactory", { enumerable: true, get: function() {
      return filter_stack_1.FilterStackFactory;
    } });
    var admin_1 = require_admin();
    Object.defineProperty(exports2, "registerAdminService", { enumerable: true, get: function() {
      return admin_1.registerAdminService;
    } });
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-dns.js
var require_resolver_dns = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-dns.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var resolver_1 = require_resolver();
    var dns = require("dns");
    var util = require("util");
    var service_config_1 = require_service_config();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var net_1 = require("net");
    var TRACER_NAME = "dns_resolver";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var DEFAULT_PORT = 443;
    var resolveTxtPromise = util.promisify(dns.resolveTxt);
    var dnsLookupPromise = util.promisify(dns.lookup);
    function mergeArrays(...arrays) {
      const result = [];
      for (let i = 0; i < Math.max.apply(null, arrays.map((array) => array.length)); i++) {
        for (const array of arrays) {
          if (i < array.length) {
            result.push(array[i]);
          }
        }
      }
      return result;
    }
    var DnsResolver = class {
      constructor(target, listener, channelOptions) {
        var _a, _b;
        this.target = target;
        this.listener = listener;
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        trace("Resolver constructed for target " + uri_parser_1.uriToString(target));
        const hostPort = uri_parser_1.splitHostPort(target.path);
        if (hostPort === null) {
          this.ipResult = null;
          this.dnsHostname = null;
          this.port = null;
        } else {
          if (net_1.isIPv4(hostPort.host) || net_1.isIPv6(hostPort.host)) {
            this.ipResult = [
              {
                host: hostPort.host,
                port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT
              }
            ];
            this.dnsHostname = null;
            this.port = null;
          } else {
            this.ipResult = null;
            this.dnsHostname = hostPort.host;
            this.port = (_b = hostPort.port) !== null && _b !== void 0 ? _b : DEFAULT_PORT;
          }
        }
        this.percentage = Math.random() * 100;
        this.defaultResolutionError = {
          code: constants_1.Status.UNAVAILABLE,
          details: `Name resolution failed for target ${uri_parser_1.uriToString(this.target)}`,
          metadata: new metadata_1.Metadata()
        };
      }
      startResolution() {
        if (this.ipResult !== null) {
          trace("Returning IP address for target " + uri_parser_1.uriToString(this.target));
          setImmediate(() => {
            this.listener.onSuccessfulResolution(this.ipResult, null, null, null, {});
          });
          return;
        }
        if (this.dnsHostname === null) {
          setImmediate(() => {
            this.listener.onError({
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse DNS address ${uri_parser_1.uriToString(this.target)}`,
              metadata: new metadata_1.Metadata()
            });
          });
        } else {
          this.latestLookupResult = null;
          const hostname = this.dnsHostname;
          this.pendingLookupPromise = dnsLookupPromise(hostname, { all: true });
          this.pendingLookupPromise.then((addressList) => {
            this.pendingLookupPromise = null;
            const ip4Addresses = addressList.filter((addr) => addr.family === 4);
            const ip6Addresses = addressList.filter((addr) => addr.family === 6);
            this.latestLookupResult = mergeArrays(ip6Addresses, ip4Addresses).map((addr) => ({ host: addr.address, port: +this.port }));
            const allAddressesString = "[" + this.latestLookupResult.map((addr) => addr.host + ":" + addr.port).join(",") + "]";
            trace("Resolved addresses for target " + uri_parser_1.uriToString(this.target) + ": " + allAddressesString);
            if (this.latestLookupResult.length === 0) {
              this.listener.onError(this.defaultResolutionError);
              return;
            }
            this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
          }, (err) => {
            trace("Resolution error for target " + uri_parser_1.uriToString(this.target) + ": " + err.message);
            this.pendingLookupPromise = null;
            this.listener.onError(this.defaultResolutionError);
          });
          if (this.pendingTxtPromise === null) {
            this.pendingTxtPromise = resolveTxtPromise(hostname);
            this.pendingTxtPromise.then((txtRecord) => {
              this.pendingTxtPromise = null;
              try {
                this.latestServiceConfig = service_config_1.extractAndSelectServiceConfig(txtRecord, this.percentage);
              } catch (err) {
                this.latestServiceConfigError = {
                  code: constants_1.Status.UNAVAILABLE,
                  details: "Parsing service config failed",
                  metadata: new metadata_1.Metadata()
                };
              }
              if (this.latestLookupResult !== null) {
                this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
              }
            }, (err) => {
            });
          }
        }
      }
      updateResolution() {
        trace("Resolution update requested for target " + uri_parser_1.uriToString(this.target));
        if (this.pendingLookupPromise === null) {
          this.startResolution();
        }
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return target.path;
      }
    };
    function setup() {
      resolver_1.registerResolver("dns", DnsResolver);
      resolver_1.registerDefaultScheme("dns");
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-uds.js
var require_resolver_uds = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-uds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var resolver_1 = require_resolver();
    var UdsResolver = class {
      constructor(target, listener, channelOptions) {
        this.listener = listener;
        this.addresses = [];
        let path;
        if (target.authority === "") {
          path = "/" + target.path;
        } else {
          path = target.path;
        }
        this.addresses = [{ path }];
      }
      updateResolution() {
        process.nextTick(this.listener.onSuccessfulResolution, this.addresses, null, null, null, {});
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return "localhost";
      }
    };
    function setup() {
      resolver_1.registerResolver("unix", UdsResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/resolver-ip.js
var require_resolver_ip = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/resolver-ip.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var net_1 = require("net");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var resolver_1 = require_resolver();
    var uri_parser_1 = require_uri_parser();
    var logging = require_logging();
    var TRACER_NAME = "ip_resolver";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var IPV4_SCHEME = "ipv4";
    var IPV6_SCHEME = "ipv6";
    var DEFAULT_PORT = 443;
    var IpResolver = class {
      constructor(target, listener, channelOptions) {
        var _a;
        this.target = target;
        this.listener = listener;
        this.addresses = [];
        this.error = null;
        trace("Resolver constructed for target " + uri_parser_1.uriToString(target));
        const addresses = [];
        if (!(target.scheme === IPV4_SCHEME || target.scheme === IPV6_SCHEME)) {
          this.error = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Unrecognized scheme ${target.scheme} in IP resolver`,
            metadata: new metadata_1.Metadata()
          };
          return;
        }
        const pathList = target.path.split(",");
        for (const path of pathList) {
          const hostPort = uri_parser_1.splitHostPort(path);
          if (hostPort === null) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          if (target.scheme === IPV4_SCHEME && !net_1.isIPv4(hostPort.host) || target.scheme === IPV6_SCHEME && !net_1.isIPv6(hostPort.host)) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          addresses.push({
            host: hostPort.host,
            port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT
          });
        }
        this.addresses = addresses;
        trace("Parsed " + target.scheme + " address list " + this.addresses);
      }
      updateResolution() {
        process.nextTick(() => {
          if (this.error) {
            this.listener.onError(this.error);
          } else {
            this.listener.onSuccessfulResolution(this.addresses, null, null, null, {});
          }
        });
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return target.path.split(",")[0];
      }
    };
    function setup() {
      resolver_1.registerResolver(IPV4_SCHEME, IpResolver);
      resolver_1.registerResolver(IPV6_SCHEME, IpResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js
var require_load_balancer_pick_first = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.PickFirstLoadBalancer = exports2.PickFirstLoadBalancingConfig = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var picker_1 = require_picker();
    var subchannel_address_1 = require_subchannel_address();
    var logging = require_logging();
    var constants_1 = require_constants();
    var TRACER_NAME = "pick_first";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "pick_first";
    var CONNECTION_DELAY_INTERVAL_MS = 250;
    var PickFirstLoadBalancingConfig = class {
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      constructor() {
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {}
        };
      }
      static createFromJson(obj) {
        return new PickFirstLoadBalancingConfig();
      }
    };
    exports2.PickFirstLoadBalancingConfig = PickFirstLoadBalancingConfig;
    var PickFirstPicker = class {
      constructor(subchannel) {
        this.subchannel = subchannel;
      }
      pick(pickArgs) {
        return {
          pickResultType: picker_1.PickResultType.COMPLETE,
          subchannel: this.subchannel,
          status: null,
          extraFilterFactories: [],
          onCallStarted: null
        };
      }
    };
    var PickFirstLoadBalancer = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.latestAddressList = [];
        this.subchannels = [];
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentSubchannelIndex = 0;
        this.currentPick = null;
        this.triedAllSubchannels = false;
        this.subchannelStateCounts = {
          [connectivity_state_1.ConnectivityState.CONNECTING]: 0,
          [connectivity_state_1.ConnectivityState.IDLE]: 0,
          [connectivity_state_1.ConnectivityState.READY]: 0,
          [connectivity_state_1.ConnectivityState.SHUTDOWN]: 0,
          [connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannelStateListener = (subchannel, previousState, newState) => {
          this.subchannelStateCounts[previousState] -= 1;
          this.subchannelStateCounts[newState] += 1;
          if (subchannel === this.subchannels[this.currentSubchannelIndex] && newState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            this.startNextSubchannelConnecting();
          }
          if (newState === connectivity_state_1.ConnectivityState.READY) {
            this.pickSubchannel(subchannel);
            return;
          } else {
            if (this.triedAllSubchannels && this.subchannelStateCounts[connectivity_state_1.ConnectivityState.IDLE] === this.subchannels.length) {
              this.resetSubchannelList();
              this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
              return;
            }
            if (this.currentPick === null) {
              if (this.triedAllSubchannels) {
                let newLBState;
                if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.CONNECTING] > 0) {
                  newLBState = connectivity_state_1.ConnectivityState.CONNECTING;
                } else if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
                  newLBState = connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE;
                } else {
                  newLBState = connectivity_state_1.ConnectivityState.IDLE;
                }
                if (newLBState !== this.currentState) {
                  if (newLBState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
                    this.updateState(newLBState, new picker_1.UnavailablePicker());
                  } else {
                    this.updateState(newLBState, new picker_1.QueuePicker(this));
                  }
                }
              } else {
                this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
              }
            }
          }
        };
        this.pickedSubchannelStateListener = (subchannel, previousState, newState) => {
          if (newState !== connectivity_state_1.ConnectivityState.READY) {
            this.currentPick = null;
            subchannel.unref();
            subchannel.removeConnectivityStateListener(this.pickedSubchannelStateListener);
            this.channelControlHelper.removeChannelzChild(subchannel.getChannelzRef());
            if (this.subchannels.length > 0) {
              if (this.triedAllSubchannels) {
                let newLBState;
                if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.CONNECTING] > 0) {
                  newLBState = connectivity_state_1.ConnectivityState.CONNECTING;
                } else if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
                  newLBState = connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE;
                } else {
                  newLBState = connectivity_state_1.ConnectivityState.IDLE;
                }
                if (newLBState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
                  this.updateState(newLBState, new picker_1.UnavailablePicker());
                } else {
                  this.updateState(newLBState, new picker_1.QueuePicker(this));
                }
              } else {
                this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
              }
            } else {
              this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
            }
          }
        };
        this.connectionDelayTimeout = setTimeout(() => {
        }, 0);
        clearTimeout(this.connectionDelayTimeout);
      }
      startNextSubchannelConnecting() {
        if (this.triedAllSubchannels) {
          return;
        }
        for (const [index, subchannel] of this.subchannels.entries()) {
          if (index > this.currentSubchannelIndex) {
            const subchannelState = subchannel.getConnectivityState();
            if (subchannelState === connectivity_state_1.ConnectivityState.IDLE || subchannelState === connectivity_state_1.ConnectivityState.CONNECTING) {
              this.startConnecting(index);
              return;
            }
          }
        }
        this.triedAllSubchannels = true;
      }
      startConnecting(subchannelIndex) {
        clearTimeout(this.connectionDelayTimeout);
        this.currentSubchannelIndex = subchannelIndex;
        if (this.subchannels[subchannelIndex].getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
          trace("Start connecting to subchannel with address " + this.subchannels[subchannelIndex].getAddress());
          process.nextTick(() => {
            this.subchannels[subchannelIndex].startConnecting();
          });
        }
        this.connectionDelayTimeout = setTimeout(() => {
          this.startNextSubchannelConnecting();
        }, CONNECTION_DELAY_INTERVAL_MS);
      }
      pickSubchannel(subchannel) {
        trace("Pick subchannel with address " + subchannel.getAddress());
        if (this.currentPick !== null) {
          this.currentPick.unref();
          this.currentPick.removeConnectivityStateListener(this.pickedSubchannelStateListener);
        }
        this.currentPick = subchannel;
        this.updateState(connectivity_state_1.ConnectivityState.READY, new PickFirstPicker(subchannel));
        subchannel.addConnectivityStateListener(this.pickedSubchannelStateListener);
        subchannel.ref();
        this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
        this.resetSubchannelList();
        clearTimeout(this.connectionDelayTimeout);
      }
      updateState(newState, picker) {
        trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const subchannel of this.subchannels) {
          subchannel.removeConnectivityStateListener(this.subchannelStateListener);
          subchannel.unref();
          this.channelControlHelper.removeChannelzChild(subchannel.getChannelzRef());
        }
        this.currentSubchannelIndex = 0;
        this.subchannelStateCounts = {
          [connectivity_state_1.ConnectivityState.CONNECTING]: 0,
          [connectivity_state_1.ConnectivityState.IDLE]: 0,
          [connectivity_state_1.ConnectivityState.READY]: 0,
          [connectivity_state_1.ConnectivityState.SHUTDOWN]: 0,
          [connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannels = [];
        this.triedAllSubchannels = false;
      }
      connectToAddressList() {
        this.resetSubchannelList();
        trace("Connect to address list " + this.latestAddressList.map((address) => subchannel_address_1.subchannelAddressToString(address)));
        this.subchannels = this.latestAddressList.map((address) => this.channelControlHelper.createSubchannel(address, {}));
        for (const subchannel of this.subchannels) {
          subchannel.ref();
          this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
        }
        for (const subchannel of this.subchannels) {
          subchannel.addConnectivityStateListener(this.subchannelStateListener);
          this.subchannelStateCounts[subchannel.getConnectivityState()] += 1;
          if (subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.READY) {
            this.pickSubchannel(subchannel);
            this.resetSubchannelList();
            return;
          }
        }
        for (const [index, subchannel] of this.subchannels.entries()) {
          const subchannelState = subchannel.getConnectivityState();
          if (subchannelState === connectivity_state_1.ConnectivityState.IDLE || subchannelState === connectivity_state_1.ConnectivityState.CONNECTING) {
            this.startConnecting(index);
            if (this.currentPick === null) {
              this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
            }
            return;
          }
        }
        if (this.currentPick === null) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker());
        }
      }
      updateAddressList(addressList, lbConfig) {
        if (this.subchannels.length === 0 || !this.latestAddressList.every((value, index) => addressList[index] === value)) {
          this.latestAddressList = addressList;
          this.connectToAddressList();
        }
      }
      exitIdle() {
        for (const subchannel of this.subchannels) {
          subchannel.startConnecting();
        }
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE) {
          if (this.latestAddressList.length > 0) {
            this.connectToAddressList();
          }
        }
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE || this.triedAllSubchannels) {
          this.channelControlHelper.requestReresolution();
        }
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
        if (this.currentPick !== null) {
          this.currentPick.unref();
          this.currentPick.removeConnectivityStateListener(this.pickedSubchannelStateListener);
          this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef());
        }
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.PickFirstLoadBalancer = PickFirstLoadBalancer;
    function setup() {
      load_balancer_1.registerLoadBalancerType(TYPE_NAME, PickFirstLoadBalancer, PickFirstLoadBalancingConfig);
      load_balancer_1.registerDefaultLoadBalancerType(TYPE_NAME);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js
var require_load_balancer_round_robin = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.RoundRobinLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var picker_1 = require_picker();
    var subchannel_address_1 = require_subchannel_address();
    var logging = require_logging();
    var constants_1 = require_constants();
    var TRACER_NAME = "round_robin";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "round_robin";
    var RoundRobinLoadBalancingConfig = class {
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      constructor() {
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {}
        };
      }
      static createFromJson(obj) {
        return new RoundRobinLoadBalancingConfig();
      }
    };
    var RoundRobinPicker = class {
      constructor(subchannelList, nextIndex = 0) {
        this.subchannelList = subchannelList;
        this.nextIndex = nextIndex;
      }
      pick(pickArgs) {
        const pickedSubchannel = this.subchannelList[this.nextIndex];
        this.nextIndex = (this.nextIndex + 1) % this.subchannelList.length;
        return {
          pickResultType: picker_1.PickResultType.COMPLETE,
          subchannel: pickedSubchannel,
          status: null,
          extraFilterFactories: [],
          onCallStarted: null
        };
      }
      peekNextSubchannel() {
        return this.subchannelList[this.nextIndex];
      }
    };
    var RoundRobinLoadBalancer = class {
      constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.subchannels = [];
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentReadyPicker = null;
        this.subchannelStateCounts = {
          [connectivity_state_1.ConnectivityState.CONNECTING]: 0,
          [connectivity_state_1.ConnectivityState.IDLE]: 0,
          [connectivity_state_1.ConnectivityState.READY]: 0,
          [connectivity_state_1.ConnectivityState.SHUTDOWN]: 0,
          [connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannelStateListener = (subchannel, previousState, newState) => {
          this.subchannelStateCounts[previousState] -= 1;
          this.subchannelStateCounts[newState] += 1;
          this.calculateAndUpdateState();
          if (newState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE || newState === connectivity_state_1.ConnectivityState.IDLE) {
            this.channelControlHelper.requestReresolution();
            subchannel.startConnecting();
          }
        };
      }
      calculateAndUpdateState() {
        if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.READY] > 0) {
          const readySubchannels = this.subchannels.filter((subchannel) => subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.READY);
          let index = 0;
          if (this.currentReadyPicker !== null) {
            index = readySubchannels.indexOf(this.currentReadyPicker.peekNextSubchannel());
            if (index < 0) {
              index = 0;
            }
          }
          this.updateState(connectivity_state_1.ConnectivityState.READY, new RoundRobinPicker(readySubchannels, index));
        } else if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.CONNECTING] > 0) {
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        } else if (this.subchannelStateCounts[connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE] > 0) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker());
        } else {
          this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        }
      }
      updateState(newState, picker) {
        trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (newState === connectivity_state_1.ConnectivityState.READY) {
          this.currentReadyPicker = picker;
        } else {
          this.currentReadyPicker = null;
        }
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const subchannel of this.subchannels) {
          subchannel.removeConnectivityStateListener(this.subchannelStateListener);
          subchannel.unref();
          this.channelControlHelper.removeChannelzChild(subchannel.getChannelzRef());
        }
        this.subchannelStateCounts = {
          [connectivity_state_1.ConnectivityState.CONNECTING]: 0,
          [connectivity_state_1.ConnectivityState.IDLE]: 0,
          [connectivity_state_1.ConnectivityState.READY]: 0,
          [connectivity_state_1.ConnectivityState.SHUTDOWN]: 0,
          [connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE]: 0
        };
        this.subchannels = [];
      }
      updateAddressList(addressList, lbConfig) {
        this.resetSubchannelList();
        trace("Connect to address list " + addressList.map((address) => subchannel_address_1.subchannelAddressToString(address)));
        this.subchannels = addressList.map((address) => this.channelControlHelper.createSubchannel(address, {}));
        for (const subchannel of this.subchannels) {
          subchannel.ref();
          subchannel.addConnectivityStateListener(this.subchannelStateListener);
          this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
          const subchannelState = subchannel.getConnectivityState();
          this.subchannelStateCounts[subchannelState] += 1;
          if (subchannelState === connectivity_state_1.ConnectivityState.IDLE || subchannelState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            subchannel.startConnecting();
          }
        }
        this.calculateAndUpdateState();
      }
      exitIdle() {
        for (const subchannel of this.subchannels) {
          subchannel.startConnecting();
        }
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
    function setup() {
      load_balancer_1.registerLoadBalancerType(TYPE_NAME, RoundRobinLoadBalancer, RoundRobinLoadBalancingConfig);
    }
    exports2.setup = setup;
  }
});

// node_modules/@grpc/grpc-js/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/@grpc/grpc-js/build/src/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.experimental = exports2.StatusBuilder = exports2.getClientChannel = exports2.ServerCredentials = exports2.Server = exports2.setLogVerbosity = exports2.setLogger = exports2.load = exports2.loadObject = exports2.CallCredentials = exports2.ChannelCredentials = exports2.waitForClientReady = exports2.closeClient = exports2.Channel = exports2.makeGenericClientConstructor = exports2.makeClientConstructor = exports2.loadPackageDefinition = exports2.Client = exports2.propagate = exports2.connectivityState = exports2.status = exports2.logVerbosity = exports2.Metadata = exports2.credentials = void 0;
    var call_credentials_1 = require_call_credentials();
    Object.defineProperty(exports2, "CallCredentials", { enumerable: true, get: function() {
      return call_credentials_1.CallCredentials;
    } });
    var channel_1 = require_channel();
    Object.defineProperty(exports2, "Channel", { enumerable: true, get: function() {
      return channel_1.ChannelImplementation;
    } });
    var connectivity_state_1 = require_connectivity_state();
    Object.defineProperty(exports2, "connectivityState", { enumerable: true, get: function() {
      return connectivity_state_1.ConnectivityState;
    } });
    var channel_credentials_1 = require_channel_credentials();
    Object.defineProperty(exports2, "ChannelCredentials", { enumerable: true, get: function() {
      return channel_credentials_1.ChannelCredentials;
    } });
    var client_1 = require_client();
    Object.defineProperty(exports2, "Client", { enumerable: true, get: function() {
      return client_1.Client;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports2, "logVerbosity", { enumerable: true, get: function() {
      return constants_1.LogVerbosity;
    } });
    Object.defineProperty(exports2, "status", { enumerable: true, get: function() {
      return constants_1.Status;
    } });
    Object.defineProperty(exports2, "propagate", { enumerable: true, get: function() {
      return constants_1.Propagate;
    } });
    var logging = require_logging();
    var make_client_1 = require_make_client();
    Object.defineProperty(exports2, "loadPackageDefinition", { enumerable: true, get: function() {
      return make_client_1.loadPackageDefinition;
    } });
    Object.defineProperty(exports2, "makeClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    Object.defineProperty(exports2, "makeGenericClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    var metadata_1 = require_metadata();
    Object.defineProperty(exports2, "Metadata", { enumerable: true, get: function() {
      return metadata_1.Metadata;
    } });
    var server_1 = require_server();
    Object.defineProperty(exports2, "Server", { enumerable: true, get: function() {
      return server_1.Server;
    } });
    var server_credentials_1 = require_server_credentials();
    Object.defineProperty(exports2, "ServerCredentials", { enumerable: true, get: function() {
      return server_credentials_1.ServerCredentials;
    } });
    var status_builder_1 = require_status_builder();
    Object.defineProperty(exports2, "StatusBuilder", { enumerable: true, get: function() {
      return status_builder_1.StatusBuilder;
    } });
    exports2.credentials = {
      combineChannelCredentials: (channelCredentials, ...callCredentials) => {
        return callCredentials.reduce((acc, other) => acc.compose(other), channelCredentials);
      },
      combineCallCredentials: (first, ...additional) => {
        return additional.reduce((acc, other) => acc.compose(other), first);
      },
      createInsecure: channel_credentials_1.ChannelCredentials.createInsecure,
      createSsl: channel_credentials_1.ChannelCredentials.createSsl,
      createFromMetadataGenerator: call_credentials_1.CallCredentials.createFromMetadataGenerator,
      createFromGoogleCredential: call_credentials_1.CallCredentials.createFromGoogleCredential,
      createEmpty: call_credentials_1.CallCredentials.createEmpty
    };
    exports2.closeClient = (client) => client.close();
    exports2.waitForClientReady = (client, deadline, callback) => client.waitForReady(deadline, callback);
    exports2.loadObject = (value, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.load = (filename, format, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.setLogger = (logger2) => {
      logging.setLogger(logger2);
    };
    exports2.setLogVerbosity = (verbosity) => {
      logging.setLoggerVerbosity(verbosity);
    };
    exports2.getClientChannel = (client) => {
      return client_1.Client.prototype.getChannel.call(client);
    };
    var client_interceptors_1 = require_client_interceptors();
    Object.defineProperty(exports2, "ListenerBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.ListenerBuilder;
    } });
    Object.defineProperty(exports2, "RequesterBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.RequesterBuilder;
    } });
    Object.defineProperty(exports2, "InterceptingCall", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptingCall;
    } });
    Object.defineProperty(exports2, "InterceptorConfigurationError", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptorConfigurationError;
    } });
    var channelz_1 = require_channelz();
    Object.defineProperty(exports2, "getChannelzServiceDefinition", { enumerable: true, get: function() {
      return channelz_1.getChannelzServiceDefinition;
    } });
    Object.defineProperty(exports2, "getChannelzHandlers", { enumerable: true, get: function() {
      return channelz_1.getChannelzHandlers;
    } });
    var admin_1 = require_admin();
    Object.defineProperty(exports2, "addAdminServicesToServer", { enumerable: true, get: function() {
      return admin_1.addAdminServicesToServer;
    } });
    var experimental = require_experimental();
    exports2.experimental = experimental;
    var resolver_dns = require_resolver_dns();
    var resolver_uds = require_resolver_uds();
    var resolver_ip = require_resolver_ip();
    var load_balancer_pick_first = require_load_balancer_pick_first();
    var load_balancer_round_robin = require_load_balancer_round_robin();
    var channelz = require_channelz();
    var clientVersion = require_package().version;
    (() => {
      logging.trace(constants_1.LogVerbosity.DEBUG, "index", "Loading @grpc/grpc-js version " + clientVersion);
      resolver_dns.setup();
      resolver_uds.setup();
      resolver_ip.setup();
      load_balancer_pick_first.setup();
      load_balancer_round_robin.setup();
      channelz.setup();
    })();
  }
});

// node_modules/@firebase/util/dist/node-esm/index.node.esm.js
var CONSTANTS = {
  NODE_CLIENT: false,
  NODE_ADMIN: false,
  SDK_VERSION: "${JSCORE_VERSION}"
};
var Deferred = class {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve2, reject) => {
      this.resolve = resolve2;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
};
var ERROR_NAME = "FirebaseError";
var FirebaseError = class extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
};
var ErrorFactory = class {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
};
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
var PATTERN = /\{\$([^}]+)}/g;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
CONSTANTS.NODE_CLIENT = true;

// node_modules/@firebase/component/dist/esm/index.esm2017.js
var Component = class {
  constructor(name4, instanceFactory, type) {
    this.name = name4;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
};
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var Provider = class {
  constructor(name4, container) {
    this.name = name4;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {
        }
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
var ComponentContainer = class {
  constructor(name4) {
    this.name = name4;
    this.providers = new Map();
  }
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  getProvider(name4) {
    if (this.providers.has(name4)) {
      return this.providers.get(name4);
    }
    const provider = new Provider(name4, this);
    this.providers.set(name4, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
};

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  constructor(name4) {
    this.name = name4;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var PlatformLoggerServiceImpl = class {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
};
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
var name$o = "@firebase/app";
var version$1 = "0.7.9";
var logger = new Logger("@firebase/app");
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "9.5.0";
var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3]: "fire-gcs-compat",
  [name$2]: "fire-fst",
  [name$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name]: "fire-js-all"
};
var _apps = new Map();
var _components = new Map();
function _addComponent(app2, component) {
  try {
    app2.container.addComponent(component);
  } catch (e) {
    logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component);
  }
  return true;
}
function _getProvider(app2, name4) {
  return app2.container.getProvider(name4);
}
var ERRORS = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["bad-app-name"]: "Illegal App name: '{$appName}",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function."
};
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var FirebaseAppImpl = class {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
    }
  }
};
var SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name5 = rawConfig;
    rawConfig = { name: name5 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name4 = config.name;
  if (typeof name4 !== "string" || !name4) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name4)
    });
  }
  const existingApp = _apps.get(name4);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
    }
  }
  const container = new ComponentContainer(name4);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name4, newApp);
  return newApp;
}
function getApp(name4 = DEFAULT_ENTRY_NAME2) {
  const app2 = _apps.get(name4);
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name4 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version4, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version4.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version4}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version4 }), "VERSION"));
}
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1, variant);
  registerVersion(name$o, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");

// node_modules/firebase/app/dist/index.mjs
var name2 = "firebase";
var version2 = "9.5.0";
registerVersion(name2, version2, "app");

// node_modules/@firebase/firestore/dist/index.node.mjs
var import_util4 = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_module = __toModule(require("module"));
var import_grpc_js = __toModule(require_src3());
var import_path = __toModule(require("path"));
var import_url = __toModule(require("url"));
var import_proto_loader = __toModule(require_src2());
var import_meta = {};
var name3 = "@firebase/firestore";
var version$12 = "3.3.1";
var User = class {
  constructor(uid) {
    this.uid = uid;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    if (this.isAuthenticated()) {
      return "uid:" + this.uid;
    } else {
      return "anonymous-user";
    }
  }
  isEqual(otherUser) {
    return otherUser.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null);
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid");
User.FIRST_PARTY = new User("first-party-uid");
User.MOCK_USER = new User("mock-user");
var version3 = "9.5.0";
var SDK_VERSION2 = version3;
function setSDKVersion(version4) {
  SDK_VERSION2 = version4;
}
function formatJSON(value) {
  return (0, import_util4.inspect)(value, { depth: 100 });
}
var logClient = new Logger("@firebase/firestore");
function logDebug(msg, ...obj) {
  if (logClient.logLevel <= LogLevel.DEBUG) {
    const args = obj.map(argToString);
    logClient.debug(`Firestore (${SDK_VERSION2}): ${msg}`, ...args);
  }
}
function logError(msg, ...obj) {
  if (logClient.logLevel <= LogLevel.ERROR) {
    const args = obj.map(argToString);
    logClient.error(`Firestore (${SDK_VERSION2}): ${msg}`, ...args);
  }
}
function argToString(obj) {
  if (typeof obj === "string") {
    return obj;
  } else {
    try {
      return formatJSON(obj);
    } catch (e) {
      return obj;
    }
  }
}
function fail(failure = "Unexpected state") {
  const message = `FIRESTORE (${SDK_VERSION2}) INTERNAL ASSERTION FAILED: ` + failure;
  logError(message);
  throw new Error(message);
}
function hardAssert(assertion, message) {
  if (!assertion) {
    fail();
  }
}
var Code = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
};
var FirestoreError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
    this.name = "FirebaseError";
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var Deferred2 = class {
  constructor() {
    this.promise = new Promise((resolve2, reject) => {
      this.resolve = resolve2;
      this.reject = reject;
    });
  }
};
var OAuthToken = class {
  constructor(value, user) {
    this.user = user;
    this.type = "OAuth";
    this.authHeaders = {};
    this.authHeaders["Authorization"] = `Bearer ${value}`;
  }
};
var EmptyCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(asyncQueue, changeListener) {
    asyncQueue.enqueueRetryable(() => changeListener(User.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var FirebaseCredentialsProvider = class {
  constructor(authProvider) {
    this.authProvider = authProvider;
    this.currentUser = User.UNAUTHENTICATED;
    this.tokenCounter = 0;
    this.forceRefresh = false;
    this.auth = null;
  }
  start(asyncQueue, changeListener) {
    let lastTokenId = this.tokenCounter;
    const guardedChangeListener = (user) => {
      if (this.tokenCounter !== lastTokenId) {
        lastTokenId = this.tokenCounter;
        return changeListener(user);
      } else {
        return Promise.resolve();
      }
    };
    let nextToken = new Deferred2();
    this.tokenListener = () => {
      this.tokenCounter++;
      this.currentUser = this.getUser();
      nextToken.resolve();
      nextToken = new Deferred2();
      asyncQueue.enqueueRetryable(() => guardedChangeListener(this.currentUser));
    };
    const awaitNextToken = () => {
      const currentTokenAttempt = nextToken;
      asyncQueue.enqueueRetryable(async () => {
        await currentTokenAttempt.promise;
        await guardedChangeListener(this.currentUser);
      });
    };
    const registerAuth = (auth) => {
      logDebug("FirebaseCredentialsProvider", "Auth detected");
      this.auth = auth;
      this.auth.addAuthTokenListener(this.tokenListener);
      awaitNextToken();
    };
    this.authProvider.onInit((auth) => registerAuth(auth));
    setTimeout(() => {
      if (!this.auth) {
        const auth = this.authProvider.getImmediate({ optional: true });
        if (auth) {
          registerAuth(auth);
        } else {
          logDebug("FirebaseCredentialsProvider", "Auth not yet detected");
          nextToken.resolve();
          nextToken = new Deferred2();
        }
      }
    }, 0);
    awaitNextToken();
  }
  getToken() {
    const initialTokenCounter = this.tokenCounter;
    const forceRefresh = this.forceRefresh;
    this.forceRefresh = false;
    if (!this.auth) {
      return Promise.resolve(null);
    }
    return this.auth.getToken(forceRefresh).then((tokenData) => {
      if (this.tokenCounter !== initialTokenCounter) {
        logDebug("FirebaseCredentialsProvider", "getToken aborted due to token change.");
        return this.getToken();
      } else {
        if (tokenData) {
          hardAssert(typeof tokenData.accessToken === "string");
          return new OAuthToken(tokenData.accessToken, this.currentUser);
        } else {
          return null;
        }
      }
    });
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    if (this.auth) {
      this.auth.removeAuthTokenListener(this.tokenListener);
    }
  }
  getUser() {
    const currentUid = this.auth && this.auth.getUid();
    hardAssert(currentUid === null || typeof currentUid === "string");
    return new User(currentUid);
  }
};
var FirstPartyToken = class {
  constructor(gapi, sessionIndex, iamToken) {
    this.gapi = gapi;
    this.sessionIndex = sessionIndex;
    this.iamToken = iamToken;
    this.type = "FirstParty";
    this.user = User.FIRST_PARTY;
  }
  get authHeaders() {
    const headers = {
      "X-Goog-AuthUser": this.sessionIndex
    };
    const authHeader = this.gapi["auth"]["getAuthHeaderValueForFirstParty"]([]);
    if (authHeader) {
      headers["Authorization"] = authHeader;
    }
    if (this.iamToken) {
      headers["X-Goog-Iam-Authorization-Token"] = this.iamToken;
    }
    return headers;
  }
};
var FirstPartyCredentialsProvider = class {
  constructor(gapi, sessionIndex, iamToken) {
    this.gapi = gapi;
    this.sessionIndex = sessionIndex;
    this.iamToken = iamToken;
  }
  getToken() {
    return Promise.resolve(new FirstPartyToken(this.gapi, this.sessionIndex, this.iamToken));
  }
  start(asyncQueue, changeListener) {
    asyncQueue.enqueueRetryable(() => changeListener(User.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
function makeCredentialsProvider(credentials2) {
  if (!credentials2) {
    return new EmptyCredentialsProvider();
  }
  switch (credentials2["type"]) {
    case "gapi":
      const client = credentials2["client"];
      hardAssert(!!(typeof client === "object" && client !== null && client["auth"] && client["auth"]["getAuthHeaderValueForFirstParty"]));
      return new FirstPartyCredentialsProvider(client, credentials2["sessionIndex"] || "0", credentials2["iamToken"] || null);
    case "provider":
      return credentials2["client"];
    default:
      throw new FirestoreError(Code.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
  }
}
var ListenSequence = class {
  constructor(previousValue, sequenceNumberSyncer) {
    this.previousValue = previousValue;
    if (sequenceNumberSyncer) {
      sequenceNumberSyncer.sequenceNumberHandler = (sequenceNumber) => this.setPreviousValue(sequenceNumber);
      this.writeNewSequenceNumber = (sequenceNumber) => sequenceNumberSyncer.writeSequenceNumber(sequenceNumber);
    }
  }
  setPreviousValue(externalPreviousValue) {
    this.previousValue = Math.max(externalPreviousValue, this.previousValue);
    return this.previousValue;
  }
  next() {
    const nextValue = ++this.previousValue;
    if (this.writeNewSequenceNumber) {
      this.writeNewSequenceNumber(nextValue);
    }
    return nextValue;
  }
};
ListenSequence.INVALID = -1;
var BasePath = class {
  constructor(segments, offset, length) {
    if (offset === void 0) {
      offset = 0;
    } else if (offset > segments.length) {
      fail();
    }
    if (length === void 0) {
      length = segments.length - offset;
    } else if (length > segments.length - offset) {
      fail();
    }
    this.segments = segments;
    this.offset = offset;
    this.len = length;
  }
  get length() {
    return this.len;
  }
  isEqual(other) {
    return BasePath.comparator(this, other) === 0;
  }
  child(nameOrPath) {
    const segments = this.segments.slice(this.offset, this.limit());
    if (nameOrPath instanceof BasePath) {
      nameOrPath.forEach((segment) => {
        segments.push(segment);
      });
    } else {
      segments.push(nameOrPath);
    }
    return this.construct(segments);
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(size) {
    size = size === void 0 ? 1 : size;
    return this.construct(this.segments, this.offset + size, this.length - size);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(index) {
    return this.segments[this.offset + index];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(other) {
    if (other.length < this.length) {
      return false;
    }
    for (let i = 0; i < this.length; i++) {
      if (this.get(i) !== other.get(i)) {
        return false;
      }
    }
    return true;
  }
  isImmediateParentOf(potentialChild) {
    if (this.length + 1 !== potentialChild.length) {
      return false;
    }
    for (let i = 0; i < this.length; i++) {
      if (this.get(i) !== potentialChild.get(i)) {
        return false;
      }
    }
    return true;
  }
  forEach(fn) {
    for (let i = this.offset, end = this.limit(); i < end; i++) {
      fn(this.segments[i]);
    }
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(p1, p2) {
    const len = Math.min(p1.length, p2.length);
    for (let i = 0; i < len; i++) {
      const left = p1.get(i);
      const right = p2.get(i);
      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }
    }
    if (p1.length < p2.length) {
      return -1;
    }
    if (p1.length > p2.length) {
      return 1;
    }
    return 0;
  }
};
var ResourcePath = class extends BasePath {
  construct(segments, offset, length) {
    return new ResourcePath(segments, offset, length);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...pathComponents) {
    const segments = [];
    for (const path of pathComponents) {
      if (path.indexOf("//") >= 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, `Invalid segment (${path}). Paths must not contain // in them.`);
      }
      segments.push(...path.split("/").filter((segment) => segment.length > 0));
    }
    return new ResourcePath(segments);
  }
  static emptyPath() {
    return new ResourcePath([]);
  }
};
var escapeChar = "";
var encodedSeparatorChar = "";
var encodedNul = "";
var encodedEscape = "";
function encodeResourcePath(path) {
  let result = "";
  for (let i = 0; i < path.length; i++) {
    if (result.length > 0) {
      result = encodeSeparator(result);
    }
    result = encodeSegment(path.get(i), result);
  }
  return encodeSeparator(result);
}
function encodeSegment(segment, resultBuf) {
  let result = resultBuf;
  const length = segment.length;
  for (let i = 0; i < length; i++) {
    const c = segment.charAt(i);
    switch (c) {
      case "\0":
        result += escapeChar + encodedNul;
        break;
      case escapeChar:
        result += escapeChar + encodedEscape;
        break;
      default:
        result += c;
    }
  }
  return result;
}
function encodeSeparator(result) {
  return result + escapeChar + encodedSeparatorChar;
}
var DbPrimaryClient = class {
  constructor(ownerId, allowTabSynchronization, leaseTimestampMs) {
    this.ownerId = ownerId;
    this.allowTabSynchronization = allowTabSynchronization;
    this.leaseTimestampMs = leaseTimestampMs;
  }
};
DbPrimaryClient.store = "owner";
DbPrimaryClient.key = "owner";
var DbMutationQueue = class {
  constructor(userId, lastAcknowledgedBatchId, lastStreamToken) {
    this.userId = userId;
    this.lastAcknowledgedBatchId = lastAcknowledgedBatchId;
    this.lastStreamToken = lastStreamToken;
  }
};
DbMutationQueue.store = "mutationQueues";
DbMutationQueue.keyPath = "userId";
var DbMutationBatch = class {
  constructor(userId, batchId, localWriteTimeMs, baseMutations, mutations) {
    this.userId = userId;
    this.batchId = batchId;
    this.localWriteTimeMs = localWriteTimeMs;
    this.baseMutations = baseMutations;
    this.mutations = mutations;
  }
};
DbMutationBatch.store = "mutations";
DbMutationBatch.keyPath = "batchId";
DbMutationBatch.userMutationsIndex = "userMutationsIndex";
DbMutationBatch.userMutationsKeyPath = ["userId", "batchId"];
var DbDocumentMutation = class {
  constructor() {
  }
  static prefixForUser(userId) {
    return [userId];
  }
  static prefixForPath(userId, path) {
    return [userId, encodeResourcePath(path)];
  }
  static key(userId, path, batchId) {
    return [userId, encodeResourcePath(path), batchId];
  }
};
DbDocumentMutation.store = "documentMutations";
DbDocumentMutation.PLACEHOLDER = new DbDocumentMutation();
var DbRemoteDocument = class {
  constructor(unknownDocument, noDocument, document, hasCommittedMutations, readTime, parentPath) {
    this.unknownDocument = unknownDocument;
    this.noDocument = noDocument;
    this.document = document;
    this.hasCommittedMutations = hasCommittedMutations;
    this.readTime = readTime;
    this.parentPath = parentPath;
  }
};
DbRemoteDocument.store = "remoteDocuments";
DbRemoteDocument.readTimeIndex = "readTimeIndex";
DbRemoteDocument.readTimeIndexPath = "readTime";
DbRemoteDocument.collectionReadTimeIndex = "collectionReadTimeIndex";
DbRemoteDocument.collectionReadTimeIndexPath = ["parentPath", "readTime"];
var DbRemoteDocumentGlobal = class {
  constructor(byteSize) {
    this.byteSize = byteSize;
  }
};
DbRemoteDocumentGlobal.store = "remoteDocumentGlobal";
DbRemoteDocumentGlobal.key = "remoteDocumentGlobalKey";
var DbTarget = class {
  constructor(targetId, canonicalId, readTime, resumeToken, lastListenSequenceNumber, lastLimboFreeSnapshotVersion, query) {
    this.targetId = targetId;
    this.canonicalId = canonicalId;
    this.readTime = readTime;
    this.resumeToken = resumeToken;
    this.lastListenSequenceNumber = lastListenSequenceNumber;
    this.lastLimboFreeSnapshotVersion = lastLimboFreeSnapshotVersion;
    this.query = query;
  }
};
DbTarget.store = "targets";
DbTarget.keyPath = "targetId";
DbTarget.queryTargetsIndexName = "queryTargetsIndex";
DbTarget.queryTargetsKeyPath = ["canonicalId", "targetId"];
var DbTargetDocument = class {
  constructor(targetId, path, sequenceNumber) {
    this.targetId = targetId;
    this.path = path;
    this.sequenceNumber = sequenceNumber;
  }
};
DbTargetDocument.store = "targetDocuments";
DbTargetDocument.keyPath = ["targetId", "path"];
DbTargetDocument.documentTargetsIndex = "documentTargetsIndex";
DbTargetDocument.documentTargetsKeyPath = ["path", "targetId"];
var DbTargetGlobal = class {
  constructor(highestTargetId, highestListenSequenceNumber, lastRemoteSnapshotVersion, targetCount) {
    this.highestTargetId = highestTargetId;
    this.highestListenSequenceNumber = highestListenSequenceNumber;
    this.lastRemoteSnapshotVersion = lastRemoteSnapshotVersion;
    this.targetCount = targetCount;
  }
};
DbTargetGlobal.key = "targetGlobalKey";
DbTargetGlobal.store = "targetGlobal";
var DbCollectionParent = class {
  constructor(collectionId, parent) {
    this.collectionId = collectionId;
    this.parent = parent;
  }
};
DbCollectionParent.store = "collectionParents";
DbCollectionParent.keyPath = ["collectionId", "parent"];
var DbClientMetadata = class {
  constructor(clientId, updateTimeMs, networkEnabled, inForeground) {
    this.clientId = clientId;
    this.updateTimeMs = updateTimeMs;
    this.networkEnabled = networkEnabled;
    this.inForeground = inForeground;
  }
};
DbClientMetadata.store = "clientMetadata";
DbClientMetadata.keyPath = "clientId";
var DbBundle = class {
  constructor(bundleId, createTime, version4) {
    this.bundleId = bundleId;
    this.createTime = createTime;
    this.version = version4;
  }
};
DbBundle.store = "bundles";
DbBundle.keyPath = "bundleId";
var DbNamedQuery = class {
  constructor(name4, readTime, bundledQuery) {
    this.name = name4;
    this.readTime = readTime;
    this.bundledQuery = bundledQuery;
  }
};
DbNamedQuery.store = "namedQueries";
DbNamedQuery.keyPath = "name";
var V1_STORES = [
  DbMutationQueue.store,
  DbMutationBatch.store,
  DbDocumentMutation.store,
  DbRemoteDocument.store,
  DbTarget.store,
  DbPrimaryClient.store,
  DbTargetGlobal.store,
  DbTargetDocument.store
];
var V3_STORES = V1_STORES;
var V4_STORES = [...V3_STORES, DbClientMetadata.store];
var V6_STORES = [...V4_STORES, DbRemoteDocumentGlobal.store];
var V8_STORES = [...V6_STORES, DbCollectionParent.store];
var V11_STORES = [...V8_STORES, DbBundle.store, DbNamedQuery.store];
function isIndexedDbTransactionError(e) {
  return e.name === "IndexedDbTransactionError";
}
function randomBytes(nBytes) {
  return (0, import_crypto.randomBytes)(nBytes);
}
var AutoId = class {
  static newId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const maxMultiple = Math.floor(256 / chars.length) * chars.length;
    let autoId = "";
    const targetLength = 20;
    while (autoId.length < targetLength) {
      const bytes = randomBytes(40);
      for (let i = 0; i < bytes.length; ++i) {
        if (autoId.length < targetLength && bytes[i] < maxMultiple) {
          autoId += chars.charAt(bytes[i] % chars.length);
        }
      }
    }
    return autoId;
  }
};
function primitiveComparator(left, right) {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  return 0;
}
function decodeBase64(encoded) {
  if (/[^-A-Za-z0-9+/=]/.test(encoded)) {
    throw new FirestoreError(Code.INVALID_ARGUMENT, "Not a valid Base64 string: " + encoded);
  }
  return new Buffer(encoded, "base64").toString("binary");
}
function encodeBase64(raw) {
  return new Buffer(raw, "binary").toString("base64");
}
var ByteString = class {
  constructor(binaryString) {
    this.binaryString = binaryString;
  }
  static fromBase64String(base64) {
    const binaryString = decodeBase64(base64);
    return new ByteString(binaryString);
  }
  static fromUint8Array(array) {
    const binaryString = binaryStringFromUint8Array(array);
    return new ByteString(binaryString);
  }
  toBase64() {
    return encodeBase64(this.binaryString);
  }
  toUint8Array() {
    return uint8ArrayFromBinaryString(this.binaryString);
  }
  approximateByteSize() {
    return this.binaryString.length * 2;
  }
  compareTo(other) {
    return primitiveComparator(this.binaryString, other.binaryString);
  }
  isEqual(other) {
    return this.binaryString === other.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
function binaryStringFromUint8Array(array) {
  let binaryString = "";
  for (let i = 0; i < array.length; ++i) {
    binaryString += String.fromCharCode(array[i]);
  }
  return binaryString;
}
function uint8ArrayFromBinaryString(binaryString) {
  const buffer = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    buffer[i] = binaryString.charCodeAt(i);
  }
  return buffer;
}
var ISO_TIMESTAMP_REG_EXP = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
var DocumentKey = class {
  constructor(path) {
    this.path = path;
  }
  static fromPath(path) {
    return new DocumentKey(ResourcePath.fromString(path));
  }
  static fromName(name4) {
    return new DocumentKey(ResourcePath.fromString(name4).popFirst(5));
  }
  hasCollectionId(collectionId) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === collectionId;
  }
  isEqual(other) {
    return other !== null && ResourcePath.comparator(this.path, other.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(k1, k2) {
    return ResourcePath.comparator(k1.path, k2.path);
  }
  static isDocumentKey(path) {
    return path.length % 2 === 0;
  }
  static fromSegments(segments) {
    return new DocumentKey(new ResourcePath(segments.slice()));
  }
};
var SortedMap = class {
  constructor(comparator, root) {
    this.comparator = comparator;
    this.root = root ? root : LLRBNode.EMPTY;
  }
  insert(key, value) {
    return new SortedMap(this.comparator, this.root.insert(key, value, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  remove(key) {
    return new SortedMap(this.comparator, this.root.remove(key, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  get(key) {
    let node = this.root;
    while (!node.isEmpty()) {
      const cmp = this.comparator(key, node.key);
      if (cmp === 0) {
        return node.value;
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        node = node.right;
      }
    }
    return null;
  }
  indexOf(key) {
    let prunedNodes = 0;
    let node = this.root;
    while (!node.isEmpty()) {
      const cmp = this.comparator(key, node.key);
      if (cmp === 0) {
        return prunedNodes + node.left.size;
      } else if (cmp < 0) {
        node = node.left;
      } else {
        prunedNodes += node.left.size + 1;
        node = node.right;
      }
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(action) {
    return this.root.inorderTraversal(action);
  }
  forEach(fn) {
    this.inorderTraversal((k, v) => {
      fn(k, v);
      return false;
    });
  }
  toString() {
    const descriptions = [];
    this.inorderTraversal((k, v) => {
      descriptions.push(`${k}:${v}`);
      return false;
    });
    return `{${descriptions.join(", ")}}`;
  }
  reverseTraversal(action) {
    return this.root.reverseTraversal(action);
  }
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(key) {
    return new SortedMapIterator(this.root, key, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(key) {
    return new SortedMapIterator(this.root, key, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(node, startKey, comparator, isReverse) {
    this.isReverse = isReverse;
    this.nodeStack = [];
    let cmp = 1;
    while (!node.isEmpty()) {
      cmp = startKey ? comparator(node.key, startKey) : 1;
      if (isReverse) {
        cmp *= -1;
      }
      if (cmp < 0) {
        if (this.isReverse) {
          node = node.left;
        } else {
          node = node.right;
        }
      } else if (cmp === 0) {
        this.nodeStack.push(node);
        break;
      } else {
        this.nodeStack.push(node);
        if (this.isReverse) {
          node = node.right;
        } else {
          node = node.left;
        }
      }
    }
  }
  getNext() {
    let node = this.nodeStack.pop();
    const result = { key: node.key, value: node.value };
    if (this.isReverse) {
      node = node.left;
      while (!node.isEmpty()) {
        this.nodeStack.push(node);
        node = node.right;
      }
    } else {
      node = node.right;
      while (!node.isEmpty()) {
        this.nodeStack.push(node);
        node = node.left;
      }
    }
    return result;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) {
      return null;
    }
    const node = this.nodeStack[this.nodeStack.length - 1];
    return { key: node.key, value: node.value };
  }
};
var LLRBNode = class {
  constructor(key, value, color, left, right) {
    this.key = key;
    this.value = value;
    this.color = color != null ? color : LLRBNode.RED;
    this.left = left != null ? left : LLRBNode.EMPTY;
    this.right = right != null ? right : LLRBNode.EMPTY;
    this.size = this.left.size + 1 + this.right.size;
  }
  copy(key, value, color, left, right) {
    return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(action) {
    return this.left.inorderTraversal(action) || action(this.key, this.value) || this.right.inorderTraversal(action);
  }
  reverseTraversal(action) {
    return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
  }
  min() {
    if (this.left.isEmpty()) {
      return this;
    } else {
      return this.left.min();
    }
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    if (this.right.isEmpty()) {
      return this.key;
    } else {
      return this.right.maxKey();
    }
  }
  insert(key, value, comparator) {
    let n = this;
    const cmp = comparator(key, n.key);
    if (cmp < 0) {
      n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
    } else if (cmp === 0) {
      n = n.copy(null, value, null, null, null);
    } else {
      n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
    }
    return n.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) {
      return LLRBNode.EMPTY;
    }
    let n = this;
    if (!n.left.isRed() && !n.left.left.isRed()) {
      n = n.moveRedLeft();
    }
    n = n.copy(null, null, null, n.left.removeMin(), null);
    return n.fixUp();
  }
  remove(key, comparator) {
    let smallest;
    let n = this;
    if (comparator(key, n.key) < 0) {
      if (!n.left.isEmpty() && !n.left.isRed() && !n.left.left.isRed()) {
        n = n.moveRedLeft();
      }
      n = n.copy(null, null, null, n.left.remove(key, comparator), null);
    } else {
      if (n.left.isRed()) {
        n = n.rotateRight();
      }
      if (!n.right.isEmpty() && !n.right.isRed() && !n.right.left.isRed()) {
        n = n.moveRedRight();
      }
      if (comparator(key, n.key) === 0) {
        if (n.right.isEmpty()) {
          return LLRBNode.EMPTY;
        } else {
          smallest = n.right.min();
          n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin());
        }
      }
      n = n.copy(null, null, null, null, n.right.remove(key, comparator));
    }
    return n.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let n = this;
    if (n.right.isRed() && !n.left.isRed()) {
      n = n.rotateLeft();
    }
    if (n.left.isRed() && n.left.left.isRed()) {
      n = n.rotateRight();
    }
    if (n.left.isRed() && n.right.isRed()) {
      n = n.colorFlip();
    }
    return n;
  }
  moveRedLeft() {
    let n = this.colorFlip();
    if (n.right.left.isRed()) {
      n = n.copy(null, null, null, null, n.right.rotateRight());
      n = n.rotateLeft();
      n = n.colorFlip();
    }
    return n;
  }
  moveRedRight() {
    let n = this.colorFlip();
    if (n.left.left.isRed()) {
      n = n.rotateRight();
      n = n.colorFlip();
    }
    return n;
  }
  rotateLeft() {
    const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, nl, null);
  }
  rotateRight() {
    const nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, nr);
  }
  colorFlip() {
    const left = this.left.copy(null, null, !this.left.color, null, null);
    const right = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, left, right);
  }
  checkMaxDepth() {
    const blackDepth = this.check();
    if (Math.pow(2, blackDepth) <= this.size + 1) {
      return true;
    } else {
      return false;
    }
  }
  check() {
    if (this.isRed() && this.left.isRed()) {
      throw fail();
    }
    if (this.right.isRed()) {
      throw fail();
    }
    const blackDepth = this.left.check();
    if (blackDepth !== this.right.check()) {
      throw fail();
    } else {
      return blackDepth + (this.isRed() ? 0 : 1);
    }
  }
};
LLRBNode.EMPTY = null;
LLRBNode.RED = true;
LLRBNode.BLACK = false;
var LLRBEmptyNode = class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail();
  }
  get value() {
    throw fail();
  }
  get color() {
    throw fail();
  }
  get left() {
    throw fail();
  }
  get right() {
    throw fail();
  }
  copy(key, value, color, left, right) {
    return this;
  }
  insert(key, value, comparator) {
    return new LLRBNode(key, value);
  }
  remove(key, comparator) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(action) {
    return false;
  }
  reverseTraversal(action) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
};
LLRBNode.EMPTY = new LLRBEmptyNode();
var SortedSet = class {
  constructor(comparator) {
    this.comparator = comparator;
    this.data = new SortedMap(this.comparator);
  }
  has(elem) {
    return this.data.get(elem) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(elem) {
    return this.data.indexOf(elem);
  }
  forEach(cb) {
    this.data.inorderTraversal((k, v) => {
      cb(k);
      return false;
    });
  }
  forEachInRange(range, cb) {
    const iter = this.data.getIteratorFrom(range[0]);
    while (iter.hasNext()) {
      const elem = iter.getNext();
      if (this.comparator(elem.key, range[1]) >= 0) {
        return;
      }
      cb(elem.key);
    }
  }
  forEachWhile(cb, start) {
    let iter;
    if (start !== void 0) {
      iter = this.data.getIteratorFrom(start);
    } else {
      iter = this.data.getIterator();
    }
    while (iter.hasNext()) {
      const elem = iter.getNext();
      const result = cb(elem.key);
      if (!result) {
        return;
      }
    }
  }
  firstAfterOrEqual(elem) {
    const iter = this.data.getIteratorFrom(elem);
    return iter.hasNext() ? iter.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(key) {
    return new SortedSetIterator(this.data.getIteratorFrom(key));
  }
  add(elem) {
    return this.copy(this.data.remove(elem).insert(elem, true));
  }
  delete(elem) {
    if (!this.has(elem)) {
      return this;
    }
    return this.copy(this.data.remove(elem));
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(other) {
    let result = this;
    if (result.size < other.size) {
      result = other;
      other = this;
    }
    other.forEach((elem) => {
      result = result.add(elem);
    });
    return result;
  }
  isEqual(other) {
    if (!(other instanceof SortedSet)) {
      return false;
    }
    if (this.size !== other.size) {
      return false;
    }
    const thisIt = this.data.getIterator();
    const otherIt = other.data.getIterator();
    while (thisIt.hasNext()) {
      const thisElem = thisIt.getNext().key;
      const otherElem = otherIt.getNext().key;
      if (this.comparator(thisElem, otherElem) !== 0) {
        return false;
      }
    }
    return true;
  }
  toArray() {
    const res = [];
    this.forEach((targetId) => {
      res.push(targetId);
    });
    return res;
  }
  toString() {
    const result = [];
    this.forEach((elem) => result.push(elem));
    return "SortedSet(" + result.toString() + ")";
  }
  copy(data) {
    const result = new SortedSet(this.comparator);
    result.data = data;
    return result;
  }
};
var SortedSetIterator = class {
  constructor(iter) {
    this.iter = iter;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
var EMPTY_MUTABLE_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
var EMPTY_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator);
var EMPTY_DOCUMENT_VERSION_MAP = new SortedMap(DocumentKey.comparator);
var EMPTY_DOCUMENT_KEY_SET = new SortedSet(DocumentKey.comparator);
var EMPTY_TARGET_ID_SET = new SortedSet(primitiveComparator);
var RpcCode;
(function(RpcCode2) {
  RpcCode2[RpcCode2["OK"] = 0] = "OK";
  RpcCode2[RpcCode2["CANCELLED"] = 1] = "CANCELLED";
  RpcCode2[RpcCode2["UNKNOWN"] = 2] = "UNKNOWN";
  RpcCode2[RpcCode2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
  RpcCode2[RpcCode2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
  RpcCode2[RpcCode2["NOT_FOUND"] = 5] = "NOT_FOUND";
  RpcCode2[RpcCode2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
  RpcCode2[RpcCode2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
  RpcCode2[RpcCode2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
  RpcCode2[RpcCode2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
  RpcCode2[RpcCode2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
  RpcCode2[RpcCode2["ABORTED"] = 10] = "ABORTED";
  RpcCode2[RpcCode2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
  RpcCode2[RpcCode2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
  RpcCode2[RpcCode2["INTERNAL"] = 13] = "INTERNAL";
  RpcCode2[RpcCode2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
  RpcCode2[RpcCode2["DATA_LOSS"] = 15] = "DATA_LOSS";
})(RpcCode || (RpcCode = {}));
var DIRECTIONS = (() => {
  const dirs = {};
  dirs["asc"] = "ASCENDING";
  dirs["desc"] = "DESCENDING";
  return dirs;
})();
var OPERATORS = (() => {
  const ops = {};
  ops["<"] = "LESS_THAN";
  ops["<="] = "LESS_THAN_OR_EQUAL";
  ops[">"] = "GREATER_THAN";
  ops[">="] = "GREATER_THAN_OR_EQUAL";
  ops["=="] = "EQUAL";
  ops["!="] = "NOT_EQUAL";
  ops["array-contains"] = "ARRAY_CONTAINS";
  ops["in"] = "IN";
  ops["not-in"] = "NOT_IN";
  ops["array-contains-any"] = "ARRAY_CONTAINS_ANY";
  return ops;
})();
var LRU_COLLECTION_DISABLED = -1;
var LRU_DEFAULT_CACHE_SIZE_BYTES = 40 * 1024 * 1024;
var LruParams = class {
  constructor(cacheSizeCollectionThreshold, percentileToCollect, maximumSequenceNumbersToCollect) {
    this.cacheSizeCollectionThreshold = cacheSizeCollectionThreshold;
    this.percentileToCollect = percentileToCollect;
    this.maximumSequenceNumbersToCollect = maximumSequenceNumbersToCollect;
  }
  static withCacheSize(cacheSize) {
    return new LruParams(cacheSize, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10;
LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3;
LruParams.DEFAULT = new LruParams(LRU_DEFAULT_CACHE_SIZE_BYTES, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
LruParams.DISABLED = new LruParams(LRU_COLLECTION_DISABLED, 0, 0);
var LRU_MINIMUM_CACHE_SIZE_BYTES = 1 * 1024 * 1024;
var INITIAL_GC_DELAY_MS = 1 * 60 * 1e3;
var REGULAR_GC_DELAY_MS = 5 * 60 * 1e3;
var MAX_CLIENT_AGE_MS = 30 * 60 * 1e3;
var RESUME_TOKEN_MAX_AGE_MICROS = 5 * 60 * 1e6;
var require2 = import_module.default.createRequire(import_meta.url);
var { version: grpcVersion } = require2("@grpc/grpc-js/package.json");
var X_GOOG_API_CLIENT_VALUE = `gl-node/${process.versions.node} fire/${SDK_VERSION2} grpc/${grpcVersion}`;
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname2 = (0, import_path.dirname)(__filename);
var LOG_TAG$8 = "ExponentialBackoff";
var DEFAULT_BACKOFF_INITIAL_DELAY_MS = 1e3;
var DEFAULT_BACKOFF_FACTOR = 1.5;
var DEFAULT_BACKOFF_MAX_DELAY_MS = 60 * 1e3;
var ExponentialBackoff = class {
  constructor(queue, timerId, initialDelayMs = DEFAULT_BACKOFF_INITIAL_DELAY_MS, backoffFactor = DEFAULT_BACKOFF_FACTOR, maxDelayMs = DEFAULT_BACKOFF_MAX_DELAY_MS) {
    this.queue = queue;
    this.timerId = timerId;
    this.initialDelayMs = initialDelayMs;
    this.backoffFactor = backoffFactor;
    this.maxDelayMs = maxDelayMs;
    this.currentBaseMs = 0;
    this.timerPromise = null;
    this.lastAttemptTime = Date.now();
    this.reset();
  }
  reset() {
    this.currentBaseMs = 0;
  }
  resetToMax() {
    this.currentBaseMs = this.maxDelayMs;
  }
  backoffAndRun(op) {
    this.cancel();
    const desiredDelayWithJitterMs = Math.floor(this.currentBaseMs + this.jitterDelayMs());
    const delaySoFarMs = Math.max(0, Date.now() - this.lastAttemptTime);
    const remainingDelayMs = Math.max(0, desiredDelayWithJitterMs - delaySoFarMs);
    if (remainingDelayMs > 0) {
      logDebug(LOG_TAG$8, `Backing off for ${remainingDelayMs} ms (base delay: ${this.currentBaseMs} ms, delay with jitter: ${desiredDelayWithJitterMs} ms, last attempt: ${delaySoFarMs} ms ago)`);
    }
    this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, remainingDelayMs, () => {
      this.lastAttemptTime = Date.now();
      return op();
    });
    this.currentBaseMs *= this.backoffFactor;
    if (this.currentBaseMs < this.initialDelayMs) {
      this.currentBaseMs = this.initialDelayMs;
    }
    if (this.currentBaseMs > this.maxDelayMs) {
      this.currentBaseMs = this.maxDelayMs;
    }
  }
  skipBackoff() {
    if (this.timerPromise !== null) {
      this.timerPromise.skipDelay();
      this.timerPromise = null;
    }
  }
  cancel() {
    if (this.timerPromise !== null) {
      this.timerPromise.cancel();
      this.timerPromise = null;
    }
  }
  jitterDelayMs() {
    return (Math.random() - 0.5) * this.currentBaseMs;
  }
};
var IDLE_TIMEOUT_MS = 60 * 1e3;
var HEALTHY_TIMEOUT_MS = 10 * 1e3;
var ONLINE_STATE_TIMEOUT_MS = 10 * 1e3;
var LOG_TAG$4 = "AsyncQueue";
var DelayedOperation = class {
  constructor(asyncQueue, timerId, targetTimeMs, op, removalCallback) {
    this.asyncQueue = asyncQueue;
    this.timerId = timerId;
    this.targetTimeMs = targetTimeMs;
    this.op = op;
    this.removalCallback = removalCallback;
    this.deferred = new Deferred2();
    this.then = this.deferred.promise.then.bind(this.deferred.promise);
    this.deferred.promise.catch((err) => {
    });
  }
  static createAndSchedule(asyncQueue, timerId, delayMs, op, removalCallback) {
    const targetTime = Date.now() + delayMs;
    const delayedOp = new DelayedOperation(asyncQueue, timerId, targetTime, op, removalCallback);
    delayedOp.start(delayMs);
    return delayedOp;
  }
  start(delayMs) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), delayMs);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(reason) {
    if (this.timerHandle !== null) {
      this.clearTimeout();
      this.deferred.reject(new FirestoreError(Code.CANCELLED, "Operation cancelled" + (reason ? ": " + reason : "")));
    }
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => {
      if (this.timerHandle !== null) {
        this.clearTimeout();
        return this.op().then((result) => {
          return this.deferred.resolve(result);
        });
      } else {
        return Promise.resolve();
      }
    });
  }
  clearTimeout() {
    if (this.timerHandle !== null) {
      this.removalCallback(this);
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  }
};
function wrapInUserErrorIfRecoverable(e, msg) {
  logError(LOG_TAG$4, `${msg}: ${e}`);
  if (isIndexedDbTransactionError(e)) {
    return new FirestoreError(Code.UNAVAILABLE, `${msg}: ${e}`);
  } else {
    throw e;
  }
}
function validateIsNotUsedTogether(optionName1, argument1, optionName2, argument2) {
  if (argument1 === true && argument2 === true) {
    throw new FirestoreError(Code.INVALID_ARGUMENT, `${optionName1} and ${optionName2} cannot be used together.`);
  }
}
var LOG_TAG$2 = "FirestoreClient";
var MAX_CONCURRENT_LIMBO_RESOLUTIONS = 100;
var FirestoreClient = class {
  constructor(credentials2, asyncQueue, databaseInfo) {
    this.credentials = credentials2;
    this.asyncQueue = asyncQueue;
    this.databaseInfo = databaseInfo;
    this.user = User.UNAUTHENTICATED;
    this.clientId = AutoId.newId();
    this.credentialListener = () => Promise.resolve();
    this.credentials.start(asyncQueue, async (user) => {
      logDebug(LOG_TAG$2, "Received user=", user.uid);
      await this.credentialListener(user);
      this.user = user;
    });
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      credentials: this.credentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: MAX_CONCURRENT_LIMBO_RESOLUTIONS
    };
  }
  setCredentialChangeListener(listener) {
    this.credentialListener = listener;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown) {
      throw new FirestoreError(Code.FAILED_PRECONDITION, "The client has already been terminated.");
    }
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const deferred = new Deferred2();
    this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        if (this.onlineComponents) {
          await this.onlineComponents.terminate();
        }
        if (this.offlineComponents) {
          await this.offlineComponents.terminate();
        }
        this.credentials.shutdown();
        deferred.resolve();
      } catch (e) {
        const firestoreError = wrapInUserErrorIfRecoverable(e, `Failed to shutdown persistence`);
        deferred.reject(firestoreError);
      }
    });
    return deferred.promise;
  }
};
var DatabaseInfo = class {
  constructor(databaseId, appId, persistenceKey, host, ssl, forceLongPolling, autoDetectLongPolling, useFetchStreams) {
    this.databaseId = databaseId;
    this.appId = appId;
    this.persistenceKey = persistenceKey;
    this.host = host;
    this.ssl = ssl;
    this.forceLongPolling = forceLongPolling;
    this.autoDetectLongPolling = autoDetectLongPolling;
    this.useFetchStreams = useFetchStreams;
  }
};
var DEFAULT_DATABASE_NAME = "(default)";
var DatabaseId = class {
  constructor(projectId, database) {
    this.projectId = projectId;
    this.database = database ? database : DEFAULT_DATABASE_NAME;
  }
  get isDefaultDatabase() {
    return this.database === DEFAULT_DATABASE_NAME;
  }
  isEqual(other) {
    return other instanceof DatabaseId && other.projectId === this.projectId && other.database === this.database;
  }
};
var LOG_TAG$1 = "ComponentProvider";
var datastoreInstances = new Map();
function removeComponents(firestore) {
  const datastore = datastoreInstances.get(firestore);
  if (datastore) {
    logDebug(LOG_TAG$1, "Removing Datastore");
    datastoreInstances.delete(firestore);
    datastore.terminate();
  }
}
function makeDatabaseInfo(databaseId, appId, persistenceKey, settings) {
  return new DatabaseInfo(databaseId, appId, persistenceKey, settings.host, settings.ssl, settings.experimentalForceLongPolling, settings.experimentalAutoDetectLongPolling, settings.useFetchStreams);
}
var DEFAULT_HOST = "firestore.googleapis.com";
var DEFAULT_SSL = true;
var FirestoreSettingsImpl = class {
  constructor(settings) {
    var _a;
    if (settings.host === void 0) {
      if (settings.ssl !== void 0) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      }
      this.host = DEFAULT_HOST;
      this.ssl = DEFAULT_SSL;
    } else {
      this.host = settings.host;
      this.ssl = (_a = settings.ssl) !== null && _a !== void 0 ? _a : DEFAULT_SSL;
    }
    this.credentials = settings.credentials;
    this.ignoreUndefinedProperties = !!settings.ignoreUndefinedProperties;
    if (settings.cacheSizeBytes === void 0) {
      this.cacheSizeBytes = LRU_DEFAULT_CACHE_SIZE_BYTES;
    } else {
      if (settings.cacheSizeBytes !== LRU_COLLECTION_DISABLED && settings.cacheSizeBytes < LRU_MINIMUM_CACHE_SIZE_BYTES) {
        throw new FirestoreError(Code.INVALID_ARGUMENT, `cacheSizeBytes must be at least ${LRU_MINIMUM_CACHE_SIZE_BYTES}`);
      } else {
        this.cacheSizeBytes = settings.cacheSizeBytes;
      }
    }
    this.experimentalForceLongPolling = !!settings.experimentalForceLongPolling;
    this.experimentalAutoDetectLongPolling = !!settings.experimentalAutoDetectLongPolling;
    this.useFetchStreams = !!settings.useFetchStreams;
    validateIsNotUsedTogether("experimentalForceLongPolling", settings.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", settings.experimentalAutoDetectLongPolling);
  }
  isEqual(other) {
    return this.host === other.host && this.ssl === other.ssl && this.credentials === other.credentials && this.cacheSizeBytes === other.cacheSizeBytes && this.experimentalForceLongPolling === other.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === other.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === other.ignoreUndefinedProperties && this.useFetchStreams === other.useFetchStreams;
  }
};
var Firestore$1 = class {
  constructor(databaseIdOrApp, _credentials) {
    this._credentials = _credentials;
    this.type = "firestore-lite";
    this._persistenceKey = "(lite)";
    this._settings = new FirestoreSettingsImpl({});
    this._settingsFrozen = false;
    if (databaseIdOrApp instanceof DatabaseId) {
      this._databaseId = databaseIdOrApp;
    } else {
      this._app = databaseIdOrApp;
      this._databaseId = databaseIdFromApp(databaseIdOrApp);
    }
  }
  get app() {
    if (!this._app) {
      throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    }
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(settings) {
    if (this._settingsFrozen) {
      throw new FirestoreError(Code.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    }
    this._settings = new FirestoreSettingsImpl(settings);
    if (settings.credentials !== void 0) {
      this._credentials = makeCredentialsProvider(settings.credentials);
    }
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    this._settingsFrozen = true;
    return this._settings;
  }
  _delete() {
    if (!this._terminateTask) {
      this._terminateTask = this._terminate();
    }
    return this._terminateTask;
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  _terminate() {
    removeComponents(this);
    return Promise.resolve();
  }
};
function databaseIdFromApp(app2) {
  if (!Object.prototype.hasOwnProperty.apply(app2.options, ["projectId"])) {
    throw new FirestoreError(Code.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
  }
  return new DatabaseId(app2.options.projectId);
}
var LOG_TAG = "AsyncQueue";
var AsyncQueueImpl = class {
  constructor() {
    this.tail = Promise.resolve();
    this.retryableOps = [];
    this._isShuttingDown = false;
    this.delayedOperations = [];
    this.failure = null;
    this.operationInProgress = false;
    this.skipNonRestrictedTasks = false;
    this.timerIdsToSkip = [];
    this.backoff = new ExponentialBackoff(this, "async_queue_retry");
    this.visibilityHandler = () => {
      this.backoff.skipBackoff();
    };
  }
  get isShuttingDown() {
    return this._isShuttingDown;
  }
  enqueueAndForget(op) {
    this.enqueue(op);
  }
  enqueueAndForgetEvenWhileRestricted(op) {
    this.verifyNotFailed();
    this.enqueueInternal(op);
  }
  enterRestrictedMode(purgeExistingTasks) {
    if (!this._isShuttingDown) {
      this._isShuttingDown = true;
      this.skipNonRestrictedTasks = purgeExistingTasks || false;
    }
  }
  enqueue(op) {
    this.verifyNotFailed();
    if (this._isShuttingDown) {
      return new Promise(() => {
      });
    }
    const task = new Deferred2();
    return this.enqueueInternal(() => {
      if (this._isShuttingDown && this.skipNonRestrictedTasks) {
        return Promise.resolve();
      }
      op().then(task.resolve, task.reject);
      return task.promise;
    }).then(() => task.promise);
  }
  enqueueRetryable(op) {
    this.enqueueAndForget(() => {
      this.retryableOps.push(op);
      return this.retryNextOp();
    });
  }
  async retryNextOp() {
    if (this.retryableOps.length === 0) {
      return;
    }
    try {
      await this.retryableOps[0]();
      this.retryableOps.shift();
      this.backoff.reset();
    } catch (e) {
      if (isIndexedDbTransactionError(e)) {
        logDebug(LOG_TAG, "Operation failed with retryable error: " + e);
      } else {
        throw e;
      }
    }
    if (this.retryableOps.length > 0) {
      this.backoff.backoffAndRun(() => this.retryNextOp());
    }
  }
  enqueueInternal(op) {
    const newTail = this.tail.then(() => {
      this.operationInProgress = true;
      return op().catch((error) => {
        this.failure = error;
        this.operationInProgress = false;
        const message = getMessageOrStack(error);
        logError("INTERNAL UNHANDLED ERROR: ", message);
        throw error;
      }).then((result) => {
        this.operationInProgress = false;
        return result;
      });
    });
    this.tail = newTail;
    return newTail;
  }
  enqueueAfterDelay(timerId, delayMs, op) {
    this.verifyNotFailed();
    if (this.timerIdsToSkip.indexOf(timerId) > -1) {
      delayMs = 0;
    }
    const delayedOp = DelayedOperation.createAndSchedule(this, timerId, delayMs, op, (removedOp) => this.removeDelayedOperation(removedOp));
    this.delayedOperations.push(delayedOp);
    return delayedOp;
  }
  verifyNotFailed() {
    if (this.failure) {
      fail();
    }
  }
  verifyOperationInProgress() {
  }
  async drain() {
    let currentTail;
    do {
      currentTail = this.tail;
      await currentTail;
    } while (currentTail !== this.tail);
  }
  containsDelayedOperation(timerId) {
    for (const op of this.delayedOperations) {
      if (op.timerId === timerId) {
        return true;
      }
    }
    return false;
  }
  runAllDelayedOperationsUntil(lastTimerId) {
    return this.drain().then(() => {
      this.delayedOperations.sort((a, b) => a.targetTimeMs - b.targetTimeMs);
      for (const op of this.delayedOperations) {
        op.skipDelay();
        if (lastTimerId !== "all" && op.timerId === lastTimerId) {
          break;
        }
      }
      return this.drain();
    });
  }
  skipDelaysForTimerId(timerId) {
    this.timerIdsToSkip.push(timerId);
  }
  removeDelayedOperation(op) {
    const index = this.delayedOperations.indexOf(op);
    this.delayedOperations.splice(index, 1);
  }
};
function newAsyncQueue() {
  return new AsyncQueueImpl();
}
function getMessageOrStack(error) {
  let message = error.message || "";
  if (error.stack) {
    if (error.stack.includes(error.message)) {
      message = error.stack;
    } else {
      message = error.message + "\n" + error.stack;
    }
  }
  return message;
}
var Firestore = class extends Firestore$1 {
  constructor(databaseIdOrApp, credentialsProvider) {
    super(databaseIdOrApp, credentialsProvider);
    this.type = "firestore";
    this._queue = newAsyncQueue();
    this._persistenceKey = "name" in databaseIdOrApp ? databaseIdOrApp.name : "[DEFAULT]";
  }
  _terminate() {
    if (!this._firestoreClient) {
      configureFirestore(this);
    }
    return this._firestoreClient.terminate();
  }
};
function getFirestore(app2 = getApp()) {
  return _getProvider(app2, "firestore").getImmediate();
}
function configureFirestore(firestore) {
  var _a;
  const settings = firestore._freezeSettings();
  const databaseInfo = makeDatabaseInfo(firestore._databaseId, ((_a = firestore._app) === null || _a === void 0 ? void 0 : _a.options.appId) || "", firestore._persistenceKey, settings);
  firestore._firestoreClient = new FirestoreClient(firestore._credentials, firestore._queue, databaseInfo);
}
function registerFirestore(variant, useFetchStreams = true) {
  setSDKVersion(SDK_VERSION);
  _registerComponent(new Component("firestore", (container, { options: settings }) => {
    const app2 = container.getProvider("app").getImmediate();
    const firestoreInstance = new Firestore(app2, new FirebaseCredentialsProvider(container.getProvider("auth-internal")));
    settings = Object.assign({ useFetchStreams }, settings);
    firestoreInstance._setSettings(settings);
    return firestoreInstance;
  }, "PUBLIC"));
  registerVersion(name3, version$12, variant);
  registerVersion(name3, version$12, "esm2017");
}
var FIELD_PATH_RESERVED = new RegExp("[~\\*/\\[\\]]");
registerFirestore("node");

// functions/firebase.config.js
var firebaseConfig = {
  apiKey: "AIzaSyAn9Q4vpZpQj3OWra7UP-9J77KbGA0CdHw",
  authDomain: "logif-sixers-61229.firebaseapp.com",
  projectId: "logif-sixers-61229",
  storageBucket: "logif-sixers-61229.appspot.com",
  messagingSenderId: "897742317031",
  appId: "1:897742317031:web:67237182be7fc8c2e68942"
};
var app = initializeApp(firebaseConfig);
var db = getFirestore();
var testEnv = () => process.env;

// functions/makananPokok.js
exports.handler = async () => {
  const bla = "adsf";
  return {
    statusCode: 200,
    body: JSON.stringify(testEnv()),
    test: bla
  };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=makananPokok.js.map
