function PrintComm(id, comm_json) {
post_div = document.getElementById("post_" + id);
let comm = document.createElement('div');
comm.class = "comment";
comm.id = "comm_" + comm_json.id;
comm.innerHTML = "<strong class='email'>" + comm_json.email + "</strong><br><div class='comm_body'>" + comm_json.body + "</div><br>";
post_div.append(comm);
return comm_json.id;
}

function LoadCommentsForPost(id) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + id, false);
xhr.send();
if (xhr.status == 200) {
 comms = JSON.parse(xhr.responseText);
 PrintComm(id, comms[0]);
 PrintComm(id, comms[1]);
 PrintComm(id, comms[2]);
}
}

function PrintPost(id, post_json) {
posts_div = document.getElementById("user_" + id + "_posts");
let post = document.createElement('div');
post.class = "post";
post.id = "post_" + post_json.id;
post.innerHTML = "<strong class='title'>" + post_json.title + "</strong><br><div class='body'>" + post_json.body + "</div><br>";
posts_div.append(post);
LoadCommentsForPost(post_json.id);
return post_json.id;
}

function LoadPostsForUser(id) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + id, false);
xhr.send();
if (xhr.status == 200) {
 posts = JSON.parse(xhr.responseText);
 PrintPost(id, posts[0]);
 PrintPost(id, posts[1]);
 PrintPost(id, posts[2]);
}
}

function PrintUser(user) {
let usr = document.createElement('div');
usr.id = "user_" + user.id;
usr.innerHTML = "<strong class='fam'>" + user.name + "</strong><br><a href='http://" + user.website + "/' class='website'>" + user.website + "</a><br><div id=" + "user_" + user.id + "_posts></div><br>";
document.body.append(usr);
LoadPostsForUser(user.id);
return user.id;
}

function LoadUser(id) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + id + '/', false);
xhr.send();
if (xhr.status == 200) {
 user = JSON.parse(xhr.responseText);
 return PrintUser(user);
}
else return undefined;
}

LoadUser(1);
LoadUser(2);
LoadUser(3);