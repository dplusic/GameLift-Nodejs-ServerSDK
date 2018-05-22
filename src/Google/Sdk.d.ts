import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace amazon. */
    namespace amazon {

        /** Namespace whitewater. */
        namespace whitewater {

            /** Namespace auxproxy. */
            namespace auxproxy {

                /** Namespace pbuffer. */
                namespace pbuffer {

                    /** Properties of a ProcessReady. */
                    interface IProcessReady {

                        /** ProcessReady logPathsToUpload */
                        logPathsToUpload?: (string[]|null);

                        /** ProcessReady port */
                        port?: (number|null);

                        /** ProcessReady maxConcurrentGameSessions */
                        maxConcurrentGameSessions?: (number|null);
                    }

                    /** Represents a ProcessReady. */
                    class ProcessReady implements IProcessReady {

                        /**
                         * Constructs a new ProcessReady.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IProcessReady);

                        /** ProcessReady logPathsToUpload. */
                        public logPathsToUpload: string[];

                        /** ProcessReady port. */
                        public port: number;

                        /** ProcessReady maxConcurrentGameSessions. */
                        public maxConcurrentGameSessions: number;

                        /**
                         * Creates a new ProcessReady instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessReady instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IProcessReady): com.amazon.whitewater.auxproxy.pbuffer.ProcessReady;

                        /**
                         * Encodes the specified ProcessReady message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessReady.verify|verify} messages.
                         * @param message ProcessReady message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IProcessReady, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessReady message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessReady.verify|verify} messages.
                         * @param message ProcessReady message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IProcessReady, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessReady message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessReady
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.ProcessReady;

                        /**
                         * Decodes a ProcessReady message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessReady
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.ProcessReady;

                        /**
                         * Verifies a ProcessReady message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessReady message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessReady
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.ProcessReady;

                        /**
                         * Creates a plain object from a ProcessReady message. Also converts values to other types if specified.
                         * @param message ProcessReady
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.ProcessReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessReady to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ProcessEnding. */
                    interface IProcessEnding {
                    }

                    /** Represents a ProcessEnding. */
                    class ProcessEnding implements IProcessEnding {

                        /**
                         * Constructs a new ProcessEnding.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding);

                        /**
                         * Creates a new ProcessEnding instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessEnding instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding): com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding;

                        /**
                         * Encodes the specified ProcessEnding message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding.verify|verify} messages.
                         * @param message ProcessEnding message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessEnding message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding.verify|verify} messages.
                         * @param message ProcessEnding message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IProcessEnding, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessEnding message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessEnding
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding;

                        /**
                         * Decodes a ProcessEnding message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessEnding
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding;

                        /**
                         * Verifies a ProcessEnding message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessEnding message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessEnding
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding;

                        /**
                         * Creates a plain object from a ProcessEnding message. Also converts values to other types if specified.
                         * @param message ProcessEnding
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessEnding to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GameSessionActivate. */
                    interface IGameSessionActivate {

                        /** GameSessionActivate gameSessionId */
                        gameSessionId?: (string|null);

                        /** GameSessionActivate maxPlayers */
                        maxPlayers?: (number|null);

                        /** GameSessionActivate port */
                        port?: (number|null);
                    }

                    /** Represents a GameSessionActivate. */
                    class GameSessionActivate implements IGameSessionActivate {

                        /**
                         * Constructs a new GameSessionActivate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate);

                        /** GameSessionActivate gameSessionId. */
                        public gameSessionId: string;

                        /** GameSessionActivate maxPlayers. */
                        public maxPlayers: number;

                        /** GameSessionActivate port. */
                        public port: number;

                        /**
                         * Creates a new GameSessionActivate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameSessionActivate instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate): com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate;

                        /**
                         * Encodes the specified GameSessionActivate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate.verify|verify} messages.
                         * @param message GameSessionActivate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GameSessionActivate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate.verify|verify} messages.
                         * @param message GameSessionActivate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionActivate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameSessionActivate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameSessionActivate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate;

                        /**
                         * Decodes a GameSessionActivate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GameSessionActivate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate;

                        /**
                         * Verifies a GameSessionActivate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GameSessionActivate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GameSessionActivate
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate;

                        /**
                         * Creates a plain object from a GameSessionActivate message. Also converts values to other types if specified.
                         * @param message GameSessionActivate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GameSessionActivate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GameSessionTerminate. */
                    interface IGameSessionTerminate {

                        /** GameSessionTerminate gameSessionId */
                        gameSessionId?: (string|null);
                    }

                    /** Represents a GameSessionTerminate. */
                    class GameSessionTerminate implements IGameSessionTerminate {

                        /**
                         * Constructs a new GameSessionTerminate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate);

                        /** GameSessionTerminate gameSessionId. */
                        public gameSessionId: string;

                        /**
                         * Creates a new GameSessionTerminate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameSessionTerminate instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate): com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate;

                        /**
                         * Encodes the specified GameSessionTerminate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate.verify|verify} messages.
                         * @param message GameSessionTerminate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GameSessionTerminate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate.verify|verify} messages.
                         * @param message GameSessionTerminate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSessionTerminate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameSessionTerminate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameSessionTerminate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate;

                        /**
                         * Decodes a GameSessionTerminate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GameSessionTerminate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate;

                        /**
                         * Verifies a GameSessionTerminate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GameSessionTerminate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GameSessionTerminate
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate;

                        /**
                         * Creates a plain object from a GameSessionTerminate message. Also converts values to other types if specified.
                         * @param message GameSessionTerminate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GameSessionTerminate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdatePlayerSessionCreationPolicy. */
                    interface IUpdatePlayerSessionCreationPolicy {

                        /** UpdatePlayerSessionCreationPolicy gameSessionId */
                        gameSessionId?: (string|null);

                        /** UpdatePlayerSessionCreationPolicy newPlayerSessionCreationPolicy */
                        newPlayerSessionCreationPolicy?: (string|null);
                    }

                    /** Represents an UpdatePlayerSessionCreationPolicy. */
                    class UpdatePlayerSessionCreationPolicy implements IUpdatePlayerSessionCreationPolicy {

                        /**
                         * Constructs a new UpdatePlayerSessionCreationPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy);

                        /** UpdatePlayerSessionCreationPolicy gameSessionId. */
                        public gameSessionId: string;

                        /** UpdatePlayerSessionCreationPolicy newPlayerSessionCreationPolicy. */
                        public newPlayerSessionCreationPolicy: string;

                        /**
                         * Creates a new UpdatePlayerSessionCreationPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdatePlayerSessionCreationPolicy instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy): com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy;

                        /**
                         * Encodes the specified UpdatePlayerSessionCreationPolicy message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy.verify|verify} messages.
                         * @param message UpdatePlayerSessionCreationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdatePlayerSessionCreationPolicy message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy.verify|verify} messages.
                         * @param message UpdatePlayerSessionCreationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IUpdatePlayerSessionCreationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdatePlayerSessionCreationPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdatePlayerSessionCreationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy;

                        /**
                         * Decodes an UpdatePlayerSessionCreationPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdatePlayerSessionCreationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy;

                        /**
                         * Verifies an UpdatePlayerSessionCreationPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdatePlayerSessionCreationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdatePlayerSessionCreationPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy;

                        /**
                         * Creates a plain object from an UpdatePlayerSessionCreationPolicy message. Also converts values to other types if specified.
                         * @param message UpdatePlayerSessionCreationPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdatePlayerSessionCreationPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AcceptPlayerSession. */
                    interface IAcceptPlayerSession {

                        /** AcceptPlayerSession gameSessionId */
                        gameSessionId?: (string|null);

                        /** AcceptPlayerSession playerSessionId */
                        playerSessionId?: (string|null);
                    }

                    /** Represents an AcceptPlayerSession. */
                    class AcceptPlayerSession implements IAcceptPlayerSession {

                        /**
                         * Constructs a new AcceptPlayerSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession);

                        /** AcceptPlayerSession gameSessionId. */
                        public gameSessionId: string;

                        /** AcceptPlayerSession playerSessionId. */
                        public playerSessionId: string;

                        /**
                         * Creates a new AcceptPlayerSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AcceptPlayerSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession): com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession;

                        /**
                         * Encodes the specified AcceptPlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession.verify|verify} messages.
                         * @param message AcceptPlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AcceptPlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession.verify|verify} messages.
                         * @param message AcceptPlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IAcceptPlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AcceptPlayerSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AcceptPlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession;

                        /**
                         * Decodes an AcceptPlayerSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AcceptPlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession;

                        /**
                         * Verifies an AcceptPlayerSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AcceptPlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AcceptPlayerSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession;

                        /**
                         * Creates a plain object from an AcceptPlayerSession message. Also converts values to other types if specified.
                         * @param message AcceptPlayerSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AcceptPlayerSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RemovePlayerSession. */
                    interface IRemovePlayerSession {

                        /** RemovePlayerSession gameSessionId */
                        gameSessionId?: (string|null);

                        /** RemovePlayerSession playerSessionId */
                        playerSessionId?: (string|null);
                    }

                    /** Represents a RemovePlayerSession. */
                    class RemovePlayerSession implements IRemovePlayerSession {

                        /**
                         * Constructs a new RemovePlayerSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession);

                        /** RemovePlayerSession gameSessionId. */
                        public gameSessionId: string;

                        /** RemovePlayerSession playerSessionId. */
                        public playerSessionId: string;

                        /**
                         * Creates a new RemovePlayerSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemovePlayerSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession): com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession;

                        /**
                         * Encodes the specified RemovePlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession.verify|verify} messages.
                         * @param message RemovePlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemovePlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession.verify|verify} messages.
                         * @param message RemovePlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IRemovePlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemovePlayerSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemovePlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession;

                        /**
                         * Decodes a RemovePlayerSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemovePlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession;

                        /**
                         * Verifies a RemovePlayerSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemovePlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemovePlayerSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession;

                        /**
                         * Creates a plain object from a RemovePlayerSession message. Also converts values to other types if specified.
                         * @param message RemovePlayerSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemovePlayerSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ReportHealth. */
                    interface IReportHealth {

                        /** ReportHealth healthStatus */
                        healthStatus?: (boolean|null);
                    }

                    /** Represents a ReportHealth. */
                    class ReportHealth implements IReportHealth {

                        /**
                         * Constructs a new ReportHealth.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IReportHealth);

                        /** ReportHealth healthStatus. */
                        public healthStatus: boolean;

                        /**
                         * Creates a new ReportHealth instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportHealth instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IReportHealth): com.amazon.whitewater.auxproxy.pbuffer.ReportHealth;

                        /**
                         * Encodes the specified ReportHealth message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ReportHealth.verify|verify} messages.
                         * @param message ReportHealth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IReportHealth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportHealth message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ReportHealth.verify|verify} messages.
                         * @param message ReportHealth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IReportHealth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportHealth message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportHealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.ReportHealth;

                        /**
                         * Decodes a ReportHealth message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportHealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.ReportHealth;

                        /**
                         * Verifies a ReportHealth message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportHealth message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportHealth
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.ReportHealth;

                        /**
                         * Creates a plain object from a ReportHealth message. Also converts values to other types if specified.
                         * @param message ReportHealth
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.ReportHealth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportHealth to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DescribePlayerSessionsRequest. */
                    interface IDescribePlayerSessionsRequest {

                        /** DescribePlayerSessionsRequest gameSessionId */
                        gameSessionId?: (string|null);

                        /** DescribePlayerSessionsRequest playerId */
                        playerId?: (string|null);

                        /** DescribePlayerSessionsRequest playerSessionId */
                        playerSessionId?: (string|null);

                        /** DescribePlayerSessionsRequest playerSessionStatusFilter */
                        playerSessionStatusFilter?: (string|null);

                        /** DescribePlayerSessionsRequest nextToken */
                        nextToken?: (string|null);

                        /** DescribePlayerSessionsRequest limit */
                        limit?: (number|null);
                    }

                    /** Represents a DescribePlayerSessionsRequest. */
                    class DescribePlayerSessionsRequest implements IDescribePlayerSessionsRequest {

                        /**
                         * Constructs a new DescribePlayerSessionsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest);

                        /** DescribePlayerSessionsRequest gameSessionId. */
                        public gameSessionId: string;

                        /** DescribePlayerSessionsRequest playerId. */
                        public playerId: string;

                        /** DescribePlayerSessionsRequest playerSessionId. */
                        public playerSessionId: string;

                        /** DescribePlayerSessionsRequest playerSessionStatusFilter. */
                        public playerSessionStatusFilter: string;

                        /** DescribePlayerSessionsRequest nextToken. */
                        public nextToken: string;

                        /** DescribePlayerSessionsRequest limit. */
                        public limit: number;

                        /**
                         * Creates a new DescribePlayerSessionsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DescribePlayerSessionsRequest instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest;

                        /**
                         * Encodes the specified DescribePlayerSessionsRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest.verify|verify} messages.
                         * @param message DescribePlayerSessionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DescribePlayerSessionsRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest.verify|verify} messages.
                         * @param message DescribePlayerSessionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DescribePlayerSessionsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DescribePlayerSessionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest;

                        /**
                         * Decodes a DescribePlayerSessionsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DescribePlayerSessionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest;

                        /**
                         * Verifies a DescribePlayerSessionsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DescribePlayerSessionsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DescribePlayerSessionsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest;

                        /**
                         * Creates a plain object from a DescribePlayerSessionsRequest message. Also converts values to other types if specified.
                         * @param message DescribePlayerSessionsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DescribePlayerSessionsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BackfillMatchmakingRequest. */
                    interface IBackfillMatchmakingRequest {

                        /** BackfillMatchmakingRequest ticketId */
                        ticketId?: (string|null);

                        /** BackfillMatchmakingRequest gameSessionArn */
                        gameSessionArn?: (string|null);

                        /** BackfillMatchmakingRequest matchmakingConfigurationArn */
                        matchmakingConfigurationArn?: (string|null);

                        /** BackfillMatchmakingRequest players */
                        players?: (com.amazon.whitewater.auxproxy.pbuffer.IPlayer[]|null);
                    }

                    /** Represents a BackfillMatchmakingRequest. */
                    class BackfillMatchmakingRequest implements IBackfillMatchmakingRequest {

                        /**
                         * Constructs a new BackfillMatchmakingRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest);

                        /** BackfillMatchmakingRequest ticketId. */
                        public ticketId: string;

                        /** BackfillMatchmakingRequest gameSessionArn. */
                        public gameSessionArn: string;

                        /** BackfillMatchmakingRequest matchmakingConfigurationArn. */
                        public matchmakingConfigurationArn: string;

                        /** BackfillMatchmakingRequest players. */
                        public players: com.amazon.whitewater.auxproxy.pbuffer.IPlayer[];

                        /**
                         * Creates a new BackfillMatchmakingRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackfillMatchmakingRequest instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest;

                        /**
                         * Encodes the specified BackfillMatchmakingRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.verify|verify} messages.
                         * @param message BackfillMatchmakingRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackfillMatchmakingRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest.verify|verify} messages.
                         * @param message BackfillMatchmakingRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackfillMatchmakingRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackfillMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest;

                        /**
                         * Decodes a BackfillMatchmakingRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackfillMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest;

                        /**
                         * Verifies a BackfillMatchmakingRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackfillMatchmakingRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackfillMatchmakingRequest
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest;

                        /**
                         * Creates a plain object from a BackfillMatchmakingRequest message. Also converts values to other types if specified.
                         * @param message BackfillMatchmakingRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackfillMatchmakingRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StopMatchmakingRequest. */
                    interface IStopMatchmakingRequest {

                        /** StopMatchmakingRequest ticketId */
                        ticketId?: (string|null);

                        /** StopMatchmakingRequest gameSessionArn */
                        gameSessionArn?: (string|null);

                        /** StopMatchmakingRequest matchmakingConfigurationArn */
                        matchmakingConfigurationArn?: (string|null);
                    }

                    /** Represents a StopMatchmakingRequest. */
                    class StopMatchmakingRequest implements IStopMatchmakingRequest {

                        /**
                         * Constructs a new StopMatchmakingRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest);

                        /** StopMatchmakingRequest ticketId. */
                        public ticketId: string;

                        /** StopMatchmakingRequest gameSessionArn. */
                        public gameSessionArn: string;

                        /** StopMatchmakingRequest matchmakingConfigurationArn. */
                        public matchmakingConfigurationArn: string;

                        /**
                         * Creates a new StopMatchmakingRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StopMatchmakingRequest instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest): com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest;

                        /**
                         * Encodes the specified StopMatchmakingRequest message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest.verify|verify} messages.
                         * @param message StopMatchmakingRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StopMatchmakingRequest message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest.verify|verify} messages.
                         * @param message StopMatchmakingRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IStopMatchmakingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StopMatchmakingRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StopMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest;

                        /**
                         * Decodes a StopMatchmakingRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StopMatchmakingRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest;

                        /**
                         * Verifies a StopMatchmakingRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StopMatchmakingRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StopMatchmakingRequest
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest;

                        /**
                         * Creates a plain object from a StopMatchmakingRequest message. Also converts values to other types if specified.
                         * @param message StopMatchmakingRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StopMatchmakingRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetInstanceCertificate. */
                    interface IGetInstanceCertificate {
                    }

                    /** Represents a GetInstanceCertificate. */
                    class GetInstanceCertificate implements IGetInstanceCertificate {

                        /**
                         * Constructs a new GetInstanceCertificate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate);

                        /**
                         * Creates a new GetInstanceCertificate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetInstanceCertificate instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate;

                        /**
                         * Encodes the specified GetInstanceCertificate message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate.verify|verify} messages.
                         * @param message GetInstanceCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetInstanceCertificate message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate.verify|verify} messages.
                         * @param message GetInstanceCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetInstanceCertificate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetInstanceCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate;

                        /**
                         * Decodes a GetInstanceCertificate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetInstanceCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate;

                        /**
                         * Verifies a GetInstanceCertificate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetInstanceCertificate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetInstanceCertificate
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate;

                        /**
                         * Creates a plain object from a GetInstanceCertificate message. Also converts values to other types if specified.
                         * @param message GetInstanceCertificate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetInstanceCertificate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ActivateGameSession. */
                    interface IActivateGameSession {

                        /** ActivateGameSession gameSession */
                        gameSession?: (com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null);
                    }

                    /** Represents an ActivateGameSession. */
                    class ActivateGameSession implements IActivateGameSession {

                        /**
                         * Constructs a new ActivateGameSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession);

                        /** ActivateGameSession gameSession. */
                        public gameSession?: (com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null);

                        /**
                         * Creates a new ActivateGameSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActivateGameSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession): com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession;

                        /**
                         * Encodes the specified ActivateGameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.verify|verify} messages.
                         * @param message ActivateGameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActivateGameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.verify|verify} messages.
                         * @param message ActivateGameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IActivateGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActivateGameSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActivateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession;

                        /**
                         * Decodes an ActivateGameSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActivateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession;

                        /**
                         * Verifies an ActivateGameSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActivateGameSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActivateGameSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession;

                        /**
                         * Creates a plain object from an ActivateGameSession message. Also converts values to other types if specified.
                         * @param message ActivateGameSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActivateGameSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TerminateProcess. */
                    interface ITerminateProcess {

                        /** TerminateProcess terminationTime */
                        terminationTime?: (Long|null);
                    }

                    /** Represents a TerminateProcess. */
                    class TerminateProcess implements ITerminateProcess {

                        /**
                         * Constructs a new TerminateProcess.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess);

                        /** TerminateProcess terminationTime. */
                        public terminationTime: Long;

                        /**
                         * Creates a new TerminateProcess instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TerminateProcess instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess): com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess;

                        /**
                         * Encodes the specified TerminateProcess message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess.verify|verify} messages.
                         * @param message TerminateProcess message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TerminateProcess message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess.verify|verify} messages.
                         * @param message TerminateProcess message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.ITerminateProcess, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TerminateProcess message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TerminateProcess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess;

                        /**
                         * Decodes a TerminateProcess message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TerminateProcess
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess;

                        /**
                         * Verifies a TerminateProcess message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TerminateProcess message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TerminateProcess
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess;

                        /**
                         * Creates a plain object from a TerminateProcess message. Also converts values to other types if specified.
                         * @param message TerminateProcess
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TerminateProcess to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DescribePlayerSessionsResponse. */
                    interface IDescribePlayerSessionsResponse {

                        /** DescribePlayerSessionsResponse nextToken */
                        nextToken?: (string|null);

                        /** DescribePlayerSessionsResponse playerSessions */
                        playerSessions?: (com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession[]|null);
                    }

                    /** Represents a DescribePlayerSessionsResponse. */
                    class DescribePlayerSessionsResponse implements IDescribePlayerSessionsResponse {

                        /**
                         * Constructs a new DescribePlayerSessionsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse);

                        /** DescribePlayerSessionsResponse nextToken. */
                        public nextToken: string;

                        /** DescribePlayerSessionsResponse playerSessions. */
                        public playerSessions: com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession[];

                        /**
                         * Creates a new DescribePlayerSessionsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DescribePlayerSessionsResponse instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse;

                        /**
                         * Encodes the specified DescribePlayerSessionsResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.verify|verify} messages.
                         * @param message DescribePlayerSessionsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DescribePlayerSessionsResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.verify|verify} messages.
                         * @param message DescribePlayerSessionsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IDescribePlayerSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DescribePlayerSessionsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DescribePlayerSessionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse;

                        /**
                         * Decodes a DescribePlayerSessionsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DescribePlayerSessionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse;

                        /**
                         * Verifies a DescribePlayerSessionsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DescribePlayerSessionsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DescribePlayerSessionsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse;

                        /**
                         * Creates a plain object from a DescribePlayerSessionsResponse message. Also converts values to other types if specified.
                         * @param message DescribePlayerSessionsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DescribePlayerSessionsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateGameSession. */
                    interface IUpdateGameSession {

                        /** UpdateGameSession gameSession */
                        gameSession?: (com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null);

                        /** UpdateGameSession updateReason */
                        updateReason?: (string|null);

                        /** UpdateGameSession backfillTicketId */
                        backfillTicketId?: (string|null);
                    }

                    /** Represents an UpdateGameSession. */
                    class UpdateGameSession implements IUpdateGameSession {

                        /**
                         * Constructs a new UpdateGameSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession);

                        /** UpdateGameSession gameSession. */
                        public gameSession?: (com.amazon.whitewater.auxproxy.pbuffer.IGameSession|null);

                        /** UpdateGameSession updateReason. */
                        public updateReason: string;

                        /** UpdateGameSession backfillTicketId. */
                        public backfillTicketId: string;

                        /**
                         * Creates a new UpdateGameSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateGameSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession): com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession;

                        /**
                         * Encodes the specified UpdateGameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession.verify|verify} messages.
                         * @param message UpdateGameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateGameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession.verify|verify} messages.
                         * @param message UpdateGameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IUpdateGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateGameSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession;

                        /**
                         * Decodes an UpdateGameSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateGameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession;

                        /**
                         * Verifies an UpdateGameSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateGameSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateGameSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession;

                        /**
                         * Creates a plain object from an UpdateGameSession message. Also converts values to other types if specified.
                         * @param message UpdateGameSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateGameSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetInstanceCertificateResponse. */
                    interface IGetInstanceCertificateResponse {

                        /** GetInstanceCertificateResponse certificatePath */
                        certificatePath?: (string|null);

                        /** GetInstanceCertificateResponse certificateChainPath */
                        certificateChainPath?: (string|null);

                        /** GetInstanceCertificateResponse privateKeyPath */
                        privateKeyPath?: (string|null);

                        /** GetInstanceCertificateResponse hostname */
                        hostname?: (string|null);
                    }

                    /** Represents a GetInstanceCertificateResponse. */
                    class GetInstanceCertificateResponse implements IGetInstanceCertificateResponse {

                        /**
                         * Constructs a new GetInstanceCertificateResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse);

                        /** GetInstanceCertificateResponse certificatePath. */
                        public certificatePath: string;

                        /** GetInstanceCertificateResponse certificateChainPath. */
                        public certificateChainPath: string;

                        /** GetInstanceCertificateResponse privateKeyPath. */
                        public privateKeyPath: string;

                        /** GetInstanceCertificateResponse hostname. */
                        public hostname: string;

                        /**
                         * Creates a new GetInstanceCertificateResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetInstanceCertificateResponse instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse;

                        /**
                         * Encodes the specified GetInstanceCertificateResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse.verify|verify} messages.
                         * @param message GetInstanceCertificateResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetInstanceCertificateResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse.verify|verify} messages.
                         * @param message GetInstanceCertificateResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGetInstanceCertificateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetInstanceCertificateResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetInstanceCertificateResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse;

                        /**
                         * Decodes a GetInstanceCertificateResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetInstanceCertificateResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse;

                        /**
                         * Verifies a GetInstanceCertificateResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetInstanceCertificateResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetInstanceCertificateResponse
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse;

                        /**
                         * Creates a plain object from a GetInstanceCertificateResponse message. Also converts values to other types if specified.
                         * @param message GetInstanceCertificateResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GetInstanceCertificateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetInstanceCertificateResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BackfillMatchmakingResponse. */
                    interface IBackfillMatchmakingResponse {

                        /** BackfillMatchmakingResponse ticketId */
                        ticketId?: (string|null);
                    }

                    /** Represents a BackfillMatchmakingResponse. */
                    class BackfillMatchmakingResponse implements IBackfillMatchmakingResponse {

                        /**
                         * Constructs a new BackfillMatchmakingResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse);

                        /** BackfillMatchmakingResponse ticketId. */
                        public ticketId: string;

                        /**
                         * Creates a new BackfillMatchmakingResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackfillMatchmakingResponse instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse;

                        /**
                         * Encodes the specified BackfillMatchmakingResponse message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.verify|verify} messages.
                         * @param message BackfillMatchmakingResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackfillMatchmakingResponse message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.verify|verify} messages.
                         * @param message BackfillMatchmakingResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IBackfillMatchmakingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackfillMatchmakingResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackfillMatchmakingResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse;

                        /**
                         * Decodes a BackfillMatchmakingResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackfillMatchmakingResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse;

                        /**
                         * Verifies a BackfillMatchmakingResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackfillMatchmakingResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackfillMatchmakingResponse
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse;

                        /**
                         * Creates a plain object from a BackfillMatchmakingResponse message. Also converts values to other types if specified.
                         * @param message BackfillMatchmakingResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackfillMatchmakingResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Response. */
                    interface IResponse {

                        /** Response status */
                        status?: (com.amazon.whitewater.auxproxy.pbuffer.Response.Status|null);

                        /** Response errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents a Response. */
                    class Response implements IResponse {

                        /**
                         * Constructs a new Response.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IResponse);

                        /** Response status. */
                        public status: com.amazon.whitewater.auxproxy.pbuffer.Response.Status;

                        /** Response errorMessage. */
                        public errorMessage: string;

                        /**
                         * Creates a new Response instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Response instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IResponse): com.amazon.whitewater.auxproxy.pbuffer.Response;

                        /**
                         * Encodes the specified Response message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Response.verify|verify} messages.
                         * @param message Response message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Response message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Response.verify|verify} messages.
                         * @param message Response message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Response message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.Response;

                        /**
                         * Decodes a Response message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.Response;

                        /**
                         * Verifies a Response message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Response message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Response
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.Response;

                        /**
                         * Creates a plain object from a Response message. Also converts values to other types if specified.
                         * @param message Response
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Response to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Response {

                        /** Status enum. */
                        enum Status {
                            OK = 0,
                            ERROR = 1
                        }
                    }

                    /** Properties of a GameSession. */
                    interface IGameSession {

                        /** GameSession gameSessionId */
                        gameSessionId?: (string|null);

                        /** GameSession fleetId */
                        fleetId?: (string|null);

                        /** GameSession name */
                        name?: (string|null);

                        /** GameSession maxPlayers */
                        maxPlayers?: (number|null);

                        /** GameSession joinable */
                        joinable?: (boolean|null);

                        /** GameSession gameProperties */
                        gameProperties?: (com.amazon.whitewater.auxproxy.pbuffer.IGameProperty[]|null);

                        /** GameSession ipAddress */
                        ipAddress?: (string|null);

                        /** GameSession port */
                        port?: (number|null);

                        /** GameSession gameSessionData */
                        gameSessionData?: (string|null);

                        /** GameSession matchmakerData */
                        matchmakerData?: (string|null);

                        /** GameSession dnsName */
                        dnsName?: (string|null);
                    }

                    /** Represents a GameSession. */
                    class GameSession implements IGameSession {

                        /**
                         * Constructs a new GameSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSession);

                        /** GameSession gameSessionId. */
                        public gameSessionId: string;

                        /** GameSession fleetId. */
                        public fleetId: string;

                        /** GameSession name. */
                        public name: string;

                        /** GameSession maxPlayers. */
                        public maxPlayers: number;

                        /** GameSession joinable. */
                        public joinable: boolean;

                        /** GameSession gameProperties. */
                        public gameProperties: com.amazon.whitewater.auxproxy.pbuffer.IGameProperty[];

                        /** GameSession ipAddress. */
                        public ipAddress: string;

                        /** GameSession port. */
                        public port: number;

                        /** GameSession gameSessionData. */
                        public gameSessionData: string;

                        /** GameSession matchmakerData. */
                        public matchmakerData: string;

                        /** GameSession dnsName. */
                        public dnsName: string;

                        /**
                         * Creates a new GameSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameSession): com.amazon.whitewater.auxproxy.pbuffer.GameSession;

                        /**
                         * Encodes the specified GameSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify|verify} messages.
                         * @param message GameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GameSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameSession.verify|verify} messages.
                         * @param message GameSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGameSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GameSession;

                        /**
                         * Decodes a GameSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GameSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GameSession;

                        /**
                         * Verifies a GameSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GameSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GameSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GameSession;

                        /**
                         * Creates a plain object from a GameSession message. Also converts values to other types if specified.
                         * @param message GameSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GameSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GameSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GameProperty. */
                    interface IGameProperty {

                        /** GameProperty key */
                        key?: (string|null);

                        /** GameProperty value */
                        value?: (string|null);
                    }

                    /** Represents a GameProperty. */
                    class GameProperty implements IGameProperty {

                        /**
                         * Constructs a new GameProperty.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameProperty);

                        /** GameProperty key. */
                        public key: string;

                        /** GameProperty value. */
                        public value: string;

                        /**
                         * Creates a new GameProperty instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameProperty instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IGameProperty): com.amazon.whitewater.auxproxy.pbuffer.GameProperty;

                        /**
                         * Encodes the specified GameProperty message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameProperty.verify|verify} messages.
                         * @param message GameProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IGameProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GameProperty message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.GameProperty.verify|verify} messages.
                         * @param message GameProperty message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IGameProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameProperty message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.GameProperty;

                        /**
                         * Decodes a GameProperty message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GameProperty
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.GameProperty;

                        /**
                         * Verifies a GameProperty message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GameProperty message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GameProperty
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.GameProperty;

                        /**
                         * Creates a plain object from a GameProperty message. Also converts values to other types if specified.
                         * @param message GameProperty
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.GameProperty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GameProperty to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PlayerSession. */
                    interface IPlayerSession {

                        /** PlayerSession playerSessionId */
                        playerSessionId?: (string|null);

                        /** PlayerSession playerId */
                        playerId?: (string|null);

                        /** PlayerSession gameSessionId */
                        gameSessionId?: (string|null);

                        /** PlayerSession fleetId */
                        fleetId?: (string|null);

                        /** PlayerSession ipAddress */
                        ipAddress?: (string|null);

                        /** PlayerSession status */
                        status?: (string|null);

                        /** PlayerSession creationTime */
                        creationTime?: (Long|null);

                        /** PlayerSession terminationTime */
                        terminationTime?: (Long|null);

                        /** PlayerSession port */
                        port?: (number|null);

                        /** PlayerSession playerData */
                        playerData?: (string|null);

                        /** PlayerSession dnsName */
                        dnsName?: (string|null);
                    }

                    /** Represents a PlayerSession. */
                    class PlayerSession implements IPlayerSession {

                        /**
                         * Constructs a new PlayerSession.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession);

                        /** PlayerSession playerSessionId. */
                        public playerSessionId: string;

                        /** PlayerSession playerId. */
                        public playerId: string;

                        /** PlayerSession gameSessionId. */
                        public gameSessionId: string;

                        /** PlayerSession fleetId. */
                        public fleetId: string;

                        /** PlayerSession ipAddress. */
                        public ipAddress: string;

                        /** PlayerSession status. */
                        public status: string;

                        /** PlayerSession creationTime. */
                        public creationTime: Long;

                        /** PlayerSession terminationTime. */
                        public terminationTime: Long;

                        /** PlayerSession port. */
                        public port: number;

                        /** PlayerSession playerData. */
                        public playerData: string;

                        /** PlayerSession dnsName. */
                        public dnsName: string;

                        /**
                         * Creates a new PlayerSession instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerSession instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession): com.amazon.whitewater.auxproxy.pbuffer.PlayerSession;

                        /**
                         * Encodes the specified PlayerSession message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.verify|verify} messages.
                         * @param message PlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlayerSession message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.PlayerSession.verify|verify} messages.
                         * @param message PlayerSession message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IPlayerSession, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlayerSession message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.PlayerSession;

                        /**
                         * Decodes a PlayerSession message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerSession
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.PlayerSession;

                        /**
                         * Verifies a PlayerSession message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlayerSession message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerSession
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.PlayerSession;

                        /**
                         * Creates a plain object from a PlayerSession message. Also converts values to other types if specified.
                         * @param message PlayerSession
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.PlayerSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlayerSession to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Player. */
                    interface IPlayer {

                        /** Player playerId */
                        playerId?: (string|null);

                        /** Player playerAttributes */
                        playerAttributes?: ({ [k: string]: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue }|null);

                        /** Player team */
                        team?: (string|null);

                        /** Player latencyInMs */
                        latencyInMs?: ({ [k: string]: number }|null);
                    }

                    /** Represents a Player. */
                    class Player implements IPlayer {

                        /**
                         * Constructs a new Player.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IPlayer);

                        /** Player playerId. */
                        public playerId: string;

                        /** Player playerAttributes. */
                        public playerAttributes: { [k: string]: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue };

                        /** Player team. */
                        public team: string;

                        /** Player latencyInMs. */
                        public latencyInMs: { [k: string]: number };

                        /**
                         * Creates a new Player instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Player instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IPlayer): com.amazon.whitewater.auxproxy.pbuffer.Player;

                        /**
                         * Encodes the specified Player message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Player.verify|verify} messages.
                         * @param message Player message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Player message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.Player.verify|verify} messages.
                         * @param message Player message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Player message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Player
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.Player;

                        /**
                         * Decodes a Player message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Player
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.Player;

                        /**
                         * Verifies a Player message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Player message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Player
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.Player;

                        /**
                         * Creates a plain object from a Player message. Also converts values to other types if specified.
                         * @param message Player
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Player to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AttributeValue. */
                    interface IAttributeValue {

                        /** AttributeValue type */
                        type?: (number|null);

                        /** AttributeValue S */
                        S?: (string|null);

                        /** AttributeValue N */
                        N?: (number|null);

                        /** AttributeValue SL */
                        SL?: (string[]|null);

                        /** AttributeValue SDM */
                        SDM?: ({ [k: string]: number }|null);
                    }

                    /** Represents an AttributeValue. */
                    class AttributeValue implements IAttributeValue {

                        /**
                         * Constructs a new AttributeValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue);

                        /** AttributeValue type. */
                        public type: number;

                        /** AttributeValue S. */
                        public S: string;

                        /** AttributeValue N. */
                        public N: number;

                        /** AttributeValue SL. */
                        public SL: string[];

                        /** AttributeValue SDM. */
                        public SDM: { [k: string]: number };

                        /**
                         * Creates a new AttributeValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AttributeValue instance
                         */
                        public static create(properties?: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue): com.amazon.whitewater.auxproxy.pbuffer.AttributeValue;

                        /**
                         * Encodes the specified AttributeValue message. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.verify|verify} messages.
                         * @param message AttributeValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AttributeValue message, length delimited. Does not implicitly {@link com.amazon.whitewater.auxproxy.pbuffer.AttributeValue.verify|verify} messages.
                         * @param message AttributeValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.amazon.whitewater.auxproxy.pbuffer.IAttributeValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AttributeValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.amazon.whitewater.auxproxy.pbuffer.AttributeValue;

                        /**
                         * Decodes an AttributeValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AttributeValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.amazon.whitewater.auxproxy.pbuffer.AttributeValue;

                        /**
                         * Verifies an AttributeValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AttributeValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AttributeValue
                         */
                        public static fromObject(object: { [k: string]: any }): com.amazon.whitewater.auxproxy.pbuffer.AttributeValue;

                        /**
                         * Creates a plain object from an AttributeValue message. Also converts values to other types if specified.
                         * @param message AttributeValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.amazon.whitewater.auxproxy.pbuffer.AttributeValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AttributeValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
