$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        createVisitorUser(data);
    }
});

function createVisitorUser(data){
    var profilePicture = data.results[0].picture.large;
    $("#userPicture").attr("src", profilePicture);

    var firstName = data.results[0].name.first;
    $("#userFirstName").html(firstName);

    var lastName = data.results[0].name.last;
    $("#userLastName").html(lastName);

    var userEmail = data.results[0].email;
    $('#userEmail').html(userEmail);
}