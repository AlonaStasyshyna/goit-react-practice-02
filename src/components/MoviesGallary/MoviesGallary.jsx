export const MoviesGallary = ({ movies }) => {
    return (
        <ul>
            {movies.map(({id, title}) => {
                return (
                    <li key={id}>
                        <h2>{title}</h2>
                        <button type="button">Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}