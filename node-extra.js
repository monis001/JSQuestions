// https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/

var standard_input = process.stdin ;

standard_input.setEncoding('utf-8');

console.log('PLease input text in command line ');

standard_input.on('data',function(data){
    
    if(data === 'exit\n'){
        console.log('User input is complete ');
    }else{
        console.log('User Input data is  :'+data);
    }
})