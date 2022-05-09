$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);//remoce this
        createVisitorUser(data);
    }
});

function createVisitorUser(data){
    var profilePicture = data.results[0].picture.large;
    $("#userPicture").attr("src", profilePicture);

}