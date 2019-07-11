function helpCommand(arguments, receivedMessage){
    if(arguments.length == 0){
        receivedMessage.channel.send("Ne için yardım istediğini anlayamadım 🤨. Şunu dene `!komutlar`")
    }
    else{
        receivedMessage.channel.send("Şu konuda yardıma ihtiyacın var gibi görünüyor 😏: " + arguments)
        if(arguments == "instagram"){
            receivedMessage.channel.send("Instagram: berkbelcioglu")
        }
    }
}

export default helpCommand;