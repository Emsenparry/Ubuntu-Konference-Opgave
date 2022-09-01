const TestObject = {
    nyhedone: { name: 'Nyhed 1', picture: '/assets/images/nyheder/nyhed-1.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedtwo: { name: 'Nyhed 2', picture: '/assets/images/nyheder/nyhed-2.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedthree: { name: 'Nyhed 3', picture: '/assets/images/nyheder/nyhed-3.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedfour: { name: 'Nyhed 4', picture: '/assets/images/nyheder/nyhed-4.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedfive: { name: 'Nyhed 5', picture: '/assets/images/nyheder/nyhed-5.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedsix: { name: 'Nyhed 6', picture: '/assets/images/nyheder/nyhed-6.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.' },
    nyhedseven: {name: 'Nyhed 7', picture: '/assets/images/nyheder/nyhed-7.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.'},
    nyhedeight: {name: 'Nyhed 8', picture: '/assets/images/nyheder/nyhed-8.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga. Autem tempore voluptatum fuga labore, velit similique veniam eaque molestias tenetur sint, maxime totam non error. Enim adipisci repudiandae voluptatum.'}
};

const mySec = document.getElementById('nyhedsbokse');


buildGallery()

function buildGallery() {
    for (let myIndex in TestObject) {
        let myName = TestObject[myIndex].name;
        let myUrl = TestObject[myIndex].picture;
        let myDescription = TestObject[myIndex].description;

        buildCard(myName, myUrl, myDescription)
    }
}


function buildCard(myHeadline, myUrl, myDescription){

    const myCard = document.createElement('div');
    const cardHeadline = document.createElement('h2');
    const cardImage = document.createElement('img');
    const cardDescription = document.createElement('p');

    cardHeadline.innerText = myHeadline;
    cardImage.src = myUrl;
    cardDescription.innerText = myDescription;


    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    mySec.appendChild(myCard);
}