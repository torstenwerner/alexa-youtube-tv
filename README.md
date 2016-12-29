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
