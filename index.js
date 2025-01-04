function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const button = document.querySelector(".button img"); // Get the image inside the button
    const buttondiv = document.querySelector(".button");
    const buttonText = document.getElementById("button-text");

    // Check if the sidebar is already open
    if (sidebar.style.width === "250px") {
        // Close the sidebar and change the button image
        sidebar.style.width = "0";
        buttondiv.style.width="132px"
        button.src = "./public/arrow-icon-white-background-symbol-600w-1315536875.webp";
        buttonText.textContent = "";
        sidebar.innerHTML=`       <div class="one">1</div>
`

         // Revert to the original image
    } else {
        // Open the sidebar and change the button image
        sidebar.style.width = "250px";
        button.src = "./public/images.png";
         buttondiv.style.width="250px";
         buttonText.textContent = "Journey Board";
         sidebar.innerHTML=` <li>Explore the world of management</li>
        <li>Technical Project Management</li>
        <li>Threadbuild</li>
        <li>Structure your pointers</li>
        <li>4SA Method</li>`
    }
}
function toggleCollapsible() {
    const content = document.getElementById("content");
    const button = document.querySelector(".toggle-button");
    
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      button.textContent = "-";
    } else {
      content.style.display = "none";
      button.textContent = "+";
    }
  }
  