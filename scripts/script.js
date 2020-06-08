const geneHunter = {};

// Define motifs
geneHunter.motifs1 = 'TATA';
geneHunter.motifs2 = 'CGCG';
geneHunter.motifs3 = 'TAACGCG';

geneHunter.makeGene = ()=>{
    // Create a random sequence with a specified length
    generateSequence = (length)=> {
        let newString = '';
        let character = 'ACGT';
        let characterLength = character.length;
        for (i = 0; i < length; i++){
            newString += character.charAt(Math.floor(Math.random()*characterLength))
        }
        return newString;
    }
    $('.mainTop button').on('click',function(){
        $('.mainBot').empty();
        geneHunter.name = prompt('What do you want to name your gene?');
        if(geneHunter.name){
            geneHunter.random = generateSequence(200);
            $('.mainBot').append(`<p>The Sequence of ${geneHunter.name} is:</p>`);
            $('.mainBot').append(`<p>' ${geneHunter.random} ' </p>`);
            $('.mainBot').css('padding', '15px');
            $('.nameOfGene').html(`<p> "${geneHunter.name}"</p>`);
            $('html, body').animate({
                scrollTop: $('#mainBot').offset().top
            }, 1000);
        }
        else{
            alert('Please type in a name')
        }
    })
}

geneHunter.reverseGene = ()=>{
    // Reverse a sequence
    reverseSeq = (randomizedGene) =>{
    return randomizedGene.split('').reverse().join('');
    }
    $('.asideTop button').on('click', function(){
        if(geneHunter.name){
            geneHunter.rseq = reverseSeq(geneHunter.random);
            $('.asideBot').empty()
            $('.asideBot').append(`<p>Your reverse sequence is: </p>`);
            $('.asideBot').append(`<p> ' ${geneHunter.rseq} '</p>`)
            $('.asideBot').css('padding', '20px');
            $('html, body').animate({
                scrollTop: $('#asideBot').offset().top
            }, 1000);
        }
        else{
            alert('Please create a Gene above')
        }
    })
}

geneHunter.searchSequence = ()=>{
    // Find a substring in a given sequence and output its index for each occurence using arrays
    findSubstrings = (string, subString)=>{
    const posArray = [];
    for(let pos = string.indexOf(subString); pos !== -1; pos = string.indexOf(subString, pos+1)){
        posArray.push(pos);   
    }
    return posArray;
    }
    $('.footerRight button').on('click', function(){
        if(geneHunter.name){
            $('.motifsFound').empty();
            const searchMotif1 = findSubstrings(geneHunter.random, geneHunter.motifs1);
            const searchMotif2 = findSubstrings(geneHunter.random, geneHunter.motifs2);
            const searchMotif3 = findSubstrings(geneHunter.random, geneHunter.motifs3);
            const searchMotif1R = findSubstrings(geneHunter.rseq, geneHunter.motifs1);
            const searchMotif2R = findSubstrings(geneHunter.rseq, geneHunter.motifs2);
            const searchMotif3R = findSubstrings(geneHunter.rseq, geneHunter.motifs3);
            $('.motifsFound').append(`<p>In ${geneHunter.name}:</p>`);
            $('.motifsFound').append(`<p> 'TATA' was found at [${searchMotif1}]</p>`);
            $('.motifsFound').append(`<p> 'CGCG' was found at [${searchMotif2}]</p>`);
            $('.motifsFound').append(`<p> 'TAACGCG' was found at [${searchMotif3}]</p>`);
            $('.motifsFound').append(`<p>In ${name} reversed:`);
            $('.motifsFound').append(`<p> 'TATA' was found at [${searchMotif1R}]</p>`);
            $('.motifsFound').append(`<p> 'CGCG' was found at [${searchMotif2R}]</p>`);
            $('.motifsFound').append(`<p> 'TAACGCG' was found at [${searchMotif3R}]</p>`);
            $('.motifsFound').css('padding', '20px');
            $('html, body').animate({
                scrollTop: $('#motifsFound').offset().top
            }, 1000);
        }
        else{
            alert('Please create a Gene above');
        }
    })
}

$(`.reset`).on('click', function(){
    location.reload();
})

geneHunter.init = function(){
    geneHunter.makeGene();
    geneHunter.reverseGene();
    geneHunter.searchSequence();
}

$(document).ready(function(){
    geneHunter.init();
})