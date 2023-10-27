window.onload = () => {

  //RoleInput
  function roleName(input, textElement, mediaLink = false) {
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
  roleName(
    document.getElementById("role"),
    document.getElementById("roleName")
  );

  //CityInput
  function cityName(input, textElement) {
    input.addEventListener("input", () => {
      textElement.innerText = input.value + ",";
    });
  }
  cityName(
    document.getElementById("city"),
    document.getElementById("cityName")
  );

  //CountryInput
  function stateName(input, textElement) {
    input.addEventListener("input", () => {
      textElement.innerText = input.value;
    });
  }
  stateName(
    document.getElementById("state"),
    document.getElementById("stateName")
  );

  //Name Input
  function firstName(input, textElement) {
    input.addEventListener("input", () => {
      textElement.innerText = input.value + " ";
    });
  }
  firstName(
    document.getElementById("firstName"),
    document.getElementById("firstNameHere")
  );

    //Last Nane Input
    function lastName(input, textElement) {
        input.addEventListener("input", () => {
          textElement.innerText = input.value;
        });
      }
      lastName(
        document.getElementById("lastName"),
        document.getElementById("lastNameHere")
      );


    //Link Input

    let igBTN = document.getElementById("instagramIcon");
    let igInput = document.getElementById("insta");

    igBTN.addEventListener('click', () => {
      window.open(igInput.value)
    })

    let threadBTN = document.getElementById("threadsIcon");
    let threadsInput = document.getElementById("threads");

    threadBTN.addEventListener('click', () => {
      window.open(threadsInput.value)
    })

    let linkedBTN = document.getElementById("linkedIcon");
    let linkedInput = document.getElementById("linkedIn");

    linkedBTN.addEventListener('click', () => {
      window.open(linkedInput.value)
    })

    let gitBTN = document.getElementById("githubIcon");
    let gitInput = document.getElementById("github");

    gitBTN.addEventListener('click', () => {
      window.open(gitInput.value)
    })



    

    // function instaLink(input, textElement, mediaLink = false) {
    //   if (mediaLink) {
    //     input.addEventListener("input", () => {
    //       textElement.src = input.value;
    //       return;
    //     });
    //   }
    //   input.addEventListener("input", () => {
    //     textElement.src = input.value;
    //   });
    // }
    // instaLink(
    //   document.getElementById("threads"),
    //   document.getElementById("instagramIcon")
    // );






//link input file to image
        const profileImg = document.getElementById("photo1"),
        input = document.getElementById("uploadFile");

        input.addEventListener("change", () => {
            profileImg.src = URL.createObjectURL(input.files[0]);

        })


}


