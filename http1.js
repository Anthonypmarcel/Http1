//Create the HTTP constructor
function HTTP () {
    this.http = new XMLHttpRequest();
}

//create the get method
HTTP.prototype.get = function(url, callBack){
    this.http.open('GET', url, true);

    let self = this
    this.http.onload = function() {
        if(self.http.status === 200) {
            callBack(null, self.http.responseText);
        }else {
            callBack('error ' + self.http.status);
        }
    }
    this.http.send();
}

//create the post method
HTTP.prototype.post = function(url, data, callBack) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this 
    this.http.onload = function(){
        callBack(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//create the put method
HTTP.prototype.put = function(url, data, callBack) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this 
    this.http.onload = function(){
        callBack(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//create the delete method
HTTP.prototype.delete = function(url, callBack){
    this.http.open('DELETE', url, true);

    let self = this
    this.http.onload = function() {
        if(self.http.status === 200) {
            callBack(null, 'Post has been deleted');
        }else {
            callBack('error ' + self.http.status);
        }
    }
    this.http.send();
}