

// import Plotly from '../node_modules/plotly.js'

// import { Dashboard } from "./user-dash"

async function getUserStats(user) {


    console.log(`Fetching ${user}...`)
    loading()
    const result = fetch(`https://overfast-api.tekrop.fr/players/${user}`)
    // const result = fetch(`http://0.0.0.0:3000/players/${user}`)
    // const result = fetch(`http://127.0.0.1:3000/heroes`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {

            hideInput()
            populate()

            const userProfilePic = document.getElementById('user-pfp') 
            const userDisplay = document.getElementById('user-display') 
            const userEndorsment = document.getElementById('user-endorsment') 
            const tankRank = document.getElementById('tank-rank')
            const damageRank = document.getElementById('damage-rank')
            const supportRank = document.getElementById('support-rank')

            userDisplay.innerHTML = data['summary']['username']
            userProfilePic.src = data['summary']['avatar']
            userEndorsment.src = data['summary']['endorsement']['frame']

            const roles = ['tank', 'damage', 'support']
            const ranks = [tankRank, damageRank, supportRank]

            for (i=0;i<roles.length;i++) {
                console.log(roles[i])
                console.log(data)
                try {
                    ranks[i].src = data['summary']['competitive']['pc'][roles[i]]['rank_icon']
                } catch(err) {
                    console.log(err)
                    ranks[i].src = './img/dash.png'
                }
            }

            getMatchStats() // add 'use' param when searching for a users stats
            
        }) 
}

async function getMatchStats() {
    const cardNum = 7
    const result = fetch('http://localhost:8000/matches')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)

            const mapCards = document.getElementsByClassName('map-card')
            const heroCards = document.getElementsByClassName('hero-cards')

            for (i=0;i<cardNum;i++) {
                let matchData = data[String(i)]
                mapCards[i].src = matchData['metadata']['map_card']

                let times = []
                for (const [key, value] of Object.entries(matchData['stats']['heroes'])) {
                    times.push([key, value['time']])
                  }
                times.sort((a, b) => {
                    return a[1] - b[1];
                });

                for (j=0;j<3;j++) {
                    // console.log(times[j][0])
                    // console.log('')
                    heroCards[i].children[j].src = matchData['stats']['heroes'][times[j][0]]['link']
                    // heroCards[i].children[j].src = 
                }
            }

        })


}


async function getHeroLinks(hero) {

    const result = await fetch('https://overfast-api.tekrop.fr/heroes')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            for (var index in data) {
                if (data[index]['key'] == hero.toLowerCase()) {
                    console.log(data[index]['portrait'])
                    return data[index]['portrait']
                } 
            }
        })

}

// getHeroLinks('ana')


async function getRankLinks() {

}

function populateLeaderboards() {
    const leaderboards = document.getElementsByClassName('leader-list')
    console.log(leaderboards)
    console.log(leaderboards)
}
populateLeaderboards()

function loading() {
    const mainBox = document.getElementById('main')
    mainBox.style.backgroundColor = '#333'
    mainBox.innerHTML = `<div class="overwatch-loader">
    <svg class="overwatch-logo" viewbox="0 0 1000 1000">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" x="200" y="210">
            <defs></defs>
            <path d="M296.704.004c-66.766.428-132.772 24.23-184.63 66.083l56.662 65.786c47.82-37.74 112.256-53.118 172.018-41.237 32.844 6.318 64.096 20.74 90.464 41.237l56.66-65.786C434.242 22.804 365.77-1.03 296.705.004z" color="#000" fill="#fa9c1e" overflow="visible"/>
            <path d="M93.628 82.253C33.924 138.343-1.082 219.877.026 302.123c.035 85.37 38.978 169.23 103.652 224.696 59.78 52.283 141.085 78.917 220.46 72.18 86.01-6.405 167.65-52.345 218.118-122.143 49.125-66.33 68.37-153.797 52.064-234.91-11.987-62.09-44.54-119.634-90.837-162.405l-56.662 65.786c45.657 43.034 70.586 106.557 65.886 169.224-2.056 31.05-11.074 61.69-26.314 88.96L370.92 291.974 312.66 166.39l-.088 190.18 116.695 112.926c-52.002 40.402-123.353 53.802-186.578 35.894-25.744-7.18-50.122-19.23-71.31-35.398L288.87 356.57c-.206-61.831.717-128.578 0-190.383L230.52 291.974 114.058 404.437c-35.53-62.024-36.38-142.21-2.182-204.927 10.69-20.092 24.84-38.428 41.257-54.182L96.47 79.542l-2.842 2.71z" color="#000" fill="#fff" overflow="visible"/>
      </svg>
    </svg>
    <svg class="circularCW" viewbox="0 0 1000 1000">
        <circle class="path" cx="500" cy="500" r="355" stroke="#fa9c1e"  fill="none" />
    </svg>
    <svg class="circularCCW" viewbox="0 0 1000 1000" style="animation-duration: 1.5s">
        <circle class="path2" cx="500" cy="500" r="355" stroke="#fa9c1e" fill="none" />
    </svg>
    <svg class="circularCW" viewbox="0 0 1000 1000">
        <circle class="path3" cx="500" cy="500" r="355" stroke="#fa9c1e" fill="none" />
    </svg>
      <svg class="circularCW" viewbox="0 0 1000 1000">
        <circle class="path4" cx="500" cy="500" r="355" stroke="#fa9c1e" fill="none" />
    </svg>
    <svg class="circularCW" viewbox="0 0 1000 1000">
        <circle class="path5" cx="500" cy="500" r="420" stroke="#fff" fill="none" />
    </svg>
      <svg class="circularCW" viewbox="0 0 1000 1000">
        <circle class="path6" cx="500" cy="500" r="420" stroke="#fff" fill="none" />
    </svg>
      <svg class="circularCCW" viewbox="0 0 1000 1000">
        <circle class="path7" cx="500" cy="500" r="420" stroke="#fff" fill="none" />
    </svg>
      <svg class="circularCCW" viewbox="0 0 1000 1000" style="animation-timing-function: ease-in-out">
        <circle class="path8" cx="500" cy="500" r="420" stroke="#fff" fill="none" />
    </svg>
</div>`
}


function search() {
    const username = document.getElementById('username').value
    if (username != '' && username != ' ') {
        getUserStats(username)
    }
   
}



function hideInput() {
    document.getElementById('input-box').style.display = 'none'
}

function test(data) {
    document.getElementById('test').innerHTML = data
}


function fillMatches() {
    const cardContainer = document.getElementById('match-container')
    const baseCard = document.getElementById('base-card')
    for (i=0; i<7;i++) {
        console.log('hey')
        cardContainer.appendChild(baseCard)
    }
}

// fillMatches()


// import Plotly from 'node_mod'

// function plotTrace() {
//     var trace1 = {
//         x: [1, 2, 3, 4],
//         y: [10, 15, 13, 17],
//         type: 'scatter'
//       };
      
//       var trace2 = {
//         x: [1, 2, 3, 4],
//         y: [16, 5, 11, 9],
//         type: 'scatter'
//       };
      
//       var data = [trace1, trace2];
      
//       Plotly.newPlot('elim-plot', data);

// }

// plotTrace()

function populate() {
    const mainBox = document.getElementById('main')
    // mainBox.innerHTML = Dashboard
    mainBox.innerHTML = `<div class="Profile-player">
    <div class="Profile-player--summaryWrapper"><img id="user-pfp" class="Profile-player--portrait"
            src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/04097daa03cfaf51c8fb28dcb4bc2323d4dfaec74298ab929eee7c991916c2b.png">
        <div class="Profile-player--summary">
            <h1 id="user-display" class="Profile-player--name">Ligma</h1>
        </div>
    </div>
    <h2 class="Profile-player--title"></h2>
    <div class="Profile-player--info"><span class="Profile-player--endorsementWrapper"><img id="user-endorsment"
                class="Profile-playerSummary--endorsement"
                src="https://static.playoverwatch.com/img/pages/career/icons/endorsement/2-8b9f0faa25.svg#icon"></span>
        <div class="mouseKeyboard-view Profile-playerSummary--rankWrapper is-active">
            <div class="Profile-playerSummary--roleWrapper">
                <div class="Profile-playerSummary--role"><img
                        src="https://static.playoverwatch.com/img/pages/career/icons/role/tank-f64702b684.svg#icon">
                </div><img class="Profile-playerSummary--rank" id="tank-rank"
                    src="https://static.playoverwatch.com/img/pages/career/icons/rank/BronzeTier-2-a5bc9cc7f7.png">
            </div>
            <div class="Profile-playerSummary--roleWrapper">
                <div class="Profile-playerSummary--role"><img
                        src="https://static.playoverwatch.com/img/pages/career/icons/role/offense-ab1756f419.svg#icon">
                </div><img class="Profile-playerSummary--rank" id="damage-rank"
                    src="https://static.playoverwatch.com/img/pages/career/icons/rank/GoldTier--f715b68968.png">
            </div>
            <div class="Profile-playerSummary--roleWrapper">
                <div class="Profile-playerSummary--role"><img
                        src="https://static.playoverwatch.com/img/pages/career/icons/role/support-0258e13d85.svg#icon">
                </div><img class="Profile-playerSummary--rank" id="support-rank"
                    src="https://static.playoverwatch.com/img/pages/career/icons/rank/BronzeTier-1-5daef87bda.png">
            </div>
        </div>
        <div class="controller-view Profile-playerSummary--rankWrapper">
            <div id="elim-plot" class="border">


            </div>
        </div>
    </div>
    <div class="Profile-player--filters">
        <blz-button class="Profile-player--filter is-active" id="mouseKeyboardFilter"
            analytics-status="enabled" analytics-event="ctaOther" analytics-label="PC"
            analytics-placement="profiles" listening="">
            <blz-icon icon="bn-desktop-filled" size="300" listening=""></blz-icon>PC
        </blz-button>
        <blz-button class="Profile-player--filter" id="controllerFilter" analytics-status="enabled"
            analytics-event="ctaOther" analytics-label="Console" analytics-placement="profiles"
            listening="">
            <blz-icon icon="bn-console-filled" size="300" listening=""></blz-icon>Console
        </blz-button>

    </div>

    <div class="border">
        <h1 class="Profile-player--name">Recent Matches</h1>
        <div id="match-container" class="card-container">
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>


            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div>
                    <table class="stats-table">
                        <tr>
                            <td>E</td>
                            <td>A</td>
                            <td>D</td>
                            <td>O</td>
                            <td>H</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>12</td>
                            <td>8</td>
                            <td>300</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
                

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            <div id="base-card" class="card border">
                <img class="map-card border"/>
                <div class="hero-cards">
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                    <img class="hero-card border"/>
                </div>
                <div class="row map-info">
                    <p>King's Row</p>
                    <p>|</p>
                    <p>15/12/22</p>
                </div>
                <div class="card-info row">
                    <p>E</p>
                    <p>A</p>
                    <p>D</p>
                    <p>O</p>
                    <p>H</p>
                    <p>M</p>
                </div>
                <div class="card-info row">
                    <p>26</p>
                    <p>12</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                    <p>8</p>
                </div>

                <div class="rating">
                    5 Star Game

                </div>

            </div>
            
            

        </div>

    </div>


</div>`
}