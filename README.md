# Youtube TV

Can control the Youtube player on your desktop by speaking to Amazon Alexa (Echo).
Status: very early stage of development.

## Vision

The idea of this project is to combine Web applications with Speech recognition and synthesis.

## Architecture

The web application in folder web is using nodejs and expressjs to implement the backend.
The browser listens for a start command using a websocket using the socket.io library.
I will play a video for 8 seconds after receiving the start command.
It will pause the video after 8 seconds and will wait for the next command.
The Alexa custom skill in folder alexa calls a simple REST service of the node backend when invoked by speech.

## Deployment and Testing

### Local Deployment

You can run the web application locally:

- cd web
- npm run

Navigate to http://localhost:3000 and execute a GET request against http://localhost:3000/start with any http client.
That will trigger playing the video in browser for 8 seconds.
You can repeat the $YOUTUBE_TV_BASE_URL/start step if you want.
You may use ngrok from https://ngrok.com/ to tunnel the local web app into the internet:

- cd web
- ngrok http 3000

The ngrok tool will display the new YOUTUBE_TV_BASE_URL. Try the same steps from above now with this url.
Configure the YOUTUBE_TV_BASE_URL environment variable in the AWS lambda function for Alexa.
Speak to the echo:

- Alexa, starte das Video mit Youtube TV.

Alexa will not answer but trigger the video playback in the browser.

### Deployment with Docker

Build an run the web app in docker:

- cd web
- docker build -t youtube-tv .
- docker run --rm -it -p3000:3000 youtube-tv

Configure YOUTUBE_TV_BASE_URL in the lambda function if docker is reachable in the internet.
Or use ngrok again for tunneling if it is a local docker only.

### Deployment with now

Run the web app with now from https://zeit.co/now in either npm or docker mode:

- cd web
- now --npm or
- now --docker

It will automatically copy the YOUTUBE_TV_BASE_URL into the clipboard.
