$(document).ready(function(){
})

// Create a random sequence with a specified length
let generateSequence = (length)=> {
    let newString = '';
    let character = 'ACGT';
    let characterLength = character.length;
    for (i = 0; i < length; i++){
        newString += character.charAt(Math.floor(Math.random()*characterLength))
    }
    return newString;
}

// Generate a random String called sequenceOne
let sequenceOne = (generateSequence(40));

// A User defined string 
let sequenceTwo = "AACGTACTATAACGAGGACTACGATACGCGCGCTAGCGGATATAAACGACTG"

// How to search a substring in a string, giving its position and which is case insensitive
// console.log(sequenceTwo.search(/tac/i))

// Find the character at in the string at the 4th index
// console.log(sequenceTwo.charAt(4))

let motifs = {
    motif1 : 'TATAA',
    motif2: 'CGCG',
    motif3: 'TAACGCG'
}

// Find a substring in a given sequence and output its index for the first occurence
let searchSequence = (sequence, motif) => {
    motif = motif.toUpperCase();
    let positions = sequence.search(motif);
    return positions;
}

let searchSequence2 = (sequence, motif) => {
    motif = motif.toUpperCase();
    let positions2 = sequence.indexOf(motif);
    return positions2;
}
// console.log(searchSequence(sequenceTwo, 'tataa'))
// console.log(searchSequence2(sequenceTwo, motifs.motif2))

function allIndexOf(str, toSearch) { 
    let indices = []; // Gives an empty array
    for(let pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        indices.push(pos);
    } // let pos = first occurence; as long as pos doesn't == -1 (which means, as long as the substring is found); pos = str.indexOf('TATA' + 1) // Would it mean the next posititon??
    return indices; // Returns the new array
}

// console.log(allIndexOf(sequenceTwo, motifs.motif2));

let reverseSeq = (input) =>{
    // return input.split("");
    // return input.reverse();
    // return input.join("");
    return input.split("").reverse().join("");
}
// console.log(sequenceOne)
// console.log(reverseSeq(sequenceOne))

$('.mainTop button').on('click', function(){
    const random = generateSequence (15);
    const name = prompt('What do you want to name your gene?')
    if(name){
        $('.mainBot').append(`<p>${name} is:</p>`);
        $('.mainBot').append(`<p>"${random}" </p>`);
        $('.mainBot').css("padding", "20px");
        $('.nameOfGene').html(`<p> ${name} </p>`)
        $('.nameOfGene').css('color', 'gold');
        $('html, body').animate({
            scrollTop: $("#mainBot").offset().top
        }, 1000);
    
        $('.asideTop button').on('click', function(){
            const rseq = reverseSeq(random);
            $('.asideBot').html(`<p>Your reverse sequence is: ${rseq}</p>`);
            $('.asideBot').css("padding", "20px");
            $('html, body').animate({
                scrollTop: $("#asideBot").offset().top
            }, 1000);
    
            $('.footerRight button').on('click', function(){
                const search = allIndexOf(sequenceTwo, motifs.motif2);
                $('.motifsFound').append(`<p> The motifs were found at [${search}]</p>`);
                $('.motifsFound').css("padding", "20px");
                $('html, body').animate({
                    scrollTop: $("#motifsFound").offset().top
                }, 1000);
    
            })
        })
    }
    
})

$(`.reset`).on('click', function(){
    location.reload();
})

// $('html, body').animate({
//     scrollTop: $("#header").offset().top
// }, 1000);