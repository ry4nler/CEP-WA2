import { Server } from "socket.io";

// create http server forwarding network traffic to socketio server
const io = new Server(8001, {
    cors: {
        origin: "*",
    },
});
const clients = new Set();

function Client(socket) {
    this.socket = socket;
    this.position = {x: 0, y: 0};
}

console.log("Server running...")

io.on("connection", socket => {
    console.log("New connection!");
    let client = new Client(socket);
    clients.add(client);

    socket.on("position", (x, y) => {
        client.position = {x, y};
    });
})