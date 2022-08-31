module.exports = (client) => {
    console.log("Zalogowano");

    client.application.commands.set(client.data).then(() => console.log("Załadowano Slashe"))
}