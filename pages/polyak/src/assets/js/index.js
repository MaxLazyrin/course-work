
$('#show').on('click',showPic);

function showPic(){
var userId = document.getElementById("Id").value;
var url_r = 'https://api.vk.com/method/users.get?user_ids='+userId+'&fields=photo_max_orig,status&access_token=4ca8d4ef4ca8d4ef4ca8d4ef8d4cc68c6844ca84ca8d4ef114db4f146fc92795c51ebb5&v=5.52';
	$.ajax({
	url: url_r,
		method : 'GET',
		dataType:'jsonp',
		success : function (data)
		{
			console.log(data);
					var f = data.response[0];
							var html = '';
							html +='<li>'+ '<img src="'+f.photo_max_orig+'"/>'+
              '<h4>'+f.status+'</h4>'
							+'</li>';

$('ul').html(html);
		}
		});

}
