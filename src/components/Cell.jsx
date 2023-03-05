export const Cell = ({ value, onClick }) => {
    const activeClassName = value || '';
    return (
        <div className={`cell ${activeClassName}`} onClick={onClick}></div>
    )
}