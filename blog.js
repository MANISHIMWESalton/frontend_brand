const spinner = document.getElementById('loading-spinner');
function showLoading() {
    spinner.style.display = 'block';
}

function hideLoading() {
    spinner.style.display = 'none';
}
const fetchBlog = async()=>{
    showLoading()
    const res = await axios({
        method:"GET",
        url:"https://mybrandbackend-93l8.onrender.com/api/blog"

    })
    if(res.status === 200) {
    hideLoading()
    const blogs = res.data.data.Blogs    
    const article = document.getElementById("article");
    
    blogs.forEach(blog => {
        const blogHTML = `
            <div style="width:400px">
                <img src="${blog.cover}" alt="${blog.title}">
                <h2 style="width:300px">${blog.title}</h2>
                <p>${blog.content.slice(0,35)+'...'}</p>
            </div>
        `;
        article.innerHTML += blogHTML;
    });
}

}
fetchBlog()


