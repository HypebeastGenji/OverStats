import logo from './logo.svg';
import { Dashboard } from './components/Dashboard'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [userName, searchUser] = useState("")

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

              for (let i=0;i<roles.length;i++) {
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

              for (let i=0;i<cardNum;i++) {
                  let matchData = data[String(i)]
                  mapCards[i].src = matchData['metadata']['map_card']

                  let times = []
                  for (const [key, value] of Object.entries(matchData['stats']['heroes'])) {
                      times.push([key, value['time']])
                    }
                  times.sort((a, b) => {
                      return a[1] - b[1];
                  });

                  for (let j=0;j<3;j++) {
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
  // console.log(user)
  // console.log(user)

  if (username !== '' && username !== ' ') {
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
  for (let i=0; i<7;i++) {
      console.log('hey')
      cardContainer.appendChild(baseCard)
  }
}


function populate() {
  const mainBox = document.getElementById('main')
  mainBox.innerHTML = Dashboard
  
}


  return (
          <div>
            <div className="header">
              <a href="/"><h1 className="logo-title">OverStats</h1></a>
            </div>
            <div>
              <div id="input-box" className="input-box">
                <br />
                <p>Enter Username</p>
                <input id="username" type="text" placeholder="e.g Sniff-3391" />
                <br />
                <p>Stat options: </p>
                <div className="row options">
                  <p>check</p>
                  <p>check</p>
                  <p>check</p>
                  <p>check</p>
                </div>
                <div className="row options">
                  <p>check</p>
                  <p>check</p>
                  <p>check</p>
                  <p>check</p>
                </div>
                <button className="search-btn" onClick={() => {
                    search()
                }}>Search</button>
              </div>
              <div id="main" className="output-box">
                <div>
                  <h1 className="logo-title">Leaderboards</h1>
                  <div className="region-selector">
                    <button onclick="getLeaderboards('america')">America</button>
                    <button onclick="getLeaderboards('asia')">Asia</button>
                    <button onclick="getLeaderboards('europe')">Europe</button>
                  </div>
                  <div className="leaderboards row">
                    <div id="tank-leaderboard" className="leaderboard">
                      <h2 className="role-title">Tank</h2>
                      <div className="leader-list">
                        <div className="leaders row">
                          <p>1</p>
                          <img alt="" className="rank-img" src="https://static.playoverwatch.com/img/pages/career/icons/rank/GoldTier-3-f715b68968.png" />
                          <p>Super</p>
                          <p>400 Games</p>
                          <div className="top-heroes row">
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                          </div>
                        </div>
                      </div>
                      {/* <ol class="leader-list">
                                    <li><div><p>1</p><p>Super</p></div></li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                    <li>Super</li>
                                </ol> */}
                    </div>
                    <div id="damage-leaderboard" className="leaderboard">
                      <h2 className="role-title">Damage</h2>
                      <div className="leader-list">
                        <div className="leaders row">
                          <p>1</p>
                          <img alt="" className="rank-img" src="https://static.playoverwatch.com/img/pages/career/icons/rank/GoldTier-3-f715b68968.png" />
                          <p>Super</p>
                          <p>400 Games</p>
                          <div className="top-heroes row">
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="support-leaderboard" className="leaderboard">
                      <h2 className="role-title">Support</h2>
                      <div className="leader-list">
                        <div className="leaders row">
                          <p>1</p>
                          <img alt="" className="rank-img" src="https://static.playoverwatch.com/img/pages/career/icons/rank/GoldTier-3-f715b68968.png" />
                          <p>Super</p>
                          <p>400 Games</p>
                          <div className="top-heroes row">
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                            <img alt="" className="top-hero" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p id="test" />
              </div>
            </div>
          </div>
  );
}

export default App;
