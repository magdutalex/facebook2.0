postContainer = document.getElementById("div");
postContainer.classList.add("post-container");


userImgPostWrapper = document.createElement("div");
userImgPostWrapper.classList.add("user-img-post-wrapper");

profilePicImage = document.createElement("img");
profilePicImage.src = "./img/profile-pic.jpg";
profilePicImage.classList.add("user-img-post");

userImgPostWrapper.appendChild(profilePicImage);

postWrapper = document.getElementById("div");
postWrapper.classList.add("post-wrapper");

postDetails = document.createElement("div");
postDetails = document.classList.add("post-details");

postDetailsAuthor = document.createElement("p");
postDetailsAuthor.classList.add("post-details-author");
postDetailsAuthor.innerText = "Magdut Alex";

postDetailsDateLocation = document.createElement("p");
postDetailsDateLocation.classList.add("post-detalis-date-location");
postDetailsDateLocation.innerText = "26/05/2021 - Romania";

postDetails.appendChild(postDetailsAuthor);
postDetails.appendChild(postDetailsDateLocation);

postImageWrapper = document.createElement("div");
postImageWrapper.classList.add("post-img-wrappper");

postImage = document.createElement("img");
postImage.classList.add("post-img");
postImageWrapper.src = "./img/img-post-1.jpg";

postImageWrapper.appendChild(postImage);

postContent = document.createElement("div");
postContent.classList.add("post-content");

postText = document.createElement("p");
postText.classList.add("post-text");
postText.innerText = "Tanananannanananana";

barLikeComment = document.createElement("div");
barLikeComment.classList.add("bar-like-comment");

leftLikeBotton = document.createElement("div");
leftLikeButton.classList.add("left-like-bottom");

 // De aici am pierdut sirul //

postLikeButton = document.createElement("div");
postLikeButton.classList.add("img-like");

imgLike = document.createElement("img")
imgLike.classList.add("like-pic");
imgLike.src = "./img/like-thumb-black-product.png";

postLikeBtnText = document.createElement("div");
postLikeBtnText.innerText = "Like";

postLinkBtnWrapper.appendChild("like-pic");
postLinkBtnWrapper.appendChild("");

postButtonSeparator = document.createElement("div");
postButtonSeparator.classList.add("line-separator");

barComment = document.createElement("div");
barComment.classList.add("bar-comment");

rightCommentBottom = document.createElement("img-comment");
rightCommentBottom.classList.add("comment-pic")
rightCommentBottom.src = "./img/Chat-2-512.png";

postCommentPic = document.createElement("p");
postCommentPic.innerText = "Comment";

postCommentBtnWrapper.apendChild();
postCommentBtnWrapper.appendChild();

postBtns.appendChild()
postBtns.appendChild()
postBtns.appendChild()

postContent.appendChild(postText);
postContent.apendChild(postBtns);

postWrapper.appendChild(postDetails);
postWrapper.appendChild(postImageWrapper);
postWrapper.appendChild(postContent);

postContainer.appendChild(userImgPostWrapper);
postContainer.appendChild(postWrapper);

document.querySelector("#posts-wrapper").appendChild(postContainer);