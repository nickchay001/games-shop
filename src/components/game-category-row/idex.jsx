

export const GameCategoryRow = ({ category = '' }) => {
    return (
        <li className="game-category">
            <h2>
                {category}
            </h2>
        </li>
    )
}
