async function fetchGreetings(){
    const request_call = await fetch('http://localhost:9000/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({query:'query{hello}'})  
    });
    const response = await request_call.json();
    console.log(response.data.hello);
    return response.data.hello;
}

fetchGreetings().then(greetings=>{
    document.getElementById('greetings').innerText = greetings;
})