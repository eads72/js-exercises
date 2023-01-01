import {franc, francAll} from 'franc';
import langs from 'langs';

function main(){
    const text = getTextInput();
    const lang = getLang(text);
    console.log(lang);
}

function getTextInput(){
    if(process.argv.length >= 3){
        return process.argv[2];
        //console.log(process.argv[2]);
    }else{
        console.log("You should enter the text as command line argument, program will be terminated");
        process.exit(1);
    }
}

function getLang(text){
    const langCodes = francAll(text);
    if (langCodes.length<3){
        console.log("there were less than 3 matching languages");
        process.exit(1);
    };
    const firstThree = langCodes.slice(0, 3);
    const lang = langs.where('3', firstThree[0][0]);
    if (!lang){
        console.log("unknown language code: ", firstThree[0][0]);
        process.exit(1);
    }
    return lang.name;
}

main();