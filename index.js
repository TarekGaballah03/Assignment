const quote =[
    {'quote':"Resentment is like drinking poison and waiting for your enemies to die.",
    'writer':"--Nelson Mandela"
    },
    {'quote':"It's not what happens to you, but how you react to it that matters.",
    'writer':"--Epictetus"
    },
    {'quote':"You miss 100% of the shots you don't take.",
    'writer':"--Wayne Gretzy"
    },
    {'quote':"Do not take life too seriously. You will not get out alive.",
    'writer':"--Elbert Hubbard"
    },
    {'quote':"The best revenge is massive success.",
    'writer':"--Frank Sinatra"
    }  
]
let LastQuote=-1;
function getQuote(){
    var index;
    do{
        index= Math.floor(Math.random()*quote.length);
    }while(index===LastQuote)
        LastQuote=index;
        
document.getElementById("quote").innerHTML=quote[index].quote;
document.getElementById("writer").innerHTML=quote[index].writer;
}