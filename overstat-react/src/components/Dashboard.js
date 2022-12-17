
export function Dashboard() {
    return (

                <div>
                  {/* Hello world */}
       
                   <div class=" profile-player">
                      <div className="Profile-player--summaryWrapper"><img alt="" id="user-pfp" className="Profile-player--portrait" src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/04097daa03cfaf51c8fb28dcb4bc2323d4dfaec74298ab929eee7c991916c2b.png" />
                        <div className="Profile-player--summary">
                          <h1 id="user-display" className="Profile-player--name">Ligma</h1>
                        </div>
                      </div>
                      <h2 className="Profile-player--title" />
                      <div className="Profile-player--info"><span className="Profile-player--endorsementWrapper"><img alt="" id="user-endorsment" className="Profile-playerSummary--endorsement" src="https://static.playoverwatch.com/img/pages/career/icons/endorsement/2-8b9f0faa25.svg#icon" /></span>
                        <div className="mouseKeyboard-view Profile-playerSummary--rankWrapper is-active">
                          <div className="Profile-playerSummary--roleWrapper">
                            <div className="Profile-playerSummary--role"><img alt="" src="https://static.playoverwatch.com/img/pages/career/icons/role/tank-f64702b684.svg#icon" />
                            </div><img alt="" className="Profile-playerSummary--rank" id="tank-rank" src="https://static.playoverwatch.com/img/pages/career/icons/rank/BronzeTier-2-a5bc9cc7f7.png" />
                          </div>
                          <div className="Profile-playerSummary--roleWrapper">
                            <div className="Profile-playerSummary--role"><img alt="" src="https://static.playoverwatch.com/img/pages/career/icons/role/offense-ab1756f419.svg#icon" />
                            </div><img alt="" className="Profile-playerSummary--rank" id="damage-rank" src="https://static.playoverwatch.com/img/pages/career/icons/rank/GoldTier--f715b68968.png" />
                          </div>
                          <div className="Profile-playerSummary--roleWrapper">
                            <div className="Profile-playerSummary--role"><img alt="" src="https://static.playoverwatch.com/img/pages/career/icons/role/support-0258e13d85.svg#icon" />
                            </div><img alt="" className="Profile-playerSummary--rank" id="support-rank" src="https://static.playoverwatch.com/img/pages/career/icons/rank/BronzeTier-1-5daef87bda.png" />
                          </div>
                        </div>
                        <div className="controller-view Profile-playerSummary--rankWrapper">
                          <div id="elim-plot" className="border">
                          </div>
                        </div>
                      </div>
                      <div className="Profile-player--filters">
                        <blz-button className="Profile-player--filter is-active" id="mouseKeyboardFilter" analytics-status="enabled" analytics-event="ctaOther" analytics-label="PC" analytics-placement="profiles" listening>
                          <blz-icon icon="bn-desktop-filled" size={300} listening />PC
                        </blz-button>
                        <blz-button className="Profile-player--filter" id="controllerFilter" analytics-status="enabled" analytics-event="ctaOther" analytics-label="Console" analytics-placement="profiles" listening>
                          <blz-icon icon="bn-console-filled" size={300} listening />Console
                        </blz-button>
                      </div>
                      <div className="border">
                        <h1 className="Profile-player--name">Recent Matches</h1>
                        <div id="match-container" className="card-container">
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div>
                              <table className="stats-table">
                                <tbody><tr>
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
                                </tbody></table>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                          <div id="base-card" className="card border">
                            <img alt="" className="map-card border" />
                            <div className="hero-cards">
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                              <img alt="" className="hero-card border" />
                            </div>
                            <div className="row map-info">
                              <p>King's Row</p>
                              <p>|</p>
                              <p>15/12/22</p>
                            </div>
                            <div className="card-info row">
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>O</p>
                              <p>H</p>
                              <p>M</p>
                            </div>
                            <div className="card-info row">
                              <p>26</p>
                              <p>12</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                              <p>8</p>
                            </div>
                            <div className="rating">
                              5 Star Game
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
              )
    }

