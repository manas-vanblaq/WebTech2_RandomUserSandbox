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

    var phoneNumber = data.results[0].phone;
    $('#userPhone').html(phoneNumber);

    var dob = data.results[0].dob.date;
    var i = dob.indexOf("T");
    var j = dob.slice(0, i);
    
    var year = j.slice (2,4);
    var month = j.slice(5,7)
    var day = j.slice(8,10);

    dob = day + '/' + month + '/' + year;
    $('#userDob').html(dob);
}