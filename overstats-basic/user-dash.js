
export function Dashboard() {
    return (
        `<div class="Profile-player">
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


</div>`)
}

