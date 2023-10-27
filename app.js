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

    //Last Input
    function lastName(input, textElement) {
        input.addEventListener("input", () => {
          textElement.innerText = input.value;
        });
      }
      lastName(
        document.getElementById("lastName"),
        document.getElementById("lastNameHere")
      );



//link input file to image
        const profileImg = document.getElementById("photo1"),
        input = document.getElementById("uploadFile");

        input.addEventListener("change", () => {
            profileImg.src = URL.createObjectURL(input.files[0]);

        })

}


