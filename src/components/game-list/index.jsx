import { GameCategoryRow } from "../game-category-row/idex"
import { GameRow } from "../game-row"


export const GameList = ({
    games = [],
    filterText = '',
    inWhishListOnly = false,
}) => {

    const rows = []
    let lastCategory = ''

    games.forEach(
        (game) => {

            if(game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                return
            }

            if(inWhishListOnly && !game.inWhishList) {
                return
            }

            if (game.category !== lastCategory) {
                rows.push(<GameCategoryRow category={game.category} key={game.category} />)
            }

            rows.push(<GameRow game={game} key={game.name} />)

            lastCategory = game.category
        }


    )
    return (
        <ul className="game-list">
            {rows}
        </ul>
    )
}
