import conf from "../config";
import { Client, Account, ID } from "appwrite";


export class Authservice{
client=new this.client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setEndpoint(conf. appwriteProjectId):
        this.account=new this.Account(this.client)
    }
}



const authservice=new Authservice();
export  default authservice;
