'use strict';
const { EventEmitter } = require('node:events');
const { Client: dClient } = require('discord.js');
const Logger = require('./Logger');
const fs = require('fs');

const RegisterGuild = require('../util/RegisterGuild');
const RegisterGlobal = require('../util/RegisterGlobal');

module.exports = class Client extends EventEmitter{

    /**
     * 
     * @param {dClient} Client Your discord bot Client
     * @param {Options} Options Options for kktcmd
     */
    constructor(Client, Options){
        super();
        this.logger = new Logger('KktCMD');
        this.options = Options;
        if(!Client || typeof Client != typeof dClient) return this.logger.error(`Missing Client argument`);
        if(!Options.commandsFolder || fs.existsSync(Options.commandsFolder)) return this.logger.error(`Missing/Doesn't exist commandsFolder options`);
        this.init();
    }

    async init(){
        if(options.testGuild){
            RegisterGuild(this.client, this.commandsFolder, options.testGuild);
        }
    }
}