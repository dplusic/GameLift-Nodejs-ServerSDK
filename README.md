# GameLift-Nodejs-ServerSDK
Unofficial GameLift Server SDK for Node.js
(A port of GameLift-CSharp-ServerSDK)

## Example Code

```javascript
//This is an example of a simple integration with GameLift server SDK that will make game server processes go active on GameLift!

const exitHook = require('exit-hook');
const { 'default': GameLiftServerAPI, ProcessParameters, LogParameters } = require('gamelift-nodejs-serversdk')

exitHook(() => {
	GameLiftServerAPI.Destroy()
});

const listeningPort = 7777;

//InitSDK will establish a local connection with GameLift's agent to enable further communication.
const initSDKOutcome = GameLiftServerAPI.InitSDK()
if (initSDKOutcome.Success) {
  const processParameters = new ProcessParameters(
    (gameSession) => {
      //When a game session is created, GameLift sends an activation request to the game server and passes along the game session object containing game properties and other settings.
      //Here is where a game server should take action based on the game session object.
      //Once the game server is ready to receive incoming player connections, it should invoke GameLiftServerAPI.ActivateGameSession()
      GameLiftServerAPI.ActivateGameSession();
    },
    (updateGameSession) => {
      //When a game session is updated (e.g. by FlexMatch backfill), GameLiftsends a request to the game
      //server containing the updated game session object.  The game server can then examine the provided
      //matchmakerData and handle new incoming players appropriately.
      //updateReason is the reason this update is being supplied.
    },
    () => {
      //OnProcessTerminate callback. GameLift will invoke this callback before shutting down an instance hosting this game server.
      //It gives this game server a chance to save its state, communicate with services, etc., before being shut down.
      //In this case, we simply tell GameLift we are indeed going to shutdown.
      GameLiftServerAPI.ProcessEnding();
    }, 
    () => {
      //This is the HealthCheck callback.
      //GameLift will invoke this callback every 60 seconds or so.
      //Here, a game server might want to check the health of dependencies and such.
      //Simply return true if healthy, false otherwise.
      //The game server has 60 seconds to respond with its health status. GameLift will default to 'false' if the game server doesn't respond in time.
      //In this case, we're always healthy!
      return true;
    },
    listeningPort, //This game server tells GameLift that it will listen on port 7777 for incoming player connections.
    new LogParameters([
      //Here, the game server tells GameLift what set of files to upload when the game session ends.
      //GameLift will upload everything specified here for the developers to fetch later.
      '/local/game/logs/myserver.log'
    ]));

  (async () => {
    try {
      //Calling ProcessReady tells GameLift this game server is ready to receive incoming game sessions!
      const processReadyOutcome = await GameLiftServerAPI.ProcessReady(processParameters);
      if (processReadyOutcome.Success)
      {
        console.log("ProcessReady success.");
      }
      else
      {
        console.log("ProcessReady failure : " + processReadyOutcome.Error.toString());
      }
    } catch (e) {
      console.log(e);
    }
  })()
} else {
  console.log("InitSDK failure : " + initSDKOutcome.Error.toString());
}
```
