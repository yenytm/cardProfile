window.onload = () => {
  //Input Value Function
  function enterInput(input, textElement, mediaLink = false) {
    if (mediaLink) {
      input.addEventListener("input", () => {
        textElement.href = input.value;
        return;
      });
    }
    input.addEventListener("input", () => {
      textElement.innerText = input.value;
    });
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

  //Link Input

  let igBTN = document.getElementById("instagramIcon");
  let igInput = document.getElementById("insta");

  igBTN.addEventListener("click", () => {
    window.open(igInput.value);
  });

  let threadBTN = document.getElementById("xIcon");
  let threadsInput = document.getElementById("xTwitter");

  threadBTN.addEventListener("click", () => {
    window.open(threadsInput.value);
  });

  let linkedBTN = document.getElementById("linkedIcon");
  let linkedInput = document.getElementById("linkedIn");

  linkedBTN.addEventListener("click", () => {
    window.open(linkedInput.value);
  });

  let gitBTN = document.getElementById("githubIcon");
  let gitInput = document.getElementById("github");

  gitBTN.addEventListener("click", () => {
    window.open(gitInput.value);
  });

  //link input file to image
  const profileImg = document.getElementById("photo1"),
    input = document.getElementById("uploadFile");

  input.addEventListener("change", () => {
    profileImg.src = URL.createObjectURL(input.files[0]);
  });

  //background cover change
  let coverChange = document.getElementById("coverChange");
  let bodyDiv = document.getElementById("bodyDiv");

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
      shareIcons.style.flexDirection = "column";
      shareIcons.style.transform = "translate(160px, -255px)";
    } else if (smPosition.value === "Left") {
      shareIcons.style.flexDirection = "column";
      shareIcons.style.transform = "translate(-90px, -255px)";
    } else {
      shareIcons.style = shareIcons.value;
    }
  });
};
