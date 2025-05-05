console.log("projectt");

const baseUrl = "https://assignment-06-server.onrender.com";

async function getPosts() {
  console.log("I am getPosts and I am about tp fetch data");
  const response = await fetch(`${baseUrl}/location`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log("I am getPosts amd about to give data to renderDataOntoPage");
  renderDataOntoPage(data);
}

function renderDataOntoPage(apiResults) {
  console.log("I am renderDataOntoPage and about to loop throught the array");
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  for (let index = 0; index < apiResults.length; index++) {
    const element = apiResults[index];
    console.log(element);

    const newTitle = document.createElement("h2");
    const newBody = document.createElement("p");

    newTitle.textContent = element.title;

    newBody.textContent = element.body;

    resultsDiv.appendChild(newTitle);
    resultsDiv.appendChild(newBody);
  }
}
const postsBtn = document.getElementById("get-posts-button");
postsBtn.addEventListener("click", function () {
  console.log("I am about to call getPosts");
  getPosts();
});
