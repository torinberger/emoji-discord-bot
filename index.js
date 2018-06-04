
const        Discord = require('discord.js');
const         client = new Discord.Client();

client.on('ready', () => {
    console.log('bot ready!');
});

client.on('message', message => {
  if(message.author.username == "Torinberger" && message.content.indexOf("$$") == 0) {
    var channel = message.channel;
    var str = (message.content.substr(2)).toLowerCase();
    console.log(message.content);
    message.delete(0);
    var tosend = "";
    for (var i = 0; i < str.length; i++) {
      if(str[i] == "a") {tosend += ":regional_indicator_a:"}
      else if(str[i] == "b") {tosend += ":regional_indicator_b:"}
      else if(str[i] == "c") {tosend += ":regional_indicator_c:"}
      else if(str[i] == "d") {tosend += ":regional_indicator_d:"}
      else if(str[i] == "e") {tosend += ":regional_indicator_e:"}
      else if(str[i] == "f") {tosend += ":regional_indicator_f:"}
      else if(str[i] == "g") {tosend += ":regional_indicator_g:"}
      else if(str[i] == "h") {tosend += ":regional_indicator_h:"}
      else if(str[i] == "i") {tosend += ":regional_indicator_i:"}
      else if(str[i] == "j") {tosend += ":regional_indicator_j:"}
      else if(str[i] == "k") {tosend += ":regional_indicator_k:"}
      else if(str[i] == "l") {tosend += ":regional_indicator_l:"}
      else if(str[i] == "m") {tosend += ":regional_indicator_m:"}
      else if(str[i] == "n") {tosend += ":regional_indicator_n:"}
      else if(str[i] == "o") {tosend += ":regional_indicator_o:"}
      else if(str[i] == "p") {tosend += ":regional_indicator_p:"}
      else if(str[i] == "q") {tosend += ":regional_indicator_q:"}
      else if(str[i] == "r") {tosend += ":regional_indicator_r:"}
      else if(str[i] == "s") {tosend += ":regional_indicator_s:"}
      else if(str[i] == "t") {tosend += ":regional_indicator_t:"}
      else if(str[i] == "u") {tosend += ":regional_indicator_u:"}
      else if(str[i] == "v") {tosend += ":regional_indicator_v:"}
      else if(str[i] == "w") {tosend += ":regional_indicator_w:"}
      else if(str[i] == "x") {tosend += ":regional_indicator_x:"}
      else if(str[i] == "y") {tosend += ":regional_indicator_y:"}
      else if(str[i] == "z") {tosend += ":regional_indicator_z:"}
      else if(str[i] == "1") {tosend += ":one:"}
      else if(str[i] == "2") {tosend += ":two:"}
      else if(str[i] == "3") {tosend += ":three:"}
      else if(str[i] == "4") {tosend += ":four:"}
      else if(str[i] == "5") {tosend += ":five:"}
      else if(str[i] == "6") {tosend += ":six:"}
      else if(str[i] == "7") {tosend += ":seven:"}
      else if(str[i] == "8") {tosend += ":eight:"}
      else if(str[i] == "9") {tosend += ":nine:"}
      else if(str[i] == "0") {tosend += ":zero:"}
      else if(str[i] == "?") {tosend += ":grey_question:"}
      else if(str[i] == "!") {tosend += ":grey_exclamation:"}
      else if(str[i] == " ") {tosend += "     "}
      else { tosend += str[i] }
    }
    channel.send(tosend);
  }
});

client.login("YOUR TOKEN HERE"); // no looky looky
