function App() {
    const cardList = [
        "Work Experience",
        "Mini-Games",
        "Professional Links",
        "Arts",
        "Music",
        "Food"
    ]

    return (
        <>{
            cardList.map((card) => {
                return `${card} | `
            })}
        </>
    );
}

export default App;
