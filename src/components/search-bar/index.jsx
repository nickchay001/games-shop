

export const SearchBar = ({
    filterText = '',
    inWhishListOnly = false,
    setFilterText = () => null,
    setInWhishListOnly = () => null
}) => {
    return (
        <form className="filter-form">
            <input
                type="text"
                className="search-input "
                placeholder="Поиск по названию"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value) }
            />
            <label >
                <input
                    type="checkbox"
                    className="in-whish-list-checkbox"
                    value={inWhishListOnly}
                    onChange={(e) => setInWhishListOnly(e.target.checked) }
                />
                Только в списке желаемого
            </label>
        </form>
    )
}