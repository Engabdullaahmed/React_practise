function List() {
    const arr = [{ id: 1, name: 'html' }, { id: 2, name: 'css' },
    { id: 3, name: 'js' }];
    const li = arr.map((el) => {
        // return el + "___";
        // return <li>{el}</li>
        return <li key={arr.id}>{el}</li>
    })
    console.log(li);
    return (
        <ul>
            {/* <li>html</li>
            <li>css</li>
            <li>js</li> */}
            {li}
        </ul>
    );
}
export default List;    