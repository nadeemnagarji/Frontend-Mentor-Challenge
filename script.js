const reaction = document.getElementById('Reaction')
const Memory = document.getElementById('Memory')
const Verbal = document.getElementById('Verbal')
const Visual = document.getElementById('Visual')

const Rscore = document.getElementById('R-score')
const Mscore = document.getElementById('M-score')
const Vrscore = document.getElementById('Vr-score')
const Vlscore = document.getElementById('Vl-score')

async function fetchData(){
    try{
        const response = await fetch('data.json')
        if(!response.ok){
            throw new Error(`Network response not ok:${response.status} `)
        }
        const data = await response.json()
        return data 
    }catch(error){
        console.error("Error fetching data: ",error)

    }
}

async function displaydata(){
    const data = await fetchData()
   reaction.innerText=data[0].category
   Memory.innerText = data[1].category
   Verbal.innerText = data[2].category
   Visual.innerText = data[3].category


   Rscore.innerText = `${data[0].score} / 100`
   Mscore.innerText = `${data[1].score} / 100`
   Vrscore.innerText = `${data[2].score} / 100`
   Vlscore.innerText = `${data[3].score} / 100`
   
}
displaydata()