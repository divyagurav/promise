const Posts = [{ title: 'Post1' }];



function getpost() {
    Posts.forEach((item) => {
        console.log(item.title)
    })
}






function updateLastUserActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(new Date());
        })


    }, 1000)
}

function create2Post() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Posts.push({ title: 'Post2' })
            resolve("Post2");
        }, 2000)



    })
}

function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Posts.push({ title: 'Post3' })
            resolve("Post3");
        }, 1000)



    })
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            if (Posts.length > 0) {

                let pop = Posts.pop()
                resolve(pop.title);
            }
            reject("ERROR:Post is empty")


        }, 2000)



    })

}



Promise.all([create2Post(), deletePost(), create3rdPost(), updateLastUserActivity(), deletePost(), updateLastUserActivity()]).then((data) => {
    console.log(data)
    getpost()
        .catch(err => console.log("ERROR:Post is empty"))
})
