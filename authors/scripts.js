let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

const displayAuthors = () => {
    const authorsList = document.getElementById('authors');
    
    const authorsHTML = authors.map((author) => {
        const fullName = `${author.firstName} ${author.lastName}`;
        const imgSrc = `./img/tile_${author.firstName.toLowerCase()}_${author.lastName.toLowerCase()}.jpg`;

        return `
            <li>
                <a href="#">
                    <img src="${imgSrc}" alt="Portrait of ${fullName}">
                    <h2><span>${fullName}</span></h2>
                </a>
            </li>
        `;
    }).join('');

    authorsList.innerHTML = authorsHTML;
}

displayAuthors();