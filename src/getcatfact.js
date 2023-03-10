//sourced from:
//https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/ https://welovecatsandkittens.com/cat-info/cat-facts/  https://www.factretriever.com/cat-facts https://youtu.be/lOLv-xhHA_I https://youtu.be/S66SskRz3PM

const cat_Facts = [ // cat facts
    "Unlike dogs, cats cannot taste sweetness due to a mutation in their key taste receptor",
    'The actual term for a cats hairball is a "bezoar"',
    "Cats can make around 100 different sounds, while dogs can only create about 10.",
    "A group of cats can be referred to as a clowder",
    "A cat's meow is exclusive to humans the cat's mother as a kitten.",
    "Cats are lactose intolerant",
    "Cats have a sense of object permanence.",
    "Cats do not understand cause and effect in the same way that humans do.",
    "Cats have great memories, with most being able to recall memories as long as 10 years ago.",
    "An average cat can jump six times it's body length.",
    "Sir Issac Newton had a cat named Spithead.",
    "A cat's sense of smell is their strongest sense, with it being 14 times stronger that a human's sense of smell.",
    "Cats rely on smell to identify people and objects.",
    "A cats purring is used for: Self healing, nervousness, and contentment.",
    "The oldest known cat video dates back to 1894. You can watch it at https://youtu.be/r6faUd2fV4U",
    "Cats use their whiskers to detect if they can fit through a space.",
    'The very first cat in space was a french cat named Felicette, or "Astrocat". She survived the trip.',
    "A cat's slow blink is a symbol of contentment and trust.",
    "Cats don't like citrus scents.",
    "In a ritual called allogrooming, cats groom other cats.",
    "Cats can be trained to use the toilet.",
    "Cats can have dreams, just like humans.",
    "Cats were brought to the Americas to help get rid of rodents.",
    "Cats have unique nose prints.",
    'Most languages have a similar word to describe the word "meow"',
    "Half of all cats don't react to catnip.",
    "As of 2017, there are around 88 million pet cats in the United States.",
    "White cats with blue eyes are the most prone to deafness.",
    "Cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.",
    "Cats have a unique collarbone that allows them to always land on their feet.",
    "Cats have a heart rate of 120-160 BPM while a human has 60-100.",
    "Cats and humans are genetically similar.",
    "Cats sweat through their paws, lips, and their anus.",
    "Cats can have dominant paws.",
    "Cats can hear sounds up to 64,000 hz.",
    "Cats can analyze scents with their mouths, it's called the flehmen response.",
    "Cats are nearsighted.",
    "Cats have whiskers on their front legs.",
    "Abraham Lincoln owned 4 cats."
]

function getRandomCatFact(){
    const randomIndex = Math.floor(Math.random() * cat_Facts.length);
    return cat_Facts[randomIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    const catTag = document.querySelector('#cat-fact');
    catTag.textContent = getRandomCatFact();
});
