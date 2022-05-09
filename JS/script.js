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

    var userGender = data.results[0].gender;
    userGender = userGender.charAt(0).toUpperCase() + userGender.slice(1)
    $('#userGender').html(userGender);
}

var loadResults = {};

$('.search-button').on("click", function(){

    var noOfResults = $('#employeeCount').val();

    var searchURL = 'https://randomuser.me/api/?results=' + noOfResults;

    $.ajax({
        url: searchURL,
        dataType: 'json',
        success: function (data) {
            loadResults = data;
            updateResults(data);
        }
    });
});

function updateResults(data){
    var results = $(".results");
    results.html("");

    for(var i = 0; i < data.results.length; i++){
        var cards = $('#cards .card');
        var card = cards.clone();
        var img = card.find(".result-profile")
        var firstName = card.find(".first-name");
        var lastName = card.find(".last-name");
        var dob = card.find(".result-dob"); 
        var email = card.find(".result-email");
        var yoe = card.find('.yoe .result-yoe');
        var employmentAge = card.find('.years-employed .result-employent')


        var newImg = data.results[i].picture.large;
        var newFirstName = data.results[i].name.first;
        var newLastName = data.results[i].name.last;
        var newEmail = data.results[i].email;
        
        var newDOB = data.results[i].dob.date;
            var a = newDOB.indexOf("T");
            var b = newDOB.slice(0, a);
        
            var year = b.slice (2,4);
            var month = b.slice(5,7)
            var day = b.slice(8,10);
    
        newDOB = day + '/' + month + '/' + year;

        var newYOE = data.results[i].registered.date;

            var year = newYOE.slice (0,4);
    
        newYOE = year;

        var newEA = data.results[i].registered.age;
        

        img.attr("src", newImg);
        firstName.html(newFirstName);
        lastName.html(newLastName);
        email.html(newEmail);
        dob.html(newDOB);
        yoe.html(newYOE);
        employmentAge.html(newEA);

        results.append(card);
    }
}

function sortAlphabetical() {
    
    let loadResultsCopy = {...loadResults};
    loadResultsCopy.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
 
    updateResults(loadResultsCopy);
}

$('#filterAlphabetical').on('click', sortAlphabetical);

function sortYearsEmployed(){
        
    let loadResultsCopy = {...loadResults};
    loadResultsCopy.results.sort((a, b) => b.registered.date.localeCompare(a.registered.date))
 
    updateResults(loadResultsCopy);
}

$('#filterEmployement').on('click', sortYearsEmployed);

function sortAge(){
        
    let loadResultsCopy = {...loadResults};
    loadResultsCopy.results.sort((a, b) => b.dob.date.localeCompare(a.dob.date))
 
    updateResults(loadResultsCopy);
}

$('#filterAge').on('click', sortAge);