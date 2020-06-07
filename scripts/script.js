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

// A User defined string 
let sequenceTwo = 'AACGTACTATAACGAGGACTACGATACGCGCGCTAGCGGATATAAACGACTG'

// How to search a substring in a string, giving its position and which is case insensitive
// console.log(sequenceTwo.search(/tac/i))

// Find the character at in the string at the 4th index
// console.log(sequenceTwo.charAt(4))

const motifs = {}

    motifs.motif1 = 'TATA';
    motifs.motif2 = 'CGCG';
    motifs.motif3 = 'TAACGCG';

// Find a substring in a given sequence and output its index for each occurence using arrays
const findSubstrings = (string, subString)=>{
    const posArray = [];
    for(let pos = string.indexOf(subString); pos !== -1; pos = string.indexOf(subString, pos+1)){
        posArray.push(pos);   
    }
    return posArray;
}

const reverseSeq = (randomizedGene) =>{
    return randomizedGene.split('').reverse().join('');
}

$('.mainTop button').on('click', function(){
    $('.mainBot').empty()
    const random = generateSequence (200);
    const name = prompt('What do you want to name your gene?');
    if(name){
        $('.mainBot').append(`<p>The Sequence of ${name} is:</p>`);
        $('.mainBot').append(`<p>' ${random} ' </p>`);
        $('.mainBot').css('padding', '15px');
        // $('.mainBot').css('width', '35%');
        $('.nameOfGene').html(`<p> ${name} </p>`);
        $('html, body').animate({
            scrollTop: $('#mainBot').offset().top
        }, 1000);
    
        $('.asideTop button').on('click', function(){
            $('.asideBot').empty()
            const rseq = reverseSeq(random);
            $('.asideBot').append(`<p>Your reverse sequence is: </p>`);
            $('.asideBot').append(`<p> ' ${rseq} '</p>`)
            $('.asideBot').css('padding', '20px');
            $('html, body').animate({
                scrollTop: $('#asideBot').offset().top
            }, 1000);

            $('.footerRight button').on('click', function(){
                $('.motifsFound').empty();
                const searchMotif1 = findSubstrings(random, motifs.motif1);
                const searchMotif2 = findSubstrings(random, motifs.motif2);
                const searchMotif3 = findSubstrings(random, motifs.motif3);
                const searchMotif1R = findSubstrings(rseq, motifs.motif1);
                const searchMotif2R = findSubstrings(rseq, motifs.motif2);
                const searchMotif3R = findSubstrings(rseq, motifs.motif3);
                $('.motifsFound').append(`<p>In ${name}:</p>`)
                $('.motifsFound').append(`<p> 'TATA' was found at [${searchMotif1}]</p>`);
                $('.motifsFound').append(`<p> 'CGCG' was found at [${searchMotif2}]</p>`);
                $('.motifsFound').append(`<p> 'TAACGCG' was found at [${searchMotif3}]</p>`);
                $('.motifsFound').append(`<p>In ${name} reversed:`)
                $('.motifsFound').append(`<p> 'TATA' was found at [${searchMotif1R}]</p>`);
                $('.motifsFound').append(`<p> 'CGCG' was found at [${searchMotif2R}]</p>`);
                $('.motifsFound').append(`<p> 'TAACGCG' was found at [${searchMotif3R}]</p>`);
                $('.motifsFound').css('padding', '20px');
                $('html, body').animate({
                    scrollTop: $('#motifsFound').offset().top
                }, 1000);
            })
        })
    }
})

$(`.reset`).on('click', function(){
    location.reload();
})