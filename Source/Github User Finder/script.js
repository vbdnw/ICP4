function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    $.ajax({
        "url": "https://api.github.com/users/" + user,
        "type": 'GET',
        "success": function (res) {
            showUser(res);
        },
        "fail": noSuchUser(user),
    });
}

function showUser(user) {
    //2. set the contents of the h1 and the two div elements in the div '#profile' with the user content
    console.log(user);
    $(".avatar").show();
    $(".information").show();
    $("#profile h1").text(user.login);
    $(".avatar img").attr("src", user.avatar_url);
    $("#name").text(user.name == null ? "null" : user.name);
    $("#loginId").text(user.id);
    $("#git").attr("href",user.html_url);
    $("#creationDate").text(user.created_at);
    $("#followers").text(user.followers);
    $("#following").text(user.following);
    $("#repository").text(user.public_repos);
    console.log($("#git").attr("href"));
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#profile h1").text(username + " 404 ERROR NOT FOUND");
    $(".avatar").hide();
    $(".information").hide();
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});