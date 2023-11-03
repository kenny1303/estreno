const express = required('express');

const app= express();

app.set ('port', 3000);

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
});