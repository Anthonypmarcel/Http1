//instanitiate the HTTP constructor in order to add the methods
const http = new HTTP;

http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }
})

http.post('https://jsonplaceholder.typicode.com/posts', {name:'antho', date:'23/02/2010', gender:'male'}, function(err,post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})

http.put('https://jsonplaceholder.typicode.com/posts/1', {name:'antho', date:'23/02/2010', gender:'male'}, function(err,post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,post) {
    if(err) {
        console.log(err)
    } else {
        console.log(post)
    }
})