async function guessMyAge() {
  const name = document.getElementById("name").value;
  const countryCode = document.getElementById("country").value;

  if (!name) {
    alert("Name needs a value!");
    return;
  }

  const url = new URL("https://api.agify.io");
  url.searchParams.set("name", encodeURIComponent(name));
  url.searchParams.set("country_id", countryCode);

  const response = await fetch(url);
  const responseObject = await response.json();
  const age = responseObject.age;

  const ageContainer = document.getElementById("age");
  ageContainer.innerText = age;
}
