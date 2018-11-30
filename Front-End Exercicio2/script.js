// let container = document.getElementById('container');

// const getUsers = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(result => {
//         return result.json();
//     })
//     .then(pictures => {
//         console.log(pictures);
//         let pics = pictures;

//         container.innerHTML = pics.map(thumbs => {
//             return `<ul>
//                 <li>${thumbs.name}</li>
//                 <li>${thumbs.email}</li>
//                 <li>${thumbs.website}</li>
//                 <li>${thumbs.address.street}</li>
//                 <li>${thumbs.address.suite}</li>
//                 <li>${thumbs.address.city}</li>
//             </ul>`;
//         }).join('')

//     })
//     .catch(error => console.log(error));
// }
// getUsers();


let container_post = document.getElementById('container_post');

const getThumb = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(result => {
        return result.json();
    })
    .then(pictures => {
        console.log(pictures);
        let pics = pictures;

        container.innerHTML = pics.map(thumbs => {
            return `<ul>
                <li>${thumbs.albumId}</li>
                <li>${thumbs.thumbnailUrl}</li>
                <li>
                    <img src="${thumbs.thumbnailUrl}" />
                </li>
            </ul>`;
        }).join('')

    })
    .catch(error => console.log(error));
}
getThumb();










// // Async pictures fetch
// async function getUsers() {
//     try {
//         const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const pictures = await result.json();
//         let pics = pictures;

//         container.innerHTML = pics.map(ppl => {
//             return `<ul>
//                 <li>${ppl.name}</li>
//                 <li>${ppl.email}</li>
//                 <li>${ppl.website}</li>
//             </ul>`;
//         }).join('')
//     } catch(error) {
//         alert(error);
//     }
// }
// getUsers();


// // An other way of doing it
// for (let i = 0; i < pictures.length; i++) {
//     let personEl = document.createElement('ul');
//     personEl.innerHTML = '<li>' + pictures[i].name + '</li>' +
//                         '<li>' + pictures[i].email + '</li>' +
//                         '<li>' + pictures[i].website + '</li>';
//     container.appendChild(personEl);
// }
