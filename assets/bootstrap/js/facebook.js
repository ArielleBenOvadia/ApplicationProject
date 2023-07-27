window.addEventListener("load", function() {
    const pageId = "100918756392257"; // Replace with your Facebook page ID
    const accessToken = "EAAURMBT05VwBOweysmLZACKSCCF3nlbo2ZAdJrrqhSPRaf58XcYatil5n9DFgnjt11rZBa6oEqhJ9PbSddNlHw17oHPbYNBZCZAT61ZBxcdzjPYpx0OLMyztir0yZATTyZB4xVTHiuaKDNtwz32677cxWSSuHMKSXLuUqa5dIe1yVhgwXLSwHBfZBlUAAN4FrargZD"; // Replace with your Facebook app Access Token
    const apiEndpoint = `https://graph.facebook.com/${pageId}/feed?fields=from,message&access_token=${accessToken}`;
  
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const reviewsContainer = document.getElementById("reviews-container");
        const maxReviewsToShow = 5;
        let reviewCount = 0;
  
        // Function to check if the post contains the keyword "Post"
        function isPostContainingKeyword(post) {
          const keyword = "Post"; // Change to any keyword you want to check for
          return post.message.toLowerCase().includes(keyword.toLowerCase());
        }
  
        // Loop through the posts and add them to the reviewsContainer if they don't contain the keyword "Post"
        data.data.forEach(post => {
          if (post.message && !isPostContainingKeyword(post) && reviewCount < maxReviewsToShow) {
            const reviewElement = document.createElement("div");
            reviewElement.innerHTML = `
              <h3>${post.from.name}</h3>
              <p>${post.message}</p>
              <hr>
            `;
            reviewsContainer.appendChild(reviewElement);
            reviewCount++;
          }
        });
      })
      .catch(error => console.error("Error fetching reviews:", error));
  });
  




// window.addEventListener("load", function() {
//     const pageId = "100918756392257"; // Replace with your Facebook page ID
//     const accessToken = "EAAURMBT05VwBOweysmLZACKSCCF3nlbo2ZAdJrrqhSPRaf58XcYatil5n9DFgnjt11rZBa6oEqhJ9PbSddNlHw17oHPbYNBZCZAT61ZBxcdzjPYpx0OLMyztir0yZATTyZB4xVTHiuaKDNtwz32677cxWSSuHMKSXLuUqa5dIe1yVhgwXLSwHBfZBlUAAN4FrargZD"; // Replace with your Facebook app Access Token

//     const apiEndpoint = `https://graph.facebook.com/${pageId}/feed?fields=from,message&access_token=${accessToken}`;

//     fetch(apiEndpoint)
//         .then(response => response.json())
//         .then(data => {
//             const reviewsContainer = document.getElementById("reviews-container");

//             // Function to check if the post contains the keyword "Post"
//             function isPostContainingKeyword(post) {
//                 const keyword = "Post"; // Change to any keyword you want to check for
//                 return post.message.toLowerCase().includes(keyword.toLowerCase());
//             }

//             // Loop through the posts and add them to the reviewsContainer if they don't contain the keyword "Post"
//             data.data.forEach(post => {
//                 if (post.message && !isPostContainingKeyword(post)) {
//                     const reviewElement = document.createElement("div");
//                     reviewElement.innerHTML = `
//                         <h3>${post.from.name}</h3>
//                         <p>${post.message}</p>
//                         <hr>
//                     `;
//                     reviewsContainer.appendChild(reviewElement);
//                 }
//             });
//         })
//         .catch(error => console.error("Error fetching reviews:", error));
// });




