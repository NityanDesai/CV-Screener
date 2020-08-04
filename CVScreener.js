let data = [
    {
        name: "Samir",
        age: 20,
        city: "Vadodara",
        language: 'Python',
        framework: "Djhango",
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: "Harsh",
        age: 22,
        city: "Ahemdabad",
        language: 'PHP',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: "Amarjeet",
        age: 52,
        city: "Banglore",
        language: 'C++',
        framework: "-",
        image: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    {
        name: "Rohan",
        age: 18,
        city: "Kolkata",
        language: 'JS',
        framework: "NodeJS",
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        name: "Ramesh",
        age: 40,
        city: "Mumbai",
        language: 'JS',
        framework: "React",
        image: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
        name: "Harshal",
        age: 29,
        city: "Dehli",
        language: 'JS',
        framework: "Angular 1",
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: "Suresh",
        age: 25,
        city: "Chennai",
        language: 'JS',
        framework: "Angular 2",
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: "Jay",
        age: 24,
        city: "Surat",
        language: 'JS',
        framework: "Angular 3",
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: "Hakan",
        age: 22,
        city: "Istanbul",
        language: 'JS',
        framework: "Anguular 4",
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    }
]
// CV Iterator
function cvi(profiles) {
    let ni = 0;
    // Returning object
    return {
        next: function () {
            if (ni < profiles.length) {
                return {
                    value: profiles[ni++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let cand = cvi(data);

nextCV();
let next = document.getElementById('next');
next.addEventListener('click', nextCV);
let alert = document.getElementById('alert');
// console.log(cand);
function nextCV() {
    let currCand = cand.next().value;
    // console.log(currCand);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currCand != undefined) {
        image.innerHTML = `<img src="${currCand.image}">`;
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currCand.name}</li>
                            <li class="list-group-item">${currCand.age} yrs Old</li>
                            <li class="list-group-item">Lives in: ${currCand.city}</li>
                            <li class="list-group-item">Mastered in language: ${currCand.language}</li>
                            <li class="list-group-item">With framework: ${currCand.framework}</li>
                        </ul>`
    }
    else {
        alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>That was last application!</strong> You should click close alert button to reload the page.
        <button id="close" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button></div>`;
        let close = document.getElementById('close');
        close.addEventListener('click', refresh);
    }
}

function refresh() {
    window.location.reload();
}