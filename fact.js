let btn = document.getElementById('btn');
let output = document.getElementById('output');


let quotes = [
    'The budgerigar has a surprisingly high respiration rate of up to 85 breaths per minute',
    'The first blue budgies in the UK appeared in 1878',
    'A budgerigar has more vertebrae in its neck than a human and this allows them to turn their heads up to 180 degrees. In other words, they can face backwards',
    'There are two species of pet budgie, the English budgie and the Australian budgie which is a little smaller and more like the birds you see in the wild',
    'Budgies have highly acute vision and can register over 150 images per second. This compares to a measly 16 for humans',
    'Most budgies will learn to say at least a few words. They are the most vocal of the pet bird species and boast very clear voices',
    'Losing more than a dozen drops of blood would prove fatal for a budgie',
    'Like cats when they purr, budgies grind their beaks when they are happy and feeling relaxed.',
    'According to the Guinness Book of World Records, the record holder for the bird with the largest vocabulary belongs to Puck the Budgerigar with a vocabulary of more than 1,700 words',
    'Budgerigar supposedly means "good to eat" in aboriginal language',
    'A budgie has between 2,000 and 3,000 feathers on its body',
    'Budgies can be taught to count up to three, and do very basic sums that involve just those three numbers '

]

btn.addEventListener( 'click', function(){
    var randomQuote= quotes[Math.floor(Math.random() * (quotes.length))]
    output.innerHTML = randomQuote;

})