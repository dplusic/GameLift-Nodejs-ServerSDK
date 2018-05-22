/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.amazon = (function() {

        /**
         * Namespace amazon.
         * @memberof com
         * @namespace
         */
        var amazon = {};

        amazon.whitewater = (function() {

            /**
             * Namespace whitewater.
             * @memberof com.amazon
             * @namespace
             */
            var whitewater = {};

            whitewater.auxproxy = (function() {

                /**
                 * Namespace auxproxy.
                 * @memberof com.amazon.whitewater
                 * @namespace
                 */
                var auxproxy = {};

                auxproxy.pbuffer = (function() {

                    /**
                     * Namespace pbuffer.
                     * @memberof com.amazon.whitewater.auxproxy
                     * @namespace
                     */
                    var pbuffer = {};

                    pbuffer.ProcessReady = (function() {

                        /**
                         * Properties of a ProcessReady.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IProcessReady
                         * @property {Array.<string>|null} [logPathsToUpload] ProcessReady logPathsToUpload
                         * @property {number|null} [port] ProcessReady port
                         * @property {number|null} [maxConcurrentGameSessions] ProcessReady maxConcurrentGameSessions
                         */

                        /**
                         * Constructs a new ProcessReady.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a ProcessReady.
                         * @implements IProcessReady
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessReady=} [properties] Properties to set
                         */
                        function ProcessReady(properties) {
                            this.logPathsToUpload = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ProcessReady logPathsToUpload.
                         * @member {Array.<string>} logPathsToUpload
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @instance
                         */
                        ProcessReady.prototype.logPathsToUpload = $util.emptyArray;

                        /**
                         * ProcessReady port.
                         * @member {number} port
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @instance
                         */
                        ProcessReady.prototype.port = 0;

                        /**
                         * ProcessReady maxConcurrentGameSessions.
                         * @member {number} maxConcurrentGameSessions
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @instance
                         */
                        ProcessReady.prototype.maxConcurrentGameSessions = 0;

                        /**
                         * Creates a new ProcessReady instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessReady=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessReady} ProcessReady instance
                         */
                        ProcessReady.create = function create(properties) {
                            return new ProcessReady(properties);
                        };

                        /**
                         * Encodes the specified ProcessReady message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessReady.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessReady} message ProcessReady message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessReady.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.logPathsToUpload != null && message.logPathsToUpload.length)
                                for (var i = 0; i < message.logPathsToUpload.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.logPathsToUpload[i]);
                            if (message.port != null && message.hasOwnProperty("port"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
                            if (message.maxConcurrentGameSessions != null && message.hasOwnProperty("maxConcurrentGameSessions"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxConcurrentGameSessions);
                            return writer;
                        };

                        /**
                         * Encodes the specified ProcessReady message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessReady.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessReady} message ProcessReady message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessReady.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ProcessReady message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessReady} ProcessReady
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessReady.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessReady();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.logPathsToUpload && message.logPathsToUpload.length))
                                        message.logPathsToUpload = [];
                                    message.logPathsToUpload.push(reader.string());
                                    break;
                                case 2:
                                    message.port = reader.int32();
                                    break;
                                case 3:
                                    message.maxConcurrentGameSessions = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ProcessReady message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessReady} ProcessReady
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessReady.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ProcessReady message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProcessReady.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.logPathsToUpload != null && message.hasOwnProperty("logPathsToUpload")) {
                                if (!Array.isArray(message.logPathsToUpload))
                                    return "logPathsToUpload: array expected";
                                for (var i = 0; i < message.logPathsToUpload.length; ++i)
                                    if (!$util.isString(message.logPathsToUpload[i]))
                                        return "logPathsToUpload: string[] expected";
                            }
                            if (message.port != null && message.hasOwnProperty("port"))
                                if (!$util.isInteger(message.port))
                                    return "port: integer expected";
                            if (message.maxConcurrentGameSessions != null && message.hasOwnProperty("maxConcurrentGameSessions"))
                                if (!$util.isInteger(message.maxConcurrentGameSessions))
                                    return "maxConcurrentGameSessions: integer expected";
                            return null;
                        };

                        /**
                         * Creates a ProcessReady message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessReady} ProcessReady
                         */
                        ProcessReady.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessReady)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessReady();
                            if (object.logPathsToUpload) {
                                if (!Array.isArray(object.logPathsToUpload))
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.ProcessReady.logPathsToUpload: array expected");
                                message.logPathsToUpload = [];
                                for (var i = 0; i < object.logPathsToUpload.length; ++i)
                                    message.logPathsToUpload[i] = String(object.logPathsToUpload[i]);
                            }
                            if (object.port != null)
                                message.port = object.port | 0;
                            if (object.maxConcurrentGameSessions != null)
                                message.maxConcurrentGameSessions = object.maxConcurrentGameSessions | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a ProcessReady message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ProcessReady} message ProcessReady
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProcessReady.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.logPathsToUpload = [];
                            if (options.defaults) {
                                object.port = 0;
                                object.maxConcurrentGameSessions = 0;
                            }
                            if (message.logPathsToUpload && message.logPathsToUpload.length) {
                                object.logPathsToUpload = [];
                                for (var j = 0; j < message.logPathsToUpload.length; ++j)
                                    object.logPathsToUpload[j] = message.logPathsToUpload[j];
                            }
                            if (message.port != null && message.hasOwnProperty("port"))
                                object.port = message.port;
                            if (message.maxConcurrentGameSessions != null && message.hasOwnProperty("maxConcurrentGameSessions"))
                                object.maxConcurrentGameSessions = message.maxConcurrentGameSessions;
                            return object;
                        };

                        /**
                         * Converts this ProcessReady to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessReady
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProcessReady.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ProcessReady;
                    })();

                    pbuffer.ProcessEnding = (function() {

                        /**
                         * Properties of a ProcessEnding.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IProcessEnding
                         */

                        /**
                         * Constructs a new ProcessEnding.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a ProcessEnding.
                         * @implements IProcessEnding
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding=} [properties] Properties to set
                         */
                        function ProcessEnding(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new ProcessEnding instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding} ProcessEnding instance
                         */
                        ProcessEnding.create = function create(properties) {
                            return new ProcessEnding(properties);
                        };

                        /**
                         * Encodes the specified ProcessEnding message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding} message ProcessEnding message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessEnding.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified ProcessEnding message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding} message ProcessEnding message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessEnding.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ProcessEnding message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding} ProcessEnding
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessEnding.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ProcessEnding message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding} ProcessEnding
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessEnding.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ProcessEnding message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProcessEnding.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        /**
                         * Creates a ProcessEnding message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding} ProcessEnding
                         */
                        ProcessEnding.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding)
                                return object;
                            return new $root.com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding();
                        };

                        /**
                         * Creates a plain object from a ProcessEnding message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding} message ProcessEnding
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProcessEnding.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Converts this ProcessEnding to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProcessEnding.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ProcessEnding;
                    })();

                    pbuffer.GameSessionActivate = (function() {

                        /**
                         * Properties of a GameSessionActivate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGameSessionActivate
                         * @property {string|null} [gameSessionId] GameSessionActivate gameSessionId
                         * @property {number|null} [maxPlayers] GameSessionActivate maxPlayers
                         * @property {number|null} [port] GameSessionActivate port
                         */

                        /**
                         * Constructs a new GameSessionActivate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GameSessionActivate.
                         * @implements IGameSessionActivate
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate=} [properties] Properties to set
                         */
                        function GameSessionActivate(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameSessionActivate gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @instance
                         */
                        GameSessionActivate.prototype.gameSessionId = "";

                        /**
                         * GameSessionActivate maxPlayers.
                         * @member {number} maxPlayers
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @instance
                         */
                        GameSessionActivate.prototype.maxPlayers = 0;

                        /**
                         * GameSessionActivate port.
                         * @member {number} port
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @instance
                         */
                        GameSessionActivate.prototype.port = 0;

                        /**
                         * Creates a new GameSessionActivate instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate} GameSessionActivate instance
                         */
                        GameSessionActivate.create = function create(properties) {
                            return new GameSessionActivate(properties);
                        };

                        /**
                         * Encodes the specified GameSessionActivate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate} message GameSessionActivate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSessionActivate.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxPlayers);
                            if (message.port != null && message.hasOwnProperty("port"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
                            return writer;
                        };

                        /**
                         * Encodes the specified GameSessionActivate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate} message GameSessionActivate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSessionActivate.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GameSessionActivate message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate} GameSessionActivate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSessionActivate.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.maxPlayers = reader.int32();
                                    break;
                                case 3:
                                    message.port = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GameSessionActivate message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate} GameSessionActivate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSessionActivate.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GameSessionActivate message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GameSessionActivate.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                if (!$util.isInteger(message.maxPlayers))
                                    return "maxPlayers: integer expected";
                            if (message.port != null && message.hasOwnProperty("port"))
                                if (!$util.isInteger(message.port))
                                    return "port: integer expected";
                            return null;
                        };

                        /**
                         * Creates a GameSessionActivate message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate} GameSessionActivate
                         */
                        GameSessionActivate.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.maxPlayers != null)
                                message.maxPlayers = object.maxPlayers | 0;
                            if (object.port != null)
                                message.port = object.port | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a GameSessionActivate message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate} message GameSessionActivate
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GameSessionActivate.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.maxPlayers = 0;
                                object.port = 0;
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                object.maxPlayers = message.maxPlayers;
                            if (message.port != null && message.hasOwnProperty("port"))
                                object.port = message.port;
                            return object;
                        };

                        /**
                         * Converts this GameSessionActivate to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GameSessionActivate.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GameSessionActivate;
                    })();

                    pbuffer.GameSessionTerminate = (function() {

                        /**
                         * Properties of a GameSessionTerminate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGameSessionTerminate
                         * @property {string|null} [gameSessionId] GameSessionTerminate gameSessionId
                         */

                        /**
                         * Constructs a new GameSessionTerminate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GameSessionTerminate.
                         * @implements IGameSessionTerminate
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate=} [properties] Properties to set
                         */
                        function GameSessionTerminate(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameSessionTerminate gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @instance
                         */
                        GameSessionTerminate.prototype.gameSessionId = "";

                        /**
                         * Creates a new GameSessionTerminate instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate} GameSessionTerminate instance
                         */
                        GameSessionTerminate.create = function create(properties) {
                            return new GameSessionTerminate(properties);
                        };

                        /**
                         * Encodes the specified GameSessionTerminate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate} message GameSessionTerminate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSessionTerminate.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            return writer;
                        };

                        /**
                         * Encodes the specified GameSessionTerminate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate} message GameSessionTerminate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSessionTerminate.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GameSessionTerminate message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate} GameSessionTerminate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSessionTerminate.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GameSessionTerminate message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate} GameSessionTerminate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSessionTerminate.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GameSessionTerminate message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GameSessionTerminate.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            return null;
                        };

                        /**
                         * Creates a GameSessionTerminate message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate} GameSessionTerminate
                         */
                        GameSessionTerminate.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a GameSessionTerminate message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate} message GameSessionTerminate
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GameSessionTerminate.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.gameSessionId = "";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            return object;
                        };

                        /**
                         * Converts this GameSessionTerminate to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GameSessionTerminate.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GameSessionTerminate;
                    })();

                    pbuffer.UpdatePlayerSessionCreationPolicy = (function() {

                        /**
                         * Properties of an UpdatePlayerSessionCreationPolicy.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IUpdatePlayerSessionCreationPolicy
                         * @property {string|null} [gameSessionId] UpdatePlayerSessionCreationPolicy gameSessionId
                         * @property {string|null} [newPlayerSessionCreationPolicy] UpdatePlayerSessionCreationPolicy newPlayerSessionCreationPolicy
                         */

                        /**
                         * Constructs a new UpdatePlayerSessionCreationPolicy.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents an UpdatePlayerSessionCreationPolicy.
                         * @implements IUpdatePlayerSessionCreationPolicy
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy=} [properties] Properties to set
                         */
                        function UpdatePlayerSessionCreationPolicy(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * UpdatePlayerSessionCreationPolicy gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @instance
                         */
                        UpdatePlayerSessionCreationPolicy.prototype.gameSessionId = "";

                        /**
                         * UpdatePlayerSessionCreationPolicy newPlayerSessionCreationPolicy.
                         * @member {string} newPlayerSessionCreationPolicy
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @instance
                         */
                        UpdatePlayerSessionCreationPolicy.prototype.newPlayerSessionCreationPolicy = "";

                        /**
                         * Creates a new UpdatePlayerSessionCreationPolicy instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy} UpdatePlayerSessionCreationPolicy instance
                         */
                        UpdatePlayerSessionCreationPolicy.create = function create(properties) {
                            return new UpdatePlayerSessionCreationPolicy(properties);
                        };

                        /**
                         * Encodes the specified UpdatePlayerSessionCreationPolicy message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy} message UpdatePlayerSessionCreationPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdatePlayerSessionCreationPolicy.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.newPlayerSessionCreationPolicy != null && message.hasOwnProperty("newPlayerSessionCreationPolicy"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPlayerSessionCreationPolicy);
                            return writer;
                        };

                        /**
                         * Encodes the specified UpdatePlayerSessionCreationPolicy message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy} message UpdatePlayerSessionCreationPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdatePlayerSessionCreationPolicy.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an UpdatePlayerSessionCreationPolicy message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy} UpdatePlayerSessionCreationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdatePlayerSessionCreationPolicy.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.newPlayerSessionCreationPolicy = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an UpdatePlayerSessionCreationPolicy message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy} UpdatePlayerSessionCreationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdatePlayerSessionCreationPolicy.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an UpdatePlayerSessionCreationPolicy message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UpdatePlayerSessionCreationPolicy.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.newPlayerSessionCreationPolicy != null && message.hasOwnProperty("newPlayerSessionCreationPolicy"))
                                if (!$util.isString(message.newPlayerSessionCreationPolicy))
                                    return "newPlayerSessionCreationPolicy: string expected";
                            return null;
                        };

                        /**
                         * Creates an UpdatePlayerSessionCreationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy} UpdatePlayerSessionCreationPolicy
                         */
                        UpdatePlayerSessionCreationPolicy.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.newPlayerSessionCreationPolicy != null)
                                message.newPlayerSessionCreationPolicy = String(object.newPlayerSessionCreationPolicy);
                            return message;
                        };

                        /**
                         * Creates a plain object from an UpdatePlayerSessionCreationPolicy message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy} message UpdatePlayerSessionCreationPolicy
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UpdatePlayerSessionCreationPolicy.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.newPlayerSessionCreationPolicy = "";
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.newPlayerSessionCreationPolicy != null && message.hasOwnProperty("newPlayerSessionCreationPolicy"))
                                object.newPlayerSessionCreationPolicy = message.newPlayerSessionCreationPolicy;
                            return object;
                        };

                        /**
                         * Converts this UpdatePlayerSessionCreationPolicy to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UpdatePlayerSessionCreationPolicy.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return UpdatePlayerSessionCreationPolicy;
                    })();

                    pbuffer.AcceptPlayerSession = (function() {

                        /**
                         * Properties of an AcceptPlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IAcceptPlayerSession
                         * @property {string|null} [gameSessionId] AcceptPlayerSession gameSessionId
                         * @property {string|null} [playerSessionId] AcceptPlayerSession playerSessionId
                         */

                        /**
                         * Constructs a new AcceptPlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents an AcceptPlayerSession.
                         * @implements IAcceptPlayerSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession=} [properties] Properties to set
                         */
                        function AcceptPlayerSession(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * AcceptPlayerSession gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @instance
                         */
                        AcceptPlayerSession.prototype.gameSessionId = "";

                        /**
                         * AcceptPlayerSession playerSessionId.
                         * @member {string} playerSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @instance
                         */
                        AcceptPlayerSession.prototype.playerSessionId = "";

                        /**
                         * Creates a new AcceptPlayerSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession} AcceptPlayerSession instance
                         */
                        AcceptPlayerSession.create = function create(properties) {
                            return new AcceptPlayerSession(properties);
                        };

                        /**
                         * Encodes the specified AcceptPlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession} message AcceptPlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AcceptPlayerSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerSessionId);
                            return writer;
                        };

                        /**
                         * Encodes the specified AcceptPlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession} message AcceptPlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AcceptPlayerSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an AcceptPlayerSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession} AcceptPlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AcceptPlayerSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.playerSessionId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an AcceptPlayerSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession} AcceptPlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AcceptPlayerSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an AcceptPlayerSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AcceptPlayerSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                if (!$util.isString(message.playerSessionId))
                                    return "playerSessionId: string expected";
                            return null;
                        };

                        /**
                         * Creates an AcceptPlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession} AcceptPlayerSession
                         */
                        AcceptPlayerSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.playerSessionId != null)
                                message.playerSessionId = String(object.playerSessionId);
                            return message;
                        };

                        /**
                         * Creates a plain object from an AcceptPlayerSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession} message AcceptPlayerSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AcceptPlayerSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.playerSessionId = "";
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                object.playerSessionId = message.playerSessionId;
                            return object;
                        };

                        /**
                         * Converts this AcceptPlayerSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AcceptPlayerSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return AcceptPlayerSession;
                    })();

                    pbuffer.RemovePlayerSession = (function() {

                        /**
                         * Properties of a RemovePlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IRemovePlayerSession
                         * @property {string|null} [gameSessionId] RemovePlayerSession gameSessionId
                         * @property {string|null} [playerSessionId] RemovePlayerSession playerSessionId
                         */

                        /**
                         * Constructs a new RemovePlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a RemovePlayerSession.
                         * @implements IRemovePlayerSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession=} [properties] Properties to set
                         */
                        function RemovePlayerSession(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * RemovePlayerSession gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @instance
                         */
                        RemovePlayerSession.prototype.gameSessionId = "";

                        /**
                         * RemovePlayerSession playerSessionId.
                         * @member {string} playerSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @instance
                         */
                        RemovePlayerSession.prototype.playerSessionId = "";

                        /**
                         * Creates a new RemovePlayerSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession} RemovePlayerSession instance
                         */
                        RemovePlayerSession.create = function create(properties) {
                            return new RemovePlayerSession(properties);
                        };

                        /**
                         * Encodes the specified RemovePlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession} message RemovePlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RemovePlayerSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerSessionId);
                            return writer;
                        };

                        /**
                         * Encodes the specified RemovePlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession} message RemovePlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RemovePlayerSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a RemovePlayerSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession} RemovePlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RemovePlayerSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.playerSessionId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a RemovePlayerSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession} RemovePlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RemovePlayerSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a RemovePlayerSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RemovePlayerSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                if (!$util.isString(message.playerSessionId))
                                    return "playerSessionId: string expected";
                            return null;
                        };

                        /**
                         * Creates a RemovePlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession} RemovePlayerSession
                         */
                        RemovePlayerSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.playerSessionId != null)
                                message.playerSessionId = String(object.playerSessionId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a RemovePlayerSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession} message RemovePlayerSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RemovePlayerSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.playerSessionId = "";
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                object.playerSessionId = message.playerSessionId;
                            return object;
                        };

                        /**
                         * Converts this RemovePlayerSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RemovePlayerSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return RemovePlayerSession;
                    })();

                    pbuffer.ReportHealth = (function() {

                        /**
                         * Properties of a ReportHealth.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IReportHealth
                         * @property {boolean|null} [healthStatus] ReportHealth healthStatus
                         */

                        /**
                         * Constructs a new ReportHealth.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a ReportHealth.
                         * @implements IReportHealth
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IReportHealth=} [properties] Properties to set
                         */
                        function ReportHealth(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ReportHealth healthStatus.
                         * @member {boolean} healthStatus
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @instance
                         */
                        ReportHealth.prototype.healthStatus = false;

                        /**
                         * Creates a new ReportHealth instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IReportHealth=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ReportHealth} ReportHealth instance
                         */
                        ReportHealth.create = function create(properties) {
                            return new ReportHealth(properties);
                        };

                        /**
                         * Encodes the specified ReportHealth message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ReportHealth.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IReportHealth} message ReportHealth message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReportHealth.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.healthStatus != null && message.hasOwnProperty("healthStatus"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.healthStatus);
                            return writer;
                        };

                        /**
                         * Encodes the specified ReportHealth message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ReportHealth.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IReportHealth} message ReportHealth message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReportHealth.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a ReportHealth message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ReportHealth} ReportHealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReportHealth.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ReportHealth();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.healthStatus = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a ReportHealth message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ReportHealth} ReportHealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReportHealth.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a ReportHealth message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReportHealth.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.healthStatus != null && message.hasOwnProperty("healthStatus"))
                                if (typeof message.healthStatus !== "boolean")
                                    return "healthStatus: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a ReportHealth message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ReportHealth} ReportHealth
                         */
                        ReportHealth.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.ReportHealth)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ReportHealth();
                            if (object.healthStatus != null)
                                message.healthStatus = Boolean(object.healthStatus);
                            return message;
                        };

                        /**
                         * Creates a plain object from a ReportHealth message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ReportHealth} message ReportHealth
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReportHealth.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.healthStatus = false;
                            if (message.healthStatus != null && message.hasOwnProperty("healthStatus"))
                                object.healthStatus = message.healthStatus;
                            return object;
                        };

                        /**
                         * Converts this ReportHealth to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ReportHealth
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReportHealth.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ReportHealth;
                    })();

                    pbuffer.DescribePlayerSessionsRequest = (function() {

                        /**
                         * Properties of a DescribePlayerSessionsRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IDescribePlayerSessionsRequest
                         * @property {string|null} [gameSessionId] DescribePlayerSessionsRequest gameSessionId
                         * @property {string|null} [playerId] DescribePlayerSessionsRequest playerId
                         * @property {string|null} [playerSessionId] DescribePlayerSessionsRequest playerSessionId
                         * @property {string|null} [playerSessionStatusFilter] DescribePlayerSessionsRequest playerSessionStatusFilter
                         * @property {string|null} [nextToken] DescribePlayerSessionsRequest nextToken
                         * @property {number|null} [limit] DescribePlayerSessionsRequest limit
                         */

                        /**
                         * Constructs a new DescribePlayerSessionsRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a DescribePlayerSessionsRequest.
                         * @implements IDescribePlayerSessionsRequest
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest=} [properties] Properties to set
                         */
                        function DescribePlayerSessionsRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DescribePlayerSessionsRequest gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.gameSessionId = "";

                        /**
                         * DescribePlayerSessionsRequest playerId.
                         * @member {string} playerId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.playerId = "";

                        /**
                         * DescribePlayerSessionsRequest playerSessionId.
                         * @member {string} playerSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.playerSessionId = "";

                        /**
                         * DescribePlayerSessionsRequest playerSessionStatusFilter.
                         * @member {string} playerSessionStatusFilter
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.playerSessionStatusFilter = "";

                        /**
                         * DescribePlayerSessionsRequest nextToken.
                         * @member {string} nextToken
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.nextToken = "";

                        /**
                         * DescribePlayerSessionsRequest limit.
                         * @member {number} limit
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         */
                        DescribePlayerSessionsRequest.prototype.limit = 0;

                        /**
                         * Creates a new DescribePlayerSessionsRequest instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest} DescribePlayerSessionsRequest instance
                         */
                        DescribePlayerSessionsRequest.create = function create(properties) {
                            return new DescribePlayerSessionsRequest(properties);
                        };

                        /**
                         * Encodes the specified DescribePlayerSessionsRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest} message DescribePlayerSessionsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DescribePlayerSessionsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerSessionId);
                            if (message.playerSessionStatusFilter != null && message.hasOwnProperty("playerSessionStatusFilter"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerSessionStatusFilter);
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nextToken);
                            if (message.limit != null && message.hasOwnProperty("limit"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.limit);
                            return writer;
                        };

                        /**
                         * Encodes the specified DescribePlayerSessionsRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest} message DescribePlayerSessionsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DescribePlayerSessionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a DescribePlayerSessionsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest} DescribePlayerSessionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DescribePlayerSessionsRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.playerId = reader.string();
                                    break;
                                case 3:
                                    message.playerSessionId = reader.string();
                                    break;
                                case 4:
                                    message.playerSessionStatusFilter = reader.string();
                                    break;
                                case 5:
                                    message.nextToken = reader.string();
                                    break;
                                case 6:
                                    message.limit = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a DescribePlayerSessionsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest} DescribePlayerSessionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DescribePlayerSessionsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a DescribePlayerSessionsRequest message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DescribePlayerSessionsRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                if (!$util.isString(message.playerId))
                                    return "playerId: string expected";
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                if (!$util.isString(message.playerSessionId))
                                    return "playerSessionId: string expected";
                            if (message.playerSessionStatusFilter != null && message.hasOwnProperty("playerSessionStatusFilter"))
                                if (!$util.isString(message.playerSessionStatusFilter))
                                    return "playerSessionStatusFilter: string expected";
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                if (!$util.isString(message.nextToken))
                                    return "nextToken: string expected";
                            if (message.limit != null && message.hasOwnProperty("limit"))
                                if (!$util.isInteger(message.limit))
                                    return "limit: integer expected";
                            return null;
                        };

                        /**
                         * Creates a DescribePlayerSessionsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest} DescribePlayerSessionsRequest
                         */
                        DescribePlayerSessionsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.playerId != null)
                                message.playerId = String(object.playerId);
                            if (object.playerSessionId != null)
                                message.playerSessionId = String(object.playerSessionId);
                            if (object.playerSessionStatusFilter != null)
                                message.playerSessionStatusFilter = String(object.playerSessionStatusFilter);
                            if (object.nextToken != null)
                                message.nextToken = String(object.nextToken);
                            if (object.limit != null)
                                message.limit = object.limit | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a DescribePlayerSessionsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest} message DescribePlayerSessionsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DescribePlayerSessionsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.playerId = "";
                                object.playerSessionId = "";
                                object.playerSessionStatusFilter = "";
                                object.nextToken = "";
                                object.limit = 0;
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                object.playerId = message.playerId;
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                object.playerSessionId = message.playerSessionId;
                            if (message.playerSessionStatusFilter != null && message.hasOwnProperty("playerSessionStatusFilter"))
                                object.playerSessionStatusFilter = message.playerSessionStatusFilter;
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                object.nextToken = message.nextToken;
                            if (message.limit != null && message.hasOwnProperty("limit"))
                                object.limit = message.limit;
                            return object;
                        };

                        /**
                         * Converts this DescribePlayerSessionsRequest to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DescribePlayerSessionsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return DescribePlayerSessionsRequest;
                    })();

                    pbuffer.BackfillMatchmakingRequest = (function() {

                        /**
                         * Properties of a BackfillMatchmakingRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IBackfillMatchmakingRequest
                         * @property {string|null} [ticketId] BackfillMatchmakingRequest ticketId
                         * @property {string|null} [gameSessionArn] BackfillMatchmakingRequest gameSessionArn
                         * @property {string|null} [matchmakingConfigurationArn] BackfillMatchmakingRequest matchmakingConfigurationArn
                         * @property {Array.<com.amazon.whitewater.auxproxy.pbuffer.IPlayer>|null} [players] BackfillMatchmakingRequest players
                         */

                        /**
                         * Constructs a new BackfillMatchmakingRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a BackfillMatchmakingRequest.
                         * @implements IBackfillMatchmakingRequest
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest=} [properties] Properties to set
                         */
                        function BackfillMatchmakingRequest(properties) {
                            this.players = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BackfillMatchmakingRequest ticketId.
                         * @member {string} ticketId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @instance
                         */
                        BackfillMatchmakingRequest.prototype.ticketId = "";

                        /**
                         * BackfillMatchmakingRequest gameSessionArn.
                         * @member {string} gameSessionArn
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @instance
                         */
                        BackfillMatchmakingRequest.prototype.gameSessionArn = "";

                        /**
                         * BackfillMatchmakingRequest matchmakingConfigurationArn.
                         * @member {string} matchmakingConfigurationArn
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @instance
                         */
                        BackfillMatchmakingRequest.prototype.matchmakingConfigurationArn = "";

                        /**
                         * BackfillMatchmakingRequest players.
                         * @member {Array.<com.amazon.whitewater.auxproxy.pbuffer.IPlayer>} players
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @instance
                         */
                        BackfillMatchmakingRequest.prototype.players = $util.emptyArray;

                        /**
                         * Creates a new BackfillMatchmakingRequest instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest} BackfillMatchmakingRequest instance
                         */
                        BackfillMatchmakingRequest.create = function create(properties) {
                            return new BackfillMatchmakingRequest(properties);
                        };

                        /**
                         * Encodes the specified BackfillMatchmakingRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest} message BackfillMatchmakingRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackfillMatchmakingRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticketId);
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameSessionArn);
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.matchmakingConfigurationArn);
                            if (message.players != null && message.players.length)
                                for (var i = 0; i < message.players.length; ++i)
                                    $root.com.amazon.whitewater.auxproxy.pbuffer.Player.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified BackfillMatchmakingRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest} message BackfillMatchmakingRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackfillMatchmakingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BackfillMatchmakingRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest} BackfillMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackfillMatchmakingRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.ticketId = reader.string();
                                    break;
                                case 2:
                                    message.gameSessionArn = reader.string();
                                    break;
                                case 3:
                                    message.matchmakingConfigurationArn = reader.string();
                                    break;
                                case 4:
                                    if (!(message.players && message.players.length))
                                        message.players = [];
                                    message.players.push($root.com.amazon.whitewater.auxproxy.pbuffer.Player.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BackfillMatchmakingRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest} BackfillMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackfillMatchmakingRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BackfillMatchmakingRequest message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BackfillMatchmakingRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                if (!$util.isString(message.ticketId))
                                    return "ticketId: string expected";
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                if (!$util.isString(message.gameSessionArn))
                                    return "gameSessionArn: string expected";
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                if (!$util.isString(message.matchmakingConfigurationArn))
                                    return "matchmakingConfigurationArn: string expected";
                            if (message.players != null && message.hasOwnProperty("players")) {
                                if (!Array.isArray(message.players))
                                    return "players: array expected";
                                for (var i = 0; i < message.players.length; ++i) {
                                    var error = $root.com.amazon.whitewater.auxproxy.pbuffer.Player.verify(message.players[i]);
                                    if (error)
                                        return "players." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a BackfillMatchmakingRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest} BackfillMatchmakingRequest
                         */
                        BackfillMatchmakingRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest();
                            if (object.ticketId != null)
                                message.ticketId = String(object.ticketId);
                            if (object.gameSessionArn != null)
                                message.gameSessionArn = String(object.gameSessionArn);
                            if (object.matchmakingConfigurationArn != null)
                                message.matchmakingConfigurationArn = String(object.matchmakingConfigurationArn);
                            if (object.players) {
                                if (!Array.isArray(object.players))
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.players: array expected");
                                message.players = [];
                                for (var i = 0; i < object.players.length; ++i) {
                                    if (typeof object.players[i] !== "object")
                                        throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.players: object expected");
                                    message.players[i] = $root.com.amazon.whitewater.auxproxy.pbuffer.Player.fromObject(object.players[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a BackfillMatchmakingRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest} message BackfillMatchmakingRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BackfillMatchmakingRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.players = [];
                            if (options.defaults) {
                                object.ticketId = "";
                                object.gameSessionArn = "";
                                object.matchmakingConfigurationArn = "";
                            }
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                object.ticketId = message.ticketId;
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                object.gameSessionArn = message.gameSessionArn;
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                object.matchmakingConfigurationArn = message.matchmakingConfigurationArn;
                            if (message.players && message.players.length) {
                                object.players = [];
                                for (var j = 0; j < message.players.length; ++j)
                                    object.players[j] = $root.com.amazon.whitewater.auxproxy.pbuffer.Player.toObject(message.players[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this BackfillMatchmakingRequest to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BackfillMatchmakingRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return BackfillMatchmakingRequest;
                    })();

                    pbuffer.StopMatchmakingRequest = (function() {

                        /**
                         * Properties of a StopMatchmakingRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IStopMatchmakingRequest
                         * @property {string|null} [ticketId] StopMatchmakingRequest ticketId
                         * @property {string|null} [gameSessionArn] StopMatchmakingRequest gameSessionArn
                         * @property {string|null} [matchmakingConfigurationArn] StopMatchmakingRequest matchmakingConfigurationArn
                         */

                        /**
                         * Constructs a new StopMatchmakingRequest.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a StopMatchmakingRequest.
                         * @implements IStopMatchmakingRequest
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest=} [properties] Properties to set
                         */
                        function StopMatchmakingRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * StopMatchmakingRequest ticketId.
                         * @member {string} ticketId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @instance
                         */
                        StopMatchmakingRequest.prototype.ticketId = "";

                        /**
                         * StopMatchmakingRequest gameSessionArn.
                         * @member {string} gameSessionArn
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @instance
                         */
                        StopMatchmakingRequest.prototype.gameSessionArn = "";

                        /**
                         * StopMatchmakingRequest matchmakingConfigurationArn.
                         * @member {string} matchmakingConfigurationArn
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @instance
                         */
                        StopMatchmakingRequest.prototype.matchmakingConfigurationArn = "";

                        /**
                         * Creates a new StopMatchmakingRequest instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest} StopMatchmakingRequest instance
                         */
                        StopMatchmakingRequest.create = function create(properties) {
                            return new StopMatchmakingRequest(properties);
                        };

                        /**
                         * Encodes the specified StopMatchmakingRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest} message StopMatchmakingRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StopMatchmakingRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticketId);
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameSessionArn);
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.matchmakingConfigurationArn);
                            return writer;
                        };

                        /**
                         * Encodes the specified StopMatchmakingRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest} message StopMatchmakingRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StopMatchmakingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a StopMatchmakingRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest} StopMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StopMatchmakingRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.ticketId = reader.string();
                                    break;
                                case 2:
                                    message.gameSessionArn = reader.string();
                                    break;
                                case 3:
                                    message.matchmakingConfigurationArn = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a StopMatchmakingRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest} StopMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StopMatchmakingRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a StopMatchmakingRequest message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StopMatchmakingRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                if (!$util.isString(message.ticketId))
                                    return "ticketId: string expected";
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                if (!$util.isString(message.gameSessionArn))
                                    return "gameSessionArn: string expected";
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                if (!$util.isString(message.matchmakingConfigurationArn))
                                    return "matchmakingConfigurationArn: string expected";
                            return null;
                        };

                        /**
                         * Creates a StopMatchmakingRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest} StopMatchmakingRequest
                         */
                        StopMatchmakingRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest();
                            if (object.ticketId != null)
                                message.ticketId = String(object.ticketId);
                            if (object.gameSessionArn != null)
                                message.gameSessionArn = String(object.gameSessionArn);
                            if (object.matchmakingConfigurationArn != null)
                                message.matchmakingConfigurationArn = String(object.matchmakingConfigurationArn);
                            return message;
                        };

                        /**
                         * Creates a plain object from a StopMatchmakingRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest} message StopMatchmakingRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        StopMatchmakingRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.ticketId = "";
                                object.gameSessionArn = "";
                                object.matchmakingConfigurationArn = "";
                            }
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                object.ticketId = message.ticketId;
                            if (message.gameSessionArn != null && message.hasOwnProperty("gameSessionArn"))
                                object.gameSessionArn = message.gameSessionArn;
                            if (message.matchmakingConfigurationArn != null && message.hasOwnProperty("matchmakingConfigurationArn"))
                                object.matchmakingConfigurationArn = message.matchmakingConfigurationArn;
                            return object;
                        };

                        /**
                         * Converts this StopMatchmakingRequest to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        StopMatchmakingRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return StopMatchmakingRequest;
                    })();

                    pbuffer.GetInstanceCertificate = (function() {

                        /**
                         * Properties of a GetInstanceCertificate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGetInstanceCertificate
                         */

                        /**
                         * Constructs a new GetInstanceCertificate.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GetInstanceCertificate.
                         * @implements IGetInstanceCertificate
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate=} [properties] Properties to set
                         */
                        function GetInstanceCertificate(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new GetInstanceCertificate instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate} GetInstanceCertificate instance
                         */
                        GetInstanceCertificate.create = function create(properties) {
                            return new GetInstanceCertificate(properties);
                        };

                        /**
                         * Encodes the specified GetInstanceCertificate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate} message GetInstanceCertificate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetInstanceCertificate.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified GetInstanceCertificate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate} message GetInstanceCertificate message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetInstanceCertificate.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GetInstanceCertificate message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate} GetInstanceCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetInstanceCertificate.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GetInstanceCertificate message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate} GetInstanceCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetInstanceCertificate.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GetInstanceCertificate message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetInstanceCertificate.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        /**
                         * Creates a GetInstanceCertificate message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate} GetInstanceCertificate
                         */
                        GetInstanceCertificate.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate)
                                return object;
                            return new $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate();
                        };

                        /**
                         * Creates a plain object from a GetInstanceCertificate message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate} message GetInstanceCertificate
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetInstanceCertificate.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Converts this GetInstanceCertificate to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetInstanceCertificate.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GetInstanceCertificate;
                    })();

                    pbuffer.ActivateGameSession = (function() {

                        /**
                         * Properties of an ActivateGameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IActivateGameSession
                         * @property {com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null} [gameSession] ActivateGameSession gameSession
                         */

                        /**
                         * Constructs a new ActivateGameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents an ActivateGameSession.
                         * @implements IActivateGameSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession=} [properties] Properties to set
                         */
                        function ActivateGameSession(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ActivateGameSession gameSession.
                         * @member {com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null|undefined} gameSession
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @instance
                         */
                        ActivateGameSession.prototype.gameSession = null;

                        /**
                         * Creates a new ActivateGameSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession} ActivateGameSession instance
                         */
                        ActivateGameSession.create = function create(properties) {
                            return new ActivateGameSession(properties);
                        };

                        /**
                         * Encodes the specified ActivateGameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession} message ActivateGameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ActivateGameSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSession != null && message.hasOwnProperty("gameSession"))
                                $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.encode(message.gameSession, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified ActivateGameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession} message ActivateGameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ActivateGameSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an ActivateGameSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession} ActivateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ActivateGameSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an ActivateGameSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession} ActivateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ActivateGameSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an ActivateGameSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ActivateGameSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSession != null && message.hasOwnProperty("gameSession")) {
                                var error = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify(message.gameSession);
                                if (error)
                                    return "gameSession." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates an ActivateGameSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession} ActivateGameSession
                         */
                        ActivateGameSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession();
                            if (object.gameSession != null) {
                                if (typeof object.gameSession !== "object")
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.gameSession: object expected");
                                message.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.fromObject(object.gameSession);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an ActivateGameSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession} message ActivateGameSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ActivateGameSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.gameSession = null;
                            if (message.gameSession != null && message.hasOwnProperty("gameSession"))
                                object.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.toObject(message.gameSession, options);
                            return object;
                        };

                        /**
                         * Converts this ActivateGameSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ActivateGameSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return ActivateGameSession;
                    })();

                    pbuffer.TerminateProcess = (function() {

                        /**
                         * Properties of a TerminateProcess.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface ITerminateProcess
                         * @property {Long|null} [terminationTime] TerminateProcess terminationTime
                         */

                        /**
                         * Constructs a new TerminateProcess.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a TerminateProcess.
                         * @implements ITerminateProcess
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess=} [properties] Properties to set
                         */
                        function TerminateProcess(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TerminateProcess terminationTime.
                         * @member {Long} terminationTime
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @instance
                         */
                        TerminateProcess.prototype.terminationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new TerminateProcess instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess} TerminateProcess instance
                         */
                        TerminateProcess.create = function create(properties) {
                            return new TerminateProcess(properties);
                        };

                        /**
                         * Encodes the specified TerminateProcess message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess} message TerminateProcess message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TerminateProcess.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.terminationTime);
                            return writer;
                        };

                        /**
                         * Encodes the specified TerminateProcess message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess} message TerminateProcess message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TerminateProcess.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TerminateProcess message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess} TerminateProcess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TerminateProcess.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.terminationTime = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TerminateProcess message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess} TerminateProcess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TerminateProcess.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TerminateProcess message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TerminateProcess.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                if (!$util.isInteger(message.terminationTime) && !(message.terminationTime && $util.isInteger(message.terminationTime.low) && $util.isInteger(message.terminationTime.high)))
                                    return "terminationTime: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a TerminateProcess message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess} TerminateProcess
                         */
                        TerminateProcess.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess();
                            if (object.terminationTime != null)
                                if ($util.Long)
                                    (message.terminationTime = $util.Long.fromValue(object.terminationTime)).unsigned = false;
                                else if (typeof object.terminationTime === "string")
                                    message.terminationTime = parseInt(object.terminationTime, 10);
                                else if (typeof object.terminationTime === "number")
                                    message.terminationTime = object.terminationTime;
                                else if (typeof object.terminationTime === "object")
                                    message.terminationTime = new $util.LongBits(object.terminationTime.low >>> 0, object.terminationTime.high >>> 0).toNumber();
                            return message;
                        };

                        /**
                         * Creates a plain object from a TerminateProcess message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess} message TerminateProcess
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TerminateProcess.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.terminationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.terminationTime = options.longs === String ? "0" : 0;
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                if (typeof message.terminationTime === "number")
                                    object.terminationTime = options.longs === String ? String(message.terminationTime) : message.terminationTime;
                                else
                                    object.terminationTime = options.longs === String ? $util.Long.prototype.toString.call(message.terminationTime) : options.longs === Number ? new $util.LongBits(message.terminationTime.low >>> 0, message.terminationTime.high >>> 0).toNumber() : message.terminationTime;
                            return object;
                        };

                        /**
                         * Converts this TerminateProcess to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TerminateProcess.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return TerminateProcess;
                    })();

                    pbuffer.DescribePlayerSessionsResponse = (function() {

                        /**
                         * Properties of a DescribePlayerSessionsResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IDescribePlayerSessionsResponse
                         * @property {string|null} [nextToken] DescribePlayerSessionsResponse nextToken
                         * @property {Array.<com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession>|null} [playerSessions] DescribePlayerSessionsResponse playerSessions
                         */

                        /**
                         * Constructs a new DescribePlayerSessionsResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a DescribePlayerSessionsResponse.
                         * @implements IDescribePlayerSessionsResponse
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse=} [properties] Properties to set
                         */
                        function DescribePlayerSessionsResponse(properties) {
                            this.playerSessions = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * DescribePlayerSessionsResponse nextToken.
                         * @member {string} nextToken
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @instance
                         */
                        DescribePlayerSessionsResponse.prototype.nextToken = "";

                        /**
                         * DescribePlayerSessionsResponse playerSessions.
                         * @member {Array.<com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession>} playerSessions
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @instance
                         */
                        DescribePlayerSessionsResponse.prototype.playerSessions = $util.emptyArray;

                        /**
                         * Creates a new DescribePlayerSessionsResponse instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse} DescribePlayerSessionsResponse instance
                         */
                        DescribePlayerSessionsResponse.create = function create(properties) {
                            return new DescribePlayerSessionsResponse(properties);
                        };

                        /**
                         * Encodes the specified DescribePlayerSessionsResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse} message DescribePlayerSessionsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DescribePlayerSessionsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nextToken);
                            if (message.playerSessions != null && message.playerSessions.length)
                                for (var i = 0; i < message.playerSessions.length; ++i)
                                    $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.encode(message.playerSessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified DescribePlayerSessionsResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse} message DescribePlayerSessionsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DescribePlayerSessionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a DescribePlayerSessionsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse} DescribePlayerSessionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DescribePlayerSessionsResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.nextToken = reader.string();
                                    break;
                                case 2:
                                    if (!(message.playerSessions && message.playerSessions.length))
                                        message.playerSessions = [];
                                    message.playerSessions.push($root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a DescribePlayerSessionsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse} DescribePlayerSessionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DescribePlayerSessionsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a DescribePlayerSessionsResponse message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DescribePlayerSessionsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                if (!$util.isString(message.nextToken))
                                    return "nextToken: string expected";
                            if (message.playerSessions != null && message.hasOwnProperty("playerSessions")) {
                                if (!Array.isArray(message.playerSessions))
                                    return "playerSessions: array expected";
                                for (var i = 0; i < message.playerSessions.length; ++i) {
                                    var error = $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.verify(message.playerSessions[i]);
                                    if (error)
                                        return "playerSessions." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a DescribePlayerSessionsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse} DescribePlayerSessionsResponse
                         */
                        DescribePlayerSessionsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse();
                            if (object.nextToken != null)
                                message.nextToken = String(object.nextToken);
                            if (object.playerSessions) {
                                if (!Array.isArray(object.playerSessions))
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.playerSessions: array expected");
                                message.playerSessions = [];
                                for (var i = 0; i < object.playerSessions.length; ++i) {
                                    if (typeof object.playerSessions[i] !== "object")
                                        throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.playerSessions: object expected");
                                    message.playerSessions[i] = $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.fromObject(object.playerSessions[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a DescribePlayerSessionsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse} message DescribePlayerSessionsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DescribePlayerSessionsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.playerSessions = [];
                            if (options.defaults)
                                object.nextToken = "";
                            if (message.nextToken != null && message.hasOwnProperty("nextToken"))
                                object.nextToken = message.nextToken;
                            if (message.playerSessions && message.playerSessions.length) {
                                object.playerSessions = [];
                                for (var j = 0; j < message.playerSessions.length; ++j)
                                    object.playerSessions[j] = $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.toObject(message.playerSessions[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this DescribePlayerSessionsResponse to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DescribePlayerSessionsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return DescribePlayerSessionsResponse;
                    })();

                    pbuffer.UpdateGameSession = (function() {

                        /**
                         * Properties of an UpdateGameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IUpdateGameSession
                         * @property {com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null} [gameSession] UpdateGameSession gameSession
                         * @property {string|null} [updateReason] UpdateGameSession updateReason
                         * @property {string|null} [backfillTicketId] UpdateGameSession backfillTicketId
                         */

                        /**
                         * Constructs a new UpdateGameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents an UpdateGameSession.
                         * @implements IUpdateGameSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession=} [properties] Properties to set
                         */
                        function UpdateGameSession(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * UpdateGameSession gameSession.
                         * @member {com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null|undefined} gameSession
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @instance
                         */
                        UpdateGameSession.prototype.gameSession = null;

                        /**
                         * UpdateGameSession updateReason.
                         * @member {string} updateReason
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @instance
                         */
                        UpdateGameSession.prototype.updateReason = "";

                        /**
                         * UpdateGameSession backfillTicketId.
                         * @member {string} backfillTicketId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @instance
                         */
                        UpdateGameSession.prototype.backfillTicketId = "";

                        /**
                         * Creates a new UpdateGameSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession} UpdateGameSession instance
                         */
                        UpdateGameSession.create = function create(properties) {
                            return new UpdateGameSession(properties);
                        };

                        /**
                         * Encodes the specified UpdateGameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession} message UpdateGameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateGameSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSession != null && message.hasOwnProperty("gameSession"))
                                $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.encode(message.gameSession, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.updateReason != null && message.hasOwnProperty("updateReason"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.updateReason);
                            if (message.backfillTicketId != null && message.hasOwnProperty("backfillTicketId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.backfillTicketId);
                            return writer;
                        };

                        /**
                         * Encodes the specified UpdateGameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession} message UpdateGameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateGameSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an UpdateGameSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession} UpdateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateGameSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.updateReason = reader.string();
                                    break;
                                case 3:
                                    message.backfillTicketId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an UpdateGameSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession} UpdateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateGameSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an UpdateGameSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UpdateGameSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSession != null && message.hasOwnProperty("gameSession")) {
                                var error = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify(message.gameSession);
                                if (error)
                                    return "gameSession." + error;
                            }
                            if (message.updateReason != null && message.hasOwnProperty("updateReason"))
                                if (!$util.isString(message.updateReason))
                                    return "updateReason: string expected";
                            if (message.backfillTicketId != null && message.hasOwnProperty("backfillTicketId"))
                                if (!$util.isString(message.backfillTicketId))
                                    return "backfillTicketId: string expected";
                            return null;
                        };

                        /**
                         * Creates an UpdateGameSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession} UpdateGameSession
                         */
                        UpdateGameSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession();
                            if (object.gameSession != null) {
                                if (typeof object.gameSession !== "object")
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession.gameSession: object expected");
                                message.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.fromObject(object.gameSession);
                            }
                            if (object.updateReason != null)
                                message.updateReason = String(object.updateReason);
                            if (object.backfillTicketId != null)
                                message.backfillTicketId = String(object.backfillTicketId);
                            return message;
                        };

                        /**
                         * Creates a plain object from an UpdateGameSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession} message UpdateGameSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UpdateGameSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.gameSession = null;
                                object.updateReason = "";
                                object.backfillTicketId = "";
                            }
                            if (message.gameSession != null && message.hasOwnProperty("gameSession"))
                                object.gameSession = $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession.toObject(message.gameSession, options);
                            if (message.updateReason != null && message.hasOwnProperty("updateReason"))
                                object.updateReason = message.updateReason;
                            if (message.backfillTicketId != null && message.hasOwnProperty("backfillTicketId"))
                                object.backfillTicketId = message.backfillTicketId;
                            return object;
                        };

                        /**
                         * Converts this UpdateGameSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UpdateGameSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return UpdateGameSession;
                    })();

                    pbuffer.GetInstanceCertificateResponse = (function() {

                        /**
                         * Properties of a GetInstanceCertificateResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGetInstanceCertificateResponse
                         * @property {string|null} [certificatePath] GetInstanceCertificateResponse certificatePath
                         * @property {string|null} [certificateChainPath] GetInstanceCertificateResponse certificateChainPath
                         * @property {string|null} [privateKeyPath] GetInstanceCertificateResponse privateKeyPath
                         * @property {string|null} [hostname] GetInstanceCertificateResponse hostname
                         */

                        /**
                         * Constructs a new GetInstanceCertificateResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GetInstanceCertificateResponse.
                         * @implements IGetInstanceCertificateResponse
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse=} [properties] Properties to set
                         */
                        function GetInstanceCertificateResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetInstanceCertificateResponse certificatePath.
                         * @member {string} certificatePath
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @instance
                         */
                        GetInstanceCertificateResponse.prototype.certificatePath = "";

                        /**
                         * GetInstanceCertificateResponse certificateChainPath.
                         * @member {string} certificateChainPath
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @instance
                         */
                        GetInstanceCertificateResponse.prototype.certificateChainPath = "";

                        /**
                         * GetInstanceCertificateResponse privateKeyPath.
                         * @member {string} privateKeyPath
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @instance
                         */
                        GetInstanceCertificateResponse.prototype.privateKeyPath = "";

                        /**
                         * GetInstanceCertificateResponse hostname.
                         * @member {string} hostname
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @instance
                         */
                        GetInstanceCertificateResponse.prototype.hostname = "";

                        /**
                         * Creates a new GetInstanceCertificateResponse instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse} GetInstanceCertificateResponse instance
                         */
                        GetInstanceCertificateResponse.create = function create(properties) {
                            return new GetInstanceCertificateResponse(properties);
                        };

                        /**
                         * Encodes the specified GetInstanceCertificateResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse} message GetInstanceCertificateResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetInstanceCertificateResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.certificatePath != null && message.hasOwnProperty("certificatePath"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.certificatePath);
                            if (message.certificateChainPath != null && message.hasOwnProperty("certificateChainPath"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.certificateChainPath);
                            if (message.privateKeyPath != null && message.hasOwnProperty("privateKeyPath"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.privateKeyPath);
                            if (message.hostname != null && message.hasOwnProperty("hostname"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostname);
                            return writer;
                        };

                        /**
                         * Encodes the specified GetInstanceCertificateResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse} message GetInstanceCertificateResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetInstanceCertificateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GetInstanceCertificateResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse} GetInstanceCertificateResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetInstanceCertificateResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.certificatePath = reader.string();
                                    break;
                                case 2:
                                    message.certificateChainPath = reader.string();
                                    break;
                                case 3:
                                    message.privateKeyPath = reader.string();
                                    break;
                                case 4:
                                    message.hostname = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GetInstanceCertificateResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse} GetInstanceCertificateResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetInstanceCertificateResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GetInstanceCertificateResponse message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetInstanceCertificateResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.certificatePath != null && message.hasOwnProperty("certificatePath"))
                                if (!$util.isString(message.certificatePath))
                                    return "certificatePath: string expected";
                            if (message.certificateChainPath != null && message.hasOwnProperty("certificateChainPath"))
                                if (!$util.isString(message.certificateChainPath))
                                    return "certificateChainPath: string expected";
                            if (message.privateKeyPath != null && message.hasOwnProperty("privateKeyPath"))
                                if (!$util.isString(message.privateKeyPath))
                                    return "privateKeyPath: string expected";
                            if (message.hostname != null && message.hasOwnProperty("hostname"))
                                if (!$util.isString(message.hostname))
                                    return "hostname: string expected";
                            return null;
                        };

                        /**
                         * Creates a GetInstanceCertificateResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse} GetInstanceCertificateResponse
                         */
                        GetInstanceCertificateResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse();
                            if (object.certificatePath != null)
                                message.certificatePath = String(object.certificatePath);
                            if (object.certificateChainPath != null)
                                message.certificateChainPath = String(object.certificateChainPath);
                            if (object.privateKeyPath != null)
                                message.privateKeyPath = String(object.privateKeyPath);
                            if (object.hostname != null)
                                message.hostname = String(object.hostname);
                            return message;
                        };

                        /**
                         * Creates a plain object from a GetInstanceCertificateResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse} message GetInstanceCertificateResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetInstanceCertificateResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.certificatePath = "";
                                object.certificateChainPath = "";
                                object.privateKeyPath = "";
                                object.hostname = "";
                            }
                            if (message.certificatePath != null && message.hasOwnProperty("certificatePath"))
                                object.certificatePath = message.certificatePath;
                            if (message.certificateChainPath != null && message.hasOwnProperty("certificateChainPath"))
                                object.certificateChainPath = message.certificateChainPath;
                            if (message.privateKeyPath != null && message.hasOwnProperty("privateKeyPath"))
                                object.privateKeyPath = message.privateKeyPath;
                            if (message.hostname != null && message.hasOwnProperty("hostname"))
                                object.hostname = message.hostname;
                            return object;
                        };

                        /**
                         * Converts this GetInstanceCertificateResponse to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetInstanceCertificateResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GetInstanceCertificateResponse;
                    })();

                    pbuffer.BackfillMatchmakingResponse = (function() {

                        /**
                         * Properties of a BackfillMatchmakingResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IBackfillMatchmakingResponse
                         * @property {string|null} [ticketId] BackfillMatchmakingResponse ticketId
                         */

                        /**
                         * Constructs a new BackfillMatchmakingResponse.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a BackfillMatchmakingResponse.
                         * @implements IBackfillMatchmakingResponse
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse=} [properties] Properties to set
                         */
                        function BackfillMatchmakingResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BackfillMatchmakingResponse ticketId.
                         * @member {string} ticketId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @instance
                         */
                        BackfillMatchmakingResponse.prototype.ticketId = "";

                        /**
                         * Creates a new BackfillMatchmakingResponse instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse} BackfillMatchmakingResponse instance
                         */
                        BackfillMatchmakingResponse.create = function create(properties) {
                            return new BackfillMatchmakingResponse(properties);
                        };

                        /**
                         * Encodes the specified BackfillMatchmakingResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse} message BackfillMatchmakingResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackfillMatchmakingResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticketId);
                            return writer;
                        };

                        /**
                         * Encodes the specified BackfillMatchmakingResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse} message BackfillMatchmakingResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BackfillMatchmakingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a BackfillMatchmakingResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse} BackfillMatchmakingResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackfillMatchmakingResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.ticketId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a BackfillMatchmakingResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse} BackfillMatchmakingResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BackfillMatchmakingResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a BackfillMatchmakingResponse message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BackfillMatchmakingResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                if (!$util.isString(message.ticketId))
                                    return "ticketId: string expected";
                            return null;
                        };

                        /**
                         * Creates a BackfillMatchmakingResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse} BackfillMatchmakingResponse
                         */
                        BackfillMatchmakingResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse();
                            if (object.ticketId != null)
                                message.ticketId = String(object.ticketId);
                            return message;
                        };

                        /**
                         * Creates a plain object from a BackfillMatchmakingResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse} message BackfillMatchmakingResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BackfillMatchmakingResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.ticketId = "";
                            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                                object.ticketId = message.ticketId;
                            return object;
                        };

                        /**
                         * Converts this BackfillMatchmakingResponse to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BackfillMatchmakingResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return BackfillMatchmakingResponse;
                    })();

                    pbuffer.Response = (function() {

                        /**
                         * Properties of a Response.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IResponse
                         * @property {com.amazon.whitewater.auxproxy.pbuffer.Response.Status|null} [status] Response status
                         * @property {string|null} [errorMessage] Response errorMessage
                         */

                        /**
                         * Constructs a new Response.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a Response.
                         * @implements IResponse
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IResponse=} [properties] Properties to set
                         */
                        function Response(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Response status.
                         * @member {com.amazon.whitewater.auxproxy.pbuffer.Response.Status} status
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @instance
                         */
                        Response.prototype.status = 0;

                        /**
                         * Response errorMessage.
                         * @member {string} errorMessage
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @instance
                         */
                        Response.prototype.errorMessage = "";

                        /**
                         * Creates a new Response instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IResponse=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Response} Response instance
                         */
                        Response.create = function create(properties) {
                            return new Response(properties);
                        };

                        /**
                         * Encodes the specified Response message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Response.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IResponse} message Response message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Response.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.status != null && message.hasOwnProperty("status"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
                            return writer;
                        };

                        /**
                         * Encodes the specified Response message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Response.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IResponse} message Response message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Response.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Response message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Response} Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Response.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.Response();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.status = reader.int32();
                                    break;
                                case 2:
                                    message.errorMessage = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Response message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Response} Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Response.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Response message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Response.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.status != null && message.hasOwnProperty("status"))
                                switch (message.status) {
                                default:
                                    return "status: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                if (!$util.isString(message.errorMessage))
                                    return "errorMessage: string expected";
                            return null;
                        };

                        /**
                         * Creates a Response message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Response} Response
                         */
                        Response.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.Response)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.Response();
                            switch (object.status) {
                            case "OK":
                            case 0:
                                message.status = 0;
                                break;
                            case "ERROR":
                            case 1:
                                message.status = 1;
                                break;
                            }
                            if (object.errorMessage != null)
                                message.errorMessage = String(object.errorMessage);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Response message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.Response} message Response
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Response.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.status = options.enums === String ? "OK" : 0;
                                object.errorMessage = "";
                            }
                            if (message.status != null && message.hasOwnProperty("status"))
                                object.status = options.enums === String ? $root.com.amazon.whitewater.auxproxy.pbuffer.Response.Status[message.status] : message.status;
                            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                                object.errorMessage = message.errorMessage;
                            return object;
                        };

                        /**
                         * Converts this Response to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Response
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Response.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Status enum.
                         * @name com.amazon.whitewater.auxproxy.pbuffer.Response.Status
                         * @enum {string}
                         * @property {number} OK=0 OK value
                         * @property {number} ERROR=1 ERROR value
                         */
                        Response.Status = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "OK"] = 0;
                            values[valuesById[1] = "ERROR"] = 1;
                            return values;
                        })();

                        return Response;
                    })();

                    pbuffer.GameSession = (function() {

                        /**
                         * Properties of a GameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGameSession
                         * @property {string|null} [gameSessionId] GameSession gameSessionId
                         * @property {string|null} [fleetId] GameSession fleetId
                         * @property {string|null} [name] GameSession name
                         * @property {number|null} [maxPlayers] GameSession maxPlayers
                         * @property {boolean|null} [joinable] GameSession joinable
                         * @property {Array.<com.amazon.whitewater.auxproxy.pbuffer.IGameProperty>|null} [gameProperties] GameSession gameProperties
                         * @property {string|null} [ipAddress] GameSession ipAddress
                         * @property {number|null} [port] GameSession port
                         * @property {string|null} [gameSessionData] GameSession gameSessionData
                         * @property {string|null} [matchmakerData] GameSession matchmakerData
                         * @property {string|null} [dnsName] GameSession dnsName
                         */

                        /**
                         * Constructs a new GameSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GameSession.
                         * @implements IGameSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSession=} [properties] Properties to set
                         */
                        function GameSession(properties) {
                            this.gameProperties = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameSession gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.gameSessionId = "";

                        /**
                         * GameSession fleetId.
                         * @member {string} fleetId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.fleetId = "";

                        /**
                         * GameSession name.
                         * @member {string} name
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.name = "";

                        /**
                         * GameSession maxPlayers.
                         * @member {number} maxPlayers
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.maxPlayers = 0;

                        /**
                         * GameSession joinable.
                         * @member {boolean} joinable
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.joinable = false;

                        /**
                         * GameSession gameProperties.
                         * @member {Array.<com.amazon.whitewater.auxproxy.pbuffer.IGameProperty>} gameProperties
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.gameProperties = $util.emptyArray;

                        /**
                         * GameSession ipAddress.
                         * @member {string} ipAddress
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.ipAddress = "";

                        /**
                         * GameSession port.
                         * @member {number} port
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.port = 0;

                        /**
                         * GameSession gameSessionData.
                         * @member {string} gameSessionData
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.gameSessionData = "";

                        /**
                         * GameSession matchmakerData.
                         * @member {string} matchmakerData
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.matchmakerData = "";

                        /**
                         * GameSession dnsName.
                         * @member {string} dnsName
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         */
                        GameSession.prototype.dnsName = "";

                        /**
                         * Creates a new GameSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSession} GameSession instance
                         */
                        GameSession.create = function create(properties) {
                            return new GameSession(properties);
                        };

                        /**
                         * Encodes the specified GameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSession} message GameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameSessionId);
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fleetId);
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxPlayers);
                            if (message.joinable != null && message.hasOwnProperty("joinable"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.joinable);
                            if (message.gameProperties != null && message.gameProperties.length)
                                for (var i = 0; i < message.gameProperties.length; ++i)
                                    $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty.encode(message.gameProperties[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ipAddress);
                            if (message.port != null && message.hasOwnProperty("port"))
                                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.port);
                            if (message.gameSessionData != null && message.hasOwnProperty("gameSessionData"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.gameSessionData);
                            if (message.matchmakerData != null && message.hasOwnProperty("matchmakerData"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.matchmakerData);
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.dnsName);
                            return writer;
                        };

                        /**
                         * Encodes the specified GameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameSession} message GameSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GameSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSession} GameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 2:
                                    message.fleetId = reader.string();
                                    break;
                                case 3:
                                    message.name = reader.string();
                                    break;
                                case 4:
                                    message.maxPlayers = reader.int32();
                                    break;
                                case 5:
                                    message.joinable = reader.bool();
                                    break;
                                case 6:
                                    if (!(message.gameProperties && message.gameProperties.length))
                                        message.gameProperties = [];
                                    message.gameProperties.push($root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty.decode(reader, reader.uint32()));
                                    break;
                                case 7:
                                    message.ipAddress = reader.string();
                                    break;
                                case 8:
                                    message.port = reader.int32();
                                    break;
                                case 9:
                                    message.gameSessionData = reader.string();
                                    break;
                                case 10:
                                    message.matchmakerData = reader.string();
                                    break;
                                case 11:
                                    message.dnsName = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GameSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSession} GameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GameSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GameSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                if (!$util.isString(message.fleetId))
                                    return "fleetId: string expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                if (!$util.isInteger(message.maxPlayers))
                                    return "maxPlayers: integer expected";
                            if (message.joinable != null && message.hasOwnProperty("joinable"))
                                if (typeof message.joinable !== "boolean")
                                    return "joinable: boolean expected";
                            if (message.gameProperties != null && message.hasOwnProperty("gameProperties")) {
                                if (!Array.isArray(message.gameProperties))
                                    return "gameProperties: array expected";
                                for (var i = 0; i < message.gameProperties.length; ++i) {
                                    var error = $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty.verify(message.gameProperties[i]);
                                    if (error)
                                        return "gameProperties." + error;
                                }
                            }
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                if (!$util.isString(message.ipAddress))
                                    return "ipAddress: string expected";
                            if (message.port != null && message.hasOwnProperty("port"))
                                if (!$util.isInteger(message.port))
                                    return "port: integer expected";
                            if (message.gameSessionData != null && message.hasOwnProperty("gameSessionData"))
                                if (!$util.isString(message.gameSessionData))
                                    return "gameSessionData: string expected";
                            if (message.matchmakerData != null && message.hasOwnProperty("matchmakerData"))
                                if (!$util.isString(message.matchmakerData))
                                    return "matchmakerData: string expected";
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                if (!$util.isString(message.dnsName))
                                    return "dnsName: string expected";
                            return null;
                        };

                        /**
                         * Creates a GameSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameSession} GameSession
                         */
                        GameSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameSession();
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.fleetId != null)
                                message.fleetId = String(object.fleetId);
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.maxPlayers != null)
                                message.maxPlayers = object.maxPlayers | 0;
                            if (object.joinable != null)
                                message.joinable = Boolean(object.joinable);
                            if (object.gameProperties) {
                                if (!Array.isArray(object.gameProperties))
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.GameSession.gameProperties: array expected");
                                message.gameProperties = [];
                                for (var i = 0; i < object.gameProperties.length; ++i) {
                                    if (typeof object.gameProperties[i] !== "object")
                                        throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.GameSession.gameProperties: object expected");
                                    message.gameProperties[i] = $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty.fromObject(object.gameProperties[i]);
                                }
                            }
                            if (object.ipAddress != null)
                                message.ipAddress = String(object.ipAddress);
                            if (object.port != null)
                                message.port = object.port | 0;
                            if (object.gameSessionData != null)
                                message.gameSessionData = String(object.gameSessionData);
                            if (object.matchmakerData != null)
                                message.matchmakerData = String(object.matchmakerData);
                            if (object.dnsName != null)
                                message.dnsName = String(object.dnsName);
                            return message;
                        };

                        /**
                         * Creates a plain object from a GameSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GameSession} message GameSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GameSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.gameProperties = [];
                            if (options.defaults) {
                                object.gameSessionId = "";
                                object.fleetId = "";
                                object.name = "";
                                object.maxPlayers = 0;
                                object.joinable = false;
                                object.ipAddress = "";
                                object.port = 0;
                                object.gameSessionData = "";
                                object.matchmakerData = "";
                                object.dnsName = "";
                            }
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                object.fleetId = message.fleetId;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                                object.maxPlayers = message.maxPlayers;
                            if (message.joinable != null && message.hasOwnProperty("joinable"))
                                object.joinable = message.joinable;
                            if (message.gameProperties && message.gameProperties.length) {
                                object.gameProperties = [];
                                for (var j = 0; j < message.gameProperties.length; ++j)
                                    object.gameProperties[j] = $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty.toObject(message.gameProperties[j], options);
                            }
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                object.ipAddress = message.ipAddress;
                            if (message.port != null && message.hasOwnProperty("port"))
                                object.port = message.port;
                            if (message.gameSessionData != null && message.hasOwnProperty("gameSessionData"))
                                object.gameSessionData = message.gameSessionData;
                            if (message.matchmakerData != null && message.hasOwnProperty("matchmakerData"))
                                object.matchmakerData = message.matchmakerData;
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                object.dnsName = message.dnsName;
                            return object;
                        };

                        /**
                         * Converts this GameSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GameSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GameSession;
                    })();

                    pbuffer.GameProperty = (function() {

                        /**
                         * Properties of a GameProperty.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IGameProperty
                         * @property {string|null} [key] GameProperty key
                         * @property {string|null} [value] GameProperty value
                         */

                        /**
                         * Constructs a new GameProperty.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a GameProperty.
                         * @implements IGameProperty
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameProperty=} [properties] Properties to set
                         */
                        function GameProperty(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameProperty key.
                         * @member {string} key
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @instance
                         */
                        GameProperty.prototype.key = "";

                        /**
                         * GameProperty value.
                         * @member {string} value
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @instance
                         */
                        GameProperty.prototype.value = "";

                        /**
                         * Creates a new GameProperty instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameProperty=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameProperty} GameProperty instance
                         */
                        GameProperty.create = function create(properties) {
                            return new GameProperty(properties);
                        };

                        /**
                         * Encodes the specified GameProperty message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameProperty.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameProperty} message GameProperty message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameProperty.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.key != null && message.hasOwnProperty("key"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                            if (message.value != null && message.hasOwnProperty("value"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                            return writer;
                        };

                        /**
                         * Encodes the specified GameProperty message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameProperty.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IGameProperty} message GameProperty message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameProperty.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GameProperty message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameProperty} GameProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameProperty.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.key = reader.string();
                                    break;
                                case 2:
                                    message.value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GameProperty message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameProperty} GameProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameProperty.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GameProperty message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GameProperty.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.key != null && message.hasOwnProperty("key"))
                                if (!$util.isString(message.key))
                                    return "key: string expected";
                            if (message.value != null && message.hasOwnProperty("value"))
                                if (!$util.isString(message.value))
                                    return "value: string expected";
                            return null;
                        };

                        /**
                         * Creates a GameProperty message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.GameProperty} GameProperty
                         */
                        GameProperty.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.GameProperty();
                            if (object.key != null)
                                message.key = String(object.key);
                            if (object.value != null)
                                message.value = String(object.value);
                            return message;
                        };

                        /**
                         * Creates a plain object from a GameProperty message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.GameProperty} message GameProperty
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GameProperty.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.key = "";
                                object.value = "";
                            }
                            if (message.key != null && message.hasOwnProperty("key"))
                                object.key = message.key;
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = message.value;
                            return object;
                        };

                        /**
                         * Converts this GameProperty to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.GameProperty
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GameProperty.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GameProperty;
                    })();

                    pbuffer.PlayerSession = (function() {

                        /**
                         * Properties of a PlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IPlayerSession
                         * @property {string|null} [playerSessionId] PlayerSession playerSessionId
                         * @property {string|null} [playerId] PlayerSession playerId
                         * @property {string|null} [gameSessionId] PlayerSession gameSessionId
                         * @property {string|null} [fleetId] PlayerSession fleetId
                         * @property {string|null} [ipAddress] PlayerSession ipAddress
                         * @property {string|null} [status] PlayerSession status
                         * @property {Long|null} [creationTime] PlayerSession creationTime
                         * @property {Long|null} [terminationTime] PlayerSession terminationTime
                         * @property {number|null} [port] PlayerSession port
                         * @property {string|null} [playerData] PlayerSession playerData
                         * @property {string|null} [dnsName] PlayerSession dnsName
                         */

                        /**
                         * Constructs a new PlayerSession.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a PlayerSession.
                         * @implements IPlayerSession
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession=} [properties] Properties to set
                         */
                        function PlayerSession(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PlayerSession playerSessionId.
                         * @member {string} playerSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.playerSessionId = "";

                        /**
                         * PlayerSession playerId.
                         * @member {string} playerId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.playerId = "";

                        /**
                         * PlayerSession gameSessionId.
                         * @member {string} gameSessionId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.gameSessionId = "";

                        /**
                         * PlayerSession fleetId.
                         * @member {string} fleetId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.fleetId = "";

                        /**
                         * PlayerSession ipAddress.
                         * @member {string} ipAddress
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.ipAddress = "";

                        /**
                         * PlayerSession status.
                         * @member {string} status
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.status = "";

                        /**
                         * PlayerSession creationTime.
                         * @member {Long} creationTime
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.creationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * PlayerSession terminationTime.
                         * @member {Long} terminationTime
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.terminationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * PlayerSession port.
                         * @member {number} port
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.port = 0;

                        /**
                         * PlayerSession playerData.
                         * @member {string} playerData
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.playerData = "";

                        /**
                         * PlayerSession dnsName.
                         * @member {string} dnsName
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         */
                        PlayerSession.prototype.dnsName = "";

                        /**
                         * Creates a new PlayerSession instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.PlayerSession} PlayerSession instance
                         */
                        PlayerSession.create = function create(properties) {
                            return new PlayerSession(properties);
                        };

                        /**
                         * Encodes the specified PlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession} message PlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerSession.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerSessionId);
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameSessionId);
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fleetId);
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ipAddress);
                            if (message.status != null && message.hasOwnProperty("status"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.status);
                            if (message.creationTime != null && message.hasOwnProperty("creationTime"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.creationTime);
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.terminationTime);
                            if (message.port != null && message.hasOwnProperty("port"))
                                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.port);
                            if (message.playerData != null && message.hasOwnProperty("playerData"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.playerData);
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.dnsName);
                            return writer;
                        };

                        /**
                         * Encodes the specified PlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession} message PlayerSession message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerSession.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a PlayerSession message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.PlayerSession} PlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerSession.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.playerSessionId = reader.string();
                                    break;
                                case 2:
                                    message.playerId = reader.string();
                                    break;
                                case 3:
                                    message.gameSessionId = reader.string();
                                    break;
                                case 4:
                                    message.fleetId = reader.string();
                                    break;
                                case 5:
                                    message.ipAddress = reader.string();
                                    break;
                                case 6:
                                    message.status = reader.string();
                                    break;
                                case 7:
                                    message.creationTime = reader.int64();
                                    break;
                                case 8:
                                    message.terminationTime = reader.int64();
                                    break;
                                case 9:
                                    message.port = reader.int32();
                                    break;
                                case 10:
                                    message.playerData = reader.string();
                                    break;
                                case 11:
                                    message.dnsName = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a PlayerSession message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.PlayerSession} PlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerSession.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a PlayerSession message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerSession.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                if (!$util.isString(message.playerSessionId))
                                    return "playerSessionId: string expected";
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                if (!$util.isString(message.playerId))
                                    return "playerId: string expected";
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                if (!$util.isString(message.gameSessionId))
                                    return "gameSessionId: string expected";
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                if (!$util.isString(message.fleetId))
                                    return "fleetId: string expected";
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                if (!$util.isString(message.ipAddress))
                                    return "ipAddress: string expected";
                            if (message.status != null && message.hasOwnProperty("status"))
                                if (!$util.isString(message.status))
                                    return "status: string expected";
                            if (message.creationTime != null && message.hasOwnProperty("creationTime"))
                                if (!$util.isInteger(message.creationTime) && !(message.creationTime && $util.isInteger(message.creationTime.low) && $util.isInteger(message.creationTime.high)))
                                    return "creationTime: integer|Long expected";
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                if (!$util.isInteger(message.terminationTime) && !(message.terminationTime && $util.isInteger(message.terminationTime.low) && $util.isInteger(message.terminationTime.high)))
                                    return "terminationTime: integer|Long expected";
                            if (message.port != null && message.hasOwnProperty("port"))
                                if (!$util.isInteger(message.port))
                                    return "port: integer expected";
                            if (message.playerData != null && message.hasOwnProperty("playerData"))
                                if (!$util.isString(message.playerData))
                                    return "playerData: string expected";
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                if (!$util.isString(message.dnsName))
                                    return "dnsName: string expected";
                            return null;
                        };

                        /**
                         * Creates a PlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.PlayerSession} PlayerSession
                         */
                        PlayerSession.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.PlayerSession();
                            if (object.playerSessionId != null)
                                message.playerSessionId = String(object.playerSessionId);
                            if (object.playerId != null)
                                message.playerId = String(object.playerId);
                            if (object.gameSessionId != null)
                                message.gameSessionId = String(object.gameSessionId);
                            if (object.fleetId != null)
                                message.fleetId = String(object.fleetId);
                            if (object.ipAddress != null)
                                message.ipAddress = String(object.ipAddress);
                            if (object.status != null)
                                message.status = String(object.status);
                            if (object.creationTime != null)
                                if ($util.Long)
                                    (message.creationTime = $util.Long.fromValue(object.creationTime)).unsigned = false;
                                else if (typeof object.creationTime === "string")
                                    message.creationTime = parseInt(object.creationTime, 10);
                                else if (typeof object.creationTime === "number")
                                    message.creationTime = object.creationTime;
                                else if (typeof object.creationTime === "object")
                                    message.creationTime = new $util.LongBits(object.creationTime.low >>> 0, object.creationTime.high >>> 0).toNumber();
                            if (object.terminationTime != null)
                                if ($util.Long)
                                    (message.terminationTime = $util.Long.fromValue(object.terminationTime)).unsigned = false;
                                else if (typeof object.terminationTime === "string")
                                    message.terminationTime = parseInt(object.terminationTime, 10);
                                else if (typeof object.terminationTime === "number")
                                    message.terminationTime = object.terminationTime;
                                else if (typeof object.terminationTime === "object")
                                    message.terminationTime = new $util.LongBits(object.terminationTime.low >>> 0, object.terminationTime.high >>> 0).toNumber();
                            if (object.port != null)
                                message.port = object.port | 0;
                            if (object.playerData != null)
                                message.playerData = String(object.playerData);
                            if (object.dnsName != null)
                                message.dnsName = String(object.dnsName);
                            return message;
                        };

                        /**
                         * Creates a plain object from a PlayerSession message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.PlayerSession} message PlayerSession
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerSession.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.playerSessionId = "";
                                object.playerId = "";
                                object.gameSessionId = "";
                                object.fleetId = "";
                                object.ipAddress = "";
                                object.status = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.creationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.creationTime = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.terminationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.terminationTime = options.longs === String ? "0" : 0;
                                object.port = 0;
                                object.playerData = "";
                                object.dnsName = "";
                            }
                            if (message.playerSessionId != null && message.hasOwnProperty("playerSessionId"))
                                object.playerSessionId = message.playerSessionId;
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                object.playerId = message.playerId;
                            if (message.gameSessionId != null && message.hasOwnProperty("gameSessionId"))
                                object.gameSessionId = message.gameSessionId;
                            if (message.fleetId != null && message.hasOwnProperty("fleetId"))
                                object.fleetId = message.fleetId;
                            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                                object.ipAddress = message.ipAddress;
                            if (message.status != null && message.hasOwnProperty("status"))
                                object.status = message.status;
                            if (message.creationTime != null && message.hasOwnProperty("creationTime"))
                                if (typeof message.creationTime === "number")
                                    object.creationTime = options.longs === String ? String(message.creationTime) : message.creationTime;
                                else
                                    object.creationTime = options.longs === String ? $util.Long.prototype.toString.call(message.creationTime) : options.longs === Number ? new $util.LongBits(message.creationTime.low >>> 0, message.creationTime.high >>> 0).toNumber() : message.creationTime;
                            if (message.terminationTime != null && message.hasOwnProperty("terminationTime"))
                                if (typeof message.terminationTime === "number")
                                    object.terminationTime = options.longs === String ? String(message.terminationTime) : message.terminationTime;
                                else
                                    object.terminationTime = options.longs === String ? $util.Long.prototype.toString.call(message.terminationTime) : options.longs === Number ? new $util.LongBits(message.terminationTime.low >>> 0, message.terminationTime.high >>> 0).toNumber() : message.terminationTime;
                            if (message.port != null && message.hasOwnProperty("port"))
                                object.port = message.port;
                            if (message.playerData != null && message.hasOwnProperty("playerData"))
                                object.playerData = message.playerData;
                            if (message.dnsName != null && message.hasOwnProperty("dnsName"))
                                object.dnsName = message.dnsName;
                            return object;
                        };

                        /**
                         * Converts this PlayerSession to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.PlayerSession
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerSession.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return PlayerSession;
                    })();

                    pbuffer.Player = (function() {

                        /**
                         * Properties of a Player.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IPlayer
                         * @property {string|null} [playerId] Player playerId
                         * @property {Object.<string,com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue>|null} [playerAttributes] Player playerAttributes
                         * @property {string|null} [team] Player team
                         * @property {Object.<string,number>|null} [latencyInMs] Player latencyInMs
                         */

                        /**
                         * Constructs a new Player.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents a Player.
                         * @implements IPlayer
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayer=} [properties] Properties to set
                         */
                        function Player(properties) {
                            this.playerAttributes = {};
                            this.latencyInMs = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Player playerId.
                         * @member {string} playerId
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @instance
                         */
                        Player.prototype.playerId = "";

                        /**
                         * Player playerAttributes.
                         * @member {Object.<string,com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue>} playerAttributes
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @instance
                         */
                        Player.prototype.playerAttributes = $util.emptyObject;

                        /**
                         * Player team.
                         * @member {string} team
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @instance
                         */
                        Player.prototype.team = "";

                        /**
                         * Player latencyInMs.
                         * @member {Object.<string,number>} latencyInMs
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @instance
                         */
                        Player.prototype.latencyInMs = $util.emptyObject;

                        /**
                         * Creates a new Player instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayer=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Player} Player instance
                         */
                        Player.create = function create(properties) {
                            return new Player(properties);
                        };

                        /**
                         * Encodes the specified Player message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Player.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayer} message Player message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Player.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
                            if (message.playerAttributes != null && message.hasOwnProperty("playerAttributes"))
                                for (var keys = Object.keys(message.playerAttributes), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.encode(message.playerAttributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            if (message.team != null && message.hasOwnProperty("team"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.team);
                            if (message.latencyInMs != null && message.hasOwnProperty("latencyInMs"))
                                for (var keys = Object.keys(message.latencyInMs), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.latencyInMs[keys[i]]).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Player message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Player.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IPlayer} message Player message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Player.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Player message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Player} Player
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Player.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.Player(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.playerId = reader.string();
                                    break;
                                case 2:
                                    reader.skip().pos++;
                                    if (message.playerAttributes === $util.emptyObject)
                                        message.playerAttributes = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.playerAttributes[key] = $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.team = reader.string();
                                    break;
                                case 4:
                                    reader.skip().pos++;
                                    if (message.latencyInMs === $util.emptyObject)
                                        message.latencyInMs = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.latencyInMs[key] = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Player message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Player} Player
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Player.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Player message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Player.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                if (!$util.isString(message.playerId))
                                    return "playerId: string expected";
                            if (message.playerAttributes != null && message.hasOwnProperty("playerAttributes")) {
                                if (!$util.isObject(message.playerAttributes))
                                    return "playerAttributes: object expected";
                                var key = Object.keys(message.playerAttributes);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.verify(message.playerAttributes[key[i]]);
                                    if (error)
                                        return "playerAttributes." + error;
                                }
                            }
                            if (message.team != null && message.hasOwnProperty("team"))
                                if (!$util.isString(message.team))
                                    return "team: string expected";
                            if (message.latencyInMs != null && message.hasOwnProperty("latencyInMs")) {
                                if (!$util.isObject(message.latencyInMs))
                                    return "latencyInMs: object expected";
                                var key = Object.keys(message.latencyInMs);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isInteger(message.latencyInMs[key[i]]))
                                        return "latencyInMs: integer{k:string} expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Player message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.Player} Player
                         */
                        Player.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.Player)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.Player();
                            if (object.playerId != null)
                                message.playerId = String(object.playerId);
                            if (object.playerAttributes) {
                                if (typeof object.playerAttributes !== "object")
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.Player.playerAttributes: object expected");
                                message.playerAttributes = {};
                                for (var keys = Object.keys(object.playerAttributes), i = 0; i < keys.length; ++i) {
                                    if (typeof object.playerAttributes[keys[i]] !== "object")
                                        throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.Player.playerAttributes: object expected");
                                    message.playerAttributes[keys[i]] = $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.fromObject(object.playerAttributes[keys[i]]);
                                }
                            }
                            if (object.team != null)
                                message.team = String(object.team);
                            if (object.latencyInMs) {
                                if (typeof object.latencyInMs !== "object")
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.Player.latencyInMs: object expected");
                                message.latencyInMs = {};
                                for (var keys = Object.keys(object.latencyInMs), i = 0; i < keys.length; ++i)
                                    message.latencyInMs[keys[i]] = object.latencyInMs[keys[i]] | 0;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Player message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.Player} message Player
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Player.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults) {
                                object.playerAttributes = {};
                                object.latencyInMs = {};
                            }
                            if (options.defaults) {
                                object.playerId = "";
                                object.team = "";
                            }
                            if (message.playerId != null && message.hasOwnProperty("playerId"))
                                object.playerId = message.playerId;
                            var keys2;
                            if (message.playerAttributes && (keys2 = Object.keys(message.playerAttributes)).length) {
                                object.playerAttributes = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.playerAttributes[keys2[j]] = $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.toObject(message.playerAttributes[keys2[j]], options);
                            }
                            if (message.team != null && message.hasOwnProperty("team"))
                                object.team = message.team;
                            if (message.latencyInMs && (keys2 = Object.keys(message.latencyInMs)).length) {
                                object.latencyInMs = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.latencyInMs[keys2[j]] = message.latencyInMs[keys2[j]];
                            }
                            return object;
                        };

                        /**
                         * Converts this Player to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.Player
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Player.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Player;
                    })();

                    pbuffer.AttributeValue = (function() {

                        /**
                         * Properties of an AttributeValue.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @interface IAttributeValue
                         * @property {number|null} [type] AttributeValue type
                         * @property {string|null} [S] AttributeValue S
                         * @property {number|null} [N] AttributeValue N
                         * @property {Array.<string>|null} [SL] AttributeValue SL
                         * @property {Object.<string,number>|null} [SDM] AttributeValue SDM
                         */

                        /**
                         * Constructs a new AttributeValue.
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer
                         * @classdesc Represents an AttributeValue.
                         * @implements IAttributeValue
                         * @constructor
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue=} [properties] Properties to set
                         */
                        function AttributeValue(properties) {
                            this.SL = [];
                            this.SDM = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * AttributeValue type.
                         * @member {number} type
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         */
                        AttributeValue.prototype.type = 0;

                        /**
                         * AttributeValue S.
                         * @member {string} S
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         */
                        AttributeValue.prototype.S = "";

                        /**
                         * AttributeValue N.
                         * @member {number} N
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         */
                        AttributeValue.prototype.N = 0;

                        /**
                         * AttributeValue SL.
                         * @member {Array.<string>} SL
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         */
                        AttributeValue.prototype.SL = $util.emptyArray;

                        /**
                         * AttributeValue SDM.
                         * @member {Object.<string,number>} SDM
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         */
                        AttributeValue.prototype.SDM = $util.emptyObject;

                        /**
                         * Creates a new AttributeValue instance using the specified properties.
                         * @function create
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue=} [properties] Properties to set
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AttributeValue} AttributeValue instance
                         */
                        AttributeValue.create = function create(properties) {
                            return new AttributeValue(properties);
                        };

                        /**
                         * Encodes the specified AttributeValue message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.verify|verify} messages.
                         * @function encode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue} message AttributeValue message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AttributeValue.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.type != null && message.hasOwnProperty("type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                            if (message.S != null && message.hasOwnProperty("S"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.S);
                            if (message.N != null && message.hasOwnProperty("N"))
                                writer.uint32(/* id 3, wireType 1 =*/25).double(message.N);
                            if (message.SL != null && message.SL.length)
                                for (var i = 0; i < message.SL.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.SL[i]);
                            if (message.SDM != null && message.hasOwnProperty("SDM"))
                                for (var keys = Object.keys(message.SDM), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.SDM[keys[i]]).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified AttributeValue message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue} message AttributeValue message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AttributeValue.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an AttributeValue message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AttributeValue} AttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AttributeValue.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.type = reader.int32();
                                    break;
                                case 2:
                                    message.S = reader.string();
                                    break;
                                case 3:
                                    message.N = reader.double();
                                    break;
                                case 4:
                                    if (!(message.SL && message.SL.length))
                                        message.SL = [];
                                    message.SL.push(reader.string());
                                    break;
                                case 5:
                                    reader.skip().pos++;
                                    if (message.SDM === $util.emptyObject)
                                        message.SDM = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.SDM[key] = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an AttributeValue message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AttributeValue} AttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AttributeValue.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an AttributeValue message.
                         * @function verify
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AttributeValue.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.type != null && message.hasOwnProperty("type"))
                                if (!$util.isInteger(message.type))
                                    return "type: integer expected";
                            if (message.S != null && message.hasOwnProperty("S"))
                                if (!$util.isString(message.S))
                                    return "S: string expected";
                            if (message.N != null && message.hasOwnProperty("N"))
                                if (typeof message.N !== "number")
                                    return "N: number expected";
                            if (message.SL != null && message.hasOwnProperty("SL")) {
                                if (!Array.isArray(message.SL))
                                    return "SL: array expected";
                                for (var i = 0; i < message.SL.length; ++i)
                                    if (!$util.isString(message.SL[i]))
                                        return "SL: string[] expected";
                            }
                            if (message.SDM != null && message.hasOwnProperty("SDM")) {
                                if (!$util.isObject(message.SDM))
                                    return "SDM: object expected";
                                var key = Object.keys(message.SDM);
                                for (var i = 0; i < key.length; ++i)
                                    if (typeof message.SDM[key[i]] !== "number")
                                        return "SDM: number{k:string} expected";
                            }
                            return null;
                        };

                        /**
                         * Creates an AttributeValue message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.amazon.whitewater.auxproxy.pbuffer.AttributeValue} AttributeValue
                         */
                        AttributeValue.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue)
                                return object;
                            var message = new $root.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue();
                            if (object.type != null)
                                message.type = object.type | 0;
                            if (object.S != null)
                                message.S = String(object.S);
                            if (object.N != null)
                                message.N = Number(object.N);
                            if (object.SL) {
                                if (!Array.isArray(object.SL))
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.SL: array expected");
                                message.SL = [];
                                for (var i = 0; i < object.SL.length; ++i)
                                    message.SL[i] = String(object.SL[i]);
                            }
                            if (object.SDM) {
                                if (typeof object.SDM !== "object")
                                    throw TypeError(".com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.SDM: object expected");
                                message.SDM = {};
                                for (var keys = Object.keys(object.SDM), i = 0; i < keys.length; ++i)
                                    message.SDM[keys[i]] = Number(object.SDM[keys[i]]);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an AttributeValue message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @static
                         * @param {com.amazon.whitewater.auxproxy.pbuffer.AttributeValue} message AttributeValue
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AttributeValue.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.SL = [];
                            if (options.objects || options.defaults)
                                object.SDM = {};
                            if (options.defaults) {
                                object.type = 0;
                                object.S = "";
                                object.N = 0;
                            }
                            if (message.type != null && message.hasOwnProperty("type"))
                                object.type = message.type;
                            if (message.S != null && message.hasOwnProperty("S"))
                                object.S = message.S;
                            if (message.N != null && message.hasOwnProperty("N"))
                                object.N = options.json && !isFinite(message.N) ? String(message.N) : message.N;
                            if (message.SL && message.SL.length) {
                                object.SL = [];
                                for (var j = 0; j < message.SL.length; ++j)
                                    object.SL[j] = message.SL[j];
                            }
                            var keys2;
                            if (message.SDM && (keys2 = Object.keys(message.SDM)).length) {
                                object.SDM = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.SDM[keys2[j]] = options.json && !isFinite(message.SDM[keys2[j]]) ? String(message.SDM[keys2[j]]) : message.SDM[keys2[j]];
                            }
                            return object;
                        };

                        /**
                         * Converts this AttributeValue to JSON.
                         * @function toJSON
                         * @memberof com.amazon.whitewater.auxproxy.pbuffer.AttributeValue
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AttributeValue.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return AttributeValue;
                    })();

                    return pbuffer;
                })();

                return auxproxy;
            })();

            return whitewater;
        })();

        return amazon;
    })();

    return com;
})();

module.exports = $root;
