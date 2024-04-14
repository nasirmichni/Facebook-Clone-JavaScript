document.addEventListener("DOMContentLoaded", function() {
    const postDescription = document.getElementById("postDescription");
    const postImage = document.getElementById("postImage");
    const postPreview = document.getElementById("postPreview");
    const uploadButton = document.getElementById("uploadButton");
    const likeButton = document.getElementById("likeButton");
    const commentButton = document.getElementById("commentButton");
    const likeCount = document.getElementById("likeCount");
    const commentCount = document.getElementById("commentCount");

    let likeCounter = 0;
    let commentCounter = 0;

    uploadButton.addEventListener("click", function() {
        const description = postDescription.value;
        const image = postImage.files[0];

        // Display image preview
        if (image) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.createElement("img");
                img.src = event.target.result;
                img.style.maxWidth = "100%";
                img.style.marginTop = "10px";
                postPreview.innerHTML = ''; // Clear previous content
                postPreview.appendChild(img);
            };
            reader.readAsDataURL(image);
        }

        // Reset description and image input after upload
        postDescription.value = "";
        postImage.value = "";

        // Increment like count if like button is clicked after posting
        likeButton.addEventListener("click", function() {
            likeCounter++;
            likeCount.textContent = likeCounter;
        });

        // Increment comment count if comment button is clicked after posting
        commentButton.addEventListener("click", function() {
            commentCounter++;
            commentCount.textContent = commentCounter;
        });
    });
});
  
  