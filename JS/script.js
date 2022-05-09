$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);//remoce this
        createVisitorUser(data);
    }
});

