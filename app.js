window.onload = () => {
  //Input Value Function
  function enterInput(input, textElement, mediaLink = false, link) {
    if (mediaLink) {
      input.addEventListener("input", () => {
        textElement.href = "https://www." + link + input.value;
      });
    } else {
      input.addEventListener("input", () => {
        textElement.innerText = input.value;
      });
    }
  }
  enterInput(
    document.getElementById("role"),
    document.getElementById("roleName")
  );
  enterInput(
    document.getElementById("city"),
    document.getElementById("cityName")
  );
  enterInput(
    document.getElementById("state"),
    document.getElementById("stateName")
  );
  enterInput(
    document.getElementById("firstName"),
    document.getElementById("firstNameHere")
  );
  enterInput(
    document.getElementById("lastName"),
    document.getElementById("lastNameHere")
  );
  enterInput(
    document.getElementById("insta"),
    document.getElementById("instagramIcon"),
    true,
    'instagram.com/'
  );
  enterInput(
    document.getElementById("xTwitter"),
    document.getElementById("xIcon"), true, 'x.com/'
  );
  enterInput(
    document.getElementById("linkedIn"),
    document.getElementById("linkedIcon"), true, 'linkedin.com/'
  );
  enterInput(
    document.getElementById("github"),
    document.getElementById("githubIcon"), true, 'github.com/'
  );

  //link input file to image
  const profileImg = document.getElementById("photo1"),
    input = document.getElementById("uploadFile");

  input.addEventListener("change", () => {
    profileImg.src = URL.createObjectURL(input.files[0]);
  });

  //background cover change
  let coverChange = document.getElementById("coverChange");
  let bodyDiv = document.getElementById("bodyDiv");
  let card = document.getElementById("cardProfile");

  coverChange.addEventListener("change", () => {
    if (coverChange.value === "Yes") {
      bodyDiv.style.backgroundImage =
        "url(https://images.pexels.com/photos/1175136/pexels-photo-1175136.jpeg?auto=compress&cs=tinysrgb&w=600)";
      bodyDiv.style.backgroundSize = "cover";
      bodyDiv.style.color = "white";
    } else {
      bodyDiv.style = bodyDiv.value;
    }
  });

  //Social Media Icon Position
  let smPosition = document.getElementById("position");
  let shareIcons = document.getElementById("shareIcons");

  smPosition.addEventListener("change", () => {
    if (smPosition.value === "Right") {
      shareIcons.style.transform =  "translate(310px, -190px)"
    } else {
      shareIcons.style = shareIcons.value;
    }
  });
};
