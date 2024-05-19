# Introduction
- This git is a discord bot template that utilizes the discord.js library in ESM syntax. I haven't really seen any discord bot templates that utilized ESM, it was always either TS or CJS, so I hope this template is utilized as a base for all future bots that are in development.

## How To Install
```
1. git clone https://github.com/senpai0807/discord-bot-template.git
2. cd discord-bot-template
3. pnpm install, npm install, or yarn install
4. pnpm start, npm start, or yarn start
```
### Requirements
To start the bot, you must first set the environment variables within the .env file.
- DISCORD_TOKEN: Input your discord bot token that you can get from https://discord.com/developers/applications
- ROLE_ID: This is the role you'd like to give to your users upon them joining the server. To get the role, Go To Server Settings => Roles => right-click role and click Copy Role ID
- WELCOME_CHANNEL: This is the channel ID of the channel where you'd like embeds to be sent of the members joining the server, simply hover over the channel => right-click and click Copy Channel ID
- LEAVE_CHANNEL: This is the channel ID of the channel where you'd like embeds to be sent of the members leaving the server, simply hover over the channel => right-click and click Copy Channel ID
- EMBED_COLOR: This is the color you'd like your embed to utilize, it must be a DECIMAL color, you can simply go to https://www.colorhexa.com/ and search your hex color to find the decimal
- ICON_URL: This is the icon url you want your footer to utilize, I personally use links from github, but you can use whatever you'd like
- DATABASE_URL: This is the database url you'd like your discord bot to utilize if you plan on integrating schemas with commands that require a database, I recommend MongoDB

### Inclusions
- Within this Git, I've included one example command '/ping' that replies an embed with the latency and two events "guildMemberAdd & guildMemberRemove" for people to utilize as an example when creating commands/events. For further help, you can either utilize the official discord.js docs: https://discord.js.org/docs/packages/discord.js/14.15.2 or a quick search on google should suffice.
